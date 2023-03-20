import { RecentItems } from "../schemas.generated.js";
import { deserializeRecentItems } from "../schemas.generated.js";
import { serializeRecentItems } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type RecentItemsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetRecentItemsOptionsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export class RecentItemsManager {
    readonly auth!: RecentItemsManagerAuthField;
    constructor(fields: Omit<RecentItemsManager, "getRecentItems">) {
        Object.assign(this, fields);
    }
    async getRecentItems(options: GetRecentItemsOptionsArg = {} satisfies GetRecentItemsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/recent_items") as string, { method: "GET", params: { ["fields"]: options.fields, ["limit"]: options.limit, ["marker"]: options.marker }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeRecentItems(deserializeJSON(response.text) as JSON);
    }
}
