import { HubItemV2025R0 } from './hubItemV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export interface HubItemsV2025R0 {
    /**
     * A list of Hub items. */
    readonly entries?: readonly HubItemV2025R0[];
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
export declare function serializeHubItemsV2025R0(val: HubItemsV2025R0): SerializedData;
export declare function deserializeHubItemsV2025R0(val: SerializedData): HubItemsV2025R0;
//# sourceMappingURL=hubItemsV2025R0.generated.d.ts.map