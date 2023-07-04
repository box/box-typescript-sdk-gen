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
    getCollections(queryParams?: undefined | GetCollectionsQueryParamsArg): Promise<Collections>;
    getCollectionItems(collectionId: string, queryParams?: undefined | GetCollectionItemsQueryParamsArg): Promise<Items>;
}
export declare function newSerializeGetCollectionsQueryParamsArg(val: GetCollectionsQueryParamsArg): Json;
export declare function newDeserializeGetCollectionsQueryParamsArg(val: any): GetCollectionsQueryParamsArg;
export declare function newSerializeGetCollectionItemsQueryParamsArg(val: GetCollectionItemsQueryParamsArg): Json;
export declare function newDeserializeGetCollectionItemsQueryParamsArg(val: any): GetCollectionItemsQueryParamsArg;
