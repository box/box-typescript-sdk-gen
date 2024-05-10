import { serializeUploadPart } from './uploadPart.generated.js';
import { deserializeUploadPart } from './uploadPart.generated.js';
import { UploadPart } from './uploadPart.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type UploadPartsOrderDirectionField = 'ASC' | 'DESC';
export interface UploadPartsOrderField {
  readonly by?: string;
  readonly direction?: UploadPartsOrderDirectionField;
}
export interface UploadParts {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly order?: readonly UploadPartsOrderField[];
  readonly entries?: readonly UploadPart[];
}
export function serializeUploadPartsOrderDirectionField(
  val: UploadPartsOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeUploadPartsOrderDirectionField(
  val: any
): UploadPartsOrderDirectionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "UploadPartsOrderDirectionField"',
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
export function serializeUploadPartsOrderField(
  val: UploadPartsOrderField
): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeUploadPartsOrderDirectionField(val.direction),
  };
}
export function deserializeUploadPartsOrderField(
  val: any
): UploadPartsOrderField {
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | UploadPartsOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeUploadPartsOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies UploadPartsOrderField;
}
export function serializeUploadParts(val: UploadParts): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (
            item: UploadPartsOrderField
          ): SerializedData {
            return serializeUploadPartsOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: UploadPart): SerializedData {
            return serializeUploadPart(item);
          }) as readonly any[]),
  };
}
export function deserializeUploadParts(val: any): UploadParts {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const order: undefined | readonly UploadPartsOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): UploadPartsOrderField {
          return deserializeUploadPartsOrderField(itm);
        }) as readonly any[])
      : [];
  const entries: undefined | readonly UploadPart[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): UploadPart {
          return deserializeUploadPart(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies UploadParts;
}
