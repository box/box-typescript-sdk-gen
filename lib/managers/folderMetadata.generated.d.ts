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
export declare function newSerializeGetFolderMetadataByIdScopeArg(val: GetFolderMetadataByIdScopeArg): Json;
export declare function newDeserializeGetFolderMetadataByIdScopeArg(val: any): GetFolderMetadataByIdScopeArg;
export declare function newSerializeCreateFolderMetadataByIdScopeArg(val: CreateFolderMetadataByIdScopeArg): Json;
export declare function newDeserializeCreateFolderMetadataByIdScopeArg(val: any): CreateFolderMetadataByIdScopeArg;
export declare function newSerializeCreateFolderMetadataByIdRequestBodyArg(val: CreateFolderMetadataByIdRequestBodyArg): Json;
export declare function newDeserializeCreateFolderMetadataByIdRequestBodyArg(val: any): CreateFolderMetadataByIdRequestBodyArg;
export declare function newSerializeDeleteFolderMetadataByIdScopeArg(val: DeleteFolderMetadataByIdScopeArg): Json;
export declare function newDeserializeDeleteFolderMetadataByIdScopeArg(val: any): DeleteFolderMetadataByIdScopeArg;
