import { RetentionPolicy } from './retentionPolicy.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface RetentionPolicies {
    /**
     * A list in which each entry represents a retention policy object. */
    readonly entries?: readonly RetentionPolicy[];
    /**
     * The limit that was used for these entries. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. The maximum value varies by API. */
    readonly limit?: number;
    /**
     * The marker for the start of the next page of results. */
    readonly nextMarker?: string | null;
    readonly rawData?: SerializedData;
}
export declare function serializeRetentionPolicies(val: RetentionPolicies): SerializedData;
export declare function deserializeRetentionPolicies(val: SerializedData): RetentionPolicies;
