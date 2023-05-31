import { MetadataQuery } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export type GetMetadataQueryIndicesScopeArg = "global" | "enterprise";
export type GetSearchOptionsArgScopeField = "user_content" | "enterprise_content";
export type GetSearchOptionsArgTypeField = "file" | "folder" | "web_link";
export type GetSearchOptionsArgTrashContentField = "non_trashed_only" | "trashed_only" | "all_items";
export type GetSearchOptionsArgSortField = "modified_at" | "relevance";
export type GetSearchOptionsArgDirectionField = "DESC" | "ASC";
export interface GetSearchOptionsArg {
    readonly query?: string;
    readonly scope?: GetSearchOptionsArgScopeField;
    readonly fileExtensions?: string;
    readonly createdAtRange?: string;
    readonly updatedAtRange?: string;
    readonly sizeRange?: string;
    readonly ownerUserIds?: string;
    readonly recentUpdaterUserIds?: string;
    readonly ancestorFolderIds?: string;
    readonly contentTypes?: string;
    readonly type?: GetSearchOptionsArgTypeField;
    readonly trashContent?: GetSearchOptionsArgTrashContentField;
    readonly mdfilters?: string;
    readonly sort?: GetSearchOptionsArgSortField;
    readonly direction?: GetSearchOptionsArgDirectionField;
    readonly limit?: number;
    readonly includeRecentSharedLinks?: boolean;
    readonly fields?: string;
    readonly offset?: number;
    readonly deletedUserIds?: string;
    readonly deletedAtRange?: string;
}
export declare class SearchManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SearchManager, "createMetadataQueryExecuteRead" | "getMetadataQueryIndices" | "getSearch">);
    createMetadataQueryExecuteRead(requestBody: MetadataQuery): Promise<any>;
    getMetadataQueryIndices(scope: GetMetadataQueryIndicesScopeArg, templateKey: string): Promise<any>;
    getSearch(options?: GetSearchOptionsArg): Promise<any>;
}
