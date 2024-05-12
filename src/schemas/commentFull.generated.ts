import { serializeCommentBaseTypeField } from './commentBase.generated.js';
import { deserializeCommentBaseTypeField } from './commentBase.generated.js';
import { serializeCommentBase } from './commentBase.generated.js';
import { deserializeCommentBase } from './commentBase.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { serializeCommentItemField } from './comment.generated.js';
import { deserializeCommentItemField } from './comment.generated.js';
import { serializeComment } from './comment.generated.js';
import { deserializeComment } from './comment.generated.js';
import { CommentBaseTypeField } from './commentBase.generated.js';
import { CommentBase } from './commentBase.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { CommentItemField } from './comment.generated.js';
import { Comment } from './comment.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type CommentFull = Comment & {
  readonly taggedMessage?: string;
};
export function serializeCommentFull(val: CommentFull): SerializedData {
  const base: any = serializeComment(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "CommentFull"' });
  }
  return {
    ...base,
    ...{
      ['tagged_message']:
        val.taggedMessage == void 0 ? void 0 : val.taggedMessage,
    },
  };
}
export function deserializeCommentFull(val: any): CommentFull {
  const taggedMessage: undefined | string =
    val.tagged_message == void 0 ? void 0 : val.tagged_message;
  const isReplyComment: undefined | boolean =
    val.is_reply_comment == void 0 ? void 0 : val.is_reply_comment;
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  const item: undefined | CommentItemField =
    val.item == void 0 ? void 0 : deserializeCommentItemField(val.item);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | CommentBaseTypeField =
    val.type == void 0 ? void 0 : deserializeCommentBaseTypeField(val.type);
  return {
    taggedMessage: taggedMessage,
    isReplyComment: isReplyComment,
    message: message,
    createdBy: createdBy,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    item: item,
    id: id,
    type: type,
  } satisfies CommentFull;
}
