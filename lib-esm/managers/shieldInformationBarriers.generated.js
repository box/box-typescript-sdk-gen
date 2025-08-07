import { deserializeShieldInformationBarrier } from '../schemas/shieldInformationBarrier.generated.js';
import { deserializeShieldInformationBarriers } from '../schemas/shieldInformationBarriers.generated.js';
import { serializeEnterpriseBase } from '../schemas/enterpriseBase.generated.js';
import { deserializeEnterpriseBase } from '../schemas/enterpriseBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetShieldInformationBarrierByIdOptionals {
    constructor(fields) {
        this.headers = new GetShieldInformationBarrierByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateShieldInformationBarrierStatusOptionals {
    constructor(fields) {
        this.headers = new UpdateShieldInformationBarrierStatusHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateShieldInformationBarrierOptionals {
    constructor(fields) {
        this.headers = new CreateShieldInformationBarrierHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetShieldInformationBarrierByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateShieldInformationBarrierStatusHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetShieldInformationBarriersHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateShieldInformationBarrierHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class ShieldInformationBarriersManager {
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
       * Get shield information barrier based on provided ID.
       * @param {string} shieldInformationBarrierId The ID of the shield information barrier.
      Example: "1910967"
       * @param {GetShieldInformationBarrierByIdOptionalsInput} optionalsInput
       * @returns {Promise<ShieldInformationBarrier>}
       */
    async getShieldInformationBarrierById(shieldInformationBarrierId, optionalsInput = {}) {
        const optionals = new GetShieldInformationBarrierByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barriers/', toString(shieldInformationBarrierId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeShieldInformationBarrier(response.data),
            rawData: response.data,
        };
    }
    /**
     * Change status of shield information barrier with the specified ID.
     * @param {UpdateShieldInformationBarrierStatusRequestBody} requestBody Request body of updateShieldInformationBarrierStatus method
     * @param {UpdateShieldInformationBarrierStatusOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrier>}
     */
    async updateShieldInformationBarrierStatus(requestBody, optionalsInput = {}) {
        const optionals = new UpdateShieldInformationBarrierStatusOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barriers/change_status'),
            method: 'POST',
            headers: headersMap,
            data: serializeUpdateShieldInformationBarrierStatusRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeShieldInformationBarrier(response.data),
            rawData: response.data,
        };
    }
    /**
     * Retrieves a list of shield information barrier objects
     * for the enterprise of JWT.
     * @param {GetShieldInformationBarriersQueryParams} queryParams Query parameters of getShieldInformationBarriers method
     * @param {GetShieldInformationBarriersHeadersInput} headersInput Headers of getShieldInformationBarriers method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<ShieldInformationBarriers>}
     */
    async getShieldInformationBarriers(queryParams = {}, headersInput = new GetShieldInformationBarriersHeaders({}), cancellationToken) {
        const headers = new GetShieldInformationBarriersHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barriers'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeShieldInformationBarriers(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a shield information barrier to
     * separate individuals/groups within the same
     * firm and prevents confidential information passing between them.
     * @param {CreateShieldInformationBarrierRequestBody} requestBody Request body of createShieldInformationBarrier method
     * @param {CreateShieldInformationBarrierOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrier>}
     */
    async createShieldInformationBarrier(requestBody, optionalsInput = {}) {
        const optionals = new CreateShieldInformationBarrierOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barriers'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateShieldInformationBarrierRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeShieldInformationBarrier(response.data),
            rawData: response.data,
        };
    }
}
export function serializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(val) {
    return val;
}
export function deserializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(val) {
    if (val == 'pending') {
        return val;
    }
    if (val == 'disabled') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateShieldInformationBarrierStatusRequestBodyStatusField",
    });
}
export function serializeUpdateShieldInformationBarrierStatusRequestBody(val) {
    return {
        ['id']: val.id,
        ['status']: serializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(val.status),
    };
}
export function deserializeUpdateShieldInformationBarrierStatusRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateShieldInformationBarrierStatusRequestBody"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "UpdateShieldInformationBarrierStatusRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateShieldInformationBarrierStatusRequestBody"',
        });
    }
    const id = val.id;
    if (val.status == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "status" of type "UpdateShieldInformationBarrierStatusRequestBody" to be defined',
        });
    }
    const status = deserializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(val.status);
    return {
        id: id,
        status: status,
    };
}
export function serializeCreateShieldInformationBarrierRequestBody(val) {
    return { ['enterprise']: serializeEnterpriseBase(val.enterprise) };
}
export function deserializeCreateShieldInformationBarrierRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateShieldInformationBarrierRequestBody"',
        });
    }
    if (val.enterprise == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "enterprise" of type "CreateShieldInformationBarrierRequestBody" to be defined',
        });
    }
    const enterprise = deserializeEnterpriseBase(val.enterprise);
    return {
        enterprise: enterprise,
    };
}
//# sourceMappingURL=shieldInformationBarriers.generated.js.map