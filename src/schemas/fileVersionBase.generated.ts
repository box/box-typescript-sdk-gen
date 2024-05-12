import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type FileVersionBaseTypeField = 'file_version';
export class FileVersionBase {
  readonly id!: string;
  readonly type: FileVersionBaseTypeField =
    'file_version' as FileVersionBaseTypeField;
  constructor(
    fields: Omit<FileVersionBase, 'type'> &
      Partial<Pick<FileVersionBase, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
  }
}
export interface FileVersionBaseInput {
  readonly id: string;
  readonly type?: FileVersionBaseTypeField;
}
export function serializeFileVersionBaseTypeField(
  val: FileVersionBaseTypeField
): SerializedData {
  return val;
}
export function deserializeFileVersionBaseTypeField(
  val: any
): FileVersionBaseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FileVersionBaseTypeField"',
    });
  }
  if (val == 'file_version') {
    return 'file_version';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFileVersionBase(val: FileVersionBase): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeFileVersionBaseTypeField(val.type),
  };
}
export function deserializeFileVersionBase(val: any): FileVersionBase {
  const id: string = val.id;
  const type: FileVersionBaseTypeField = deserializeFileVersionBaseTypeField(
    val.type
  );
  return { id: id, type: type } satisfies FileVersionBase;
}
export function serializeFileVersionBaseInput(
  val: FileVersionBaseInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeFileVersionBaseTypeField(val.type),
  };
}
export function deserializeFileVersionBaseInput(
  val: any
): FileVersionBaseInput {
  const id: string = val.id;
  const type: undefined | FileVersionBaseTypeField =
    val.type == void 0 ? void 0 : deserializeFileVersionBaseTypeField(val.type);
  return { id: id, type: type } satisfies FileVersionBaseInput;
}
