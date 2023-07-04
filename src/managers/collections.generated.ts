import { newSerializeCollections } from "../schemas.generated.js";
import { newDeserializeCollections } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeItems } from "../schemas.generated.js";
import { newDeserializeItems } from "../schemas.generated.js";
import { Collections } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Items } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export interface GetCollectionsQueryParamsArg {
    readonly fields?: string;
    readonly offset?: number;
    readonly limit?: number;
}
export interface GetCollectionItemsQueryParamsArg {
    readonly fields?: string;
    readonly offset?: number;
    readonly limit?: number;
}
export class CollectionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<CollectionsManager, "getCollections" | "getCollectionItems">) {
        Object.assign(this, fields);
    }
    async getCollections(queryParams: undefined | GetCollectionsQueryParamsArg = {} satisfies GetCollectionsQueryParamsArg): Promise<Collections> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collections") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeCollections(deserializeJson(response.text));
    }
    async getCollectionItems(collectionId: string, queryParams: undefined | GetCollectionItemsQueryParamsArg = {} satisfies GetCollectionItemsQueryParamsArg): Promise<Items> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collections/", collectionId, "/items") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeItems(deserializeJson(response.text));
    }
}
export function newSerializeGetCollectionsQueryParamsArg(val: GetCollectionsQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["offset"]: val.offset, ["limit"]: val.limit };
}
export function newDeserializeGetCollectionsQueryParamsArg(val: any): GetCollectionsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { fields: fields, offset: offset, limit: limit } satisfies GetCollectionsQueryParamsArg;
}
export function newSerializeGetCollectionItemsQueryParamsArg(val: GetCollectionItemsQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["offset"]: val.offset, ["limit"]: val.limit };
}
export function newDeserializeGetCollectionItemsQueryParamsArg(val: any): GetCollectionItemsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { fields: fields, offset: offset, limit: limit } satisfies GetCollectionItemsQueryParamsArg;
}
