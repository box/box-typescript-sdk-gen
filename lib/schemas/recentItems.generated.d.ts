import { RecentItem } from './recentItem.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface RecentItems {
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
     * A list of recent items. */
    readonly entries?: readonly RecentItem[];
    readonly rawData?: SerializedData;
}
export declare function serializeRecentItems(val: RecentItems): SerializedData;
export declare function deserializeRecentItems(val: SerializedData): RecentItems;
//# sourceMappingURL=recentItems.generated.d.ts.map