import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type ShieldInformationBarrierSegmentMemberBaseTypeField =
  'shield_information_barrier_segment_member';
export interface ShieldInformationBarrierSegmentMemberBase {
  readonly id?: string;
  readonly type?: ShieldInformationBarrierSegmentMemberBaseTypeField;
}
export function serializeShieldInformationBarrierSegmentMemberBaseTypeField(
  val: ShieldInformationBarrierSegmentMemberBaseTypeField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierSegmentMemberBaseTypeField(
  val: any
): ShieldInformationBarrierSegmentMemberBaseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "ShieldInformationBarrierSegmentMemberBaseTypeField"',
    });
  }
  if (val == 'shield_information_barrier_segment_member') {
    return 'shield_information_barrier_segment_member';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeShieldInformationBarrierSegmentMemberBase(
  val: ShieldInformationBarrierSegmentMemberBase
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type),
  };
}
export function deserializeShieldInformationBarrierSegmentMemberBase(
  val: any
): ShieldInformationBarrierSegmentMemberBase {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | ShieldInformationBarrierSegmentMemberBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type);
  return {
    id: id,
    type: type,
  } satisfies ShieldInformationBarrierSegmentMemberBase;
}
