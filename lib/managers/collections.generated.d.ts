import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
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
export declare class CollectionsManager {
    readonly auth: CollectionsManagerAuthField;
    constructor(fields: Omit<CollectionsManager, "getCollections" | "getCollectionsIdItems">);
    getCollections(options?: GetCollectionsOptionsArg): Promise<any>;
    getCollectionsIdItems(collectionId: string, options?: GetCollectionsIdItemsOptionsArg): Promise<any>;
}
