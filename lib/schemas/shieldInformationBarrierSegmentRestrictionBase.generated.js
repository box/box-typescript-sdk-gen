"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeShieldInformationBarrierSegmentRestrictionBaseTypeField = serializeShieldInformationBarrierSegmentRestrictionBaseTypeField;
exports.deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField = deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField;
exports.serializeShieldInformationBarrierSegmentRestrictionBase = serializeShieldInformationBarrierSegmentRestrictionBase;
exports.deserializeShieldInformationBarrierSegmentRestrictionBase = deserializeShieldInformationBarrierSegmentRestrictionBase;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val) {
    return val;
}
function deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val) {
    if (val == 'shield_information_barrier_segment_restriction') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierSegmentRestrictionBaseTypeField",
    });
}
function serializeShieldInformationBarrierSegmentRestrictionBase(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeShieldInformationBarrierSegmentRestrictionBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentRestrictionBase"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val.type);
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentRestrictionBase"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        type: type,
        id: id,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegmentRestrictionBase.generated.js.map