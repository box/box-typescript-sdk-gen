import { serializeShieldInformationBarrierSegmentRestrictionBaseTypeField } from './shieldInformationBarrierSegmentRestrictionBase.generated.js';
import { deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField } from './shieldInformationBarrierSegmentRestrictionBase.generated.js';
import { serializeShieldInformationBarrierSegmentRestrictionBase } from './shieldInformationBarrierSegmentRestrictionBase.generated.js';
import { deserializeShieldInformationBarrierSegmentRestrictionBase } from './shieldInformationBarrierSegmentRestrictionBase.generated.js';
import { ShieldInformationBarrierSegmentRestrictionBaseTypeField } from './shieldInformationBarrierSegmentRestrictionBase.generated.js';
import { ShieldInformationBarrierSegmentRestrictionBase } from './shieldInformationBarrierSegmentRestrictionBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField =
  'shield_information_barrier_segment';
export interface ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField {
  readonly id?: string;
  readonly type?: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField;
}
export type ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField =
  'shield_information_barrier_segment';
export interface ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField {
  readonly id?: string;
  readonly type?: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField;
}
export type ShieldInformationBarrierSegmentRestrictionMini =
  ShieldInformationBarrierSegmentRestrictionBase & {
    readonly shieldInformationBarrierSegment: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField;
    readonly restrictedSegment: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField;
  };
export function serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(
  val: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(
  val: any
): ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField"',
    });
  }
  if (val == 'shield_information_barrier_segment') {
    return 'shield_information_barrier_segment';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(
  val: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(
            val.type
          ),
  };
}
export function deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(
  val: any
): ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type:
    | undefined
    | ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(
          val.type
        );
  return {
    id: id,
    type: type,
  } satisfies ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField;
}
export function serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(
  val: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(
  val: any
): ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField"',
    });
  }
  if (val == 'shield_information_barrier_segment') {
    return 'shield_information_barrier_segment';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(
  val: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(
            val.type
          ),
  };
}
export function deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(
  val: any
): ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type:
    | undefined
    | ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(
          val.type
        );
  return {
    id: id,
    type: type,
  } satisfies ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField;
}
export function serializeShieldInformationBarrierSegmentRestrictionMini(
  val: ShieldInformationBarrierSegmentRestrictionMini
): SerializedData {
  const base: any =
    serializeShieldInformationBarrierSegmentRestrictionBase(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "ShieldInformationBarrierSegmentRestrictionMini"',
    });
  }
  return {
    ...base,
    ...{
      ['shield_information_barrier_segment']:
        serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(
          val.shieldInformationBarrierSegment
        ),
      ['restricted_segment']:
        serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(
          val.restrictedSegment
        ),
    },
  };
}
export function deserializeShieldInformationBarrierSegmentRestrictionMini(
  val: any
): ShieldInformationBarrierSegmentRestrictionMini {
  const shieldInformationBarrierSegment: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField =
    deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(
      val.shield_information_barrier_segment
    );
  const restrictedSegment: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField =
    deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(
      val.restricted_segment
    );
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
    shieldInformationBarrierSegment: shieldInformationBarrierSegment,
    restrictedSegment: restrictedSegment,
    type: type,
    id: id,
  } satisfies ShieldInformationBarrierSegmentRestrictionMini;
}
