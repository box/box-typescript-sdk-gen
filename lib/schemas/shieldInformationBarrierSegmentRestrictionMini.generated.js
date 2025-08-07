"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField = serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField;
exports.deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField = deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField;
exports.serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField = serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField;
exports.deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField = deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField;
exports.serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField = serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField;
exports.deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField = deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField;
exports.serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField = serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField;
exports.deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField = deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField;
exports.serializeShieldInformationBarrierSegmentRestrictionMini = serializeShieldInformationBarrierSegmentRestrictionMini;
exports.deserializeShieldInformationBarrierSegmentRestrictionMini = deserializeShieldInformationBarrierSegmentRestrictionMini;
const shieldInformationBarrierSegmentRestrictionBase_generated_js_1 = require("./shieldInformationBarrierSegmentRestrictionBase.generated.js");
const shieldInformationBarrierSegmentRestrictionBase_generated_js_2 = require("./shieldInformationBarrierSegmentRestrictionBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(val) {
    return val;
}
function deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(val) {
    if (val == 'shield_information_barrier_segment') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField",
    });
}
function serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(val.type),
    };
}
function deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(val.type);
    return {
        id: id,
        type: type,
    };
}
function serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(val) {
    return val;
}
function deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(val) {
    if (val == 'shield_information_barrier_segment') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField",
    });
}
function serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(val.type),
    };
}
function deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(val.type);
    return {
        id: id,
        type: type,
    };
}
function serializeShieldInformationBarrierSegmentRestrictionMini(val) {
    const base = (0, shieldInformationBarrierSegmentRestrictionBase_generated_js_2.serializeShieldInformationBarrierSegmentRestrictionBase)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentRestrictionMini"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['shield_information_barrier_segment']: serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment),
        ['restricted_segment']: serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val.restrictedSegment),
    });
}
function deserializeShieldInformationBarrierSegmentRestrictionMini(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentRestrictionMini"',
        });
    }
    if (val.shield_information_barrier_segment == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "shield_information_barrier_segment" of type "ShieldInformationBarrierSegmentRestrictionMini" to be defined',
        });
    }
    const shieldInformationBarrierSegment = deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    if (val.restricted_segment == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "restricted_segment" of type "ShieldInformationBarrierSegmentRestrictionMini" to be defined',
        });
    }
    const restrictedSegment = deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val.restricted_segment);
    const type = val.type == void 0
        ? void 0
        : (0, shieldInformationBarrierSegmentRestrictionBase_generated_js_1.deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField)(val.type);
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentRestrictionMini"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        shieldInformationBarrierSegment: shieldInformationBarrierSegment,
        restrictedSegment: restrictedSegment,
        type: type,
        id: id,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegmentRestrictionMini.generated.js.map