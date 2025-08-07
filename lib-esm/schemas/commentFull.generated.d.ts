import { Comment } from './comment.generated.js';
import { SerializedData } from '../serialization/json.js';
export type CommentFull = Comment & {
    /**
     * The string representing the comment text with
     * @mentions included. @mention format is @[id:username]
     * where `id` is user's Box ID and `username` is
     * their display name. */
    readonly taggedMessage?: string;
};
export declare function serializeCommentFull(val: CommentFull): SerializedData;
export declare function deserializeCommentFull(val: SerializedData): CommentFull;
