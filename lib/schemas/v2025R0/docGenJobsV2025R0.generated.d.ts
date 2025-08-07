import { DocGenJobV2025R0 } from './docGenJobV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export interface DocGenJobsV2025R0 {
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
    readonly entries?: readonly DocGenJobV2025R0[];
    readonly rawData?: SerializedData;
}
export declare function serializeDocGenJobsV2025R0(val: DocGenJobsV2025R0): SerializedData;
export declare function deserializeDocGenJobsV2025R0(val: SerializedData): DocGenJobsV2025R0;
//# sourceMappingURL=docGenJobsV2025R0.generated.d.ts.map