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
  val: any
): UsersOrderDirectionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "UsersOrderDirectionField"',
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
export function serializeUsersOrderField(val: UsersOrderField): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeUsersOrderDirectionField(val.direction),
  };
}
export function deserializeUsersOrderField(val: any): UsersOrderField {
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
export function deserializeUsers(val: any): Users {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const order: undefined | readonly UsersOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): UsersOrderField {
          return deserializeUsersOrderField(itm);
        }) as readonly any[])
      : [];
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
