import { serializeCollections } from '../schemas.generated.js';
import { deserializeCollections } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeItems } from '../schemas.generated.js';
import { deserializeItems } from '../schemas.generated.js';
import { Collections } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Items } from '../schemas.generated.js';
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
export interface GetCollectionsQueryParamsArg {
  readonly fields?: readonly string[];
  readonly offset?: number;
  readonly limit?: number;
}
export class GetCollectionsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetCollectionsHeadersArg) {
    Object.assign(this, fields);
  }
}
export interface GetCollectionItemsQueryParamsArg {
  readonly fields?: readonly string[];
  readonly offset?: number;
  readonly limit?: number;
}
export class GetCollectionItemsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetCollectionItemsHeadersArg) {
    Object.assign(this, fields);
  }
}
export class CollectionsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<CollectionsManager, 'getCollections' | 'getCollectionItems'>
  ) {
    Object.assign(this, fields);
  }
  async getCollections(
    queryParams: GetCollectionsQueryParamsArg = {} satisfies GetCollectionsQueryParamsArg,
    headers: GetCollectionsHeadersArg = new GetCollectionsHeadersArg({})
  ): Promise<Collections> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
      ['offset']: toString(queryParams.offset) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/collections') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeCollections(deserializeJson(response.text));
  }
  async getCollectionItems(
    collectionId: string,
    queryParams: GetCollectionItemsQueryParamsArg = {} satisfies GetCollectionItemsQueryParamsArg,
    headers: GetCollectionItemsHeadersArg = new GetCollectionItemsHeadersArg({})
  ): Promise<Items> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
      ['offset']: toString(queryParams.offset) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/collections/',
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
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeItems(deserializeJson(response.text));
  }
}
