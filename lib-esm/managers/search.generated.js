import { deserializeMetadataQueryResults } from '../schemas/metadataQueryResults.generated.js';
import { serializeMetadataQuery } from '../schemas/metadataQuery.generated.js';
import { deserializeSearchResultsOrSearchResultsWithSharedLinks } from '../schemas/searchResultsOrSearchResultsWithSharedLinks.generated.js';
import { serializeMetadataFilter } from '../schemas/metadataFilter.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
export class SearchByMetadataQueryOptionals {
    constructor(fields) {
        this.headers = new SearchByMetadataQueryHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class SearchByMetadataQueryHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class SearchForContentHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class SearchManager {
    constructor(fields) {
        this.networkSession = new NetworkSession({});
        if (fields.auth !== undefined) {
            this.auth = fields.auth;
        }
        if (fields.networkSession !== undefined) {
            this.networkSession = fields.networkSession;
        }
    }
    /**
     * Create a search using SQL-like syntax to return items that match specific
     * metadata.
     *
     * By default, this endpoint returns only the most basic info about the items for
     * which the query matches. To get additional fields for each item, including any
     * of the metadata, use the `fields` attribute in the query.
     * @param {MetadataQuery} requestBody Request body of searchByMetadataQuery method
     * @param {SearchByMetadataQueryOptionalsInput} optionalsInput
     * @returns {Promise<MetadataQueryResults>}
     */
    async searchByMetadataQuery(requestBody, optionalsInput = {}) {
        const optionals = new SearchByMetadataQueryOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_queries/execute_read'),
            method: 'POST',
            headers: headersMap,
            data: serializeMetadataQuery(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeMetadataQueryResults(response.data),
            rawData: response.data,
        };
    }
    /**
     * Searches for files, folders, web links, and shared files across the
     * users content or across the entire enterprise.
     * @param {SearchForContentQueryParams} queryParams Query parameters of searchForContent method
     * @param {SearchForContentHeadersInput} headersInput Headers of searchForContent method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<SearchResultsOrSearchResultsWithSharedLinks>}
     */
    async searchForContent(queryParams = {}, headersInput = new SearchForContentHeaders({}), cancellationToken) {
        const headers = new SearchForContentHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['query']: toString(queryParams.query),
            ['scope']: toString(queryParams.scope),
            ['file_extensions']: queryParams.fileExtensions
                ? queryParams.fileExtensions.map(toString).join(',')
                : undefined,
            ['created_at_range']: queryParams.createdAtRange
                ? queryParams.createdAtRange.map(toString).join(',')
                : undefined,
            ['updated_at_range']: queryParams.updatedAtRange
                ? queryParams.updatedAtRange.map(toString).join(',')
                : undefined,
            ['size_range']: queryParams.sizeRange
                ? queryParams.sizeRange.map(toString).join(',')
                : undefined,
            ['owner_user_ids']: queryParams.ownerUserIds
                ? queryParams.ownerUserIds.map(toString).join(',')
                : undefined,
            ['recent_updater_user_ids']: queryParams.recentUpdaterUserIds
                ? queryParams.recentUpdaterUserIds.map(toString).join(',')
                : undefined,
            ['ancestor_folder_ids']: queryParams.ancestorFolderIds
                ? queryParams.ancestorFolderIds.map(toString).join(',')
                : undefined,
            ['content_types']: queryParams.contentTypes
                ? queryParams.contentTypes.map(toString).join(',')
                : undefined,
            ['type']: toString(queryParams.type),
            ['trash_content']: toString(queryParams.trashContent),
            ['mdfilters']: queryParams.mdfilters
                ? sdToJson(queryParams.mdfilters.map(serializeMetadataFilter))
                : undefined,
            ['sort']: toString(queryParams.sort),
            ['direction']: toString(queryParams.direction),
            ['limit']: toString(queryParams.limit),
            ['include_recent_shared_links']: toString(queryParams.includeRecentSharedLinks),
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
            ['offset']: toString(queryParams.offset),
            ['deleted_user_ids']: queryParams.deletedUserIds
                ? queryParams.deletedUserIds.map(toString).join(',')
                : undefined,
            ['deleted_at_range']: queryParams.deletedAtRange
                ? queryParams.deletedAtRange.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/search'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeSearchResultsOrSearchResultsWithSharedLinks(response.data),
            rawData: response.data,
        };
    }
}
export function serializeSearchForContentQueryParamsScopeField(val) {
    return val;
}
export function deserializeSearchForContentQueryParamsScopeField(val) {
    if (val == 'user_content') {
        return val;
    }
    if (val == 'enterprise_content') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize SearchForContentQueryParamsScopeField",
    });
}
export function serializeSearchForContentQueryParamsContentTypesField(val) {
    return val;
}
export function deserializeSearchForContentQueryParamsContentTypesField(val) {
    if (val == 'name') {
        return val;
    }
    if (val == 'description') {
        return val;
    }
    if (val == 'file_content') {
        return val;
    }
    if (val == 'comments') {
        return val;
    }
    if (val == 'tag') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize SearchForContentQueryParamsContentTypesField",
    });
}
export function serializeSearchForContentQueryParamsTypeField(val) {
    return val;
}
export function deserializeSearchForContentQueryParamsTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    if (val == 'web_link') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize SearchForContentQueryParamsTypeField",
    });
}
export function serializeSearchForContentQueryParamsTrashContentField(val) {
    return val;
}
export function deserializeSearchForContentQueryParamsTrashContentField(val) {
    if (val == 'non_trashed_only') {
        return val;
    }
    if (val == 'trashed_only') {
        return val;
    }
    if (val == 'all_items') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize SearchForContentQueryParamsTrashContentField",
    });
}
export function serializeSearchForContentQueryParamsSortField(val) {
    return val;
}
export function deserializeSearchForContentQueryParamsSortField(val) {
    if (val == 'modified_at') {
        return val;
    }
    if (val == 'relevance') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize SearchForContentQueryParamsSortField",
    });
}
export function serializeSearchForContentQueryParamsDirectionField(val) {
    return val;
}
export function deserializeSearchForContentQueryParamsDirectionField(val) {
    if (val == 'DESC') {
        return val;
    }
    if (val == 'ASC') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize SearchForContentQueryParamsDirectionField",
    });
}
//# sourceMappingURL=search.generated.js.map