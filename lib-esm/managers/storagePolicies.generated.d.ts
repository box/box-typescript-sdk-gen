import { StoragePolicies } from '../schemas/storagePolicies.generated.js';
import { StoragePolicy } from '../schemas/storagePolicy.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetStoragePolicyByIdOptionals {
    readonly headers: GetStoragePolicyByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetStoragePolicyByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetStoragePolicyByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetStoragePolicyByIdOptionalsInput {
    readonly headers?: GetStoragePolicyByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetStoragePoliciesQueryParams {
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested. */
    readonly fields?: readonly string[];
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
export declare class GetStoragePoliciesHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetStoragePoliciesHeaders, 'extraHeaders'> & Partial<Pick<GetStoragePoliciesHeaders, 'extraHeaders'>>);
}
export interface GetStoragePoliciesHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetStoragePolicyByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetStoragePolicyByIdHeaders, 'extraHeaders'> & Partial<Pick<GetStoragePolicyByIdHeaders, 'extraHeaders'>>);
}
export interface GetStoragePolicyByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class StoragePoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<StoragePoliciesManager, 'networkSession' | 'getStoragePolicies' | 'getStoragePolicyById'> & Partial<Pick<StoragePoliciesManager, 'networkSession'>>);
    /**
     * Fetches all the storage policies in the enterprise.
     * @param {GetStoragePoliciesQueryParams} queryParams Query parameters of getStoragePolicies method
     * @param {GetStoragePoliciesHeadersInput} headersInput Headers of getStoragePolicies method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<StoragePolicies>}
     */
    getStoragePolicies(queryParams?: GetStoragePoliciesQueryParams, headersInput?: GetStoragePoliciesHeadersInput, cancellationToken?: CancellationToken): Promise<StoragePolicies>;
    /**
       * Fetches a specific storage policy.
       * @param {string} storagePolicyId The ID of the storage policy.
      Example: "34342"
       * @param {GetStoragePolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<StoragePolicy>}
       */
    getStoragePolicyById(storagePolicyId: string, optionalsInput?: GetStoragePolicyByIdOptionalsInput): Promise<StoragePolicy>;
}
export interface StoragePoliciesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
