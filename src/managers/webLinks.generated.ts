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
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeWebLink(deserializeJson(response.text));
    }
    async getWebLinkById(webLinkId: string, headers: undefined | GetWebLinkByIdHeadersArg = {} satisfies GetWebLinkByIdHeadersArg): Promise<WebLink> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId) as string, { method: "GET", headers: toMap(headers), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeWebLink(deserializeJson(response.text));
    }
    async updateWebLinkById(webLinkId: string, requestBody: UpdateWebLinkByIdRequestBodyArg): Promise<WebLink> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeWebLink(deserializeJson(response.text));
    }
    async deleteWebLinkById(webLinkId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function newSerializeCreateWebLinkRequestBodyArgParentField(val: CreateWebLinkRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function newDeserializeCreateWebLinkRequestBodyArgParentField(val: any): CreateWebLinkRequestBodyArgParentField {
    const id: string = val.id;
    return { id: id } satisfies CreateWebLinkRequestBodyArgParentField;
}
export function newSerializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val: CreateWebLinkRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function newDeserializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val: any): CreateWebLinkRequestBodyArgSharedLinkFieldAccessField {
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
export function newSerializeCreateWebLinkRequestBodyArgSharedLinkField(val: CreateWebLinkRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt };
}
export function newDeserializeCreateWebLinkRequestBodyArgSharedLinkField(val: any): CreateWebLinkRequestBodyArgSharedLinkField {
    const access: undefined | CreateWebLinkRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : newDeserializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt: undefined | string = isJson(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt } satisfies CreateWebLinkRequestBodyArgSharedLinkField;
}
export function newSerializeCreateWebLinkRequestBodyArg(val: CreateWebLinkRequestBodyArg): Json {
    return { ["url"]: val.url, ["parent"]: newSerializeCreateWebLinkRequestBodyArgParentField(val.parent), ["name"]: val.name, ["description"]: val.description, ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeCreateWebLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function newDeserializeCreateWebLinkRequestBodyArg(val: any): CreateWebLinkRequestBodyArg {
    const url: string = val.url;
    const parent: CreateWebLinkRequestBodyArgParentField = newDeserializeCreateWebLinkRequestBodyArgParentField(val.parent);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const sharedLink: undefined | CreateWebLinkRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : newDeserializeCreateWebLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { url: url, parent: parent, name: name, description: description, sharedLink: sharedLink } satisfies CreateWebLinkRequestBodyArg;
}
export function newSerializeGetWebLinkByIdHeadersArg(val: GetWebLinkByIdHeadersArg): Json {
    return { ["boxapi"]: val.boxapi };
}
export function newDeserializeGetWebLinkByIdHeadersArg(val: any): GetWebLinkByIdHeadersArg {
    const boxapi: undefined | string = isJson(val.boxapi, "string") ? val.boxapi : void 0;
    return { boxapi: boxapi } satisfies GetWebLinkByIdHeadersArg;
}
export function newSerializeUpdateWebLinkByIdRequestBodyArgParentField(val: UpdateWebLinkByIdRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function newDeserializeUpdateWebLinkByIdRequestBodyArgParentField(val: any): UpdateWebLinkByIdRequestBodyArgParentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { id: id } satisfies UpdateWebLinkByIdRequestBodyArgParentField;
}
export function newSerializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val: UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function newDeserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField {
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
export function newSerializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val: UpdateWebLinkByIdRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt };
}
export function newDeserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val: any): UpdateWebLinkByIdRequestBodyArgSharedLinkField {
    const access: undefined | UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : newDeserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt: undefined | string = isJson(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt } satisfies UpdateWebLinkByIdRequestBodyArgSharedLinkField;
}
export function newSerializeUpdateWebLinkByIdRequestBodyArg(val: UpdateWebLinkByIdRequestBodyArg): Json {
    return { ["url"]: val.url, ["parent"]: val.parent == void 0 ? void 0 : newSerializeUpdateWebLinkByIdRequestBodyArgParentField(val.parent), ["name"]: val.name, ["description"]: val.description, ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function newDeserializeUpdateWebLinkByIdRequestBodyArg(val: any): UpdateWebLinkByIdRequestBodyArg {
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    const parent: undefined | UpdateWebLinkByIdRequestBodyArgParentField = val.parent == void 0 ? void 0 : newDeserializeUpdateWebLinkByIdRequestBodyArgParentField(val.parent);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const sharedLink: undefined | UpdateWebLinkByIdRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val.sharedLink);
    return { url: url, parent: parent, name: name, description: description, sharedLink: sharedLink } satisfies UpdateWebLinkByIdRequestBodyArg;
}
