import { deserializeGroupBaseTypeField } from './groupBase.generated.js';
import { deserializeGroupMiniGroupTypeField } from './groupMini.generated.js';
import { deserializeDateTime } from '../internal/utils.js';
import { serializeGroup } from './group.generated.js';
import { Group } from './group.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GroupFull extends Group {
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
export function serializeGroupFullInvitabilityLevelField(val) {
    return val;
}
export function deserializeGroupFullInvitabilityLevelField(val) {
    if (val == 'admins_only') {
        return val;
    }
    if (val == 'admins_and_members') {
        return val;
    }
    if (val == 'all_managed_users') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GroupFullInvitabilityLevelField",
    });
}
export function serializeGroupFullMemberViewabilityLevelField(val) {
    return val;
}
export function deserializeGroupFullMemberViewabilityLevelField(val) {
    if (val == 'admins_only') {
        return val;
    }
    if (val == 'admins_and_members') {
        return val;
    }
    if (val == 'all_managed_users') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GroupFullMemberViewabilityLevelField",
    });
}
export function serializeGroupFullPermissionsField(val) {
    return { ['can_invite_as_collaborator']: val.canInviteAsCollaborator };
}
export function deserializeGroupFullPermissionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "GroupFullPermissionsField"',
        });
    }
    if (!(val.can_invite_as_collaborator == void 0) &&
        !sdIsBoolean(val.can_invite_as_collaborator)) {
        throw new BoxSdkError({
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
export function serializeGroupFull(val) {
    const base = serializeGroup(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "GroupFull"' });
    }
    return {
        ...base,
        ...{
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
        },
    };
}
export function deserializeGroupFull(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "GroupFull"' });
    }
    if (!(val.provenance == void 0) && !sdIsString(val.provenance)) {
        throw new BoxSdkError({
            message: 'Expecting string for "provenance" of type "GroupFull"',
        });
    }
    const provenance = val.provenance == void 0 ? void 0 : val.provenance;
    if (!(val.external_sync_identifier == void 0) &&
        !sdIsString(val.external_sync_identifier)) {
        throw new BoxSdkError({
            message: 'Expecting string for "external_sync_identifier" of type "GroupFull"',
        });
    }
    const externalSyncIdentifier = val.external_sync_identifier == void 0
        ? void 0
        : val.external_sync_identifier;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
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
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "GroupFull"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "GroupFull"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "GroupFull"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    const groupType = val.group_type == void 0
        ? void 0
        : deserializeGroupMiniGroupTypeField(val.group_type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "GroupFull" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "GroupFull"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "GroupFull" to be defined',
        });
    }
    const type = deserializeGroupBaseTypeField(val.type);
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