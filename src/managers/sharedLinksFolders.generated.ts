import { FolderFull } from "../schemas.generated.js";
import { deserializeFolderFull } from "../schemas.generated.js";
import { serializeFolderFull } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export interface GetSharedItemFoldersOptionsArg {
    readonly ifNoneMatch?: string;
    readonly fields?: string;
}
export type UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFolderAddSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField;
}
export type UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFolderUpdateSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface UpdateFolderRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export class SharedLinksFoldersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SharedLinksFoldersManager, "getSharedItemFolders" | "getFolderGetSharedLink" | "updateFolderAddSharedLink" | "updateFolderUpdateSharedLink" | "updateFolderRemoveSharedLink">) {
        Object.assign(this, fields);
    }
    async getSharedItemFolders(boxapi: string, options: GetSharedItemFoldersOptionsArg = {} satisfies GetSharedItemFoldersOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shared_items#folders") as string, { method: "GET", params: { ["fields"]: options.fields }, headers: { ["if-none-match"]: options.ifNoneMatch, ["boxapi"]: boxapi }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
    async getFolderGetSharedLink(folderId: string, fields: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "#get_shared_link") as string, { method: "GET", params: { ["fields"]: fields }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
    async updateFolderAddSharedLink(folderId: string, fields: string, requestBody: UpdateFolderAddSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "#add_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
    async updateFolderUpdateSharedLink(folderId: string, fields: string, requestBody: UpdateFolderUpdateSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "#update_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
    async updateFolderRemoveSharedLink(folderId: string, fields: string, requestBody: UpdateFolderRemoveSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "#remove_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
}
