import { FolderFull } from "../schemas.generated.js";
import { deserializeFolderFull } from "../schemas.generated.js";
import { serializeFolderFull } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { TrashFolderRestored } from "../schemas.generated.js";
import { deserializeTrashFolderRestored } from "../schemas.generated.js";
import { serializeTrashFolderRestored } from "../schemas.generated.js";
import { TrashFolder } from "../schemas.generated.js";
import { deserializeTrashFolder } from "../schemas.generated.js";
import { serializeTrashFolder } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type TrashedFoldersManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
export interface GetFolderTrashOptionsArg {
    readonly fields?: string;
}
export class TrashedFoldersManager {
    readonly auth!: TrashedFoldersManagerAuthField;
    constructor(fields: Omit<TrashedFoldersManager, "getFolderById" | "restoreFolderFromTrash" | "updateFolderById" | "deleteFolderById" | "getFolderTrash" | "deleteFolderTrash">) {
        Object.assign(this, fields);
    }
    async getFolderById(folderId: string, options: GetFolderByIdOptionsArg = {} satisfies GetFolderByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "GET", params: { ["fields"]: options.fields }, headers: { ["if-none-match"]: options.ifNoneMatch, ["boxapi"]: options.boxapi }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
    async restoreFolderFromTrash(folderId: string, requestBody: RestoreFolderFromTrashRequestBodyArg, options: RestoreFolderFromTrashOptionsArg = {} satisfies RestoreFolderFromTrashOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeTrashFolderRestored(deserializeJson(response.text));
    }
    async updateFolderById(folderId: string, requestBody: UpdateFolderByIdRequestBodyArg, options: UpdateFolderByIdOptionsArg = {} satisfies UpdateFolderByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "PUT", params: { ["fields"]: options.fields }, headers: { ["if-match"]: options.ifMatch }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
    async deleteFolderById(folderId: string, options: DeleteFolderByIdOptionsArg = {} satisfies DeleteFolderByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "DELETE", params: { ["recursive"]: options.recursive }, headers: { ["if-match"]: options.ifMatch }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getFolderTrash(folderId: string, options: GetFolderTrashOptionsArg = {} satisfies GetFolderTrashOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/trash") as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeTrashFolder(deserializeJson(response.text));
    }
    async deleteFolderTrash(folderId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/trash") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
