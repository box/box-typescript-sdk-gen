import nodeFetch, { RequestInit } from 'node-fetch';
import type { Readable } from 'stream';
import { Authentication } from './auth';
import {
  jsonToSerializedData,
  sdToJson,
  sdToUrlParams,
  SerializedData,
} from './json';
import { getRetryTimeout, NetworkSession } from './network';
import {
  ByteStream,
  CancellationToken,
  generateByteStreamFromBuffer,
  isBrowser,
} from './utils';

const sdkVersion = '0.1.0';
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
}

async function createFetchOptions(options: FetchOptions): Promise<RequestInit> {
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
          throw new Error('Multipart item must have either body or fileStream');
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
          throw new Error(
            'fileStream required for application/octet-stream content type'
          );
        }
        return { contentType, body: fileStream };

      default:
        throw new Error(`Unsupported content type : ${contentType}`);
    }
  })();

  return {
    method,
    headers: {
      ...options.networkSession?.additionalHeaders,
      'Content-Type': contentType,
      ...headers,
      ...(options.auth && {
        Authorization: `Bearer ${
          (await options.auth.retrieveToken(options.networkSession)).accessToken
        }`,
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
  const { params = {} } = options;
  const fetchOptions = await createFetchOptions(options);

  const response = await nodeFetch(
    ''.concat(
      resource,
      Object.keys(params).length === 0 || resource.endsWith('?') ? '' : '?',
      new URLSearchParams(params).toString()
    ),
    fetchOptions
  );

  if (!response.ok) {
    const { numRetries = 0 } = options;

    const reauthenticationNeeded = response.status == 401;
    if (reauthenticationNeeded) {
      await options.auth?.refreshToken(options.networkSession);

      // retry the request right away
      return fetch(resource, { ...options, numRetries: numRetries + 1 });
    }

    const isRetryable =
      options.contentType !== 'application/x-www-form-urlencoded' &&
      (response.status === 429 || response.status >= 500);

    if (isRetryable && numRetries < DEFAULT_MAX_ATTEMPTS) {
      const retryTimeout = response.headers.has('retry-after')
        ? parseFloat(response.headers.get('retry-after')!) * 1000
        : getRetryTimeout(numRetries, RETRY_BASE_INTERVAL * 1000);

      await new Promise((resolve) => setTimeout(resolve, retryTimeout));
      return fetch(resource, { ...options, numRetries: numRetries + 1 });
    }

    let responseBody = await response.text();
    if (response.headers.get('content-type')?.startsWith('application/json')) {
      try {
        responseBody = JSON.stringify(JSON.parse(responseBody), null, 2);
      } catch (e) {
        // ignore
      }
    }

    throw new Error(
      `Request failed, status code ${response.status}: ${response.statusText}\n
      ${responseBody}`
    );
  }

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
  const { status } = response;

  return { status, data, content };
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
