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
    getSearch(queryParams?: undefined | GetSearchQueryParamsArg): Promise<SearchResultsOrSearchResultsWithSharedLinks>;
}
export declare function newSerializeGetMetadataQueryIndicesQueryParamsArgScopeField(val: GetMetadataQueryIndicesQueryParamsArgScopeField): Json;
export declare function newDeserializeGetMetadataQueryIndicesQueryParamsArgScopeField(val: any): GetMetadataQueryIndicesQueryParamsArgScopeField;
export declare function newSerializeGetMetadataQueryIndicesQueryParamsArg(val: GetMetadataQueryIndicesQueryParamsArg): Json;
export declare function newDeserializeGetMetadataQueryIndicesQueryParamsArg(val: any): GetMetadataQueryIndicesQueryParamsArg;
export declare function newSerializeGetSearchQueryParamsArgScopeField(val: GetSearchQueryParamsArgScopeField): Json;
export declare function newDeserializeGetSearchQueryParamsArgScopeField(val: any): GetSearchQueryParamsArgScopeField;
export declare function newSerializeGetSearchQueryParamsArgTypeField(val: GetSearchQueryParamsArgTypeField): Json;
export declare function newDeserializeGetSearchQueryParamsArgTypeField(val: any): GetSearchQueryParamsArgTypeField;
export declare function newSerializeGetSearchQueryParamsArgTrashContentField(val: GetSearchQueryParamsArgTrashContentField): Json;
export declare function newDeserializeGetSearchQueryParamsArgTrashContentField(val: any): GetSearchQueryParamsArgTrashContentField;
export declare function newSerializeGetSearchQueryParamsArgSortField(val: GetSearchQueryParamsArgSortField): Json;
export declare function newDeserializeGetSearchQueryParamsArgSortField(val: any): GetSearchQueryParamsArgSortField;
export declare function newSerializeGetSearchQueryParamsArgDirectionField(val: GetSearchQueryParamsArgDirectionField): Json;
export declare function newDeserializeGetSearchQueryParamsArgDirectionField(val: any): GetSearchQueryParamsArgDirectionField;
export declare function newSerializeGetSearchQueryParamsArg(val: GetSearchQueryParamsArg): Json;
export declare function newDeserializeGetSearchQueryParamsArg(val: any): GetSearchQueryParamsArg;
