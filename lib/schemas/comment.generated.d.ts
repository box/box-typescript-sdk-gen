import { CommentBase } from './commentBase.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface CommentItemField {
    /**
     * The unique identifier for this object. */
    readonly id?: string;
    /**
     * The type for this object. */
    readonly type?: string;
    readonly rawData?: SerializedData;
}
export type Comment = CommentBase & {
    /**
     * Whether or not this comment is a reply to another
     * comment. */
    readonly isReplyComment?: boolean;
    /**
     * The text of the comment, as provided by the user. */
    readonly message?: string;
    readonly createdBy?: UserMini;
    /**
     * The time this comment was created. */
    readonly createdAt?: DateTime;
    /**
     * The time this comment was last modified. */
    readonly modifiedAt?: DateTime;
    readonly item?: CommentItemField;
};
export declare function serializeCommentItemField(val: CommentItemField): SerializedData;
export declare function deserializeCommentItemField(val: SerializedData): CommentItemField;
export declare function serializeComment(val: Comment): SerializedData;
export declare function deserializeComment(val: SerializedData): Comment;
//# sourceMappingURL=comment.generated.d.ts.map