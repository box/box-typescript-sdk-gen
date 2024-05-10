import { serializeGroupMembership } from './groupMembership.generated.js';
import { deserializeGroupMembership } from './groupMembership.generated.js';
import { GroupMembership } from './groupMembership.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type GroupMembershipsOrderDirectionField = 'ASC' | 'DESC';
export interface GroupMembershipsOrderField {
  readonly by?: string;
  readonly direction?: GroupMembershipsOrderDirectionField;
}
export interface GroupMemberships {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly order?: readonly GroupMembershipsOrderField[];
  readonly entries?: readonly GroupMembership[];
}
export function serializeGroupMembershipsOrderDirectionField(
  val: GroupMembershipsOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeGroupMembershipsOrderDirectionField(
  val: SerializedData
): GroupMembershipsOrderDirectionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "GroupMembershipsOrderDirectionField"',
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
export function serializeGroupMembershipsOrderField(
  val: GroupMembershipsOrderField
): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeGroupMembershipsOrderDirectionField(val.direction),
  };
}
export function deserializeGroupMembershipsOrderField(
  val: SerializedData
): GroupMembershipsOrderField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "GroupMembershipsOrderField"',
    });
  }
  if (!(val.by == void 0) && !sdIsString(val.by)) {
    throw new BoxSdkError({
      message: 'Expecting string for "by" of type "GroupMembershipsOrderField"',
    });
  }
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | GroupMembershipsOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeGroupMembershipsOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies GroupMembershipsOrderField;
}
export function serializeGroupMemberships(
  val: GroupMemberships
): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (
            item: GroupMembershipsOrderField
          ): SerializedData {
            return serializeGroupMembershipsOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: GroupMembership): SerializedData {
            return serializeGroupMembership(item);
          }) as readonly any[]),
  };
}
export function deserializeGroupMemberships(
  val: SerializedData
): GroupMemberships {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "GroupMemberships"',
    });
  }
  if (!(val.total_count == void 0) && !sdIsNumber(val.total_count)) {
    throw new BoxSdkError({
      message: 'Expecting number for "total_count" of type "GroupMemberships"',
    });
  }
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
    throw new BoxSdkError({
      message: 'Expecting number for "limit" of type "GroupMemberships"',
    });
  }
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  if (!(val.offset == void 0) && !sdIsNumber(val.offset)) {
    throw new BoxSdkError({
      message: 'Expecting number for "offset" of type "GroupMemberships"',
    });
  }
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  if (!(val.order == void 0) && !sdIsList(val.order)) {
    throw new BoxSdkError({
      message: 'Expecting array for "order" of type "GroupMemberships"',
    });
  }
  const order: undefined | readonly GroupMembershipsOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (
          itm: SerializedData
        ): GroupMembershipsOrderField {
          return deserializeGroupMembershipsOrderField(itm);
        }) as readonly any[])
      : [];
  if (!(val.entries == void 0) && !sdIsList(val.entries)) {
    throw new BoxSdkError({
      message: 'Expecting array for "entries" of type "GroupMemberships"',
    });
  }
  const entries: undefined | readonly GroupMembership[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): GroupMembership {
          return deserializeGroupMembership(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies GroupMemberships;
}
