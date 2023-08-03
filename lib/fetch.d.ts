/// <reference types="node" />
import { Readable } from 'stream';
import { Authentication } from './auth';
import { NetworkSession } from './network';
import { ByteStream } from './utils';
export declare const userAgentHeader: string;
export declare const xBoxUaHeader: string;
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
    readonly body?: string | Readable;
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
export declare function fetch(resource: string, options: FetchOptions & {
    /** @private */
    numRetries?: number;
}): Promise<FetchResponse>;
