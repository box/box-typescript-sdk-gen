import { ArchiveV2025R0 } from './archiveV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export interface ArchivesV2025R0 {
    /**
     * A list in which each entry represents an archive object. */
    readonly entries?: readonly ArchiveV2025R0[];
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
export declare function serializeArchivesV2025R0(val: ArchivesV2025R0): SerializedData;
export declare function deserializeArchivesV2025R0(val: SerializedData): ArchivesV2025R0;
//# sourceMappingURL=archivesV2025R0.generated.d.ts.map