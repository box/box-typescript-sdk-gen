"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeShieldInformationBarrierSegmentRestriction = serializeShieldInformationBarrierSegmentRestriction;
exports.deserializeShieldInformationBarrierSegmentRestriction = deserializeShieldInformationBarrierSegmentRestriction;
const shieldInformationBarrierSegmentRestrictionBase_generated_js_1 = require("./shieldInformationBarrierSegmentRestrictionBase.generated.js");
const shieldInformationBarrierSegmentRestrictionMini_generated_js_1 = require("./shieldInformationBarrierSegmentRestrictionMini.generated.js");
const shieldInformationBarrierSegmentRestrictionMini_generated_js_2 = require("./shieldInformationBarrierSegmentRestrictionMini.generated.js");
const shieldInformationBarrierSegmentRestrictionMini_generated_js_3 = require("./shieldInformationBarrierSegmentRestrictionMini.generated.js");
const shieldInformationBarrierBase_generated_js_1 = require("./shieldInformationBarrierBase.generated.js");
const shieldInformationBarrierBase_generated_js_2 = require("./shieldInformationBarrierBase.generated.js");
const userBase_generated_js_1 = require("./userBase.generated.js");
const userBase_generated_js_2 = require("./userBase.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeShieldInformationBarrierSegmentRestriction(val) {
    const base = (0, shieldInformationBarrierSegmentRestrictionMini_generated_js_3.serializeShieldInformationBarrierSegmentRestrictionMini)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentRestriction"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['shield_information_barrier']: val.shieldInformationBarrier == void 0
            ? val.shieldInformationBarrier
            : (0, shieldInformationBarrierBase_generated_js_1.serializeShieldInformationBarrierBase)(val.shieldInformationBarrier),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userBase_generated_js_1.serializeUserBase)(val.createdBy),
        ['updated_at']: val.updatedAt == void 0
            ? val.updatedAt
            : (0, utils_js_1.serializeDateTime)(val.updatedAt),
        ['updated_by']: val.updatedBy == void 0
            ? val.updatedBy
            : (0, userBase_generated_js_1.serializeUserBase)(val.updatedBy),
    });
}
function deserializeShieldInformationBarrierSegmentRestriction(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentRestriction"',
        });
    }
    const shieldInformationBarrier = val.shield_information_barrier == void 0
        ? void 0
        : (0, shieldInformationBarrierBase_generated_js_2.deserializeShieldInformationBarrierBase)(val.shield_information_barrier);
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "ShieldInformationBarrierSegmentRestriction"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    const createdBy = val.created_by == void 0 ? void 0 : (0, userBase_generated_js_2.deserializeUserBase)(val.created_by);
    if (!(val.updated_at == void 0) && !(0, json_js_1.sdIsString)(val.updated_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "updated_at" of type "ShieldInformationBarrierSegmentRestriction"',
        });
    }
    const updatedAt = val.updated_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.updated_at);
    const updatedBy = val.updated_by == void 0 ? void 0 : (0, userBase_generated_js_2.deserializeUserBase)(val.updated_by);
    if (val.shield_information_barrier_segment == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "shield_information_barrier_segment" of type "ShieldInformationBarrierSegmentRestriction" to be defined',
        });
    }
    const shieldInformationBarrierSegment = (0, shieldInformationBarrierSegmentRestrictionMini_generated_js_1.deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField)(val.shield_information_barrier_segment);
    if (val.restricted_segment == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "restricted_segment" of type "ShieldInformationBarrierSegmentRestriction" to be defined',
        });
    }
    const restrictedSegment = (0, shieldInformationBarrierSegmentRestrictionMini_generated_js_2.deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField)(val.restricted_segment);
    const type = val.type == void 0
        ? void 0
        : (0, shieldInformationBarrierSegmentRestrictionBase_generated_js_1.deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField)(val.type);
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentRestriction"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        shieldInformationBarrier: shieldInformationBarrier,
        createdAt: createdAt,
        createdBy: createdBy,
        updatedAt: updatedAt,
        updatedBy: updatedBy,
        shieldInformationBarrierSegment: shieldInformationBarrierSegment,
        restrictedSegment: restrictedSegment,
        type: type,
        id: id,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegmentRestriction.generated.js.map