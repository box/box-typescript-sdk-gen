import { Collections } from "../schemas.generated.js";
import { Items } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface GetCollectionsQueryParamsArg {
    readonly fields?: string;
    readonly offset?: number;
    readonly limit?: number;
}
export declare class GetCollectionsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetCollectionsHeadersArg);
}
export interface GetCollectionItemsQueryParamsArg {
    readonly fields?: string;
    readonly offset?: number;
    readonly limit?: number;
}
export declare class GetCollectionItemsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetCollectionItemsHeadersArg);
}
export declare class CollectionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<CollectionsManager, "getCollections" | "getCollectionItems">);
    getCollections(queryParams?: GetCollectionsQueryParamsArg, headers?: GetCollectionsHeadersArg): Promise<Collections>;
    getCollectionItems(collectionId: string, queryParams?: GetCollectionItemsQueryParamsArg, headers?: GetCollectionItemsHeadersArg): Promise<Items>;
}
