import { FolderFull } from "../schemas.generated.js";
import { Items } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetFolderByIdQueryParamsArg {
    readonly fields?: string;
}
export interface GetFolderByIdHeadersArg {
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
export interface UpdateFolderByIdQueryParamsArg {
    readonly fields?: string;
}
export interface UpdateFolderByIdHeadersArg {
    readonly ifMatch?: string;
}
export interface DeleteFolderByIdQueryParamsArg {
    readonly recursive?: boolean;
}
export interface DeleteFolderByIdHeadersArg {
    readonly ifMatch?: string;
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
export interface GetFolderItemsHeadersArg {
    readonly boxapi?: string;
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
export declare class FoldersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FoldersManager, "getFolderById" | "updateFolderById" | "deleteFolderById" | "getFolderItems" | "createFolder" | "copyFolder">);
    getFolderById(folderId: string, queryParams?: undefined | GetFolderByIdQueryParamsArg, headers?: undefined | GetFolderByIdHeadersArg): Promise<FolderFull>;
    updateFolderById(folderId: string, requestBody: UpdateFolderByIdRequestBodyArg, queryParams?: undefined | UpdateFolderByIdQueryParamsArg, headers?: undefined | UpdateFolderByIdHeadersArg): Promise<FolderFull>;
    deleteFolderById(folderId: string, queryParams?: undefined | DeleteFolderByIdQueryParamsArg, headers?: undefined | DeleteFolderByIdHeadersArg): Promise<any>;
    getFolderItems(folderId: string, queryParams?: undefined | GetFolderItemsQueryParamsArg, headers?: undefined | GetFolderItemsHeadersArg): Promise<Items>;
    createFolder(requestBody: CreateFolderRequestBodyArg, queryParams?: undefined | CreateFolderQueryParamsArg): Promise<FolderFull>;
    copyFolder(folderId: string, requestBody: CopyFolderRequestBodyArg, queryParams?: undefined | CopyFolderQueryParamsArg): Promise<FolderFull>;
}
export declare function serializeGetFolderByIdQueryParamsArg(val: GetFolderByIdQueryParamsArg): Json;
export declare function deserializeGetFolderByIdQueryParamsArg(val: any): GetFolderByIdQueryParamsArg;
export declare function serializeGetFolderByIdHeadersArg(val: GetFolderByIdHeadersArg): Json;
export declare function deserializeGetFolderByIdHeadersArg(val: any): GetFolderByIdHeadersArg;
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
export declare function serializeUpdateFolderByIdQueryParamsArg(val: UpdateFolderByIdQueryParamsArg): Json;
export declare function deserializeUpdateFolderByIdQueryParamsArg(val: any): UpdateFolderByIdQueryParamsArg;
export declare function serializeUpdateFolderByIdHeadersArg(val: UpdateFolderByIdHeadersArg): Json;
export declare function deserializeUpdateFolderByIdHeadersArg(val: any): UpdateFolderByIdHeadersArg;
export declare function serializeDeleteFolderByIdQueryParamsArg(val: DeleteFolderByIdQueryParamsArg): Json;
export declare function deserializeDeleteFolderByIdQueryParamsArg(val: any): DeleteFolderByIdQueryParamsArg;
export declare function serializeDeleteFolderByIdHeadersArg(val: DeleteFolderByIdHeadersArg): Json;
export declare function deserializeDeleteFolderByIdHeadersArg(val: any): DeleteFolderByIdHeadersArg;
export declare function serializeGetFolderItemsQueryParamsArgSortField(val: GetFolderItemsQueryParamsArgSortField): Json;
export declare function deserializeGetFolderItemsQueryParamsArgSortField(val: any): GetFolderItemsQueryParamsArgSortField;
export declare function serializeGetFolderItemsQueryParamsArgDirectionField(val: GetFolderItemsQueryParamsArgDirectionField): Json;
export declare function deserializeGetFolderItemsQueryParamsArgDirectionField(val: any): GetFolderItemsQueryParamsArgDirectionField;
export declare function serializeGetFolderItemsQueryParamsArg(val: GetFolderItemsQueryParamsArg): Json;
export declare function deserializeGetFolderItemsQueryParamsArg(val: any): GetFolderItemsQueryParamsArg;
export declare function serializeGetFolderItemsHeadersArg(val: GetFolderItemsHeadersArg): Json;
export declare function deserializeGetFolderItemsHeadersArg(val: any): GetFolderItemsHeadersArg;
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
export declare function serializeCreateFolderQueryParamsArg(val: CreateFolderQueryParamsArg): Json;
export declare function deserializeCreateFolderQueryParamsArg(val: any): CreateFolderQueryParamsArg;
export declare function serializeCopyFolderRequestBodyArgParentField(val: CopyFolderRequestBodyArgParentField): Json;
export declare function deserializeCopyFolderRequestBodyArgParentField(val: any): CopyFolderRequestBodyArgParentField;
export declare function serializeCopyFolderRequestBodyArg(val: CopyFolderRequestBodyArg): Json;
export declare function deserializeCopyFolderRequestBodyArg(val: any): CopyFolderRequestBodyArg;
export declare function serializeCopyFolderQueryParamsArg(val: CopyFolderQueryParamsArg): Json;
export declare function deserializeCopyFolderQueryParamsArg(val: any): CopyFolderQueryParamsArg;
