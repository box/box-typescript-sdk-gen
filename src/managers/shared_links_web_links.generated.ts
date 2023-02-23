import { WebLink } from "../schemas.generated.js";
import { deserializeWebLink } from "../schemas.generated.js";
import { serializeWebLink } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
export type SharedLinksWebLinksManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetSharedItemsWebLinksOptionsArg {
    readonly ifNoneMatch?: string;
    readonly fields?: string;
}
export type PutWebLinksIdAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PutWebLinksIdAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface PutWebLinksIdAddSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: PutWebLinksIdAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: PutWebLinksIdAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface PutWebLinksIdAddSharedLinkRequestBodyArg {
    readonly sharedLink?: PutWebLinksIdAddSharedLinkRequestBodyArgSharedLinkField;
}
export type PutWebLinksIdUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PutWebLinksIdUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface PutWebLinksIdUpdateSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: PutWebLinksIdUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: PutWebLinksIdUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface PutWebLinksIdUpdateSharedLinkRequestBodyArg {
    readonly sharedLink?: PutWebLinksIdUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export interface PutWebLinksIdRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface PutWebLinksIdRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: PutWebLinksIdRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export class SharedLinksWebLinksManager {
    readonly auth!: SharedLinksWebLinksManagerAuthField;
    constructor(fields: Omit<SharedLinksWebLinksManager, "getSharedItemsWebLinks" | "getWebLinksIdGetSharedLink" | "putWebLinksIdAddSharedLink" | "putWebLinksIdUpdateSharedLink" | "putWebLinksIdRemoveSharedLink">) {
        Object.assign(this, fields);
    }
    async getSharedItemsWebLinks(boxapi: string, options: GetSharedItemsWebLinksOptionsArg = {} satisfies GetSharedItemsWebLinksOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shared_items#web_links") as string, { method: "GET", params: { ["fields"]: options.fields }, headers: { ["if-none-match"]: options.ifNoneMatch, ["boxapi"]: boxapi }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWebLink(deserializeJSON(response.text) as JSON);
    }
    async getWebLinksIdGetSharedLink(webLinkId: string, fields: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#get_shared_link") as string, { method: "GET", params: { ["fields"]: fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWebLink(deserializeJSON(response.text) as JSON);
    }
    async putWebLinksIdAddSharedLink(webLinkId: string, fields: string, requestBody: PutWebLinksIdAddSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#add_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWebLink(deserializeJSON(response.text) as JSON);
    }
    async putWebLinksIdUpdateSharedLink(webLinkId: string, fields: string, requestBody: PutWebLinksIdUpdateSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#update_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWebLink(deserializeJSON(response.text) as JSON);
    }
    async putWebLinksIdRemoveSharedLink(webLinkId: string, fields: string, requestBody: PutWebLinksIdRemoveSharedLinkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#remove_shared_link") as string, { method: "PUT", params: { ["fields"]: fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWebLink(deserializeJSON(response.text) as JSON);
    }
}
