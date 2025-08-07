"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShieldInformationBarrierSegmentRestrictionsManager = exports.CreateShieldInformationBarrierSegmentRestrictionHeaders = exports.CreateShieldInformationBarrierSegmentRestrictionRequestBody = exports.GetShieldInformationBarrierSegmentRestrictionsHeaders = exports.DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders = exports.GetShieldInformationBarrierSegmentRestrictionByIdHeaders = exports.CreateShieldInformationBarrierSegmentRestrictionOptionals = exports.GetShieldInformationBarrierSegmentRestrictionsOptionals = exports.DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals = exports.GetShieldInformationBarrierSegmentRestrictionByIdOptionals = void 0;
exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField = serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField;
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField;
exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField = serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField;
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField;
exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField = serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField;
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField;
exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField = serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField;
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField;
exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField = serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField;
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField;
exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBody = serializeCreateShieldInformationBarrierSegmentRestrictionRequestBody;
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBody = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBody;
exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyInput = serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyInput;
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyInput = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyInput;
const shieldInformationBarrierSegmentRestriction_generated_js_1 = require("../schemas/shieldInformationBarrierSegmentRestriction.generated.js");
const shieldInformationBarrierSegmentRestrictions_generated_js_1 = require("../schemas/shieldInformationBarrierSegmentRestrictions.generated.js");
const shieldInformationBarrierBase_generated_js_1 = require("../schemas/shieldInformationBarrierBase.generated.js");
const shieldInformationBarrierBase_generated_js_2 = require("../schemas/shieldInformationBarrierBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetShieldInformationBarrierSegmentRestrictionByIdOptionals {
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
exports.GetShieldInformationBarrierSegmentRestrictionByIdOptionals = GetShieldInformationBarrierSegmentRestrictionByIdOptionals;
class DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals {
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
exports.DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals = DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals;
class GetShieldInformationBarrierSegmentRestrictionsOptionals {
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
exports.GetShieldInformationBarrierSegmentRestrictionsOptionals = GetShieldInformationBarrierSegmentRestrictionsOptionals;
class CreateShieldInformationBarrierSegmentRestrictionOptionals {
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
exports.CreateShieldInformationBarrierSegmentRestrictionOptionals = CreateShieldInformationBarrierSegmentRestrictionOptionals;
class GetShieldInformationBarrierSegmentRestrictionByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetShieldInformationBarrierSegmentRestrictionByIdHeaders = GetShieldInformationBarrierSegmentRestrictionByIdHeaders;
class DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders = DeleteShieldInformationBarrierSegmentRestrictionByIdHeaders;
class GetShieldInformationBarrierSegmentRestrictionsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetShieldInformationBarrierSegmentRestrictionsHeaders = GetShieldInformationBarrierSegmentRestrictionsHeaders;
class CreateShieldInformationBarrierSegmentRestrictionRequestBody {
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
exports.CreateShieldInformationBarrierSegmentRestrictionRequestBody = CreateShieldInformationBarrierSegmentRestrictionRequestBody;
class CreateShieldInformationBarrierSegmentRestrictionHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateShieldInformationBarrierSegmentRestrictionHeaders = CreateShieldInformationBarrierSegmentRestrictionHeaders;
class ShieldInformationBarrierSegmentRestrictionsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
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
    getShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId_1) {
        return __awaiter(this, arguments, void 0, function* (shieldInformationBarrierSegmentRestrictionId, optionalsInput = {}) {
            const optionals = new GetShieldInformationBarrierSegmentRestrictionByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segment_restrictions/', (0, utils_js_2.toString)(shieldInformationBarrierSegmentRestrictionId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, shieldInformationBarrierSegmentRestriction_generated_js_1.deserializeShieldInformationBarrierSegmentRestriction)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Delete shield information barrier segment restriction
       * based on provided ID.
       * @param {string} shieldInformationBarrierSegmentRestrictionId The ID of the shield information barrier segment Restriction.
      Example: "4563"
       * @param {DeleteShieldInformationBarrierSegmentRestrictionByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId_1) {
        return __awaiter(this, arguments, void 0, function* (shieldInformationBarrierSegmentRestrictionId, optionalsInput = {}) {
            const optionals = new DeleteShieldInformationBarrierSegmentRestrictionByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segment_restrictions/', (0, utils_js_2.toString)(shieldInformationBarrierSegmentRestrictionId)),
                method: 'DELETE',
                headers: headersMap,
                responseFormat: 'no_content',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
    }
    /**
     * Lists shield information barrier segment restrictions
     * based on provided segment ID.
     * @param {GetShieldInformationBarrierSegmentRestrictionsQueryParams} queryParams Query parameters of getShieldInformationBarrierSegmentRestrictions method
     * @param {GetShieldInformationBarrierSegmentRestrictionsOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierSegmentRestrictions>}
     */
    getShieldInformationBarrierSegmentRestrictions(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetShieldInformationBarrierSegmentRestrictionsOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['shield_information_barrier_segment_id']: (0, utils_js_2.toString)(queryParams.shieldInformationBarrierSegmentId),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segment_restrictions'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, shieldInformationBarrierSegmentRestrictions_generated_js_1.deserializeShieldInformationBarrierSegmentRestrictions)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a shield information barrier
     * segment restriction object.
     * @param {CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput} requestBodyInput Request body of createShieldInformationBarrierSegmentRestriction method
     * @param {CreateShieldInformationBarrierSegmentRestrictionOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierSegmentRestriction>}
     */
    createShieldInformationBarrierSegmentRestriction(requestBodyInput_1) {
        return __awaiter(this, arguments, void 0, function* (requestBodyInput, optionalsInput = {}) {
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
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
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
            return Object.assign(Object.assign({}, (0, shieldInformationBarrierSegmentRestriction_generated_js_1.deserializeShieldInformationBarrierSegmentRestriction)(response.data)), { rawData: response.data });
        });
    }
}
exports.ShieldInformationBarrierSegmentRestrictionsManager = ShieldInformationBarrierSegmentRestrictionsManager;
function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(val) {
    return val;
}
function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(val) {
    if (val == 'shield_information_barrier_segment_restriction') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField",
    });
}
function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField(val) {
    return val;
}
function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField(val) {
    if (val == 'shield_information_barrier_segment') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField",
    });
}
function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentTypeField(val.type),
    };
}
function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField(val) {
    return val;
}
function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField(val) {
    if (val == 'shield_information_barrier_segment') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField",
    });
}
function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentTypeField(val.type),
    };
}
function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBody(val) {
    return {
        ['type']: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(val.type),
        ['shield_information_barrier']: val.shieldInformationBarrier == void 0
            ? val.shieldInformationBarrier
            : (0, shieldInformationBarrierBase_generated_js_1.serializeShieldInformationBarrierBase)(val.shieldInformationBarrier),
        ['shield_information_barrier_segment']: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment),
        ['restricted_segment']: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(val.restrictedSegment),
    };
}
function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateShieldInformationBarrierSegmentRestrictionRequestBody"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CreateShieldInformationBarrierSegmentRestrictionRequestBody" to be defined',
        });
    }
    const type = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(val.type);
    const shieldInformationBarrier = val.shield_information_barrier == void 0
        ? void 0
        : (0, shieldInformationBarrierBase_generated_js_2.deserializeShieldInformationBarrierBase)(val.shield_information_barrier);
    if (val.shield_information_barrier_segment == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "shield_information_barrier_segment" of type "CreateShieldInformationBarrierSegmentRestrictionRequestBody" to be defined',
        });
    }
    const shieldInformationBarrierSegment = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    if (val.restricted_segment == void 0) {
        throw new errors_js_1.BoxSdkError({
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
function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(val.type),
        ['shield_information_barrier']: val.shieldInformationBarrier == void 0
            ? val.shieldInformationBarrier
            : (0, shieldInformationBarrierBase_generated_js_1.serializeShieldInformationBarrierBase)(val.shieldInformationBarrier),
        ['shield_information_barrier_segment']: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment),
        ['restricted_segment']: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyRestrictedSegmentField(val.restrictedSegment),
    };
}
function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyTypeField(val.type);
    const shieldInformationBarrier = val.shield_information_barrier == void 0
        ? void 0
        : (0, shieldInformationBarrierBase_generated_js_2.deserializeShieldInformationBarrierBase)(val.shield_information_barrier);
    if (val.shield_information_barrier_segment == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "shield_information_barrier_segment" of type "CreateShieldInformationBarrierSegmentRestrictionRequestBodyInput" to be defined',
        });
    }
    const shieldInformationBarrierSegment = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    if (val.restricted_segment == void 0) {
        throw new errors_js_1.BoxSdkError({
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