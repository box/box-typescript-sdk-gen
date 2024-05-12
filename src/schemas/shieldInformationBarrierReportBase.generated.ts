import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type ShieldInformationBarrierReportBaseTypeField =
  'shield_information_barrier_report';
export interface ShieldInformationBarrierReportBase {
  readonly id?: string;
  readonly type?: ShieldInformationBarrierReportBaseTypeField;
}
export function serializeShieldInformationBarrierReportBaseTypeField(
  val: ShieldInformationBarrierReportBaseTypeField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierReportBaseTypeField(
  val: any
): ShieldInformationBarrierReportBaseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "ShieldInformationBarrierReportBaseTypeField"',
    });
  }
  if (val == 'shield_information_barrier_report') {
    return 'shield_information_barrier_report';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeShieldInformationBarrierReportBase(
  val: ShieldInformationBarrierReportBase
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeShieldInformationBarrierReportBaseTypeField(val.type),
  };
}
export function deserializeShieldInformationBarrierReportBase(
  val: any
): ShieldInformationBarrierReportBase {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | ShieldInformationBarrierReportBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierReportBaseTypeField(val.type);
  return { id: id, type: type } satisfies ShieldInformationBarrierReportBase;
}
