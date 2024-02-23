import { serializeStoragePolicies } from '../schemas.generated.js';
import { deserializeStoragePolicies } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeStoragePolicy } from '../schemas.generated.js';
import { deserializeStoragePolicy } from '../schemas.generated.js';
import { StoragePolicies } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { StoragePolicy } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.js';
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
export interface GetStoragePoliciesQueryParams {
  readonly fields?: readonly string[];
  readonly marker?: string;
  readonly limit?: number;
}
export class GetStoragePoliciesHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetStoragePoliciesHeaders, 'extraHeaders'>
      | Partial<Pick<GetStoragePoliciesHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetStoragePolicyByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetStoragePolicyByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetStoragePolicyByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class StoragePoliciesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          StoragePoliciesManager,
          'networkSession' | 'getStoragePolicies' | 'getStoragePolicyById'
        >
      | Partial<Pick<StoragePoliciesManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getStoragePolicies(
    queryParams: GetStoragePoliciesQueryParams = {} satisfies GetStoragePoliciesQueryParams,
    headers: GetStoragePoliciesHeaders = new GetStoragePoliciesHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<StoragePolicies> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/storage_policies'
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
    return deserializeStoragePolicies(response.data);
  }
  async getStoragePolicyById(
    storagePolicyId: string,
    headers: GetStoragePolicyByIdHeaders = new GetStoragePolicyByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<StoragePolicy> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/storage_policies/',
        toString(storagePolicyId) as string
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeStoragePolicy(response.data);
  }
}
