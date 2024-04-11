import { serializeDevicePinner } from '../schemas.generated.js';
import { deserializeDevicePinner } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeDevicePinners } from '../schemas.generated.js';
import { deserializeDevicePinners } from '../schemas.generated.js';
import { DevicePinner } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { DevicePinners } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
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
export interface GetDevicePinnerByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
export interface DeleteDevicePinnerByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
export interface GetEnterpriseDevicePinnersHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    headersInput: GetDevicePinnerByIdHeadersInput = new GetDevicePinnerByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<DevicePinner> {
    const headers: any = new GetDevicePinnerByIdHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
    headersInput: DeleteDevicePinnerByIdHeadersInput = new DeleteDevicePinnerByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headers: any = new DeleteDevicePinnerByIdHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
    headersInput: GetEnterpriseDevicePinnersHeadersInput = new GetEnterpriseDevicePinnersHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<DevicePinners> {
    const headers: any = new GetEnterpriseDevicePinnersHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
export interface DevicePinnersManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeGetEnterpriseDevicePinnersQueryParamsDirectionField(
  val: any
): SerializedData {
  return val;
}
export function deserializeGetEnterpriseDevicePinnersQueryParamsDirectionField(
  val: any
): GetEnterpriseDevicePinnersQueryParamsDirectionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "GetEnterpriseDevicePinnersQueryParamsDirectionField"',
    });
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
