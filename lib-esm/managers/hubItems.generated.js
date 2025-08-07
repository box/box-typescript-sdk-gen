import { deserializeHubItemsV2025R0 } from '../schemas/v2025R0/hubItemsV2025R0.generated.js';
import { deserializeHubItemsManageResponseV2025R0 } from '../schemas/v2025R0/hubItemsManageResponseV2025R0.generated.js';
import { serializeHubItemsManageRequestV2025R0 } from '../schemas/v2025R0/hubItemsManageRequestV2025R0.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class GetHubItemsV2025R0Optionals {
    constructor(fields) {
        this.headers = new GetHubItemsV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class ManageHubItemsV2025R0Optionals {
    constructor(fields) {
        this.headers = new ManageHubItemsV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetHubItemsV2025R0Headers {
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
export class ManageHubItemsV2025R0Headers {
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
export class HubItemsManager {
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
     * Retrieves all items associated with a Hub.
     * @param {GetHubItemsV2025R0QueryParams} queryParams Query parameters of getHubItemsV2025R0 method
     * @param {GetHubItemsV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<HubItemsV2025R0>}
     */
    async getHubItemsV2025R0(queryParams, optionalsInput = {}) {
        const optionals = new GetHubItemsV2025R0Optionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['hub_id']: toString(queryParams.hubId),
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hub_items'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeHubItemsV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
       * Adds and/or removes Hub items from a Hub.
       * @param {string} hubId The unique identifier that represent a hub.
      
      The ID for any hub can be determined
      by visiting this hub in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/hubs/123`
      the `hub_id` is `123`.
      Example: "12345"
       * @param {HubItemsManageRequestV2025R0} requestBody Request body of manageHubItemsV2025R0 method
       * @param {ManageHubItemsV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubItemsManageResponseV2025R0>}
       */
    async manageHubItemsV2025R0(hubId, requestBody, optionalsInput = {}) {
        const optionals = new ManageHubItemsV2025R0Optionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hubs/', toString(hubId), '/manage_items'),
            method: 'POST',
            headers: headersMap,
            data: serializeHubItemsManageRequestV2025R0(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeHubItemsManageResponseV2025R0(response.data),
            rawData: response.data,
        };
    }
}
//# sourceMappingURL=hubItems.generated.js.map