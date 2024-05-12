import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type DevicePinnerTypeField = 'device_pinner';
export interface DevicePinner {
  readonly id?: string;
  readonly type?: DevicePinnerTypeField;
  readonly ownedBy?: UserMini;
  readonly productName?: string;
}
export function serializeDevicePinnerTypeField(
  val: DevicePinnerTypeField
): SerializedData {
  return val;
}
export function deserializeDevicePinnerTypeField(
  val: any
): DevicePinnerTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "DevicePinnerTypeField"',
    });
  }
  if (val == 'device_pinner') {
    return 'device_pinner';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeDevicePinner(val: DevicePinner): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeDevicePinnerTypeField(val.type),
    ['owned_by']:
      val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy),
    ['product_name']: val.productName == void 0 ? void 0 : val.productName,
  };
}
export function deserializeDevicePinner(val: any): DevicePinner {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | DevicePinnerTypeField =
    val.type == void 0 ? void 0 : deserializeDevicePinnerTypeField(val.type);
  const ownedBy: undefined | UserMini =
    val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
  const productName: undefined | string =
    val.product_name == void 0 ? void 0 : val.product_name;
  return {
    id: id,
    type: type,
    ownedBy: ownedBy,
    productName: productName,
  } satisfies DevicePinner;
}
