import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
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
export declare class CollectionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<CollectionsManager, "getCollections" | "getCollectionItems">);
    getCollections(options?: GetCollectionsOptionsArg): Promise<any>;
    getCollectionItems(collectionId: string, options?: GetCollectionItemsOptionsArg): Promise<any>;
}
