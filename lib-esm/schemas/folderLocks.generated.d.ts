import { FolderLock } from './folderLock.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface FolderLocks {
    /**
     * A list of folder locks. */
    readonly entries?: readonly FolderLock[];
    /**
     * The limit that was used for these entries. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. The maximum value varies by API. */
    readonly limit?: string;
    /**
     * The marker for the start of the next page of results. */
    readonly nextMarker?: string | null;
    readonly rawData?: SerializedData;
}
export declare function serializeFolderLocks(val: FolderLocks): SerializedData;
export declare function deserializeFolderLocks(val: SerializedData): FolderLocks;
