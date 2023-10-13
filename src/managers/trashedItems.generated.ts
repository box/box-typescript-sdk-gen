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
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { isJson } from '../json.js';
export type GetFolderTrashItemsQueryParamsArgDirectionField = 'ASC' | 'DESC';
export type GetFolderTrashItemsQueryParamsArgSortField =
  | 'name'
  | 'date'
  | 'size';
export interface GetFolderTrashItemsQueryParamsArg {
  readonly fields?: readonly string[];
  readonly limit?: number;
  readonly offset?: number;
  readonly usemarker?: boolean;
  readonly marker?: string;
  readonly direction?: GetFolderTrashItemsQueryParamsArgDirectionField;
  readonly sort?: GetFolderTrashItemsQueryParamsArgSortField;
}
export class GetFolderTrashItemsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFolderTrashItemsHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetFolderTrashItemsHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class TrashedItemsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(fields: Omit<TrashedItemsManager, 'getFolderTrashItems'>) {
    Object.assign(this, fields);
  }
  async getFolderTrashItems(
    queryParams: GetFolderTrashItemsQueryParamsArg = {} satisfies GetFolderTrashItemsQueryParamsArg,
    headers: GetFolderTrashItemsHeadersArg = new GetFolderTrashItemsHeadersArg(
      {}
    )
  ): Promise<Items> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
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
      ''.concat('https://api.box.com/2.0/folders/trash/items') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeItems(deserializeJson(response.text));
  }
}
export function serializeGetFolderTrashItemsQueryParamsArgDirectionField(
  val: GetFolderTrashItemsQueryParamsArgDirectionField
): Json {
  return val;
}
export function deserializeGetFolderTrashItemsQueryParamsArgDirectionField(
  val: any
): GetFolderTrashItemsQueryParamsArgDirectionField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetFolderTrashItemsQueryParamsArgDirectionField"';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGetFolderTrashItemsQueryParamsArgSortField(
  val: GetFolderTrashItemsQueryParamsArgSortField
): Json {
  return val;
}
export function deserializeGetFolderTrashItemsQueryParamsArgSortField(
  val: any
): GetFolderTrashItemsQueryParamsArgSortField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetFolderTrashItemsQueryParamsArgSortField"';
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
