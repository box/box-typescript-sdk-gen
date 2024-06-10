import { serializeFileFullOrFolderMiniOrWebLink } from './fileFullOrFolderMiniOrWebLink.generated.js';
import { deserializeFileFullOrFolderMiniOrWebLink } from './fileFullOrFolderMiniOrWebLink.generated.js';
import { FileFullOrFolderMiniOrWebLink } from './fileFullOrFolderMiniOrWebLink.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type ItemsOrderDirectionField = 'ASC' | 'DESC';
export interface ItemsOrderField {
  readonly by?: string;
  readonly direction?: ItemsOrderDirectionField;
}
export interface Items {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly totalCount?: number;
  readonly offset?: number;
  readonly order?: readonly ItemsOrderField[];
  readonly entries?: readonly FileFullOrFolderMiniOrWebLink[];
}
export function serializeItemsOrderDirectionField(
  val: ItemsOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeItemsOrderDirectionField(
  val: SerializedData
): ItemsOrderDirectionField {
  if (val == 'ASC') {
    return val;
  }
  if (val == 'DESC') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize ItemsOrderDirectionField",
  });
}
export function serializeItemsOrderField(val: ItemsOrderField): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeItemsOrderDirectionField(val.direction),
  };
}
export function deserializeItemsOrderField(
  val: SerializedData
): ItemsOrderField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "ItemsOrderField"' });
  }
  if (!(val.by == void 0) && !sdIsString(val.by)) {
    throw new BoxSdkError({
      message: 'Expecting string for "by" of type "ItemsOrderField"',
    });
  }
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | ItemsOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeItemsOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies ItemsOrderField;
}
export function serializeItems(val: Items): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (item: ItemsOrderField): SerializedData {
            return serializeItemsOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: FileFullOrFolderMiniOrWebLink
          ): SerializedData {
            return serializeFileFullOrFolderMiniOrWebLink(item);
          }) as readonly any[]),
  };
}
export function deserializeItems(val: SerializedData): Items {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "Items"' });
  }
  if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
    throw new BoxSdkError({
      message: 'Expecting number for "limit" of type "Items"',
    });
  }
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  if (!(val.next_marker == void 0) && !sdIsString(val.next_marker)) {
    throw new BoxSdkError({
      message: 'Expecting string for "next_marker" of type "Items"',
    });
  }
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  if (!(val.prev_marker == void 0) && !sdIsString(val.prev_marker)) {
    throw new BoxSdkError({
      message: 'Expecting string for "prev_marker" of type "Items"',
    });
  }
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  if (!(val.total_count == void 0) && !sdIsNumber(val.total_count)) {
    throw new BoxSdkError({
      message: 'Expecting number for "total_count" of type "Items"',
    });
  }
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  if (!(val.offset == void 0) && !sdIsNumber(val.offset)) {
    throw new BoxSdkError({
      message: 'Expecting number for "offset" of type "Items"',
    });
  }
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  if (!(val.order == void 0) && !sdIsList(val.order)) {
    throw new BoxSdkError({
      message: 'Expecting array for "order" of type "Items"',
    });
  }
  const order: undefined | readonly ItemsOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): ItemsOrderField {
          return deserializeItemsOrderField(itm);
        }) as readonly any[])
      : [];
  if (!(val.entries == void 0) && !sdIsList(val.entries)) {
    throw new BoxSdkError({
      message: 'Expecting array for "entries" of type "Items"',
    });
  }
  const entries: undefined | readonly FileFullOrFolderMiniOrWebLink[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (
          itm: SerializedData
        ): FileFullOrFolderMiniOrWebLink {
          return deserializeFileFullOrFolderMiniOrWebLink(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    totalCount: totalCount,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies Items;
}
