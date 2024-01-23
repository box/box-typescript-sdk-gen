import { serializeDevicePinner } from '../schemas.generated.js';
import { deserializeDevicePinner } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeDevicePinners } from '../schemas.generated.js';
import { deserializeDevicePinners } from '../schemas.generated.js';
import { DevicePinner } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { DevicePinners } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.generated.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export class GetDevicePinnerByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetDevicePinnerByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetDevicePinnerByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteDevicePinnerByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteDevicePinnerByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteDevicePinnerByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type GetEnterpriseDevicePinnersQueryParamsDirectionField =
  | 'ASC'
  | 'DESC';
export interface GetEnterpriseDevicePinnersQueryParams {
  readonly marker?: string;
  readonly limit?: number;
  readonly direction?: GetEnterpriseDevicePinnersQueryParamsDirectionField;
}
export class GetEnterpriseDevicePinnersHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetEnterpriseDevicePinnersHeaders, 'extraHeaders'>
      | Partial<Pick<GetEnterpriseDevicePinnersHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DevicePinnersManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          DevicePinnersManager,
          | 'networkSession'
          | 'getDevicePinnerById'
          | 'deleteDevicePinnerById'
          | 'getEnterpriseDevicePinners'
        >
      | Partial<Pick<DevicePinnersManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getDevicePinnerById(
    devicePinnerId: string,
    headers: GetDevicePinnerByIdHeaders = new GetDevicePinnerByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<DevicePinner> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/device_pinners/',
        toString(devicePinnerId) as string
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
    return deserializeDevicePinner(response.data);
  }
  async deleteDevicePinnerById(
    devicePinnerId: string,
    headers: DeleteDevicePinnerByIdHeaders = new DeleteDevicePinnerByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/device_pinners/',
        toString(devicePinnerId) as string
      ) as string,
      {
        method: 'DELETE',
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
  async getEnterpriseDevicePinners(
    enterpriseId: string,
    queryParams: GetEnterpriseDevicePinnersQueryParams = {} satisfies GetEnterpriseDevicePinnersQueryParams,
    headers: GetEnterpriseDevicePinnersHeaders = new GetEnterpriseDevicePinnersHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<DevicePinners> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
      ['direction']: toString(queryParams.direction) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/enterprises/',
        toString(enterpriseId) as string,
        '/device_pinners'
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
    return deserializeDevicePinners(response.data);
  }
}
export function serializeGetEnterpriseDevicePinnersQueryParamsDirectionField(
  val: GetEnterpriseDevicePinnersQueryParamsDirectionField
): SerializedData {
  return val;
}
export function deserializeGetEnterpriseDevicePinnersQueryParamsDirectionField(
  val: any
): GetEnterpriseDevicePinnersQueryParamsDirectionField {
  if (!sdIsString(val)) {
    throw new Error(
      String(
        'Expecting a string for "GetEnterpriseDevicePinnersQueryParamsDirectionField"'
      )
    );
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw new Error(String(''.concat('Invalid value: ', val) as string));
}
