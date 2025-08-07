import { Authentication } from './auth.generated.js';
import { NetworkSession } from './network.generated.js';
import { SerializedData } from '../serialization/json.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
export type ResponseFormat = 'json' | 'binary' | 'no_content';
export interface MultipartItem {
    /**
     * Name of the part */
    readonly partName: string;
    /**
     * Data of the part */
    readonly data?: SerializedData;
    /**
     * File stream of the part */
    readonly fileStream?: ByteStream;
    /**
     * File name of the part */
    readonly fileName?: string;
    /**
     * Content type of the part */
    readonly contentType?: string;
}
export declare class FetchOptions {
    /**
     * URL of the request */
    readonly url: string;
    /**
     * HTTP verb of the request */
    readonly method: string;
    /**
     * HTTP query parameters */
    readonly params?: {
        readonly [key: string]: string;
    };
    /**
     * HTTP headers */
    readonly headers?: {
        readonly [key: string]: string;
    };
    /**
     * Request body of the request */
    readonly data?: SerializedData;
    /**
     * Stream data of the request */
    readonly fileStream?: ByteStream;
    /**
     * Multipart data of the request */
    readonly multipartData?: readonly MultipartItem[];
    /**
     * Content type of the request body */
    readonly contentType: string;
    /**
     * Expected response format */
    readonly responseFormat: ResponseFormat;
    /**
     * Authentication object */
    readonly auth?: Authentication;
    /**
     * Network session object */
    readonly networkSession?: NetworkSession;
    /**
     * Cancellation token */
    readonly cancellationToken?: CancellationToken;
    /**
     * A boolean value indicate if the request should follow redirects. Defaults to True. Not supported in Browser environment. */
    readonly followRedirects?: boolean;
    constructor(fields: Omit<FetchOptions, 'contentType' | 'responseFormat' | 'followRedirects'> & Partial<Pick<FetchOptions, 'contentType' | 'responseFormat' | 'followRedirects'>>);
}
export interface FetchOptionsInput {
    /**
     * URL of the request */
    readonly url: string;
    /**
     * HTTP verb of the request */
    readonly method: string;
    /**
     * HTTP query parameters */
    readonly params?: {
        readonly [key: string]: string;
    };
    /**
     * HTTP headers */
    readonly headers?: {
        readonly [key: string]: string;
    };
    /**
     * Request body of the request */
    readonly data?: SerializedData;
    /**
     * Stream data of the request */
    readonly fileStream?: ByteStream;
    /**
     * Multipart data of the request */
    readonly multipartData?: readonly MultipartItem[];
    /**
     * Content type of the request body */
    readonly contentType?: string;
    /**
     * Expected response format */
    readonly responseFormat?: ResponseFormat;
    /**
     * Authentication object */
    readonly auth?: Authentication;
    /**
     * Network session object */
    readonly networkSession?: NetworkSession;
    /**
     * Cancellation token */
    readonly cancellationToken?: CancellationToken;
    /**
     * A boolean value indicate if the request should follow redirects. Defaults to True. Not supported in Browser environment. */
    readonly followRedirects?: undefined | boolean;
}
