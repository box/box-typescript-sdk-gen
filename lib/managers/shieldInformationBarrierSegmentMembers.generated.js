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
exports.ShieldInformationBarrierSegmentMembersManager = exports.CreateShieldInformationBarrierSegmentMemberHeaders = exports.GetShieldInformationBarrierSegmentMembersHeaders = exports.DeleteShieldInformationBarrierSegmentMemberByIdHeaders = exports.GetShieldInformationBarrierSegmentMemberByIdHeaders = exports.CreateShieldInformationBarrierSegmentMemberOptionals = exports.GetShieldInformationBarrierSegmentMembersOptionals = exports.DeleteShieldInformationBarrierSegmentMemberByIdOptionals = exports.GetShieldInformationBarrierSegmentMemberByIdOptionals = void 0;
exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField = serializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField;
exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField = deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField;
exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField = serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField;
exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField = deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField;
exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField = serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField;
exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField = deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField;
exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBody = serializeCreateShieldInformationBarrierSegmentMemberRequestBody;
exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBody = deserializeCreateShieldInformationBarrierSegmentMemberRequestBody;
const shieldInformationBarrierSegmentMember_generated_js_1 = require("../schemas/shieldInformationBarrierSegmentMember.generated.js");
const shieldInformationBarrierSegmentMembers_generated_js_1 = require("../schemas/shieldInformationBarrierSegmentMembers.generated.js");
const shieldInformationBarrierBase_generated_js_1 = require("../schemas/shieldInformationBarrierBase.generated.js");
const shieldInformationBarrierBase_generated_js_2 = require("../schemas/shieldInformationBarrierBase.generated.js");
const userBase_generated_js_1 = require("../schemas/userBase.generated.js");
const userBase_generated_js_2 = require("../schemas/userBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetShieldInformationBarrierSegmentMemberByIdOptionals {
    constructor(fields) {
        this.headers = new GetShieldInformationBarrierSegmentMemberByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetShieldInformationBarrierSegmentMemberByIdOptionals = GetShieldInformationBarrierSegmentMemberByIdOptionals;
class DeleteShieldInformationBarrierSegmentMemberByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteShieldInformationBarrierSegmentMemberByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteShieldInformationBarrierSegmentMemberByIdOptionals = DeleteShieldInformationBarrierSegmentMemberByIdOptionals;
class GetShieldInformationBarrierSegmentMembersOptionals {
    constructor(fields) {
        this.headers = new GetShieldInformationBarrierSegmentMembersHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetShieldInformationBarrierSegmentMembersOptionals = GetShieldInformationBarrierSegmentMembersOptionals;
class CreateShieldInformationBarrierSegmentMemberOptionals {
    constructor(fields) {
        this.headers = new CreateShieldInformationBarrierSegmentMemberHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateShieldInformationBarrierSegmentMemberOptionals = CreateShieldInformationBarrierSegmentMemberOptionals;
class GetShieldInformationBarrierSegmentMemberByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetShieldInformationBarrierSegmentMemberByIdHeaders = GetShieldInformationBarrierSegmentMemberByIdHeaders;
class DeleteShieldInformationBarrierSegmentMemberByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteShieldInformationBarrierSegmentMemberByIdHeaders = DeleteShieldInformationBarrierSegmentMemberByIdHeaders;
class GetShieldInformationBarrierSegmentMembersHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetShieldInformationBarrierSegmentMembersHeaders = GetShieldInformationBarrierSegmentMembersHeaders;
class CreateShieldInformationBarrierSegmentMemberHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateShieldInformationBarrierSegmentMemberHeaders = CreateShieldInformationBarrierSegmentMemberHeaders;
class ShieldInformationBarrierSegmentMembersManager {
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
       * Retrieves a shield information barrier
       * segment member by its ID.
       * @param {string} shieldInformationBarrierSegmentMemberId The ID of the shield information barrier segment Member.
      Example: "7815"
       * @param {GetShieldInformationBarrierSegmentMemberByIdOptionalsInput} optionalsInput
       * @returns {Promise<ShieldInformationBarrierSegmentMember>}
       */
    getShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId_1) {
        return __awaiter(this, arguments, void 0, function* (shieldInformationBarrierSegmentMemberId, optionalsInput = {}) {
            const optionals = new GetShieldInformationBarrierSegmentMemberByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segment_members/', (0, utils_js_2.toString)(shieldInformationBarrierSegmentMemberId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, shieldInformationBarrierSegmentMember_generated_js_1.deserializeShieldInformationBarrierSegmentMember)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Deletes a shield information barrier
       * segment member based on provided ID.
       * @param {string} shieldInformationBarrierSegmentMemberId The ID of the shield information barrier segment Member.
      Example: "7815"
       * @param {DeleteShieldInformationBarrierSegmentMemberByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId_1) {
        return __awaiter(this, arguments, void 0, function* (shieldInformationBarrierSegmentMemberId, optionalsInput = {}) {
            const optionals = new DeleteShieldInformationBarrierSegmentMemberByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segment_members/', (0, utils_js_2.toString)(shieldInformationBarrierSegmentMemberId)),
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
     * Lists shield information barrier segment members
     * based on provided segment IDs.
     * @param {GetShieldInformationBarrierSegmentMembersQueryParams} queryParams Query parameters of getShieldInformationBarrierSegmentMembers method
     * @param {GetShieldInformationBarrierSegmentMembersOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierSegmentMembers>}
     */
    getShieldInformationBarrierSegmentMembers(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetShieldInformationBarrierSegmentMembersOptionals({
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
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segment_members'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, shieldInformationBarrierSegmentMembers_generated_js_1.deserializeShieldInformationBarrierSegmentMembers)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a new shield information barrier segment member.
     * @param {CreateShieldInformationBarrierSegmentMemberRequestBody} requestBody Request body of createShieldInformationBarrierSegmentMember method
     * @param {CreateShieldInformationBarrierSegmentMemberOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrierSegmentMember>}
     */
    createShieldInformationBarrierSegmentMember(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateShieldInformationBarrierSegmentMemberOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barrier_segment_members'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateShieldInformationBarrierSegmentMemberRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, shieldInformationBarrierSegmentMember_generated_js_1.deserializeShieldInformationBarrierSegmentMember)(response.data)), { rawData: response.data });
        });
    }
}
exports.ShieldInformationBarrierSegmentMembersManager = ShieldInformationBarrierSegmentMembersManager;
function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField(val) {
    return val;
}
function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField(val) {
    if (val == 'shield_information_barrier_segment_member') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateShieldInformationBarrierSegmentMemberRequestBodyTypeField",
    });
}
function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField(val) {
    return val;
}
function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField(val) {
    if (val == 'shield_information_barrier_segment') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField",
    });
}
function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField(val.type),
    };
}
function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField(val.type);
    return {
        id: id,
        type: type,
    };
}
function serializeCreateShieldInformationBarrierSegmentMemberRequestBody(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField(val.type),
        ['shield_information_barrier']: val.shieldInformationBarrier == void 0
            ? val.shieldInformationBarrier
            : (0, shieldInformationBarrierBase_generated_js_1.serializeShieldInformationBarrierBase)(val.shieldInformationBarrier),
        ['shield_information_barrier_segment']: serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment),
        ['user']: (0, userBase_generated_js_1.serializeUserBase)(val.user),
    };
}
function deserializeCreateShieldInformationBarrierSegmentMemberRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateShieldInformationBarrierSegmentMemberRequestBody"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField(val.type);
    const shieldInformationBarrier = val.shield_information_barrier == void 0
        ? void 0
        : (0, shieldInformationBarrierBase_generated_js_2.deserializeShieldInformationBarrierBase)(val.shield_information_barrier);
    if (val.shield_information_barrier_segment == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "shield_information_barrier_segment" of type "CreateShieldInformationBarrierSegmentMemberRequestBody" to be defined',
        });
    }
    const shieldInformationBarrierSegment = deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    if (val.user == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "user" of type "CreateShieldInformationBarrierSegmentMemberRequestBody" to be defined',
        });
    }
    const user = (0, userBase_generated_js_2.deserializeUserBase)(val.user);
    return {
        type: type,
        shieldInformationBarrier: shieldInformationBarrier,
        shieldInformationBarrierSegment: shieldInformationBarrierSegment,
        user: user,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegmentMembers.generated.js.map