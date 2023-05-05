import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type FoldersManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface GetFolderByIdOptionsArg {
    readonly fields?: string;
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
}
export type UpdateFolderByIdRequestBodyArgSyncStateField = "synced" | "not_synced" | "partially_synced";
export interface UpdateFolderByIdRequestBodyArgParentField {
    readonly id?: string;
}
export type UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
}
export interface UpdateFolderByIdRequestBodyArgSharedLinkField {
    readonly access?: UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField;
}
export type UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField = "open" | "collaborators";
export interface UpdateFolderByIdRequestBodyArgFolderUploadEmailField {
    readonly access?: UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField;
}
export interface UpdateFolderByIdRequestBodyArgCollectionsField {
    readonly id?: string;
    readonly type?: string;
}
export interface UpdateFolderByIdRequestBodyArg {
    readonly name?: string;
    readonly description?: string;
    readonly syncState?: UpdateFolderByIdRequestBodyArgSyncStateField;
    readonly canNonOwnersInvite?: boolean;
    readonly parent?: UpdateFolderByIdRequestBodyArgParentField;
    readonly sharedLink?: UpdateFolderByIdRequestBodyArgSharedLinkField;
    readonly folderUploadEmail?: UpdateFolderByIdRequestBodyArgFolderUploadEmailField;
    readonly tags?: readonly string[];
    readonly isCollaborationRestrictedToEnterprise?: boolean;
    readonly collections?: readonly UpdateFolderByIdRequestBodyArgCollectionsField[];
    readonly canNonOwnersViewCollaborators?: boolean;
}
export interface UpdateFolderByIdOptionsArg {
    readonly fields?: string;
    readonly ifMatch?: string;
}
export interface DeleteFolderByIdOptionsArg {
    readonly ifMatch?: string;
    readonly recursive?: boolean;
}
export type GetFolderItemsOptionsArgSortField = "id" | "name" | "date" | "size";
export type GetFolderItemsOptionsArgDirectionField = "ASC" | "DESC";
export interface GetFolderItemsOptionsArg {
    readonly fields?: string;
    readonly usemarker?: boolean;
    readonly marker?: string;
    readonly offset?: number;
    readonly limit?: number;
    readonly boxapi?: string;
    readonly sort?: GetFolderItemsOptionsArgSortField;
    readonly direction?: GetFolderItemsOptionsArgDirectionField;
}
export interface CreateFolderRequestBodyArgParentField {
    readonly id: string;
}
export type CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField = "open" | "collaborators";
export interface CreateFolderRequestBodyArgFolderUploadEmailField {
    readonly access?: CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField;
}
export type CreateFolderRequestBodyArgSyncStateField = "synced" | "not_synced" | "partially_synced";
export interface CreateFolderRequestBodyArg {
    readonly name: string;
    readonly parent: CreateFolderRequestBodyArgParentField;
    readonly folderUploadEmail?: CreateFolderRequestBodyArgFolderUploadEmailField;
    readonly syncState?: CreateFolderRequestBodyArgSyncStateField;
}
export interface CreateFolderOptionsArg {
    readonly fields?: string;
}
export interface CopyFolderRequestBodyArgParentField {
    readonly id: string;
}
export interface CopyFolderRequestBodyArg {
    readonly name?: string;
    readonly parent: CopyFolderRequestBodyArgParentField;
}
export interface CopyFolderOptionsArg {
    readonly fields?: string;
}
export declare class FoldersManager {
    readonly auth: FoldersManagerAuthField;
    constructor(fields: Omit<FoldersManager, "getFolderById" | "updateFolderById" | "deleteFolderById" | "getFolderItems" | "createFolder" | "copyFolder">);
    getFolderById(folderId: string, options?: GetFolderByIdOptionsArg): Promise<any>;
    updateFolderById(folderId: string, requestBody: UpdateFolderByIdRequestBodyArg, options?: UpdateFolderByIdOptionsArg): Promise<any>;
    deleteFolderById(folderId: string, options?: DeleteFolderByIdOptionsArg): Promise<any>;
    getFolderItems(folderId: string, options?: GetFolderItemsOptionsArg): Promise<any>;
    createFolder(requestBody: CreateFolderRequestBodyArg, options?: CreateFolderOptionsArg): Promise<any>;
    copyFolder(folderId: string, requestBody: CopyFolderRequestBodyArg, options?: CopyFolderOptionsArg): Promise<any>;
}
