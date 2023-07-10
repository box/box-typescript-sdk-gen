import { Metadatas } from "../schemas.generated.js";
import { Metadata } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export type GetFolderMetadataByIdScopeArg = "global" | "enterprise";
export type CreateFolderMetadataByIdScopeArg = "global" | "enterprise";
export interface CreateFolderMetadataByIdRequestBodyArg {
}
export type DeleteFolderMetadataByIdScopeArg = "global" | "enterprise";
export declare class FolderMetadataManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FolderMetadataManager, "getFolderMetadata" | "getFolderMetadataById" | "createFolderMetadataById" | "deleteFolderMetadataById">);
    getFolderMetadata(folderId: string): Promise<Metadatas>;
    getFolderMetadataById(folderId: string, scope: GetFolderMetadataByIdScopeArg, templateKey: string): Promise<Metadata>;
    createFolderMetadataById(folderId: string, scope: CreateFolderMetadataByIdScopeArg, templateKey: string, requestBody: CreateFolderMetadataByIdRequestBodyArg): Promise<Metadata>;
    deleteFolderMetadataById(folderId: string, scope: DeleteFolderMetadataByIdScopeArg, templateKey: string): Promise<any>;
}
export declare function serializeGetFolderMetadataByIdScopeArg(val: GetFolderMetadataByIdScopeArg): Json;
export declare function deserializeGetFolderMetadataByIdScopeArg(val: any): GetFolderMetadataByIdScopeArg;
export declare function serializeCreateFolderMetadataByIdScopeArg(val: CreateFolderMetadataByIdScopeArg): Json;
export declare function deserializeCreateFolderMetadataByIdScopeArg(val: any): CreateFolderMetadataByIdScopeArg;
export declare function serializeCreateFolderMetadataByIdRequestBodyArg(val: CreateFolderMetadataByIdRequestBodyArg): Json;
export declare function deserializeCreateFolderMetadataByIdRequestBodyArg(val: any): CreateFolderMetadataByIdRequestBodyArg;
export declare function serializeDeleteFolderMetadataByIdScopeArg(val: DeleteFolderMetadataByIdScopeArg): Json;
export declare function deserializeDeleteFolderMetadataByIdScopeArg(val: any): DeleteFolderMetadataByIdScopeArg;
