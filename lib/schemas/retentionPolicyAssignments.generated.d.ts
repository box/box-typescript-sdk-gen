import { RetentionPolicyAssignment } from './retentionPolicyAssignment.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface RetentionPolicyAssignments {
    /**
     * A list of retention policy assignments. */
    readonly entries?: readonly RetentionPolicyAssignment[];
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
export declare function serializeRetentionPolicyAssignments(val: RetentionPolicyAssignments): SerializedData;
export declare function deserializeRetentionPolicyAssignments(val: SerializedData): RetentionPolicyAssignments;
//# sourceMappingURL=retentionPolicyAssignments.generated.d.ts.map