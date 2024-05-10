import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type ShieldInformationBarrierBaseTypeField =
  'shield_information_barrier';
export interface ShieldInformationBarrierBase {
  readonly id?: string;
  readonly type?: ShieldInformationBarrierBaseTypeField;
}
export function serializeShieldInformationBarrierBaseTypeField(
  val: ShieldInformationBarrierBaseTypeField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierBaseTypeField(
  val: any
): ShieldInformationBarrierBaseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "ShieldInformationBarrierBaseTypeField"',
    });
  }
  if (val == 'shield_information_barrier') {
    return 'shield_information_barrier';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeShieldInformationBarrierBase(
  val: ShieldInformationBarrierBase
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeShieldInformationBarrierBaseTypeField(val.type),
  };
}
export function deserializeShieldInformationBarrierBase(
  val: any
): ShieldInformationBarrierBase {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | ShieldInformationBarrierBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierBaseTypeField(val.type);
  return { id: id, type: type } satisfies ShieldInformationBarrierBase;
}
