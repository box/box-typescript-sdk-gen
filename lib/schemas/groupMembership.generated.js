"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeGroupMembershipTypeField = serializeGroupMembershipTypeField;
exports.deserializeGroupMembershipTypeField = deserializeGroupMembershipTypeField;
exports.serializeGroupMembershipRoleField = serializeGroupMembershipRoleField;
exports.deserializeGroupMembershipRoleField = deserializeGroupMembershipRoleField;
exports.serializeGroupMembership = serializeGroupMembership;
exports.deserializeGroupMembership = deserializeGroupMembership;
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const groupMini_generated_js_1 = require("./groupMini.generated.js");
const groupMini_generated_js_2 = require("./groupMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeGroupMembershipTypeField(val) {
    return val;
}
function deserializeGroupMembershipTypeField(val) {
    if (val == 'group_membership') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GroupMembershipTypeField",
    });
}
function serializeGroupMembershipRoleField(val) {
    return val;
}
function deserializeGroupMembershipRoleField(val) {
    if (val == 'member') {
        return val;
    }
    if (val == 'admin') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GroupMembershipRoleField",
    });
}
function serializeGroupMembership(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeGroupMembershipTypeField(val.type),
        ['user']: val.user == void 0 ? val.user : (0, userMini_generated_js_1.serializeUserMini)(val.user),
        ['group']: val.group == void 0 ? val.group : (0, groupMini_generated_js_1.serializeGroupMini)(val.group),
        ['role']: val.role == void 0
            ? val.role
            : serializeGroupMembershipRoleField(val.role),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
    };
}
function deserializeGroupMembership(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "GroupMembership"' });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "GroupMembership"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeGroupMembershipTypeField(val.type);
    const user = val.user == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.user);
    const group = val.group == void 0 ? void 0 : (0, groupMini_generated_js_2.deserializeGroupMini)(val.group);
    const role = val.role == void 0 ? void 0 : deserializeGroupMembershipRoleField(val.role);
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "GroupMembership"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_1.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "GroupMembership"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    return {
        id: id,
        type: type,
        user: user,
        group: group,
        role: role,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
    };
}
//# sourceMappingURL=groupMembership.generated.js.map