import { serializeGroupFull } from './groupFull.generated.js';
import { deserializeGroupFull } from './groupFull.generated.js';
import { GroupFull } from './groupFull.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type GroupsOrderDirectionField = 'ASC' | 'DESC';
export interface GroupsOrderField {
  readonly by?: string;
  readonly direction?: GroupsOrderDirectionField;
}
export interface Groups {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly order?: readonly GroupsOrderField[];
  readonly entries?: readonly GroupFull[];
}
export function serializeGroupsOrderDirectionField(
  val: GroupsOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeGroupsOrderDirectionField(
  val: any
): GroupsOrderDirectionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "GroupsOrderDirectionField"',
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
export function serializeGroupsOrderField(
  val: GroupsOrderField
): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeGroupsOrderDirectionField(val.direction),
  };
}
export function deserializeGroupsOrderField(val: any): GroupsOrderField {
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | GroupsOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeGroupsOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies GroupsOrderField;
}
export function serializeGroups(val: Groups): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (item: GroupsOrderField): SerializedData {
            return serializeGroupsOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: GroupFull): SerializedData {
            return serializeGroupFull(item);
          }) as readonly any[]),
  };
}
export function deserializeGroups(val: any): Groups {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const order: undefined | readonly GroupsOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): GroupsOrderField {
          return deserializeGroupsOrderField(itm);
        }) as readonly any[])
      : [];
  const entries: undefined | readonly GroupFull[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): GroupFull {
          return deserializeGroupFull(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies Groups;
}
