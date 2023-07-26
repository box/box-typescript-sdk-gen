import { Metadatas } from "../schemas.generated.js";
import { Metadata } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export type GetFileMetadataByIdScopeArg = "global" | "enterprise";
export type CreateFileMetadataByIdScopeArg = "global" | "enterprise";
export interface CreateFileMetadataByIdRequestBodyArg {
}
export type DeleteFileMetadataByIdScopeArg = "global" | "enterprise";
export declare class FileMetadataManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileMetadataManager, "getFileMetadata" | "getFileMetadataById" | "createFileMetadataById" | "deleteFileMetadataById">);
    getFileMetadata(fileId: string): Promise<Metadatas>;
    getFileMetadataById(fileId: string, scope: GetFileMetadataByIdScopeArg, templateKey: string): Promise<Metadata>;
    createFileMetadataById(fileId: string, scope: CreateFileMetadataByIdScopeArg, templateKey: string, requestBody: CreateFileMetadataByIdRequestBodyArg): Promise<Metadata>;
    deleteFileMetadataById(fileId: string, scope: DeleteFileMetadataByIdScopeArg, templateKey: string): Promise<any>;
}
export declare function serializeGetFileMetadataByIdScopeArg(val: GetFileMetadataByIdScopeArg): Json;
export declare function deserializeGetFileMetadataByIdScopeArg(val: any): GetFileMetadataByIdScopeArg;
export declare function serializeCreateFileMetadataByIdScopeArg(val: CreateFileMetadataByIdScopeArg): Json;
export declare function deserializeCreateFileMetadataByIdScopeArg(val: any): CreateFileMetadataByIdScopeArg;
export declare function serializeCreateFileMetadataByIdRequestBodyArg(val: CreateFileMetadataByIdRequestBodyArg): Json;
export declare function deserializeCreateFileMetadataByIdRequestBodyArg(val: any): CreateFileMetadataByIdRequestBodyArg;
export declare function serializeDeleteFileMetadataByIdScopeArg(val: DeleteFileMetadataByIdScopeArg): Json;
export declare function deserializeDeleteFileMetadataByIdScopeArg(val: any): DeleteFileMetadataByIdScopeArg;
