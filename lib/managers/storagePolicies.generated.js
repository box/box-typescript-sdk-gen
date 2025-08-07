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
exports.StoragePoliciesManager = exports.GetStoragePolicyByIdHeaders = exports.GetStoragePoliciesHeaders = exports.GetStoragePolicyByIdOptionals = void 0;
const storagePolicies_generated_js_1 = require("../schemas/storagePolicies.generated.js");
const storagePolicy_generated_js_1 = require("../schemas/storagePolicy.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
class GetStoragePolicyByIdOptionals {
    constructor(fields) {
        this.headers = new GetStoragePolicyByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetStoragePolicyByIdOptionals = GetStoragePolicyByIdOptionals;
class GetStoragePoliciesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetStoragePoliciesHeaders = GetStoragePoliciesHeaders;
class GetStoragePolicyByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetStoragePolicyByIdHeaders = GetStoragePolicyByIdHeaders;
class StoragePoliciesManager {
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
     * Fetches all the storage policies in the enterprise.
     * @param {GetStoragePoliciesQueryParams} queryParams Query parameters of getStoragePolicies method
     * @param {GetStoragePoliciesHeadersInput} headersInput Headers of getStoragePolicies method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<StoragePolicies>}
     */
    getStoragePolicies() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetStoragePoliciesHeaders({}), cancellationToken) {
            const headers = new GetStoragePoliciesHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policies'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, storagePolicies_generated_js_1.deserializeStoragePolicies)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Fetches a specific storage policy.
       * @param {string} storagePolicyId The ID of the storage policy.
      Example: "34342"
       * @param {GetStoragePolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<StoragePolicy>}
       */
    getStoragePolicyById(storagePolicyId_1) {
        return __awaiter(this, arguments, void 0, function* (storagePolicyId, optionalsInput = {}) {
            const optionals = new GetStoragePolicyByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policies/', (0, utils_js_2.toString)(storagePolicyId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, storagePolicy_generated_js_1.deserializeStoragePolicy)(response.data)), { rawData: response.data });
        });
    }
}
exports.StoragePoliciesManager = StoragePoliciesManager;
//# sourceMappingURL=storagePolicies.generated.js.map