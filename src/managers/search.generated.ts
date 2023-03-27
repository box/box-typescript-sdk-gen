import { MetadataQueryResults } from "../schemas.generated.js";
import { deserializeMetadataQueryResults } from "../schemas.generated.js";
import { serializeMetadataQueryResults } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { MetadataQuery } from "../schemas.generated.js";
import { deserializeMetadataQuery } from "../schemas.generated.js";
import { serializeMetadataQuery } from "../schemas.generated.js";
import { MetadataQueryIndices } from "../schemas.generated.js";
import { deserializeMetadataQueryIndices } from "../schemas.generated.js";
import { serializeMetadataQueryIndices } from "../schemas.generated.js";
import { SearchResults } from "../schemas.generated.js";
import { deserializeSearchResults } from "../schemas.generated.js";
import { serializeSearchResults } from "../schemas.generated.js";
import { SearchResultsWithSharedLinks } from "../schemas.generated.js";
import { deserializeSearchResultsWithSharedLinks } from "../schemas.generated.js";
import { serializeSearchResultsWithSharedLinks } from "../schemas.generated.js";
import { MetadataFilter } from "../schemas.generated.js";
import { deserializeMetadataFilter } from "../schemas.generated.js";
import { serializeMetadataFilter } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { serializeJson } from "../json.js";
import { JSON } from "../json.js";
import { deserializeJson } from "../json.js";
export type SearchManagerAuthField = DeveloperTokenAuth | CCGAuth;
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
export class SearchManager {
    readonly auth!: SearchManagerAuthField;
    constructor(fields: Omit<SearchManager, "postMetadataQueriesExecuteRead" | "getMetadataQueryIndices" | "getSearch">) {
        Object.assign(this, fields);
    }
    async postMetadataQueriesExecuteRead(requestBody: MetadataQuery): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_queries/execute_read") as string, { method: "POST", body: serializeMetadataQuery(serializeJSON(requestBody) as string), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataQueryResults(deserializeJSON(response.text) as JSON);
    }
    async getMetadataQueryIndices(scope: GetMetadataQueryIndicesScopeArg, templateKey: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_query_indices") as string, { method: "GET", params: { ["scope"]: scope, ["template_key"]: templateKey }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataQueryIndices(deserializeJSON(response.text) as JSON);
    }
    async getSearch(options: GetSearchOptionsArg = {} satisfies GetSearchOptionsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/search") as string, { method: "GET", params: { ["query"]: options.query, ["scope"]: options.scope, ["file_extensions"]: options.fileExtensions, ["created_at_range"]: options.createdAtRange, ["updated_at_range"]: options.updatedAtRange, ["size_range"]: options.sizeRange, ["owner_user_ids"]: options.ownerUserIds, ["recent_updater_user_ids"]: options.recentUpdaterUserIds, ["ancestor_folder_ids"]: options.ancestorFolderIds, ["content_types"]: options.contentTypes, ["type"]: options.type, ["trash_content"]: options.trashContent, ["mdfilters"]: options.mdfilters, ["sort"]: options.sort, ["direction"]: options.direction, ["limit"]: options.limit, ["include_recent_shared_links"]: options.includeRecentSharedLinks, ["fields"]: options.fields, ["offset"]: options.offset }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
}
