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
export function deserializeFileBaseTypeField(val: any): FileBaseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FileBaseTypeField"',
    });
  }
  if (val == 'file') {
    return 'file';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFileBase(val: FileBase): SerializedData {
  return {
    ['id']: val.id,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['type']: serializeFileBaseTypeField(val.type),
  };
}
export function deserializeFileBase(val: any): FileBase {
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
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
export function deserializeFileBaseInput(val: any): FileBaseInput {
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: undefined | FileBaseTypeField =
    val.type == void 0 ? void 0 : deserializeFileBaseTypeField(val.type);
  return { id: id, etag: etag, type: type } satisfies FileBaseInput;
}
