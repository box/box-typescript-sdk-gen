import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type ZipDownloadRequestItemsTypeField = 'file' | 'folder';
export interface ZipDownloadRequestItemsField {
  readonly type: ZipDownloadRequestItemsTypeField;
  readonly id: string;
}
export interface ZipDownloadRequest {
  readonly items: readonly ZipDownloadRequestItemsField[];
  readonly downloadFileName?: string;
}
export function serializeZipDownloadRequestItemsTypeField(
  val: ZipDownloadRequestItemsTypeField
): SerializedData {
  return val;
}
export function deserializeZipDownloadRequestItemsTypeField(
  val: SerializedData
): ZipDownloadRequestItemsTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "ZipDownloadRequestItemsTypeField"',
    });
  }
  if (val == 'file') {
    return 'file';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeZipDownloadRequestItemsField(
  val: ZipDownloadRequestItemsField
): SerializedData {
  return {
    ['type']: serializeZipDownloadRequestItemsTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeZipDownloadRequestItemsField(
  val: SerializedData
): ZipDownloadRequestItemsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "ZipDownloadRequestItemsField"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "ZipDownloadRequestItemsField" to be defined',
    });
  }
  const type: ZipDownloadRequestItemsTypeField =
    deserializeZipDownloadRequestItemsTypeField(val.type);
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "ZipDownloadRequestItemsField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "ZipDownloadRequestItemsField"',
    });
  }
  const id: string = val.id;
  return { type: type, id: id } satisfies ZipDownloadRequestItemsField;
}
export function serializeZipDownloadRequest(
  val: ZipDownloadRequest
): SerializedData {
  return {
    ['items']: val.items.map(function (
      item: ZipDownloadRequestItemsField
    ): SerializedData {
      return serializeZipDownloadRequestItemsField(item);
    }) as readonly any[],
    ['download_file_name']:
      val.downloadFileName == void 0 ? void 0 : val.downloadFileName,
  };
}
export function deserializeZipDownloadRequest(
  val: SerializedData
): ZipDownloadRequest {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "ZipDownloadRequest"',
    });
  }
  if (val.items == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "items" of type "ZipDownloadRequest" to be defined',
    });
  }
  if (!sdIsList(val.items)) {
    throw new BoxSdkError({
      message: 'Expecting array for "items" of type "ZipDownloadRequest"',
    });
  }
  const items: readonly ZipDownloadRequestItemsField[] = sdIsList(val.items)
    ? (val.items.map(function (
        itm: SerializedData
      ): ZipDownloadRequestItemsField {
        return deserializeZipDownloadRequestItemsField(itm);
      }) as readonly any[])
    : [];
  if (
    !(val.download_file_name == void 0) &&
    !sdIsString(val.download_file_name)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "download_file_name" of type "ZipDownloadRequest"',
    });
  }
  const downloadFileName: undefined | string =
    val.download_file_name == void 0 ? void 0 : val.download_file_name;
  return {
    items: items,
    downloadFileName: downloadFileName,
  } satisfies ZipDownloadRequest;
}
