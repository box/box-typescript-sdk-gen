import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type FolderLocksManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
    readonly auth: FolderLocksManagerAuthField;
    constructor(fields: Omit<FolderLocksManager, "getFolderLocks" | "createFolderLock" | "deleteFolderLockById">);
    getFolderLocks(folderId: string): Promise<any>;
    createFolderLock(requestBody: CreateFolderLockRequestBodyArg): Promise<any>;
    deleteFolderLockById(folderLockId: string): Promise<any>;
}
