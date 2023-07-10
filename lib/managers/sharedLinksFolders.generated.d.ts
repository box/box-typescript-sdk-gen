import { FolderFull } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetSharedItemFoldersQueryParamsArg {
    readonly fields?: string;
}
export interface GetSharedItemFoldersHeadersArg {
    readonly ifNoneMatch?: string;
    readonly boxapi: string;
}
export interface GetFolderGetSharedLinkQueryParamsArg {
    readonly fields: string;
}
export type UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFolderAddSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFolderAddSharedLinkQueryParamsArg {
    readonly fields: string;
}
export type UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFolderUpdateSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFolderUpdateSharedLinkQueryParamsArg {
    readonly fields: string;
}
export interface UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface UpdateFolderRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFolderRemoveSharedLinkQueryParamsArg {
    readonly fields: string;
}
export declare class SharedLinksFoldersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SharedLinksFoldersManager, "getSharedItemFolders" | "getFolderGetSharedLink" | "updateFolderAddSharedLink" | "updateFolderUpdateSharedLink" | "updateFolderRemoveSharedLink">);
    getSharedItemFolders(queryParams: GetSharedItemFoldersQueryParamsArg | undefined, headers: GetSharedItemFoldersHeadersArg): Promise<FolderFull>;
    getFolderGetSharedLink(folderId: string, queryParams: GetFolderGetSharedLinkQueryParamsArg): Promise<FolderFull>;
    updateFolderAddSharedLink(folderId: string, requestBody: UpdateFolderAddSharedLinkRequestBodyArg, queryParams: UpdateFolderAddSharedLinkQueryParamsArg): Promise<FolderFull>;
    updateFolderUpdateSharedLink(folderId: string, requestBody: UpdateFolderUpdateSharedLinkRequestBodyArg, queryParams: UpdateFolderUpdateSharedLinkQueryParamsArg): Promise<FolderFull>;
    updateFolderRemoveSharedLink(folderId: string, requestBody: UpdateFolderRemoveSharedLinkRequestBodyArg, queryParams: UpdateFolderRemoveSharedLinkQueryParamsArg): Promise<FolderFull>;
}
export declare function serializeGetSharedItemFoldersQueryParamsArg(val: GetSharedItemFoldersQueryParamsArg): Json;
export declare function deserializeGetSharedItemFoldersQueryParamsArg(val: any): GetSharedItemFoldersQueryParamsArg;
export declare function serializeGetSharedItemFoldersHeadersArg(val: GetSharedItemFoldersHeadersArg): Json;
export declare function deserializeGetSharedItemFoldersHeadersArg(val: any): GetSharedItemFoldersHeadersArg;
export declare function serializeGetFolderGetSharedLinkQueryParamsArg(val: GetFolderGetSharedLinkQueryParamsArg): Json;
export declare function deserializeGetFolderGetSharedLinkQueryParamsArg(val: any): GetFolderGetSharedLinkQueryParamsArg;
export declare function serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json;
export declare function deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
export declare function serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json;
export declare function deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
export declare function serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField): Json;
export declare function deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField;
export declare function serializeUpdateFolderAddSharedLinkRequestBodyArg(val: UpdateFolderAddSharedLinkRequestBodyArg): Json;
export declare function deserializeUpdateFolderAddSharedLinkRequestBodyArg(val: any): UpdateFolderAddSharedLinkRequestBodyArg;
export declare function serializeUpdateFolderAddSharedLinkQueryParamsArg(val: UpdateFolderAddSharedLinkQueryParamsArg): Json;
export declare function deserializeUpdateFolderAddSharedLinkQueryParamsArg(val: any): UpdateFolderAddSharedLinkQueryParamsArg;
export declare function serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json;
export declare function deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
export declare function serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json;
export declare function deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
export declare function serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField): Json;
export declare function deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField;
export declare function serializeUpdateFolderUpdateSharedLinkRequestBodyArg(val: UpdateFolderUpdateSharedLinkRequestBodyArg): Json;
export declare function deserializeUpdateFolderUpdateSharedLinkRequestBodyArg(val: any): UpdateFolderUpdateSharedLinkRequestBodyArg;
export declare function serializeUpdateFolderUpdateSharedLinkQueryParamsArg(val: UpdateFolderUpdateSharedLinkQueryParamsArg): Json;
export declare function deserializeUpdateFolderUpdateSharedLinkQueryParamsArg(val: any): UpdateFolderUpdateSharedLinkQueryParamsArg;
export declare function serializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val: UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField): Json;
export declare function deserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField;
export declare function serializeUpdateFolderRemoveSharedLinkRequestBodyArg(val: UpdateFolderRemoveSharedLinkRequestBodyArg): Json;
export declare function deserializeUpdateFolderRemoveSharedLinkRequestBodyArg(val: any): UpdateFolderRemoveSharedLinkRequestBodyArg;
export declare function serializeUpdateFolderRemoveSharedLinkQueryParamsArg(val: UpdateFolderRemoveSharedLinkQueryParamsArg): Json;
export declare function deserializeUpdateFolderRemoveSharedLinkQueryParamsArg(val: any): UpdateFolderRemoveSharedLinkQueryParamsArg;
