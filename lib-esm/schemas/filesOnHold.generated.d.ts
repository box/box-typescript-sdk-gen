import { FileMini } from './fileMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface FilesOnHold {
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
     * A list of files. */
    readonly entries?: readonly FileMini[];
    readonly rawData?: SerializedData;
}
export declare function serializeFilesOnHold(val: FilesOnHold): SerializedData;
export declare function deserializeFilesOnHold(val: SerializedData): FilesOnHold;
