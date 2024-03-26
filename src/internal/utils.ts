import { Buffer } from 'buffer';
import type { Readable } from 'stream';
import { v4 as uuidv4 } from 'uuid';
import { SignJWT, importPKCS8 } from 'jose';

export function isBrowser() {
  return (
    typeof window === 'object' && typeof document === 'object' && window.crypto
  );
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
export type { CancellationToken };
export type Iterator<T = any> = AsyncIterator<T>;
export type AgentOptions = any;
export type Agent = any;

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

export class Hash {
  #hash: any;
  #chunks: Uint8Array; // In browser environment, we need to buffer the chunks until we get the hash object
  algorithm: HashName;

  constructor({ algorithm }: { algorithm: HashName }) {
    this.algorithm = algorithm;
    this.#chunks = new Uint8Array();
    if (isBrowser()) {
      this.#hash = undefined;
    } else {
      this.#hash = eval('require')('crypto').createHash(algorithm);
    }
  }

  updateHash(data: Buffer) {
    if (isBrowser()) {
      let dataBuffer =
        typeof data === 'string' ? new TextEncoder().encode(data) : data;
      let newChunks = new Uint8Array(this.#chunks.length + dataBuffer.length);
      newChunks.set(this.#chunks);
      newChunks.set(dataBuffer, this.#chunks.length);
      this.#chunks = newChunks;
      return;
    }
    this.#hash.update(data);
  }

  async digestHash(encoding: 'base64'): Promise<string> {
    if (isBrowser()) {
      this.#hash = await window.crypto.subtle.digest(
        this.algorithm,
        this.#chunks
      );
      const hashArray = Array.from(new Uint8Array(this.#hash));
      const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
      if (encoding === 'base64') {
        return hexStrToBase64(hashHex);
      }
      return hashHex;
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
  const crypto = eval('require')('crypto');
  return crypto.randomBytes(size);
}

export function generateByteStreamFromBuffer(
  buffer: Buffer | ArrayBuffer
): Readable {
  return isBrowser()
    ? new ReadableStream<Uint8Array>({
        start(controller) {
          controller.enqueue(new Uint8Array(buffer));
          controller.close();
        },
      })
    : eval('require')('stream').Readable.from(Buffer.from(buffer));
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
    : eval('require')('stream').Readable.from(Buffer.from(data, 'base64'));
}

export async function readByteStream(byteStream: Readable) {
  const buffers: Buffer[] = [];
  for await (const data of byteStream) {
    buffers.push(data);
  }
  return Buffer.concat(buffers);
}

export async function* iterateChunks(
  stream: Readable,
  chunkSize: number
): Iterator<Readable> {
  let buffers: Buffer[] = [];
  let totalSize = 0;
  for await (const data of stream) {
    if (!Buffer.isBuffer(data)) {
      throw new Error('Expecting a chunk of stream to be a Buffer');
    }
    buffers.push(data);
    totalSize += data.length;

    if (totalSize < chunkSize) {
      continue;
    }

    const buffer = Buffer.concat(buffers);

    let start = 0;
    while (totalSize >= chunkSize) {
      yield generateByteStreamFromBuffer(
        buffer.subarray(start, start + chunkSize)
      );
      start += chunkSize;
      totalSize -= chunkSize;
    }

    buffers = totalSize > 0 ? [buffer.subarray(start)] : [];
  }

  if (totalSize > 0) {
    yield generateByteStreamFromBuffer(Buffer.concat(buffers));
  }
}

export async function reduceIterator<T, U>(
  iterator: Iterator<T>,
  reducer: (accumulator: U, current: T) => Promise<U>,
  initialValue: U
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
      (entry): entry is [string, string] => typeof entry[1] === 'string'
    )
  );
}

export function toString(value: any): string {
  if (typeof value === 'string' || value == null) {
    return value;
  }
  return String(value);
}

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
  options: JwtSignOptions
): Promise<string> {
  const crypto = eval('require')('crypto');
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
  return eval('require')('fs').readFileSync(filepath, 'utf8');
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
export function createAgent(options?: AgentOptions): Agent {
  if (isBrowser()) {
    return undefined;
  }
  const ProxyAgent = eval('require')('proxy-agent').ProxyAgent;
  return options ? new ProxyAgent(options) : new ProxyAgent();
}
