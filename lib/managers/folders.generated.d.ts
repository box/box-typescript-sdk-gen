import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type FoldersManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetFoldersIdOptionsArg {
    readonly fields?: string;
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
}
export interface PostFoldersIdRequestBodyArgParentField {
    readonly id?: string;
}
export interface PostFoldersIdRequestBodyArg {
    readonly name?: string;
    readonly parent?: PostFoldersIdRequestBodyArgParentField;
}
export interface PostFoldersIdOptionsArg {
    readonly fields?: string;
}
export type PutFoldersIdRequestBodyArgSyncStateField = "synced" | "not_synced" | "partially_synced";
export interface PutFoldersIdRequestBodyArgParentField {
    readonly id?: string;
}
export type PutFoldersIdRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PutFoldersIdRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
}
export interface PutFoldersIdRequestBodyArgSharedLinkField {
    readonly access?: PutFoldersIdRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: PutFoldersIdRequestBodyArgSharedLinkFieldPermissionsField;
}
export type PutFoldersIdRequestBodyArgFolderUploadEmailFieldAccessField = "open" | "collaborators";
export interface PutFoldersIdRequestBodyArgFolderUploadEmailField {
    readonly access?: PutFoldersIdRequestBodyArgFolderUploadEmailFieldAccessField;
}
export interface PutFoldersIdRequestBodyArgCollectionsField {
    readonly id?: string;
    readonly type?: string;
}
export interface PutFoldersIdRequestBodyArg {
    readonly name?: string;
    readonly description?: string;
    readonly syncState?: PutFoldersIdRequestBodyArgSyncStateField;
    readonly canNonOwnersInvite?: boolean;
    readonly parent?: PutFoldersIdRequestBodyArgParentField;
    readonly sharedLink?: PutFoldersIdRequestBodyArgSharedLinkField;
    readonly folderUploadEmail?: PutFoldersIdRequestBodyArgFolderUploadEmailField;
    readonly tags?: readonly string[];
    readonly isCollaborationRestrictedToEnterprise?: boolean;
    readonly collections?: readonly PutFoldersIdRequestBodyArgCollectionsField[];
    readonly canNonOwnersViewCollaborators?: boolean;
}
export interface PutFoldersIdOptionsArg {
    readonly fields?: string;
    readonly ifMatch?: string;
}
export interface DeleteFoldersIdOptionsArg {
    readonly ifMatch?: string;
    readonly recursive?: boolean;
}
export type GetFoldersIdItemsOptionsArgSortField = "id" | "name" | "date" | "size";
export type GetFoldersIdItemsOptionsArgDirectionField = "ASC" | "DESC";
export interface GetFoldersIdItemsOptionsArg {
    readonly fields?: string;
    readonly usemarker?: boolean;
    readonly marker?: string;
    readonly offset?: number;
    readonly limit?: number;
    readonly boxapi?: string;
    readonly sort?: GetFoldersIdItemsOptionsArgSortField;
    readonly direction?: GetFoldersIdItemsOptionsArgDirectionField;
}
export interface PostFoldersRequestBodyArgParentField {
    readonly id: string;
}
export type PostFoldersRequestBodyArgFolderUploadEmailFieldAccessField = "open" | "collaborators";
export interface PostFoldersRequestBodyArgFolderUploadEmailField {
    readonly access?: PostFoldersRequestBodyArgFolderUploadEmailFieldAccessField;
}
export type PostFoldersRequestBodyArgSyncStateField = "synced" | "not_synced" | "partially_synced";
export interface PostFoldersRequestBodyArg {
    readonly name: string;
    readonly parent: PostFoldersRequestBodyArgParentField;
    readonly folderUploadEmail?: PostFoldersRequestBodyArgFolderUploadEmailField;
    readonly syncState?: PostFoldersRequestBodyArgSyncStateField;
}
export interface PostFoldersOptionsArg {
    readonly fields?: string;
}
export interface PostFoldersIdCopyRequestBodyArgParentField {
    readonly id: string;
}
export interface PostFoldersIdCopyRequestBodyArg {
    readonly name?: string;
    readonly parent: PostFoldersIdCopyRequestBodyArgParentField;
}
export interface PostFoldersIdCopyOptionsArg {
    readonly fields?: string;
}
export declare class FoldersManager {
    readonly auth: FoldersManagerAuthField;
    constructor(fields: Omit<FoldersManager, "getFoldersId" | "postFoldersId" | "putFoldersId" | "deleteFoldersId" | "getFoldersIdItems" | "postFolders" | "postFoldersIdCopy">);
    getFoldersId(folderId: string, options?: GetFoldersIdOptionsArg): Promise<any>;
    postFoldersId(folderId: string, requestBody: PostFoldersIdRequestBodyArg, options?: PostFoldersIdOptionsArg): Promise<any>;
    putFoldersId(folderId: string, requestBody: PutFoldersIdRequestBodyArg, options?: PutFoldersIdOptionsArg): Promise<any>;
    deleteFoldersId(folderId: string, options?: DeleteFoldersIdOptionsArg): Promise<any>;
    getFoldersIdItems(folderId: string, options?: GetFoldersIdItemsOptionsArg): Promise<any>;
    postFolders(requestBody: PostFoldersRequestBodyArg, options?: PostFoldersOptionsArg): Promise<any>;
    postFoldersIdCopy(folderId: string, requestBody: PostFoldersIdCopyRequestBodyArg, options?: PostFoldersIdCopyOptionsArg): Promise<any>;
}
