import { Buffer } from 'buffer';
import type { Readable } from 'stream';
import { v4 as uuidv4 } from 'uuid';
import { SignJWT, importPKCS8 } from 'jose';
import { createHMAC, createSHA1, createSHA256 } from 'hash-wasm';

export function isBrowser() {
  return (
    typeof window === 'object' && typeof document === 'object' && window.crypto
  );
}

export function evalRequire(lib: string) {
  if (isBrowser()) {
    throw new Error('This method is not usable in the browser');
  }
  return require(lib);
}

export function getUuid() {
  return uuidv4();
}

export function decodeBase64(value: string) {
  return Buffer.from(value, 'base64').toString('utf8');
}

export function hexToBase64(data: string): string {
  return Buffer.from(data, 'hex').toString('base64');
}

export { Buffer, Readable as ByteStream };
export type { CancellationController, CancellationToken };
export type Iterator<T = any> = AsyncIterator<T>;
export type AgentOptions = any;
export type Agent = any;

// using wrappers for date/datetime because of inability to export built-in Date types
class DateWrapper {
  constructor(public readonly value: Date) {}
}

class DateTimeWrapper {
  constructor(public readonly value: Date) {}
}

export { DateWrapper as Date, DateTimeWrapper as DateTime };

export function dateFromString(value: string): DateWrapper {
  return new DateWrapper(new Date(value));
}

export function dateToString(date: DateWrapper): string {
  return date.value.toISOString().match(/^\d{4}-\d{2}-\d{2}/)![0];
}

export function dateTimeFromString(value: string): DateTimeWrapper {
  return new DateTimeWrapper(new Date(value));
}

export function dateTimeToString(dateTime: DateTimeWrapper): string {
  return (
    dateTime.value
      .toISOString()
      .match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)![0] + '+00:00'
  );
}

export function epochSecondsToDateTime(seconds: number): DateTimeWrapper {
  return new DateTimeWrapper(new Date(seconds * 1000));
}

export function dateTimeToEpochSeconds(dateTime: DateTimeWrapper): number {
  return Math.floor(dateTime.value.getTime() / 1000);
}

export {
  dateToString as serializeDate,
  dateFromString as deserializeDate,
  dateTimeToString as serializeDateTime,
  dateTimeFromString as deserializeDateTime,
};

// Function to convert a hexadecimal string to base64
export function hexStrToBase64(hex: string) {
  const hexString = hex.toString(); // Ensure the input is a string
  const hexBytes = new Uint8Array(hexString.length / 2);

  // Convert the hexadecimal string to bytes
  for (let i = 0; i < hexString.length; i += 2) {
    hexBytes[i / 2] = parseInt(hexString.substr(i, 2), 16);
  }

  // Encode the bytes as base64
  const base64 = btoa(String.fromCharCode.apply(null, Array.from(hexBytes)));

  return base64;
}

export type HashName = 'sha1';
export type DigestHashType = 'base64';

export class Hash {
  #hash: any;
  algorithm: HashName;

  constructor({ algorithm }: { algorithm: HashName }) {
    this.algorithm = algorithm;
    if (isBrowser()) {
      this.#hash = undefined;
    } else {
      this.#hash = evalRequire('crypto').createHash(algorithm);
    }
  }

  async initializeBrowserHash() {
    switch (this.algorithm) {
      case 'sha1':
        this.#hash = await createSHA1();
        this.#hash.init();
        break;
      default:
        throw new Error(`Unsupported algorithm: ${this.algorithm}`);
    }
  }

  async updateHash(data: Buffer) {
    if (isBrowser()) {
      if (!this.#hash) {
        await this.initializeBrowserHash();
      }
    }
    this.#hash.update(data);
  }

  async digestHash(encoding: DigestHashType = 'base64'): Promise<string> {
    if (isBrowser()) {
      if (!this.#hash) {
        await this.initializeBrowserHash();
      }
      const d = this.#hash.digest('binary');
      switch (encoding) {
        case 'base64':
          return Buffer.from(d).toString('base64');
        default:
          throw new Error(`Unsupported encoding: ${encoding}`);
      }
    }
    return this.#hash.digest(encoding);
  }
}

export function getEnvVar(name: string) {
  return process.env[name] || '';
}

export function generateByteBuffer(size: number): Buffer {
  if (isBrowser()) {
    const buffer = new Uint8Array(size);
    window.crypto.getRandomValues(buffer);
    return Buffer.from(buffer);
  }
  const crypto = evalRequire('crypto');
  return crypto.randomBytes(size);
}

export function generateByteStreamFromBuffer(
  buffer: Buffer | ArrayBuffer,
): Readable {
  return isBrowser()
    ? new ReadableStream<Uint8Array>({
        start(controller) {
          controller.enqueue(new Uint8Array(buffer));
          controller.close();
        },
      })
    : evalRequire('stream').Readable.from(Buffer.from(buffer));
}

export function generateByteStream(size: number): Readable {
  return generateByteStreamFromBuffer(generateByteBuffer(size));
}

