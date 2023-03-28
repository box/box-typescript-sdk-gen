import { Folder } from "../schemas.generated.js";
import { deserializeFolder } from "../schemas.generated.js";
import { serializeFolder } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type SharedLinksFoldersManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetSharedItemsFoldersOptionsArg {
    readonly ifNoneMatch?: string;
    readonly fields?: string;
}
export type PutFoldersIdAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PutFoldersIdAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface PutFoldersIdAddSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: PutFoldersIdAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: PutFoldersIdAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface PutFoldersIdAddSharedLinkRequestBodyArg {
    readonly sharedLink?: PutFoldersIdAddSharedLinkRequestBodyArgSharedLinkField;
}
export type PutFoldersIdUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PutFoldersIdUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface PutFoldersIdUpdateSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: PutFoldersIdUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: PutFoldersIdUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface PutFoldersIdUpdateSharedLinkRequestBodyArg {
    readonly sharedLink?: PutFoldersIdUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export interface PutFoldersIdRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface PutFoldersIdRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: PutFoldersIdRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export class SharedLinksFoldersManager {
    readonly auth!: SharedLinksFoldersManagerAuthField;
    constructor(fields: Omit<SharedLinksFoldersManager, "getSharedItemsFolders" | "getFoldersIdGetSharedLink" | "putFoldersIdAddSharedLink" | "putFoldersIdUpdateSharedLink" | "putFoldersIdRemoveSharedLink">) {
        Object.assign(this, fields);
    }
    async getSharedItemsFolders(boxapi: string, options: GetSharedItemsFoldersOptionsArg = {} satisfies GetSharedItemsFoldersOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shared_items#folders") as string, { method: "GET", params: { ["fields"]: options.fields }, headers: { ["if-none-match"]: options.ifNoneMatch, ["boxapi"]: boxapi }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFolder(deserializeJSON(response.text) as JSON);
    }
    async getFoldersIdGetSharedLink(folderId: string, fields: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "#get_shared_link") as string, { method: "GET", params: { ["fields"]: fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFolder(deserializeJSON(response.text) as JSON);
    }
    async putFoldersIdAddSharedLink(folderId: string, fields: string, requestBody: PutFoldersIdAddSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "#add_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFolder(deserializeJSON(response.text) as JSON);
    }
    async putFoldersIdUpdateSharedLink(folderId: string, fields: string, requestBody: PutFoldersIdUpdateSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "#update_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFolder(deserializeJSON(response.text) as JSON);
    }
    async putFoldersIdRemoveSharedLink(folderId: string, fields: string, requestBody: PutFoldersIdRemoveSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "#remove_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFolder(deserializeJSON(response.text) as JSON);
    }
}
