import { FolderLocks } from "../schemas.generated.js";
import { FolderLock } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetFolderLocksQueryParamsArg {
    readonly folderId: string;
}
export declare class GetFolderLocksHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFolderLocksHeadersArg);
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
export declare class CreateFolderLockHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateFolderLockHeadersArg);
}
export declare class DeleteFolderLockByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteFolderLockByIdHeadersArg);
}
export declare class FolderLocksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FolderLocksManager, "getFolderLocks" | "createFolderLock" | "deleteFolderLockById">);
    getFolderLocks(queryParams: GetFolderLocksQueryParamsArg, headers?: GetFolderLocksHeadersArg): Promise<FolderLocks>;
    createFolderLock(requestBody: CreateFolderLockRequestBodyArg, headers?: CreateFolderLockHeadersArg): Promise<FolderLock>;
    deleteFolderLockById(folderLockId: string, headers?: DeleteFolderLockByIdHeadersArg): Promise<undefined>;
}
export declare function serializeCreateFolderLockRequestBodyArgLockedOperationsField(val: CreateFolderLockRequestBodyArgLockedOperationsField): Json;
export declare function deserializeCreateFolderLockRequestBodyArgLockedOperationsField(val: any): CreateFolderLockRequestBodyArgLockedOperationsField;
export declare function serializeCreateFolderLockRequestBodyArgFolderField(val: CreateFolderLockRequestBodyArgFolderField): Json;
export declare function deserializeCreateFolderLockRequestBodyArgFolderField(val: any): CreateFolderLockRequestBodyArgFolderField;
export declare function serializeCreateFolderLockRequestBodyArg(val: CreateFolderLockRequestBodyArg): Json;
export declare function deserializeCreateFolderLockRequestBodyArg(val: any): CreateFolderLockRequestBodyArg;
