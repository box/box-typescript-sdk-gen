import { deserializeHubCollaborationsV2025R0 } from '../schemas/v2025R0/hubCollaborationsV2025R0.generated.js';
import { deserializeHubCollaborationV2025R0 } from '../schemas/v2025R0/hubCollaborationV2025R0.generated.js';
import { serializeHubCollaborationCreateRequestV2025R0 } from '../schemas/v2025R0/hubCollaborationCreateRequestV2025R0.generated.js';
import { serializeHubCollaborationUpdateRequestV2025R0 } from '../schemas/v2025R0/hubCollaborationUpdateRequestV2025R0.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class GetHubCollaborationsV2025R0Optionals {
    constructor(fields) {
        this.headers = new GetHubCollaborationsV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateHubCollaborationV2025R0Optionals {
    constructor(fields) {
        this.headers = new CreateHubCollaborationV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetHubCollaborationByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new GetHubCollaborationByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateHubCollaborationByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new UpdateHubCollaborationByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteHubCollaborationByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new DeleteHubCollaborationByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetHubCollaborationsV2025R0Headers {
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
export class CreateHubCollaborationV2025R0Headers {
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
export class GetHubCollaborationByIdV2025R0Headers {
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
export class UpdateHubCollaborationByIdV2025R0Headers {
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
export class DeleteHubCollaborationByIdV2025R0Headers {
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
export class HubCollaborationsManager {
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
     * Retrieves all collaborations for a hub.
     * @param {GetHubCollaborationsV2025R0QueryParams} queryParams Query parameters of getHubCollaborationsV2025R0 method
     * @param {GetHubCollaborationsV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<HubCollaborationsV2025R0>}
     */
    async getHubCollaborationsV2025R0(queryParams, optionalsInput = {}) {
        const optionals = new GetHubCollaborationsV2025R0Optionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hub_collaborations'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeHubCollaborationsV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
     * Adds a collaboration for a single user or a single group to a hub.
     *
     * Collaborations can be created using email address, user IDs, or group IDs.
     * @param {HubCollaborationCreateRequestV2025R0} requestBody Request body of createHubCollaborationV2025R0 method
     * @param {CreateHubCollaborationV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<HubCollaborationV2025R0>}
     */
    async createHubCollaborationV2025R0(requestBody, optionalsInput = {}) {
        const optionals = new CreateHubCollaborationV2025R0Optionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hub_collaborations'),
            method: 'POST',
            headers: headersMap,
            data: serializeHubCollaborationCreateRequestV2025R0(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeHubCollaborationV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieves details for a hub collaboration by collaboration ID.
       * @param {string} hubCollaborationId The ID of the hub collaboration.
      Example: "1234"
       * @param {GetHubCollaborationByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubCollaborationV2025R0>}
       */
    async getHubCollaborationByIdV2025R0(hubCollaborationId, optionalsInput = {}) {
        const optionals = new GetHubCollaborationByIdV2025R0Optionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hub_collaborations/', toString(hubCollaborationId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeHubCollaborationV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
       * Updates a hub collaboration.
       * Can be used to change the hub role.
       * @param {string} hubCollaborationId The ID of the hub collaboration.
      Example: "1234"
       * @param {HubCollaborationUpdateRequestV2025R0} requestBody Request body of updateHubCollaborationByIdV2025R0 method
       * @param {UpdateHubCollaborationByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubCollaborationV2025R0>}
       */
    async updateHubCollaborationByIdV2025R0(hubCollaborationId, requestBody, optionalsInput = {}) {
        const optionals = new UpdateHubCollaborationByIdV2025R0Optionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hub_collaborations/', toString(hubCollaborationId)),
            method: 'PUT',
            headers: headersMap,
            data: serializeHubCollaborationUpdateRequestV2025R0(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeHubCollaborationV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
       * Deletes a single hub collaboration.
       * @param {string} hubCollaborationId The ID of the hub collaboration.
      Example: "1234"
       * @param {DeleteHubCollaborationByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteHubCollaborationByIdV2025R0(hubCollaborationId, optionalsInput = {}) {
        const optionals = new DeleteHubCollaborationByIdV2025R0Optionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hub_collaborations/', toString(hubCollaborationId)),
            method: 'DELETE',
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
}
//# sourceMappingURL=hubCollaborations.generated.js.map