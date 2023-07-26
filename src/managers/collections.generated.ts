import { serializeCollections } from "../schemas.generated.js";
import { deserializeCollections } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeItems } from "../schemas.generated.js";
import { deserializeItems } from "../schemas.generated.js";
import { Collections } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Items } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
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
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collections") as string, { method: "GET", params: prepareParams(serializeGetCollectionsQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollections(deserializeJson(response.text));
    }
    async getCollectionItems(collectionId: string, queryParams: undefined | GetCollectionItemsQueryParamsArg = {} satisfies GetCollectionItemsQueryParamsArg): Promise<Items> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collections/", collectionId, "/items") as string, { method: "GET", params: prepareParams(serializeGetCollectionItemsQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeItems(deserializeJson(response.text));
    }
}
export function serializeGetCollectionsQueryParamsArg(val: GetCollectionsQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["offset"]: val.offset, ["limit"]: val.limit };
}
export function deserializeGetCollectionsQueryParamsArg(val: any): GetCollectionsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { fields: fields, offset: offset, limit: limit } satisfies GetCollectionsQueryParamsArg;
}
export function serializeGetCollectionItemsQueryParamsArg(val: GetCollectionItemsQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["offset"]: val.offset, ["limit"]: val.limit };
}
export function deserializeGetCollectionItemsQueryParamsArg(val: any): GetCollectionItemsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { fields: fields, offset: offset, limit: limit } satisfies GetCollectionItemsQueryParamsArg;
}
