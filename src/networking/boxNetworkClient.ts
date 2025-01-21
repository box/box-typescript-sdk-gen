import nodeFetch, { RequestInit } from 'node-fetch';
import type { Readable } from 'stream';
import { sha1 } from 'hash-wasm'; // Use hash-wasm to calculate SHA1 hash in browser

import { BoxApiError, BoxSdkError } from '../box/errors';
import {
  ByteStream,
  evalRequire,
  generateByteStreamFromBuffer,
  isBrowser,
  readByteStream,
} from '../internal/utils';
import { sdkVersion } from './version';
import { NetworkClient } from './networkClient.generated';
import {
  SerializedData,
  jsonToSerializedData,
  sdIsMap,
  sdToJson,
  sdToUrlParams,
} from '../serialization/json';
import { Interceptor } from './interceptors.generated';
import { FetchOptions } from './fetchOptions.generated';
import { FetchResponse } from './fetchResponse.generated';
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

type FetchOptionsExtended = FetchOptions & {
  numRetries?: number;
};

async function createRequestInit(options: FetchOptions): Promise<RequestInit> {
  const {
    method = 'GET',
    headers = {},
    contentType: contentTypeInput = 'application/json',
    data,
    fileStream,
  } = options;

  const { contentHeaders = {}, body } = await (async (): Promise<{
    contentHeaders: { [key: string]: string };
    body: Readable | string | Buffer;
  }> => {
    const contentHeaders: { [key: string]: string } = {};
    if (options.multipartData) {
      const FormData = isBrowser() ? window.FormData : evalRequire('form-data');
      const formData = new FormData();
      for (const item of options.multipartData) {
        if (item.fileStream) {
          const buffer = await readByteStream(item.fileStream);
          const blob = isBrowser() ? new Blob([buffer]) : buffer;
          contentHeaders['content-md5'] = await calculateMD5Hash(buffer);
          formData.append(item.partName, blob, {
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
        contentHeaders: {
          ...(!isBrowser() && {
            'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
          }),
          ...contentHeaders,
        },
        body: formData,
      };
    }

    contentHeaders['Content-Type'] = contentTypeInput;
    switch (contentTypeInput) {
      case 'application/json':
      case 'application/json-patch+json':
        return { contentHeaders, body: sdToJson(data) };

      case 'application/x-www-form-urlencoded':
        return { contentHeaders, body: sdToUrlParams(data) };

      case 'application/octet-stream':
        if (!fileStream) {
          throw new BoxSdkError({
            message:
              'fileStream required for application/octet-stream content type',
          });
        }
        return {
          contentHeaders,
          body: isBrowser() ? await readByteStream(fileStream) : fileStream,
        };

      default:
        throw new BoxSdkError({
          message: `Unsupported content type : ${contentTypeInput}`,
        });
    }
  })();

  return {
    method,
    headers: {
      ...contentHeaders,
      ...headers,
      ...(options.auth && {
        Authorization: await options.auth.retrieveAuthorizationHeader(
          options.networkSession,
        ),
      }),
      'User-Agent': userAgentHeader,
      'X-Box-UA': xBoxUaHeader,
      // Additional headers will override the default headers
      ...options.networkSession?.additionalHeaders,
    },
    body,
    signal: options.cancellationToken as RequestInit['signal'],
    agent: options.networkSession?.agent,
    ...(fileStream && isBrowser() && { duplex: 'half' }),
  };
}

export class BoxNetworkClient implements NetworkClient {
  constructor(
    fields?: Omit<BoxNetworkClient, 'fetch'> &
      Partial<Pick<BoxNetworkClient, 'fetch'>>,
  ) {
    Object.assign(this, fields);
  }
  async fetch(options: FetchOptionsExtended): Promise<FetchResponse> {
    const numRetries = options.numRetries ?? 0;
    const networkSession = options.networkSession ?? new NetworkSession({});
    const fetchOptions: typeof options = networkSession.interceptors?.length
      ? networkSession.interceptors.reduce(
          (modifiedOptions: FetchOptions, interceptor: Interceptor) =>
            interceptor.beforeRequest(modifiedOptions),
          options,
        )
      : options;
    const fileStreamBuffer = fetchOptions.fileStream
      ? await readByteStream(fetchOptions.fileStream)
      : void 0;
    const requestInit = await createRequestInit({
      ...fetchOptions,
      fileStream: fileStreamBuffer
        ? generateByteStreamFromBuffer(fileStreamBuffer)
        : void 0,
    });

    const { params = {} } = fetchOptions;
    const response = await nodeFetch(
      ''.concat(
        fetchOptions.url,
        Object.keys(params).length === 0 || fetchOptions.url.endsWith('?')
          ? ''
          : '?',
        new URLSearchParams(params).toString(),
      ),
      { ...requestInit, redirect: isBrowser() ? 'follow' : 'manual' },
    );

    const contentType = response.headers.get('content-type') ?? '';
    const ignoreResponseBody = fetchOptions.followRedirects === false;
    const responseBytesBuffer = !ignoreResponseBody
      ? await response.arrayBuffer()
      : new Uint8Array();

    const data = ((): SerializedData => {
      if (!ignoreResponseBody && contentType.includes('application/json')) {
        const text = new TextDecoder().decode(responseBytesBuffer);
        return jsonToSerializedData(text);
      }
      return void 0;
    })();

    const content = generateByteStreamFromBuffer(responseBytesBuffer);

    let fetchResponse: FetchResponse = {
      url: response.url,
      status: response.status,
      data,
      content,
      headers: Object.fromEntries(Array.from(response.headers.entries())),
    };
    if (networkSession.interceptors?.length) {
      fetchResponse = networkSession.interceptors.reduce(
        (modifiedResponse: FetchResponse, interceptor: Interceptor) =>
          interceptor.afterRequest(modifiedResponse),
        fetchResponse,
      );
    }

    const shouldRetry = await networkSession.retryStrategy.shouldRetry(
      fetchOptions,
      fetchResponse,
      numRetries,
    );

    if (shouldRetry) {
      const retryTimeout = networkSession.retryStrategy.retryAfter(
        fetchOptions,
        fetchResponse,
        numRetries,
      );
      await new Promise((resolve) => setTimeout(resolve, retryTimeout));
      return this.fetch({ ...options, numRetries: numRetries + 1 });
    }

    if (
      fetchResponse.status >= 300 &&
      fetchResponse.status < 400 &&
      fetchOptions.followRedirects !== false
    ) {
      if (!fetchResponse.headers['location']) {
        throw new BoxSdkError({
          message: `Unable to follow redirect for ${fetchOptions.url}`,
        });
      }
      const sameOrigin =
        new URL(fetchResponse.headers['location']).origin ===
        new URL(fetchOptions.url).origin;
      return this.fetch({
        ...options,
        params: undefined,
        auth: sameOrigin ? fetchOptions.auth : undefined,
        url: fetchResponse.headers['location'],
      });
    }

    if (fetchResponse.status >= 200 && fetchResponse.status < 400) {
      return fetchResponse;
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
        url: fetchOptions.url,
        queryParams: params,
        headers: (requestInit.headers as { [key: string]: string }) ?? {},
        body:
          typeof requestInit.body === 'string' ? requestInit.body : undefined,
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
    });
  }
}

async function calculateMD5Hash(data: string | Buffer): Promise<string> {
  /**
   * Calculate the SHA1 hash of the data
   */
  let createHash: any;
  // Browser environment
  if (isBrowser()) {
    return await sha1(data);
  }

  // Node environment
  createHash = evalRequire('crypto').createHash;
  return createHash('sha1').update(data).digest('hex');
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

// Retry intervals are between 50% and 150% of the exponentially increasing base amount
const RETRY_RANDOMIZATION_FACTOR = 0.5;

/**
 * Calculate the exponential backoff time with randomized jitter
 * @param {int} numRetries Which retry number this one will be
 * @param {int} baseInterval The base retry interval set in config
 * @returns {int} The number of milliseconds after which to retry
 */
export function getRetryTimeout(numRetries: number, baseInterval: number) {
  var minRandomization = 1 - RETRY_RANDOMIZATION_FACTOR;
  var maxRandomization = 1 + RETRY_RANDOMIZATION_FACTOR;
  var randomization =
    Math.random() * (maxRandomization - minRandomization) + minRandomization;
  var exponential = Math.pow(2, numRetries - 1);
  return Math.ceil(exponential * baseInterval * randomization);
}
