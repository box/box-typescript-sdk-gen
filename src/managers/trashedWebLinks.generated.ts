import { newSerializeTrashWebLinkRestored } from "../schemas.generated.js";
import { newDeserializeTrashWebLinkRestored } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeTrashWebLink } from "../schemas.generated.js";
import { newDeserializeTrashWebLink } from "../schemas.generated.js";
import { TrashWebLinkRestored } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { TrashWebLink } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export interface CreateWebLinkByIdRequestBodyArgParentField {
    readonly id?: string;
}
export interface CreateWebLinkByIdRequestBodyArg {
    readonly name?: string;
    readonly parent?: CreateWebLinkByIdRequestBodyArgParentField;
}
export interface CreateWebLinkByIdQueryParamsArg {
    readonly fields?: string;
}
export interface GetWebLinkTrashQueryParamsArg {
    readonly fields?: string;
}
export class TrashedWebLinksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedWebLinksManager, "createWebLinkById" | "getWebLinkTrash" | "deleteWebLinkTrash">) {
        Object.assign(this, fields);
    }
    async createWebLinkById(webLinkId: string, requestBody: CreateWebLinkByIdRequestBodyArg, queryParams: undefined | CreateWebLinkByIdQueryParamsArg = {} satisfies CreateWebLinkByIdQueryParamsArg): Promise<TrashWebLinkRestored> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId) as string, { method: "POST", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeTrashWebLinkRestored(deserializeJson(response.text));
    }
    async getWebLinkTrash(webLinkId: string, queryParams: undefined | GetWebLinkTrashQueryParamsArg = {} satisfies GetWebLinkTrashQueryParamsArg): Promise<TrashWebLink> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "/trash") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeTrashWebLink(deserializeJson(response.text));
    }
    async deleteWebLinkTrash(webLinkId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "/trash") as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function newSerializeCreateWebLinkByIdRequestBodyArgParentField(val: CreateWebLinkByIdRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function newDeserializeCreateWebLinkByIdRequestBodyArgParentField(val: any): CreateWebLinkByIdRequestBodyArgParentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { id: id } satisfies CreateWebLinkByIdRequestBodyArgParentField;
}
export function newSerializeCreateWebLinkByIdRequestBodyArg(val: CreateWebLinkByIdRequestBodyArg): Json {
    return { ["name"]: val.name, ["parent"]: val.parent == void 0 ? void 0 : newSerializeCreateWebLinkByIdRequestBodyArgParentField(val.parent) };
}
export function newDeserializeCreateWebLinkByIdRequestBodyArg(val: any): CreateWebLinkByIdRequestBodyArg {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const parent: undefined | CreateWebLinkByIdRequestBodyArgParentField = val.parent == void 0 ? void 0 : newDeserializeCreateWebLinkByIdRequestBodyArgParentField(val.parent);
    return { name: name, parent: parent } satisfies CreateWebLinkByIdRequestBodyArg;
}
export function newSerializeCreateWebLinkByIdQueryParamsArg(val: CreateWebLinkByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeCreateWebLinkByIdQueryParamsArg(val: any): CreateWebLinkByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies CreateWebLinkByIdQueryParamsArg;
}
export function newSerializeGetWebLinkTrashQueryParamsArg(val: GetWebLinkTrashQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetWebLinkTrashQueryParamsArg(val: any): GetWebLinkTrashQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetWebLinkTrashQueryParamsArg;
}
