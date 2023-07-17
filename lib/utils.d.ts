/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import * as crypto from 'crypto';
import { Readable } from 'stream';
export declare function getUuid(): string;
export declare function decodeBase64(value: string): string;
export declare function hexToBase64(data: string): string;
export { Buffer, Readable as ByteStream };
export declare class Hash {
    #private;
    constructor(hash: crypto.Hash);
    updateHash(data: Buffer): void;
    digestHash(encoding: 'base64'): string;
}
export declare function createHash(algorithm: 'sha1'): Hash;
export declare function getEnvVar(name: string): string;
export declare function listConcat<T>(a: readonly T[], b: readonly T[]): T[];
export declare function generateByteStream(size: number): Readable;
export declare function readByteStream(byteStream: Readable): Promise<Buffer>;
export declare function cloneByteStream(readableStream: Readable): Promise<[Readable, Readable]>;
export declare function iterateChunks(stream: Readable, chunkSize: number): AsyncIterator<Readable>;
export declare function reduceIterator<T, U>(iterator: AsyncIterator<T>, reducer: (accumulator: U, current: T) => Promise<U>, initialValue: U): Promise<U>;
export declare function prepareParams(obj: any): Record<string, string>;
