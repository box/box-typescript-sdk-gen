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
export declare function newSerializeGetFolderByIdQueryParamsArg(val: GetFolderByIdQueryParamsArg): Json;
export declare function newDeserializeGetFolderByIdQueryParamsArg(val: any): GetFolderByIdQueryParamsArg;
export declare function newSerializeGetFolderByIdHeadersArg(val: GetFolderByIdHeadersArg): Json;
export declare function newDeserializeGetFolderByIdHeadersArg(val: any): GetFolderByIdHeadersArg;
export declare function newSerializeUpdateFolderByIdRequestBodyArgSyncStateField(val: UpdateFolderByIdRequestBodyArgSyncStateField): Json;
export declare function newDeserializeUpdateFolderByIdRequestBodyArgSyncStateField(val: any): UpdateFolderByIdRequestBodyArgSyncStateField;
export declare function newSerializeUpdateFolderByIdRequestBodyArgParentField(val: UpdateFolderByIdRequestBodyArgParentField): Json;
export declare function newDeserializeUpdateFolderByIdRequestBodyArgParentField(val: any): UpdateFolderByIdRequestBodyArgParentField;
export declare function newSerializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val: UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField): Json;
export declare function newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField;
export declare function newSerializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField): Json;
export declare function newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField;
export declare function newSerializeUpdateFolderByIdRequestBodyArgSharedLinkField(val: UpdateFolderByIdRequestBodyArgSharedLinkField): Json;
export declare function newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkField(val: any): UpdateFolderByIdRequestBodyArgSharedLinkField;
export declare function newSerializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val: UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField): Json;
export declare function newDeserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val: any): UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField;
export declare function newSerializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val: UpdateFolderByIdRequestBodyArgFolderUploadEmailField): Json;
export declare function newDeserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val: any): UpdateFolderByIdRequestBodyArgFolderUploadEmailField;
export declare function newSerializeUpdateFolderByIdRequestBodyArgCollectionsField(val: UpdateFolderByIdRequestBodyArgCollectionsField): Json;
export declare function newDeserializeUpdateFolderByIdRequestBodyArgCollectionsField(val: any): UpdateFolderByIdRequestBodyArgCollectionsField;
export declare function newSerializeUpdateFolderByIdRequestBodyArg(val: UpdateFolderByIdRequestBodyArg): Json;
export declare function newDeserializeUpdateFolderByIdRequestBodyArg(val: any): UpdateFolderByIdRequestBodyArg;
export declare function newSerializeUpdateFolderByIdQueryParamsArg(val: UpdateFolderByIdQueryParamsArg): Json;
export declare function newDeserializeUpdateFolderByIdQueryParamsArg(val: any): UpdateFolderByIdQueryParamsArg;
export declare function newSerializeUpdateFolderByIdHeadersArg(val: UpdateFolderByIdHeadersArg): Json;
export declare function newDeserializeUpdateFolderByIdHeadersArg(val: any): UpdateFolderByIdHeadersArg;
export declare function newSerializeDeleteFolderByIdQueryParamsArg(val: DeleteFolderByIdQueryParamsArg): Json;
export declare function newDeserializeDeleteFolderByIdQueryParamsArg(val: any): DeleteFolderByIdQueryParamsArg;
export declare function newSerializeDeleteFolderByIdHeadersArg(val: DeleteFolderByIdHeadersArg): Json;
export declare function newDeserializeDeleteFolderByIdHeadersArg(val: any): DeleteFolderByIdHeadersArg;
export declare function newSerializeGetFolderItemsQueryParamsArgSortField(val: GetFolderItemsQueryParamsArgSortField): Json;
export declare function newDeserializeGetFolderItemsQueryParamsArgSortField(val: any): GetFolderItemsQueryParamsArgSortField;
export declare function newSerializeGetFolderItemsQueryParamsArgDirectionField(val: GetFolderItemsQueryParamsArgDirectionField): Json;
export declare function newDeserializeGetFolderItemsQueryParamsArgDirectionField(val: any): GetFolderItemsQueryParamsArgDirectionField;
export declare function newSerializeGetFolderItemsQueryParamsArg(val: GetFolderItemsQueryParamsArg): Json;
export declare function newDeserializeGetFolderItemsQueryParamsArg(val: any): GetFolderItemsQueryParamsArg;
export declare function newSerializeGetFolderItemsHeadersArg(val: GetFolderItemsHeadersArg): Json;
export declare function newDeserializeGetFolderItemsHeadersArg(val: any): GetFolderItemsHeadersArg;
export declare function newSerializeCreateFolderRequestBodyArgParentField(val: CreateFolderRequestBodyArgParentField): Json;
export declare function newDeserializeCreateFolderRequestBodyArgParentField(val: any): CreateFolderRequestBodyArgParentField;
export declare function newSerializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val: CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField): Json;
export declare function newDeserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val: any): CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField;
export declare function newSerializeCreateFolderRequestBodyArgFolderUploadEmailField(val: CreateFolderRequestBodyArgFolderUploadEmailField): Json;
export declare function newDeserializeCreateFolderRequestBodyArgFolderUploadEmailField(val: any): CreateFolderRequestBodyArgFolderUploadEmailField;
export declare function newSerializeCreateFolderRequestBodyArgSyncStateField(val: CreateFolderRequestBodyArgSyncStateField): Json;
export declare function newDeserializeCreateFolderRequestBodyArgSyncStateField(val: any): CreateFolderRequestBodyArgSyncStateField;
export declare function newSerializeCreateFolderRequestBodyArg(val: CreateFolderRequestBodyArg): Json;
export declare function newDeserializeCreateFolderRequestBodyArg(val: any): CreateFolderRequestBodyArg;
export declare function newSerializeCreateFolderQueryParamsArg(val: CreateFolderQueryParamsArg): Json;
export declare function newDeserializeCreateFolderQueryParamsArg(val: any): CreateFolderQueryParamsArg;
export declare function newSerializeCopyFolderRequestBodyArgParentField(val: CopyFolderRequestBodyArgParentField): Json;
export declare function newDeserializeCopyFolderRequestBodyArgParentField(val: any): CopyFolderRequestBodyArgParentField;
export declare function newSerializeCopyFolderRequestBodyArg(val: CopyFolderRequestBodyArg): Json;
export declare function newDeserializeCopyFolderRequestBodyArg(val: any): CopyFolderRequestBodyArg;
export declare function newSerializeCopyFolderQueryParamsArg(val: CopyFolderQueryParamsArg): Json;
export declare function newDeserializeCopyFolderQueryParamsArg(val: any): CopyFolderQueryParamsArg;
