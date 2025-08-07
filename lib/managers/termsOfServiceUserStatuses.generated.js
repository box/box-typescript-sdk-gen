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
exports.TermsOfServiceUserStatusesManager = exports.UpdateTermsOfServiceStatusForUserByIdHeaders = exports.CreateTermsOfServiceStatusForUserHeaders = exports.CreateTermsOfServiceStatusForUserRequestBodyUserField = exports.CreateTermsOfServiceStatusForUserRequestBodyTosField = exports.GetTermsOfServiceUserStatusesHeaders = exports.UpdateTermsOfServiceStatusForUserByIdOptionals = exports.CreateTermsOfServiceStatusForUserOptionals = exports.GetTermsOfServiceUserStatusesOptionals = void 0;
exports.serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField = serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField;
exports.deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField = deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField;
exports.serializeCreateTermsOfServiceStatusForUserRequestBodyTosField = serializeCreateTermsOfServiceStatusForUserRequestBodyTosField;
exports.deserializeCreateTermsOfServiceStatusForUserRequestBodyTosField = deserializeCreateTermsOfServiceStatusForUserRequestBodyTosField;
exports.serializeCreateTermsOfServiceStatusForUserRequestBodyTosFieldInput = serializeCreateTermsOfServiceStatusForUserRequestBodyTosFieldInput;
exports.deserializeCreateTermsOfServiceStatusForUserRequestBodyTosFieldInput = deserializeCreateTermsOfServiceStatusForUserRequestBodyTosFieldInput;
exports.serializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField = serializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField;
exports.deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField = deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField;
exports.serializeCreateTermsOfServiceStatusForUserRequestBodyUserField = serializeCreateTermsOfServiceStatusForUserRequestBodyUserField;
exports.deserializeCreateTermsOfServiceStatusForUserRequestBodyUserField = deserializeCreateTermsOfServiceStatusForUserRequestBodyUserField;
exports.serializeCreateTermsOfServiceStatusForUserRequestBodyUserFieldInput = serializeCreateTermsOfServiceStatusForUserRequestBodyUserFieldInput;
exports.deserializeCreateTermsOfServiceStatusForUserRequestBodyUserFieldInput = deserializeCreateTermsOfServiceStatusForUserRequestBodyUserFieldInput;
exports.serializeCreateTermsOfServiceStatusForUserRequestBody = serializeCreateTermsOfServiceStatusForUserRequestBody;
exports.deserializeCreateTermsOfServiceStatusForUserRequestBody = deserializeCreateTermsOfServiceStatusForUserRequestBody;
exports.serializeUpdateTermsOfServiceStatusForUserByIdRequestBody = serializeUpdateTermsOfServiceStatusForUserByIdRequestBody;
exports.deserializeUpdateTermsOfServiceStatusForUserByIdRequestBody = deserializeUpdateTermsOfServiceStatusForUserByIdRequestBody;
const termsOfServiceUserStatuses_generated_js_1 = require("../schemas/termsOfServiceUserStatuses.generated.js");
const termsOfServiceUserStatus_generated_js_1 = require("../schemas/termsOfServiceUserStatus.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class GetTermsOfServiceUserStatusesOptionals {
    constructor(fields) {
        this.headers = new GetTermsOfServiceUserStatusesHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetTermsOfServiceUserStatusesOptionals = GetTermsOfServiceUserStatusesOptionals;
class CreateTermsOfServiceStatusForUserOptionals {
    constructor(fields) {
        this.headers = new CreateTermsOfServiceStatusForUserHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateTermsOfServiceStatusForUserOptionals = CreateTermsOfServiceStatusForUserOptionals;
class UpdateTermsOfServiceStatusForUserByIdOptionals {
    constructor(fields) {
        this.headers = new UpdateTermsOfServiceStatusForUserByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateTermsOfServiceStatusForUserByIdOptionals = UpdateTermsOfServiceStatusForUserByIdOptionals;
class GetTermsOfServiceUserStatusesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetTermsOfServiceUserStatusesHeaders = GetTermsOfServiceUserStatusesHeaders;
class CreateTermsOfServiceStatusForUserRequestBodyTosField {
    constructor(fields) {
        /**
         * The type of object. */
        this.type = 'terms_of_service';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.CreateTermsOfServiceStatusForUserRequestBodyTosField = CreateTermsOfServiceStatusForUserRequestBodyTosField;
class CreateTermsOfServiceStatusForUserRequestBodyUserField {
    constructor(fields) {
        /**
         * The type of object. */
        this.type = 'user';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.CreateTermsOfServiceStatusForUserRequestBodyUserField = CreateTermsOfServiceStatusForUserRequestBodyUserField;
class CreateTermsOfServiceStatusForUserHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateTermsOfServiceStatusForUserHeaders = CreateTermsOfServiceStatusForUserHeaders;
class UpdateTermsOfServiceStatusForUserByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateTermsOfServiceStatusForUserByIdHeaders = UpdateTermsOfServiceStatusForUserByIdHeaders;
class TermsOfServiceUserStatusesManager {
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
     * Retrieves an overview of users and their status for a
     * terms of service, including Whether they have accepted
     * the terms and when.
     * @param {GetTermsOfServiceUserStatusesQueryParams} queryParams Query parameters of getTermsOfServiceUserStatuses method
     * @param {GetTermsOfServiceUserStatusesOptionalsInput} optionalsInput
     * @returns {Promise<TermsOfServiceUserStatuses>}
     */
    getTermsOfServiceUserStatuses(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetTermsOfServiceUserStatusesOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['tos_id']: (0, utils_js_2.toString)(queryParams.tosId),
                ['user_id']: (0, utils_js_2.toString)(queryParams.userId),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/terms_of_service_user_statuses'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, termsOfServiceUserStatuses_generated_js_1.deserializeTermsOfServiceUserStatuses)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Sets the status for a terms of service for a user.
     * @param {CreateTermsOfServiceStatusForUserRequestBody} requestBody Request body of createTermsOfServiceStatusForUser method
     * @param {CreateTermsOfServiceStatusForUserOptionalsInput} optionalsInput
     * @returns {Promise<TermsOfServiceUserStatus>}
     */
    createTermsOfServiceStatusForUser(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateTermsOfServiceStatusForUserOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/terms_of_service_user_statuses'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateTermsOfServiceStatusForUserRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, termsOfServiceUserStatus_generated_js_1.deserializeTermsOfServiceUserStatus)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates the status for a terms of service for a user.
       * @param {string} termsOfServiceUserStatusId The ID of the terms of service status.
      Example: "324234"
       * @param {UpdateTermsOfServiceStatusForUserByIdRequestBody} requestBody Request body of updateTermsOfServiceStatusForUserById method
       * @param {UpdateTermsOfServiceStatusForUserByIdOptionalsInput} optionalsInput
       * @returns {Promise<TermsOfServiceUserStatus>}
       */
    updateTermsOfServiceStatusForUserById(termsOfServiceUserStatusId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (termsOfServiceUserStatusId, requestBody, optionalsInput = {}) {
            const optionals = new UpdateTermsOfServiceStatusForUserByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/terms_of_service_user_statuses/', (0, utils_js_2.toString)(termsOfServiceUserStatusId)),
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateTermsOfServiceStatusForUserByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, termsOfServiceUserStatus_generated_js_1.deserializeTermsOfServiceUserStatus)(response.data)), { rawData: response.data });
        });
    }
}
exports.TermsOfServiceUserStatusesManager = TermsOfServiceUserStatusesManager;
function serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(val) {
    return val;
}
function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(val) {
    if (val == 'terms_of_service') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateTermsOfServiceStatusForUserRequestBodyTosTypeField",
    });
}
function serializeCreateTermsOfServiceStatusForUserRequestBodyTosField(val) {
    return {
        ['type']: serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateTermsOfServiceStatusForUserRequestBodyTosField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CreateTermsOfServiceStatusForUserRequestBodyTosField" to be defined',
        });
    }
    const type = deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CreateTermsOfServiceStatusForUserRequestBodyTosField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateTermsOfServiceStatusForUserRequestBodyTosField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeCreateTermsOfServiceStatusForUserRequestBodyTosFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosFieldInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(val) {
    return val;
}
function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(val) {
    if (val == 'user') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateTermsOfServiceStatusForUserRequestBodyUserTypeField",
    });
}
function serializeCreateTermsOfServiceStatusForUserRequestBodyUserField(val) {
    return {
        ['type']: serializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateTermsOfServiceStatusForUserRequestBodyUserField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CreateTermsOfServiceStatusForUserRequestBodyUserField" to be defined',
        });
    }
    const type = deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CreateTermsOfServiceStatusForUserRequestBodyUserField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateTermsOfServiceStatusForUserRequestBodyUserField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeCreateTermsOfServiceStatusForUserRequestBodyUserFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserFieldInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeCreateTermsOfServiceStatusForUserRequestBody(val) {
    return {
        ['tos']: serializeCreateTermsOfServiceStatusForUserRequestBodyTosField(val.tos),
        ['user']: serializeCreateTermsOfServiceStatusForUserRequestBodyUserField(val.user),
        ['is_accepted']: val.isAccepted,
    };
}
function deserializeCreateTermsOfServiceStatusForUserRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateTermsOfServiceStatusForUserRequestBody"',
        });
    }
    if (val.tos == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "tos" of type "CreateTermsOfServiceStatusForUserRequestBody" to be defined',
        });
    }
    const tos = deserializeCreateTermsOfServiceStatusForUserRequestBodyTosField(val.tos);
    if (val.user == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "user" of type "CreateTermsOfServiceStatusForUserRequestBody" to be defined',
        });
    }
    const user = deserializeCreateTermsOfServiceStatusForUserRequestBodyUserField(val.user);
    if (val.is_accepted == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "is_accepted" of type "CreateTermsOfServiceStatusForUserRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.is_accepted)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_accepted" of type "CreateTermsOfServiceStatusForUserRequestBody"',
        });
    }
    const isAccepted = val.is_accepted;
    return {
        tos: tos,
        user: user,
        isAccepted: isAccepted,
    };
}
function serializeUpdateTermsOfServiceStatusForUserByIdRequestBody(val) {
    return { ['is_accepted']: val.isAccepted };
}
function deserializeUpdateTermsOfServiceStatusForUserByIdRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateTermsOfServiceStatusForUserByIdRequestBody"',
        });
    }
    if (val.is_accepted == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "is_accepted" of type "UpdateTermsOfServiceStatusForUserByIdRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.is_accepted)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_accepted" of type "UpdateTermsOfServiceStatusForUserByIdRequestBody"',
        });
    }
    const isAccepted = val.is_accepted;
    return {
        isAccepted: isAccepted,
    };
}
//# sourceMappingURL=termsOfServiceUserStatuses.generated.js.map