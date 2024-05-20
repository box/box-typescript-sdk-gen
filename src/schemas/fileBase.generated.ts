import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type FileBaseTypeField = 'file';
export class FileBase {
  readonly id!: string;
  readonly etag?: string;
  readonly type: FileBaseTypeField = 'file' as FileBaseTypeField;
  constructor(
    fields: Omit<FileBase, 'type'> & Partial<Pick<FileBase, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.etag) {
      this.etag = fields.etag;
    }
    if (fields.type) {
      this.type = fields.type;
    }
  }
}
export interface FileBaseInput {
  readonly id: string;
  readonly etag?: string;
  readonly type?: FileBaseTypeField;
}
export function serializeFileBaseTypeField(
  val: FileBaseTypeField
): SerializedData {
  return val;
}
export function deserializeFileBaseTypeField(
  val: SerializedData
): FileBaseTypeField {
  if (val == 'file') {
    return val;
  }
  throw new BoxSdkError({ message: "Can't deserialize FileBaseTypeField" });
}
export function serializeFileBase(val: FileBase): SerializedData {
  return {
    ['id']: val.id,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['type']: serializeFileBaseTypeField(val.type),
  };
}
export function deserializeFileBase(val: SerializedData): FileBase {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "FileBase"' });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "FileBase" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "FileBase"',
    });
  }
  const id: string = val.id;
  if (!(val.etag == void 0) && !sdIsString(val.etag)) {
    throw new BoxSdkError({
      message: 'Expecting string for "etag" of type "FileBase"',
    });
  }
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "FileBase" to be defined',
    });
  }
  const type: FileBaseTypeField = deserializeFileBaseTypeField(val.type);
  return { id: id, etag: etag, type: type } satisfies FileBase;
}
export function serializeFileBaseInput(val: FileBaseInput): SerializedData {
  return {
    ['id']: val.id,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['type']:
      val.type == void 0 ? void 0 : serializeFileBaseTypeField(val.type),
  };
}
export function deserializeFileBaseInput(val: SerializedData): FileBaseInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "FileBaseInput"' });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "FileBaseInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "FileBaseInput"',
    });
  }
  const id: string = val.id;
  if (!(val.etag == void 0) && !sdIsString(val.etag)) {
    throw new BoxSdkError({
      message: 'Expecting string for "etag" of type "FileBaseInput"',
    });
  }
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: undefined | FileBaseTypeField =
    val.type == void 0 ? void 0 : deserializeFileBaseTypeField(val.type);
  return { id: id, etag: etag, type: type } satisfies FileBaseInput;
}
