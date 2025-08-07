import { FileFullOrFolderMiniOrWebLink } from './fileFullOrFolderMiniOrWebLink.generated.js';
import { SerializedData } from '../serialization/json.js';
export type ItemsOffsetPaginatedOrderDirectionField = 'ASC' | 'DESC' | string;
export interface ItemsOffsetPaginatedOrderField {
    /**
     * The field to order by. */
    readonly by?: string;
    /**
     * The direction to order by, either ascending or descending. */
    readonly direction?: ItemsOffsetPaginatedOrderDirectionField;
    readonly rawData?: SerializedData;
}
export interface ItemsOffsetPaginated {
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
    readonly order?: readonly ItemsOffsetPaginatedOrderField[];
    /**
     * The items in this collection. */
    readonly entries?: readonly FileFullOrFolderMiniOrWebLink[];
    readonly rawData?: SerializedData;
}
export declare function serializeItemsOffsetPaginatedOrderDirectionField(val: ItemsOffsetPaginatedOrderDirectionField): SerializedData;
export declare function deserializeItemsOffsetPaginatedOrderDirectionField(val: SerializedData): ItemsOffsetPaginatedOrderDirectionField;
export declare function serializeItemsOffsetPaginatedOrderField(val: ItemsOffsetPaginatedOrderField): SerializedData;
export declare function deserializeItemsOffsetPaginatedOrderField(val: SerializedData): ItemsOffsetPaginatedOrderField;
export declare function serializeItemsOffsetPaginated(val: ItemsOffsetPaginated): SerializedData;
export declare function deserializeItemsOffsetPaginated(val: SerializedData): ItemsOffsetPaginated;
