import { TrashWebLinkRestored } from "../schemas.generated.js";
import { deserializeTrashWebLinkRestored } from "../schemas.generated.js";
import { serializeTrashWebLinkRestored } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { TrashWebLink } from "../schemas.generated.js";
import { deserializeTrashWebLink } from "../schemas.generated.js";
import { serializeTrashWebLink } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type TrashedWebLinksManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface CreateWebLinkByIdRequestBodyArgParentField {
    readonly id?: string;
}
export interface CreateWebLinkByIdRequestBodyArg {
    readonly name?: string;
    readonly parent?: CreateWebLinkByIdRequestBodyArgParentField;
}
export interface CreateWebLinkByIdOptionsArg {
    readonly fields?: string;
}
export interface GetWebLinkTrashOptionsArg {
    readonly fields?: string;
}
export class TrashedWebLinksManager {
    readonly auth!: TrashedWebLinksManagerAuthField;
    constructor(fields: Omit<TrashedWebLinksManager, "createWebLinkById" | "getWebLinkTrash" | "deleteWebLinkTrash">) {
        Object.assign(this, fields);
    }
    async createWebLinkById(webLinkId: string, requestBody: CreateWebLinkByIdRequestBodyArg, options: CreateWebLinkByIdOptionsArg = {} satisfies CreateWebLinkByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId) as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeTrashWebLinkRestored(deserializeJson(response.text));
    }
    async getWebLinkTrash(webLinkId: string, options: GetWebLinkTrashOptionsArg = {} satisfies GetWebLinkTrashOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "/trash") as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeTrashWebLink(deserializeJson(response.text));
    }
    async deleteWebLinkTrash(webLinkId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "/trash") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
