import { serializeCommentFull } from './commentFull.generated.js';
import { deserializeCommentFull } from './commentFull.generated.js';
import { CommentFull } from './commentFull.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type CommentsOrderDirectionField = 'ASC' | 'DESC';
export interface CommentsOrderField {
  readonly by?: string;
  readonly direction?: CommentsOrderDirectionField;
}
export interface Comments {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly order?: readonly CommentsOrderField[];
  readonly entries?: readonly CommentFull[];
}
export function serializeCommentsOrderDirectionField(
  val: CommentsOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeCommentsOrderDirectionField(
  val: any
): CommentsOrderDirectionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CommentsOrderDirectionField"',
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
export function serializeCommentsOrderField(
  val: CommentsOrderField
): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeCommentsOrderDirectionField(val.direction),
  };
}
export function deserializeCommentsOrderField(val: any): CommentsOrderField {
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | CommentsOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeCommentsOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies CommentsOrderField;
}
export function serializeComments(val: Comments): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (item: CommentsOrderField): SerializedData {
            return serializeCommentsOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: CommentFull): SerializedData {
            return serializeCommentFull(item);
          }) as readonly any[]),
  };
}
export function deserializeComments(val: any): Comments {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const order: undefined | readonly CommentsOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): CommentsOrderField {
          return deserializeCommentsOrderField(itm);
        }) as readonly any[])
      : [];
  const entries: undefined | readonly CommentFull[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): CommentFull {
          return deserializeCommentFull(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies Comments;
}
