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
import { NetworkSession } from '../network.js';
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
export class GetDevicePinnerByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetDevicePinnerByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetDevicePinnerByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteDevicePinnerByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteDevicePinnerByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteDevicePinnerByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type GetEnterpriseDevicePinnersQueryParamsArgDirectionField =
  | 'ASC'
  | 'DESC';
export interface GetEnterpriseDevicePinnersQueryParamsArg {
  readonly marker?: string;
  readonly limit?: number;
  readonly direction?: GetEnterpriseDevicePinnersQueryParamsArgDirectionField;
}
export class GetEnterpriseDevicePinnersHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetEnterpriseDevicePinnersHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetEnterpriseDevicePinnersHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DevicePinnersManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      DevicePinnersManager,
      | 'getDevicePinnerById'
      | 'deleteDevicePinnerById'
      | 'getEnterpriseDevicePinners'
    >
  ) {
    Object.assign(this, fields);
  }
  async getDevicePinnerById(
    devicePinnerId: string,
    headers: GetDevicePinnerByIdHeadersArg = new GetDevicePinnerByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<DevicePinner> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/device_pinners/',
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
    headers: DeleteDevicePinnerByIdHeadersArg = new DeleteDevicePinnerByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/device_pinners/',
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
    queryParams: GetEnterpriseDevicePinnersQueryParamsArg = {} satisfies GetEnterpriseDevicePinnersQueryParamsArg,
    headers: GetEnterpriseDevicePinnersHeadersArg = new GetEnterpriseDevicePinnersHeadersArg(
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
        'https://api.box.com/2.0/enterprises/',
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
export function serializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField(
  val: GetEnterpriseDevicePinnersQueryParamsArgDirectionField
): SerializedData {
  return val;
}
export function deserializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField(
  val: any
): GetEnterpriseDevicePinnersQueryParamsArgDirectionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetEnterpriseDevicePinnersQueryParamsArgDirectionField"';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
