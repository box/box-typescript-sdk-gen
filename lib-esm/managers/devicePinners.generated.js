import { deserializeDevicePinner } from '../schemas/devicePinner.generated.js';
import { deserializeDevicePinners } from '../schemas/devicePinners.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
export class GetDevicePinnerByIdOptionals {
    constructor(fields) {
        this.headers = new GetDevicePinnerByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteDevicePinnerByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteDevicePinnerByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetEnterpriseDevicePinnersOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetEnterpriseDevicePinnersHeaders({});
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
export class GetDevicePinnerByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteDevicePinnerByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetEnterpriseDevicePinnersHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DevicePinnersManager {
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
       * Retrieves information about an individual device pin.
       * @param {string} devicePinnerId The ID of the device pin.
      Example: "2324234"
       * @param {GetDevicePinnerByIdOptionalsInput} optionalsInput
       * @returns {Promise<DevicePinner>}
       */
    async getDevicePinnerById(devicePinnerId, optionalsInput = {}) {
        const optionals = new GetDevicePinnerByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/device_pinners/', toString(devicePinnerId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeDevicePinner(response.data),
            rawData: response.data,
        };
    }
    /**
       * Deletes an individual device pin.
       * @param {string} devicePinnerId The ID of the device pin.
      Example: "2324234"
       * @param {DeleteDevicePinnerByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteDevicePinnerById(devicePinnerId, optionalsInput = {}) {
        const optionals = new DeleteDevicePinnerByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/device_pinners/', toString(devicePinnerId)),
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
       * Retrieves all the device pins within an enterprise.
       *
       * The user must have admin privileges, and the application
       * needs the "manage enterprise" scope to make this call.
       * @param {string} enterpriseId The ID of the enterprise.
      Example: "3442311"
       * @param {GetEnterpriseDevicePinnersOptionalsInput} optionalsInput
       * @returns {Promise<DevicePinners>}
       */
    async getEnterpriseDevicePinners(enterpriseId, optionalsInput = {}) {
        const optionals = new GetEnterpriseDevicePinnersOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
            ['direction']: toString(queryParams.direction),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/enterprises/', toString(enterpriseId), '/device_pinners'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeDevicePinners(response.data),
            rawData: response.data,
        };
    }
}
export function serializeGetEnterpriseDevicePinnersQueryParamsDirectionField(val) {
    return val;
}
export function deserializeGetEnterpriseDevicePinnersQueryParamsDirectionField(val) {
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
        message: "Can't deserialize GetEnterpriseDevicePinnersQueryParamsDirectionField",
    });
}
//# sourceMappingURL=devicePinners.generated.js.map