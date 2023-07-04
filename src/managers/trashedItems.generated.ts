import { newSerializeItems } from "../schemas.generated.js";
import { newDeserializeItems } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { Items } from "../schemas.generated.js";
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
export type GetFolderTrashItemsQueryParamsArgDirectionField = "ASC" | "DESC";
export type GetFolderTrashItemsQueryParamsArgSortField = "name" | "date" | "size";
export interface GetFolderTrashItemsQueryParamsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
    readonly usemarker?: boolean;
    readonly marker?: string;
    readonly direction?: GetFolderTrashItemsQueryParamsArgDirectionField;
    readonly sort?: GetFolderTrashItemsQueryParamsArgSortField;
}
export class TrashedItemsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedItemsManager, "getFolderTrashItems">) {
        Object.assign(this, fields);
    }
    async getFolderTrashItems(queryParams: undefined | GetFolderTrashItemsQueryParamsArg = {} satisfies GetFolderTrashItemsQueryParamsArg): Promise<Items> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/trash/items") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeItems(deserializeJson(response.text));
    }
}
export function newSerializeGetFolderTrashItemsQueryParamsArgDirectionField(val: GetFolderTrashItemsQueryParamsArgDirectionField): Json {
    return val;
}
export function newDeserializeGetFolderTrashItemsQueryParamsArgDirectionField(val: any): GetFolderTrashItemsQueryParamsArgDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetFolderTrashItemsQueryParamsArgDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeGetFolderTrashItemsQueryParamsArgSortField(val: GetFolderTrashItemsQueryParamsArgSortField): Json {
    return val;
}
export function newDeserializeGetFolderTrashItemsQueryParamsArgSortField(val: any): GetFolderTrashItemsQueryParamsArgSortField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetFolderTrashItemsQueryParamsArgSortField\"";
    }
    if (val == "name") {
        return "name";
    }
    if (val == "date") {
        return "date";
    }
    if (val == "size") {
        return "size";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeGetFolderTrashItemsQueryParamsArg(val: GetFolderTrashItemsQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["limit"]: val.limit, ["offset"]: val.offset, ["usemarker"]: val.usemarker, ["marker"]: val.marker, ["direction"]: val.direction == void 0 ? void 0 : newSerializeGetFolderTrashItemsQueryParamsArgDirectionField(val.direction), ["sort"]: val.sort == void 0 ? void 0 : newSerializeGetFolderTrashItemsQueryParamsArgSortField(val.sort) };
}
export function newDeserializeGetFolderTrashItemsQueryParamsArg(val: any): GetFolderTrashItemsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const usemarker: undefined | boolean = isJson(val.usemarker, "boolean") ? val.usemarker : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const direction: undefined | GetFolderTrashItemsQueryParamsArgDirectionField = val.direction == void 0 ? void 0 : newDeserializeGetFolderTrashItemsQueryParamsArgDirectionField(val.direction);
    const sort: undefined | GetFolderTrashItemsQueryParamsArgSortField = val.sort == void 0 ? void 0 : newDeserializeGetFolderTrashItemsQueryParamsArgSortField(val.sort);
    return { fields: fields, limit: limit, offset: offset, usemarker: usemarker, marker: marker, direction: direction, sort: sort } satisfies GetFolderTrashItemsQueryParamsArg;
}
