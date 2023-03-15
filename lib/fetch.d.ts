import { CcgAuth } from './ccgAuth.js';
import { DeveloperTokenAuth } from './developerTokenAuth.js';
export interface FetchOptions {
    /**
     * A string to set request's method (GET, POST, etc.). Defaults to GET.
     */
    readonly method?: string;
    /**
     * [key1, value1, key2, value2, ...]
     */
    readonly headers?: {
        [key: string]: string | null | undefined;
    };
    /**
     * query params
     * [key1, value1, key2, value2, ...]
     */
    readonly params?: {
        [key: string]: string | number | boolean | null | undefined;
    };
    /**
     * Request body
     */
    readonly body?: string;
    /**
     * Auth object
     */
    readonly auth?: CcgAuth | DeveloperTokenAuth;
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
    readonly content: ArrayBuffer;
}
export declare function fetch(resource: string, options: FetchOptions): Promise<FetchResponse>;
