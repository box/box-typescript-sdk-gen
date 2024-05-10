import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type CollaborationAllowlistEntryTypeField =
  'collaboration_whitelist_entry';
export type CollaborationAllowlistEntryDirectionField =
  | 'inbound'
  | 'outbound'
  | 'both';
export type CollaborationAllowlistEntryEnterpriseTypeField = 'enterprise';
export interface CollaborationAllowlistEntryEnterpriseField {
  readonly id?: string;
  readonly type?: CollaborationAllowlistEntryEnterpriseTypeField;
  readonly name?: string;
}
export interface CollaborationAllowlistEntry {
  readonly id?: string;
  readonly type?: CollaborationAllowlistEntryTypeField;
  readonly domain?: string;
  readonly direction?: CollaborationAllowlistEntryDirectionField;
  readonly enterprise?: CollaborationAllowlistEntryEnterpriseField;
  readonly createdAt?: DateTime;
}
export function serializeCollaborationAllowlistEntryTypeField(
  val: CollaborationAllowlistEntryTypeField
): SerializedData {
  return val;
}
export function deserializeCollaborationAllowlistEntryTypeField(
  val: any
): CollaborationAllowlistEntryTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CollaborationAllowlistEntryTypeField"',
    });
  }
  if (val == 'collaboration_whitelist_entry') {
    return 'collaboration_whitelist_entry';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCollaborationAllowlistEntryDirectionField(
  val: CollaborationAllowlistEntryDirectionField
): SerializedData {
  return val;
}
export function deserializeCollaborationAllowlistEntryDirectionField(
  val: any
): CollaborationAllowlistEntryDirectionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CollaborationAllowlistEntryDirectionField"',
    });
  }
  if (val == 'inbound') {
    return 'inbound';
  }
  if (val == 'outbound') {
    return 'outbound';
  }
  if (val == 'both') {
    return 'both';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCollaborationAllowlistEntryEnterpriseTypeField(
  val: CollaborationAllowlistEntryEnterpriseTypeField
): SerializedData {
  return val;
}
export function deserializeCollaborationAllowlistEntryEnterpriseTypeField(
  val: any
): CollaborationAllowlistEntryEnterpriseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CollaborationAllowlistEntryEnterpriseTypeField"',
    });
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCollaborationAllowlistEntryEnterpriseField(
  val: CollaborationAllowlistEntryEnterpriseField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCollaborationAllowlistEntryEnterpriseTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
  };
}
export function deserializeCollaborationAllowlistEntryEnterpriseField(
  val: any
): CollaborationAllowlistEntryEnterpriseField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | CollaborationAllowlistEntryEnterpriseTypeField =
    val.type == void 0
      ? void 0
      : deserializeCollaborationAllowlistEntryEnterpriseTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  return {
    id: id,
    type: type,
    name: name,
  } satisfies CollaborationAllowlistEntryEnterpriseField;
}
export function serializeCollaborationAllowlistEntry(
  val: CollaborationAllowlistEntry
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCollaborationAllowlistEntryTypeField(val.type),
    ['domain']: val.domain == void 0 ? void 0 : val.domain,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeCollaborationAllowlistEntryDirectionField(val.direction),
    ['enterprise']:
      val.enterprise == void 0
        ? void 0
        : serializeCollaborationAllowlistEntryEnterpriseField(val.enterprise),
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
  };
}
export function deserializeCollaborationAllowlistEntry(
  val: any
): CollaborationAllowlistEntry {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | CollaborationAllowlistEntryTypeField =
    val.type == void 0
      ? void 0
      : deserializeCollaborationAllowlistEntryTypeField(val.type);
  const domain: undefined | string = val.domain == void 0 ? void 0 : val.domain;
  const direction: undefined | CollaborationAllowlistEntryDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeCollaborationAllowlistEntryDirectionField(val.direction);
  const enterprise: undefined | CollaborationAllowlistEntryEnterpriseField =
    val.enterprise == void 0
      ? void 0
      : deserializeCollaborationAllowlistEntryEnterpriseField(val.enterprise);
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  return {
    id: id,
    type: type,
    domain: domain,
    direction: direction,
    enterprise: enterprise,
    createdAt: createdAt,
  } satisfies CollaborationAllowlistEntry;
}
