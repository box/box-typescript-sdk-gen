import { deserializeShieldInformationBarrierSegment } from '../schemas/shieldInformationBarrierSegment.generated.js';
import { deserializeShieldInformationBarrierSegments } from '../schemas/shieldInformationBarrierSegments.generated.js';
import { serializeShieldInformationBarrierBase } from '../schemas/shieldInformationBarrierBase.generated.js';
import { deserializeShieldInformationBarrierBase } from '../schemas/shieldInformationBarrierBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetShieldInformationBarrierSegmentByIdOptionals {
    constructor(fields) {
        this.headers = new GetShieldInformationBarrierSegmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteShieldInformationBarrierSegmentByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteShieldInformationBarrierSegmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateShieldInformationBarrierSegmentByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new UpdateShieldInformationBarrierSegmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.requestBody !== undefined) {
            this.requestBody = fields.requestBody;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetShieldInformationBarrierSegmentsOptionals {
    constructor(fields) {
        this.headers = new GetShieldInformationBarrierSegmentsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateShieldInformationBarrierSegmentOptionals {
    constructor(fields) {
        this.headers = new CreateShieldInformationBarrierSegmentHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetShieldInformationBarrierSegmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteShieldInformationBarrierSegmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateShieldInformationBarrierSegmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetShieldInformationBarrierSegmentsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateShieldInformationBarrierSegmentHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class ShieldInformationBarrierSegmentsManager {
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
       * Retrieves shield information barrier segment based on provided ID..
       * @param {string} shieldInformationBarrierSegmentId The ID of the shield information barrier segment.
      Example: "3423"
       * @param {GetShieldInformationBarrierSegmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<ShieldInformationBarrierSegment>}
       */
    async getShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId, optionalsInput = {}) {
        const optionals = new GetShieldInformationBarrierSegmentByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segments/', toString(shieldInformationBarrierSegmentId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeShieldInformationBarrierSegment(response.data),
            rawData: response.data,
        };
    }
    /**
       * Deletes the shield information barrier segment
       * based on provided ID.
       * @param {string} shieldInformationBarrierSegmentId The ID of the shield information barrier segment.
      Example: "3423"
       * @param {DeleteShieldInformationBarrierSegmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId, optionalsInput = {}) {
        const optionals = new DeleteShieldInformationBarrierSegmentByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segments/', toString(shieldInformationBarrierSegmentId)),
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
       * Updates the shield information barrier segment based on provided ID..
       * @param {string} shieldInformationBarrierSegmentId The ID of the shield information barrier segment.
      Example: "3423"
       * @param {UpdateShieldInformationBarrierSegmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<ShieldInformationBarrierSegment>}
       */
    async updateShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId, optionalsInput = {}) {
        const optionals = new UpdateShieldInformationBarrierSegmentByIdOptionals({
            requestBody: optionalsInput.requestBody,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const requestBody = optionals.requestBody;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segments/', toString(shieldInformationBarrierSegmentId)),
            method: 'PUT',
            headers: headersMap,
            data: serializeUpdateShieldInformationBarrierSegmentByIdRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeShieldInformationBarrierSegment(response.data),
            rawData: response.data,
        };
    }
    /**
     * Retrieves a list of shield information barrier segment objects
     * for the specified Information Barrier ID.
     * @param {GetShieldInformationBarrierSegmentsQueryParams} queryParams Query parameters of getShieldInformationBarrierSegments method
     * @param {GetShieldInformationBarrierSegmentsOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierSegments>}
     */
    async getShieldInformationBarrierSegments(queryParams, optionalsInput = {}) {
        const optionals = new GetShieldInformationBarrierSegmentsOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['shield_information_barrier_id']: toString(queryParams.shieldInformationBarrierId),
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segments'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeShieldInformationBarrierSegments(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a shield information barrier segment.
     * @param {CreateShieldInformationBarrierSegmentRequestBody} requestBody Request body of createShieldInformationBarrierSegment method
     * @param {CreateShieldInformationBarrierSegmentOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierSegment>}
     */
    async createShieldInformationBarrierSegment(requestBody, optionalsInput = {}) {
        const optionals = new CreateShieldInformationBarrierSegmentOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segments'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateShieldInformationBarrierSegmentRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeShieldInformationBarrierSegment(response.data),
            rawData: response.data,
        };
    }
}
export function serializeUpdateShieldInformationBarrierSegmentByIdRequestBody(val) {
    return { ['name']: val.name, ['description']: val.description };
}
export function deserializeUpdateShieldInformationBarrierSegmentByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateShieldInformationBarrierSegmentByIdRequestBody"',
        });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "UpdateShieldInformationBarrierSegmentByIdRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "UpdateShieldInformationBarrierSegmentByIdRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    return {
        name: name,
        description: description,
    };
}
export function serializeCreateShieldInformationBarrierSegmentRequestBody(val) {
    return {
        ['shield_information_barrier']: serializeShieldInformationBarrierBase(val.shieldInformationBarrier),
        ['name']: val.name,
        ['description']: val.description,
    };
}
export function deserializeCreateShieldInformationBarrierSegmentRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateShieldInformationBarrierSegmentRequestBody"',
        });
    }
    if (val.shield_information_barrier == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "shield_information_barrier" of type "CreateShieldInformationBarrierSegmentRequestBody" to be defined',
        });
    }
    const shieldInformationBarrier = deserializeShieldInformationBarrierBase(val.shield_information_barrier);
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "CreateShieldInformationBarrierSegmentRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "CreateShieldInformationBarrierSegmentRequestBody"',
        });
    }
    const name = val.name;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "CreateShieldInformationBarrierSegmentRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    return {
        shieldInformationBarrier: shieldInformationBarrier,
        name: name,
        description: description,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegments.generated.js.map