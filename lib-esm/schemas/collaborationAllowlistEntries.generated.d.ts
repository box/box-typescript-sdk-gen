import { CollaborationAllowlistEntry } from './collaborationAllowlistEntry.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface CollaborationAllowlistEntries {
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
     * A list of allowed collaboration domains. */
    readonly entries?: readonly CollaborationAllowlistEntry[];
    readonly rawData?: SerializedData;
}
export declare function serializeCollaborationAllowlistEntries(val: CollaborationAllowlistEntries): SerializedData;
export declare function deserializeCollaborationAllowlistEntries(val: SerializedData): CollaborationAllowlistEntries;
