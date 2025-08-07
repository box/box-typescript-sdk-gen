import { Collection } from './collection.generated.js';
import { SerializedData } from '../serialization/json.js';
export type CollectionsOrderDirectionField = 'ASC' | 'DESC' | string;
export interface CollectionsOrderField {
    /**
     * The field to order by. */
    readonly by?: string;
    /**
     * The direction to order by, either ascending or descending. */
    readonly direction?: CollectionsOrderDirectionField;
    readonly rawData?: SerializedData;
}
export interface Collections {
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
    readonly order?: readonly CollectionsOrderField[];
    /**
     * A list of collections. */
    readonly entries?: readonly Collection[];
    readonly rawData?: SerializedData;
}
export declare function serializeCollectionsOrderDirectionField(val: CollectionsOrderDirectionField): SerializedData;
export declare function deserializeCollectionsOrderDirectionField(val: SerializedData): CollectionsOrderDirectionField;
export declare function serializeCollectionsOrderField(val: CollectionsOrderField): SerializedData;
export declare function deserializeCollectionsOrderField(val: SerializedData): CollectionsOrderField;
export declare function serializeCollections(val: Collections): SerializedData;
export declare function deserializeCollections(val: SerializedData): Collections;
//# sourceMappingURL=collections.generated.d.ts.map