import { Folder } from "../schemas.generated.js";
import { deserializeFolder } from "../schemas.generated.js";
import { serializeFolder } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { TrashFolderRestored } from "../schemas.generated.js";
import { deserializeTrashFolderRestored } from "../schemas.generated.js";
import { serializeTrashFolderRestored } from "../schemas.generated.js";
import { Items } from "../schemas.generated.js";
import { deserializeItems } from "../schemas.generated.js";
import { serializeItems } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type FoldersManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface GetFoldersIdOptionsArg {
    readonly fields?: string;
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
}
export interface PostFoldersIdRequestBodyArgParentField {
    readonly id?: string;
}
export interface PostFoldersIdRequestBodyArg {
    readonly name?: string;
    readonly parent?: PostFoldersIdRequestBodyArgParentField;
}
export interface PostFoldersIdOptionsArg {
    readonly fields?: string;
}
export type PutFoldersIdRequestBodyArgSyncStateField = "synced" | "not_synced" | "partially_synced";
export interface PutFoldersIdRequestBodyArgParentField {
    readonly id?: string;
}
export type PutFoldersIdRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PutFoldersIdRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
}
export interface PutFoldersIdRequestBodyArgSharedLinkField {
    readonly access?: PutFoldersIdRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: PutFoldersIdRequestBodyArgSharedLinkFieldPermissionsField;
}
export type PutFoldersIdRequestBodyArgFolderUploadEmailFieldAccessField = "open" | "collaborators";
export interface PutFoldersIdRequestBodyArgFolderUploadEmailField {
    readonly access?: PutFoldersIdRequestBodyArgFolderUploadEmailFieldAccessField;
}
export interface PutFoldersIdRequestBodyArgCollectionsField {
    readonly id?: string;
    readonly type?: string;
}
export interface PutFoldersIdRequestBodyArg {
    readonly name?: string;
    readonly description?: string;
    readonly syncState?: PutFoldersIdRequestBodyArgSyncStateField;
    readonly canNonOwnersInvite?: boolean;
    readonly parent?: PutFoldersIdRequestBodyArgParentField;
    readonly sharedLink?: PutFoldersIdRequestBodyArgSharedLinkField;
    readonly folderUploadEmail?: PutFoldersIdRequestBodyArgFolderUploadEmailField;
    readonly tags?: readonly string[];
    readonly isCollaborationRestrictedToEnterprise?: boolean;
    readonly collections?: readonly PutFoldersIdRequestBodyArgCollectionsField[];
    readonly canNonOwnersViewCollaborators?: boolean;
}
export interface PutFoldersIdOptionsArg {
    readonly fields?: string;
    readonly ifMatch?: string;
}
export interface DeleteFoldersIdOptionsArg {
    readonly ifMatch?: string;
    readonly recursive?: boolean;
}
export type GetFoldersIdItemsOptionsArgSortField = "id" | "name" | "date" | "size";
export type GetFoldersIdItemsOptionsArgDirectionField = "ASC" | "DESC";
export interface GetFoldersIdItemsOptionsArg {
    readonly fields?: string;
    readonly usemarker?: boolean;
    readonly marker?: string;
    readonly offset?: number;
    readonly limit?: number;
    readonly boxapi?: string;
    readonly sort?: GetFoldersIdItemsOptionsArgSortField;
    readonly direction?: GetFoldersIdItemsOptionsArgDirectionField;
}
export interface PostFoldersRequestBodyArgParentField {
    readonly id: string;
}
export type PostFoldersRequestBodyArgFolderUploadEmailFieldAccessField = "open" | "collaborators";
export interface PostFoldersRequestBodyArgFolderUploadEmailField {
    readonly access?: PostFoldersRequestBodyArgFolderUploadEmailFieldAccessField;
}
export type PostFoldersRequestBodyArgSyncStateField = "synced" | "not_synced" | "partially_synced";
export interface PostFoldersRequestBodyArg {
    readonly name: string;
    readonly parent: PostFoldersRequestBodyArgParentField;
    readonly folderUploadEmail?: PostFoldersRequestBodyArgFolderUploadEmailField;
    readonly syncState?: PostFoldersRequestBodyArgSyncStateField;
}
export interface PostFoldersOptionsArg {
    readonly fields?: string;
}
export interface PostFoldersIdCopyRequestBodyArgParentField {
    readonly id: string;
}
export interface PostFoldersIdCopyRequestBodyArg {
    readonly name?: string;
    readonly parent: PostFoldersIdCopyRequestBodyArgParentField;
}
export interface PostFoldersIdCopyOptionsArg {
    readonly fields?: string;
}
export class FoldersManager {
    readonly auth!: FoldersManagerAuthField;
    constructor(fields: Omit<FoldersManager, "getFoldersId" | "postFoldersId" | "putFoldersId" | "deleteFoldersId" | "getFoldersIdItems" | "postFolders" | "postFoldersIdCopy">) {
        Object.assign(this, fields);
    }
    async getFoldersId(folderId: string, options: GetFoldersIdOptionsArg = {} satisfies GetFoldersIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "GET", params: { ["fields"]: options.fields }, headers: { ["if-none-match"]: options.ifNoneMatch, ["boxapi"]: options.boxapi }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFolder(await deserializeJson(response.text));
    }
    async postFoldersId(folderId: string, requestBody: PostFoldersIdRequestBodyArg, options: PostFoldersIdOptionsArg = {} satisfies PostFoldersIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTrashFolderRestored(await deserializeJson(response.text));
    }
    async putFoldersId(folderId: string, requestBody: PutFoldersIdRequestBodyArg, options: PutFoldersIdOptionsArg = {} satisfies PutFoldersIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "PUT", params: { ["fields"]: options.fields }, headers: { ["if-match"]: options.ifMatch }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFolder(await deserializeJson(response.text));
    }
    async deleteFoldersId(folderId: string, options: DeleteFoldersIdOptionsArg = {} satisfies DeleteFoldersIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "DELETE", params: { ["recursive"]: options.recursive }, headers: { ["if-match"]: options.ifMatch }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getFoldersIdItems(folderId: string, options: GetFoldersIdItemsOptionsArg = {} satisfies GetFoldersIdItemsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/items") as string, { method: "GET", params: { ["fields"]: options.fields, ["usemarker"]: options.usemarker, ["marker"]: options.marker, ["offset"]: options.offset, ["limit"]: options.limit, ["sort"]: options.sort, ["direction"]: options.direction }, headers: { ["boxapi"]: options.boxapi }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeItems(await deserializeJson(response.text));
    }
    async postFolders(requestBody: PostFoldersRequestBodyArg, options: PostFoldersOptionsArg = {} satisfies PostFoldersOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders") as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFolder(await deserializeJson(response.text));
    }
    async postFoldersIdCopy(folderId: string, requestBody: PostFoldersIdCopyRequestBodyArg, options: PostFoldersIdCopyOptionsArg = {} satisfies PostFoldersIdCopyOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/copy") as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFolder(await deserializeJson(response.text));
    }
}
