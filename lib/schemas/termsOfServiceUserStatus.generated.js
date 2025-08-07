"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsOfServiceUserStatus = void 0;
exports.serializeTermsOfServiceUserStatusTypeField = serializeTermsOfServiceUserStatusTypeField;
exports.deserializeTermsOfServiceUserStatusTypeField = deserializeTermsOfServiceUserStatusTypeField;
exports.serializeTermsOfServiceUserStatus = serializeTermsOfServiceUserStatus;
exports.deserializeTermsOfServiceUserStatus = deserializeTermsOfServiceUserStatus;
exports.serializeTermsOfServiceUserStatusInput = serializeTermsOfServiceUserStatusInput;
exports.deserializeTermsOfServiceUserStatusInput = deserializeTermsOfServiceUserStatusInput;
const termsOfServiceBase_generated_js_1 = require("./termsOfServiceBase.generated.js");
const termsOfServiceBase_generated_js_2 = require("./termsOfServiceBase.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class TermsOfServiceUserStatus {
    constructor(fields) {
        /**
         * The value will always be `terms_of_service_user_status`. */
        this.type = 'terms_of_service_user_status';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.tos !== undefined) {
            this.tos = fields.tos;
        }
        if (fields.user !== undefined) {
            this.user = fields.user;
        }
        if (fields.isAccepted !== undefined) {
            this.isAccepted = fields.isAccepted;
        }
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.modifiedAt !== undefined) {
            this.modifiedAt = fields.modifiedAt;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.TermsOfServiceUserStatus = TermsOfServiceUserStatus;
function serializeTermsOfServiceUserStatusTypeField(val) {
    return val;
}
function deserializeTermsOfServiceUserStatusTypeField(val) {
    if (val == 'terms_of_service_user_status') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize TermsOfServiceUserStatusTypeField",
    });
}
function serializeTermsOfServiceUserStatus(val) {
    return {
        ['id']: val.id,
        ['type']: serializeTermsOfServiceUserStatusTypeField(val.type),
        ['tos']: val.tos == void 0 ? val.tos : (0, termsOfServiceBase_generated_js_1.serializeTermsOfServiceBase)(val.tos),
        ['user']: val.user == void 0 ? val.user : (0, userMini_generated_js_1.serializeUserMini)(val.user),
        ['is_accepted']: val.isAccepted,
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
    };
}
function deserializeTermsOfServiceUserStatus(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TermsOfServiceUserStatus"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "TermsOfServiceUserStatus" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TermsOfServiceUserStatus"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "TermsOfServiceUserStatus" to be defined',
        });
    }
    const type = deserializeTermsOfServiceUserStatusTypeField(val.type);
    const tos = val.tos == void 0 ? void 0 : (0, termsOfServiceBase_generated_js_2.deserializeTermsOfServiceBase)(val.tos);
    const user = val.user == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.user);
    if (!(val.is_accepted == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_accepted)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_accepted" of type "TermsOfServiceUserStatus"',
        });
    }
    const isAccepted = val.is_accepted == void 0 ? void 0 : val.is_accepted;
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "TermsOfServiceUserStatus"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_2.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "TermsOfServiceUserStatus"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    return {
        id: id,
        type: type,
        tos: tos,
        user: user,
        isAccepted: isAccepted,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
    };
}
function serializeTermsOfServiceUserStatusInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeTermsOfServiceUserStatusTypeField(val.type),
        ['tos']: val.tos == void 0 ? val.tos : (0, termsOfServiceBase_generated_js_1.serializeTermsOfServiceBase)(val.tos),
        ['user']: val.user == void 0 ? val.user : (0, userMini_generated_js_1.serializeUserMini)(val.user),
        ['is_accepted']: val.isAccepted,
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
    };
}
function deserializeTermsOfServiceUserStatusInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TermsOfServiceUserStatusInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "TermsOfServiceUserStatusInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TermsOfServiceUserStatusInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeTermsOfServiceUserStatusTypeField(val.type);
    const tos = val.tos == void 0 ? void 0 : (0, termsOfServiceBase_generated_js_2.deserializeTermsOfServiceBase)(val.tos);
    const user = val.user == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.user);
    if (!(val.is_accepted == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_accepted)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_accepted" of type "TermsOfServiceUserStatusInput"',
        });
    }
    const isAccepted = val.is_accepted == void 0 ? void 0 : val.is_accepted;
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "TermsOfServiceUserStatusInput"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_2.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "TermsOfServiceUserStatusInput"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    return {
        id: id,
        type: type,
        tos: tos,
        user: user,
        isAccepted: isAccepted,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
    };
}
//# sourceMappingURL=termsOfServiceUserStatus.generated.js.map