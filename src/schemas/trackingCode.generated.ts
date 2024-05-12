import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type TrackingCodeTypeField = 'tracking_code';
export interface TrackingCode {
  readonly type?: TrackingCodeTypeField;
  readonly name?: string;
  readonly value?: string;
}
export function serializeTrackingCodeTypeField(
  val: TrackingCodeTypeField
): SerializedData {
  return val;
}
export function deserializeTrackingCodeTypeField(
  val: any
): TrackingCodeTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TrackingCodeTypeField"',
    });
  }
  if (val == 'tracking_code') {
    return 'tracking_code';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTrackingCode(val: TrackingCode): SerializedData {
  return {
    ['type']:
      val.type == void 0 ? void 0 : serializeTrackingCodeTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['value']: val.value == void 0 ? void 0 : val.value,
  };
}
export function deserializeTrackingCode(val: any): TrackingCode {
  const type: undefined | TrackingCodeTypeField =
    val.type == void 0 ? void 0 : deserializeTrackingCodeTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const value: undefined | string = val.value == void 0 ? void 0 : val.value;
  return { type: type, name: name, value: value } satisfies TrackingCode;
}
