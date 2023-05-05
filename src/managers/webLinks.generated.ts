import { WebLink } from "../schemas.generated.js";
import { deserializeWebLink } from "../schemas.generated.js";
import { serializeWebLink } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type WebLinksManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface CreateWebLinkRequestBodyArgParentField {
    readonly id: string;
}
export type CreateWebLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface CreateWebLinkRequestBodyArgSharedLinkField {
    readonly access?: CreateWebLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
}
export interface CreateWebLinkRequestBodyArg {
    readonly url: string;
    readonly parent: CreateWebLinkRequestBodyArgParentField;
    readonly name?: string;
    readonly description?: string;
    readonly sharedLink?: CreateWebLinkRequestBodyArgSharedLinkField;
}
export interface GetWebLinkByIdOptionsArg {
    readonly boxapi?: string;
}
export interface UpdateWebLinkByIdRequestBodyArgParentField {
    readonly id?: string;
}
export type UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateWebLinkByIdRequestBodyArgSharedLinkField {
    readonly access?: UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
}
export interface UpdateWebLinkByIdRequestBodyArg {
    readonly url?: string;
    readonly parent?: UpdateWebLinkByIdRequestBodyArgParentField;
    readonly name?: string;
    readonly description?: string;
    readonly sharedLink?: UpdateWebLinkByIdRequestBodyArgSharedLinkField;
}
export class WebLinksManager {
    readonly auth!: WebLinksManagerAuthField;
    constructor(fields: Omit<WebLinksManager, "createWebLink" | "getWebLinkById" | "updateWebLinkById" | "deleteWebLinkById">) {
        Object.assign(this, fields);
    }
    async createWebLink(requestBody: CreateWebLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeWebLink(deserializeJson(response.text));
    }
    async getWebLinkById(webLinkId: string, options: GetWebLinkByIdOptionsArg = {} satisfies GetWebLinkByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId) as string, { method: "GET", headers: { ["boxapi"]: options.boxapi }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeWebLink(deserializeJson(response.text));
    }
    async updateWebLinkById(webLinkId: string, requestBody: UpdateWebLinkByIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeWebLink(deserializeJson(response.text));
    }
    async deleteWebLinkById(webLinkId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
