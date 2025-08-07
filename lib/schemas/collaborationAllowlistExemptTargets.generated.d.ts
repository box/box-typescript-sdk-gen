import { CollaborationAllowlistExemptTarget } from './collaborationAllowlistExemptTarget.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface CollaborationAllowlistExemptTargets {
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
     * A list of users exempt from any of the restrictions
     * imposed by the list of allowed collaboration domains
     * for this enterprise. */
    readonly entries?: readonly CollaborationAllowlistExemptTarget[];
    readonly rawData?: SerializedData;
}
export declare function serializeCollaborationAllowlistExemptTargets(val: CollaborationAllowlistExemptTargets): SerializedData;
export declare function deserializeCollaborationAllowlistExemptTargets(val: SerializedData): CollaborationAllowlistExemptTargets;
//# sourceMappingURL=collaborationAllowlistExemptTargets.generated.d.ts.map