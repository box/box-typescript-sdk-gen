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
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type FoldersManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface GetFolderByIdOptionsArg {
    readonly fields?: string;
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
}
export interface RestoreFolderFromTrashRequestBodyArgParentField {
    readonly id?: string;
}
export interface RestoreFolderFromTrashRequestBodyArg {
    readonly name?: string;
    readonly parent?: RestoreFolderFromTrashRequestBodyArgParentField;
}
export interface RestoreFolderFromTrashOptionsArg {
    readonly fields?: string;
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
export interface UpdateFolderByIdOptionsArg {
    readonly fields?: string;
    readonly ifMatch?: string;
}
export interface DeleteFolderByIdOptionsArg {
    readonly ifMatch?: string;
    readonly recursive?: boolean;
}
export type GetFolderItemsOptionsArgSortField = "id" | "name" | "date" | "size";
export type GetFolderItemsOptionsArgDirectionField = "ASC" | "DESC";
export interface GetFolderItemsOptionsArg {
    readonly fields?: string;
    readonly usemarker?: boolean;
    readonly marker?: string;
    readonly offset?: number;
    readonly limit?: number;
    readonly boxapi?: string;
    readonly sort?: GetFolderItemsOptionsArgSortField;
    readonly direction?: GetFolderItemsOptionsArgDirectionField;
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
export interface CreateFolderOptionsArg {
    readonly fields?: string;
}
export interface CopyFolderRequestBodyArgParentField {
    readonly id: string;
}
export interface CopyFolderRequestBodyArg {
    readonly name?: string;
    readonly parent: CopyFolderRequestBodyArgParentField;
}
export interface CopyFolderOptionsArg {
    readonly fields?: string;
}
export class FoldersManager {
    readonly auth!: FoldersManagerAuthField;
    constructor(fields: Omit<FoldersManager, "getFolderById" | "restoreFolderFromTrash" | "updateFolderById" | "deleteFolderById" | "getFolderItems" | "createFolder" | "copyFolder">) {
        Object.assign(this, fields);
    }
    async getFolderById(folderId: string, options: GetFolderByIdOptionsArg = {} satisfies GetFolderByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "GET", params: { ["fields"]: options.fields }, headers: { ["if-none-match"]: options.ifNoneMatch, ["boxapi"]: options.boxapi }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFolder(deserializeJSON(response.text) as JSON);
    }
    async restoreFolderFromTrash(folderId: string, requestBody: RestoreFolderFromTrashRequestBodyArg, options: RestoreFolderFromTrashOptionsArg = {} satisfies RestoreFolderFromTrashOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeTrashFolderRestored(deserializeJSON(response.text) as JSON);
    }
    async updateFolderById(folderId: string, requestBody: UpdateFolderByIdRequestBodyArg, options: UpdateFolderByIdOptionsArg = {} satisfies UpdateFolderByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "PUT", params: { ["fields"]: options.fields }, headers: { ["if-match"]: options.ifMatch }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFolder(deserializeJSON(response.text) as JSON);
    }
    async deleteFolderById(folderId: string, options: DeleteFolderByIdOptionsArg = {} satisfies DeleteFolderByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "DELETE", params: { ["recursive"]: options.recursive }, headers: { ["if-match"]: options.ifMatch }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getFolderItems(folderId: string, options: GetFolderItemsOptionsArg = {} satisfies GetFolderItemsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/items") as string, { method: "GET", params: { ["fields"]: options.fields, ["usemarker"]: options.usemarker, ["marker"]: options.marker, ["offset"]: options.offset, ["limit"]: options.limit, ["sort"]: options.sort, ["direction"]: options.direction }, headers: { ["boxapi"]: options.boxapi }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeItems(deserializeJSON(response.text) as JSON);
    }
    async createFolder(requestBody: CreateFolderRequestBodyArg, options: CreateFolderOptionsArg = {} satisfies CreateFolderOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders") as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFolder(deserializeJSON(response.text) as JSON);
    }
    async copyFolder(folderId: string, requestBody: CopyFolderRequestBodyArg, options: CopyFolderOptionsArg = {} satisfies CopyFolderOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/copy") as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFolder(deserializeJSON(response.text) as JSON);
    }
}
