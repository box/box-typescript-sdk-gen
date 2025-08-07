import { deserializeHubsV2025R0 } from '../schemas/v2025R0/hubsV2025R0.generated.js';
import { deserializeHubV2025R0 } from '../schemas/v2025R0/hubV2025R0.generated.js';
import { serializeHubCreateRequestV2025R0 } from '../schemas/v2025R0/hubCreateRequestV2025R0.generated.js';
import { serializeHubUpdateRequestV2025R0 } from '../schemas/v2025R0/hubUpdateRequestV2025R0.generated.js';
import { serializeHubCopyRequestV2025R0 } from '../schemas/v2025R0/hubCopyRequestV2025R0.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
export class CreateHubV2025R0Optionals {
    constructor(fields) {
        this.headers = new CreateHubV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetHubByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new GetHubByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateHubByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new UpdateHubByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteHubByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new DeleteHubByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CopyHubV2025R0Optionals {
    constructor(fields) {
        this.headers = new CopyHubV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetHubsV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateHubV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetEnterpriseHubsV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetHubByIdV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateHubByIdV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteHubByIdV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CopyHubV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class HubsManager {
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
     * Retrieves all hubs for requesting user.
     * @param {GetHubsV2025R0QueryParams} queryParams Query parameters of getHubsV2025R0 method
     * @param {GetHubsV2025R0HeadersInput} headersInput Headers of getHubsV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<HubsV2025R0>}
     */
    async getHubsV2025R0(queryParams = {}, headersInput = new GetHubsV2025R0Headers({}), cancellationToken) {
        const headers = new GetHubsV2025R0Headers({
            boxVersion: headersInput.boxVersion,
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['query']: toString(queryParams.query),
            ['scope']: toString(queryParams.scope),
            ['sort']: toString(queryParams.sort),
            ['direction']: toString(queryParams.direction),
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hubs'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeHubsV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a new Hub.
     * @param {HubCreateRequestV2025R0} requestBody Request body of createHubV2025R0 method
     * @param {CreateHubV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<HubV2025R0>}
     */
    async createHubV2025R0(requestBody, optionalsInput = {}) {
        const optionals = new CreateHubV2025R0Optionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hubs'),
            method: 'POST',
            headers: headersMap,
            data: serializeHubCreateRequestV2025R0(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeHubV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
     * Retrieves all hubs for a given enterprise.
     *
     * Admins or Hub Co-admins of an enterprise
     * with GCM scope can make this call.
     * @param {GetEnterpriseHubsV2025R0QueryParams} queryParams Query parameters of getEnterpriseHubsV2025R0 method
     * @param {GetEnterpriseHubsV2025R0HeadersInput} headersInput Headers of getEnterpriseHubsV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<HubsV2025R0>}
     */
    async getEnterpriseHubsV2025R0(queryParams = {}, headersInput = new GetEnterpriseHubsV2025R0Headers({}), cancellationToken) {
        const headers = new GetEnterpriseHubsV2025R0Headers({
            boxVersion: headersInput.boxVersion,
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['query']: toString(queryParams.query),
            ['sort']: toString(queryParams.sort),
            ['direction']: toString(queryParams.direction),
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/enterprise_hubs'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeHubsV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieves details for a hub by its ID.
       * @param {string} hubId The unique identifier that represent a hub.
      
      The ID for any hub can be determined
      by visiting this hub in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/hubs/123`
      the `hub_id` is `123`.
      Example: "12345"
       * @param {GetHubByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubV2025R0>}
       */
    async getHubByIdV2025R0(hubId, optionalsInput = {}) {
        const optionals = new GetHubByIdV2025R0Optionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hubs/', toString(hubId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeHubV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
       * Updates a Hub. Can be used to change title, description, or Hub settings.
       * @param {string} hubId The unique identifier that represent a hub.
      
      The ID for any hub can be determined
      by visiting this hub in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/hubs/123`
      the `hub_id` is `123`.
      Example: "12345"
       * @param {HubUpdateRequestV2025R0} requestBody Request body of updateHubByIdV2025R0 method
       * @param {UpdateHubByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubV2025R0>}
       */
    async updateHubByIdV2025R0(hubId, requestBody, optionalsInput = {}) {
        const optionals = new UpdateHubByIdV2025R0Optionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hubs/', toString(hubId)),
            method: 'PUT',
            headers: headersMap,
            data: serializeHubUpdateRequestV2025R0(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeHubV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
       * Deletes a single hub.
       * @param {string} hubId The unique identifier that represent a hub.
      
      The ID for any hub can be determined
      by visiting this hub in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/hubs/123`
      the `hub_id` is `123`.
      Example: "12345"
       * @param {DeleteHubByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteHubByIdV2025R0(hubId, optionalsInput = {}) {
        const optionals = new DeleteHubByIdV2025R0Optionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hubs/', toString(hubId)),
            method: 'DELETE',
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
    /**
       * Creates a copy of a Hub.
       *
       * The original Hub will not be modified.
       * @param {string} hubId The unique identifier that represent a hub.
      
      The ID for any hub can be determined
      by visiting this hub in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/hubs/123`
      the `hub_id` is `123`.
      Example: "12345"
       * @param {HubCopyRequestV2025R0} requestBody Request body of copyHubV2025R0 method
       * @param {CopyHubV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubV2025R0>}
       */
    async copyHubV2025R0(hubId, requestBody, optionalsInput = {}) {
        const optionals = new CopyHubV2025R0Optionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hubs/', toString(hubId), '/copy'),
            method: 'POST',
            headers: headersMap,
            data: serializeHubCopyRequestV2025R0(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeHubV2025R0(response.data),
            rawData: response.data,
        };
    }
}
export function serializeGetHubsV2025R0QueryParamsDirectionField(val) {
    return val;
}
export function deserializeGetHubsV2025R0QueryParamsDirectionField(val) {
    if (val == 'ASC') {
        return val;
    }
    if (val == 'DESC') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetHubsV2025R0QueryParamsDirectionField",
    });
}
export function serializeGetEnterpriseHubsV2025R0QueryParamsDirectionField(val) {
    return val;
}
export function deserializeGetEnterpriseHubsV2025R0QueryParamsDirectionField(val) {
    if (val == 'ASC') {
        return val;
    }
    if (val == 'DESC') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetEnterpriseHubsV2025R0QueryParamsDirectionField",
    });
}
//# sourceMappingURL=hubs.generated.js.map