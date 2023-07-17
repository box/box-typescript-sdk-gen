import { serializeWebLink } from "../schemas.generated.js";
import { deserializeWebLink } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { WebLink } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { serializeJson } from "../json.js";
import { Json } from "../json.js";
import { deserializeJson } from "../json.js";
import { isJson } from "../json.js";
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
export interface GetWebLinkByIdHeadersArg {
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
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<WebLinksManager, "createWebLink" | "getWebLinkById" | "updateWebLinkById" | "deleteWebLinkById">) {
        Object.assign(this, fields);
    }
    async createWebLink(requestBody: CreateWebLinkRequestBodyArg): Promise<WebLink> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links") as string, { method: "POST", body: serializeJson(serializeCreateWebLinkRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebLink(deserializeJson(response.text));
    }
    async getWebLinkById(webLinkId: string, headers: undefined | GetWebLinkByIdHeadersArg = {} satisfies GetWebLinkByIdHeadersArg): Promise<WebLink> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId) as string, { method: "GET", headers: prepareParams(serializeGetWebLinkByIdHeadersArg(headers)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebLink(deserializeJson(response.text));
    }
    async updateWebLinkById(webLinkId: string, requestBody: UpdateWebLinkByIdRequestBodyArg): Promise<WebLink> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId) as string, { method: "PUT", body: serializeJson(serializeUpdateWebLinkByIdRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebLink(deserializeJson(response.text));
    }
    async deleteWebLinkById(webLinkId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function serializeCreateWebLinkRequestBodyArgParentField(val: CreateWebLinkRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function deserializeCreateWebLinkRequestBodyArgParentField(val: any): CreateWebLinkRequestBodyArgParentField {
    const id: string = val.id;
    return { id: id } satisfies CreateWebLinkRequestBodyArgParentField;
}
export function serializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val: CreateWebLinkRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function deserializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val: any): CreateWebLinkRequestBodyArgSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateWebLinkRequestBodyArgSharedLinkFieldAccessField\"";
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
export function serializeCreateWebLinkRequestBodyArgSharedLinkField(val: CreateWebLinkRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : serializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanity_name"]: val.vanityName, ["unshared_at"]: val.unsharedAt };
}
export function deserializeCreateWebLinkRequestBodyArgSharedLinkField(val: any): CreateWebLinkRequestBodyArgSharedLinkField {
    const access: undefined | CreateWebLinkRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : deserializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanity_name, "string") ? val.vanity_name : void 0;
    const unsharedAt: undefined | string = isJson(val.unshared_at, "string") ? val.unshared_at : void 0;
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt } satisfies CreateWebLinkRequestBodyArgSharedLinkField;
}
export function serializeCreateWebLinkRequestBodyArg(val: CreateWebLinkRequestBodyArg): Json {
    return { ["url"]: val.url, ["parent"]: serializeCreateWebLinkRequestBodyArgParentField(val.parent), ["name"]: val.name, ["description"]: val.description, ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeCreateWebLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function deserializeCreateWebLinkRequestBodyArg(val: any): CreateWebLinkRequestBodyArg {
    const url: string = val.url;
    const parent: CreateWebLinkRequestBodyArgParentField = deserializeCreateWebLinkRequestBodyArgParentField(val.parent);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const sharedLink: undefined | CreateWebLinkRequestBodyArgSharedLinkField = val.shared_link == void 0 ? void 0 : deserializeCreateWebLinkRequestBodyArgSharedLinkField(val.shared_link);
    return { url: url, parent: parent, name: name, description: description, sharedLink: sharedLink } satisfies CreateWebLinkRequestBodyArg;
}
export function serializeGetWebLinkByIdHeadersArg(val: GetWebLinkByIdHeadersArg): Json {
    return { ["boxapi"]: val.boxapi };
}
export function deserializeGetWebLinkByIdHeadersArg(val: any): GetWebLinkByIdHeadersArg {
    const boxapi: undefined | string = isJson(val.boxapi, "string") ? val.boxapi : void 0;
    return { boxapi: boxapi } satisfies GetWebLinkByIdHeadersArg;
}
export function serializeUpdateWebLinkByIdRequestBodyArgParentField(val: UpdateWebLinkByIdRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function deserializeUpdateWebLinkByIdRequestBodyArgParentField(val: any): UpdateWebLinkByIdRequestBodyArgParentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { id: id } satisfies UpdateWebLinkByIdRequestBodyArgParentField;
}
export function serializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val: UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField\"";
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
export function serializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val: UpdateWebLinkByIdRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanity_name"]: val.vanityName, ["unshared_at"]: val.unsharedAt };
}
export function deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val: any): UpdateWebLinkByIdRequestBodyArgSharedLinkField {
    const access: undefined | UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanity_name, "string") ? val.vanity_name : void 0;
    const unsharedAt: undefined | string = isJson(val.unshared_at, "string") ? val.unshared_at : void 0;
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt } satisfies UpdateWebLinkByIdRequestBodyArgSharedLinkField;
}
export function serializeUpdateWebLinkByIdRequestBodyArg(val: UpdateWebLinkByIdRequestBodyArg): Json {
    return { ["url"]: val.url, ["parent"]: val.parent == void 0 ? void 0 : serializeUpdateWebLinkByIdRequestBodyArgParentField(val.parent), ["name"]: val.name, ["description"]: val.description, ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function deserializeUpdateWebLinkByIdRequestBodyArg(val: any): UpdateWebLinkByIdRequestBodyArg {
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    const parent: undefined | UpdateWebLinkByIdRequestBodyArgParentField = val.parent == void 0 ? void 0 : deserializeUpdateWebLinkByIdRequestBodyArgParentField(val.parent);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const sharedLink: undefined | UpdateWebLinkByIdRequestBodyArgSharedLinkField = val.shared_link == void 0 ? void 0 : deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val.shared_link);
    return { url: url, parent: parent, name: name, description: description, sharedLink: sharedLink } satisfies UpdateWebLinkByIdRequestBodyArg;
}
