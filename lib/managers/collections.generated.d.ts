import { Collections } from '../schemas/collections.generated.js';
import { ItemsOffsetPaginated } from '../schemas/itemsOffsetPaginated.generated.js';
import { Collection } from '../schemas/collection.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetCollectionItemsOptionals {
    readonly queryParams: GetCollectionItemsQueryParams;
    readonly headers: GetCollectionItemsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetCollectionItemsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetCollectionItemsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetCollectionItemsOptionalsInput {
    readonly queryParams?: GetCollectionItemsQueryParams;
    readonly headers?: GetCollectionItemsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetCollectionByIdOptionals {
    readonly headers: GetCollectionByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetCollectionByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetCollectionByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetCollectionByIdOptionalsInput {
    readonly headers?: GetCollectionByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetCollectionsQueryParams {
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
     * The offset of the item at which to begin the response.
     *
     * Queries with offset parameter value
     * exceeding 10000 will be rejected
     * with a 400 response. */
    readonly offset?: number;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetCollectionsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCollectionsHeaders, 'extraHeaders'> & Partial<Pick<GetCollectionsHeaders, 'extraHeaders'>>);
}
export interface GetCollectionsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetCollectionItemsQueryParams {
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
     * The offset of the item at which to begin the response.
     *
     * Queries with offset parameter value
     * exceeding 10000 will be rejected
     * with a 400 response. */
    readonly offset?: number;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetCollectionItemsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCollectionItemsHeaders, 'extraHeaders'> & Partial<Pick<GetCollectionItemsHeaders, 'extraHeaders'>>);
}
export interface GetCollectionItemsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetCollectionByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCollectionByIdHeaders, 'extraHeaders'> & Partial<Pick<GetCollectionByIdHeaders, 'extraHeaders'>>);
}
export interface GetCollectionByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CollectionsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<CollectionsManager, 'networkSession' | 'getCollections' | 'getCollectionItems' | 'getCollectionById'> & Partial<Pick<CollectionsManager, 'networkSession'>>);
    /**
     * Retrieves all collections for a given user.
     *
     * Currently, only the `favorites` collection
     * is supported.
     * @param {GetCollectionsQueryParams} queryParams Query parameters of getCollections method
     * @param {GetCollectionsHeadersInput} headersInput Headers of getCollections method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<Collections>}
     */
    getCollections(queryParams?: GetCollectionsQueryParams, headersInput?: GetCollectionsHeadersInput, cancellationToken?: CancellationToken): Promise<Collections>;
    /**
       * Retrieves the files and/or folders contained within
       * this collection.
       * @param {string} collectionId The ID of the collection.
      Example: "926489"
       * @param {GetCollectionItemsOptionalsInput} optionalsInput
       * @returns {Promise<ItemsOffsetPaginated>}
       */
    getCollectionItems(collectionId: string, optionalsInput?: GetCollectionItemsOptionalsInput): Promise<ItemsOffsetPaginated>;
    /**
       * Retrieves a collection by its ID.
       * @param {string} collectionId The ID of the collection.
      Example: "926489"
       * @param {GetCollectionByIdOptionalsInput} optionalsInput
       * @returns {Promise<Collection>}
       */
    getCollectionById(collectionId: string, optionalsInput?: GetCollectionByIdOptionalsInput): Promise<Collection>;
}
export interface CollectionsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
//# sourceMappingURL=collections.generated.d.ts.map