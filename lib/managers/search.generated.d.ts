import { MetadataQuery } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type SearchManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export type GetMetadataQueryIndicesScopeArg = "global" | "enterprise";
export type GetSearchOptionsArgScopeField = "user_content" | "enterprise_content";
export type GetSearchOptionsArgTypeField = "file" | "folder" | "web_link";
export type GetSearchOptionsArgTrashContentField = "non_trashed_only" | "trashed_only";
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
}
export declare class SearchManager {
    readonly auth: SearchManagerAuthField;
    constructor(fields: Omit<SearchManager, "createMetadataQueryExecuteRead" | "getMetadataQueryIndices" | "getSearch">);
    createMetadataQueryExecuteRead(requestBody: MetadataQuery): Promise<any>;
    getMetadataQueryIndices(scope: GetMetadataQueryIndicesScopeArg, templateKey: string): Promise<any>;
    getSearch(options?: GetSearchOptionsArg): Promise<undefined>;
}
