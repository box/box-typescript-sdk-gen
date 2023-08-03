/// <reference types="node" />
import { FileFull } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { ByteStream } from "../utils.js";
import { Json } from "../json.js";
export interface GetFileByIdQueryParamsArg {
    readonly fields?: string;
}
export declare class GetFileByIdHeadersArg {
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
    readonly xRepHints?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileByIdHeadersArg);
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
export declare class UpdateFileByIdHeadersArg {
    readonly ifMatch?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateFileByIdHeadersArg);
}
export declare class DeleteFileByIdHeadersArg {
    readonly ifMatch?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteFileByIdHeadersArg);
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
export declare class CopyFileHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CopyFileHeadersArg);
}
export type GetFileThumbnailByIdExtensionArg = "png" | "jpg";
export interface GetFileThumbnailByIdQueryParamsArg {
    readonly minHeight?: number;
    readonly minWidth?: number;
    readonly maxHeight?: number;
    readonly maxWidth?: number;
}
export declare class GetFileThumbnailByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileThumbnailByIdHeadersArg);
}
export declare class FilesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FilesManager, "getFileById" | "updateFileById" | "deleteFileById" | "copyFile" | "getFileThumbnailById">);
    getFileById(fileId: string, queryParams?: GetFileByIdQueryParamsArg, headers?: GetFileByIdHeadersArg): Promise<FileFull>;
    updateFileById(fileId: string, requestBody: UpdateFileByIdRequestBodyArg, queryParams?: UpdateFileByIdQueryParamsArg, headers?: UpdateFileByIdHeadersArg): Promise<FileFull>;
    deleteFileById(fileId: string, headers?: DeleteFileByIdHeadersArg): Promise<undefined>;
    copyFile(fileId: string, requestBody: CopyFileRequestBodyArg, queryParams?: CopyFileQueryParamsArg, headers?: CopyFileHeadersArg): Promise<FileFull>;
    getFileThumbnailById(fileId: string, extension: GetFileThumbnailByIdExtensionArg, queryParams?: GetFileThumbnailByIdQueryParamsArg, headers?: GetFileThumbnailByIdHeadersArg): Promise<ByteStream>;
}
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
export declare function serializeCopyFileRequestBodyArgParentField(val: CopyFileRequestBodyArgParentField): Json;
export declare function deserializeCopyFileRequestBodyArgParentField(val: any): CopyFileRequestBodyArgParentField;
export declare function serializeCopyFileRequestBodyArg(val: CopyFileRequestBodyArg): Json;
export declare function deserializeCopyFileRequestBodyArg(val: any): CopyFileRequestBodyArg;
export declare function serializeGetFileThumbnailByIdExtensionArg(val: GetFileThumbnailByIdExtensionArg): Json;
export declare function deserializeGetFileThumbnailByIdExtensionArg(val: any): GetFileThumbnailByIdExtensionArg;
