import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type CompletionRuleVariableTypeField = 'variable';
export type CompletionRuleVariableVariableTypeField = 'task_completion_rule';
export type CompletionRuleVariableVariableValueField =
  | 'all_assignees'
  | 'any_assignees';
export class CompletionRuleVariable {
  readonly type: CompletionRuleVariableTypeField =
    'variable' as CompletionRuleVariableTypeField;
  readonly variableType: CompletionRuleVariableVariableTypeField =
    'task_completion_rule' as CompletionRuleVariableVariableTypeField;
  readonly variableValue!: CompletionRuleVariableVariableValueField;
  constructor(
    fields: Omit<CompletionRuleVariable, 'type' | 'variableType'> &
      Partial<Pick<CompletionRuleVariable, 'type' | 'variableType'>>
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
export interface CompletionRuleVariableInput {
  readonly type?: CompletionRuleVariableTypeField;
  readonly variableType?: CompletionRuleVariableVariableTypeField;
  readonly variableValue: CompletionRuleVariableVariableValueField;
}
export function serializeCompletionRuleVariableTypeField(
  val: CompletionRuleVariableTypeField
): SerializedData {
  return val;
}
export function deserializeCompletionRuleVariableTypeField(
  val: any
): CompletionRuleVariableTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CompletionRuleVariableTypeField"',
    });
  }
  if (val == 'variable') {
    return 'variable';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCompletionRuleVariableVariableTypeField(
  val: CompletionRuleVariableVariableTypeField
): SerializedData {
  return val;
}
export function deserializeCompletionRuleVariableVariableTypeField(
  val: any
): CompletionRuleVariableVariableTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CompletionRuleVariableVariableTypeField"',
    });
  }
  if (val == 'task_completion_rule') {
    return 'task_completion_rule';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCompletionRuleVariableVariableValueField(
  val: CompletionRuleVariableVariableValueField
): SerializedData {
  return val;
}
export function deserializeCompletionRuleVariableVariableValueField(
  val: any
): CompletionRuleVariableVariableValueField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CompletionRuleVariableVariableValueField"',
    });
  }
  if (val == 'all_assignees') {
    return 'all_assignees';
  }
  if (val == 'any_assignees') {
    return 'any_assignees';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCompletionRuleVariable(
  val: CompletionRuleVariable
): SerializedData {
  return {
    ['type']: serializeCompletionRuleVariableTypeField(val.type),
    ['variable_type']: serializeCompletionRuleVariableVariableTypeField(
      val.variableType
    ),
    ['variable_value']: serializeCompletionRuleVariableVariableValueField(
      val.variableValue
    ),
  };
}
export function deserializeCompletionRuleVariable(
  val: any
): CompletionRuleVariable {
  const type: CompletionRuleVariableTypeField =
    deserializeCompletionRuleVariableTypeField(val.type);
  const variableType: CompletionRuleVariableVariableTypeField =
    deserializeCompletionRuleVariableVariableTypeField(val.variable_type);
  const variableValue: CompletionRuleVariableVariableValueField =
    deserializeCompletionRuleVariableVariableValueField(val.variable_value);
  return {
    type: type,
    variableType: variableType,
    variableValue: variableValue,
  } satisfies CompletionRuleVariable;
}
export function serializeCompletionRuleVariableInput(
  val: CompletionRuleVariableInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCompletionRuleVariableTypeField(val.type),
    ['variableType']:
      val.variableType == void 0
        ? void 0
        : serializeCompletionRuleVariableVariableTypeField(val.variableType),
    ['variable_value']: serializeCompletionRuleVariableVariableValueField(
      val.variableValue
    ),
  };
}
export function deserializeCompletionRuleVariableInput(
  val: any
): CompletionRuleVariableInput {
  const type: undefined | CompletionRuleVariableTypeField =
    val.type == void 0
      ? void 0
      : deserializeCompletionRuleVariableTypeField(val.type);
  const variableType: undefined | CompletionRuleVariableVariableTypeField =
    val.variableType == void 0
      ? void 0
      : deserializeCompletionRuleVariableVariableTypeField(val.variableType);
  const variableValue: CompletionRuleVariableVariableValueField =
    deserializeCompletionRuleVariableVariableValueField(val.variable_value);
  return {
    type: type,
    variableType: variableType,
    variableValue: variableValue,
  } satisfies CompletionRuleVariableInput;
}
