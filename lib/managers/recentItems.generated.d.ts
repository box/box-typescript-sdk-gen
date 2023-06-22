import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface GetRecentItemsOptionsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export declare class RecentItemsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<RecentItemsManager, "getRecentItems">);
    getRecentItems(options?: GetRecentItemsOptionsArg): Promise<any>;
}
