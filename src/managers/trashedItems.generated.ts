import { serializeItems } from '../schemas.generated.js';
import { deserializeItems } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { Items } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { sdToJson } from '../json.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export type GetFolderTrashItemsQueryParamsDirectionField = 'ASC' | 'DESC';
export type GetFolderTrashItemsQueryParamsSortField = 'name' | 'date' | 'size';
export interface GetFolderTrashItemsQueryParams {
  readonly fields?: readonly string[];
  readonly limit?: number;
  readonly offset?: number;
  readonly usemarker?: boolean;
  readonly marker?: string;
  readonly direction?: GetFolderTrashItemsQueryParamsDirectionField;
  readonly sort?: GetFolderTrashItemsQueryParamsSortField;
}
export class GetFolderTrashItemsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFolderTrashItemsHeaders, 'extraHeaders'>
      | Partial<Pick<GetFolderTrashItemsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class TrashedItemsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<TrashedItemsManager, 'networkSession' | 'getFolderTrashItems'>
      | Partial<Pick<TrashedItemsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getFolderTrashItems(
    queryParams: GetFolderTrashItemsQueryParams = {} satisfies GetFolderTrashItemsQueryParams,
    headers: GetFolderTrashItemsHeaders = new GetFolderTrashItemsHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Items> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
      ['limit']: toString(queryParams.limit) as string,
      ['offset']: toString(queryParams.offset) as string,
      ['usemarker']: toString(queryParams.usemarker) as string,
      ['marker']: toString(queryParams.marker) as string,
      ['direction']: toString(queryParams.direction) as string,
      ['sort']: toString(queryParams.sort) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/folders/trash/items'
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
    return deserializeItems(response.data);
  }
}
export function serializeGetFolderTrashItemsQueryParamsDirectionField(
  val: GetFolderTrashItemsQueryParamsDirectionField
): SerializedData {
  return val;
}
export function deserializeGetFolderTrashItemsQueryParamsDirectionField(
  val: any
): GetFolderTrashItemsQueryParamsDirectionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetFolderTrashItemsQueryParamsDirectionField"';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGetFolderTrashItemsQueryParamsSortField(
  val: GetFolderTrashItemsQueryParamsSortField
): SerializedData {
  return val;
}
export function deserializeGetFolderTrashItemsQueryParamsSortField(
  val: any
): GetFolderTrashItemsQueryParamsSortField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetFolderTrashItemsQueryParamsSortField"';
  }
  if (val == 'name') {
    return 'name';
  }
  if (val == 'date') {
    return 'date';
  }
  if (val == 'size') {
    return 'size';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
