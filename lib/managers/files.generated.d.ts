import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type FilesManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface GetFileByIdOptionsArg {
    readonly fields?: string;
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
    readonly xRepHints?: string;
}
export interface RestoreFileFromTrashRequestBodyArgParentField {
    readonly id?: string;
}
export interface RestoreFileFromTrashRequestBodyArg {
    readonly name?: string;
    readonly parent?: RestoreFileFromTrashRequestBodyArgParentField;
}
export interface RestoreFileFromTrashOptionsArg {
    readonly fields?: string;
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
export interface UpdateFileByIdOptionsArg {
    readonly fields?: string;
    readonly ifMatch?: string;
}
export interface DeleteFileByIdOptionsArg {
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
export interface CopyFileOptionsArg {
    readonly fields?: string;
}
export type GetFileThumbnailByIdExtensionArg = "png" | "jpg";
export interface GetFileThumbnailByIdOptionsArg {
    readonly minHeight?: number;
    readonly minWidth?: number;
    readonly maxHeight?: number;
    readonly maxWidth?: number;
}
export declare class FilesManager {
    readonly auth: FilesManagerAuthField;
    constructor(fields: Omit<FilesManager, "getFileById" | "restoreFileFromTrash" | "updateFileById" | "deleteFileById" | "copyFile" | "getFileThumbnailById">);
    getFileById(fileId: string, options?: GetFileByIdOptionsArg): Promise<any>;
    restoreFileFromTrash(fileId: string, requestBody: RestoreFileFromTrashRequestBodyArg, options?: RestoreFileFromTrashOptionsArg): Promise<any>;
    updateFileById(fileId: string, requestBody: UpdateFileByIdRequestBodyArg, options?: UpdateFileByIdOptionsArg): Promise<any>;
    deleteFileById(fileId: string, options?: DeleteFileByIdOptionsArg): Promise<any>;
    copyFile(fileId: string, requestBody: CopyFileRequestBodyArg, options?: CopyFileOptionsArg): Promise<any>;
    getFileThumbnailById(fileId: string, extension: GetFileThumbnailByIdExtensionArg, options?: GetFileThumbnailByIdOptionsArg): Promise<any>;
}
