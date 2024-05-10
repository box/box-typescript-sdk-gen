import { serializeDevicePinner } from '../schemas/devicePinner.generated.js';
import { deserializeDevicePinner } from '../schemas/devicePinner.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeDevicePinners } from '../schemas/devicePinners.generated.js';
import { deserializeDevicePinners } from '../schemas/devicePinners.generated.js';
import { DevicePinner } from '../schemas/devicePinner.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { DevicePinners } from '../schemas/devicePinners.generated.js';
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
export class GetDevicePinnerByIdOptionals {
  readonly headers: GetDevicePinnerByIdHeaders = new GetDevicePinnerByIdHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetDevicePinnerByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetDevicePinnerByIdOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetDevicePinnerByIdOptionalsInput {
  readonly headers?: GetDevicePinnerByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteDevicePinnerByIdOptionals {
  readonly headers: DeleteDevicePinnerByIdHeaders =
    new DeleteDevicePinnerByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteDevicePinnerByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<DeleteDevicePinnerByIdOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface DeleteDevicePinnerByIdOptionalsInput {
  readonly headers?: DeleteDevicePinnerByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetEnterpriseDevicePinnersOptionals {
  readonly queryParams: GetEnterpriseDevicePinnersQueryParams =
    {} satisfies GetEnterpriseDevicePinnersQueryParams;
  readonly headers: GetEnterpriseDevicePinnersHeaders =
    new GetEnterpriseDevicePinnersHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetEnterpriseDevicePinnersOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetEnterpriseDevicePinnersOptionals,
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
export interface GetEnterpriseDevicePinnersOptionalsInput {
  readonly queryParams?: GetEnterpriseDevicePinnersQueryParams;
  readonly headers?: GetEnterpriseDevicePinnersHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetDevicePinnerByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetDevicePinnerByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetDevicePinnerByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<DeleteDevicePinnerByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteDevicePinnerByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<GetEnterpriseDevicePinnersHeaders, 'extraHeaders'> &
      Partial<Pick<GetEnterpriseDevicePinnersHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<
      DevicePinnersManager,
      | 'networkSession'
      | 'getDevicePinnerById'
      | 'deleteDevicePinnerById'
      | 'getEnterpriseDevicePinners'
    > &
      Partial<Pick<DevicePinnersManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getDevicePinnerById(
    devicePinnerId: string,
    optionalsInput: GetDevicePinnerByIdOptionalsInput = {}
  ): Promise<DevicePinner> {
    const optionals: GetDevicePinnerByIdOptionals =
      new GetDevicePinnerByIdOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: DeleteDevicePinnerByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteDevicePinnerByIdOptionals =
      new DeleteDevicePinnerByIdOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: GetEnterpriseDevicePinnersOptionalsInput = {}
  ): Promise<DevicePinners> {
    const optionals: GetEnterpriseDevicePinnersOptionals =
      new GetEnterpriseDevicePinnersOptionals({
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
  val: GetEnterpriseDevicePinnersQueryParamsDirectionField
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
