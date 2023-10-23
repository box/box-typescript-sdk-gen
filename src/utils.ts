import { Readable } from 'stream';
import { v4 as uuidv4 } from 'uuid';

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
export type Iterator<T = any> = AsyncIterator<T>;

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
      return;
    }
    this.#hash = eval('require')('crypto').createHash(algorithm);
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

export function listConcat<T>(a: readonly T[], b: readonly T[]): T[] {
  return [...a, ...b];
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

export function generateByteStreamFromBuffer(buffer: Buffer): Readable {
  return Readable.from(buffer);
}

export function generateByteStream(size: number): Readable {
  return Readable.from(generateByteBuffer(size));
}

export function bufferEquals(buffer1: Buffer, buffer2: Buffer): boolean {
  return Buffer.compare(buffer1, buffer2) === 0;
}

export function bufferLength(buffer: Buffer): number {
  return buffer.length;
}

export function decodeBase64ByteStream(data: string): Readable {
  return Readable.from(Buffer.from(data, 'base64'));
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
      yield Readable.from(buffer.subarray(start, start + chunkSize));
      start += chunkSize;
      totalSize -= chunkSize;
    }

    buffers = totalSize > 0 ? [buffer.subarray(start)] : [];
  }

  if (totalSize > 0) {
    yield Readable.from(Buffer.concat(buffers));
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

export function getUrlParams(params: Record<string, any>) {
  return new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, toString(value)])
  ).toString();
}
