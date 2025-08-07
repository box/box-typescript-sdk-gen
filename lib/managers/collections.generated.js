"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsManager = exports.GetCollectionByIdHeaders = exports.GetCollectionItemsHeaders = exports.GetCollectionsHeaders = exports.GetCollectionByIdOptionals = exports.GetCollectionItemsOptionals = void 0;
const collections_generated_js_1 = require("../schemas/collections.generated.js");
const itemsOffsetPaginated_generated_js_1 = require("../schemas/itemsOffsetPaginated.generated.js");
const collection_generated_js_1 = require("../schemas/collection.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
class GetCollectionItemsOptionals {
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
exports.GetCollectionItemsOptionals = GetCollectionItemsOptionals;
class GetCollectionByIdOptionals {
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
exports.GetCollectionByIdOptionals = GetCollectionByIdOptionals;
class GetCollectionsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetCollectionsHeaders = GetCollectionsHeaders;
class GetCollectionItemsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetCollectionItemsHeaders = GetCollectionItemsHeaders;
class GetCollectionByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetCollectionByIdHeaders = GetCollectionByIdHeaders;
class CollectionsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
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
    getCollections() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetCollectionsHeaders({}), cancellationToken) {
            const headers = new GetCollectionsHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
                ['offset']: (0, utils_js_2.toString)(queryParams.offset),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collections'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, collections_generated_js_1.deserializeCollections)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves the files and/or folders contained within
       * this collection.
       * @param {string} collectionId The ID of the collection.
      Example: "926489"
       * @param {GetCollectionItemsOptionalsInput} optionalsInput
       * @returns {Promise<ItemsOffsetPaginated>}
       */
    getCollectionItems(collectionId_1) {
        return __awaiter(this, arguments, void 0, function* (collectionId, optionalsInput = {}) {
            const optionals = new GetCollectionItemsOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
                ['offset']: (0, utils_js_2.toString)(queryParams.offset),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collections/', (0, utils_js_2.toString)(collectionId), '/items'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, itemsOffsetPaginated_generated_js_1.deserializeItemsOffsetPaginated)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves a collection by its ID.
       * @param {string} collectionId The ID of the collection.
      Example: "926489"
       * @param {GetCollectionByIdOptionalsInput} optionalsInput
       * @returns {Promise<Collection>}
       */
    getCollectionById(collectionId_1) {
        return __awaiter(this, arguments, void 0, function* (collectionId, optionalsInput = {}) {
            const optionals = new GetCollectionByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collections/', (0, utils_js_2.toString)(collectionId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, collection_generated_js_1.deserializeCollection)(response.data)), { rawData: response.data });
        });
    }
}
exports.CollectionsManager = CollectionsManager;
//# sourceMappingURL=collections.generated.js.map