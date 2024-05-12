import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type CollaboratorVariableTypeField = 'variable';
export type CollaboratorVariableVariableTypeField = 'user_list';
export type CollaboratorVariableVariableValueTypeField = 'user';
export class CollaboratorVariableVariableValueField {
  readonly type: CollaboratorVariableVariableValueTypeField =
    'user' as CollaboratorVariableVariableValueTypeField;
  readonly id!: string;
  constructor(
    fields: Omit<CollaboratorVariableVariableValueField, 'type'> &
      Partial<Pick<CollaboratorVariableVariableValueField, 'type'>>
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.id) {
      this.id = fields.id;
    }
  }
}
export interface CollaboratorVariableVariableValueFieldInput {
  readonly type?: CollaboratorVariableVariableValueTypeField;
  readonly id: string;
}
export class CollaboratorVariable {
  readonly type: CollaboratorVariableTypeField =
    'variable' as CollaboratorVariableTypeField;
  readonly variableType: CollaboratorVariableVariableTypeField =
    'user_list' as CollaboratorVariableVariableTypeField;
  readonly variableValue!: readonly CollaboratorVariableVariableValueField[];
  constructor(
    fields: Omit<CollaboratorVariable, 'type' | 'variableType'> &
      Partial<Pick<CollaboratorVariable, 'type' | 'variableType'>>
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
export interface CollaboratorVariableInput {
  readonly type?: CollaboratorVariableTypeField;
  readonly variableType?: CollaboratorVariableVariableTypeField;
  readonly variableValue: readonly CollaboratorVariableVariableValueField[];
}
export function serializeCollaboratorVariableTypeField(
  val: CollaboratorVariableTypeField
): SerializedData {
  return val;
}
export function deserializeCollaboratorVariableTypeField(
  val: any
): CollaboratorVariableTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CollaboratorVariableTypeField"',
    });
  }
  if (val == 'variable') {
    return 'variable';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCollaboratorVariableVariableTypeField(
  val: CollaboratorVariableVariableTypeField
): SerializedData {
  return val;
}
export function deserializeCollaboratorVariableVariableTypeField(
  val: any
): CollaboratorVariableVariableTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CollaboratorVariableVariableTypeField"',
    });
  }
  if (val == 'user_list') {
    return 'user_list';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCollaboratorVariableVariableValueTypeField(
  val: CollaboratorVariableVariableValueTypeField
): SerializedData {
  return val;
}
export function deserializeCollaboratorVariableVariableValueTypeField(
  val: any
): CollaboratorVariableVariableValueTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CollaboratorVariableVariableValueTypeField"',
    });
  }
  if (val == 'user') {
    return 'user';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCollaboratorVariableVariableValueField(
  val: CollaboratorVariableVariableValueField
): SerializedData {
  return {
    ['type']: serializeCollaboratorVariableVariableValueTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeCollaboratorVariableVariableValueField(
  val: any
): CollaboratorVariableVariableValueField {
  const type: CollaboratorVariableVariableValueTypeField =
    deserializeCollaboratorVariableVariableValueTypeField(val.type);
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CollaboratorVariableVariableValueField;
}
export function serializeCollaboratorVariableVariableValueFieldInput(
  val: CollaboratorVariableVariableValueFieldInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCollaboratorVariableVariableValueTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeCollaboratorVariableVariableValueFieldInput(
  val: any
): CollaboratorVariableVariableValueFieldInput {
  const type: undefined | CollaboratorVariableVariableValueTypeField =
    val.type == void 0
      ? void 0
      : deserializeCollaboratorVariableVariableValueTypeField(val.type);
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CollaboratorVariableVariableValueFieldInput;
}
export function serializeCollaboratorVariable(
  val: CollaboratorVariable
): SerializedData {
  return {
    ['type']: serializeCollaboratorVariableTypeField(val.type),
    ['variable_type']: serializeCollaboratorVariableVariableTypeField(
      val.variableType
    ),
    ['variable_value']: val.variableValue.map(function (
      item: CollaboratorVariableVariableValueField
    ): SerializedData {
      return serializeCollaboratorVariableVariableValueField(item);
    }) as readonly any[],
  };
}
export function deserializeCollaboratorVariable(
  val: any
): CollaboratorVariable {
  const type: CollaboratorVariableTypeField =
    deserializeCollaboratorVariableTypeField(val.type);
  const variableType: CollaboratorVariableVariableTypeField =
    deserializeCollaboratorVariableVariableTypeField(val.variable_type);
  const variableValue: readonly CollaboratorVariableVariableValueField[] =
    sdIsList(val.variable_value)
      ? (val.variable_value.map(function (
          itm: SerializedData
        ): CollaboratorVariableVariableValueField {
          return deserializeCollaboratorVariableVariableValueField(itm);
        }) as readonly any[])
      : [];
  return {
    type: type,
    variableType: variableType,
    variableValue: variableValue,
  } satisfies CollaboratorVariable;
}
export function serializeCollaboratorVariableInput(
  val: CollaboratorVariableInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCollaboratorVariableTypeField(val.type),
    ['variableType']:
      val.variableType == void 0
        ? void 0
        : serializeCollaboratorVariableVariableTypeField(val.variableType),
    ['variable_value']: val.variableValue.map(function (
      item: CollaboratorVariableVariableValueField
    ): SerializedData {
      return serializeCollaboratorVariableVariableValueField(item);
    }) as readonly any[],
  };
}
export function deserializeCollaboratorVariableInput(
  val: any
): CollaboratorVariableInput {
  const type: undefined | CollaboratorVariableTypeField =
    val.type == void 0
      ? void 0
      : deserializeCollaboratorVariableTypeField(val.type);
  const variableType: undefined | CollaboratorVariableVariableTypeField =
    val.variableType == void 0
      ? void 0
      : deserializeCollaboratorVariableVariableTypeField(val.variableType);
  const variableValue: readonly CollaboratorVariableVariableValueField[] =
    sdIsList(val.variable_value)
      ? (val.variable_value.map(function (
          itm: SerializedData
        ): CollaboratorVariableVariableValueField {
          return deserializeCollaboratorVariableVariableValueField(itm);
        }) as readonly any[])
      : [];
  return {
    type: type,
    variableType: variableType,
    variableValue: variableValue,
  } satisfies CollaboratorVariableInput;
}
