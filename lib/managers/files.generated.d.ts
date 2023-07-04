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
export interface UpdateFileByIdRequestBodyArg {
    readonly name?: string;
    readonly description?: string;
    readonly parent?: UpdateFileByIdRequestBodyArgParentField;
    readonly sharedLink?: UpdateFileByIdRequestBodyArgSharedLinkField;
    readonly lock?: UpdateFileByIdRequestBodyArgLockField;
    readonly dispositionAt?: string;
    readonly permissions?: UpdateFileByIdRequestBodyArgPermissionsField;
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
    getFileById(fileId: string, queryParams?: undefined | GetFileByIdQueryParamsArg, headers?: undefined | GetFileByIdHeadersArg): Promise<FileFull>;
    updateFileById(fileId: string, requestBody: UpdateFileByIdRequestBodyArg, queryParams?: undefined | UpdateFileByIdQueryParamsArg, headers?: undefined | UpdateFileByIdHeadersArg): Promise<FileFull>;
    deleteFileById(fileId: string, headers?: undefined | DeleteFileByIdHeadersArg): Promise<any>;
    copyFile(fileId: string, requestBody: CopyFileRequestBodyArg, queryParams?: undefined | CopyFileQueryParamsArg): Promise<FileFull>;
    getFileThumbnailById(fileId: string, extension: GetFileThumbnailByIdExtensionArg, queryParams?: undefined | GetFileThumbnailByIdQueryParamsArg): Promise<any>;
}
export declare function newSerializeGetFileByIdQueryParamsArg(val: GetFileByIdQueryParamsArg): Json;
export declare function newDeserializeGetFileByIdQueryParamsArg(val: any): GetFileByIdQueryParamsArg;
export declare function newSerializeGetFileByIdHeadersArg(val: GetFileByIdHeadersArg): Json;
export declare function newDeserializeGetFileByIdHeadersArg(val: any): GetFileByIdHeadersArg;
export declare function newSerializeUpdateFileByIdRequestBodyArgParentField(val: UpdateFileByIdRequestBodyArgParentField): Json;
export declare function newDeserializeUpdateFileByIdRequestBodyArgParentField(val: any): UpdateFileByIdRequestBodyArgParentField;
export declare function newSerializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val: UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField): Json;
export declare function newDeserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField;
export declare function newSerializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField): Json;
export declare function newDeserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField;
export declare function newSerializeUpdateFileByIdRequestBodyArgSharedLinkField(val: UpdateFileByIdRequestBodyArgSharedLinkField): Json;
export declare function newDeserializeUpdateFileByIdRequestBodyArgSharedLinkField(val: any): UpdateFileByIdRequestBodyArgSharedLinkField;
export declare function newSerializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val: UpdateFileByIdRequestBodyArgLockFieldAccessField): Json;
export declare function newDeserializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val: any): UpdateFileByIdRequestBodyArgLockFieldAccessField;
export declare function newSerializeUpdateFileByIdRequestBodyArgLockField(val: UpdateFileByIdRequestBodyArgLockField): Json;
export declare function newDeserializeUpdateFileByIdRequestBodyArgLockField(val: any): UpdateFileByIdRequestBodyArgLockField;
export declare function newSerializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val: UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField): Json;
export declare function newDeserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val: any): UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField;
export declare function newSerializeUpdateFileByIdRequestBodyArgPermissionsField(val: UpdateFileByIdRequestBodyArgPermissionsField): Json;
export declare function newDeserializeUpdateFileByIdRequestBodyArgPermissionsField(val: any): UpdateFileByIdRequestBodyArgPermissionsField;
export declare function newSerializeUpdateFileByIdRequestBodyArg(val: UpdateFileByIdRequestBodyArg): Json;
export declare function newDeserializeUpdateFileByIdRequestBodyArg(val: any): UpdateFileByIdRequestBodyArg;
export declare function newSerializeUpdateFileByIdQueryParamsArg(val: UpdateFileByIdQueryParamsArg): Json;
export declare function newDeserializeUpdateFileByIdQueryParamsArg(val: any): UpdateFileByIdQueryParamsArg;
export declare function newSerializeUpdateFileByIdHeadersArg(val: UpdateFileByIdHeadersArg): Json;
export declare function newDeserializeUpdateFileByIdHeadersArg(val: any): UpdateFileByIdHeadersArg;
export declare function newSerializeDeleteFileByIdHeadersArg(val: DeleteFileByIdHeadersArg): Json;
export declare function newDeserializeDeleteFileByIdHeadersArg(val: any): DeleteFileByIdHeadersArg;
export declare function newSerializeCopyFileRequestBodyArgParentField(val: CopyFileRequestBodyArgParentField): Json;
export declare function newDeserializeCopyFileRequestBodyArgParentField(val: any): CopyFileRequestBodyArgParentField;
export declare function newSerializeCopyFileRequestBodyArg(val: CopyFileRequestBodyArg): Json;
export declare function newDeserializeCopyFileRequestBodyArg(val: any): CopyFileRequestBodyArg;
export declare function newSerializeCopyFileQueryParamsArg(val: CopyFileQueryParamsArg): Json;
export declare function newDeserializeCopyFileQueryParamsArg(val: any): CopyFileQueryParamsArg;
export declare function newSerializeGetFileThumbnailByIdExtensionArg(val: GetFileThumbnailByIdExtensionArg): Json;
export declare function newDeserializeGetFileThumbnailByIdExtensionArg(val: any): GetFileThumbnailByIdExtensionArg;
export declare function newSerializeGetFileThumbnailByIdQueryParamsArg(val: GetFileThumbnailByIdQueryParamsArg): Json;
export declare function newDeserializeGetFileThumbnailByIdQueryParamsArg(val: any): GetFileThumbnailByIdQueryParamsArg;
