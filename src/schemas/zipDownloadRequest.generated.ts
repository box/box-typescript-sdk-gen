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
  val: any
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
  val: any
): ZipDownloadRequestItemsField {
  const type: ZipDownloadRequestItemsTypeField =
    deserializeZipDownloadRequestItemsTypeField(val.type);
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
export function deserializeZipDownloadRequest(val: any): ZipDownloadRequest {
  const items: readonly ZipDownloadRequestItemsField[] = sdIsList(val.items)
    ? (val.items.map(function (
        itm: SerializedData
      ): ZipDownloadRequestItemsField {
        return deserializeZipDownloadRequestItemsField(itm);
      }) as readonly any[])
    : [];
  const downloadFileName: undefined | string =
    val.download_file_name == void 0 ? void 0 : val.download_file_name;
  return {
    items: items,
    downloadFileName: downloadFileName,
  } satisfies ZipDownloadRequest;
}
