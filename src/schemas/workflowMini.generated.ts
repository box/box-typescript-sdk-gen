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
  /**
   * The unique identifier for the workflow */
  readonly id?: string;
  /**
   * `workflow` */
  readonly type?: WorkflowMiniTypeField;
  /**
   * The name of the workflow */
  readonly name?: string;
  /**
   * The description for a workflow. */
  readonly description?: string;
  /**
   * Specifies if this workflow is enabled */
  readonly isEnabled?: boolean;
  readonly rawData?: SerializedData;
}
export function serializeWorkflowMiniTypeField(
  val: WorkflowMiniTypeField
): SerializedData {
  return val;
}
export function deserializeWorkflowMiniTypeField(
  val: SerializedData
): WorkflowMiniTypeField {
  if (val == 'workflow') {
    return val;
  }
  throw new BoxSdkError({ message: "Can't deserialize WorkflowMiniTypeField" });
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
export function deserializeWorkflowMini(val: SerializedData): WorkflowMini {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "WorkflowMini"' });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "WorkflowMini"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | WorkflowMiniTypeField =
    val.type == void 0 ? void 0 : deserializeWorkflowMiniTypeField(val.type);
  if (!(val.name == void 0) && !sdIsString(val.name)) {
    throw new BoxSdkError({
      message: 'Expecting string for "name" of type "WorkflowMini"',
    });
  }
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  if (!(val.description == void 0) && !sdIsString(val.description)) {
    throw new BoxSdkError({
      message: 'Expecting string for "description" of type "WorkflowMini"',
    });
  }
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  if (!(val.is_enabled == void 0) && !sdIsBoolean(val.is_enabled)) {
    throw new BoxSdkError({
      message: 'Expecting boolean for "is_enabled" of type "WorkflowMini"',
    });
  }
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
