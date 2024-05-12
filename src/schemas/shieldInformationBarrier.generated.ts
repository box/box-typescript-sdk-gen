import { serializeEnterpriseBase } from './enterpriseBase.generated.js';
import { deserializeEnterpriseBase } from './enterpriseBase.generated.js';
import { serializeUserBase } from './userBase.generated.js';
import { deserializeUserBase } from './userBase.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { EnterpriseBase } from './enterpriseBase.generated.js';
import { UserBase } from './userBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type ShieldInformationBarrierTypeField = 'shield_information_barrier';
export type ShieldInformationBarrierStatusField =
  | 'draft'
  | 'pending'
  | 'disabled'
  | 'enabled'
  | 'invalid';
export interface ShieldInformationBarrier {
  readonly id?: string;
  readonly type?: ShieldInformationBarrierTypeField;
  readonly enterprise?: EnterpriseBase;
  readonly status?: ShieldInformationBarrierStatusField;
  readonly createdAt?: DateTime;
  readonly createdBy?: UserBase;
  readonly updatedAt?: DateTime;
  readonly updatedBy?: UserBase;
  readonly enabledAt?: DateTime;
  readonly enabledBy?: UserBase;
}
export function serializeShieldInformationBarrierTypeField(
  val: ShieldInformationBarrierTypeField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierTypeField(
  val: any
): ShieldInformationBarrierTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "ShieldInformationBarrierTypeField"',
    });
  }
  if (val == 'shield_information_barrier') {
    return 'shield_information_barrier';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeShieldInformationBarrierStatusField(
  val: ShieldInformationBarrierStatusField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierStatusField(
  val: any
): ShieldInformationBarrierStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "ShieldInformationBarrierStatusField"',
    });
  }
  if (val == 'draft') {
    return 'draft';
  }
  if (val == 'pending') {
    return 'pending';
  }
  if (val == 'disabled') {
    return 'disabled';
  }
  if (val == 'enabled') {
    return 'enabled';
  }
  if (val == 'invalid') {
    return 'invalid';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeShieldInformationBarrier(
  val: ShieldInformationBarrier
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeShieldInformationBarrierTypeField(val.type),
    ['enterprise']:
      val.enterprise == void 0
        ? void 0
        : serializeEnterpriseBase(val.enterprise),
    ['status']:
      val.status == void 0
        ? void 0
        : serializeShieldInformationBarrierStatusField(val.status),
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy),
    ['updated_at']:
      val.updatedAt == void 0 ? void 0 : serializeDateTime(val.updatedAt),
    ['updated_by']:
      val.updatedBy == void 0 ? void 0 : serializeUserBase(val.updatedBy),
    ['enabled_at']:
      val.enabledAt == void 0 ? void 0 : serializeDateTime(val.enabledAt),
    ['enabled_by']:
      val.enabledBy == void 0 ? void 0 : serializeUserBase(val.enabledBy),
  };
}
export function deserializeShieldInformationBarrier(
  val: any
): ShieldInformationBarrier {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | ShieldInformationBarrierTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierTypeField(val.type);
  const enterprise: undefined | EnterpriseBase =
    val.enterprise == void 0
      ? void 0
      : deserializeEnterpriseBase(val.enterprise);
  const status: undefined | ShieldInformationBarrierStatusField =
    val.status == void 0
      ? void 0
      : deserializeShieldInformationBarrierStatusField(val.status);
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const createdBy: undefined | UserBase =
    val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
  const updatedAt: undefined | DateTime =
    val.updated_at == void 0 ? void 0 : deserializeDateTime(val.updated_at);
  const updatedBy: undefined | UserBase =
    val.updated_by == void 0 ? void 0 : deserializeUserBase(val.updated_by);
  const enabledAt: undefined | DateTime =
    val.enabled_at == void 0 ? void 0 : deserializeDateTime(val.enabled_at);
  const enabledBy: undefined | UserBase =
    val.enabled_by == void 0 ? void 0 : deserializeUserBase(val.enabled_by);
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
  } satisfies ShieldInformationBarrier;
}
