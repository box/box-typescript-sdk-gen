import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeGroupMini } from './groupMini.generated.js';
import { deserializeGroupMini } from './groupMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { UserMini } from './userMini.generated.js';
import { GroupMini } from './groupMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type GroupMembershipTypeField = 'group_membership';
export type GroupMembershipRoleField = 'member' | 'admin';
export interface GroupMembership {
  readonly id?: string;
  readonly type?: GroupMembershipTypeField;
  readonly user?: UserMini;
  readonly group?: GroupMini;
  readonly role?: GroupMembershipRoleField;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
}
export function serializeGroupMembershipTypeField(
  val: GroupMembershipTypeField
): SerializedData {
  return val;
}
export function deserializeGroupMembershipTypeField(
  val: any
): GroupMembershipTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "GroupMembershipTypeField"',
    });
  }
  if (val == 'group_membership') {
    return 'group_membership';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeGroupMembershipRoleField(
  val: GroupMembershipRoleField
): SerializedData {
  return val;
}
export function deserializeGroupMembershipRoleField(
  val: any
): GroupMembershipRoleField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "GroupMembershipRoleField"',
    });
  }
  if (val == 'member') {
    return 'member';
  }
  if (val == 'admin') {
    return 'admin';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeGroupMembership(val: GroupMembership): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeGroupMembershipTypeField(val.type),
    ['user']: val.user == void 0 ? void 0 : serializeUserMini(val.user),
    ['group']: val.group == void 0 ? void 0 : serializeGroupMini(val.group),
    ['role']:
      val.role == void 0 ? void 0 : serializeGroupMembershipRoleField(val.role),
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['modified_at']:
      val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
  };
}
export function deserializeGroupMembership(val: any): GroupMembership {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | GroupMembershipTypeField =
    val.type == void 0 ? void 0 : deserializeGroupMembershipTypeField(val.type);
  const user: undefined | UserMini =
    val.user == void 0 ? void 0 : deserializeUserMini(val.user);
  const group: undefined | GroupMini =
    val.group == void 0 ? void 0 : deserializeGroupMini(val.group);
  const role: undefined | GroupMembershipRoleField =
    val.role == void 0 ? void 0 : deserializeGroupMembershipRoleField(val.role);
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  return {
    id: id,
    type: type,
    user: user,
    group: group,
    role: role,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
  } satisfies GroupMembership;
}
