import { StoragePolicy } from './storagePolicy.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface StoragePolicies {
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
     * A list of storage policies. */
    readonly entries?: readonly StoragePolicy[];
    readonly rawData?: SerializedData;
}
export declare function serializeStoragePolicies(val: StoragePolicies): SerializedData;
export declare function deserializeStoragePolicies(val: SerializedData): StoragePolicies;
//# sourceMappingURL=storagePolicies.generated.d.ts.map