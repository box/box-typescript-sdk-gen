"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeEnterpriseReferenceV2025R0TypeField = serializeEnterpriseReferenceV2025R0TypeField;
exports.deserializeEnterpriseReferenceV2025R0TypeField = deserializeEnterpriseReferenceV2025R0TypeField;
exports.serializeEnterpriseReferenceV2025R0 = serializeEnterpriseReferenceV2025R0;
exports.deserializeEnterpriseReferenceV2025R0 = deserializeEnterpriseReferenceV2025R0;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
function serializeEnterpriseReferenceV2025R0TypeField(val) {
    return val;
}
function deserializeEnterpriseReferenceV2025R0TypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize EnterpriseReferenceV2025R0TypeField",
    });
}
function serializeEnterpriseReferenceV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeEnterpriseReferenceV2025R0TypeField(val.type),
    };
}
function deserializeEnterpriseReferenceV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "EnterpriseReferenceV2025R0"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "EnterpriseReferenceV2025R0"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeEnterpriseReferenceV2025R0TypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=enterpriseReferenceV2025R0.generated.js.map