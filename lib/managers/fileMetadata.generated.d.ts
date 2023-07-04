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
export declare function newSerializeGetFileMetadataByIdScopeArg(val: GetFileMetadataByIdScopeArg): Json;
export declare function newDeserializeGetFileMetadataByIdScopeArg(val: any): GetFileMetadataByIdScopeArg;
export declare function newSerializeCreateFileMetadataByIdScopeArg(val: CreateFileMetadataByIdScopeArg): Json;
export declare function newDeserializeCreateFileMetadataByIdScopeArg(val: any): CreateFileMetadataByIdScopeArg;
export declare function newSerializeCreateFileMetadataByIdRequestBodyArg(val: CreateFileMetadataByIdRequestBodyArg): Json;
export declare function newDeserializeCreateFileMetadataByIdRequestBodyArg(val: any): CreateFileMetadataByIdRequestBodyArg;
export declare function newSerializeDeleteFileMetadataByIdScopeArg(val: DeleteFileMetadataByIdScopeArg): Json;
export declare function newDeserializeDeleteFileMetadataByIdScopeArg(val: any): DeleteFileMetadataByIdScopeArg;
