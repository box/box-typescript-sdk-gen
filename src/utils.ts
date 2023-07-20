import * as crypto from 'crypto';
import { PassThrough, Readable } from 'stream';
import { v4 as uuidv4 } from 'uuid';

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

export class Hash {
  #hash: crypto.Hash;

  constructor(hash: crypto.Hash) {
    this.#hash = hash;
  }

  updateHash(data: Buffer) {
    this.#hash.update(data);
  }

  digestHash(encoding: 'base64'): string {
    return this.#hash.digest(encoding);
  }
}

export function createHash(algorithm: 'sha1'): Hash {
  return new Hash(crypto.createHash(algorithm));
}

export function getEnvVar(name: string) {
  return process.env[name] || '';
}

export function listConcat<T>(a: readonly T[], b: readonly T[]): T[] {
  return [...a, ...b];
}

export function generateByteStream(size: number): Readable {
  return Readable.from(crypto.randomBytes(size));
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

export async function cloneByteStream(
  readableStream: Readable
): Promise<[Readable, Readable]> {
  const clone1 = readableStream.pipe(new PassThrough());
  const clone2 = readableStream.pipe(new PassThrough());
  return [clone1, clone2];
}

export async function* iterateChunks(
  stream: Readable,
  chunkSize: number
): AsyncIterator<Readable> {
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
  iterator: AsyncIterator<T>,
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

export function prepareParams(obj: any): Record<string, string> {
  if (!obj || typeof obj !== 'object') {
    throw new Error('Expecting obj to be an object in prepareParams');
  }
  return Object.fromEntries(
    Object.entries(obj)
      .map<[string, string | null | undefined]>(([key, value]) => {
        if (typeof value === 'string' || value == null) {
          return [key, value];
        }
        return [key, String(value)];
      })
      .filter<[string, string]>(
        (entry): entry is [string, string] => typeof entry[1] === 'string'
      )
  );
}
