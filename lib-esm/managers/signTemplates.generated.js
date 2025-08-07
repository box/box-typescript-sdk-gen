import { deserializeSignTemplates } from '../schemas/signTemplates.generated.js';
import { deserializeSignTemplate } from '../schemas/signTemplate.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class GetSignTemplateByIdOptionals {
    constructor(fields) {
        this.headers = new GetSignTemplateByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetSignTemplatesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetSignTemplateByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class SignTemplatesManager {
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
     * Gets Box Sign templates created by a user.
     * @param {GetSignTemplatesQueryParams} queryParams Query parameters of getSignTemplates method
     * @param {GetSignTemplatesHeadersInput} headersInput Headers of getSignTemplates method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<SignTemplates>}
     */
    async getSignTemplates(queryParams = {}, headersInput = new GetSignTemplatesHeaders({}), cancellationToken) {
        const headers = new GetSignTemplatesHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/sign_templates'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeSignTemplates(response.data),
            rawData: response.data,
        };
    }
    /**
       * Fetches details of a specific Box Sign template.
       * @param {string} templateId The ID of a Box Sign template.
      Example: "123075213-7d117509-8f05-42e4-a5ef-5190a319d41d"
       * @param {GetSignTemplateByIdOptionalsInput} optionalsInput
       * @returns {Promise<SignTemplate>}
       */
    async getSignTemplateById(templateId, optionalsInput = {}) {
        const optionals = new GetSignTemplateByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/sign_templates/', toString(templateId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeSignTemplate(response.data),
            rawData: response.data,
        };
    }
}
//# sourceMappingURL=signTemplates.generated.js.map