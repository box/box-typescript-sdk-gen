import { FileFull } from "../schemas.generated.js";
import { deserializeFileFull } from "../schemas.generated.js";
import { serializeFileFull } from "../schemas.generated.js";
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
export interface GetSharedItemsOptionsArg {
    readonly ifNoneMatch?: string;
    readonly fields?: string;
}
export type UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateFileAddSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFileAddSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFileAddSharedLinkRequestBodyArgSharedLinkField;
}
export type UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFileUpdateSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface UpdateFileRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export class SharedLinksFilesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SharedLinksFilesManager, "getSharedItems" | "getFileGetSharedLink" | "updateFileAddSharedLink" | "updateFileUpdateSharedLink" | "updateFileRemoveSharedLink">) {
        Object.assign(this, fields);
    }
    async getSharedItems(boxapi: string, options: GetSharedItemsOptionsArg = {} satisfies GetSharedItemsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shared_items") as string, { method: "GET", params: { ["fields"]: options.fields }, headers: { ["if-none-match"]: options.ifNoneMatch, ["boxapi"]: boxapi }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileFull(deserializeJson(response.text));
    }
    async getFileGetSharedLink(fileId: string, fields: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#get_shared_link") as string, { method: "GET", params: { ["fields"]: fields }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileFull(deserializeJson(response.text));
    }
    async updateFileAddSharedLink(fileId: string, fields: string, requestBody: UpdateFileAddSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#add_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileFull(deserializeJson(response.text));
    }
    async updateFileUpdateSharedLink(fileId: string, fields: string, requestBody: UpdateFileUpdateSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#update_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileFull(deserializeJson(response.text));
    }
    async updateFileRemoveSharedLink(fileId: string, fields: string, requestBody: UpdateFileRemoveSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#remove_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileFull(deserializeJson(response.text));
    }
}
