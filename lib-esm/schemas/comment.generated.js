import { deserializeCommentBaseTypeField } from './commentBase.generated.js';
import { serializeCommentBase } from './commentBase.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeCommentItemField(val) {
    return { ['id']: val.id, ['type']: val.type };
}
export function deserializeCommentItemField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CommentItemField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CommentItemField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.type == void 0) && !sdIsString(val.type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "type" of type "CommentItemField"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    return { id: id, type: type };
}
export function serializeComment(val) {
    const base = serializeCommentBase(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Comment"' });
    }
    return {
        ...base,
        ...{
            ['is_reply_comment']: val.isReplyComment,
            ['message']: val.message,
            ['created_by']: val.createdBy == void 0
                ? val.createdBy
                : serializeUserMini(val.createdBy),
            ['created_at']: val.createdAt == void 0
                ? val.createdAt
                : serializeDateTime(val.createdAt),
            ['modified_at']: val.modifiedAt == void 0
                ? val.modifiedAt
                : serializeDateTime(val.modifiedAt),
            ['item']: val.item == void 0 ? val.item : serializeCommentItemField(val.item),
        },
    };
}
export function deserializeComment(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Comment"' });
    }
    if (!(val.is_reply_comment == void 0) && !sdIsBoolean(val.is_reply_comment)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_reply_comment" of type "Comment"',
        });
    }
    const isReplyComment = val.is_reply_comment == void 0 ? void 0 : val.is_reply_comment;
    if (!(val.message == void 0) && !sdIsString(val.message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "message" of type "Comment"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "Comment"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "Comment"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    const item = val.item == void 0 ? void 0 : deserializeCommentItemField(val.item);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "Comment"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeCommentBaseTypeField(val.type);
    return {
        isReplyComment: isReplyComment,
        message: message,
        createdBy: createdBy,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        item: item,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=comment.generated.js.map