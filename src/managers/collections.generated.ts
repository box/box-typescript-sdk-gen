import { serializeCollections } from '../schemas.generated.js';
import { deserializeCollections } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeItems } from '../schemas.generated.js';
import { deserializeItems } from '../schemas.generated.js';
import { Collections } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Items } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface GetCollectionsQueryParams {
  readonly fields?: readonly string[];
  readonly offset?: number;
  readonly limit?: number;
}
export class GetCollectionsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetCollectionsHeaders, 'extraHeaders'>
      | Partial<Pick<GetCollectionsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetCollectionItemsQueryParams {
  readonly fields?: readonly string[];
  readonly offset?: number;
  readonly limit?: number;
}
export class GetCollectionItemsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetCollectionItemsHeaders, 'extraHeaders'>
      | Partial<Pick<GetCollectionItemsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class CollectionsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          CollectionsManager,
          'networkSession' | 'getCollections' | 'getCollectionItems'
        >
      | Partial<Pick<CollectionsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getCollections(
    queryParams: GetCollectionsQueryParams = {} satisfies GetCollectionsQueryParams,
    headers: GetCollectionsHeaders = new GetCollectionsHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Collections> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
      ['offset']: toString(queryParams.offset) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/collections') as string,
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
    return deserializeCollections(response.data);
  }
  async getCollectionItems(
    collectionId: string,
    queryParams: GetCollectionItemsQueryParams = {} satisfies GetCollectionItemsQueryParams,
    headers: GetCollectionItemsHeaders = new GetCollectionItemsHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Items> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
      ['offset']: toString(queryParams.offset) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/collections/',
        toString(collectionId) as string,
        '/items'
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
