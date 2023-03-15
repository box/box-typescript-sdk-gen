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
import { CcgAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type CollectionsManagerAuthField = DeveloperTokenAuth | CcgAuth;
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
        return await deserializeCollections(await deserializeJson(response.text));
    }
    async getCollectionsIdItems(collectionId: string, options: GetCollectionsIdItemsOptionsArg = {} satisfies GetCollectionsIdItemsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collections/", collectionId, "/items") as string, { method: "GET", params: { ["fields"]: options.fields, ["offset"]: options.offset, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeItems(await deserializeJson(response.text));
    }
}
