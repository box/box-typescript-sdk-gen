import { SerializedData } from '../serialization/json.js';
export interface MetadataFieldFilterFloatRange {
    /**
     * Specifies the (inclusive) upper bound for the metadata field
     * value. The value of a field must be lower than (`lt`) or
     * equal to this value for the search query to match this
     * template. */
    readonly lt?: number;
    /**
     * Specifies the (inclusive) lower bound for the metadata field
     * value. The value of a field must be greater than (`gt`) or
     * equal to this value for the search query to match this
     * template. */
    readonly gt?: number;
    readonly rawData?: SerializedData;
}
export declare function serializeMetadataFieldFilterFloatRange(val: MetadataFieldFilterFloatRange): SerializedData;
export declare function deserializeMetadataFieldFilterFloatRange(val: SerializedData): MetadataFieldFilterFloatRange;
//# sourceMappingURL=metadataFieldFilterFloatRange.generated.d.ts.map