import { HubCollaborationV2025R0 } from './hubCollaborationV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export interface HubCollaborationsV2025R0 {
    /**
     * A list of hub collaborations. */
    readonly entries?: readonly HubCollaborationV2025R0[];
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
export declare function serializeHubCollaborationsV2025R0(val: HubCollaborationsV2025R0): SerializedData;
export declare function deserializeHubCollaborationsV2025R0(val: SerializedData): HubCollaborationsV2025R0;
//# sourceMappingURL=hubCollaborationsV2025R0.generated.d.ts.map