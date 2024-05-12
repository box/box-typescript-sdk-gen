import { serializeFileVersionFull } from './fileVersionFull.generated.js';
import { deserializeFileVersionFull } from './fileVersionFull.generated.js';
import { FileVersionFull } from './fileVersionFull.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type FileVersionsOrderDirectionField = 'ASC' | 'DESC';
export interface FileVersionsOrderField {
  readonly by?: string;
  readonly direction?: FileVersionsOrderDirectionField;
}
export interface FileVersions {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly order?: readonly FileVersionsOrderField[];
  readonly entries?: readonly FileVersionFull[];
}
export function serializeFileVersionsOrderDirectionField(
  val: FileVersionsOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeFileVersionsOrderDirectionField(
  val: any
): FileVersionsOrderDirectionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FileVersionsOrderDirectionField"',
    });
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFileVersionsOrderField(
  val: FileVersionsOrderField
): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeFileVersionsOrderDirectionField(val.direction),
  };
}
export function deserializeFileVersionsOrderField(
  val: any
): FileVersionsOrderField {
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | FileVersionsOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeFileVersionsOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies FileVersionsOrderField;
}
export function serializeFileVersions(val: FileVersions): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (
            item: FileVersionsOrderField
          ): SerializedData {
            return serializeFileVersionsOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: FileVersionFull): SerializedData {
            return serializeFileVersionFull(item);
          }) as readonly any[]),
  };
}
export function deserializeFileVersions(val: any): FileVersions {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const order: undefined | readonly FileVersionsOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): FileVersionsOrderField {
          return deserializeFileVersionsOrderField(itm);
        }) as readonly any[])
      : [];
  const entries: undefined | readonly FileVersionFull[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): FileVersionFull {
          return deserializeFileVersionFull(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies FileVersions;
}
