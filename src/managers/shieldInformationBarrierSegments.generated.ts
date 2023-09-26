import { serializeShieldInformationBarrierSegment } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegment } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeShieldInformationBarrierBase } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierBase } from '../schemas.generated.js';
import { ShieldInformationBarrierSegment } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { ShieldInformationBarrierBase } from '../schemas.generated.js';
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
export class GetShieldInformationBarrierSegmentByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetShieldInformationBarrierSegmentByIdHeadersArg) {
    Object.assign(this, fields);
  }
}
export interface UpdateShieldInformationBarrierSegmentByIdRequestBodyArg {
  readonly name?: string;
  readonly description?: string;
}
export class UpdateShieldInformationBarrierSegmentByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: UpdateShieldInformationBarrierSegmentByIdHeadersArg) {
    Object.assign(this, fields);
  }
}
export class DeleteShieldInformationBarrierSegmentByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: DeleteShieldInformationBarrierSegmentByIdHeadersArg) {
    Object.assign(this, fields);
  }
}
export interface GetShieldInformationBarrierSegmentsQueryParamsArg {
  readonly shieldInformationBarrierId: string;
  readonly marker?: string;
  readonly limit?: number;
}
export class GetShieldInformationBarrierSegmentsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetShieldInformationBarrierSegmentsHeadersArg) {
    Object.assign(this, fields);
  }
}
export interface CreateShieldInformationBarrierSegmentRequestBodyArg {
  readonly shieldInformationBarrier: ShieldInformationBarrierBase;
  readonly name: string;
  readonly description?: string;
}
export class CreateShieldInformationBarrierSegmentHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: CreateShieldInformationBarrierSegmentHeadersArg) {
    Object.assign(this, fields);
  }
}
export class ShieldInformationBarrierSegmentsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      ShieldInformationBarrierSegmentsManager,
      | 'getShieldInformationBarrierSegmentById'
      | 'updateShieldInformationBarrierSegmentById'
      | 'deleteShieldInformationBarrierSegmentById'
      | 'getShieldInformationBarrierSegments'
      | 'createShieldInformationBarrierSegment'
    >
  ) {
    Object.assign(this, fields);
  }
  async getShieldInformationBarrierSegmentById(
    shieldInformationBarrierSegmentId: string,
    headers: GetShieldInformationBarrierSegmentByIdHeadersArg = new GetShieldInformationBarrierSegmentByIdHeadersArg(
      {}
    )
  ): Promise<ShieldInformationBarrierSegment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/shield_information_barrier_segments/',
        toString(shieldInformationBarrierSegmentId) as string
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrierSegment(
      deserializeJson(response.text)
    );
  }
  async updateShieldInformationBarrierSegmentById(
    shieldInformationBarrierSegmentId: string,
    requestBody: UpdateShieldInformationBarrierSegmentByIdRequestBodyArg = {} satisfies UpdateShieldInformationBarrierSegmentByIdRequestBodyArg,
    headers: UpdateShieldInformationBarrierSegmentByIdHeadersArg = new UpdateShieldInformationBarrierSegmentByIdHeadersArg(
      {}
    )
  ): Promise<ShieldInformationBarrierSegment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/shield_information_barrier_segments/',
        toString(shieldInformationBarrierSegmentId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        body: serializeJson(
          serializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg(
            requestBody
          )
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrierSegment(
      deserializeJson(response.text)
    );
  }
  async deleteShieldInformationBarrierSegmentById(
    shieldInformationBarrierSegmentId: string,
    headers: DeleteShieldInformationBarrierSegmentByIdHeadersArg = new DeleteShieldInformationBarrierSegmentByIdHeadersArg(
      {}
    )
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/shield_information_barrier_segments/',
        toString(shieldInformationBarrierSegmentId) as string
      ) as string,
      {
        method: 'DELETE',
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
  async getShieldInformationBarrierSegments(
    queryParams: GetShieldInformationBarrierSegmentsQueryParamsArg,
    headers: GetShieldInformationBarrierSegmentsHeadersArg = new GetShieldInformationBarrierSegmentsHeadersArg(
      {}
    )
  ): Promise<undefined> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['shield_information_barrier_id']: toString(
        queryParams.shieldInformationBarrierId
      ) as string,
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/shield_information_barrier_segments'
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
    return void 0;
  }
  async createShieldInformationBarrierSegment(
    requestBody: CreateShieldInformationBarrierSegmentRequestBodyArg,
    headers: CreateShieldInformationBarrierSegmentHeadersArg = new CreateShieldInformationBarrierSegmentHeadersArg(
      {}
    )
  ): Promise<ShieldInformationBarrierSegment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/shield_information_barrier_segments'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateShieldInformationBarrierSegmentRequestBodyArg(
            requestBody
          )
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrierSegment(
      deserializeJson(response.text)
    );
  }
}
export function serializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg(
  val: UpdateShieldInformationBarrierSegmentByIdRequestBodyArg
): Json {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['description']: val.description == void 0 ? void 0 : val.description,
  };
}
export function deserializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg(
  val: any
): UpdateShieldInformationBarrierSegmentByIdRequestBodyArg {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  return {
    name: name,
    description: description,
  } satisfies UpdateShieldInformationBarrierSegmentByIdRequestBodyArg;
}
export function serializeCreateShieldInformationBarrierSegmentRequestBodyArg(
  val: CreateShieldInformationBarrierSegmentRequestBodyArg
): Json {
  return {
    ['shield_information_barrier']: serializeShieldInformationBarrierBase(
      val.shieldInformationBarrier
    ),
    ['name']: val.name,
    ['description']: val.description == void 0 ? void 0 : val.description,
  };
}
export function deserializeCreateShieldInformationBarrierSegmentRequestBodyArg(
  val: any
): CreateShieldInformationBarrierSegmentRequestBodyArg {
  const shieldInformationBarrier: ShieldInformationBarrierBase =
    deserializeShieldInformationBarrierBase(val.shield_information_barrier);
  const name: string = val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  return {
    shieldInformationBarrier: shieldInformationBarrier,
    name: name,
    description: description,
  } satisfies CreateShieldInformationBarrierSegmentRequestBodyArg;
}
