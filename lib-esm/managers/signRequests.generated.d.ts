import { SignRequest } from '../schemas/signRequest.generated.js';
import { SignRequests } from '../schemas/signRequests.generated.js';
import { SignRequestCreateRequest } from '../schemas/signRequestCreateRequest.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class CancelSignRequestOptionals {
    readonly headers: CancelSignRequestHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CancelSignRequestOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CancelSignRequestOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CancelSignRequestOptionalsInput {
    readonly headers?: CancelSignRequestHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class ResendSignRequestOptionals {
    readonly headers: ResendSignRequestHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<ResendSignRequestOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<ResendSignRequestOptionals, 'headers' | 'cancellationToken'>>);
}
export interface ResendSignRequestOptionalsInput {
    readonly headers?: ResendSignRequestHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetSignRequestByIdOptionals {
    readonly headers: GetSignRequestByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetSignRequestByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetSignRequestByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetSignRequestByIdOptionalsInput {
    readonly headers?: GetSignRequestByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateSignRequestOptionals {
    readonly headers: CreateSignRequestHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateSignRequestOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateSignRequestOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateSignRequestOptionalsInput {
    readonly headers?: CreateSignRequestHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CancelSignRequestHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CancelSignRequestHeaders, 'extraHeaders'> & Partial<Pick<CancelSignRequestHeaders, 'extraHeaders'>>);
}
export interface CancelSignRequestHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ResendSignRequestHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<ResendSignRequestHeaders, 'extraHeaders'> & Partial<Pick<ResendSignRequestHeaders, 'extraHeaders'>>);
}
export interface ResendSignRequestHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetSignRequestByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetSignRequestByIdHeaders, 'extraHeaders'> & Partial<Pick<GetSignRequestByIdHeaders, 'extraHeaders'>>);
}
export interface GetSignRequestByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetSignRequestsQueryParams {
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
    /**
     * A list of sender emails to filter the signature requests by sender.
     * If provided, `shared_requests` must be set to `true`. */
    readonly senders?: readonly string[];
    /**
     * If set to `true`, only includes requests that user is not an owner,
     * but user is a collaborator. Collaborator access is determined by the
     * user access level of the sign files of the request.
     * Default is `false`. Must be set to `true` if `senders` are provided. */
    readonly sharedRequests?: boolean;
}
export declare class GetSignRequestsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetSignRequestsHeaders, 'extraHeaders'> & Partial<Pick<GetSignRequestsHeaders, 'extraHeaders'>>);
}
export interface GetSignRequestsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateSignRequestHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateSignRequestHeaders, 'extraHeaders'> & Partial<Pick<CreateSignRequestHeaders, 'extraHeaders'>>);
}
export interface CreateSignRequestHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class SignRequestsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<SignRequestsManager, 'networkSession' | 'cancelSignRequest' | 'resendSignRequest' | 'getSignRequestById' | 'getSignRequests' | 'createSignRequest'> & Partial<Pick<SignRequestsManager, 'networkSession'>>);
    /**
       * Cancels a sign request.
       * @param {string} signRequestId The ID of the signature request.
      Example: "33243242"
       * @param {CancelSignRequestOptionalsInput} optionalsInput
       * @returns {Promise<SignRequest>}
       */
    cancelSignRequest(signRequestId: string, optionalsInput?: CancelSignRequestOptionalsInput): Promise<SignRequest>;
    /**
       * Resends a signature request email to all outstanding signers.
       * @param {string} signRequestId The ID of the signature request.
      Example: "33243242"
       * @param {ResendSignRequestOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    resendSignRequest(signRequestId: string, optionalsInput?: ResendSignRequestOptionalsInput): Promise<undefined>;
    /**
       * Gets a sign request by ID.
       * @param {string} signRequestId The ID of the signature request.
      Example: "33243242"
       * @param {GetSignRequestByIdOptionalsInput} optionalsInput
       * @returns {Promise<SignRequest>}
       */
    getSignRequestById(signRequestId: string, optionalsInput?: GetSignRequestByIdOptionalsInput): Promise<SignRequest>;
    /**
     * Gets signature requests created by a user. If the `sign_files` and/or
     * `parent_folder` are deleted, the signature request will not return in the list.
     * @param {GetSignRequestsQueryParams} queryParams Query parameters of getSignRequests method
     * @param {GetSignRequestsHeadersInput} headersInput Headers of getSignRequests method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<SignRequests>}
     */
    getSignRequests(queryParams?: GetSignRequestsQueryParams, headersInput?: GetSignRequestsHeadersInput, cancellationToken?: CancellationToken): Promise<SignRequests>;
    /**
     * Creates a signature request. This involves preparing a document for signing and
     * sending the signature request to signers.
     * @param {SignRequestCreateRequest} requestBody Request body of createSignRequest method
     * @param {CreateSignRequestOptionalsInput} optionalsInput
     * @returns {Promise<SignRequest>}
     */
    createSignRequest(requestBody: SignRequestCreateRequest, optionalsInput?: CreateSignRequestOptionalsInput): Promise<SignRequest>;
}
export interface SignRequestsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
