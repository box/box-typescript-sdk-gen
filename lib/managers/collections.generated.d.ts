import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type CollectionsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
    readonly auth: CollectionsManagerAuthField;
    constructor(fields: Omit<CollectionsManager, "getCollections" | "getCollectionItems">);
    getCollections(options?: GetCollectionsOptionsArg): Promise<any>;
    getCollectionItems(collectionId: string, options?: GetCollectionItemsOptionsArg): Promise<any>;
}
