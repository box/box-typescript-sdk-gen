import { deserializeTermsOfServices } from '../schemas/termsOfServices.generated.js';
import { deserializeTermsOfService } from '../schemas/termsOfService.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateTermsOfServiceOptionals {
    constructor(fields) {
        this.headers = new CreateTermsOfServiceHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetTermsOfServiceByIdOptionals {
    constructor(fields) {
        this.headers = new GetTermsOfServiceByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateTermsOfServiceByIdOptionals {
    constructor(fields) {
        this.headers = new UpdateTermsOfServiceByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetTermsOfServiceHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateTermsOfServiceHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetTermsOfServiceByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateTermsOfServiceByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class TermsOfServicesManager {
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
     * Returns the current terms of service text and settings
     * for the enterprise.
     * @param {GetTermsOfServiceQueryParams} queryParams Query parameters of getTermsOfService method
     * @param {GetTermsOfServiceHeadersInput} headersInput Headers of getTermsOfService method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<TermsOfServices>}
     */
    async getTermsOfService(queryParams = {}, headersInput = new GetTermsOfServiceHeaders({}), cancellationToken) {
        const headers = new GetTermsOfServiceHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['tos_type']: toString(queryParams.tosType),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/terms_of_services'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTermsOfServices(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a terms of service for a given enterprise
     * and type of user.
     * @param {CreateTermsOfServiceRequestBody} requestBody Request body of createTermsOfService method
     * @param {CreateTermsOfServiceOptionalsInput} optionalsInput
     * @returns {Promise<TermsOfService>}
     */
    async createTermsOfService(requestBody, optionalsInput = {}) {
        const optionals = new CreateTermsOfServiceOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/terms_of_services'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateTermsOfServiceRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTermsOfService(response.data),
            rawData: response.data,
        };
    }
    /**
       * Fetches a specific terms of service.
       * @param {string} termsOfServiceId The ID of the terms of service.
      Example: "324234"
       * @param {GetTermsOfServiceByIdOptionalsInput} optionalsInput
       * @returns {Promise<TermsOfService>}
       */
    async getTermsOfServiceById(termsOfServiceId, optionalsInput = {}) {
        const optionals = new GetTermsOfServiceByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/terms_of_services/', toString(termsOfServiceId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTermsOfService(response.data),
            rawData: response.data,
        };
    }
    /**
       * Updates a specific terms of service.
       * @param {string} termsOfServiceId The ID of the terms of service.
      Example: "324234"
       * @param {UpdateTermsOfServiceByIdRequestBody} requestBody Request body of updateTermsOfServiceById method
       * @param {UpdateTermsOfServiceByIdOptionalsInput} optionalsInput
       * @returns {Promise<TermsOfService>}
       */
    async updateTermsOfServiceById(termsOfServiceId, requestBody, optionalsInput = {}) {
        const optionals = new UpdateTermsOfServiceByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/terms_of_services/', toString(termsOfServiceId)),
            method: 'PUT',
            headers: headersMap,
            data: serializeUpdateTermsOfServiceByIdRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTermsOfService(response.data),
            rawData: response.data,
        };
    }
}
export function serializeGetTermsOfServiceQueryParamsTosTypeField(val) {
    return val;
}
export function deserializeGetTermsOfServiceQueryParamsTosTypeField(val) {
    if (val == 'external') {
        return val;
    }
    if (val == 'managed') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetTermsOfServiceQueryParamsTosTypeField",
    });
}
export function serializeCreateTermsOfServiceRequestBodyStatusField(val) {
    return val;
}
export function deserializeCreateTermsOfServiceRequestBodyStatusField(val) {
    if (val == 'enabled') {
        return val;
    }
    if (val == 'disabled') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateTermsOfServiceRequestBodyStatusField",
    });
}
export function serializeCreateTermsOfServiceRequestBodyTosTypeField(val) {
    return val;
}
export function deserializeCreateTermsOfServiceRequestBodyTosTypeField(val) {
    if (val == 'external') {
        return val;
    }
    if (val == 'managed') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateTermsOfServiceRequestBodyTosTypeField",
    });
}
export function serializeCreateTermsOfServiceRequestBody(val) {
    return {
        ['status']: serializeCreateTermsOfServiceRequestBodyStatusField(val.status),
        ['tos_type']: val.tosType == void 0
            ? val.tosType
            : serializeCreateTermsOfServiceRequestBodyTosTypeField(val.tosType),
        ['text']: val.text,
    };
}
export function deserializeCreateTermsOfServiceRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateTermsOfServiceRequestBody"',
        });
    }
    if (val.status == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "status" of type "CreateTermsOfServiceRequestBody" to be defined',
        });
    }
    const status = deserializeCreateTermsOfServiceRequestBodyStatusField(val.status);
    const tosType = val.tos_type == void 0
        ? void 0
        : deserializeCreateTermsOfServiceRequestBodyTosTypeField(val.tos_type);
    if (val.text == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "text" of type "CreateTermsOfServiceRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.text)) {
        throw new BoxSdkError({
            message: 'Expecting string for "text" of type "CreateTermsOfServiceRequestBody"',
        });
    }
    const text = val.text;
    return {
        status: status,
        tosType: tosType,
        text: text,
    };
}
export function serializeUpdateTermsOfServiceByIdRequestBodyStatusField(val) {
    return val;
}
export function deserializeUpdateTermsOfServiceByIdRequestBodyStatusField(val) {
    if (val == 'enabled') {
        return val;
    }
    if (val == 'disabled') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateTermsOfServiceByIdRequestBodyStatusField",
    });
}
export function serializeUpdateTermsOfServiceByIdRequestBody(val) {
    return {
        ['status']: serializeUpdateTermsOfServiceByIdRequestBodyStatusField(val.status),
        ['text']: val.text,
    };
}
export function deserializeUpdateTermsOfServiceByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateTermsOfServiceByIdRequestBody"',
        });
    }
    if (val.status == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "status" of type "UpdateTermsOfServiceByIdRequestBody" to be defined',
        });
    }
    const status = deserializeUpdateTermsOfServiceByIdRequestBodyStatusField(val.status);
    if (val.text == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "text" of type "UpdateTermsOfServiceByIdRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.text)) {
        throw new BoxSdkError({
            message: 'Expecting string for "text" of type "UpdateTermsOfServiceByIdRequestBody"',
        });
    }
    const text = val.text;
    return {
        status: status,
        text: text,
    };
}
//# sourceMappingURL=termsOfServices.generated.js.map