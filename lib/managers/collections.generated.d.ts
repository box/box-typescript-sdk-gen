import { Collections } from "../schemas.generated.js";
import { Items } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
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
export declare class CollectionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<CollectionsManager, "getCollections" | "getCollectionItems">);
    getCollections(queryParams?: GetCollectionsQueryParamsArg): Promise<Collections>;
    getCollectionItems(collectionId: string, queryParams?: GetCollectionItemsQueryParamsArg): Promise<Items>;
}
export declare function serializeGetCollectionsQueryParamsArg(val: GetCollectionsQueryParamsArg): Json;
export declare function deserializeGetCollectionsQueryParamsArg(val: any): GetCollectionsQueryParamsArg;
export declare function serializeGetCollectionItemsQueryParamsArg(val: GetCollectionItemsQueryParamsArg): Json;
export declare function deserializeGetCollectionItemsQueryParamsArg(val: any): GetCollectionItemsQueryParamsArg;
