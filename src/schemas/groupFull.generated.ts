import { serializeGroupBaseTypeField } from './groupBase.generated';
import { deserializeGroupBaseTypeField } from './groupBase.generated';
import { serializeGroupBase } from './groupBase.generated';
import { deserializeGroupBase } from './groupBase.generated';
import { serializeGroupMiniGroupTypeField } from './groupMini.generated';
import { deserializeGroupMiniGroupTypeField } from './groupMini.generated';
import { serializeGroupMini } from './groupMini.generated';
import { deserializeGroupMini } from './groupMini.generated';
import { serializeDateTime } from '../internal/utils';
import { deserializeDateTime } from '../internal/utils';
import { serializeGroup } from './group.generated';
import { deserializeGroup } from './group.generated';
import { GroupBaseTypeField } from './groupBase.generated';
import { GroupBase } from './groupBase.generated';
import { GroupMiniGroupTypeField } from './groupMini.generated';
import { GroupMini } from './groupMini.generated';
import { DateTime } from '../internal/utils';
import { Group } from './group.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type GroupFullInvitabilityLevelField =
  | 'admins_only'
  | 'admins_and_members'
  | 'all_managed_users'
  | string;
export type GroupFullMemberViewabilityLevelField =
  | 'admins_only'
  | 'admins_and_members'
  | 'all_managed_users'
  | string;
export interface GroupFullPermissionsField {
  /**
   * Specifies if the user can invite the group to collaborate on any items. */
  readonly canInviteAsCollaborator?: boolean;
  readonly rawData?: SerializedData;
}
export class GroupFull extends Group {
  readonly provenance?: string;
  readonly externalSyncIdentifier?: string;
  readonly description?: string;
  readonly invitabilityLevel?: GroupFullInvitabilityLevelField;
  readonly memberViewabilityLevel?: GroupFullMemberViewabilityLevelField;
  readonly permissions?: GroupFullPermissionsField;
  constructor(fields: GroupFull) {
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
export function serializeGroupFullInvitabilityLevelField(
  val: GroupFullInvitabilityLevelField,
): SerializedData {
  return val;
}
export function deserializeGroupFullInvitabilityLevelField(
  val: SerializedData,
): GroupFullInvitabilityLevelField {
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
export function serializeGroupFullMemberViewabilityLevelField(
  val: GroupFullMemberViewabilityLevelField,
): SerializedData {
  return val;
}
export function deserializeGroupFullMemberViewabilityLevelField(
  val: SerializedData,
): GroupFullMemberViewabilityLevelField {
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
export function serializeGroupFullPermissionsField(
  val: GroupFullPermissionsField,
): SerializedData {
  return { ['can_invite_as_collaborator']: val.canInviteAsCollaborator };
}
export function deserializeGroupFullPermissionsField(
  val: SerializedData,
): GroupFullPermissionsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "GroupFullPermissionsField"',
    });
  }
  if (
    !(val.can_invite_as_collaborator == void 0) &&
    !sdIsBoolean(val.can_invite_as_collaborator)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_invite_as_collaborator" of type "GroupFullPermissionsField"',
    });
  }
  const canInviteAsCollaborator: undefined | boolean =
    val.can_invite_as_collaborator == void 0
      ? void 0
      : val.can_invite_as_collaborator;
  return {
    canInviteAsCollaborator: canInviteAsCollaborator,
  } satisfies GroupFullPermissionsField;
}
export function serializeGroupFull(val: GroupFull): SerializedData {
  const base: any = serializeGroup(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "GroupFull"' });
  }
  return {
    ...base,
    ...{
      ['provenance']: val.provenance,
      ['external_sync_identifier']: val.externalSyncIdentifier,
      ['description']: val.description,
      ['invitability_level']:
        val.invitabilityLevel == void 0
          ? val.invitabilityLevel
          : serializeGroupFullInvitabilityLevelField(val.invitabilityLevel),
      ['member_viewability_level']:
        val.memberViewabilityLevel == void 0
          ? val.memberViewabilityLevel
          : serializeGroupFullMemberViewabilityLevelField(
              val.memberViewabilityLevel,
            ),
      ['permissions']:
        val.permissions == void 0
          ? val.permissions
          : serializeGroupFullPermissionsField(val.permissions),
    },
  };
}
export function deserializeGroupFull(val: SerializedData): GroupFull {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "GroupFull"' });
  }
  if (!(val.provenance == void 0) && !sdIsString(val.provenance)) {
    throw new BoxSdkError({
      message: 'Expecting string for "provenance" of type "GroupFull"',
    });
  }
  const provenance: undefined | string =
    val.provenance == void 0 ? void 0 : val.provenance;
  if (
    !(val.external_sync_identifier == void 0) &&
    !sdIsString(val.external_sync_identifier)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "external_sync_identifier" of type "GroupFull"',
    });
  }
  const externalSyncIdentifier: undefined | string =
    val.external_sync_identifier == void 0
      ? void 0
      : val.external_sync_identifier;
  if (!(val.description == void 0) && !sdIsString(val.description)) {
    throw new BoxSdkError({
      message: 'Expecting string for "description" of type "GroupFull"',
    });
  }
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const invitabilityLevel: undefined | GroupFullInvitabilityLevelField =
    val.invitability_level == void 0
      ? void 0
      : deserializeGroupFullInvitabilityLevelField(val.invitability_level);
  const memberViewabilityLevel:
    | undefined
    | GroupFullMemberViewabilityLevelField =
    val.member_viewability_level == void 0
      ? void 0
      : deserializeGroupFullMemberViewabilityLevelField(
          val.member_viewability_level,
        );
  const permissions: undefined | GroupFullPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeGroupFullPermissionsField(val.permissions);
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "created_at" of type "GroupFull"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "modified_at" of type "GroupFull"',
    });
  }
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  if (!(val.name == void 0) && !sdIsString(val.name)) {
    throw new BoxSdkError({
      message: 'Expecting string for "name" of type "GroupFull"',
    });
  }
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const groupType: undefined | GroupMiniGroupTypeField =
    val.group_type == void 0
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
  const id: string = val.id;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "GroupFull" to be defined',
    });
  }
  const type: GroupBaseTypeField = deserializeGroupBaseTypeField(val.type);
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
  } satisfies GroupFull;
}
