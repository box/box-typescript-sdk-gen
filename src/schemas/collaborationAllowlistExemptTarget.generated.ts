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
export type CollaborationAllowlistExemptTargetTypeField =
  'collaboration_whitelist_exempt_target';
export type CollaborationAllowlistExemptTargetEnterpriseTypeField =
  'enterprise';
export interface CollaborationAllowlistExemptTargetEnterpriseField {
  readonly id?: string;
  readonly type?: CollaborationAllowlistExemptTargetEnterpriseTypeField;
  readonly name?: string;
}
export interface CollaborationAllowlistExemptTarget {
  readonly id?: string;
  readonly type?: CollaborationAllowlistExemptTargetTypeField;
  readonly enterprise?: CollaborationAllowlistExemptTargetEnterpriseField;
  readonly user?: UserMini;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
}
export function serializeCollaborationAllowlistExemptTargetTypeField(
  val: CollaborationAllowlistExemptTargetTypeField
): SerializedData {
  return val;
}
export function deserializeCollaborationAllowlistExemptTargetTypeField(
  val: any
): CollaborationAllowlistExemptTargetTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CollaborationAllowlistExemptTargetTypeField"',
    });
  }
  if (val == 'collaboration_whitelist_exempt_target') {
    return 'collaboration_whitelist_exempt_target';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCollaborationAllowlistExemptTargetEnterpriseTypeField(
  val: CollaborationAllowlistExemptTargetEnterpriseTypeField
): SerializedData {
  return val;
}
export function deserializeCollaborationAllowlistExemptTargetEnterpriseTypeField(
  val: any
): CollaborationAllowlistExemptTargetEnterpriseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CollaborationAllowlistExemptTargetEnterpriseTypeField"',
    });
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCollaborationAllowlistExemptTargetEnterpriseField(
  val: CollaborationAllowlistExemptTargetEnterpriseField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCollaborationAllowlistExemptTargetEnterpriseTypeField(
            val.type
          ),
    ['name']: val.name == void 0 ? void 0 : val.name,
  };
}
export function deserializeCollaborationAllowlistExemptTargetEnterpriseField(
  val: any
): CollaborationAllowlistExemptTargetEnterpriseField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type:
    | undefined
    | CollaborationAllowlistExemptTargetEnterpriseTypeField =
    val.type == void 0
      ? void 0
      : deserializeCollaborationAllowlistExemptTargetEnterpriseTypeField(
          val.type
        );
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  return {
    id: id,
    type: type,
    name: name,
  } satisfies CollaborationAllowlistExemptTargetEnterpriseField;
}
export function serializeCollaborationAllowlistExemptTarget(
  val: CollaborationAllowlistExemptTarget
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCollaborationAllowlistExemptTargetTypeField(val.type),
    ['enterprise']:
      val.enterprise == void 0
        ? void 0
        : serializeCollaborationAllowlistExemptTargetEnterpriseField(
            val.enterprise
          ),
    ['user']: val.user == void 0 ? void 0 : serializeUserMini(val.user),
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['modified_at']:
      val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
  };
}
export function deserializeCollaborationAllowlistExemptTarget(
  val: any
): CollaborationAllowlistExemptTarget {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | CollaborationAllowlistExemptTargetTypeField =
    val.type == void 0
      ? void 0
      : deserializeCollaborationAllowlistExemptTargetTypeField(val.type);
  const enterprise:
    | undefined
    | CollaborationAllowlistExemptTargetEnterpriseField =
    val.enterprise == void 0
      ? void 0
      : deserializeCollaborationAllowlistExemptTargetEnterpriseField(
          val.enterprise
        );
  const user: undefined | UserMini =
    val.user == void 0 ? void 0 : deserializeUserMini(val.user);
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  return {
    id: id,
    type: type,
    enterprise: enterprise,
    user: user,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
  } satisfies CollaborationAllowlistExemptTarget;
}
