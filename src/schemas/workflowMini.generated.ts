import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type WorkflowMiniTypeField = 'workflow';
export interface WorkflowMini {
  readonly id?: string;
  readonly type?: WorkflowMiniTypeField;
  readonly name?: string;
  readonly description?: string;
  readonly isEnabled?: boolean;
}
export function serializeWorkflowMiniTypeField(
  val: WorkflowMiniTypeField
): SerializedData {
  return val;
}
export function deserializeWorkflowMiniTypeField(
  val: any
): WorkflowMiniTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "WorkflowMiniTypeField"',
    });
  }
  if (val == 'workflow') {
    return 'workflow';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeWorkflowMini(val: WorkflowMini): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeWorkflowMiniTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['is_enabled']: val.isEnabled == void 0 ? void 0 : val.isEnabled,
  };
}
export function deserializeWorkflowMini(val: any): WorkflowMini {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | WorkflowMiniTypeField =
    val.type == void 0 ? void 0 : deserializeWorkflowMiniTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const isEnabled: undefined | boolean =
    val.is_enabled == void 0 ? void 0 : val.is_enabled;
  return {
    id: id,
    type: type,
    name: name,
    description: description,
    isEnabled: isEnabled,
  } satisfies WorkflowMini;
}
