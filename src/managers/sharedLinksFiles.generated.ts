import { File } from "../schemas.generated.js";
import { deserializeFile } from "../schemas.generated.js";
import { serializeFile } from "../schemas.generated.js";
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
export type SharedLinksFilesManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetSharedItemsOptionsArg {
    readonly ifNoneMatch?: string;
    readonly fields?: string;
}
export type PutFilesIdAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PutFilesIdAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface PutFilesIdAddSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: PutFilesIdAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: PutFilesIdAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface PutFilesIdAddSharedLinkRequestBodyArg {
    readonly sharedLink?: PutFilesIdAddSharedLinkRequestBodyArgSharedLinkField;
}
export type PutFilesIdUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PutFilesIdUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface PutFilesIdUpdateSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: PutFilesIdUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: PutFilesIdUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface PutFilesIdUpdateSharedLinkRequestBodyArg {
    readonly sharedLink?: PutFilesIdUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export interface PutFilesIdRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface PutFilesIdRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: PutFilesIdRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export class SharedLinksFilesManager {
    readonly auth!: SharedLinksFilesManagerAuthField;
    constructor(fields: Omit<SharedLinksFilesManager, "getSharedItems" | "getFilesIdGetSharedLink" | "putFilesIdAddSharedLink" | "putFilesIdUpdateSharedLink" | "putFilesIdRemoveSharedLink">) {
        Object.assign(this, fields);
    }
    async getSharedItems(boxapi: string, options: GetSharedItemsOptionsArg = {} satisfies GetSharedItemsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shared_items") as string, { method: "GET", params: { ["fields"]: options.fields }, headers: { ["if-none-match"]: options.ifNoneMatch, ["boxapi"]: boxapi }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFile(deserializeJSON(response.text) as JSON);
    }
    async getFilesIdGetSharedLink(fileId: string, fields: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#get_shared_link") as string, { method: "GET", params: { ["fields"]: fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFile(deserializeJSON(response.text) as JSON);
    }
    async putFilesIdAddSharedLink(fileId: string, fields: string, requestBody: PutFilesIdAddSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#add_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFile(deserializeJSON(response.text) as JSON);
    }
    async putFilesIdUpdateSharedLink(fileId: string, fields: string, requestBody: PutFilesIdUpdateSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#update_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFile(deserializeJSON(response.text) as JSON);
    }
    async putFilesIdRemoveSharedLink(fileId: string, fields: string, requestBody: PutFilesIdRemoveSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#remove_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFile(deserializeJSON(response.text) as JSON);
    }
}
