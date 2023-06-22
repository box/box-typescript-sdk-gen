import { Collections } from "../schemas.generated.js";
import { deserializeCollections } from "../schemas.generated.js";
import { serializeCollections } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Items } from "../schemas.generated.js";
import { deserializeItems } from "../schemas.generated.js";
import { serializeItems } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export interface GetCollectionsOptionsArg {
    readonly fields?: string;
    readonly offset?: number;
    readonly limit?: number;
}
export interface GetCollectionItemsOptionsArg {
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
    async getCollections(options: GetCollectionsOptionsArg = {} satisfies GetCollectionsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collections") as string, { method: "GET", params: { ["fields"]: options.fields, ["offset"]: options.offset, ["limit"]: options.limit }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollections(deserializeJson(response.text));
    }
    async getCollectionItems(collectionId: string, options: GetCollectionItemsOptionsArg = {} satisfies GetCollectionItemsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collections/", collectionId, "/items") as string, { method: "GET", params: { ["fields"]: options.fields, ["offset"]: options.offset, ["limit"]: options.limit }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeItems(deserializeJson(response.text));
    }
}
