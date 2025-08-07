import { LegalHoldPolicyAssignment } from './legalHoldPolicyAssignment.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface LegalHoldPolicyAssignments {
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
     * A list of legal hold
     * policy assignments. */
    readonly entries?: readonly LegalHoldPolicyAssignment[];
    readonly rawData?: SerializedData;
}
export declare function serializeLegalHoldPolicyAssignments(val: LegalHoldPolicyAssignments): SerializedData;
export declare function deserializeLegalHoldPolicyAssignments(val: SerializedData): LegalHoldPolicyAssignments;
