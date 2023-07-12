/// <reference types="node" />
/// <reference types="node" />
import { Readable } from 'stream';
export declare function getUuid(): string;
export declare function decodeBase64(value: string): string;
export declare function getEnvVar(name: string): string;
export declare const BUFFER_SIZE: number;
export declare function generateByteStream(): Readable;
export declare function readByteStream(byteStream: Readable): Promise<Buffer>;
export declare function prepareParams(obj: object): {
    [key: string]: string;
};
