import { FileFull } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetFileByIdQueryParamsArg {
    readonly fields?: string;
}
export interface GetFileByIdHeadersArg {
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
    readonly xRepHints?: string;
}
export interface UpdateFileByIdRequestBodyArgParentField {
    readonly id?: string;
}
export type UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
}
export interface UpdateFileByIdRequestBodyArgSharedLinkField {
    readonly access?: UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField;
}
export type UpdateFileByIdRequestBodyArgLockFieldAccessField = "lock";
export interface UpdateFileByIdRequestBodyArgLockField {
    readonly access?: UpdateFileByIdRequestBodyArgLockFieldAccessField;
    readonly expiresAt?: string;
    readonly isDownloadPrevented?: boolean;
}
export type UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField = "open" | "company";
export interface UpdateFileByIdRequestBodyArgPermissionsField {
    readonly canDownload?: UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField;
}
export interface UpdateFileByIdRequestBodyArgCollectionsField {
    readonly id?: string;
    readonly type?: string;
}
export interface UpdateFileByIdRequestBodyArg {
    readonly name?: string;
    readonly description?: string;
    readonly parent?: UpdateFileByIdRequestBodyArgParentField;
    readonly sharedLink?: UpdateFileByIdRequestBodyArgSharedLinkField;
    readonly lock?: UpdateFileByIdRequestBodyArgLockField;
    readonly dispositionAt?: string;
    readonly permissions?: UpdateFileByIdRequestBodyArgPermissionsField;
    readonly collections?: readonly UpdateFileByIdRequestBodyArgCollectionsField[];
    readonly tags?: readonly string[];
}
export interface UpdateFileByIdQueryParamsArg {
    readonly fields?: string;
}
export interface UpdateFileByIdHeadersArg {
    readonly ifMatch?: string;
}
export interface DeleteFileByIdHeadersArg {
    readonly ifMatch?: string;
}
export interface CopyFileRequestBodyArgParentField {
    readonly id: string;
}
export interface CopyFileRequestBodyArg {
    readonly name?: string;
    readonly version?: string;
    readonly parent: CopyFileRequestBodyArgParentField;
}
export interface CopyFileQueryParamsArg {
    readonly fields?: string;
}
export type GetFileThumbnailByIdExtensionArg = "png" | "jpg";
export interface GetFileThumbnailByIdQueryParamsArg {
    readonly minHeight?: number;
    readonly minWidth?: number;
    readonly maxHeight?: number;
    readonly maxWidth?: number;
}
export declare class FilesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FilesManager, "getFileById" | "updateFileById" | "deleteFileById" | "copyFile" | "getFileThumbnailById">);
    getFileById(fileId: string, queryParams?: GetFileByIdQueryParamsArg, headers?: GetFileByIdHeadersArg): Promise<FileFull>;
    updateFileById(fileId: string, requestBody: UpdateFileByIdRequestBodyArg, queryParams?: UpdateFileByIdQueryParamsArg, headers?: UpdateFileByIdHeadersArg): Promise<FileFull>;
    deleteFileById(fileId: string, headers?: DeleteFileByIdHeadersArg): Promise<any>;
    copyFile(fileId: string, requestBody: CopyFileRequestBodyArg, queryParams?: CopyFileQueryParamsArg): Promise<FileFull>;
    getFileThumbnailById(fileId: string, extension: GetFileThumbnailByIdExtensionArg, queryParams?: GetFileThumbnailByIdQueryParamsArg): Promise<any>;
}
export declare function serializeGetFileByIdQueryParamsArg(val: GetFileByIdQueryParamsArg): Json;
export declare function deserializeGetFileByIdQueryParamsArg(val: any): GetFileByIdQueryParamsArg;
export declare function serializeGetFileByIdHeadersArg(val: GetFileByIdHeadersArg): Json;
export declare function deserializeGetFileByIdHeadersArg(val: any): GetFileByIdHeadersArg;
export declare function serializeUpdateFileByIdRequestBodyArgParentField(val: UpdateFileByIdRequestBodyArgParentField): Json;
export declare function deserializeUpdateFileByIdRequestBodyArgParentField(val: any): UpdateFileByIdRequestBodyArgParentField;
export declare function serializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val: UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField): Json;
export declare function deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField;
export declare function serializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField): Json;
export declare function deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField;
export declare function serializeUpdateFileByIdRequestBodyArgSharedLinkField(val: UpdateFileByIdRequestBodyArgSharedLinkField): Json;
export declare function deserializeUpdateFileByIdRequestBodyArgSharedLinkField(val: any): UpdateFileByIdRequestBodyArgSharedLinkField;
export declare function serializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val: UpdateFileByIdRequestBodyArgLockFieldAccessField): Json;
export declare function deserializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val: any): UpdateFileByIdRequestBodyArgLockFieldAccessField;
export declare function serializeUpdateFileByIdRequestBodyArgLockField(val: UpdateFileByIdRequestBodyArgLockField): Json;
export declare function deserializeUpdateFileByIdRequestBodyArgLockField(val: any): UpdateFileByIdRequestBodyArgLockField;
export declare function serializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val: UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField): Json;
export declare function deserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val: any): UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField;
export declare function serializeUpdateFileByIdRequestBodyArgPermissionsField(val: UpdateFileByIdRequestBodyArgPermissionsField): Json;
export declare function deserializeUpdateFileByIdRequestBodyArgPermissionsField(val: any): UpdateFileByIdRequestBodyArgPermissionsField;
export declare function serializeUpdateFileByIdRequestBodyArgCollectionsField(val: UpdateFileByIdRequestBodyArgCollectionsField): Json;
export declare function deserializeUpdateFileByIdRequestBodyArgCollectionsField(val: any): UpdateFileByIdRequestBodyArgCollectionsField;
export declare function serializeUpdateFileByIdRequestBodyArg(val: UpdateFileByIdRequestBodyArg): Json;
export declare function deserializeUpdateFileByIdRequestBodyArg(val: any): UpdateFileByIdRequestBodyArg;
export declare function serializeUpdateFileByIdQueryParamsArg(val: UpdateFileByIdQueryParamsArg): Json;
export declare function deserializeUpdateFileByIdQueryParamsArg(val: any): UpdateFileByIdQueryParamsArg;
export declare function serializeUpdateFileByIdHeadersArg(val: UpdateFileByIdHeadersArg): Json;
export declare function deserializeUpdateFileByIdHeadersArg(val: any): UpdateFileByIdHeadersArg;
export declare function serializeDeleteFileByIdHeadersArg(val: DeleteFileByIdHeadersArg): Json;
export declare function deserializeDeleteFileByIdHeadersArg(val: any): DeleteFileByIdHeadersArg;
export declare function serializeCopyFileRequestBodyArgParentField(val: CopyFileRequestBodyArgParentField): Json;
export declare function deserializeCopyFileRequestBodyArgParentField(val: any): CopyFileRequestBodyArgParentField;
export declare function serializeCopyFileRequestBodyArg(val: CopyFileRequestBodyArg): Json;
export declare function deserializeCopyFileRequestBodyArg(val: any): CopyFileRequestBodyArg;
export declare function serializeCopyFileQueryParamsArg(val: CopyFileQueryParamsArg): Json;
export declare function deserializeCopyFileQueryParamsArg(val: any): CopyFileQueryParamsArg;
export declare function serializeGetFileThumbnailByIdExtensionArg(val: GetFileThumbnailByIdExtensionArg): Json;
export declare function deserializeGetFileThumbnailByIdExtensionArg(val: any): GetFileThumbnailByIdExtensionArg;
export declare function serializeGetFileThumbnailByIdQueryParamsArg(val: GetFileThumbnailByIdQueryParamsArg): Json;
export declare function deserializeGetFileThumbnailByIdQueryParamsArg(val: any): GetFileThumbnailByIdQueryParamsArg;
