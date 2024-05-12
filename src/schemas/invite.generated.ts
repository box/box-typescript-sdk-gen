import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type InviteTypeField = 'invite';
export type InviteInvitedToTypeField = 'enterprise';
export interface InviteInvitedToField {
  readonly id?: string;
  readonly type?: InviteInvitedToTypeField;
  readonly name?: string;
}
export class Invite {
  readonly id!: string;
  readonly type: InviteTypeField = 'invite' as InviteTypeField;
  readonly invitedTo?: InviteInvitedToField;
  readonly actionableBy?: UserMini;
  readonly invitedBy?: UserMini;
  readonly status?: string;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  constructor(fields: Omit<Invite, 'type'> & Partial<Pick<Invite, 'type'>>) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.invitedTo) {
      this.invitedTo = fields.invitedTo;
    }
    if (fields.actionableBy) {
      this.actionableBy = fields.actionableBy;
    }
    if (fields.invitedBy) {
      this.invitedBy = fields.invitedBy;
    }
    if (fields.status) {
      this.status = fields.status;
    }
    if (fields.createdAt) {
      this.createdAt = fields.createdAt;
    }
    if (fields.modifiedAt) {
      this.modifiedAt = fields.modifiedAt;
    }
  }
}
export interface InviteInput {
  readonly id: string;
  readonly type?: InviteTypeField;
  readonly invitedTo?: InviteInvitedToField;
  readonly actionableBy?: UserMini;
  readonly invitedBy?: UserMini;
  readonly status?: string;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
}
export function serializeInviteTypeField(val: InviteTypeField): SerializedData {
  return val;
}
export function deserializeInviteTypeField(val: any): InviteTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "InviteTypeField"',
    });
  }
  if (val == 'invite') {
    return 'invite';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeInviteInvitedToTypeField(
  val: InviteInvitedToTypeField
): SerializedData {
  return val;
}
export function deserializeInviteInvitedToTypeField(
  val: any
): InviteInvitedToTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "InviteInvitedToTypeField"',
    });
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeInviteInvitedToField(
  val: InviteInvitedToField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeInviteInvitedToTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
  };
}
export function deserializeInviteInvitedToField(
  val: any
): InviteInvitedToField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | InviteInvitedToTypeField =
    val.type == void 0 ? void 0 : deserializeInviteInvitedToTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  return { id: id, type: type, name: name } satisfies InviteInvitedToField;
}
export function serializeInvite(val: Invite): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeInviteTypeField(val.type),
    ['invited_to']:
      val.invitedTo == void 0
        ? void 0
        : serializeInviteInvitedToField(val.invitedTo),
    ['actionable_by']:
      val.actionableBy == void 0 ? void 0 : serializeUserMini(val.actionableBy),
    ['invited_by']:
      val.invitedBy == void 0 ? void 0 : serializeUserMini(val.invitedBy),
    ['status']: val.status == void 0 ? void 0 : val.status,
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['modified_at']:
      val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
  };
}
export function deserializeInvite(val: any): Invite {
  const id: string = val.id;
  const type: InviteTypeField = deserializeInviteTypeField(val.type);
  const invitedTo: undefined | InviteInvitedToField =
    val.invited_to == void 0
      ? void 0
      : deserializeInviteInvitedToField(val.invited_to);
  const actionableBy: undefined | UserMini =
    val.actionable_by == void 0
      ? void 0
      : deserializeUserMini(val.actionable_by);
  const invitedBy: undefined | UserMini =
    val.invited_by == void 0 ? void 0 : deserializeUserMini(val.invited_by);
  const status: undefined | string = val.status == void 0 ? void 0 : val.status;
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  return {
    id: id,
    type: type,
    invitedTo: invitedTo,
    actionableBy: actionableBy,
    invitedBy: invitedBy,
    status: status,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
  } satisfies Invite;
}
export function serializeInviteInput(val: InviteInput): SerializedData {
  return {
    ['id']: val.id,
    ['type']: val.type == void 0 ? void 0 : serializeInviteTypeField(val.type),
    ['invited_to']:
      val.invitedTo == void 0
        ? void 0
        : serializeInviteInvitedToField(val.invitedTo),
    ['actionable_by']:
      val.actionableBy == void 0 ? void 0 : serializeUserMini(val.actionableBy),
    ['invited_by']:
      val.invitedBy == void 0 ? void 0 : serializeUserMini(val.invitedBy),
    ['status']: val.status == void 0 ? void 0 : val.status,
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['modified_at']:
      val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
  };
}
export function deserializeInviteInput(val: any): InviteInput {
  const id: string = val.id;
  const type: undefined | InviteTypeField =
    val.type == void 0 ? void 0 : deserializeInviteTypeField(val.type);
  const invitedTo: undefined | InviteInvitedToField =
    val.invited_to == void 0
      ? void 0
      : deserializeInviteInvitedToField(val.invited_to);
  const actionableBy: undefined | UserMini =
    val.actionable_by == void 0
      ? void 0
      : deserializeUserMini(val.actionable_by);
  const invitedBy: undefined | UserMini =
    val.invited_by == void 0 ? void 0 : deserializeUserMini(val.invited_by);
  const status: undefined | string = val.status == void 0 ? void 0 : val.status;
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  return {
    id: id,
    type: type,
    invitedTo: invitedTo,
    actionableBy: actionableBy,
    invitedBy: invitedBy,
    status: status,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
  } satisfies InviteInput;
}
