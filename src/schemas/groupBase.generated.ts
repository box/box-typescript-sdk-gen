import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type GroupBaseTypeField = 'group';
export class GroupBase {
  readonly id!: string;
  readonly type: GroupBaseTypeField = 'group' as GroupBaseTypeField;
  constructor(
    fields: Omit<GroupBase, 'type'> & Partial<Pick<GroupBase, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
  }
}
export interface GroupBaseInput {
  readonly id: string;
  readonly type?: GroupBaseTypeField;
}
export function serializeGroupBaseTypeField(
  val: GroupBaseTypeField
): SerializedData {
  return val;
}
export function deserializeGroupBaseTypeField(
  val: SerializedData
): GroupBaseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "GroupBaseTypeField"',
    });
  }
  if (val == 'group') {
    return 'group';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeGroupBase(val: GroupBase): SerializedData {
  return { ['id']: val.id, ['type']: serializeGroupBaseTypeField(val.type) };
}
export function deserializeGroupBase(val: SerializedData): GroupBase {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "GroupBase"' });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "GroupBase" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "GroupBase"',
    });
  }
  const id: string = val.id;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "GroupBase" to be defined',
    });
  }
  const type: GroupBaseTypeField = deserializeGroupBaseTypeField(val.type);
  return { id: id, type: type } satisfies GroupBase;
}
export function serializeGroupBaseInput(val: GroupBaseInput): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeGroupBaseTypeField(val.type),
  };
}
export function deserializeGroupBaseInput(val: SerializedData): GroupBaseInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "GroupBaseInput"' });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "GroupBaseInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "GroupBaseInput"',
    });
  }
  const id: string = val.id;
  const type: undefined | GroupBaseTypeField =
    val.type == void 0 ? void 0 : deserializeGroupBaseTypeField(val.type);
  return { id: id, type: type } satisfies GroupBaseInput;
}
