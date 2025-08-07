import { StoragePolicyMini } from './storagePolicyMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export declare class StoragePolicy extends StoragePolicyMini {
    readonly name?: string;
    constructor(fields: StoragePolicy);
}
export declare function serializeStoragePolicy(val: StoragePolicy): SerializedData;
export declare function deserializeStoragePolicy(val: SerializedData): StoragePolicy;
//# sourceMappingURL=storagePolicy.generated.d.ts.map