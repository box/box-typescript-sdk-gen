import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type FolderMetadataManagerAuthField = DeveloperTokenAuth | CCGAuth;
export type GetFoldersIdMetadataIdIdScopeArg = "global" | "enterprise";
export type PostFoldersIdMetadataIdIdScopeArg = "global" | "enterprise";
export interface PostFoldersIdMetadataIdIdRequestBodyArg {
}
export type DeleteFoldersIdMetadataIdIdScopeArg = "global" | "enterprise";
export declare class FolderMetadataManager {
    readonly auth: FolderMetadataManagerAuthField;
    constructor(fields: Omit<FolderMetadataManager, "getFoldersIdMetadata" | "getFoldersIdMetadataIdId" | "postFoldersIdMetadataIdId" | "deleteFoldersIdMetadataIdId">);
    getFoldersIdMetadata(folderId: string): Promise<any>;
    getFoldersIdMetadataIdId(folderId: string, scope: GetFoldersIdMetadataIdIdScopeArg, templateKey: string): Promise<any>;
    postFoldersIdMetadataIdId(folderId: string, scope: PostFoldersIdMetadataIdIdScopeArg, templateKey: string, requestBody: PostFoldersIdMetadataIdIdRequestBodyArg): Promise<any>;
    deleteFoldersIdMetadataIdId(folderId: string, scope: DeleteFoldersIdMetadataIdIdScopeArg, templateKey: string): Promise<any>;
}
