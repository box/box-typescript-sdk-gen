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
    headers: GetShieldInformationBarrierByIdHeaders = new GetShieldInformationBarrierByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrier> {
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
    headers: UpdateShieldInformationBarrierStatusHeaders = new UpdateShieldInformationBarrierStatusHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrier> {
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
    headers: GetShieldInformationBarriersHeaders = new GetShieldInformationBarriersHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarriers> {
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
    headers: CreateShieldInformationBarrierHeaders = new CreateShieldInformationBarrierHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrier> {
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
export function serializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(
  val: UpdateShieldInformationBarrierStatusRequestBodyStatusField
): SerializedData {
  return val;
}
export function deserializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(
  val: any
): UpdateShieldInformationBarrierStatusRequestBodyStatusField {
  if (!sdIsString(val)) {
    throw new Error(
      String(
        'Expecting a string for "UpdateShieldInformationBarrierStatusRequestBodyStatusField"'
      )
    );
  }
  if (val == 'pending') {
    return 'pending';
  }
  if (val == 'disabled') {
    return 'disabled';
  }
  throw new Error(String(''.concat('Invalid value: ', val) as string));
}
export function serializeUpdateShieldInformationBarrierStatusRequestBody(
  val: UpdateShieldInformationBarrierStatusRequestBody
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
  val: CreateShieldInformationBarrierRequestBody
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
