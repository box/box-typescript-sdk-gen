import { serializeRecentItems } from '../schemas.generated.js';
import { deserializeRecentItems } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { RecentItems } from '../schemas.generated.js';
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
export interface GetRecentItemsQueryParamsArg {
  readonly fields?: readonly string[];
  readonly limit?: number;
  readonly marker?: string;
}
export class GetRecentItemsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetRecentItemsHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetRecentItemsHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class RecentItemsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(fields: Omit<RecentItemsManager, 'getRecentItems'>) {
    Object.assign(this, fields);
  }
  async getRecentItems(
    queryParams: GetRecentItemsQueryParamsArg = {} satisfies GetRecentItemsQueryParamsArg,
    headers: GetRecentItemsHeadersArg = new GetRecentItemsHeadersArg({})
  ): Promise<RecentItems> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
      ['limit']: toString(queryParams.limit) as string,
      ['marker']: toString(queryParams.marker) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/recent_items') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeRecentItems(deserializeJson(response.text));
  }
}
