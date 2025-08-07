import { CommentFull } from './commentFull.generated.js';
import { SerializedData } from '../serialization/json.js';
export type CommentsOrderDirectionField = 'ASC' | 'DESC' | string;
export interface CommentsOrderField {
    /**
     * The field to order by. */
    readonly by?: string;
    /**
     * The direction to order by, either ascending or descending. */
    readonly direction?: CommentsOrderDirectionField;
    readonly rawData?: SerializedData;
}
export interface Comments {
    /**
     * One greater than the offset of the last entry in the entire collection.
     * The total number of entries in the collection may be less than
     * `total_count`.
     *
     * This field is only returned for calls that use offset-based pagination.
     * For marker-based paginated APIs, this field will be omitted. */
    readonly totalCount?: number;
    /**
     * The limit that was used for these entries. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. The maximum value varies by API. */
    readonly limit?: number;
    /**
     * The 0-based offset of the first entry in this set. This will be the same
     * as the `offset` query parameter.
     *
     * This field is only returned for calls that use offset-based pagination.
     * For marker-based paginated APIs, this field will be omitted. */
    readonly offset?: number;
    /**
     * The order by which items are returned.
     *
     * This field is only returned for calls that use offset-based pagination.
     * For marker-based paginated APIs, this field will be omitted. */
    readonly order?: readonly CommentsOrderField[];
    /**
     * A list of comments. */
    readonly entries?: readonly CommentFull[];
    readonly rawData?: SerializedData;
}
export declare function serializeCommentsOrderDirectionField(val: CommentsOrderDirectionField): SerializedData;
export declare function deserializeCommentsOrderDirectionField(val: SerializedData): CommentsOrderDirectionField;
export declare function serializeCommentsOrderField(val: CommentsOrderField): SerializedData;
export declare function deserializeCommentsOrderField(val: SerializedData): CommentsOrderField;
export declare function serializeComments(val: Comments): SerializedData;
export declare function deserializeComments(val: SerializedData): Comments;
//# sourceMappingURL=comments.generated.d.ts.map