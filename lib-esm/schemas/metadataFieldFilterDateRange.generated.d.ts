import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface MetadataFieldFilterDateRange {
    /**
     * Specifies the (inclusive) upper bound for the metadata field
     * value. The value of a field must be lower than (`lt`) or
     * equal to this value for the search query to match this
     * template. */
    readonly lt?: DateTime;
    /**
     * Specifies the (inclusive) lower bound for the metadata field
     * value. The value of a field must be greater than (`gt`) or
     * equal to this value for the search query to match this
     * template. */
    readonly gt?: DateTime;
    readonly rawData?: SerializedData;
}
export declare function serializeMetadataFieldFilterDateRange(val: MetadataFieldFilterDateRange): SerializedData;
export declare function deserializeMetadataFieldFilterDateRange(val: SerializedData): MetadataFieldFilterDateRange;
