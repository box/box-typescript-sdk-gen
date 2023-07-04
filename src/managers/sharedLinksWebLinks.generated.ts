import { newSerializeWebLink } from "../schemas.generated.js";
import { newDeserializeWebLink } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { WebLink } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
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
    async getSharedItemWebLinks(queryParams: undefined | GetSharedItemWebLinksQueryParamsArg = {} satisfies GetSharedItemWebLinksQueryParamsArg, headers: GetSharedItemWebLinksHeadersArg): Promise<WebLink> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shared_items#web_links") as string, { method: "GET", params: toMap(queryParams), headers: toMap(headers), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeWebLink(deserializeJson(response.text));
    }
    async getWebLinkGetSharedLink(webLinkId: string, queryParams: GetWebLinkGetSharedLinkQueryParamsArg): Promise<WebLink> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#get_shared_link") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeWebLink(deserializeJson(response.text));
    }
    async updateWebLinkAddSharedLink(webLinkId: string, requestBody: UpdateWebLinkAddSharedLinkRequestBodyArg, queryParams: UpdateWebLinkAddSharedLinkQueryParamsArg): Promise<WebLink> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#add_shared_link") as string, { method: "PUT", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeWebLink(deserializeJson(response.text));
    }
    async updateWebLinkUpdateSharedLink(webLinkId: string, requestBody: UpdateWebLinkUpdateSharedLinkRequestBodyArg, queryParams: UpdateWebLinkUpdateSharedLinkQueryParamsArg): Promise<WebLink> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#update_shared_link") as string, { method: "PUT", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeWebLink(deserializeJson(response.text));
    }
    async updateWebLinkRemoveSharedLink(webLinkId: string, requestBody: UpdateWebLinkRemoveSharedLinkRequestBodyArg, queryParams: UpdateWebLinkRemoveSharedLinkQueryParamsArg): Promise<WebLink> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "#remove_shared_link") as string, { method: "PUT", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeWebLink(deserializeJson(response.text));
    }
}
export function newSerializeGetSharedItemWebLinksQueryParamsArg(val: GetSharedItemWebLinksQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetSharedItemWebLinksQueryParamsArg(val: any): GetSharedItemWebLinksQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetSharedItemWebLinksQueryParamsArg;
}
export function newSerializeGetSharedItemWebLinksHeadersArg(val: GetSharedItemWebLinksHeadersArg): Json {
    return { ["ifNoneMatch"]: val.ifNoneMatch, ["boxapi"]: val.boxapi };
}
export function newDeserializeGetSharedItemWebLinksHeadersArg(val: any): GetSharedItemWebLinksHeadersArg {
    const ifNoneMatch: undefined | string = isJson(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    const boxapi: string = val.boxapi;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi } satisfies GetSharedItemWebLinksHeadersArg;
}
export function newSerializeGetWebLinkGetSharedLinkQueryParamsArg(val: GetWebLinkGetSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetWebLinkGetSharedLinkQueryParamsArg(val: any): GetWebLinkGetSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies GetWebLinkGetSharedLinkQueryParamsArg;
}
export function newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField {
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
export function newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json {
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
export function newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = isJson(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview: undefined | boolean = isJson(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit: undefined | boolean = isJson(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField {
    const access: undefined | UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt: undefined | string = isJson(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions: undefined | UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions } satisfies UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField;
}
export function newSerializeUpdateWebLinkAddSharedLinkRequestBodyArg(val: UpdateWebLinkAddSharedLinkRequestBodyArg): Json {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArg(val: any): UpdateWebLinkAddSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink } satisfies UpdateWebLinkAddSharedLinkRequestBodyArg;
}
export function newSerializeUpdateWebLinkAddSharedLinkQueryParamsArg(val: UpdateWebLinkAddSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeUpdateWebLinkAddSharedLinkQueryParamsArg(val: any): UpdateWebLinkAddSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateWebLinkAddSharedLinkQueryParamsArg;
}
export function newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField {
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
export function newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json {
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
export function newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = isJson(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview: undefined | boolean = isJson(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit: undefined | boolean = isJson(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField {
    const access: undefined | UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt: undefined | string = isJson(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions: undefined | UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions } satisfies UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export function newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArg(val: UpdateWebLinkUpdateSharedLinkRequestBodyArg): Json {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArg(val: any): UpdateWebLinkUpdateSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink } satisfies UpdateWebLinkUpdateSharedLinkRequestBodyArg;
}
export function newSerializeUpdateWebLinkUpdateSharedLinkQueryParamsArg(val: UpdateWebLinkUpdateSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeUpdateWebLinkUpdateSharedLinkQueryParamsArg(val: any): UpdateWebLinkUpdateSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateWebLinkUpdateSharedLinkQueryParamsArg;
}
export function newSerializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val: UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField): Json {
    return {};
}
export function newDeserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField {
    return {} satisfies UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export function newSerializeUpdateWebLinkRemoveSharedLinkRequestBodyArg(val: UpdateWebLinkRemoveSharedLinkRequestBodyArg): Json {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function newDeserializeUpdateWebLinkRemoveSharedLinkRequestBodyArg(val: any): UpdateWebLinkRemoveSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink } satisfies UpdateWebLinkRemoveSharedLinkRequestBodyArg;
}
export function newSerializeUpdateWebLinkRemoveSharedLinkQueryParamsArg(val: UpdateWebLinkRemoveSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeUpdateWebLinkRemoveSharedLinkQueryParamsArg(val: any): UpdateWebLinkRemoveSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateWebLinkRemoveSharedLinkQueryParamsArg;
}
