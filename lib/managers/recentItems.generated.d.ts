import { RecentItems } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface GetRecentItemsQueryParamsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export declare class GetRecentItemsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetRecentItemsHeadersArg);
}
export declare class RecentItemsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<RecentItemsManager, "getRecentItems">);
    getRecentItems(queryParams?: GetRecentItemsQueryParamsArg, headers?: GetRecentItemsHeadersArg): Promise<RecentItems>;
}