export function bufferEquals(buffer1: Buffer, buffer2: Buffer): boolean {
  return Buffer.compare(buffer1, buffer2) === 0;
}

export function bufferLength(buffer: Buffer): number {
  return buffer.length;
}

export function decodeBase64ByteStream(data: string): Readable {
  return isBrowser()
    ? new ReadableStream<Uint8Array>({
        start(controller) {
          const decodedStr = atob(data);
          const buffer = new ArrayBuffer(decodedStr.length);
          const array = new Uint8Array(buffer);
          for (let i = 0; i < decodedStr.length; i++) {
            array[i] = decodedStr.charCodeAt(i);
          }
          controller.enqueue(array);
          controller.close();
        },
      })
    : evalRequire('stream').Readable.from(Buffer.from(data, 'base64'));
}

export function stringToByteStream(data: string): Readable {
  return isBrowser()
    ? new ReadableStream<Uint8Array>({
        start(controller) {
          const buffer = new ArrayBuffer(data.length);
          const array = new Uint8Array(buffer);
          for (let i = 0; i < data.length; i++) {
            array[i] = data.charCodeAt(i);
          }
          controller.enqueue(array);
          controller.close();
        },
      })
    : evalRequire('stream').Readable.from(Buffer.from(data, 'ascii'));
}

export async function readByteStream(byteStream: Readable): Promise<Buffer> {
  const buffers: Buffer[] = [];
  for await (const data of byteStream) {
    buffers.push(data);
  }
  return Buffer.concat(buffers);
}

export async function* iterateChunks(
  stream: Readable,
  chunkSize: number,
  fileSize: number,
): Iterator<Readable> {
  let buffers: Buffer[] = [];
  let totalSize = 0;
  let consumedSize = 0;
  while (consumedSize < fileSize && !stream.readableEnded) {
    for await (const chunk of stream) {
      const data = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
      if (!Buffer.isBuffer(data)) {
        throw new Error('Expecting a chunk of stream to be a Buffer');
      }
      consumedSize += data.length;
      buffers.push(data);
      totalSize += data.length;

      if (totalSize < chunkSize) {
        continue;
      }

      const buffer = Buffer.concat(buffers);

      let start = 0;
      while (totalSize >= chunkSize) {
        yield generateByteStreamFromBuffer(
          buffer.subarray(start, start + chunkSize),
        );
        start += chunkSize;
        totalSize -= chunkSize;
      }

      buffers = totalSize > 0 ? [buffer.subarray(start)] : [];
    }
  }

  if (consumedSize !== fileSize) {
    throw new Error(
      `Stream size ${consumedSize} does not match expected file size ${fileSize}`,
    );
  }
  if (totalSize > 0) {
    yield generateByteStreamFromBuffer(Buffer.concat(buffers));
  }
}

export async function reduceIterator<T, U>(
  iterator: Iterator<T>,
  reducer: (accumulator: U, current: T) => Promise<U>,
  initialValue: U,
): Promise<U> {
  let result = initialValue;
  let iteration = await iterator.next();

  while (!iteration.done) {
    result = await reducer(result, iteration.value);
    iteration = await iterator.next();
  }

  return result;
}

export function prepareParams(map: {
  readonly [key: string]: undefined | string;
}): { readonly [key: string]: string } {
  if (!map || typeof map !== 'object') {
    throw new Error('Expecting obj to be an object in prepareParams');
  }
  return Object.fromEntries(
    Object.entries(map).filter<[string, string]>(
      (entry): entry is [string, string] => typeof entry[1] === 'string',
    ),
  );
}

export function toString(value: any): string {
  if (typeof value === 'string' || value == null) {
    return value;
  }
  return String(value);
}

type CancellationController = AbortController;
type CancellationToken = AbortSignal;

/**
 * Creates a cancellation token that will be cancelled after a given delay in ms.
 *
 * @param {number} delay Delay in ms.
 * @returns {CancellationToken} Cancellation token.
 */
export function createTokenAndCancelAfter(delay: number): CancellationToken {
  return AbortSignal.timeout(delay);
}

export type JwtKey = {
  key: string;
  passphrase: string;
};

export type JwtAlgorithm =
  | 'HS256'
  | 'HS384'
  | 'HS512'
  | 'RS256'
  | 'RS384'
  | 'RS512'
  | 'ES256'
  | 'ES384'
  | 'ES512'
  | 'PS256'
  | 'PS384'
  | 'PS512'
  | 'none';

export type JwtSignOptions = {
  algorithm?: JwtAlgorithm;
  keyid?: string | undefined;
  expiresIn?: string | number | undefined;
  notBefore?: string | number | undefined;
  audience?: string | string[] | undefined;
  subject?: string | undefined;
  issuer?: string | undefined;
  jwtid?: string | undefined;
};

/**
 * Creates a JWT assertion.
 *
 * @param claims
 * @param key
 * @param options
 * @returns
 */
