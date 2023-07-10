import { serializeMetadataQueryResults } from "../schemas.generated.js";
import { deserializeMetadataQueryResults } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeMetadataQuery } from "../schemas.generated.js";
import { deserializeMetadataQuery } from "../schemas.generated.js";
import { serializeMetadataQueryIndices } from "../schemas.generated.js";
import { deserializeMetadataQueryIndices } from "../schemas.generated.js";
import { serializeSearchResultsOrSearchResultsWithSharedLinks } from "../schemas.generated.js";
import { deserializeSearchResultsOrSearchResultsWithSharedLinks } from "../schemas.generated.js";
import { serializeMetadataFilter } from "../schemas.generated.js";
import { deserializeMetadataFilter } from "../schemas.generated.js";
import { MetadataQueryResults } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { MetadataQuery } from "../schemas.generated.js";
import { MetadataQueryIndices } from "../schemas.generated.js";
import { SearchResultsOrSearchResultsWithSharedLinks } from "../schemas.generated.js";
import { MetadataFilter } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { serializeJson } from "../json.js";
import { Json } from "../json.js";
import { deserializeJson } from "../json.js";
import { isJson } from "../json.js";
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
export class SearchManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SearchManager, "createMetadataQueryExecuteRead" | "getMetadataQueryIndices" | "getSearch">) {
        Object.assign(this, fields);
    }
    async createMetadataQueryExecuteRead(requestBody: MetadataQuery): Promise<MetadataQueryResults> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_queries/execute_read") as string, { method: "POST", body: serializeJson(serializeMetadataQuery(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataQueryResults(deserializeJson(response.text));
    }
    async getMetadataQueryIndices(queryParams: GetMetadataQueryIndicesQueryParamsArg): Promise<MetadataQueryIndices> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_query_indices") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataQueryIndices(deserializeJson(response.text));
    }
    async getSearch(queryParams: undefined | GetSearchQueryParamsArg = {} satisfies GetSearchQueryParamsArg): Promise<SearchResultsOrSearchResultsWithSharedLinks> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/search") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeSearchResultsOrSearchResultsWithSharedLinks(deserializeJson(response.text));
    }
}
export function serializeGetMetadataQueryIndicesQueryParamsArgScopeField(val: GetMetadataQueryIndicesQueryParamsArgScopeField): Json {
    return val;
}
export function deserializeGetMetadataQueryIndicesQueryParamsArgScopeField(val: any): GetMetadataQueryIndicesQueryParamsArgScopeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetMetadataQueryIndicesQueryParamsArgScopeField\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetMetadataQueryIndicesQueryParamsArg(val: GetMetadataQueryIndicesQueryParamsArg): Json {
    return { ["scope"]: serializeGetMetadataQueryIndicesQueryParamsArgScopeField(val.scope), ["templateKey"]: val.templateKey };
}
export function deserializeGetMetadataQueryIndicesQueryParamsArg(val: any): GetMetadataQueryIndicesQueryParamsArg {
    const scope: GetMetadataQueryIndicesQueryParamsArgScopeField = deserializeGetMetadataQueryIndicesQueryParamsArgScopeField(val.scope);
    const templateKey: string = val.templateKey;
    return { scope: scope, templateKey: templateKey } satisfies GetMetadataQueryIndicesQueryParamsArg;
}
export function serializeGetSearchQueryParamsArgScopeField(val: GetSearchQueryParamsArgScopeField): Json {
    return val;
}
export function deserializeGetSearchQueryParamsArgScopeField(val: any): GetSearchQueryParamsArgScopeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetSearchQueryParamsArgScopeField\"";
    }
    if (val == "user_content") {
        return "user_content";
    }
    if (val == "enterprise_content") {
        return "enterprise_content";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetSearchQueryParamsArgTypeField(val: GetSearchQueryParamsArgTypeField): Json {
    return val;
}
export function deserializeGetSearchQueryParamsArgTypeField(val: any): GetSearchQueryParamsArgTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetSearchQueryParamsArgTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "folder") {
        return "folder";
    }
    if (val == "web_link") {
        return "web_link";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetSearchQueryParamsArgTrashContentField(val: GetSearchQueryParamsArgTrashContentField): Json {
    return val;
}
export function deserializeGetSearchQueryParamsArgTrashContentField(val: any): GetSearchQueryParamsArgTrashContentField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetSearchQueryParamsArgTrashContentField\"";
    }
    if (val == "non_trashed_only") {
        return "non_trashed_only";
    }
    if (val == "trashed_only") {
        return "trashed_only";
    }
    if (val == "all_items") {
        return "all_items";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetSearchQueryParamsArgSortField(val: GetSearchQueryParamsArgSortField): Json {
    return val;
}
export function deserializeGetSearchQueryParamsArgSortField(val: any): GetSearchQueryParamsArgSortField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetSearchQueryParamsArgSortField\"";
    }
    if (val == "modified_at") {
        return "modified_at";
    }
    if (val == "relevance") {
        return "relevance";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetSearchQueryParamsArgDirectionField(val: GetSearchQueryParamsArgDirectionField): Json {
    return val;
}
export function deserializeGetSearchQueryParamsArgDirectionField(val: any): GetSearchQueryParamsArgDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetSearchQueryParamsArgDirectionField\"";
    }
    if (val == "DESC") {
        return "DESC";
    }
    if (val == "ASC") {
        return "ASC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetSearchQueryParamsArg(val: GetSearchQueryParamsArg): Json {
    return { ["query"]: val.query, ["scope"]: val.scope == void 0 ? void 0 : serializeGetSearchQueryParamsArgScopeField(val.scope), ["fileExtensions"]: val.fileExtensions, ["createdAtRange"]: val.createdAtRange, ["updatedAtRange"]: val.updatedAtRange, ["sizeRange"]: val.sizeRange, ["ownerUserIds"]: val.ownerUserIds, ["recentUpdaterUserIds"]: val.recentUpdaterUserIds, ["ancestorFolderIds"]: val.ancestorFolderIds, ["contentTypes"]: val.contentTypes, ["type"]: val.type == void 0 ? void 0 : serializeGetSearchQueryParamsArgTypeField(val.type), ["trashContent"]: val.trashContent == void 0 ? void 0 : serializeGetSearchQueryParamsArgTrashContentField(val.trashContent), ["mdfilters"]: val.mdfilters, ["sort"]: val.sort == void 0 ? void 0 : serializeGetSearchQueryParamsArgSortField(val.sort), ["direction"]: val.direction == void 0 ? void 0 : serializeGetSearchQueryParamsArgDirectionField(val.direction), ["limit"]: val.limit, ["includeRecentSharedLinks"]: val.includeRecentSharedLinks, ["fields"]: val.fields, ["offset"]: val.offset, ["deletedUserIds"]: val.deletedUserIds, ["deletedAtRange"]: val.deletedAtRange };
}
export function deserializeGetSearchQueryParamsArg(val: any): GetSearchQueryParamsArg {
    const query: undefined | string = isJson(val.query, "string") ? val.query : void 0;
    const scope: undefined | GetSearchQueryParamsArgScopeField = val.scope == void 0 ? void 0 : deserializeGetSearchQueryParamsArgScopeField(val.scope);
    const fileExtensions: undefined | string = isJson(val.fileExtensions, "string") ? val.fileExtensions : void 0;
    const createdAtRange: undefined | string = isJson(val.createdAtRange, "string") ? val.createdAtRange : void 0;
    const updatedAtRange: undefined | string = isJson(val.updatedAtRange, "string") ? val.updatedAtRange : void 0;
    const sizeRange: undefined | string = isJson(val.sizeRange, "string") ? val.sizeRange : void 0;
    const ownerUserIds: undefined | string = isJson(val.ownerUserIds, "string") ? val.ownerUserIds : void 0;
    const recentUpdaterUserIds: undefined | string = isJson(val.recentUpdaterUserIds, "string") ? val.recentUpdaterUserIds : void 0;
    const ancestorFolderIds: undefined | string = isJson(val.ancestorFolderIds, "string") ? val.ancestorFolderIds : void 0;
    const contentTypes: undefined | string = isJson(val.contentTypes, "string") ? val.contentTypes : void 0;
    const type: undefined | GetSearchQueryParamsArgTypeField = val.type == void 0 ? void 0 : deserializeGetSearchQueryParamsArgTypeField(val.type);
    const trashContent: undefined | GetSearchQueryParamsArgTrashContentField = val.trashContent == void 0 ? void 0 : deserializeGetSearchQueryParamsArgTrashContentField(val.trashContent);
    const mdfilters: undefined | string = isJson(val.mdfilters, "string") ? val.mdfilters : void 0;
    const sort: undefined | GetSearchQueryParamsArgSortField = val.sort == void 0 ? void 0 : deserializeGetSearchQueryParamsArgSortField(val.sort);
    const direction: undefined | GetSearchQueryParamsArgDirectionField = val.direction == void 0 ? void 0 : deserializeGetSearchQueryParamsArgDirectionField(val.direction);
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const includeRecentSharedLinks: undefined | boolean = isJson(val.includeRecentSharedLinks, "boolean") ? val.includeRecentSharedLinks : void 0;
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const deletedUserIds: undefined | string = isJson(val.deletedUserIds, "string") ? val.deletedUserIds : void 0;
    const deletedAtRange: undefined | string = isJson(val.deletedAtRange, "string") ? val.deletedAtRange : void 0;
    return { query: query, scope: scope, fileExtensions: fileExtensions, createdAtRange: createdAtRange, updatedAtRange: updatedAtRange, sizeRange: sizeRange, ownerUserIds: ownerUserIds, recentUpdaterUserIds: recentUpdaterUserIds, ancestorFolderIds: ancestorFolderIds, contentTypes: contentTypes, type: type, trashContent: trashContent, mdfilters: mdfilters, sort: sort, direction: direction, limit: limit, includeRecentSharedLinks: includeRecentSharedLinks, fields: fields, offset: offset, deletedUserIds: deletedUserIds, deletedAtRange: deletedAtRange } satisfies GetSearchQueryParamsArg;
}
