import nodeFetch, { RequestInit } from 'node-fetch';
import type { Readable } from 'stream';

import { BoxApiError, BoxSdkError } from '../box/errors';
import {
  ByteStream,
  CancellationToken,
  generateByteStreamFromBuffer,
  isBrowser,
} from '../internal/utils';
import { sdkVersion } from './version';
import {
  SerializedData,
  jsonToSerializedData,
  sdIsMap,
  sdToJson,
  sdToUrlParams,
} from '../serialization/json';
import { Authentication } from './auth.generated';
import { getRetryTimeout } from './getRetryTimeout';
import { Interceptor } from './interceptors.generated';
import { NetworkSession } from './network.generated';

export const userAgentHeader = `Box JavaScript generated SDK v${sdkVersion} (${
  isBrowser() ? navigator.userAgent : `Node ${process.version}`
})`;
export const xBoxUaHeader = constructBoxUAHeader();

export interface MultipartItem {
  readonly partName: string;
  readonly data?: SerializedData;
  readonly fileStream?: ByteStream;
  readonly fileName?: string;
  readonly contentType?: string;
}

export interface FetchOptions {
  /**
   * A string to set request's method (GET, POST, etc.). Defaults to GET.
   */
  readonly method?: string;
  /**
   * [key1, value1, key2, value2, ...]
   */
  readonly headers?: {
    [key: string]: string;
  };
  /**
   * query params
   * [key1, value1, key2, value2, ...]
   */
  readonly params?: {
    [key: string]: string;
  };

  /**
   * Request body data
   */
  readonly data?: SerializedData;

  /**
   * Stream of a file
   */
  readonly fileStream?: ByteStream;

  /**
   * Parts of multipart data
   */
  readonly multipartData?: MultipartItem[];

  /**
   * Request body content type
   */
  readonly contentType?: string;

  /**
   * Expected format of the response: 'json', 'binary' or undefined
   */
  readonly responseFormat?: string;

  /**
   * Auth object
   */
  readonly auth?: Authentication;
  /**
   *
   */
  readonly networkSession?: NetworkSession;

  /**
   * Token used for request cancellation
   */
  readonly cancellationToken?: CancellationToken;
}

export interface FetchResponse {
  /**
   * The status code of the response. (This will be 200 for a success).
   */
  readonly status: number;

  /**
   * Response body data
   */
  readonly data: SerializedData;

  /**
   * Binary array buffer of response body
   */
  readonly content: ByteStream;

  readonly headers: {
    [key: string]: string;
  };
}

async function createRequestInit(options: FetchOptions): Promise<RequestInit> {
  const {
    method = 'GET',
    headers = {},
    contentType: contentTypeInput = 'application/json',
    data,
    fileStream,
  } = options;

  const { contentType, body } = await (async (): Promise<{
    contentType: string;
    body: Readable | string;
  }> => {
    if (options.multipartData) {
      const FormData = isBrowser()
        ? window.FormData
        : eval('require')('form-data');
      const formData = new FormData();
      for (const item of options.multipartData) {
        if (item.fileStream) {
          const buffer = await readStream(item.fileStream);
          headers['content-md5'] = await calculateMD5Hash(buffer);
          formData.append(item.partName, buffer, {
            filename: item.fileName ?? 'file',
            contentType: item.contentType ?? 'application/octet-stream',
          });
        } else if (item.data) {
          formData.append(item.partName, sdToJson(item.data));
        } else {
          throw new BoxSdkError({
            message: 'Multipart item must have either body or fileStream',
          });
        }
      }

      return {
        contentType: `multipart/form-data; boundary=${formData.getBoundary()}`,
        body: formData,
      };
    }

    const contentType = contentTypeInput;
    switch (contentType) {
      case 'application/json':
      case 'application/json-patch+json':
        return { contentType, body: sdToJson(data) };

      case 'application/x-www-form-urlencoded':
        return { contentType, body: sdToUrlParams(data) };

      case 'application/octet-stream':
        if (!fileStream) {
          throw new BoxSdkError({
            message:
              'fileStream required for application/octet-stream content type',
          });
        }
        return { contentType, body: fileStream };

      default:
        throw new BoxSdkError({
          message: `Unsupported content type : ${contentType}`,
        });
    }
  })();

  return {
    method,
    headers: {
      ...options.networkSession?.additionalHeaders,
      'Content-Type': contentType,
      ...headers,
      ...(options.auth && {
        Authorization: await options.auth.retrieveAuthorizationHeader(
          options.networkSession
        ),
      }),
      'User-Agent': userAgentHeader,
      'X-Box-UA': xBoxUaHeader,
    },
    body,
    signal: options.cancellationToken as RequestInit['signal'],
  };
}

const DEFAULT_MAX_ATTEMPTS = 5;
const RETRY_BASE_INTERVAL = 1;

