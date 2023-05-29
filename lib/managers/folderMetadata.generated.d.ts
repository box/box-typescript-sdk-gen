import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export type GetFolderMetadataByIdScopeArg = "global" | "enterprise";
export type CreateFolderMetadataByIdScopeArg = "global" | "enterprise";
export interface CreateFolderMetadataByIdRequestBodyArg {
}
export type DeleteFolderMetadataByIdScopeArg = "global" | "enterprise";
export declare class FolderMetadataManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FolderMetadataManager, "getFolderMetadata" | "getFolderMetadataById" | "createFolderMetadataById" | "deleteFolderMetadataById">);
    getFolderMetadata(folderId: string): Promise<any>;
    getFolderMetadataById(folderId: string, scope: GetFolderMetadataByIdScopeArg, templateKey: string): Promise<any>;
    createFolderMetadataById(folderId: string, scope: CreateFolderMetadataByIdScopeArg, templateKey: string, requestBody: CreateFolderMetadataByIdRequestBodyArg): Promise<any>;
    deleteFolderMetadataById(folderId: string, scope: DeleteFolderMetadataByIdScopeArg, templateKey: string): Promise<any>;
}
