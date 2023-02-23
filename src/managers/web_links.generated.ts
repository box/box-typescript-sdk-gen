import { WebLink } from "../schemas.generated.js";
import { deserializeWebLink } from "../schemas.generated.js";
import { serializeWebLink } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { TrashWebLinkRestored } from "../schemas.generated.js";
import { deserializeTrashWebLinkRestored } from "../schemas.generated.js";
import { serializeTrashWebLinkRestored } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
export type WebLinksManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface PostWebLinksRequestBodyArgParentField {
    readonly id: string;
}
export type PostWebLinksRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PostWebLinksRequestBodyArgSharedLinkField {
    readonly access?: PostWebLinksRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
}
export interface PostWebLinksRequestBodyArg {
    readonly url: string;
    readonly parent: PostWebLinksRequestBodyArgParentField;
    readonly name?: string;
    readonly description?: string;
    readonly sharedLink?: PostWebLinksRequestBodyArgSharedLinkField;
}
export interface GetWebLinksIdOptionsArg {
    readonly boxapi?: string;
}
export interface PostWebLinksIdRequestBodyArgParentField {
    readonly id?: string;
}
export interface PostWebLinksIdRequestBodyArg {
    readonly name?: string;
    readonly parent?: PostWebLinksIdRequestBodyArgParentField;
}
export interface PostWebLinksIdOptionsArg {
    readonly fields?: string;
}
export interface PutWebLinksIdRequestBodyArgParentField {
    readonly id?: string;
}
export type PutWebLinksIdRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PutWebLinksIdRequestBodyArgSharedLinkField {
    readonly access?: PutWebLinksIdRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
}
export interface PutWebLinksIdRequestBodyArg {
    readonly url?: string;
    readonly parent?: PutWebLinksIdRequestBodyArgParentField;
    readonly name?: string;
    readonly description?: string;
    readonly sharedLink?: PutWebLinksIdRequestBodyArgSharedLinkField;
}
export class WebLinksManager {
    readonly auth!: WebLinksManagerAuthField;
    constructor(fields: Omit<WebLinksManager, "postWebLinks" | "getWebLinksId" | "postWebLinksId" | "putWebLinksId" | "deleteWebLinksId">) {
        Object.assign(this, fields);
    }
    async postWebLinks(requestBody: PostWebLinksRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWebLink(deserializeJSON(response.text) as JSON);
    }
    async getWebLinksId(webLinkId: string, options: GetWebLinksIdOptionsArg = {} satisfies GetWebLinksIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId) as string, { method: "GET", headers: { ["boxapi"]: options.boxapi }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWebLink(deserializeJSON(response.text) as JSON);
    }
    async postWebLinksId(webLinkId: string, requestBody: PostWebLinksIdRequestBodyArg, options: PostWebLinksIdOptionsArg = {} satisfies PostWebLinksIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId) as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTrashWebLinkRestored(deserializeJSON(response.text) as JSON);
    }
    async putWebLinksId(webLinkId: string, requestBody: PutWebLinksIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId) as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWebLink(deserializeJSON(response.text) as JSON);
    }
    async deleteWebLinksId(webLinkId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
