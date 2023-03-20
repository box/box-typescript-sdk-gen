import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type FilesManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetFilesIdOptionsArg {
    readonly fields?: string;
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
    readonly xRepHints?: string;
}
export interface PostFilesIdRequestBodyArgParentField {
    readonly id?: string;
}
export interface PostFilesIdRequestBodyArg {
    readonly name?: string;
    readonly parent?: PostFilesIdRequestBodyArgParentField;
}
export interface PostFilesIdOptionsArg {
    readonly fields?: string;
}
export interface PutFilesIdRequestBodyArgParentField {
    readonly id?: string;
}
export type PutFilesIdRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PutFilesIdRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
}
export interface PutFilesIdRequestBodyArgSharedLinkField {
    readonly access?: PutFilesIdRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: PutFilesIdRequestBodyArgSharedLinkFieldPermissionsField;
}
export type PutFilesIdRequestBodyArgLockFieldAccessField = "lock";
export interface PutFilesIdRequestBodyArgLockField {
    readonly access?: PutFilesIdRequestBodyArgLockFieldAccessField;
    readonly expiresAt?: string;
    readonly isDownloadPrevented?: boolean;
}
export type PutFilesIdRequestBodyArgPermissionsFieldCanDownloadField = "open" | "company";
export interface PutFilesIdRequestBodyArgPermissionsField {
    readonly canDownload?: PutFilesIdRequestBodyArgPermissionsFieldCanDownloadField;
}
export interface PutFilesIdRequestBodyArg {
    readonly name?: string;
    readonly description?: string;
    readonly parent?: PutFilesIdRequestBodyArgParentField;
    readonly sharedLink?: PutFilesIdRequestBodyArgSharedLinkField;
    readonly lock?: PutFilesIdRequestBodyArgLockField;
    readonly dispositionAt?: string;
    readonly permissions?: PutFilesIdRequestBodyArgPermissionsField;
    readonly tags?: readonly string[];
}
export interface PutFilesIdOptionsArg {
    readonly fields?: string;
    readonly ifMatch?: string;
}
export interface DeleteFilesIdOptionsArg {
    readonly ifMatch?: string;
}
export interface PostFilesIdCopyRequestBodyArgParentField {
    readonly id: string;
}
export interface PostFilesIdCopyRequestBodyArg {
    readonly name?: string;
    readonly version?: string;
    readonly parent: PostFilesIdCopyRequestBodyArgParentField;
}
export interface PostFilesIdCopyOptionsArg {
    readonly fields?: string;
}
export type GetFilesIdThumbnailIdExtensionArg = "png" | "jpg";
export interface GetFilesIdThumbnailIdOptionsArg {
    readonly minHeight?: number;
    readonly minWidth?: number;
    readonly maxHeight?: number;
    readonly maxWidth?: number;
}
export declare class FilesManager {
    readonly auth: FilesManagerAuthField;
    constructor(fields: Omit<FilesManager, "getFilesId" | "postFilesId" | "putFilesId" | "deleteFilesId" | "postFilesIdCopy" | "getFilesIdThumbnailId">);
    getFilesId(fileId: string, options?: GetFilesIdOptionsArg): Promise<any>;
    postFilesId(fileId: string, requestBody: PostFilesIdRequestBodyArg, options?: PostFilesIdOptionsArg): Promise<any>;
    putFilesId(fileId: string, requestBody: PutFilesIdRequestBodyArg, options?: PutFilesIdOptionsArg): Promise<any>;
    deleteFilesId(fileId: string, options?: DeleteFilesIdOptionsArg): Promise<any>;
    postFilesIdCopy(fileId: string, requestBody: PostFilesIdCopyRequestBodyArg, options?: PostFilesIdCopyOptionsArg): Promise<any>;
    getFilesIdThumbnailId(fileId: string, extension: GetFilesIdThumbnailIdExtensionArg, options?: GetFilesIdThumbnailIdOptionsArg): Promise<any>;
}
