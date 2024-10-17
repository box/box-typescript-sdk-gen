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
  /**
   * Completion
   * Rule object type.
   *  */
  readonly type: CompletionRuleVariableTypeField =
    'variable' as CompletionRuleVariableTypeField;
  /**
   * Variable type
   * for the Completion
   * Rule object.
   *  */
  readonly variableType: CompletionRuleVariableVariableTypeField =
    'task_completion_rule' as CompletionRuleVariableVariableTypeField;
  /**
   * Variable
   * values for a completion
   * rule.
   *  */
  readonly variableValue!: CompletionRuleVariableVariableValueField;
  readonly rawData?: SerializedData;
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
    if (fields.rawData) {
      this.rawData = fields.rawData;
    }
  }
}
export interface CompletionRuleVariableInput {
  /**
   * Completion
   * Rule object type.
   *  */
  readonly type?: CompletionRuleVariableTypeField;
  /**
   * Variable type
   * for the Completion
   * Rule object.
   *  */
  readonly variableType?: CompletionRuleVariableVariableTypeField;
  /**
   * Variable
   * values for a completion
   * rule.
   *  */
  readonly variableValue: CompletionRuleVariableVariableValueField;
  readonly rawData?: SerializedData;
}
export function serializeCompletionRuleVariableTypeField(
  val: CompletionRuleVariableTypeField
): SerializedData {
  return val;
}
export function deserializeCompletionRuleVariableTypeField(
  val: SerializedData
): CompletionRuleVariableTypeField {
  if (val == 'variable') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize CompletionRuleVariableTypeField",
  });
}
export function serializeCompletionRuleVariableVariableTypeField(
  val: CompletionRuleVariableVariableTypeField
): SerializedData {
  return val;
}
export function deserializeCompletionRuleVariableVariableTypeField(
  val: SerializedData
): CompletionRuleVariableVariableTypeField {
  if (val == 'task_completion_rule') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize CompletionRuleVariableVariableTypeField",
  });
}
export function serializeCompletionRuleVariableVariableValueField(
  val: CompletionRuleVariableVariableValueField
): SerializedData {
  return val;
}
export function deserializeCompletionRuleVariableVariableValueField(
  val: SerializedData
): CompletionRuleVariableVariableValueField {
  if (val == 'all_assignees') {
    return val;
  }
  if (val == 'any_assignees') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize CompletionRuleVariableVariableValueField",
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
  val: SerializedData
): CompletionRuleVariable {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CompletionRuleVariable"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "CompletionRuleVariable" to be defined',
    });
  }
  const type: CompletionRuleVariableTypeField =
    deserializeCompletionRuleVariableTypeField(val.type);
  if (val.variable_type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "variable_type" of type "CompletionRuleVariable" to be defined',
    });
  }
  const variableType: CompletionRuleVariableVariableTypeField =
    deserializeCompletionRuleVariableVariableTypeField(val.variable_type);
  if (val.variable_value == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "variable_value" of type "CompletionRuleVariable" to be defined',
    });
  }
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
  val: SerializedData
): CompletionRuleVariableInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CompletionRuleVariableInput"',
    });
  }
  const type: undefined | CompletionRuleVariableTypeField =
    val.type == void 0
      ? void 0
      : deserializeCompletionRuleVariableTypeField(val.type);
  const variableType: undefined | CompletionRuleVariableVariableTypeField =
    val.variableType == void 0
      ? void 0
      : deserializeCompletionRuleVariableVariableTypeField(val.variableType);
  if (val.variable_value == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "variable_value" of type "CompletionRuleVariableInput" to be defined',
    });
  }
  const variableValue: CompletionRuleVariableVariableValueField =
    deserializeCompletionRuleVariableVariableValueField(val.variable_value);
  return {
    type: type,
    variableType: variableType,
    variableValue: variableValue,
  } satisfies CompletionRuleVariableInput;
}
