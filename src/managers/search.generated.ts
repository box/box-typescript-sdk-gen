import { serializeMetadataQueryResults } from '../schemas.generated.js';
import { deserializeMetadataQueryResults } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeMetadataQuery } from '../schemas.generated.js';
import { deserializeMetadataQuery } from '../schemas.generated.js';
import { serializeMetadataQueryIndices } from '../schemas.generated.js';
import { deserializeMetadataQueryIndices } from '../schemas.generated.js';
import { serializeSearchResultsOrSearchResultsWithSharedLinks } from '../schemas.generated.js';
import { deserializeSearchResultsOrSearchResultsWithSharedLinks } from '../schemas.generated.js';
import { serializeMetadataFilter } from '../schemas.generated.js';
import { deserializeMetadataFilter } from '../schemas.generated.js';
import { MetadataQueryResults } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { MetadataQuery } from '../schemas.generated.js';
import { MetadataQueryIndices } from '../schemas.generated.js';
import { SearchResultsOrSearchResultsWithSharedLinks } from '../schemas.generated.js';
import { MetadataFilter } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { sdToJson } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export class CreateMetadataQueryExecuteReadHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateMetadataQueryExecuteReadHeaders, 'extraHeaders'>
      | Partial<Pick<CreateMetadataQueryExecuteReadHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type GetMetadataQueryIndicesQueryParamsScopeField =
  | 'global'
  | 'enterprise';
export interface GetMetadataQueryIndicesQueryParams {
  readonly scope: GetMetadataQueryIndicesQueryParamsScopeField;
  readonly templateKey: string;
}
export class GetMetadataQueryIndicesHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetMetadataQueryIndicesHeaders, 'extraHeaders'>
      | Partial<Pick<GetMetadataQueryIndicesHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type GetSearchQueryParamsScopeField =
  | 'user_content'
  | 'enterprise_content';
export type GetSearchQueryParamsContentTypesField =
  | 'name'
  | 'description'
  | 'file_content'
  | 'comments'
  | 'tag';
export type GetSearchQueryParamsTypeField = 'file' | 'folder' | 'web_link';
export type GetSearchQueryParamsTrashContentField =
  | 'non_trashed_only'
  | 'trashed_only'
  | 'all_items';
