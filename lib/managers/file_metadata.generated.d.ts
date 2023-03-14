import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type FileMetadataManagerAuthField = DeveloperTokenAuth | CCGAuth;
export type GetFilesIdMetadataIdIdScopeArg = "global" | "enterprise";
export type PostFilesIdMetadataIdIdScopeArg = "global" | "enterprise";
export interface PostFilesIdMetadataIdIdRequestBodyArg {
}
export type DeleteFilesIdMetadataIdIdScopeArg = "global" | "enterprise";
export declare class FileMetadataManager {
    readonly auth: FileMetadataManagerAuthField;
    constructor(fields: Omit<FileMetadataManager, "getFilesIdMetadata" | "getFilesIdMetadataIdId" | "postFilesIdMetadataIdId" | "deleteFilesIdMetadataIdId">);
    getFilesIdMetadata(fileId: string): Promise<any>;
    getFilesIdMetadataIdId(fileId: string, scope: GetFilesIdMetadataIdIdScopeArg, templateKey: string): Promise<any>;
    postFilesIdMetadataIdId(fileId: string, scope: PostFilesIdMetadataIdIdScopeArg, templateKey: string, requestBody: PostFilesIdMetadataIdIdRequestBodyArg): Promise<any>;
    deleteFilesIdMetadataIdId(fileId: string, scope: DeleteFilesIdMetadataIdIdScopeArg, templateKey: string): Promise<any>;
}
