import { serializeCollections } from '../schemas/collections.generated.js';
import { deserializeCollections } from '../schemas/collections.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeItems } from '../schemas/items.generated.js';
import { deserializeItems } from '../schemas/items.generated.js';
import { Collections } from '../schemas/collections.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { Items } from '../schemas/items.generated.js';
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
export class GetCollectionItemsOptionals {
  readonly queryParams: GetCollectionItemsQueryParams =
    {} satisfies GetCollectionItemsQueryParams;
  readonly headers: GetCollectionItemsHeaders = new GetCollectionItemsHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetCollectionItemsOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetCollectionItemsOptionals,
          'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetCollectionItemsOptionalsInput {
  readonly queryParams?: GetCollectionItemsQueryParams;
  readonly headers?: GetCollectionItemsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetCollectionsQueryParams {
  /**
   * A comma-separated list of attributes to include in the
   * response. This can be used to request fields that are
   * not normally returned in a standard response.
   *
   * Be aware that specifying this parameter will have the
   * effect that none of the standard fields are returned in
   * the response unless explicitly specified, instead only
   * fields for the mini representation are returned, additional
   * to the fields requested. */
  readonly fields?: readonly string[];
  /**
   * The offset of the item at which to begin the response.
   *
   * Queries with offset parameter value
   * exceeding 10000 will be rejected
   * with a 400 response. */
  readonly offset?: number;
  /**
   * The maximum number of items to return per page. */
  readonly limit?: number;
}
export class GetCollectionsHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetCollectionsHeaders, 'extraHeaders'> &
      Partial<Pick<GetCollectionsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetCollectionsHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetCollectionItemsQueryParams {
  /**
   * A comma-separated list of attributes to include in the
   * response. This can be used to request fields that are
   * not normally returned in a standard response.
   *
   * Be aware that specifying this parameter will have the
   * effect that none of the standard fields are returned in
   * the response unless explicitly specified, instead only
   * fields for the mini representation are returned, additional
   * to the fields requested. */
  readonly fields?: readonly string[];
  /**
   * The offset of the item at which to begin the response.
   *
   * Queries with offset parameter value
   * exceeding 10000 will be rejected
   * with a 400 response. */
  readonly offset?: number;
  /**
   * The maximum number of items to return per page. */
  readonly limit?: number;
}
export class GetCollectionItemsHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetCollectionItemsHeaders, 'extraHeaders'> &
      Partial<Pick<GetCollectionItemsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetCollectionItemsHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class CollectionsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      CollectionsManager,
      'networkSession' | 'getCollections' | 'getCollectionItems'
    > &
      Partial<Pick<CollectionsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  /**
   * Retrieves all collections for a given user.
   *
   * Currently, only the `favorites` collection
   * is supported.
   * @param {GetCollectionsQueryParams} queryParams Query parameters of getCollections method
   * @param {GetCollectionsHeadersInput} headersInput Headers of getCollections method
   * @param {CancellationToken} cancellationToken Token used for request cancellation.
   * @returns {Promise<Collections>}
   */
  async getCollections(
    queryParams: GetCollectionsQueryParams = {} satisfies GetCollectionsQueryParams,
    headersInput: GetCollectionsHeadersInput = new GetCollectionsHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Collections> {
    const headers: GetCollectionsHeaders = new GetCollectionsHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
    const response: FetchResponse = (await fetch({
      url: ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/collections'
      ) as string,
      method: 'GET',
      params: queryParamsMap,
      headers: headersMap,
      responseFormat: 'json',
      auth: this.auth,
      networkSession: this.networkSession,
      cancellationToken: cancellationToken,
    } satisfies FetchOptions)) as FetchResponse;
    return deserializeCollections(response.data);
  }
  /**
     * Retrieves the files and/or folders contained within
     * this collection.
     * @param {string} collectionId The ID of the collection.
    Example: "926489"
     * @param {GetCollectionItemsOptionalsInput} optionalsInput
     * @returns {Promise<Items>}
     */
  async getCollectionItems(
    collectionId: string,
    optionalsInput: GetCollectionItemsOptionalsInput = {}
  ): Promise<Items> {
    const optionals: GetCollectionItemsOptionals =
      new GetCollectionItemsOptionals({
        queryParams: optionalsInput.queryParams,
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    const response: FetchResponse = (await fetch({
      url: ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/collections/',
        toString(collectionId) as string,
        '/items'
      ) as string,
      method: 'GET',
      params: queryParamsMap,
      headers: headersMap,
      responseFormat: 'json',
      auth: this.auth,
      networkSession: this.networkSession,
      cancellationToken: cancellationToken,
    } satisfies FetchOptions)) as FetchResponse;
    return deserializeItems(response.data);
  }
}
export interface CollectionsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