export async function createJwtAssertion(
  claims: {
    readonly [key: string]: any;
  },
  key: JwtKey,
  options: JwtSignOptions,
): Promise<string> {
  const crypto = evalRequire('crypto');
  const privateKey = crypto.createPrivateKey({
    key: key.key,
    format: 'pem',
    type: 'pkcs8',
    passphrase: key.passphrase,
  });
  const pem = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString();
  const pkcs8 = await importPKCS8(pem, options.algorithm || 'RS256');
  let signer = new SignJWT(claims);
  signer = options.audience ? signer.setAudience(options.audience) : signer;
  signer = options.expiresIn
    ? signer.setExpirationTime(options.expiresIn)
    : signer;
  signer = options.issuer ? signer.setIssuer(options.issuer) : signer;
  signer = options.jwtid ? signer.setJti(options.jwtid) : signer;
  signer = options.notBefore ? signer.setNotBefore(options.notBefore) : signer;
  signer = options.subject ? signer.setSubject(options.subject) : signer;
  signer = options.algorithm
    ? signer.setProtectedHeader({ alg: options.algorithm })
    : signer;
  signer = signer.setIssuedAt();
  return await signer.sign(pkcs8);
}

/**
 * Reads a text file and returns its content.
 */
export function readTextFromFile(filepath: string): string {
  return evalRequire('fs').readFileSync(filepath, 'utf8');
}

/**
 * Get current epoch time in seconds.
 */
export function getEpochTimeInSeconds(): number {
  return Math.floor(Date.now() / 1000);
}

/**
 * Create web agent from proxy agent options.
 */
export function createAgent(options?: AgentOptions, proxyConfig?: any): Agent {
  if (isBrowser()) {
    return undefined;
  }
  const ProxyAgent = evalRequire('proxy-agent').ProxyAgent;
  let agentOptions = options;

  if (proxyConfig && proxyConfig.url) {
    if (!proxyConfig.url.startsWith('http')) {
      throw new Error('Invalid proxy URL');
    }

    const proxyHost = proxyConfig.url.split('//')[1];
    const proxyAuth =
      proxyConfig.username && proxyConfig.password
        ? `${proxyConfig.username}:${proxyConfig.password}@`
        : '';
    const proxyUrl = `http://${proxyAuth}${proxyHost}`;
    agentOptions = Object.assign(
      { getProxyForUrl: (url: string) => proxyUrl },
      options || {},
    );
  }

  return agentOptions ? new ProxyAgent(agentOptions) : new ProxyAgent();
}

export async function delayInSeconds(seconds: number): Promise<void> {
  return await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

/**
 * Get value from object raw data.
 *
 * @param obj Object with raw data from which to get the value.
 * @param key Key of the value to get.
 * @returns Value from object raw data.
 */
export function getValueFromObjectRawData(obj: any, key: string): any {
  if (!obj || typeof obj !== 'object' || !obj.rawData) {
    return undefined;
  }
  return key.split('.').reduce((value, k) => value?.[k], obj.rawData);
}

/**
 * Create a null value.
 *
 * @returns null
 */
export function createNull(): null {
  return null;
}

/**
 * Create a cancellation controller.
 */
export function createCancellationController(): CancellationController {
  return new AbortController();
}

/**
 * Stringify JSON with escaped multibyte Unicode characters to ensure computed signatures match PHP's default behavior
 *
 * @param {Object} body - The parsed JSON object
 * @returns {string} - Stringified JSON with escaped multibyte Unicode characters
 * @private
 */
export function jsonStringifyWithEscapedUnicode(body: string) {
  return body.replace(
    /[\u007f-\uffff]/g,
    (char) => `\\u${`0000${char.charCodeAt(0).toString(16)}`.slice(-4)}`,
  );
}

/**
 * Compute the message signature
 * @see {@Link https://developer.box.com/en/guides/webhooks/handle/setup-signatures/}
 *
 * @param {string} body - The request body of the webhook message
 * @param {Object} headers - The request headers of the webhook message
 * @param {string} signatureKey - The signature to verify the message with
 * @returns {?string} - The message signature (or null, if it can't be computed)
 * @private
 */
export async function computeWebhookSignature(
  body: string,
  headers: {
    [key: string]: string;
  },
  signatureKey: string,
): Promise<string | null> {
  const escapedBody = jsonStringifyWithEscapedUnicode(body).replace(
    /\//g,
    '\\/',
  );
  if (headers['box-signature-version'] !== '1') {
    return null;
  }
  if (headers['box-signature-algorithm'] !== 'HmacSHA256') {
    return null;
  }
  let signature: string | null = null;
  if (isBrowser()) {
    const hashFunc = createSHA256();
    const hmac = await createHMAC(hashFunc, signatureKey);
    hmac.init();
    hmac.update(escapedBody);
    hmac.update(headers['box-delivery-timestamp']);
    const result = await hmac.digest('binary');
    signature = Buffer.from(result).toString('base64');
  } else {
    let crypto = evalRequire('crypto');
    let hmac = crypto.createHmac('sha256', signatureKey);
    hmac.update(escapedBody);
    hmac.update(headers['box-delivery-timestamp']);
    signature = hmac.digest('base64');
  }
  return signature;
}

export function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
