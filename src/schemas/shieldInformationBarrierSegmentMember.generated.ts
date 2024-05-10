import { serializeShieldInformationBarrierSegmentMemberBaseTypeField } from './shieldInformationBarrierSegmentMemberBase.generated.js';
import { deserializeShieldInformationBarrierSegmentMemberBaseTypeField } from './shieldInformationBarrierSegmentMemberBase.generated.js';
import { serializeShieldInformationBarrierSegmentMemberBase } from './shieldInformationBarrierSegmentMemberBase.generated.js';
import { deserializeShieldInformationBarrierSegmentMemberBase } from './shieldInformationBarrierSegmentMemberBase.generated.js';
import { serializeShieldInformationBarrierSegmentMemberMini } from './shieldInformationBarrierSegmentMemberMini.generated.js';
import { deserializeShieldInformationBarrierSegmentMemberMini } from './shieldInformationBarrierSegmentMemberMini.generated.js';
import { serializeShieldInformationBarrierBase } from './shieldInformationBarrierBase.generated.js';
import { deserializeShieldInformationBarrierBase } from './shieldInformationBarrierBase.generated.js';
import { serializeUserBase } from './userBase.generated.js';
import { deserializeUserBase } from './userBase.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { ShieldInformationBarrierSegmentMemberBaseTypeField } from './shieldInformationBarrierSegmentMemberBase.generated.js';
import { ShieldInformationBarrierSegmentMemberBase } from './shieldInformationBarrierSegmentMemberBase.generated.js';
import { ShieldInformationBarrierSegmentMemberMini } from './shieldInformationBarrierSegmentMemberMini.generated.js';
import { ShieldInformationBarrierBase } from './shieldInformationBarrierBase.generated.js';
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
export type ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField =
  'shield_information_barrier_segment';
export interface ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField {
  readonly id?: string;
  readonly type?: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField;
}
export type ShieldInformationBarrierSegmentMember =
  ShieldInformationBarrierSegmentMemberMini & {
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly shieldInformationBarrierSegment?: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField;
    readonly createdAt?: DateTime;
    readonly createdBy?: UserBase;
    readonly updatedAt?: DateTime;
    readonly updatedBy?: UserBase;
  };
export function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(
  val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(
  val: any
): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField"',
    });
  }
  if (val == 'shield_information_barrier_segment') {
    return 'shield_information_barrier_segment';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(
  val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(
            val.type
          ),
  };
}
export function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(
  val: any
): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type:
    | undefined
    | ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(
          val.type
        );
  return {
    id: id,
    type: type,
  } satisfies ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField;
}
export function serializeShieldInformationBarrierSegmentMember(
  val: ShieldInformationBarrierSegmentMember
): SerializedData {
  const base: any = serializeShieldInformationBarrierSegmentMemberMini(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "ShieldInformationBarrierSegmentMember"',
    });
  }
  return {
    ...base,
    ...{
      ['shield_information_barrier']:
        val.shieldInformationBarrier == void 0
          ? void 0
          : serializeShieldInformationBarrierBase(val.shieldInformationBarrier),
      ['shield_information_barrier_segment']:
        val.shieldInformationBarrierSegment == void 0
          ? void 0
          : serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(
              val.shieldInformationBarrierSegment
            ),
      ['created_at']:
        val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
      ['created_by']:
        val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy),
      ['updated_at']:
        val.updatedAt == void 0 ? void 0 : serializeDateTime(val.updatedAt),
      ['updated_by']:
        val.updatedBy == void 0 ? void 0 : serializeUserBase(val.updatedBy),
    },
  };
}
export function deserializeShieldInformationBarrierSegmentMember(
  val: any
): ShieldInformationBarrierSegmentMember {
  const shieldInformationBarrier: undefined | ShieldInformationBarrierBase =
    val.shield_information_barrier == void 0
      ? void 0
      : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
  const shieldInformationBarrierSegment:
    | undefined
    | ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField =
    val.shield_information_barrier_segment == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(
          val.shield_information_barrier_segment
        );
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const createdBy: undefined | UserBase =
    val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
  const updatedAt: undefined | DateTime =
    val.updated_at == void 0 ? void 0 : deserializeDateTime(val.updated_at);
  const updatedBy: undefined | UserBase =
    val.updated_by == void 0 ? void 0 : deserializeUserBase(val.updated_by);
  const user: undefined | UserBase =
    val.user == void 0 ? void 0 : deserializeUserBase(val.user);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | ShieldInformationBarrierSegmentMemberBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type);
  return {
    shieldInformationBarrier: shieldInformationBarrier,
    shieldInformationBarrierSegment: shieldInformationBarrierSegment,
    createdAt: createdAt,
    createdBy: createdBy,
    updatedAt: updatedAt,
    updatedBy: updatedBy,
    user: user,
    id: id,
    type: type,
  } satisfies ShieldInformationBarrierSegmentMember;
}
