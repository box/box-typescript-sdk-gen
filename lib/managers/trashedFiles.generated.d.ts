import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type TrashedFilesManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
export interface GetFileTrashOptionsArg {
    readonly fields?: string;
}
export declare class TrashedFilesManager {
    readonly auth: TrashedFilesManagerAuthField;
    constructor(fields: Omit<TrashedFilesManager, "getFileById" | "restoreFileFromTrash" | "updateFileById" | "deleteFileById" | "getFileTrash" | "deleteFileTrash">);
    getFileById(fileId: string, options?: GetFileByIdOptionsArg): Promise<any>;
    restoreFileFromTrash(fileId: string, requestBody: RestoreFileFromTrashRequestBodyArg, options?: RestoreFileFromTrashOptionsArg): Promise<any>;
    updateFileById(fileId: string, requestBody: UpdateFileByIdRequestBodyArg, options?: UpdateFileByIdOptionsArg): Promise<any>;
    deleteFileById(fileId: string, options?: DeleteFileByIdOptionsArg): Promise<any>;
    getFileTrash(fileId: string, options?: GetFileTrashOptionsArg): Promise<any>;
    deleteFileTrash(fileId: string): Promise<any>;
}
