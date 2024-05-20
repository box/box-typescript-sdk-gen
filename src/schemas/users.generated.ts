import { serializeUserFull } from './userFull.generated.js';
import { deserializeUserFull } from './userFull.generated.js';
import { UserFull } from './userFull.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type UsersOrderDirectionField = 'ASC' | 'DESC';
export interface UsersOrderField {
  readonly by?: string;
  readonly direction?: UsersOrderDirectionField;
}
export interface Users {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly order?: readonly UsersOrderField[];
  readonly entries?: readonly UserFull[];
}
export function serializeUsersOrderDirectionField(
  val: UsersOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeUsersOrderDirectionField(
  val: SerializedData
): UsersOrderDirectionField {
  if (val == 'ASC') {
    return val;
  }
  if (val == 'DESC') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize UsersOrderDirectionField",
  });
}
export function serializeUsersOrderField(val: UsersOrderField): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeUsersOrderDirectionField(val.direction),
  };
}
export function deserializeUsersOrderField(
  val: SerializedData
): UsersOrderField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "UsersOrderField"' });
  }
  if (!(val.by == void 0) && !sdIsString(val.by)) {
    throw new BoxSdkError({
      message: 'Expecting string for "by" of type "UsersOrderField"',
    });
  }
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | UsersOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeUsersOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies UsersOrderField;
}
export function serializeUsers(val: Users): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (item: UsersOrderField): SerializedData {
            return serializeUsersOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: UserFull): SerializedData {
            return serializeUserFull(item);
          }) as readonly any[]),
  };
}
export function deserializeUsers(val: SerializedData): Users {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "Users"' });
  }
  if (!(val.total_count == void 0) && !sdIsNumber(val.total_count)) {
    throw new BoxSdkError({
      message: 'Expecting number for "total_count" of type "Users"',
    });
  }
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
    throw new BoxSdkError({
      message: 'Expecting number for "limit" of type "Users"',
    });
  }
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  if (!(val.offset == void 0) && !sdIsNumber(val.offset)) {
    throw new BoxSdkError({
      message: 'Expecting number for "offset" of type "Users"',
    });
  }
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  if (!(val.order == void 0) && !sdIsList(val.order)) {
    throw new BoxSdkError({
      message: 'Expecting array for "order" of type "Users"',
    });
  }
  const order: undefined | readonly UsersOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): UsersOrderField {
          return deserializeUsersOrderField(itm);
        }) as readonly any[])
      : [];
  if (!(val.entries == void 0) && !sdIsList(val.entries)) {
    throw new BoxSdkError({
      message: 'Expecting array for "entries" of type "Users"',
    });
  }
  const entries: undefined | readonly UserFull[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): UserFull {
          return deserializeUserFull(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies Users;
}
