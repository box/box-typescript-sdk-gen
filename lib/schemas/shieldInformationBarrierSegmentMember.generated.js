"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField = serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField;
exports.deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField = deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField;
exports.serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField = serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField;
exports.deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField = deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField;
exports.serializeShieldInformationBarrierSegmentMember = serializeShieldInformationBarrierSegmentMember;
exports.deserializeShieldInformationBarrierSegmentMember = deserializeShieldInformationBarrierSegmentMember;
const shieldInformationBarrierSegmentMemberBase_generated_js_1 = require("./shieldInformationBarrierSegmentMemberBase.generated.js");
const shieldInformationBarrierSegmentMemberMini_generated_js_1 = require("./shieldInformationBarrierSegmentMemberMini.generated.js");
const shieldInformationBarrierBase_generated_js_1 = require("./shieldInformationBarrierBase.generated.js");
const shieldInformationBarrierBase_generated_js_2 = require("./shieldInformationBarrierBase.generated.js");
const userBase_generated_js_1 = require("./userBase.generated.js");
const userBase_generated_js_2 = require("./userBase.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(val) {
    return val;
}
function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(val) {
    if (val == 'shield_information_barrier_segment') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField",
    });
}
function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(val.type),
    };
}
function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(val.type);
    return {
        id: id,
        type: type,
    };
}
function serializeShieldInformationBarrierSegmentMember(val) {
    const base = (0, shieldInformationBarrierSegmentMemberMini_generated_js_1.serializeShieldInformationBarrierSegmentMemberMini)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentMember"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['shield_information_barrier']: val.shieldInformationBarrier == void 0
            ? val.shieldInformationBarrier
            : (0, shieldInformationBarrierBase_generated_js_1.serializeShieldInformationBarrierBase)(val.shieldInformationBarrier),
        ['shield_information_barrier_segment']: val.shieldInformationBarrierSegment == void 0
            ? val.shieldInformationBarrierSegment
            : serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment),
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
function deserializeShieldInformationBarrierSegmentMember(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentMember"',
        });
    }
    const shieldInformationBarrier = val.shield_information_barrier == void 0
        ? void 0
        : (0, shieldInformationBarrierBase_generated_js_2.deserializeShieldInformationBarrierBase)(val.shield_information_barrier);
    const shieldInformationBarrierSegment = val.shield_information_barrier_segment == void 0
        ? void 0
        : deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "ShieldInformationBarrierSegmentMember"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    const createdBy = val.created_by == void 0 ? void 0 : (0, userBase_generated_js_2.deserializeUserBase)(val.created_by);
    if (!(val.updated_at == void 0) && !(0, json_js_1.sdIsString)(val.updated_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "updated_at" of type "ShieldInformationBarrierSegmentMember"',
        });
    }
    const updatedAt = val.updated_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.updated_at);
    const updatedBy = val.updated_by == void 0 ? void 0 : (0, userBase_generated_js_2.deserializeUserBase)(val.updated_by);
    const user = val.user == void 0 ? void 0 : (0, userBase_generated_js_2.deserializeUserBase)(val.user);
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentMember"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : (0, shieldInformationBarrierSegmentMemberBase_generated_js_1.deserializeShieldInformationBarrierSegmentMemberBaseTypeField)(val.type);
    return {
        shieldInformationBarrier: shieldInformationBarrier,
        shieldInformationBarrierSegment: shieldInformationBarrierSegment,
        createdAt: createdAt,
        createdBy: createdBy,
        updatedAt: updatedAt,
        updatedBy: updatedBy,
        user: user,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegmentMember.generated.js.map