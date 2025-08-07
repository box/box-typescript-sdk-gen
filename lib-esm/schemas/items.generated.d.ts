import { FileFullOrFolderMiniOrWebLink } from './fileFullOrFolderMiniOrWebLink.generated.js';
import { SerializedData } from '../serialization/json.js';
export type ItemsOrderDirectionField = 'ASC' | 'DESC' | string;
export interface ItemsOrderField {
    /**
     * The field to order by. */
    readonly by?: string;
    /**
     * The direction to order by, either ascending or descending. */
    readonly direction?: ItemsOrderDirectionField;
    readonly rawData?: SerializedData;
}
export interface Items {
    /**
     * The limit that was used for these entries. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. The maximum value varies by API. */
    readonly limit?: number;
    /**
     * The marker for the start of the next page of results. */
    readonly nextMarker?: string | null;
    /**
     * The marker for the start of the previous page of results. */
    readonly prevMarker?: string | null;
    /**
     * One greater than the offset of the last entry in the entire collection.
     * The total number of entries in the collection may be less than
     * `total_count`.
     *
     * This field is only returned for calls that use offset-based pagination.
     * For marker-based paginated APIs, this field will be omitted. */
    readonly totalCount?: number;
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
    readonly order?: readonly ItemsOrderField[];
    /**
     * The items in this collection. */
    readonly entries?: readonly FileFullOrFolderMiniOrWebLink[];
    readonly rawData?: SerializedData;
}
export declare function serializeItemsOrderDirectionField(val: ItemsOrderDirectionField): SerializedData;
export declare function deserializeItemsOrderDirectionField(val: SerializedData): ItemsOrderDirectionField;
export declare function serializeItemsOrderField(val: ItemsOrderField): SerializedData;
export declare function deserializeItemsOrderField(val: SerializedData): ItemsOrderField;
export declare function serializeItems(val: Items): SerializedData;
export declare function deserializeItems(val: SerializedData): Items;
