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
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { serializeJson } from '../json.js';
import { isJson } from '../json.js';
export class GetShieldInformationBarrierByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetShieldInformationBarrierByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetShieldInformationBarrierByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField =
  'pending' | 'disabled';
export interface CreateShieldInformationBarrierChangeStatusRequestBodyArg {
  readonly id: string;
  readonly status: CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField;
}
export class CreateShieldInformationBarrierChangeStatusHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          CreateShieldInformationBarrierChangeStatusHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            CreateShieldInformationBarrierChangeStatusHeadersArg,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface GetShieldInformationBarriersQueryParamsArg {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetShieldInformationBarriersHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetShieldInformationBarriersHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetShieldInformationBarriersHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateShieldInformationBarrierRequestBodyArg {
  readonly enterprise: EnterpriseBase;
}
export class CreateShieldInformationBarrierHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateShieldInformationBarrierHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateShieldInformationBarrierHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class ShieldInformationBarriersManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      ShieldInformationBarriersManager,
      | 'getShieldInformationBarrierById'
      | 'createShieldInformationBarrierChangeStatus'
      | 'getShieldInformationBarriers'
      | 'createShieldInformationBarrier'
    >
  ) {
    Object.assign(this, fields);
  }
  async getShieldInformationBarrierById(
    shieldInformationBarrierId: string,
    headers: GetShieldInformationBarrierByIdHeadersArg = new GetShieldInformationBarrierByIdHeadersArg(
      {}
    )
  ): Promise<ShieldInformationBarrier> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/shield_information_barriers/',
        toString(shieldInformationBarrierId) as string
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrier(deserializeJson(response.text));
  }
  async createShieldInformationBarrierChangeStatus(
    requestBody: CreateShieldInformationBarrierChangeStatusRequestBodyArg,
    headers: CreateShieldInformationBarrierChangeStatusHeadersArg = new CreateShieldInformationBarrierChangeStatusHeadersArg(
      {}
    )
  ): Promise<ShieldInformationBarrier> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/shield_information_barriers/change_status'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateShieldInformationBarrierChangeStatusRequestBodyArg(
            requestBody
          )
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrier(deserializeJson(response.text));
  }
  async getShieldInformationBarriers(
    queryParams: GetShieldInformationBarriersQueryParamsArg = {} satisfies GetShieldInformationBarriersQueryParamsArg,
    headers: GetShieldInformationBarriersHeadersArg = new GetShieldInformationBarriersHeadersArg(
      {}
    )
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
        'https://api.box.com/2.0/shield_information_barriers'
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
    return deserializeShieldInformationBarriers(deserializeJson(response.text));
  }
  async createShieldInformationBarrier(
    requestBody: CreateShieldInformationBarrierRequestBodyArg,
    headers: CreateShieldInformationBarrierHeadersArg = new CreateShieldInformationBarrierHeadersArg(
      {}
    )
  ): Promise<ShieldInformationBarrier> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/shield_information_barriers'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateShieldInformationBarrierRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrier(deserializeJson(response.text));
  }
}
export function serializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField(
  val: CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField
): Json {
  return val;
}
export function deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField(
  val: any
): CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField"';
  }
  if (val == 'pending') {
    return 'pending';
  }
  if (val == 'disabled') {
    return 'disabled';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateShieldInformationBarrierChangeStatusRequestBodyArg(
  val: CreateShieldInformationBarrierChangeStatusRequestBodyArg
): Json {
  return {
    ['id']: val.id,
    ['status']:
      serializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField(
        val.status
      ),
  };
}
export function deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArg(
  val: any
): CreateShieldInformationBarrierChangeStatusRequestBodyArg {
  const id: string = val.id;
  const status: CreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField =
    deserializeCreateShieldInformationBarrierChangeStatusRequestBodyArgStatusField(
      val.status
    );
  return {
    id: id,
    status: status,
  } satisfies CreateShieldInformationBarrierChangeStatusRequestBodyArg;
}
export function serializeCreateShieldInformationBarrierRequestBodyArg(
  val: CreateShieldInformationBarrierRequestBodyArg
): Json {
  return { ['enterprise']: serializeEnterpriseBase(val.enterprise) };
}
export function deserializeCreateShieldInformationBarrierRequestBodyArg(
  val: any
): CreateShieldInformationBarrierRequestBodyArg {
  const enterprise: EnterpriseBase = deserializeEnterpriseBase(val.enterprise);
  return {
    enterprise: enterprise,
  } satisfies CreateShieldInformationBarrierRequestBodyArg;
}
