import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type EnterpriseBaseTypeField = 'enterprise';
export interface EnterpriseBase {
  readonly id?: string;
  readonly type?: EnterpriseBaseTypeField;
}
export function serializeEnterpriseBaseTypeField(
  val: EnterpriseBaseTypeField
): SerializedData {
  return val;
}
export function deserializeEnterpriseBaseTypeField(
  val: any
): EnterpriseBaseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "EnterpriseBaseTypeField"',
    });
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeEnterpriseBase(val: EnterpriseBase): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeEnterpriseBaseTypeField(val.type),
  };
}
export function deserializeEnterpriseBase(val: any): EnterpriseBase {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | EnterpriseBaseTypeField =
    val.type == void 0 ? void 0 : deserializeEnterpriseBaseTypeField(val.type);
  return { id: id, type: type } satisfies EnterpriseBase;
}
