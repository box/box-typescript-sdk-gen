import { MetadataQueryResults } from "../schemas.generated.js";
import { MetadataQuery } from "../schemas.generated.js";
import { MetadataQueryIndices } from "../schemas.generated.js";
import { SearchResultsOrSearchResultsWithSharedLinks } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export declare class CreateMetadataQueryExecuteReadHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateMetadataQueryExecuteReadHeadersArg);
}
export type GetMetadataQueryIndicesQueryParamsArgScopeField = "global" | "enterprise";
export interface GetMetadataQueryIndicesQueryParamsArg {
    readonly scope: GetMetadataQueryIndicesQueryParamsArgScopeField;
    readonly templateKey: string;
}
export declare class GetMetadataQueryIndicesHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetMetadataQueryIndicesHeadersArg);
}
export type GetSearchQueryParamsArgScopeField = "user_content" | "enterprise_content";
export type GetSearchQueryParamsArgTypeField = "file" | "folder" | "web_link";
export type GetSearchQueryParamsArgTrashContentField = "non_trashed_only" | "trashed_only" | "all_items";
export type GetSearchQueryParamsArgSortField = "modified_at" | "relevance";
export type GetSearchQueryParamsArgDirectionField = "DESC" | "ASC";
export interface GetSearchQueryParamsArg {
    readonly query?: string;
    readonly scope?: GetSearchQueryParamsArgScopeField;
    readonly fileExtensions?: string;
    readonly createdAtRange?: string;
    readonly updatedAtRange?: string;
    readonly sizeRange?: string;
    readonly ownerUserIds?: string;
    readonly recentUpdaterUserIds?: string;
    readonly ancestorFolderIds?: string;
    readonly contentTypes?: string;
    readonly type?: GetSearchQueryParamsArgTypeField;
    readonly trashContent?: GetSearchQueryParamsArgTrashContentField;
    readonly mdfilters?: string;
    readonly sort?: GetSearchQueryParamsArgSortField;
    readonly direction?: GetSearchQueryParamsArgDirectionField;
    readonly limit?: number;
    readonly includeRecentSharedLinks?: boolean;
    readonly fields?: string;
    readonly offset?: number;
    readonly deletedUserIds?: string;
    readonly deletedAtRange?: string;
}
export declare class GetSearchHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetSearchHeadersArg);
}
export declare class SearchManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SearchManager, "createMetadataQueryExecuteRead" | "getMetadataQueryIndices" | "getSearch">);
    createMetadataQueryExecuteRead(requestBody: MetadataQuery, headers?: CreateMetadataQueryExecuteReadHeadersArg): Promise<MetadataQueryResults>;
    getMetadataQueryIndices(queryParams: GetMetadataQueryIndicesQueryParamsArg, headers?: GetMetadataQueryIndicesHeadersArg): Promise<MetadataQueryIndices>;
    getSearch(queryParams?: GetSearchQueryParamsArg, headers?: GetSearchHeadersArg): Promise<SearchResultsOrSearchResultsWithSharedLinks>;
}
