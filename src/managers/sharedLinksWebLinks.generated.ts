import { serializeWebLink } from "../schemas.generated.js";
import { deserializeWebLink } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { WebLink } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
import { isJson } from "../json.js";
export interface GetSharedItemWebLinksQueryParamsArg {
    readonly fields?: string;
}
export interface GetSharedItemWebLinksHeadersArg {
    readonly ifNoneMatch?: string;
    readonly boxapi: string;
}
export interface GetWebLinkGetSharedLinkQueryParamsArg {
    readonly fields: string;
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
export interface UpdateWebLinkAddSharedLinkQueryParamsArg {
    readonly fields: string;
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
export interface UpdateWebLinkUpdateSharedLinkQueryParamsArg {
    readonly fields: string;
}
export interface UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface UpdateWebLinkRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateWebLinkRemoveSharedLinkQueryParamsArg {
    readonly fields: string;
}
export class SharedLinksWebLinksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SharedLinksWebLinksManager, "getSharedItemWebLinks" | "getWebLinkGetSharedLink" | "updateWebLinkAddSharedLink" | "updateWebLinkUpdateSharedLink" | "updateWebLinkRemoveSharedLink">) {
        Object.assign(this, fields);
    }
    async getSharedItemWebLinks(queryParams: GetSharedItemWebLinksQueryParamsArg = {} satisfies GetSharedItemWebLinksQueryParamsArg, headers: GetSharedItemWebLinksHeadersArg): Promise<WebLink> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["if-none-match"]: toString(headers.ifNoneMatch), ["boxapi"]: toString(headers.boxapi) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shared_items#web_links") as string, { method: "GET", params: queryParamsMap, headers: headersMap, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebLink(deserializeJson(response.text));
    }
    async getWebLinkGetSharedLink(webLinkId: string, queryParams: GetWebLinkGetSharedLinkQueryParamsArg): Promise<WebLink> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#get_shared_link") as string, { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebLink(deserializeJson(response.text));
    }
    async updateWebLinkAddSharedLink(webLinkId: string, requestBody: UpdateWebLinkAddSharedLinkRequestBodyArg, queryParams: UpdateWebLinkAddSharedLinkQueryParamsArg): Promise<WebLink> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#add_shared_link") as string, { method: "PUT", params: queryParamsMap, body: serializeJson(serializeUpdateWebLinkAddSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebLink(deserializeJson(response.text));
    }
    async updateWebLinkUpdateSharedLink(webLinkId: string, requestBody: UpdateWebLinkUpdateSharedLinkRequestBodyArg, queryParams: UpdateWebLinkUpdateSharedLinkQueryParamsArg): Promise<WebLink> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#update_shared_link") as string, { method: "PUT", params: queryParamsMap, body: serializeJson(serializeUpdateWebLinkUpdateSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebLink(deserializeJson(response.text));
    }
    async updateWebLinkRemoveSharedLink(webLinkId: string, requestBody: UpdateWebLinkRemoveSharedLinkRequestBodyArg, queryParams: UpdateWebLinkRemoveSharedLinkQueryParamsArg): Promise<WebLink> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#remove_shared_link") as string, { method: "PUT", params: queryParamsMap, body: serializeJson(serializeUpdateWebLinkRemoveSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebLink(deserializeJson(response.text));
    }
}
export function serializeGetSharedItemWebLinksQueryParamsArg(val: GetSharedItemWebLinksQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeGetSharedItemWebLinksQueryParamsArg(val: any): GetSharedItemWebLinksQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetSharedItemWebLinksQueryParamsArg;
}
export function serializeGetSharedItemWebLinksHeadersArg(val: GetSharedItemWebLinksHeadersArg): Json {
    return { ["if-none-match"]: val.ifNoneMatch, ["boxapi"]: val.boxapi };
}
export function deserializeGetSharedItemWebLinksHeadersArg(val: any): GetSharedItemWebLinksHeadersArg {
    const ifNoneMatch: undefined | string = isJson(val["if-none-match"], "string") ? val["if-none-match"] : void 0;
    const boxapi: string = val.boxapi;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi } satisfies GetSharedItemWebLinksHeadersArg;
}
export function serializeGetWebLinkGetSharedLinkQueryParamsArg(val: GetWebLinkGetSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeGetWebLinkGetSharedLinkQueryParamsArg(val: any): GetWebLinkGetSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies GetWebLinkGetSharedLinkQueryParamsArg;
}
export function serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json {
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
export function deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = isJson(val.can_download, "boolean") ? val.can_download : void 0;
    const canPreview: undefined | boolean = isJson(val.can_preview, "boolean") ? val.can_preview : void 0;
    const canEdit: undefined | boolean = isJson(val.can_edit, "boolean") ? val.can_edit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanity_name"]: val.vanityName, ["unshared_at"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField {
    const access: undefined | UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanity_name, "string") ? val.vanity_name : void 0;
    const unsharedAt: undefined | string = isJson(val.unshared_at, "string") ? val.unshared_at : void 0;
    const permissions: undefined | UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions } satisfies UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField;
}
export function serializeUpdateWebLinkAddSharedLinkRequestBodyArg(val: UpdateWebLinkAddSharedLinkRequestBodyArg): Json {
    return { ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function deserializeUpdateWebLinkAddSharedLinkRequestBodyArg(val: any): UpdateWebLinkAddSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField = val.shared_link == void 0 ? void 0 : deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val.shared_link);
    return { sharedLink: sharedLink } satisfies UpdateWebLinkAddSharedLinkRequestBodyArg;
}
export function serializeUpdateWebLinkAddSharedLinkQueryParamsArg(val: UpdateWebLinkAddSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeUpdateWebLinkAddSharedLinkQueryParamsArg(val: any): UpdateWebLinkAddSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateWebLinkAddSharedLinkQueryParamsArg;
}
export function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json {
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
export function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = isJson(val.can_download, "boolean") ? val.can_download : void 0;
    const canPreview: undefined | boolean = isJson(val.can_preview, "boolean") ? val.can_preview : void 0;
    const canEdit: undefined | boolean = isJson(val.can_edit, "boolean") ? val.can_edit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanity_name"]: val.vanityName, ["unshared_at"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField {
    const access: undefined | UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanity_name, "string") ? val.vanity_name : void 0;
    const unsharedAt: undefined | string = isJson(val.unshared_at, "string") ? val.unshared_at : void 0;
    const permissions: undefined | UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions } satisfies UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArg(val: UpdateWebLinkUpdateSharedLinkRequestBodyArg): Json {
    return { ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArg(val: any): UpdateWebLinkUpdateSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField = val.shared_link == void 0 ? void 0 : deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val.shared_link);
    return { sharedLink: sharedLink } satisfies UpdateWebLinkUpdateSharedLinkRequestBodyArg;
}
export function serializeUpdateWebLinkUpdateSharedLinkQueryParamsArg(val: UpdateWebLinkUpdateSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeUpdateWebLinkUpdateSharedLinkQueryParamsArg(val: any): UpdateWebLinkUpdateSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateWebLinkUpdateSharedLinkQueryParamsArg;
}
export function serializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val: UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField): Json {
    return {};
}
export function deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField {
    return {} satisfies UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export function serializeUpdateWebLinkRemoveSharedLinkRequestBodyArg(val: UpdateWebLinkRemoveSharedLinkRequestBodyArg): Json {
    return { ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArg(val: any): UpdateWebLinkRemoveSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField = val.shared_link == void 0 ? void 0 : deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val.shared_link);
    return { sharedLink: sharedLink } satisfies UpdateWebLinkRemoveSharedLinkRequestBodyArg;
}
export function serializeUpdateWebLinkRemoveSharedLinkQueryParamsArg(val: UpdateWebLinkRemoveSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeUpdateWebLinkRemoveSharedLinkQueryParamsArg(val: any): UpdateWebLinkRemoveSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateWebLinkRemoveSharedLinkQueryParamsArg;
}
