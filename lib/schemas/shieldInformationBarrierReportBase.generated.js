"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeShieldInformationBarrierReportBaseTypeField = serializeShieldInformationBarrierReportBaseTypeField;
exports.deserializeShieldInformationBarrierReportBaseTypeField = deserializeShieldInformationBarrierReportBaseTypeField;
exports.serializeShieldInformationBarrierReportBase = serializeShieldInformationBarrierReportBase;
exports.deserializeShieldInformationBarrierReportBase = deserializeShieldInformationBarrierReportBase;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeShieldInformationBarrierReportBaseTypeField(val) {
    return val;
}
function deserializeShieldInformationBarrierReportBaseTypeField(val) {
    if (val == 'shield_information_barrier_report') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierReportBaseTypeField",
    });
}
function serializeShieldInformationBarrierReportBase(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldInformationBarrierReportBaseTypeField(val.type),
    };
}
function deserializeShieldInformationBarrierReportBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierReportBase"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierReportBase"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierReportBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=shieldInformationBarrierReportBase.generated.js.map