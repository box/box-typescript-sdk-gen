import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type FolderLocksManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface PostFolderLocksRequestBodyArgLockedOperationsField {
    readonly move: boolean;
    readonly delete: boolean;
}
export interface PostFolderLocksRequestBodyArgFolderField {
    readonly type: string;
    readonly id: string;
}
export interface PostFolderLocksRequestBodyArg {
    readonly lockedOperations?: PostFolderLocksRequestBodyArgLockedOperationsField;
    readonly folder: PostFolderLocksRequestBodyArgFolderField;
}
export declare class FolderLocksManager {
    readonly auth: FolderLocksManagerAuthField;
    constructor(fields: Omit<FolderLocksManager, "getFolderLocks" | "postFolderLocks" | "deleteFolderLocksId">);
    getFolderLocks(folderId: string): Promise<any>;
    postFolderLocks(requestBody: PostFolderLocksRequestBodyArg): Promise<any>;
    deleteFolderLocksId(folderLockId: string): Promise<any>;
}
