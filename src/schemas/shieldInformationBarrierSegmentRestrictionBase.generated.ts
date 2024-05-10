import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type ShieldInformationBarrierSegmentRestrictionBaseTypeField =
  'shield_information_barrier_segment_restriction';
export interface ShieldInformationBarrierSegmentRestrictionBase {
  readonly type?: ShieldInformationBarrierSegmentRestrictionBaseTypeField;
  readonly id?: string;
}
export function serializeShieldInformationBarrierSegmentRestrictionBaseTypeField(
  val: ShieldInformationBarrierSegmentRestrictionBaseTypeField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(
  val: any
): ShieldInformationBarrierSegmentRestrictionBaseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "ShieldInformationBarrierSegmentRestrictionBaseTypeField"',
    });
  }
  if (val == 'shield_information_barrier_segment_restriction') {
    return 'shield_information_barrier_segment_restriction';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeShieldInformationBarrierSegmentRestrictionBase(
  val: ShieldInformationBarrierSegmentRestrictionBase
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeShieldInformationBarrierSegmentRestrictionBaseTypeField(
            val.type
          ),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeShieldInformationBarrierSegmentRestrictionBase(
  val: any
): ShieldInformationBarrierSegmentRestrictionBase {
  const type:
    | undefined
    | ShieldInformationBarrierSegmentRestrictionBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(
          val.type
        );
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies ShieldInformationBarrierSegmentRestrictionBase;
}
