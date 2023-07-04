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
export declare function newSerializeGetFolderLocksQueryParamsArg(val: GetFolderLocksQueryParamsArg): Json;
export declare function newDeserializeGetFolderLocksQueryParamsArg(val: any): GetFolderLocksQueryParamsArg;
export declare function newSerializeCreateFolderLockRequestBodyArgLockedOperationsField(val: CreateFolderLockRequestBodyArgLockedOperationsField): Json;
export declare function newDeserializeCreateFolderLockRequestBodyArgLockedOperationsField(val: any): CreateFolderLockRequestBodyArgLockedOperationsField;
export declare function newSerializeCreateFolderLockRequestBodyArgFolderField(val: CreateFolderLockRequestBodyArgFolderField): Json;
export declare function newDeserializeCreateFolderLockRequestBodyArgFolderField(val: any): CreateFolderLockRequestBodyArgFolderField;
export declare function newSerializeCreateFolderLockRequestBodyArg(val: CreateFolderLockRequestBodyArg): Json;
export declare function newDeserializeCreateFolderLockRequestBodyArg(val: any): CreateFolderLockRequestBodyArg;
