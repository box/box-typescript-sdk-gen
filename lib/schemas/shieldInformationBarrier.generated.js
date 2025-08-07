"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeShieldInformationBarrierTypeField = serializeShieldInformationBarrierTypeField;
exports.deserializeShieldInformationBarrierTypeField = deserializeShieldInformationBarrierTypeField;
exports.serializeShieldInformationBarrierStatusField = serializeShieldInformationBarrierStatusField;
exports.deserializeShieldInformationBarrierStatusField = deserializeShieldInformationBarrierStatusField;
exports.serializeShieldInformationBarrier = serializeShieldInformationBarrier;
exports.deserializeShieldInformationBarrier = deserializeShieldInformationBarrier;
const enterpriseBase_generated_js_1 = require("./enterpriseBase.generated.js");
const enterpriseBase_generated_js_2 = require("./enterpriseBase.generated.js");
const userBase_generated_js_1 = require("./userBase.generated.js");
const userBase_generated_js_2 = require("./userBase.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeShieldInformationBarrierTypeField(val) {
    return val;
}
function deserializeShieldInformationBarrierTypeField(val) {
    if (val == 'shield_information_barrier') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierTypeField",
    });
}
function serializeShieldInformationBarrierStatusField(val) {
    return val;
}
function deserializeShieldInformationBarrierStatusField(val) {
    if (val == 'draft') {
        return val;
    }
    if (val == 'pending') {
        return val;
    }
    if (val == 'disabled') {
        return val;
    }
    if (val == 'enabled') {
        return val;
    }
    if (val == 'invalid') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierStatusField",
    });
}
function serializeShieldInformationBarrier(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldInformationBarrierTypeField(val.type),
        ['enterprise']: val.enterprise == void 0
            ? val.enterprise
            : (0, enterpriseBase_generated_js_1.serializeEnterpriseBase)(val.enterprise),
        ['status']: val.status == void 0
            ? val.status
            : serializeShieldInformationBarrierStatusField(val.status),
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
        ['enabled_at']: val.enabledAt == void 0
            ? val.enabledAt
            : (0, utils_js_1.serializeDateTime)(val.enabledAt),
        ['enabled_by']: val.enabledBy == void 0
            ? val.enabledBy
            : (0, userBase_generated_js_1.serializeUserBase)(val.enabledBy),
    };
}
function deserializeShieldInformationBarrier(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrier"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrier"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierTypeField(val.type);
    const enterprise = val.enterprise == void 0
        ? void 0
        : (0, enterpriseBase_generated_js_2.deserializeEnterpriseBase)(val.enterprise);
    const status = val.status == void 0
        ? void 0
        : deserializeShieldInformationBarrierStatusField(val.status);
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "ShieldInformationBarrier"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    const createdBy = val.created_by == void 0 ? void 0 : (0, userBase_generated_js_2.deserializeUserBase)(val.created_by);
    if (!(val.updated_at == void 0) && !(0, json_js_1.sdIsString)(val.updated_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "updated_at" of type "ShieldInformationBarrier"',
        });
    }
    const updatedAt = val.updated_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.updated_at);
    const updatedBy = val.updated_by == void 0 ? void 0 : (0, userBase_generated_js_2.deserializeUserBase)(val.updated_by);
    if (!(val.enabled_at == void 0) && !(0, json_js_1.sdIsString)(val.enabled_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "enabled_at" of type "ShieldInformationBarrier"',
        });
    }
    const enabledAt = val.enabled_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.enabled_at);
    const enabledBy = val.enabled_by == void 0 ? void 0 : (0, userBase_generated_js_2.deserializeUserBase)(val.enabled_by);
    return {
        id: id,
        type: type,
        enterprise: enterprise,
        status: status,
        createdAt: createdAt,
        createdBy: createdBy,
        updatedAt: updatedAt,
        updatedBy: updatedBy,
        enabledAt: enabledAt,
        enabledBy: enabledBy,
    };
}
//# sourceMappingURL=shieldInformationBarrier.generated.js.map