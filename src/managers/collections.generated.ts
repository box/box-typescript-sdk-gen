import { Collections } from "../schemas.generated.js";
import { deserializeCollections } from "../schemas.generated.js";
import { serializeCollections } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Items } from "../schemas.generated.js";
import { deserializeItems } from "../schemas.generated.js";
import { serializeItems } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
export type CollectionsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetCollectionsOptionsArg {
    readonly fields?: string;
    readonly offset?: number;
    readonly limit?: number;
}
export interface GetCollectionsIdItemsOptionsArg {
    readonly fields?: string;
    readonly offset?: number;
    readonly limit?: number;
}
export class CollectionsManager {
    readonly auth!: CollectionsManagerAuthField;
    constructor(fields: Omit<CollectionsManager, "getCollections" | "getCollectionsIdItems">) {
        Object.assign(this, fields);
    }
    async getCollections(options: GetCollectionsOptionsArg = {} satisfies GetCollectionsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collections") as string, { method: "GET", params: { ["fields"]: options.fields, ["offset"]: options.offset, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeCollections(deserializeJSON(response.text) as JSON);
    }
    async getCollectionsIdItems(collectionId: string, options: GetCollectionsIdItemsOptionsArg = {} satisfies GetCollectionsIdItemsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collections/", collectionId, "/items") as string, { method: "GET", params: { ["fields"]: options.fields, ["offset"]: options.offset, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeItems(deserializeJSON(response.text) as JSON);
    }
}
