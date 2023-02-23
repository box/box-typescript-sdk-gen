import { File } from "../schemas.generated.js";
import { deserializeFile } from "../schemas.generated.js";
import { serializeFile } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { TrashFileRestored } from "../schemas.generated.js";
import { deserializeTrashFileRestored } from "../schemas.generated.js";
import { serializeTrashFileRestored } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
export type FilesManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetFilesIdOptionsArg {
    readonly fields?: string;
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
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
export class FilesManager {
    readonly auth!: FilesManagerAuthField;
    constructor(fields: Omit<FilesManager, "getFilesId" | "postFilesId" | "putFilesId" | "deleteFilesId" | "postFilesIdCopy" | "getFilesIdThumbnailId">) {
        Object.assign(this, fields);
    }
    async getFilesId(fileId: string, xRepHints: string, options: GetFilesIdOptionsArg = {} satisfies GetFilesIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId) as string, { method: "GET", params: { ["fields"]: options.fields }, headers: { ["if-none-match"]: options.ifNoneMatch, ["boxapi"]: options.boxapi, ["x-rep-hints"]: xRepHints }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFile(deserializeJSON(response.text) as JSON);
    }
    async postFilesId(fileId: string, requestBody: PostFilesIdRequestBodyArg, options: PostFilesIdOptionsArg = {} satisfies PostFilesIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId) as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTrashFileRestored(deserializeJSON(response.text) as JSON);
    }
    async putFilesId(fileId: string, requestBody: PutFilesIdRequestBodyArg, options: PutFilesIdOptionsArg = {} satisfies PutFilesIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId) as string, { method: "PUT", params: { ["fields"]: options.fields }, headers: { ["if-match"]: options.ifMatch }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFile(deserializeJSON(response.text) as JSON);
    }
    async deleteFilesId(fileId: string, options: DeleteFilesIdOptionsArg = {} satisfies DeleteFilesIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId) as string, { method: "DELETE", headers: { ["if-match"]: options.ifMatch }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async postFilesIdCopy(fileId: string, requestBody: PostFilesIdCopyRequestBodyArg, options: PostFilesIdCopyOptionsArg = {} satisfies PostFilesIdCopyOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/copy") as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFile(deserializeJSON(response.text) as JSON);
    }
    async getFilesIdThumbnailId(fileId: string, extension: GetFilesIdThumbnailIdExtensionArg, options: GetFilesIdThumbnailIdOptionsArg = {} satisfies GetFilesIdThumbnailIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/thumbnail.", extension) as string, { method: "GET", params: { ["min_height"]: options.minHeight, ["min_width"]: options.minWidth, ["max_height"]: options.maxHeight, ["max_width"]: options.maxWidth }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