export type GetSearchQueryParamsSortField = 'modified_at' | 'relevance';
export type GetSearchQueryParamsDirectionField = 'DESC' | 'ASC';
export interface GetSearchQueryParams {
  readonly query?: string;
  readonly scope?: GetSearchQueryParamsScopeField;
  readonly fileExtensions?: readonly string[];
  readonly createdAtRange?: readonly string[];
  readonly updatedAtRange?: readonly string[];
  readonly sizeRange?: readonly number[];
  readonly ownerUserIds?: readonly string[];
  readonly recentUpdaterUserIds?: readonly string[];
  readonly ancestorFolderIds?: readonly string[];
  readonly contentTypes?: readonly GetSearchQueryParamsContentTypesField[];
  readonly type?: GetSearchQueryParamsTypeField;
  readonly trashContent?: GetSearchQueryParamsTrashContentField;
  readonly mdfilters?: readonly MetadataFilter[];
  readonly sort?: GetSearchQueryParamsSortField;
  readonly direction?: GetSearchQueryParamsDirectionField;
  readonly limit?: number;
  readonly includeRecentSharedLinks?: boolean;
  readonly fields?: readonly string[];
  readonly offset?: number;
  readonly deletedUserIds?: readonly string[];
  readonly deletedAtRange?: readonly string[];
}
export class GetSearchHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetSearchHeaders, 'extraHeaders'>
      | Partial<Pick<GetSearchHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class SearchManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          SearchManager,
          | 'networkSession'
          | 'createMetadataQueryExecuteRead'
          | 'getMetadataQueryIndices'
          | 'getSearch'
        >
      | Partial<Pick<SearchManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async createMetadataQueryExecuteRead(
    requestBody: MetadataQuery,
    headers: CreateMetadataQueryExecuteReadHeaders = new CreateMetadataQueryExecuteReadHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataQueryResults> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/metadata_queries/execute_read'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeMetadataQuery(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataQueryResults(response.data);
  }
  async getMetadataQueryIndices(
    queryParams: GetMetadataQueryIndicesQueryParams,
    headers: GetMetadataQueryIndicesHeaders = new GetMetadataQueryIndicesHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataQueryIndices> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['scope']: toString(queryParams.scope) as string,
      ['template_key']: toString(queryParams.templateKey) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/metadata_query_indices'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataQueryIndices(response.data);
  }
  async getSearch(
    queryParams: GetSearchQueryParams = {} satisfies GetSearchQueryParams,
    headers: GetSearchHeaders = new GetSearchHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<SearchResultsOrSearchResultsWithSharedLinks> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['query']: toString(queryParams.query) as string,
      ['scope']: toString(queryParams.scope) as string,
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
      ['type']: toString(queryParams.type) as string,
      ['trash_content']: toString(queryParams.trashContent) as string,
      ['mdfilters']: queryParams.mdfilters
        ? sdToJson(queryParams.mdfilters.map(serializeMetadataFilter))
        : undefined,
      ['sort']: toString(queryParams.sort) as string,
      ['direction']: toString(queryParams.direction) as string,
      ['limit']: toString(queryParams.limit) as string,
      ['include_recent_shared_links']: toString(
        queryParams.includeRecentSharedLinks
      ) as string,
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
      ['offset']: toString(queryParams.offset) as string,
      ['deleted_user_ids']: queryParams.deletedUserIds
        ? queryParams.deletedUserIds.map(toString).join(',')
        : undefined,
      ['deleted_at_range']: queryParams.deletedAtRange
        ? queryParams.deletedAtRange.map(toString).join(',')
        : undefined,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/search') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSearchResultsOrSearchResultsWithSharedLinks(
      response.data
    );
  }
}
export function serializeGetMetadataQueryIndicesQueryParamsScopeField(
  val: GetMetadataQueryIndicesQueryParamsScopeField
): SerializedData {
  return val;
}
export function deserializeGetMetadataQueryIndicesQueryParamsScopeField(
  val: any
): GetMetadataQueryIndicesQueryParamsScopeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetMetadataQueryIndicesQueryParamsScopeField"';
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGetSearchQueryParamsScopeField(
  val: GetSearchQueryParamsScopeField
): SerializedData {
  return val;
}
export function deserializeGetSearchQueryParamsScopeField(
  val: any
): GetSearchQueryParamsScopeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetSearchQueryParamsScopeField"';
  }
  if (val == 'user_content') {
    return 'user_content';
  }
  if (val == 'enterprise_content') {
    return 'enterprise_content';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGetSearchQueryParamsContentTypesField(
  val: GetSearchQueryParamsContentTypesField
): SerializedData {
  return val;
}
export function deserializeGetSearchQueryParamsContentTypesField(
  val: any
): GetSearchQueryParamsContentTypesField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetSearchQueryParamsContentTypesField"';
  }
  if (val == 'name') {
    return 'name';
  }
  if (val == 'description') {
    return 'description';
  }
  if (val == 'file_content') {
    return 'file_content';
  }
  if (val == 'comments') {
    return 'comments';
  }
  if (val == 'tag') {
    return 'tag';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGetSearchQueryParamsTypeField(
  val: GetSearchQueryParamsTypeField
): SerializedData {
  return val;
}
export function deserializeGetSearchQueryParamsTypeField(
  val: any
): GetSearchQueryParamsTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetSearchQueryParamsTypeField"';
  }
  if (val == 'file') {
    return 'file';
  }
  if (val == 'folder') {
    return 'folder';
  }
  if (val == 'web_link') {
    return 'web_link';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGetSearchQueryParamsTrashContentField(
  val: GetSearchQueryParamsTrashContentField
): SerializedData {
  return val;
}
export function deserializeGetSearchQueryParamsTrashContentField(
  val: any
): GetSearchQueryParamsTrashContentField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetSearchQueryParamsTrashContentField"';
  }
  if (val == 'non_trashed_only') {
    return 'non_trashed_only';
  }
  if (val == 'trashed_only') {
    return 'trashed_only';
  }
  if (val == 'all_items') {
    return 'all_items';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGetSearchQueryParamsSortField(
  val: GetSearchQueryParamsSortField
): SerializedData {
  return val;
}
export function deserializeGetSearchQueryParamsSortField(
  val: any
): GetSearchQueryParamsSortField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetSearchQueryParamsSortField"';
  }
  if (val == 'modified_at') {
    return 'modified_at';
  }
  if (val == 'relevance') {
    return 'relevance';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGetSearchQueryParamsDirectionField(
  val: GetSearchQueryParamsDirectionField
): SerializedData {
  return val;
}
export function deserializeGetSearchQueryParamsDirectionField(
  val: any
): GetSearchQueryParamsDirectionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetSearchQueryParamsDirectionField"';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
