import { FolderLocks } from "../schemas.generated.js";
import { FolderLock } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetFolderLocksQueryParamsArg {
    readonly folderId: string;
}
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
    getFolderLocks(queryParams: GetFolderLocksQueryParamsArg): Promise<FolderLocks>;
    createFolderLock(requestBody: CreateFolderLockRequestBodyArg): Promise<FolderLock>;
    deleteFolderLockById(folderLockId: string): Promise<any>;
}
export declare function serializeGetFolderLocksQueryParamsArg(val: GetFolderLocksQueryParamsArg): Json;
export declare function deserializeGetFolderLocksQueryParamsArg(val: any): GetFolderLocksQueryParamsArg;
export declare function serializeCreateFolderLockRequestBodyArgLockedOperationsField(val: CreateFolderLockRequestBodyArgLockedOperationsField): Json;
export declare function deserializeCreateFolderLockRequestBodyArgLockedOperationsField(val: any): CreateFolderLockRequestBodyArgLockedOperationsField;
export declare function serializeCreateFolderLockRequestBodyArgFolderField(val: CreateFolderLockRequestBodyArgFolderField): Json;
export declare function deserializeCreateFolderLockRequestBodyArgFolderField(val: any): CreateFolderLockRequestBodyArgFolderField;
export declare function serializeCreateFolderLockRequestBodyArg(val: CreateFolderLockRequestBodyArg): Json;
export declare function deserializeCreateFolderLockRequestBodyArg(val: any): CreateFolderLockRequestBodyArg;
