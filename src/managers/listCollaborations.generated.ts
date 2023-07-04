import { newSerializeCollaborations } from "../schemas.generated.js";
import { newDeserializeCollaborations } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { Collaborations } from "../schemas.generated.js";
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
export interface GetFileCollaborationsQueryParamsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export interface GetFolderCollaborationsQueryParamsArg {
    readonly fields?: string;
}
export type GetCollaborationsQueryParamsArgStatusField = "pending";
export interface GetCollaborationsQueryParamsArg {
    readonly status: GetCollaborationsQueryParamsArgStatusField;
    readonly fields?: string;
    readonly offset?: number;
    readonly limit?: number;
}
export interface GetGroupCollaborationsQueryParamsArg {
    readonly limit?: number;
    readonly offset?: number;
}
export class ListCollaborationsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ListCollaborationsManager, "getFileCollaborations" | "getFolderCollaborations" | "getCollaborations" | "getGroupCollaborations">) {
        Object.assign(this, fields);
    }
    async getFileCollaborations(fileId: string, queryParams: undefined | GetFileCollaborationsQueryParamsArg = {} satisfies GetFileCollaborationsQueryParamsArg): Promise<Collaborations> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/collaborations") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeCollaborations(deserializeJson(response.text));
    }
    async getFolderCollaborations(folderId: string, queryParams: undefined | GetFolderCollaborationsQueryParamsArg = {} satisfies GetFolderCollaborationsQueryParamsArg): Promise<Collaborations> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/collaborations") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeCollaborations(deserializeJson(response.text));
    }
    async getCollaborations(queryParams: GetCollaborationsQueryParamsArg): Promise<Collaborations> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaborations") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeCollaborations(deserializeJson(response.text));
    }
    async getGroupCollaborations(groupId: string, queryParams: undefined | GetGroupCollaborationsQueryParamsArg = {} satisfies GetGroupCollaborationsQueryParamsArg): Promise<Collaborations> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId, "/collaborations") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeCollaborations(deserializeJson(response.text));
    }
}
export function newSerializeGetFileCollaborationsQueryParamsArg(val: GetFileCollaborationsQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["limit"]: val.limit, ["marker"]: val.marker };
}
export function newDeserializeGetFileCollaborationsQueryParamsArg(val: any): GetFileCollaborationsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    return { fields: fields, limit: limit, marker: marker } satisfies GetFileCollaborationsQueryParamsArg;
}
export function newSerializeGetFolderCollaborationsQueryParamsArg(val: GetFolderCollaborationsQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetFolderCollaborationsQueryParamsArg(val: any): GetFolderCollaborationsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetFolderCollaborationsQueryParamsArg;
}
export function newSerializeGetCollaborationsQueryParamsArgStatusField(val: GetCollaborationsQueryParamsArgStatusField): Json {
    return val;
}
export function newDeserializeGetCollaborationsQueryParamsArgStatusField(val: any): GetCollaborationsQueryParamsArgStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetCollaborationsQueryParamsArgStatusField\"";
    }
    if (val == "pending") {
        return "pending";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeGetCollaborationsQueryParamsArg(val: GetCollaborationsQueryParamsArg): Json {
    return { ["status"]: newSerializeGetCollaborationsQueryParamsArgStatusField(val.status), ["fields"]: val.fields, ["offset"]: val.offset, ["limit"]: val.limit };
}
export function newDeserializeGetCollaborationsQueryParamsArg(val: any): GetCollaborationsQueryParamsArg {
    const status: GetCollaborationsQueryParamsArgStatusField = newDeserializeGetCollaborationsQueryParamsArgStatusField(val.status);
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { status: status, fields: fields, offset: offset, limit: limit } satisfies GetCollaborationsQueryParamsArg;
}
export function newSerializeGetGroupCollaborationsQueryParamsArg(val: GetGroupCollaborationsQueryParamsArg): Json {
    return { ["limit"]: val.limit, ["offset"]: val.offset };
}
export function newDeserializeGetGroupCollaborationsQueryParamsArg(val: any): GetGroupCollaborationsQueryParamsArg {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    return { limit: limit, offset: offset } satisfies GetGroupCollaborationsQueryParamsArg;
}
