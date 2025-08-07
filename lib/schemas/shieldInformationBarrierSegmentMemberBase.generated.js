"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeShieldInformationBarrierSegmentMemberBaseTypeField = serializeShieldInformationBarrierSegmentMemberBaseTypeField;
exports.deserializeShieldInformationBarrierSegmentMemberBaseTypeField = deserializeShieldInformationBarrierSegmentMemberBaseTypeField;
exports.serializeShieldInformationBarrierSegmentMemberBase = serializeShieldInformationBarrierSegmentMemberBase;
exports.deserializeShieldInformationBarrierSegmentMemberBase = deserializeShieldInformationBarrierSegmentMemberBase;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeShieldInformationBarrierSegmentMemberBaseTypeField(val) {
    return val;
}
function deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val) {
    if (val == 'shield_information_barrier_segment_member') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierSegmentMemberBaseTypeField",
    });
}
function serializeShieldInformationBarrierSegmentMemberBase(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type),
    };
}
function deserializeShieldInformationBarrierSegmentMemberBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentMemberBase"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentMemberBase"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type);
    return {
        id: id,
        type: type,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegmentMemberBase.generated.js.map