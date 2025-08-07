"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeCollaborationAllowlistExemptTargetTypeField = serializeCollaborationAllowlistExemptTargetTypeField;
exports.deserializeCollaborationAllowlistExemptTargetTypeField = deserializeCollaborationAllowlistExemptTargetTypeField;
exports.serializeCollaborationAllowlistExemptTargetEnterpriseTypeField = serializeCollaborationAllowlistExemptTargetEnterpriseTypeField;
exports.deserializeCollaborationAllowlistExemptTargetEnterpriseTypeField = deserializeCollaborationAllowlistExemptTargetEnterpriseTypeField;
exports.serializeCollaborationAllowlistExemptTargetEnterpriseField = serializeCollaborationAllowlistExemptTargetEnterpriseField;
exports.deserializeCollaborationAllowlistExemptTargetEnterpriseField = deserializeCollaborationAllowlistExemptTargetEnterpriseField;
exports.serializeCollaborationAllowlistExemptTarget = serializeCollaborationAllowlistExemptTarget;
exports.deserializeCollaborationAllowlistExemptTarget = deserializeCollaborationAllowlistExemptTarget;
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeCollaborationAllowlistExemptTargetTypeField(val) {
    return val;
}
function deserializeCollaborationAllowlistExemptTargetTypeField(val) {
    if (val == 'collaboration_whitelist_exempt_target') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CollaborationAllowlistExemptTargetTypeField",
    });
}
function serializeCollaborationAllowlistExemptTargetEnterpriseTypeField(val) {
    return val;
}
function deserializeCollaborationAllowlistExemptTargetEnterpriseTypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CollaborationAllowlistExemptTargetEnterpriseTypeField",
    });
}
function serializeCollaborationAllowlistExemptTargetEnterpriseField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCollaborationAllowlistExemptTargetEnterpriseTypeField(val.type),
        ['name']: val.name,
    };
}
function deserializeCollaborationAllowlistExemptTargetEnterpriseField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CollaborationAllowlistExemptTargetEnterpriseField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CollaborationAllowlistExemptTargetEnterpriseField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeCollaborationAllowlistExemptTargetEnterpriseTypeField(val.type);
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "CollaborationAllowlistExemptTargetEnterpriseField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    return {
        id: id,
        type: type,
        name: name,
    };
}
function serializeCollaborationAllowlistExemptTarget(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCollaborationAllowlistExemptTargetTypeField(val.type),
        ['enterprise']: val.enterprise == void 0
            ? val.enterprise
            : serializeCollaborationAllowlistExemptTargetEnterpriseField(val.enterprise),
        ['user']: val.user == void 0 ? val.user : (0, userMini_generated_js_1.serializeUserMini)(val.user),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
    };
}
function deserializeCollaborationAllowlistExemptTarget(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CollaborationAllowlistExemptTarget"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CollaborationAllowlistExemptTarget"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeCollaborationAllowlistExemptTargetTypeField(val.type);
    const enterprise = val.enterprise == void 0
        ? void 0
        : deserializeCollaborationAllowlistExemptTargetEnterpriseField(val.enterprise);
    const user = val.user == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.user);
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "CollaborationAllowlistExemptTarget"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_1.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "CollaborationAllowlistExemptTarget"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    return {
        id: id,
        type: type,
        enterprise: enterprise,
        user: user,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
    };
}
//# sourceMappingURL=collaborationAllowlistExemptTarget.generated.js.map