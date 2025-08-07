import { deserializeSignRequest } from '../schemas/signRequest.generated.js';
import { deserializeSignRequests } from '../schemas/signRequests.generated.js';
import { serializeSignRequestCreateRequest } from '../schemas/signRequestCreateRequest.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class CancelSignRequestOptionals {
    constructor(fields) {
        this.headers = new CancelSignRequestHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class ResendSignRequestOptionals {
    constructor(fields) {
        this.headers = new ResendSignRequestHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetSignRequestByIdOptionals {
    constructor(fields) {
        this.headers = new GetSignRequestByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateSignRequestOptionals {
    constructor(fields) {
        this.headers = new CreateSignRequestHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CancelSignRequestHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class ResendSignRequestHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetSignRequestByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetSignRequestsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateSignRequestHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class SignRequestsManager {
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
       * Cancels a sign request.
       * @param {string} signRequestId The ID of the signature request.
      Example: "33243242"
       * @param {CancelSignRequestOptionalsInput} optionalsInput
       * @returns {Promise<SignRequest>}
       */
    async cancelSignRequest(signRequestId, optionalsInput = {}) {
        const optionals = new CancelSignRequestOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/sign_requests/', toString(signRequestId), '/cancel'),
            method: 'POST',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeSignRequest(response.data),
            rawData: response.data,
        };
    }
    /**
       * Resends a signature request email to all outstanding signers.
       * @param {string} signRequestId The ID of the signature request.
      Example: "33243242"
       * @param {ResendSignRequestOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async resendSignRequest(signRequestId, optionalsInput = {}) {
        const optionals = new ResendSignRequestOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/sign_requests/', toString(signRequestId), '/resend'),
            method: 'POST',
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
    /**
       * Gets a sign request by ID.
       * @param {string} signRequestId The ID of the signature request.
      Example: "33243242"
       * @param {GetSignRequestByIdOptionalsInput} optionalsInput
       * @returns {Promise<SignRequest>}
       */
    async getSignRequestById(signRequestId, optionalsInput = {}) {
        const optionals = new GetSignRequestByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/sign_requests/', toString(signRequestId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeSignRequest(response.data),
            rawData: response.data,
        };
    }
    /**
     * Gets signature requests created by a user. If the `sign_files` and/or
     * `parent_folder` are deleted, the signature request will not return in the list.
     * @param {GetSignRequestsQueryParams} queryParams Query parameters of getSignRequests method
     * @param {GetSignRequestsHeadersInput} headersInput Headers of getSignRequests method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<SignRequests>}
     */
    async getSignRequests(queryParams = {}, headersInput = new GetSignRequestsHeaders({}), cancellationToken) {
        const headers = new GetSignRequestsHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
            ['senders']: queryParams.senders
                ? queryParams.senders.map(toString).join(',')
                : undefined,
            ['shared_requests']: toString(queryParams.sharedRequests),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/sign_requests'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeSignRequests(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a signature request. This involves preparing a document for signing and
     * sending the signature request to signers.
     * @param {SignRequestCreateRequest} requestBody Request body of createSignRequest method
     * @param {CreateSignRequestOptionalsInput} optionalsInput
     * @returns {Promise<SignRequest>}
     */
    async createSignRequest(requestBody, optionalsInput = {}) {
        const optionals = new CreateSignRequestOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/sign_requests'),
            method: 'POST',
            headers: headersMap,
            data: serializeSignRequestCreateRequest(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeSignRequest(response.data),
            rawData: response.data,
        };
    }
}
//# sourceMappingURL=signRequests.generated.js.map