import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type RoleVariableTypeField = 'variable';
export type RoleVariableVariableTypeField = 'collaborator_role';
export type RoleVariableVariableValueField =
  | 'editor'
  | 'viewer'
  | 'previewer'
  | 'uploader'
  | 'previewer uploader'
  | 'viewer uploader'
  | 'co-owner';
export class RoleVariable {
  readonly type: RoleVariableTypeField = 'variable' as RoleVariableTypeField;
  readonly variableType: RoleVariableVariableTypeField =
    'collaborator_role' as RoleVariableVariableTypeField;
  readonly variableValue!: RoleVariableVariableValueField;
  constructor(
    fields: Omit<RoleVariable, 'type' | 'variableType'> &
      Partial<Pick<RoleVariable, 'type' | 'variableType'>>
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.variableType) {
      this.variableType = fields.variableType;
    }
    if (fields.variableValue) {
      this.variableValue = fields.variableValue;
    }
  }
}
export interface RoleVariableInput {
  readonly type?: RoleVariableTypeField;
  readonly variableType?: RoleVariableVariableTypeField;
  readonly variableValue: RoleVariableVariableValueField;
}
export function serializeRoleVariableTypeField(
  val: RoleVariableTypeField
): SerializedData {
  return val;
}
export function deserializeRoleVariableTypeField(
  val: any
): RoleVariableTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "RoleVariableTypeField"',
    });
  }
  if (val == 'variable') {
    return 'variable';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeRoleVariableVariableTypeField(
  val: RoleVariableVariableTypeField
): SerializedData {
  return val;
}
export function deserializeRoleVariableVariableTypeField(
  val: any
): RoleVariableVariableTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "RoleVariableVariableTypeField"',
    });
  }
  if (val == 'collaborator_role') {
    return 'collaborator_role';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeRoleVariableVariableValueField(
  val: RoleVariableVariableValueField
): SerializedData {
  return val;
}
export function deserializeRoleVariableVariableValueField(
  val: any
): RoleVariableVariableValueField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "RoleVariableVariableValueField"',
    });
  }
  if (val == 'editor') {
    return 'editor';
  }
  if (val == 'viewer') {
    return 'viewer';
  }
  if (val == 'previewer') {
    return 'previewer';
  }
  if (val == 'uploader') {
    return 'uploader';
  }
  if (val == 'previewer uploader') {
    return 'previewer uploader';
  }
  if (val == 'viewer uploader') {
    return 'viewer uploader';
  }
  if (val == 'co-owner') {
    return 'co-owner';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeRoleVariable(val: RoleVariable): SerializedData {
  return {
    ['type']: serializeRoleVariableTypeField(val.type),
    ['variable_type']: serializeRoleVariableVariableTypeField(val.variableType),
    ['variable_value']: serializeRoleVariableVariableValueField(
      val.variableValue
    ),
  };
}
export function deserializeRoleVariable(val: any): RoleVariable {
  const type: RoleVariableTypeField = deserializeRoleVariableTypeField(
    val.type
  );
  const variableType: RoleVariableVariableTypeField =
    deserializeRoleVariableVariableTypeField(val.variable_type);
  const variableValue: RoleVariableVariableValueField =
    deserializeRoleVariableVariableValueField(val.variable_value);
  return {
    type: type,
    variableType: variableType,
    variableValue: variableValue,
  } satisfies RoleVariable;
}
export function serializeRoleVariableInput(
  val: RoleVariableInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0 ? void 0 : serializeRoleVariableTypeField(val.type),
    ['variableType']:
      val.variableType == void 0
        ? void 0
        : serializeRoleVariableVariableTypeField(val.variableType),
    ['variable_value']: serializeRoleVariableVariableValueField(
      val.variableValue
    ),
  };
}
export function deserializeRoleVariableInput(val: any): RoleVariableInput {
  const type: undefined | RoleVariableTypeField =
    val.type == void 0 ? void 0 : deserializeRoleVariableTypeField(val.type);
  const variableType: undefined | RoleVariableVariableTypeField =
    val.variableType == void 0
      ? void 0
      : deserializeRoleVariableVariableTypeField(val.variableType);
  const variableValue: RoleVariableVariableValueField =
    deserializeRoleVariableVariableValueField(val.variable_value);
  return {
    type: type,
    variableType: variableType,
    variableValue: variableValue,
  } satisfies RoleVariableInput;
}
