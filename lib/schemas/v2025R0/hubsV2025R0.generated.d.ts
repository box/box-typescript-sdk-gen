import { HubV2025R0 } from './hubV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export interface HubsV2025R0 {
    /**
     * A list of hubs. */
    readonly entries?: readonly HubV2025R0[];
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
export declare function serializeHubsV2025R0(val: HubsV2025R0): SerializedData;
export declare function deserializeHubsV2025R0(val: SerializedData): HubsV2025R0;
//# sourceMappingURL=hubsV2025R0.generated.d.ts.map