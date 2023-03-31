import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type FileMetadataManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export type GetFileMetadataByIdScopeArg = "global" | "enterprise";
export type CreateFileMetadataByIdScopeArg = "global" | "enterprise";
export interface CreateFileMetadataByIdRequestBodyArg {
}
export type DeleteFileMetadataByIdScopeArg = "global" | "enterprise";
export declare class FileMetadataManager {
    readonly auth: FileMetadataManagerAuthField;
    constructor(fields: Omit<FileMetadataManager, "getFileMetadata" | "getFileMetadataById" | "createFileMetadataById" | "deleteFileMetadataById">);
    getFileMetadata(fileId: string): Promise<any>;
    getFileMetadataById(fileId: string, scope: GetFileMetadataByIdScopeArg, templateKey: string): Promise<any>;
    createFileMetadataById(fileId: string, scope: CreateFileMetadataByIdScopeArg, templateKey: string, requestBody: CreateFileMetadataByIdRequestBodyArg): Promise<any>;
    deleteFileMetadataById(fileId: string, scope: DeleteFileMetadataByIdScopeArg, templateKey: string): Promise<any>;
}
