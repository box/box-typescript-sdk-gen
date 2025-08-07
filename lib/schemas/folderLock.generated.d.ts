import { FolderMini } from './folderMini.generated.js';
import { UserBase } from './userBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface FolderLockLockedOperationsField {
    /**
     * Whether moving the folder is restricted. */
    readonly move: boolean;
    /**
     * Whether deleting the folder is restricted. */
    readonly delete: boolean;
    readonly rawData?: SerializedData;
}
export interface FolderLock {
    readonly folder?: FolderMini;
    /**
     * The unique identifier for this folder lock. */
    readonly id?: string;
    /**
     * The object type, always `folder_lock`. */
    readonly type?: string;
    readonly createdBy?: UserBase;
    /**
     * When the folder lock object was created. */
    readonly createdAt?: DateTime;
    /**
     * The operations that have been locked. Currently the `move`
     * and `delete` operations cannot be locked separately, and both need to be
     * set to `true`. */
    readonly lockedOperations?: FolderLockLockedOperationsField;
    /**
     * The lock type, always `freeze`. */
    readonly lockType?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeFolderLockLockedOperationsField(val: FolderLockLockedOperationsField): SerializedData;
export declare function deserializeFolderLockLockedOperationsField(val: SerializedData): FolderLockLockedOperationsField;
export declare function serializeFolderLock(val: FolderLock): SerializedData;
export declare function deserializeFolderLock(val: SerializedData): FolderLock;
//# sourceMappingURL=folderLock.generated.d.ts.map