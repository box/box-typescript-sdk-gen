import { serializeCollection } from './collection.generated.js';
import { deserializeCollection } from './collection.generated.js';
import { Collection } from './collection.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type CollectionsOrderDirectionField = 'ASC' | 'DESC';
export interface CollectionsOrderField {
  readonly by?: string;
  readonly direction?: CollectionsOrderDirectionField;
}
export interface Collections {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly order?: readonly CollectionsOrderField[];
  readonly entries?: readonly Collection[];
}
export function serializeCollectionsOrderDirectionField(
  val: CollectionsOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeCollectionsOrderDirectionField(
  val: any
): CollectionsOrderDirectionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CollectionsOrderDirectionField"',
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
export function serializeCollectionsOrderField(
  val: CollectionsOrderField
): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeCollectionsOrderDirectionField(val.direction),
  };
}
export function deserializeCollectionsOrderField(
  val: any
): CollectionsOrderField {
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | CollectionsOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeCollectionsOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies CollectionsOrderField;
}
export function serializeCollections(val: Collections): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (
            item: CollectionsOrderField
          ): SerializedData {
            return serializeCollectionsOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: Collection): SerializedData {
            return serializeCollection(item);
          }) as readonly any[]),
  };
}
export function deserializeCollections(val: any): Collections {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const order: undefined | readonly CollectionsOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): CollectionsOrderField {
          return deserializeCollectionsOrderField(itm);
        }) as readonly any[])
      : [];
  const entries: undefined | readonly Collection[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): Collection {
          return deserializeCollection(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies Collections;
}
