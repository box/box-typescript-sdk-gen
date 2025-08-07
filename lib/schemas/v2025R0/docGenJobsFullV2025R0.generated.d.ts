import { DocGenJobFullV2025R0 } from './docGenJobFullV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export interface DocGenJobsFullV2025R0 {
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
     * List of jobs. */
    readonly entries?: readonly DocGenJobFullV2025R0[];
    readonly rawData?: SerializedData;
}
export declare function serializeDocGenJobsFullV2025R0(val: DocGenJobsFullV2025R0): SerializedData;
export declare function deserializeDocGenJobsFullV2025R0(val: SerializedData): DocGenJobsFullV2025R0;
//# sourceMappingURL=docGenJobsFullV2025R0.generated.d.ts.map