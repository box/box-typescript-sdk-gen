import { deserializeStoragePolicies } from '../schemas/storagePolicies.generated.js';
import { deserializeStoragePolicy } from '../schemas/storagePolicy.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class GetStoragePolicyByIdOptionals {
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
export class GetStoragePoliciesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetStoragePolicyByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class StoragePoliciesManager {
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
     * Fetches all the storage policies in the enterprise.
     * @param {GetStoragePoliciesQueryParams} queryParams Query parameters of getStoragePolicies method
     * @param {GetStoragePoliciesHeadersInput} headersInput Headers of getStoragePolicies method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<StoragePolicies>}
     */
    async getStoragePolicies(queryParams = {}, headersInput = new GetStoragePoliciesHeaders({}), cancellationToken) {
        const headers = new GetStoragePoliciesHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policies'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeStoragePolicies(response.data),
            rawData: response.data,
        };
    }
    /**
       * Fetches a specific storage policy.
       * @param {string} storagePolicyId The ID of the storage policy.
      Example: "34342"
       * @param {GetStoragePolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<StoragePolicy>}
       */
    async getStoragePolicyById(storagePolicyId, optionalsInput = {}) {
        const optionals = new GetStoragePolicyByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policies/', toString(storagePolicyId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeStoragePolicy(response.data),
            rawData: response.data,
        };
    }
}
//# sourceMappingURL=storagePolicies.generated.js.map