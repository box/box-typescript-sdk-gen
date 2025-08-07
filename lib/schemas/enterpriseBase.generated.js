"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeEnterpriseBaseTypeField = serializeEnterpriseBaseTypeField;
exports.deserializeEnterpriseBaseTypeField = deserializeEnterpriseBaseTypeField;
exports.serializeEnterpriseBase = serializeEnterpriseBase;
exports.deserializeEnterpriseBase = deserializeEnterpriseBase;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeEnterpriseBaseTypeField(val) {
    return val;
}
function deserializeEnterpriseBaseTypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize EnterpriseBaseTypeField",
    });
}
function serializeEnterpriseBase(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeEnterpriseBaseTypeField(val.type),
    };
}
function deserializeEnterpriseBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "EnterpriseBase"' });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "EnterpriseBase"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeEnterpriseBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=enterpriseBase.generated.js.map