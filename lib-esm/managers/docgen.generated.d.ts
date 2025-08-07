import { DocGenJobV2025R0 } from '../schemas/v2025R0/docGenJobV2025R0.generated.js';
import { BoxVersionHeaderV2025R0 } from '../parameters/v2025R0/boxVersionHeaderV2025R0.generated.js';
import { DocGenJobsFullV2025R0 } from '../schemas/v2025R0/docGenJobsFullV2025R0.generated.js';
import { DocGenJobsV2025R0 } from '../schemas/v2025R0/docGenJobsV2025R0.generated.js';
import { DocGenBatchBaseV2025R0 } from '../schemas/v2025R0/docGenBatchBaseV2025R0.generated.js';
import { DocGenBatchCreateRequestV2025R0 } from '../schemas/v2025R0/docGenBatchCreateRequestV2025R0.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetDocgenJobByIdV2025R0Optionals {
    readonly headers: GetDocgenJobByIdV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetDocgenJobByIdV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetDocgenJobByIdV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface GetDocgenJobByIdV2025R0OptionalsInput {
    readonly headers?: GetDocgenJobByIdV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetDocgenBatchJobByIdV2025R0Optionals {
    readonly queryParams: GetDocgenBatchJobByIdV2025R0QueryParams;
    readonly headers: GetDocgenBatchJobByIdV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetDocgenBatchJobByIdV2025R0Optionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetDocgenBatchJobByIdV2025R0Optionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetDocgenBatchJobByIdV2025R0OptionalsInput {
    readonly queryParams?: GetDocgenBatchJobByIdV2025R0QueryParams;
    readonly headers?: GetDocgenBatchJobByIdV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateDocgenBatchV2025R0Optionals {
    readonly headers: CreateDocgenBatchV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateDocgenBatchV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateDocgenBatchV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateDocgenBatchV2025R0OptionalsInput {
    readonly headers?: CreateDocgenBatchV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetDocgenJobByIdV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetDocgenJobByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<GetDocgenJobByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface GetDocgenJobByIdV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetDocgenJobsV2025R0QueryParams {
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetDocgenJobsV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetDocgenJobsV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<GetDocgenJobsV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface GetDocgenJobsV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetDocgenBatchJobByIdV2025R0QueryParams {
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetDocgenBatchJobByIdV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetDocgenBatchJobByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<GetDocgenBatchJobByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface GetDocgenBatchJobByIdV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateDocgenBatchV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateDocgenBatchV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<CreateDocgenBatchV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface CreateDocgenBatchV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DocgenManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<DocgenManager, 'networkSession' | 'getDocgenJobByIdV2025R0' | 'getDocgenJobsV2025R0' | 'getDocgenBatchJobByIdV2025R0' | 'createDocgenBatchV2025R0'> & Partial<Pick<DocgenManager, 'networkSession'>>);
    /**
       * Get details of the Box Doc Gen job.
       * @param {string} jobId Box Doc Gen job ID.
      Example: 123
       * @param {GetDocgenJobByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<DocGenJobV2025R0>}
       */
    getDocgenJobByIdV2025R0(jobId: string, optionalsInput?: GetDocgenJobByIdV2025R0OptionalsInput): Promise<DocGenJobV2025R0>;
    /**
     * Lists all Box Doc Gen jobs for a user.
     * @param {GetDocgenJobsV2025R0QueryParams} queryParams Query parameters of getDocgenJobsV2025R0 method
     * @param {GetDocgenJobsV2025R0HeadersInput} headersInput Headers of getDocgenJobsV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<DocGenJobsFullV2025R0>}
     */
    getDocgenJobsV2025R0(queryParams?: GetDocgenJobsV2025R0QueryParams, headersInput?: GetDocgenJobsV2025R0HeadersInput, cancellationToken?: CancellationToken): Promise<DocGenJobsFullV2025R0>;
    /**
       * Lists Box Doc Gen jobs in a batch.
       * @param {string} batchId Box Doc Gen batch ID.
      Example: 123
       * @param {GetDocgenBatchJobByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<DocGenJobsV2025R0>}
       */
    getDocgenBatchJobByIdV2025R0(batchId: string, optionalsInput?: GetDocgenBatchJobByIdV2025R0OptionalsInput): Promise<DocGenJobsV2025R0>;
    /**
     * Generates a document using a Box Doc Gen template.
     * @param {DocGenBatchCreateRequestV2025R0} requestBody Request body of createDocgenBatchV2025R0 method
     * @param {CreateDocgenBatchV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<DocGenBatchBaseV2025R0>}
     */
    createDocgenBatchV2025R0(requestBody: DocGenBatchCreateRequestV2025R0, optionalsInput?: CreateDocgenBatchV2025R0OptionalsInput): Promise<DocGenBatchBaseV2025R0>;
}
export interface DocgenManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
