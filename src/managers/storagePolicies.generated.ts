import { serializeStoragePolicies } from '../schemas.generated.js';
import { deserializeStoragePolicies } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeStoragePolicy } from '../schemas.generated.js';
import { deserializeStoragePolicy } from '../schemas.generated.js';
import { StoragePolicies } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { StoragePolicy } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.generated.js';
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
