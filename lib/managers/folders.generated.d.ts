import { FolderFull } from "../schemas.generated.js";
import { Items } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export type GetFolderByIdQueryParamsArgSortField = "id" | "name" | "date" | "size";
export type GetFolderByIdQueryParamsArgDirectionField = "ASC" | "DESC";
export interface GetFolderByIdQueryParamsArg {
    readonly fields?: string;
    readonly sort?: GetFolderByIdQueryParamsArgSortField;
    readonly direction?: GetFolderByIdQueryParamsArgDirectionField;
    readonly offset?: number;
    readonly limit?: number;
}
export declare class GetFolderByIdHeadersArg {
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFolderByIdHeadersArg);
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
export interface UpdateFolderByIdQueryParamsArg {
    readonly fields?: string;
}
export declare class UpdateFolderByIdHeadersArg {
    readonly ifMatch?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateFolderByIdHeadersArg);
}
export interface DeleteFolderByIdQueryParamsArg {
    readonly recursive?: boolean;
}
export declare class DeleteFolderByIdHeadersArg {
    readonly ifMatch?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteFolderByIdHeadersArg);
}
export type GetFolderItemsQueryParamsArgSortField = "id" | "name" | "date" | "size";
export type GetFolderItemsQueryParamsArgDirectionField = "ASC" | "DESC";
export interface GetFolderItemsQueryParamsArg {
    readonly fields?: string;
    readonly usemarker?: boolean;
    readonly marker?: string;
    readonly offset?: number;
    readonly limit?: number;
    readonly sort?: GetFolderItemsQueryParamsArgSortField;
    readonly direction?: GetFolderItemsQueryParamsArgDirectionField;
}
export declare class GetFolderItemsHeadersArg {
    readonly boxapi?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFolderItemsHeadersArg);
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
export interface CreateFolderQueryParamsArg {
    readonly fields?: string;
}
export declare class CreateFolderHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateFolderHeadersArg);
}
export interface CopyFolderRequestBodyArgParentField {
    readonly id: string;
}
export interface CopyFolderRequestBodyArg {
    readonly name?: string;
    readonly parent: CopyFolderRequestBodyArgParentField;
}
export interface CopyFolderQueryParamsArg {
    readonly fields?: string;
}
export declare class CopyFolderHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CopyFolderHeadersArg);
}
export declare class FoldersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FoldersManager, "getFolderById" | "updateFolderById" | "deleteFolderById" | "getFolderItems" | "createFolder" | "copyFolder">);
    getFolderById(folderId: string, queryParams?: GetFolderByIdQueryParamsArg, headers?: GetFolderByIdHeadersArg): Promise<FolderFull>;
    updateFolderById(folderId: string, requestBody: UpdateFolderByIdRequestBodyArg, queryParams?: UpdateFolderByIdQueryParamsArg, headers?: UpdateFolderByIdHeadersArg): Promise<FolderFull>;
    deleteFolderById(folderId: string, queryParams?: DeleteFolderByIdQueryParamsArg, headers?: DeleteFolderByIdHeadersArg): Promise<undefined>;
    getFolderItems(folderId: string, queryParams?: GetFolderItemsQueryParamsArg, headers?: GetFolderItemsHeadersArg): Promise<Items>;
    createFolder(requestBody: CreateFolderRequestBodyArg, queryParams?: CreateFolderQueryParamsArg, headers?: CreateFolderHeadersArg): Promise<FolderFull>;
    copyFolder(folderId: string, requestBody: CopyFolderRequestBodyArg, queryParams?: CopyFolderQueryParamsArg, headers?: CopyFolderHeadersArg): Promise<FolderFull>;
}
export declare function serializeUpdateFolderByIdRequestBodyArgSyncStateField(val: UpdateFolderByIdRequestBodyArgSyncStateField): Json;
export declare function deserializeUpdateFolderByIdRequestBodyArgSyncStateField(val: any): UpdateFolderByIdRequestBodyArgSyncStateField;
export declare function serializeUpdateFolderByIdRequestBodyArgParentField(val: UpdateFolderByIdRequestBodyArgParentField): Json;
export declare function deserializeUpdateFolderByIdRequestBodyArgParentField(val: any): UpdateFolderByIdRequestBodyArgParentField;
export declare function serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val: UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField): Json;
export declare function deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField;
export declare function serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField): Json;
export declare function deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField;
export declare function serializeUpdateFolderByIdRequestBodyArgSharedLinkField(val: UpdateFolderByIdRequestBodyArgSharedLinkField): Json;
export declare function deserializeUpdateFolderByIdRequestBodyArgSharedLinkField(val: any): UpdateFolderByIdRequestBodyArgSharedLinkField;
export declare function serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val: UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField): Json;
export declare function deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val: any): UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField;
export declare function serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val: UpdateFolderByIdRequestBodyArgFolderUploadEmailField): Json;
export declare function deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val: any): UpdateFolderByIdRequestBodyArgFolderUploadEmailField;
export declare function serializeUpdateFolderByIdRequestBodyArgCollectionsField(val: UpdateFolderByIdRequestBodyArgCollectionsField): Json;
export declare function deserializeUpdateFolderByIdRequestBodyArgCollectionsField(val: any): UpdateFolderByIdRequestBodyArgCollectionsField;
export declare function serializeUpdateFolderByIdRequestBodyArg(val: UpdateFolderByIdRequestBodyArg): Json;
export declare function deserializeUpdateFolderByIdRequestBodyArg(val: any): UpdateFolderByIdRequestBodyArg;
export declare function serializeCreateFolderRequestBodyArgParentField(val: CreateFolderRequestBodyArgParentField): Json;
export declare function deserializeCreateFolderRequestBodyArgParentField(val: any): CreateFolderRequestBodyArgParentField;
export declare function serializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val: CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField): Json;
export declare function deserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val: any): CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField;
export declare function serializeCreateFolderRequestBodyArgFolderUploadEmailField(val: CreateFolderRequestBodyArgFolderUploadEmailField): Json;
export declare function deserializeCreateFolderRequestBodyArgFolderUploadEmailField(val: any): CreateFolderRequestBodyArgFolderUploadEmailField;
export declare function serializeCreateFolderRequestBodyArgSyncStateField(val: CreateFolderRequestBodyArgSyncStateField): Json;
export declare function deserializeCreateFolderRequestBodyArgSyncStateField(val: any): CreateFolderRequestBodyArgSyncStateField;
export declare function serializeCreateFolderRequestBodyArg(val: CreateFolderRequestBodyArg): Json;
export declare function deserializeCreateFolderRequestBodyArg(val: any): CreateFolderRequestBodyArg;
export declare function serializeCopyFolderRequestBodyArgParentField(val: CopyFolderRequestBodyArgParentField): Json;
export declare function deserializeCopyFolderRequestBodyArgParentField(val: any): CopyFolderRequestBodyArgParentField;
export declare function serializeCopyFolderRequestBodyArg(val: CopyFolderRequestBodyArg): Json;
export declare function deserializeCopyFolderRequestBodyArg(val: any): CopyFolderRequestBodyArg;
