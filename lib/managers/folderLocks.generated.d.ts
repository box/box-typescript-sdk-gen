import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface CreateFolderLockRequestBodyArgLockedOperationsField {
    readonly move: boolean;
    readonly delete: boolean;
}
export interface CreateFolderLockRequestBodyArgFolderField {
    readonly type: string;
    readonly id: string;
}
export interface CreateFolderLockRequestBodyArg {
    readonly lockedOperations?: CreateFolderLockRequestBodyArgLockedOperationsField;
    readonly folder: CreateFolderLockRequestBodyArgFolderField;
}
export declare class FolderLocksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FolderLocksManager, "getFolderLocks" | "createFolderLock" | "deleteFolderLockById">);
    getFolderLocks(folderId: string): Promise<any>;
    createFolderLock(requestBody: CreateFolderLockRequestBodyArg): Promise<any>;
    deleteFolderLockById(folderLockId: string): Promise<any>;
}
