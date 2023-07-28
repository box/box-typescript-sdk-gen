import { serializeCollaborations } from "../schemas.generated.js";
import { deserializeCollaborations } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { Collaborations } from "../schemas.generated.js";
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
    async getFileCollaborations(fileId: string, queryParams: GetFileCollaborationsQueryParamsArg = {} satisfies GetFileCollaborationsQueryParamsArg): Promise<Collaborations> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields), ["limit"]: toString(queryParams.limit), ["marker"]: toString(queryParams.marker) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/collaborations") as string, { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborations(deserializeJson(response.text));
    }
    async getFolderCollaborations(folderId: string, queryParams: GetFolderCollaborationsQueryParamsArg = {} satisfies GetFolderCollaborationsQueryParamsArg): Promise<Collaborations> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/collaborations") as string, { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborations(deserializeJson(response.text));
    }
    async getCollaborations(queryParams: GetCollaborationsQueryParamsArg): Promise<Collaborations> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["status"]: toString(queryParams.status), ["fields"]: toString(queryParams.fields), ["offset"]: toString(queryParams.offset), ["limit"]: toString(queryParams.limit) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaborations") as string, { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborations(deserializeJson(response.text));
    }
    async getGroupCollaborations(groupId: string, queryParams: GetGroupCollaborationsQueryParamsArg = {} satisfies GetGroupCollaborationsQueryParamsArg): Promise<Collaborations> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["limit"]: toString(queryParams.limit), ["offset"]: toString(queryParams.offset) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId, "/collaborations") as string, { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborations(deserializeJson(response.text));
    }
}
export function serializeGetFileCollaborationsQueryParamsArg(val: GetFileCollaborationsQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["limit"]: val.limit, ["marker"]: val.marker };
}
export function deserializeGetFileCollaborationsQueryParamsArg(val: any): GetFileCollaborationsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    return { fields: fields, limit: limit, marker: marker } satisfies GetFileCollaborationsQueryParamsArg;
}
export function serializeGetFolderCollaborationsQueryParamsArg(val: GetFolderCollaborationsQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeGetFolderCollaborationsQueryParamsArg(val: any): GetFolderCollaborationsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetFolderCollaborationsQueryParamsArg;
}
export function serializeGetCollaborationsQueryParamsArgStatusField(val: GetCollaborationsQueryParamsArgStatusField): Json {
    return val;
}
export function deserializeGetCollaborationsQueryParamsArgStatusField(val: any): GetCollaborationsQueryParamsArgStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetCollaborationsQueryParamsArgStatusField\"";
    }
    if (val == "pending") {
        return "pending";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetCollaborationsQueryParamsArg(val: GetCollaborationsQueryParamsArg): Json {
    return { ["status"]: serializeGetCollaborationsQueryParamsArgStatusField(val.status), ["fields"]: val.fields, ["offset"]: val.offset, ["limit"]: val.limit };
}
export function deserializeGetCollaborationsQueryParamsArg(val: any): GetCollaborationsQueryParamsArg {
    const status: GetCollaborationsQueryParamsArgStatusField = deserializeGetCollaborationsQueryParamsArgStatusField(val.status);
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { status: status, fields: fields, offset: offset, limit: limit } satisfies GetCollaborationsQueryParamsArg;
}
export function serializeGetGroupCollaborationsQueryParamsArg(val: GetGroupCollaborationsQueryParamsArg): Json {
    return { ["limit"]: val.limit, ["offset"]: val.offset };
}
export function deserializeGetGroupCollaborationsQueryParamsArg(val: any): GetGroupCollaborationsQueryParamsArg {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    return { limit: limit, offset: offset } satisfies GetGroupCollaborationsQueryParamsArg;
}
