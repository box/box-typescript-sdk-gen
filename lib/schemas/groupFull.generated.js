"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupFull = void 0;
exports.serializeGroupFullInvitabilityLevelField = serializeGroupFullInvitabilityLevelField;
exports.deserializeGroupFullInvitabilityLevelField = deserializeGroupFullInvitabilityLevelField;
exports.serializeGroupFullMemberViewabilityLevelField = serializeGroupFullMemberViewabilityLevelField;
exports.deserializeGroupFullMemberViewabilityLevelField = deserializeGroupFullMemberViewabilityLevelField;
exports.serializeGroupFullPermissionsField = serializeGroupFullPermissionsField;
exports.deserializeGroupFullPermissionsField = deserializeGroupFullPermissionsField;
exports.serializeGroupFull = serializeGroupFull;
exports.deserializeGroupFull = deserializeGroupFull;
const groupBase_generated_js_1 = require("./groupBase.generated.js");
const groupMini_generated_js_1 = require("./groupMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const group_generated_js_1 = require("./group.generated.js");
const group_generated_js_2 = require("./group.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class GroupFull extends group_generated_js_2.Group {
    constructor(fields) {
        super(fields);
        if (fields.provenance !== undefined) {
            this.provenance = fields.provenance;
        }
        if (fields.externalSyncIdentifier !== undefined) {
            this.externalSyncIdentifier = fields.externalSyncIdentifier;
        }
        if (fields.description !== undefined) {
            this.description = fields.description;
        }
        if (fields.invitabilityLevel !== undefined) {
            this.invitabilityLevel = fields.invitabilityLevel;
        }
        if (fields.memberViewabilityLevel !== undefined) {
            this.memberViewabilityLevel = fields.memberViewabilityLevel;
        }
        if (fields.permissions !== undefined) {
            this.permissions = fields.permissions;
        }
    }
}
exports.GroupFull = GroupFull;
function serializeGroupFullInvitabilityLevelField(val) {
    return val;
}
function deserializeGroupFullInvitabilityLevelField(val) {
    if (val == 'admins_only') {
        return val;
    }
    if (val == 'admins_and_members') {
        return val;
    }
    if (val == 'all_managed_users') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GroupFullInvitabilityLevelField",
    });
}
function serializeGroupFullMemberViewabilityLevelField(val) {
    return val;
}
function deserializeGroupFullMemberViewabilityLevelField(val) {
    if (val == 'admins_only') {
        return val;
    }
    if (val == 'admins_and_members') {
        return val;
    }
    if (val == 'all_managed_users') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GroupFullMemberViewabilityLevelField",
    });
}
function serializeGroupFullPermissionsField(val) {
    return { ['can_invite_as_collaborator']: val.canInviteAsCollaborator };
}
function deserializeGroupFullPermissionsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "GroupFullPermissionsField"',
        });
    }
    if (!(val.can_invite_as_collaborator == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.can_invite_as_collaborator)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_invite_as_collaborator" of type "GroupFullPermissionsField"',
        });
    }
    const canInviteAsCollaborator = val.can_invite_as_collaborator == void 0
        ? void 0
        : val.can_invite_as_collaborator;
    return {
        canInviteAsCollaborator: canInviteAsCollaborator,
    };
}
function serializeGroupFull(val) {
    const base = (0, group_generated_js_1.serializeGroup)(val);
    if (!(0, json_js_3.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "GroupFull"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['provenance']: val.provenance,
        ['external_sync_identifier']: val.externalSyncIdentifier,
        ['description']: val.description,
        ['invitability_level']: val.invitabilityLevel == void 0
            ? val.invitabilityLevel
            : serializeGroupFullInvitabilityLevelField(val.invitabilityLevel),
        ['member_viewability_level']: val.memberViewabilityLevel == void 0
            ? val.memberViewabilityLevel
            : serializeGroupFullMemberViewabilityLevelField(val.memberViewabilityLevel),
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeGroupFullPermissionsField(val.permissions),
    });
}
function deserializeGroupFull(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "GroupFull"' });
    }
    if (!(val.provenance == void 0) && !(0, json_js_2.sdIsString)(val.provenance)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "provenance" of type "GroupFull"',
        });
    }
    const provenance = val.provenance == void 0 ? void 0 : val.provenance;
    if (!(val.external_sync_identifier == void 0) &&
        !(0, json_js_2.sdIsString)(val.external_sync_identifier)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "external_sync_identifier" of type "GroupFull"',
        });
    }
    const externalSyncIdentifier = val.external_sync_identifier == void 0
        ? void 0
        : val.external_sync_identifier;
    if (!(val.description == void 0) && !(0, json_js_2.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "GroupFull"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const invitabilityLevel = val.invitability_level == void 0
        ? void 0
        : deserializeGroupFullInvitabilityLevelField(val.invitability_level);
    const memberViewabilityLevel = val.member_viewability_level == void 0
        ? void 0
        : deserializeGroupFullMemberViewabilityLevelField(val.member_viewability_level);
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeGroupFullPermissionsField(val.permissions);
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "GroupFull"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_1.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_2.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "GroupFull"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_1.deserializeDateTime)(val.modified_at);
    if (!(val.name == void 0) && !(0, json_js_2.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "GroupFull"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    const groupType = val.group_type == void 0
        ? void 0
        : (0, groupMini_generated_js_1.deserializeGroupMiniGroupTypeField)(val.group_type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "GroupFull" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "GroupFull"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "GroupFull" to be defined',
        });
    }
    const type = (0, groupBase_generated_js_1.deserializeGroupBaseTypeField)(val.type);
    return {
        provenance: provenance,
        externalSyncIdentifier: externalSyncIdentifier,
        description: description,
        invitabilityLevel: invitabilityLevel,
        memberViewabilityLevel: memberViewabilityLevel,
        permissions: permissions,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        name: name,
        groupType: groupType,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=groupFull.generated.js.map