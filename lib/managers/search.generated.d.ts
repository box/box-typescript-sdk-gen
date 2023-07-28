import { MetadataQueryResults } from "../schemas.generated.js";
import { MetadataQuery } from "../schemas.generated.js";
import { MetadataQueryIndices } from "../schemas.generated.js";
import { SearchResultsOrSearchResultsWithSharedLinks } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export type GetMetadataQueryIndicesQueryParamsArgScopeField = "global" | "enterprise";
export interface GetMetadataQueryIndicesQueryParamsArg {
    readonly scope: GetMetadataQueryIndicesQueryParamsArgScopeField;
    readonly templateKey: string;
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
export declare class SearchManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SearchManager, "createMetadataQueryExecuteRead" | "getMetadataQueryIndices" | "getSearch">);
    createMetadataQueryExecuteRead(requestBody: MetadataQuery): Promise<MetadataQueryResults>;
    getMetadataQueryIndices(queryParams: GetMetadataQueryIndicesQueryParamsArg): Promise<MetadataQueryIndices>;
    getSearch(queryParams?: GetSearchQueryParamsArg): Promise<SearchResultsOrSearchResultsWithSharedLinks>;
}
export declare function serializeGetMetadataQueryIndicesQueryParamsArgScopeField(val: GetMetadataQueryIndicesQueryParamsArgScopeField): Json;
export declare function deserializeGetMetadataQueryIndicesQueryParamsArgScopeField(val: any): GetMetadataQueryIndicesQueryParamsArgScopeField;
export declare function serializeGetMetadataQueryIndicesQueryParamsArg(val: GetMetadataQueryIndicesQueryParamsArg): Json;
export declare function deserializeGetMetadataQueryIndicesQueryParamsArg(val: any): GetMetadataQueryIndicesQueryParamsArg;
export declare function serializeGetSearchQueryParamsArgScopeField(val: GetSearchQueryParamsArgScopeField): Json;
export declare function deserializeGetSearchQueryParamsArgScopeField(val: any): GetSearchQueryParamsArgScopeField;
export declare function serializeGetSearchQueryParamsArgTypeField(val: GetSearchQueryParamsArgTypeField): Json;
export declare function deserializeGetSearchQueryParamsArgTypeField(val: any): GetSearchQueryParamsArgTypeField;
export declare function serializeGetSearchQueryParamsArgTrashContentField(val: GetSearchQueryParamsArgTrashContentField): Json;
export declare function deserializeGetSearchQueryParamsArgTrashContentField(val: any): GetSearchQueryParamsArgTrashContentField;
export declare function serializeGetSearchQueryParamsArgSortField(val: GetSearchQueryParamsArgSortField): Json;
export declare function deserializeGetSearchQueryParamsArgSortField(val: any): GetSearchQueryParamsArgSortField;
export declare function serializeGetSearchQueryParamsArgDirectionField(val: GetSearchQueryParamsArgDirectionField): Json;
export declare function deserializeGetSearchQueryParamsArgDirectionField(val: any): GetSearchQueryParamsArgDirectionField;
export declare function serializeGetSearchQueryParamsArg(val: GetSearchQueryParamsArg): Json;
export declare function deserializeGetSearchQueryParamsArg(val: any): GetSearchQueryParamsArg;
