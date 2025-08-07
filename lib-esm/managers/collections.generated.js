import { deserializeCollections } from '../schemas/collections.generated.js';
import { deserializeItemsOffsetPaginated } from '../schemas/itemsOffsetPaginated.generated.js';
import { deserializeCollection } from '../schemas/collection.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class GetCollectionItemsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetCollectionItemsHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetCollectionByIdOptionals {
    constructor(fields) {
        this.headers = new GetCollectionByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetCollectionsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetCollectionItemsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetCollectionByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CollectionsManager {
    constructor(fields) {
        this.networkSession = new NetworkSession({});
        if (fields.auth !== undefined) {
            this.auth = fields.auth;
        }
        if (fields.networkSession !== undefined) {
            this.networkSession = fields.networkSession;
        }
    }
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
    async getCollections(queryParams = {}, headersInput = new GetCollectionsHeaders({}), cancellationToken) {
        const headers = new GetCollectionsHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
            ['offset']: toString(queryParams.offset),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collections'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeCollections(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieves the files and/or folders contained within
       * this collection.
       * @param {string} collectionId The ID of the collection.
      Example: "926489"
       * @param {GetCollectionItemsOptionalsInput} optionalsInput
       * @returns {Promise<ItemsOffsetPaginated>}
       */
    async getCollectionItems(collectionId, optionalsInput = {}) {
        const optionals = new GetCollectionItemsOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
            ['offset']: toString(queryParams.offset),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collections/', toString(collectionId), '/items'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeItemsOffsetPaginated(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieves a collection by its ID.
       * @param {string} collectionId The ID of the collection.
      Example: "926489"
       * @param {GetCollectionByIdOptionalsInput} optionalsInput
       * @returns {Promise<Collection>}
       */
    async getCollectionById(collectionId, optionalsInput = {}) {
        const optionals = new GetCollectionByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collections/', toString(collectionId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeCollection(response.data),
            rawData: response.data,
        };
    }
}
//# sourceMappingURL=collections.generated.js.map