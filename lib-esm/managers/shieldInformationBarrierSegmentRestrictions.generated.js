import { deserializeShieldInformationBarrierSegmentRestriction } from '../schemas/shieldInformationBarrierSegmentRestriction.generated.js';
import { deserializeShieldInformationBarrierSegmentRestrictions } from '../schemas/shieldInformationBarrierSegmentRestrictions.generated.js';
import { serializeShieldInformationBarrierBase } from '../schemas/shieldInformationBarrierBase.generated.js';
import { deserializeShieldInformationBarrierBase } from '../schemas/shieldInformationBarrierBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetShieldInformationBarrierSegmentRestrictionByIdOptionals {
    constructor(fields) {
        this.headers = new GetShieldInformationBarrierSegmentRestrictionByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetShieldInformationBarrierSegmentRestrictionsOptionals {
    constructor(fields) {
        this.headers = new GetShieldInformationBarrierSegmentRestrictionsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateShieldInformationBarrierSegmentRestrictionOptionals {
    constructor(fields) {
        this.headers = new CreateShieldInformationBarrierSegmentRestrictionHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetShieldInformationBarrierSegmentRestrictionByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetShieldInformationBarrierSegmentRestrictionsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateShieldInformationBarrierSegmentRestrictionRequestBody {
    constructor(fields) {
        /**
         * The type of the shield barrier segment
         * restriction for this member. */
        this.type = 'shield_information_barrier_segment_restriction';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.shieldInformationBarrier !== undefined) {
            this.shieldInformationBarrier = fields.shieldInformationBarrier;
        }
        if (fields.shieldInformationBarrierSegment !== undefined) {
            this.shieldInformationBarrierSegment =
                fields.shieldInformationBarrierSegment;
        }
        if (fields.restrictedSegment !== undefined) {
            this.restrictedSegment = fields.restrictedSegment;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export class CreateShieldInformationBarrierSegmentRestrictionHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class ShieldInformationBarrierSegmentRestrictionsManager {
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
       * Retrieves a shield information barrier segment
       * restriction based on provided ID.
       * @param {string} shieldInformationBarrierSegmentRestrictionId The ID of the shield information barrier segment Restriction.
      Example: "4563"
       * @param {GetShieldInformationBarrierSegmentRestrictionByIdOptionalsInput} optionalsInput
       * @returns {Promise<ShieldInformationBarrierSegmentRestriction>}
       */
    async getShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId, optionalsInput = {}) {
        const optionals = new GetShieldInformationBarrierSegmentRestrictionByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segment_restrictions/', toString(shieldInformationBarrierSegmentRestrictionId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeShieldInformationBarrierSegmentRestriction(response.data),
            rawData: response.data,
        };
    }
    /**
       * Delete shield information barrier segment restriction
       * based on provided ID.
       * @param {string} shieldInformationBarrierSegmentRestrictionId The ID of the shield information barrier segment Restriction.
      Example: "4563"
       * @param {DeleteShieldInformationBarrierSegmentRestrictionByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId, optionalsInput = {}) {
        const optionals = new DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segment_restrictions/', toString(shieldInformationBarrierSegmentRestrictionId)),
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
     * Lists shield information barrier segment restrictions
     * based on provided segment ID.
     * @param {GetShieldInformationBarrierSegmentRestrictionsQueryParams} queryParams Query parameters of getShieldInformationBarrierSegmentRestrictions method
     * @param {GetShieldInformationBarrierSegmentRestrictionsOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierSegmentRestrictions>}
     */
    async getShieldInformationBarrierSegmentRestrictions(queryParams, optionalsInput = {}) {
        const optionals = new GetShieldInformationBarrierSegmentRestrictionsOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['shield_information_barrier_segment_id']: toString(queryParams.shieldInformationBarrierSegmentId),
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segment_restrictions'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeShieldInformationBarrierSegmentRestrictions(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a shield information barrier
     * segment restriction object.
     * @param {CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput} requestBodyInput Request body of createShieldInformationBarrierSegmentRestriction method
     * @param {CreateShieldInformationBarrierSegmentRestrictionOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierSegmentRestriction>}
     */
    async createShieldInformationBarrierSegmentRestriction(requestBodyInput, optionalsInput = {}) {
        const requestBody = new CreateShieldInformationBarrierSegmentRestrictionRequestBody({
            type: requestBodyInput.type,
            shieldInformationBarrier: requestBodyInput.shieldInformationBarrier,
            shieldInformationBarrierSegment: requestBodyInput.shieldInformationBarrierSegment,
            restrictedSegment: requestBodyInput.restrictedSegment,
        });
        const optionals = new CreateShieldInformationBarrierSegmentRestrictionOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segment_restrictions'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeShieldInformationBarrierSegmentRestriction(response.data),
            rawData: response.data,
        };
    }
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(val) {
    return val;
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(val) {
    if (val == 'shield_information_barrier_segment_restriction') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField",
    });
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField(val) {
    return val;
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField(val) {
    if (val == 'shield_information_barrier_segment') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField",
    });
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField(val.type),
    };
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField(val.type);
    return {
        id: id,
        type: type,
    };
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField(val) {
    return val;
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField(val) {
    if (val == 'shield_information_barrier_segment') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField",
    });
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField(val.type),
    };
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField(val.type);
    return {
        id: id,
        type: type,
    };
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBody(val) {
    return {
        ['type']: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(val.type),
        ['shield_information_barrier']: val.shieldInformationBarrier == void 0
            ? val.shieldInformationBarrier
            : serializeShieldInformationBarrierBase(val.shieldInformationBarrier),
        ['shield_information_barrier_segment']: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment),
        ['restricted_segment']: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(val.restrictedSegment),
    };
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateShieldInformationBarrierSegmentRestrictionRequestBody"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "CreateShieldInformationBarrierSegmentRestrictionRequestBody" to be defined',
        });
    }
    const type = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(val.type);
    const shieldInformationBarrier = val.shield_information_barrier == void 0
        ? void 0
        : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
    if (val.shield_information_barrier_segment == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "shield_information_barrier_segment" of type "CreateShieldInformationBarrierSegmentRestrictionRequestBody" to be defined',
        });
    }
    const shieldInformationBarrierSegment = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    if (val.restricted_segment == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "restricted_segment" of type "CreateShieldInformationBarrierSegmentRestrictionRequestBody" to be defined',
        });
    }
    const restrictedSegment = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(val.restricted_segment);
    return {
        type: type,
        shieldInformationBarrier: shieldInformationBarrier,
        shieldInformationBarrierSegment: shieldInformationBarrierSegment,
        restrictedSegment: restrictedSegment,
    };
}
export function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(val.type),
        ['shield_information_barrier']: val.shieldInformationBarrier == void 0
            ? val.shieldInformationBarrier
            : serializeShieldInformationBarrierBase(val.shieldInformationBarrier),
        ['shield_information_barrier_segment']: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment),
        ['restricted_segment']: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(val.restrictedSegment),
    };
}
export function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(val.type);
    const shieldInformationBarrier = val.shield_information_barrier == void 0
        ? void 0
        : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
    if (val.shield_information_barrier_segment == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "shield_information_barrier_segment" of type "CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput" to be defined',
        });
    }
    const shieldInformationBarrierSegment = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    if (val.restricted_segment == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "restricted_segment" of type "CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput" to be defined',
        });
    }
    const restrictedSegment = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(val.restricted_segment);
    return {
        type: type,
        shieldInformationBarrier: shieldInformationBarrier,
        shieldInformationBarrierSegment: shieldInformationBarrierSegment,
        restrictedSegment: restrictedSegment,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegmentRestrictions.generated.js.map