export async function fetch(
  resource: string,
  options: FetchOptions & {
    /** @private */
    numRetries?: number;
  }
): Promise<FetchResponse> {
  const fetchOptions: typeof options = options.networkSession?.interceptors
    ?.length
    ? options.networkSession?.interceptors.reduce(
        (modifiedOptions: FetchOptions, interceptor: Interceptor) =>
          interceptor.beforeRequest(modifiedOptions),
        options
      )
    : options;

  const requestInit = await createRequestInit(fetchOptions);

  const { params = {} } = fetchOptions;
  const response = await nodeFetch(
    ''.concat(
      resource,
      Object.keys(params).length === 0 || resource.endsWith('?') ? '' : '?',
      new URLSearchParams(params).toString()
    ),
    { ...requestInit, redirect: 'manual' }
  );

  const contentType = response.headers.get('content-type') ?? '';
  const responseBytesBuffer = await response.arrayBuffer();

  const data = ((): SerializedData => {
    if (contentType.includes('application/json')) {
      const text = new TextDecoder().decode(responseBytesBuffer);
      return jsonToSerializedData(text);
    }
    return void 0;
  })();

  const content = generateByteStreamFromBuffer(responseBytesBuffer);

  let fetchResponse: FetchResponse = {
    status: response.status,
    data,
    content,
    headers: Object.fromEntries(Array.from(response.headers.entries())),
  };
  if (fetchOptions.networkSession?.interceptors?.length) {
    fetchResponse = fetchOptions.networkSession?.interceptors.reduce(
      (modifiedResponse: FetchResponse, interceptor: Interceptor) =>
        interceptor.afterRequest(modifiedResponse),
      fetchResponse
    );
  }

  if (fetchResponse.status >= 300 && fetchResponse.status < 400) {
    if (!fetchResponse.headers['location']) {
      throw new BoxSdkError({
        message: `Unable to follow redirect for ${resource}`,
      });
    }
    return fetch(fetchResponse.headers['location'], options);
  }

  if (fetchResponse.status >= 400) {
    const { numRetries = 0 } = fetchOptions;

    const reauthenticationNeeded = fetchResponse.status == 401;
    if (reauthenticationNeeded && fetchOptions.auth) {
      await fetchOptions.auth.refreshToken(fetchOptions.networkSession);

      // retry the request right away
      return fetch(resource, { ...fetchOptions, numRetries: numRetries + 1 });
    }

    const isRetryable =
      fetchOptions.contentType !== 'application/x-www-form-urlencoded' &&
      (fetchResponse.status === 429 || fetchResponse.status >= 500);

    if (isRetryable && numRetries < DEFAULT_MAX_ATTEMPTS) {
      const retryTimeout = fetchResponse.headers['retry-after']
        ? parseFloat(fetchResponse.headers['retry-after']!) * 1000
        : getRetryTimeout(numRetries, RETRY_BASE_INTERVAL * 1000);

      await new Promise((resolve) => setTimeout(resolve, retryTimeout));
      return fetch(resource, { ...fetchOptions, numRetries: numRetries + 1 });
    }

    const [code, contextInfo, requestId, helpUrl] = sdIsMap(fetchResponse.data)
      ? [
          sdToJson(fetchResponse.data['code']),
          sdIsMap(fetchResponse.data['context_info'])
            ? fetchResponse.data['context_info']
            : undefined,
          sdToJson(fetchResponse.data['request_id']),
          sdToJson(fetchResponse.data['help_url']),
        ]
      : [];

    throw new BoxApiError({
      message: `${fetchResponse.status}`,
      timestamp: `${Date.now()}`,
      requestInfo: {
        method: requestInit.method!,
        url: resource,
        queryParams: params,
        headers: (requestInit.headers as { [key: string]: string }) ?? {},
        body: requestInit.body,
      },
      responseInfo: {
        statusCode: fetchResponse.status,
        headers: fetchResponse.headers,
        body: fetchResponse.data,
        rawBody: new TextDecoder().decode(responseBytesBuffer),
        code: code,
        contextInfo: contextInfo,
        requestId: requestId,
        helpUrl: helpUrl,
      },
      name: 'BoxApiError',
    });
  }

  return fetchResponse;
}

async function calculateMD5Hash(data: string | Buffer): Promise<string> {
  /**
   * Calculate the SHA1 hash of the data
   */
  let createHash: any;
  // Browser environment
  if (isBrowser()) {
    let dataBuffer =
      typeof data === 'string' ? new TextEncoder().encode(data) : data;
    let hashBuffer = await window.crypto.subtle.digest('SHA-1', dataBuffer);
    let hashArray = Array.from(new Uint8Array(hashBuffer));
    let hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  }

  // Node environment
  createHash = eval('require')('crypto').createHash;
  return createHash('sha1').update(data).digest('hex');
}

async function readStream(fileStream: Readable): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: any[] = [];
    fileStream.on('data', (chunk: Buffer) => chunks.push(chunk));
    fileStream.on('end', () => {
      resolve(Buffer.concat(chunks));
    });
    fileStream.on('error', (err: Error) => reject(err));
  });
}

function constructBoxUAHeader() {
  const analyticsIdentifiers = {
    agent: `box-javascript-generated-sdk/${sdkVersion}`,
    env: isBrowser()
      ? navigator.userAgent
      : `Node/${process.version.replace('v', '')}`,
  } as Record<string, string>;

  return Object.keys(analyticsIdentifiers)
    .map((k) => `${k}=${analyticsIdentifiers[k]}`)
    .join('; ');
}
