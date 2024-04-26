import { serializeShieldInformationBarrier } from '../schemas.generated.js';
import { deserializeShieldInformationBarrier } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeShieldInformationBarriers } from '../schemas.generated.js';
import { deserializeShieldInformationBarriers } from '../schemas.generated.js';
import { serializeEnterpriseBase } from '../schemas.generated.js';
import { deserializeEnterpriseBase } from '../schemas.generated.js';
import { ShieldInformationBarrier } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { ShieldInformationBarriers } from '../schemas.generated.js';
import { EnterpriseBase } from '../schemas.generated.js';
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
export class GetShieldInformationBarrierByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetShieldInformationBarrierByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetShieldInformationBarrierByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetShieldInformationBarrierByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateShieldInformationBarrierStatusRequestBodyStatusField =
  | 'pending'
  | 'disabled';
export interface UpdateShieldInformationBarrierStatusRequestBody {
  readonly id: string;
  readonly status: UpdateShieldInformationBarrierStatusRequestBodyStatusField;
}
export class UpdateShieldInformationBarrierStatusHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateShieldInformationBarrierStatusHeaders, 'extraHeaders'>
      | Partial<
          Pick<UpdateShieldInformationBarrierStatusHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateShieldInformationBarrierStatusHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetShieldInformationBarriersQueryParams {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetShieldInformationBarriersHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetShieldInformationBarriersHeaders, 'extraHeaders'>
      | Partial<Pick<GetShieldInformationBarriersHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetShieldInformationBarriersHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface CreateShieldInformationBarrierRequestBody {
  readonly enterprise: EnterpriseBase;
}
export class CreateShieldInformationBarrierHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateShieldInformationBarrierHeaders, 'extraHeaders'>
      | Partial<Pick<CreateShieldInformationBarrierHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateShieldInformationBarrierHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class ShieldInformationBarriersManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          ShieldInformationBarriersManager,
          | 'networkSession'
          | 'getShieldInformationBarrierById'
          | 'updateShieldInformationBarrierStatus'
          | 'getShieldInformationBarriers'
          | 'createShieldInformationBarrier'
        >
      | Partial<Pick<ShieldInformationBarriersManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getShieldInformationBarrierById(
    shieldInformationBarrierId: string,
    headersInput: GetShieldInformationBarrierByIdHeadersInput = new GetShieldInformationBarrierByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrier> {
    const headers: any = new GetShieldInformationBarrierByIdHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/shield_information_barriers/',
        toString(shieldInformationBarrierId) as string
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
    return deserializeShieldInformationBarrier(response.data);
  }
  async updateShieldInformationBarrierStatus(
    requestBody: UpdateShieldInformationBarrierStatusRequestBody,
    headersInput: UpdateShieldInformationBarrierStatusHeadersInput = new UpdateShieldInformationBarrierStatusHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrier> {
    const headers: any = new UpdateShieldInformationBarrierStatusHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/shield_information_barriers/change_status'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeUpdateShieldInformationBarrierStatusRequestBody(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrier(response.data);
  }
  async getShieldInformationBarriers(
    queryParams: GetShieldInformationBarriersQueryParams = {} satisfies GetShieldInformationBarriersQueryParams,
    headersInput: GetShieldInformationBarriersHeadersInput = new GetShieldInformationBarriersHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarriers> {
    const headers: any = new GetShieldInformationBarriersHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/shield_information_barriers'
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
    return deserializeShieldInformationBarriers(response.data);
  }
  async createShieldInformationBarrier(
    requestBody: CreateShieldInformationBarrierRequestBody,
    headersInput: CreateShieldInformationBarrierHeadersInput = new CreateShieldInformationBarrierHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrier> {
    const headers: any = new CreateShieldInformationBarrierHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/shield_information_barriers'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateShieldInformationBarrierRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrier(response.data);
  }
}
export interface ShieldInformationBarriersManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(
  val: any
): UpdateShieldInformationBarrierStatusRequestBodyStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateShieldInformationBarrierStatusRequestBodyStatusField"',
    });
  }
  if (val == 'pending') {
    return 'pending';
  }
  if (val == 'disabled') {
    return 'disabled';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateShieldInformationBarrierStatusRequestBody(
  val: any
): SerializedData {
  return {
    ['id']: val.id,
    ['status']:
      serializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(
        val.status
      ),
  };
}
export function deserializeUpdateShieldInformationBarrierStatusRequestBody(
  val: any
): UpdateShieldInformationBarrierStatusRequestBody {
  const id: string = val.id;
  const status: UpdateShieldInformationBarrierStatusRequestBodyStatusField =
    deserializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(
      val.status
    );
  return {
    id: id,
    status: status,
  } satisfies UpdateShieldInformationBarrierStatusRequestBody;
}
export function serializeCreateShieldInformationBarrierRequestBody(
  val: any
): SerializedData {
  return { ['enterprise']: serializeEnterpriseBase(val.enterprise) };
}
export function deserializeCreateShieldInformationBarrierRequestBody(
  val: any
): CreateShieldInformationBarrierRequestBody {
  const enterprise: EnterpriseBase = deserializeEnterpriseBase(val.enterprise);
  return {
    enterprise: enterprise,
  } satisfies CreateShieldInformationBarrierRequestBody;
}
