import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type FolderBaseTypeField = 'folder';
export class FolderBase {
  readonly id!: string;
  readonly etag?: string;
  readonly type: FolderBaseTypeField = 'folder' as FolderBaseTypeField;
  constructor(
    fields: Omit<FolderBase, 'type'> & Partial<Pick<FolderBase, 'type'>>
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
export interface FolderBaseInput {
  readonly id: string;
  readonly etag?: string;
  readonly type?: FolderBaseTypeField;
}
export function serializeFolderBaseTypeField(
  val: FolderBaseTypeField
): SerializedData {
  return val;
}
export function deserializeFolderBaseTypeField(
  val: SerializedData
): FolderBaseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FolderBaseTypeField"',
    });
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFolderBase(val: FolderBase): SerializedData {
  return {
    ['id']: val.id,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['type']: serializeFolderBaseTypeField(val.type),
  };
}
export function deserializeFolderBase(val: SerializedData): FolderBase {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "FolderBase"' });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "FolderBase" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "FolderBase"',
    });
  }
  const id: string = val.id;
  if (!(val.etag == void 0) && !sdIsString(val.etag)) {
    throw new BoxSdkError({
      message: 'Expecting string for "etag" of type "FolderBase"',
    });
  }
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "FolderBase" to be defined',
    });
  }
  const type: FolderBaseTypeField = deserializeFolderBaseTypeField(val.type);
  return { id: id, etag: etag, type: type } satisfies FolderBase;
}
export function serializeFolderBaseInput(val: FolderBaseInput): SerializedData {
  return {
    ['id']: val.id,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['type']:
      val.type == void 0 ? void 0 : serializeFolderBaseTypeField(val.type),
  };
}
export function deserializeFolderBaseInput(
  val: SerializedData
): FolderBaseInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "FolderBaseInput"' });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "FolderBaseInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "FolderBaseInput"',
    });
  }
  const id: string = val.id;
  if (!(val.etag == void 0) && !sdIsString(val.etag)) {
    throw new BoxSdkError({
      message: 'Expecting string for "etag" of type "FolderBaseInput"',
    });
  }
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: undefined | FolderBaseTypeField =
    val.type == void 0 ? void 0 : deserializeFolderBaseTypeField(val.type);
  return { id: id, etag: etag, type: type } satisfies FolderBaseInput;
}
