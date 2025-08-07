import { deserializeShieldListsV2025R0 } from '../schemas/v2025R0/shieldListsV2025R0.generated.js';
import { deserializeShieldListV2025R0 } from '../schemas/v2025R0/shieldListV2025R0.generated.js';
import { serializeShieldListsCreateV2025R0 } from '../schemas/v2025R0/shieldListsCreateV2025R0.generated.js';
import { serializeShieldListsUpdateV2025R0 } from '../schemas/v2025R0/shieldListsUpdateV2025R0.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class CreateShieldListV2025R0Optionals {
    constructor(fields) {
        this.headers = new CreateShieldListV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetShieldListByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new GetShieldListByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteShieldListByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new DeleteShieldListByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateShieldListByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new UpdateShieldListByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetShieldListsV2025R0Headers {
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
export class CreateShieldListV2025R0Headers {
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
export class GetShieldListByIdV2025R0Headers {
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
export class DeleteShieldListByIdV2025R0Headers {
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
export class UpdateShieldListByIdV2025R0Headers {
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
export class ShieldListsManager {
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
     * Retrieves all shield lists in the enterprise.
     * @param {GetShieldListsV2025R0HeadersInput} headersInput Headers of getShieldListsV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<ShieldListsV2025R0>}
     */
    async getShieldListsV2025R0(headersInput = new GetShieldListsV2025R0Headers({}), cancellationToken) {
        const headers = new GetShieldListsV2025R0Headers({
            boxVersion: headersInput.boxVersion,
            extraHeaders: headersInput.extraHeaders,
        });
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_lists'),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeShieldListsV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a shield list.
     * @param {ShieldListsCreateV2025R0} requestBody Request body of createShieldListV2025R0 method
     * @param {CreateShieldListV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<ShieldListV2025R0>}
     */
    async createShieldListV2025R0(requestBody, optionalsInput = {}) {
        const optionals = new CreateShieldListV2025R0Optionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_lists'),
            method: 'POST',
            headers: headersMap,
            data: serializeShieldListsCreateV2025R0(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeShieldListV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieves a single shield list by its ID.
       * @param {string} shieldListId The unique identifier that represents a shield list.
      The ID for any Shield List can be determined by the response from the endpoint
      fetching all shield lists for the enterprise.
      Example: "90fb0e17-c332-40ed-b4f9-fa8908fbbb24 "
       * @param {GetShieldListByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<ShieldListV2025R0>}
       */
    async getShieldListByIdV2025R0(shieldListId, optionalsInput = {}) {
        const optionals = new GetShieldListByIdV2025R0Optionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_lists/', toString(shieldListId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeShieldListV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
       * Delete a single shield list by its ID.
       * @param {string} shieldListId The unique identifier that represents a shield list.
      The ID for any Shield List can be determined by the response from the endpoint
      fetching all shield lists for the enterprise.
      Example: "90fb0e17-c332-40ed-b4f9-fa8908fbbb24 "
       * @param {DeleteShieldListByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteShieldListByIdV2025R0(shieldListId, optionalsInput = {}) {
        const optionals = new DeleteShieldListByIdV2025R0Optionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_lists/', toString(shieldListId)),
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
       * Updates a shield list.
       * @param {string} shieldListId The unique identifier that represents a shield list.
      The ID for any Shield List can be determined by the response from the endpoint
      fetching all shield lists for the enterprise.
      Example: "90fb0e17-c332-40ed-b4f9-fa8908fbbb24 "
       * @param {ShieldListsUpdateV2025R0} requestBody Request body of updateShieldListByIdV2025R0 method
       * @param {UpdateShieldListByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<ShieldListV2025R0>}
       */
    async updateShieldListByIdV2025R0(shieldListId, requestBody, optionalsInput = {}) {
        const optionals = new UpdateShieldListByIdV2025R0Optionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_lists/', toString(shieldListId)),
            method: 'PUT',
            headers: headersMap,
            data: serializeShieldListsUpdateV2025R0(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeShieldListV2025R0(response.data),
            rawData: response.data,
        };
    }
}
//# sourceMappingURL=shieldLists.generated.js.map