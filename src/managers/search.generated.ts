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
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { serializeJson } from '../json.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { isJson } from '../json.js';
export class CreateMetadataQueryExecuteReadHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: CreateMetadataQueryExecuteReadHeadersArg) {
    Object.assign(this, fields);
  }
}
export type GetMetadataQueryIndicesQueryParamsArgScopeField =
  | 'global'
  | 'enterprise';
export interface GetMetadataQueryIndicesQueryParamsArg {
  readonly scope: GetMetadataQueryIndicesQueryParamsArgScopeField;
  readonly templateKey: string;
}
export class GetMetadataQueryIndicesHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetMetadataQueryIndicesHeadersArg) {
    Object.assign(this, fields);
  }
}
export type GetSearchQueryParamsArgScopeField =
  | 'user_content'
  | 'enterprise_content';
export type GetSearchQueryParamsArgTypeField = 'file' | 'folder' | 'web_link';
export type GetSearchQueryParamsArgTrashContentField =
  | 'non_trashed_only'
  | 'trashed_only'
  | 'all_items';
export type GetSearchQueryParamsArgSortField = 'modified_at' | 'relevance';
export type GetSearchQueryParamsArgDirectionField = 'DESC' | 'ASC';
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
export class GetSearchHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetSearchHeadersArg) {
    Object.assign(this, fields);
  }
}
export class SearchManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      SearchManager,
      'createMetadataQueryExecuteRead' | 'getMetadataQueryIndices' | 'getSearch'
    >
  ) {
    Object.assign(this, fields);
  }
  async createMetadataQueryExecuteRead(
    requestBody: MetadataQuery,
    headers: CreateMetadataQueryExecuteReadHeadersArg = new CreateMetadataQueryExecuteReadHeadersArg(
      {}
    )
  ): Promise<MetadataQueryResults> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/metadata_queries/execute_read'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(serializeMetadataQuery(requestBody)),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataQueryResults(deserializeJson(response.text));
  }
  async getMetadataQueryIndices(
    queryParams: GetMetadataQueryIndicesQueryParamsArg,
    headers: GetMetadataQueryIndicesHeadersArg = new GetMetadataQueryIndicesHeadersArg(
      {}
    )
  ): Promise<MetadataQueryIndices> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['scope']: toString(queryParams.scope),
      ['template_key']: toString(queryParams.templateKey),
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/metadata_query_indices') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataQueryIndices(deserializeJson(response.text));
  }
  async getSearch(
    queryParams: GetSearchQueryParamsArg = {} satisfies GetSearchQueryParamsArg,
    headers: GetSearchHeadersArg = new GetSearchHeadersArg({})
  ): Promise<SearchResultsOrSearchResultsWithSharedLinks> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['query']: toString(queryParams.query),
      ['scope']: toString(queryParams.scope),
      ['file_extensions']: toString(queryParams.fileExtensions),
      ['created_at_range']: toString(queryParams.createdAtRange),
      ['updated_at_range']: toString(queryParams.updatedAtRange),
      ['size_range']: toString(queryParams.sizeRange),
      ['owner_user_ids']: toString(queryParams.ownerUserIds),
      ['recent_updater_user_ids']: toString(queryParams.recentUpdaterUserIds),
      ['ancestor_folder_ids']: toString(queryParams.ancestorFolderIds),
      ['content_types']: toString(queryParams.contentTypes),
      ['type']: toString(queryParams.type),
      ['trash_content']: toString(queryParams.trashContent),
      ['mdfilters']: toString(queryParams.mdfilters),
      ['sort']: toString(queryParams.sort),
      ['direction']: toString(queryParams.direction),
      ['limit']: toString(queryParams.limit),
      ['include_recent_shared_links']: toString(
        queryParams.includeRecentSharedLinks
      ),
      ['fields']: toString(queryParams.fields),
      ['offset']: toString(queryParams.offset),
      ['deleted_user_ids']: toString(queryParams.deletedUserIds),
      ['deleted_at_range']: toString(queryParams.deletedAtRange),
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/search') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSearchResultsOrSearchResultsWithSharedLinks(
      deserializeJson(response.text)
    );
  }
}
export function serializeGetMetadataQueryIndicesQueryParamsArgScopeField(
  val: GetMetadataQueryIndicesQueryParamsArgScopeField
): Json {
  return val;
}
export function deserializeGetMetadataQueryIndicesQueryParamsArgScopeField(
  val: any
): GetMetadataQueryIndicesQueryParamsArgScopeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetMetadataQueryIndicesQueryParamsArgScopeField"';
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGetSearchQueryParamsArgScopeField(
  val: GetSearchQueryParamsArgScopeField
): Json {
  return val;
}
export function deserializeGetSearchQueryParamsArgScopeField(
  val: any
): GetSearchQueryParamsArgScopeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetSearchQueryParamsArgScopeField"';
  }
  if (val == 'user_content') {
    return 'user_content';
  }
  if (val == 'enterprise_content') {
    return 'enterprise_content';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGetSearchQueryParamsArgTypeField(
  val: GetSearchQueryParamsArgTypeField
): Json {
  return val;
}
export function deserializeGetSearchQueryParamsArgTypeField(
  val: any
): GetSearchQueryParamsArgTypeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetSearchQueryParamsArgTypeField"';
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
export function serializeGetSearchQueryParamsArgTrashContentField(
  val: GetSearchQueryParamsArgTrashContentField
): Json {
  return val;
}
export function deserializeGetSearchQueryParamsArgTrashContentField(
  val: any
): GetSearchQueryParamsArgTrashContentField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetSearchQueryParamsArgTrashContentField"';
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
export function serializeGetSearchQueryParamsArgSortField(
  val: GetSearchQueryParamsArgSortField
): Json {
  return val;
}
export function deserializeGetSearchQueryParamsArgSortField(
  val: any
): GetSearchQueryParamsArgSortField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetSearchQueryParamsArgSortField"';
  }
  if (val == 'modified_at') {
    return 'modified_at';
  }
  if (val == 'relevance') {
    return 'relevance';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGetSearchQueryParamsArgDirectionField(
  val: GetSearchQueryParamsArgDirectionField
): Json {
  return val;
}
export function deserializeGetSearchQueryParamsArgDirectionField(
  val: any
): GetSearchQueryParamsArgDirectionField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetSearchQueryParamsArgDirectionField"';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
