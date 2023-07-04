import { newSerializeRecentItems } from "../schemas.generated.js";
import { newDeserializeRecentItems } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { RecentItems } from "../schemas.generated.js";
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
export interface GetRecentItemsQueryParamsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export class RecentItemsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<RecentItemsManager, "getRecentItems">) {
        Object.assign(this, fields);
    }
    async getRecentItems(queryParams: undefined | GetRecentItemsQueryParamsArg = {} satisfies GetRecentItemsQueryParamsArg): Promise<RecentItems> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/recent_items") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeRecentItems(deserializeJson(response.text));
    }
}
export function newSerializeGetRecentItemsQueryParamsArg(val: GetRecentItemsQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["limit"]: val.limit, ["marker"]: val.marker };
}
export function newDeserializeGetRecentItemsQueryParamsArg(val: any): GetRecentItemsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    return { fields: fields, limit: limit, marker: marker } satisfies GetRecentItemsQueryParamsArg;
}
