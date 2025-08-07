import { SerializedData } from '../serialization/json.js';
export type CommentBaseTypeField = 'comment';
export interface CommentBase {
    /**
     * The unique identifier for this comment. */
    readonly id?: string;
    /**
     * The value will always be `comment`. */
    readonly type?: CommentBaseTypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeCommentBaseTypeField(val: CommentBaseTypeField): SerializedData;
export declare function deserializeCommentBaseTypeField(val: SerializedData): CommentBaseTypeField;
export declare function serializeCommentBase(val: CommentBase): SerializedData;
export declare function deserializeCommentBase(val: SerializedData): CommentBase;
//# sourceMappingURL=commentBase.generated.d.ts.map