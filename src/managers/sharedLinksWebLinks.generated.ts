import { WebLink } from "../schemas.generated.js";
import { deserializeWebLink } from "../schemas.generated.js";
import { serializeWebLink } from "../schemas.generated.js";
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
export interface GetSharedItemWebLinksOptionsArg {
    readonly ifNoneMatch?: string;
    readonly fields?: string;
}
export type UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateWebLinkAddSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField;
}
export type UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateWebLinkUpdateSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface UpdateWebLinkRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export class SharedLinksWebLinksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SharedLinksWebLinksManager, "getSharedItemWebLinks" | "getWebLinkGetSharedLink" | "updateWebLinkAddSharedLink" | "updateWebLinkUpdateSharedLink" | "updateWebLinkRemoveSharedLink">) {
        Object.assign(this, fields);
    }
    async getSharedItemWebLinks(boxapi: string, options: GetSharedItemWebLinksOptionsArg = {} satisfies GetSharedItemWebLinksOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shared_items#web_links") as string, { method: "GET", params: { ["fields"]: options.fields }, headers: { ["if-none-match"]: options.ifNoneMatch, ["boxapi"]: boxapi }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebLink(deserializeJson(response.text));
    }
    async getWebLinkGetSharedLink(webLinkId: string, fields: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#get_shared_link") as string, { method: "GET", params: { ["fields"]: fields }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebLink(deserializeJson(response.text));
    }
    async updateWebLinkAddSharedLink(webLinkId: string, fields: string, requestBody: UpdateWebLinkAddSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#add_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebLink(deserializeJson(response.text));
    }
    async updateWebLinkUpdateSharedLink(webLinkId: string, fields: string, requestBody: UpdateWebLinkUpdateSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#update_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebLink(deserializeJson(response.text));
    }
    async updateWebLinkRemoveSharedLink(webLinkId: string, fields: string, requestBody: UpdateWebLinkRemoveSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#remove_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebLink(deserializeJson(response.text));
    }
}
