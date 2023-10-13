import FormData from 'form-data';
import nodeFetch, { RequestInit } from 'node-fetch';
import { Readable } from 'stream';
import { Authentication } from './auth';
import { NetworkSession, getRetryTimeout } from './network';
import { ByteStream, isBrowser } from './utils';

const sdkVersion = '0.1.0';
export const userAgentHeader = `Box JavaScript generated SDK v${sdkVersion} (Node ${process.version})`;
export const xBoxUaHeader = constructBoxUAHeader();

export interface MultipartItem {
  readonly partName: string;
  readonly body?: string;
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
   * Request body
   */
  readonly body?: string;

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
}

export interface FetchResponse {
  /**
   * The status code of the response. (This will be 200 for a success).
   */
  readonly status: number;

  /**
   * Text representation of the response body
   */
  readonly text: string;

  /**
   * Binary array buffer of response body
   */
  readonly content: ByteStream;
}

async function createFetchOptions(options: FetchOptions): Promise<RequestInit> {
  const {
    method = 'GET',
    headers = {},
    params = {},
    body,
    fileStream,
  } = options;
  let fetchOptions = {} as RequestInit;
  let contentType = options.contentType ?? 'application/json';
  let requestBody: any = fileStream ?? body;

  if (options.multipartData) {
    const formData = new FormData();
    for (const item of options.multipartData) {
      if (item.fileStream) {
        const buffer = await readStream(item.fileStream);
        headers['content-md5'] = await calculateMD5Hash(buffer);
        formData.append(item.partName, buffer, {
          filename: item.fileName ?? 'file',
          contentType: item.contentType ?? 'application/octet-stream',
        });
      } else if (item.body) {
        formData.append(item.partName, item.body);
      } else {
        throw new Error('Multipart item must have either body or fileStream');
      }
    }

    contentType = `multipart/form-data; boundary=${formData.getBoundary()}`;
    requestBody = formData;
  }

  fetchOptions = {
    method,
    headers: {
      'Content-Type': contentType,
      ...headers,
      ...(options.auth && {
        Authorization: `Bearer ${
          (await options.auth.retrieveToken(options.networkSession)).accessToken
        }`,
      }),
      'User-Agent': userAgentHeader,
      'X-Box-UA': xBoxUaHeader,
      ...(options.networkSession?.asUserId && {
        'As-User': options.networkSession!.asUserId!,
      }),
    },
    body: requestBody,
  };

  return fetchOptions;
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
  let fetchOptions = await createFetchOptions(options);

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

  let responseBytesBuffer: any;
  let readable: Readable;
  // The browser fetch API does not support response.buffer() and Readable.from()
  if (isBrowser()) {
    responseBytesBuffer = await response.arrayBuffer();
    readable = new Readable({
      read(size) {
        const uint8Array = new Uint8Array(responseBytesBuffer);
        this.push(uint8Array);
        this.push(null);
      },
    });
  } else {
    responseBytesBuffer = await response.buffer();
    readable = Readable.from(responseBytesBuffer);
  }
  return {
    status: response.status,
    text: new TextDecoder().decode(responseBytesBuffer),
    content: readable,
  };
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
  } else {
    // Node environment
    createHash = eval('require')('crypto').createHash;
    return createHash('sha1').update(data).digest('hex');
  }
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
    env: `Node/${process.version.replace('v', '')}`,
  } as Record<string, string>;

  return Object.keys(analyticsIdentifiers)
    .map((k) => `${k}=${analyticsIdentifiers[k]}`)
    .join('; ');
}
