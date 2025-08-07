import { Collaboration } from './collaboration.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface CollaborationsOffsetPaginated {
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
     * A list of collaborations. */
    readonly entries?: readonly Collaboration[];
    readonly rawData?: SerializedData;
}
export declare function serializeCollaborationsOffsetPaginated(val: CollaborationsOffsetPaginated): SerializedData;
export declare function deserializeCollaborationsOffsetPaginated(val: SerializedData): CollaborationsOffsetPaginated;
//# sourceMappingURL=collaborationsOffsetPaginated.generated.d.ts.map