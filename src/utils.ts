import { randomBytes } from 'crypto';
import { Readable } from 'stream';
import { v4 as uuidv4 } from 'uuid';

export function getUuid() {
  return uuidv4();
}

export function decodeBase64(value: string) {
  return Buffer.from(value, 'base64').toString('utf8');
}

export function getEnvVar(name: string) {
  return process.env[name] || '';
}

export const BUFFER_SIZE = 1024 * 1024;

export function generateByteStream(): Readable {
  return Readable.from(randomBytes(BUFFER_SIZE));
}

export async function readByteStream(byteStream: Readable) {
  const buffers: Buffer[] = [];
  for await (const data of byteStream) {
    buffers.push(data);
  }

  return Buffer.concat(buffers);
}
