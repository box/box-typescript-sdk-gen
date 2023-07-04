import { RecentItems } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetRecentItemsQueryParamsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export declare class RecentItemsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<RecentItemsManager, "getRecentItems">);
    getRecentItems(queryParams?: undefined | GetRecentItemsQueryParamsArg): Promise<RecentItems>;
}
export declare function newSerializeGetRecentItemsQueryParamsArg(val: GetRecentItemsQueryParamsArg): Json;
export declare function newDeserializeGetRecentItemsQueryParamsArg(val: any): GetRecentItemsQueryParamsArg;
