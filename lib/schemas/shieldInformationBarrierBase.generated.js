"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeShieldInformationBarrierBaseTypeField = serializeShieldInformationBarrierBaseTypeField;
exports.deserializeShieldInformationBarrierBaseTypeField = deserializeShieldInformationBarrierBaseTypeField;
exports.serializeShieldInformationBarrierBase = serializeShieldInformationBarrierBase;
exports.deserializeShieldInformationBarrierBase = deserializeShieldInformationBarrierBase;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeShieldInformationBarrierBaseTypeField(val) {
    return val;
}
function deserializeShieldInformationBarrierBaseTypeField(val) {
    if (val == 'shield_information_barrier') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierBaseTypeField",
    });
}
function serializeShieldInformationBarrierBase(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldInformationBarrierBaseTypeField(val.type),
    };
}
function deserializeShieldInformationBarrierBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierBase"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierBase"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=shieldInformationBarrierBase.generated.js.map