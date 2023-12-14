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
export interface GetRecentItemsQueryParams {
  readonly fields?: readonly string[];
  readonly limit?: number;
  readonly marker?: string;
}
export class GetRecentItemsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetRecentItemsHeaders, 'extraHeaders'>
      | Partial<Pick<GetRecentItemsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class RecentItemsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<RecentItemsManager, 'networkSession' | 'getRecentItems'>
      | Partial<Pick<RecentItemsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getRecentItems(
    queryParams: GetRecentItemsQueryParams = {} satisfies GetRecentItemsQueryParams,
    headers: GetRecentItemsHeaders = new GetRecentItemsHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<RecentItems> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
      ['limit']: toString(queryParams.limit) as string,
      ['marker']: toString(queryParams.marker) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/recent_items'
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
    return deserializeRecentItems(response.data);
  }
}
