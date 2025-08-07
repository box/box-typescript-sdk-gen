"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsOfService = void 0;
exports.serializeTermsOfServiceStatusField = serializeTermsOfServiceStatusField;
exports.deserializeTermsOfServiceStatusField = deserializeTermsOfServiceStatusField;
exports.serializeTermsOfServiceEnterpriseTypeField = serializeTermsOfServiceEnterpriseTypeField;
exports.deserializeTermsOfServiceEnterpriseTypeField = deserializeTermsOfServiceEnterpriseTypeField;
exports.serializeTermsOfServiceEnterpriseField = serializeTermsOfServiceEnterpriseField;
exports.deserializeTermsOfServiceEnterpriseField = deserializeTermsOfServiceEnterpriseField;
exports.serializeTermsOfServiceTosTypeField = serializeTermsOfServiceTosTypeField;
exports.deserializeTermsOfServiceTosTypeField = deserializeTermsOfServiceTosTypeField;
exports.serializeTermsOfService = serializeTermsOfService;
exports.deserializeTermsOfService = deserializeTermsOfService;
const termsOfServiceBase_generated_js_1 = require("./termsOfServiceBase.generated.js");
const termsOfServiceBase_generated_js_2 = require("./termsOfServiceBase.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const termsOfServiceBase_generated_js_3 = require("./termsOfServiceBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class TermsOfService extends termsOfServiceBase_generated_js_3.TermsOfServiceBase {
    constructor(fields) {
        super(fields);
        if (fields.status !== undefined) {
            this.status = fields.status;
        }
        if (fields.enterprise !== undefined) {
            this.enterprise = fields.enterprise;
        }
        if (fields.tosType !== undefined) {
            this.tosType = fields.tosType;
        }
        if (fields.text !== undefined) {
            this.text = fields.text;
        }
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.modifiedAt !== undefined) {
            this.modifiedAt = fields.modifiedAt;
        }
    }
}
exports.TermsOfService = TermsOfService;
function serializeTermsOfServiceStatusField(val) {
    return val;
}
function deserializeTermsOfServiceStatusField(val) {
    if (val == 'enabled') {
        return val;
    }
    if (val == 'disabled') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize TermsOfServiceStatusField",
    });
}
function serializeTermsOfServiceEnterpriseTypeField(val) {
    return val;
}
function deserializeTermsOfServiceEnterpriseTypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize TermsOfServiceEnterpriseTypeField",
    });
}
function serializeTermsOfServiceEnterpriseField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeTermsOfServiceEnterpriseTypeField(val.type),
        ['name']: val.name,
    };
}
function deserializeTermsOfServiceEnterpriseField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TermsOfServiceEnterpriseField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TermsOfServiceEnterpriseField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeTermsOfServiceEnterpriseTypeField(val.type);
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "TermsOfServiceEnterpriseField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    return {
        id: id,
        type: type,
        name: name,
    };
}
function serializeTermsOfServiceTosTypeField(val) {
    return val;
}
function deserializeTermsOfServiceTosTypeField(val) {
    if (val == 'managed') {
        return val;
    }
    if (val == 'external') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize TermsOfServiceTosTypeField",
    });
}
function serializeTermsOfService(val) {
    const base = (0, termsOfServiceBase_generated_js_2.serializeTermsOfServiceBase)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "TermsOfService"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['status']: val.status == void 0
            ? val.status
            : serializeTermsOfServiceStatusField(val.status),
        ['enterprise']: val.enterprise == void 0
            ? val.enterprise
            : serializeTermsOfServiceEnterpriseField(val.enterprise),
        ['tos_type']: val.tosType == void 0
            ? val.tosType
            : serializeTermsOfServiceTosTypeField(val.tosType),
        ['text']: val.text,
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
    });
}
function deserializeTermsOfService(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "TermsOfService"' });
    }
    const status = val.status == void 0
        ? void 0
        : deserializeTermsOfServiceStatusField(val.status);
    const enterprise = val.enterprise == void 0
        ? void 0
        : deserializeTermsOfServiceEnterpriseField(val.enterprise);
    const tosType = val.tos_type == void 0
        ? void 0
        : deserializeTermsOfServiceTosTypeField(val.tos_type);
    if (!(val.text == void 0) && !(0, json_js_1.sdIsString)(val.text)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "text" of type "TermsOfService"',
        });
    }
    const text = val.text == void 0 ? void 0 : val.text;
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "TermsOfService"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_1.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "TermsOfService"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "TermsOfService" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TermsOfService"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "TermsOfService" to be defined',
        });
    }
    const type = (0, termsOfServiceBase_generated_js_1.deserializeTermsOfServiceBaseTypeField)(val.type);
    return {
        status: status,
        enterprise: enterprise,
        tosType: tosType,
        text: text,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=termsOfService.generated.js.map