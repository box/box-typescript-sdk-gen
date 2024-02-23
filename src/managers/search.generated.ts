import { serializeMetadataQueryResults } from '../schemas.generated.js';
import { deserializeMetadataQueryResults } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeMetadataQuery } from '../schemas.generated.js';
import { deserializeMetadataQuery } from '../schemas.generated.js';
import { serializeSearchResultsOrSearchResultsWithSharedLinks } from '../schemas.generated.js';
import { deserializeSearchResultsOrSearchResultsWithSharedLinks } from '../schemas.generated.js';
import { serializeMetadataFilter } from '../schemas.generated.js';
import { deserializeMetadataFilter } from '../schemas.generated.js';
import { MetadataQueryResults } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { MetadataQuery } from '../schemas.generated.js';
import { SearchResultsOrSearchResultsWithSharedLinks } from '../schemas.generated.js';
import { MetadataFilter } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.js';
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
export class SearchByMetadataQueryHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<SearchByMetadataQueryHeaders, 'extraHeaders'>
      | Partial<Pick<SearchByMetadataQueryHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
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
    fields:
      | Omit<SearchForContentHeaders, 'extraHeaders'>
      | Partial<Pick<SearchForContentHeaders, 'extraHeaders'>>
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
          'networkSession' | 'searchByMetadataQuery' | 'searchForContent'
        >
      | Partial<Pick<SearchManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async searchByMetadataQuery(
    requestBody: MetadataQuery,
    headers: SearchByMetadataQueryHeaders = new SearchByMetadataQueryHeaders(
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
  async searchForContent(
    queryParams: SearchForContentQueryParams = {} satisfies SearchForContentQueryParams,
    headers: SearchForContentHeaders = new SearchForContentHeaders({}),
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
export function serializeSearchForContentQueryParamsScopeField(
  val: SearchForContentQueryParamsScopeField
): SerializedData {
  return val;
}
export function deserializeSearchForContentQueryParamsScopeField(
  val: any
): SearchForContentQueryParamsScopeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "SearchForContentQueryParamsScopeField"',
    });
  }
  if (val == 'user_content') {
    return 'user_content';
  }
  if (val == 'enterprise_content') {
    return 'enterprise_content';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSearchForContentQueryParamsContentTypesField(
  val: SearchForContentQueryParamsContentTypesField
): SerializedData {
  return val;
}
export function deserializeSearchForContentQueryParamsContentTypesField(
  val: any
): SearchForContentQueryParamsContentTypesField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "SearchForContentQueryParamsContentTypesField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSearchForContentQueryParamsTypeField(
  val: SearchForContentQueryParamsTypeField
): SerializedData {
  return val;
}
export function deserializeSearchForContentQueryParamsTypeField(
  val: any
): SearchForContentQueryParamsTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "SearchForContentQueryParamsTypeField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSearchForContentQueryParamsTrashContentField(
  val: SearchForContentQueryParamsTrashContentField
): SerializedData {
  return val;
}
export function deserializeSearchForContentQueryParamsTrashContentField(
  val: any
): SearchForContentQueryParamsTrashContentField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "SearchForContentQueryParamsTrashContentField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSearchForContentQueryParamsSortField(
  val: SearchForContentQueryParamsSortField
): SerializedData {
  return val;
}
export function deserializeSearchForContentQueryParamsSortField(
  val: any
): SearchForContentQueryParamsSortField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "SearchForContentQueryParamsSortField"',
    });
  }
  if (val == 'modified_at') {
    return 'modified_at';
  }
  if (val == 'relevance') {
    return 'relevance';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSearchForContentQueryParamsDirectionField(
  val: SearchForContentQueryParamsDirectionField
): SerializedData {
  return val;
}
export function deserializeSearchForContentQueryParamsDirectionField(
  val: any
): SearchForContentQueryParamsDirectionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "SearchForContentQueryParamsDirectionField"',
    });
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
