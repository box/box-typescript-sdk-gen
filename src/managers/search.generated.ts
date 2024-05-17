import { serializeMetadataQueryResults } from '../schemas/metadataQueryResults.generated.js';
import { deserializeMetadataQueryResults } from '../schemas/metadataQueryResults.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeMetadataQuery } from '../schemas/metadataQuery.generated.js';
import { deserializeMetadataQuery } from '../schemas/metadataQuery.generated.js';
import { serializeSearchResultsOrSearchResultsWithSharedLinks } from '../schemas/searchResultsOrSearchResultsWithSharedLinks.generated.js';
import { deserializeSearchResultsOrSearchResultsWithSharedLinks } from '../schemas/searchResultsOrSearchResultsWithSharedLinks.generated.js';
import { serializeMetadataFilter } from '../schemas/metadataFilter.generated.js';
import { deserializeMetadataFilter } from '../schemas/metadataFilter.generated.js';
import { MetadataQueryResults } from '../schemas/metadataQueryResults.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { MetadataQuery } from '../schemas/metadataQuery.generated.js';
import { SearchResultsOrSearchResultsWithSharedLinks } from '../schemas/searchResultsOrSearchResultsWithSharedLinks.generated.js';
import { MetadataFilter } from '../schemas/metadataFilter.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { sdToJson } from '../serialization/json.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class SearchByMetadataQueryOptionals {
  readonly headers: SearchByMetadataQueryHeaders =
    new SearchByMetadataQueryHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      SearchByMetadataQueryOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<SearchByMetadataQueryOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface SearchByMetadataQueryOptionalsInput {
  readonly headers?: SearchByMetadataQueryHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class SearchByMetadataQueryHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<SearchByMetadataQueryHeaders, 'extraHeaders'> &
      Partial<Pick<SearchByMetadataQueryHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface SearchByMetadataQueryHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type SearchForContentQueryParamsScopeField =
  | 'user_content'
  | 'enterprise_content';
export type SearchForContentQueryParamsContentTypesField =
  | 'name'
  | 'description'
  | 'file_content'
  | 'comments'
  | 'tag';
export type SearchForContentQueryParamsTypeField =
  | 'file'
  | 'folder'
  | 'web_link';
export type SearchForContentQueryParamsTrashContentField =
  | 'non_trashed_only'
  | 'trashed_only'
  | 'all_items';
export type SearchForContentQueryParamsSortField = 'modified_at' | 'relevance';
export type SearchForContentQueryParamsDirectionField = 'DESC' | 'ASC';
export interface SearchForContentQueryParams {
  readonly query?: string;
  readonly scope?: SearchForContentQueryParamsScopeField;
  readonly fileExtensions?: readonly string[];
  readonly createdAtRange?: readonly string[];
  readonly updatedAtRange?: readonly string[];
  readonly sizeRange?: readonly number[];
  readonly ownerUserIds?: readonly string[];
  readonly recentUpdaterUserIds?: readonly string[];
  readonly ancestorFolderIds?: readonly string[];
  readonly contentTypes?: readonly SearchForContentQueryParamsContentTypesField[];
  readonly type?: SearchForContentQueryParamsTypeField;
  readonly trashContent?: SearchForContentQueryParamsTrashContentField;
  readonly mdfilters?: readonly MetadataFilter[];
  readonly sort?: SearchForContentQueryParamsSortField;
  readonly direction?: SearchForContentQueryParamsDirectionField;
  readonly limit?: number;
  readonly includeRecentSharedLinks?: boolean;
  readonly fields?: readonly string[];
  readonly offset?: number;
  readonly deletedUserIds?: readonly string[];
  readonly deletedAtRange?: readonly string[];
}
export class SearchForContentHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<SearchForContentHeaders, 'extraHeaders'> &
      Partial<Pick<SearchForContentHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface SearchForContentHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class SearchManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      SearchManager,
      'networkSession' | 'searchByMetadataQuery' | 'searchForContent'
    > &
      Partial<Pick<SearchManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async searchByMetadataQuery(
    requestBody: MetadataQuery,
    optionalsInput: SearchByMetadataQueryOptionalsInput = {}
  ): Promise<MetadataQueryResults> {
    const optionals: SearchByMetadataQueryOptionals =
      new SearchByMetadataQueryOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/metadata_queries/execute_read'
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
  async searchForContent(
    queryParams: SearchForContentQueryParams = {} satisfies SearchForContentQueryParams,
    headersInput: SearchForContentHeadersInput = new SearchForContentHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<SearchResultsOrSearchResultsWithSharedLinks> {
    const headers: SearchForContentHeaders = new SearchForContentHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
      ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/search') as string,
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
export interface SearchManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeSearchForContentQueryParamsScopeField(
  val: SearchForContentQueryParamsScopeField
): SerializedData {
  return val;
}
export function deserializeSearchForContentQueryParamsScopeField(
  val: SerializedData
): SearchForContentQueryParamsScopeField {
  if (val == 'user_content') {
    return val;
  }
  if (val == 'enterprise_content') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize SearchForContentQueryParamsScopeField",
  });
}
export function serializeSearchForContentQueryParamsContentTypesField(
  val: SearchForContentQueryParamsContentTypesField
): SerializedData {
  return val;
}
export function deserializeSearchForContentQueryParamsContentTypesField(
  val: SerializedData
): SearchForContentQueryParamsContentTypesField {
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
  throw new BoxSdkError({
    message: "Can't deserialize SearchForContentQueryParamsContentTypesField",
  });
}
export function serializeSearchForContentQueryParamsTypeField(
  val: SearchForContentQueryParamsTypeField
): SerializedData {
  return val;
}
export function deserializeSearchForContentQueryParamsTypeField(
  val: SerializedData
): SearchForContentQueryParamsTypeField {
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
export function serializeSearchForContentQueryParamsTrashContentField(
  val: SearchForContentQueryParamsTrashContentField
): SerializedData {
  return val;
}
export function deserializeSearchForContentQueryParamsTrashContentField(
  val: SerializedData
): SearchForContentQueryParamsTrashContentField {
  if (val == 'non_trashed_only') {
    return val;
  }
  if (val == 'trashed_only') {
    return val;
  }
  if (val == 'all_items') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize SearchForContentQueryParamsTrashContentField",
  });
}
export function serializeSearchForContentQueryParamsSortField(
  val: SearchForContentQueryParamsSortField
): SerializedData {
  return val;
}
export function deserializeSearchForContentQueryParamsSortField(
  val: SerializedData
): SearchForContentQueryParamsSortField {
  if (val == 'modified_at') {
    return val;
  }
  if (val == 'relevance') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize SearchForContentQueryParamsSortField",
  });
}
export function serializeSearchForContentQueryParamsDirectionField(
  val: SearchForContentQueryParamsDirectionField
): SerializedData {
  return val;
}
export function deserializeSearchForContentQueryParamsDirectionField(
  val: SerializedData
): SearchForContentQueryParamsDirectionField {
  if (val == 'DESC') {
    return val;
  }
  if (val == 'ASC') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize SearchForContentQueryParamsDirectionField",
  });
}
