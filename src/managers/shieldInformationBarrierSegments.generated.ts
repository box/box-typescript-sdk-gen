import { serializeShieldInformationBarrierSegment } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegment } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeShieldInformationBarrierSegments } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegments } from '../schemas.generated.js';
import { serializeShieldInformationBarrierBase } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierBase } from '../schemas.generated.js';
import { ShieldInformationBarrierSegment } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { ShieldInformationBarrierSegments } from '../schemas.generated.js';
import { ShieldInformationBarrierBase } from '../schemas.generated.js';
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
export class GetShieldInformationBarrierSegmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'>
      | Partial<
          Pick<GetShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateShieldInformationBarrierSegmentByIdRequestBody {
  readonly name?: string;
  readonly description?: string;
}
export class UpdateShieldInformationBarrierSegmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'>
      | Partial<
          Pick<UpdateShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteShieldInformationBarrierSegmentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'>
      | Partial<
          Pick<DeleteShieldInformationBarrierSegmentByIdHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface GetShieldInformationBarrierSegmentsQueryParams {
  readonly shieldInformationBarrierId: string;
  readonly marker?: string;
  readonly limit?: number;
}
export class GetShieldInformationBarrierSegmentsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetShieldInformationBarrierSegmentsHeaders, 'extraHeaders'>
      | Partial<
          Pick<GetShieldInformationBarrierSegmentsHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateShieldInformationBarrierSegmentRequestBody {
  readonly shieldInformationBarrier: ShieldInformationBarrierBase;
  readonly name: string;
  readonly description?: string;
}
export class CreateShieldInformationBarrierSegmentHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateShieldInformationBarrierSegmentHeaders, 'extraHeaders'>
      | Partial<
          Pick<CreateShieldInformationBarrierSegmentHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class ShieldInformationBarrierSegmentsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          ShieldInformationBarrierSegmentsManager,
          | 'networkSession'
          | 'getShieldInformationBarrierSegmentById'
          | 'updateShieldInformationBarrierSegmentById'
          | 'deleteShieldInformationBarrierSegmentById'
          | 'getShieldInformationBarrierSegments'
          | 'createShieldInformationBarrierSegment'
        >
      | Partial<Pick<ShieldInformationBarrierSegmentsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getShieldInformationBarrierSegmentById(
    shieldInformationBarrierSegmentId: string,
    headers: GetShieldInformationBarrierSegmentByIdHeaders = new GetShieldInformationBarrierSegmentByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/shield_information_barrier_segments/',
        toString(shieldInformationBarrierSegmentId) as string
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
    return deserializeShieldInformationBarrierSegment(response.data);
  }
  async updateShieldInformationBarrierSegmentById(
    shieldInformationBarrierSegmentId: string,
    requestBody: UpdateShieldInformationBarrierSegmentByIdRequestBody = {} satisfies UpdateShieldInformationBarrierSegmentByIdRequestBody,
    headers: UpdateShieldInformationBarrierSegmentByIdHeaders = new UpdateShieldInformationBarrierSegmentByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/shield_information_barrier_segments/',
        toString(shieldInformationBarrierSegmentId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateShieldInformationBarrierSegmentByIdRequestBody(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrierSegment(response.data);
  }
  async deleteShieldInformationBarrierSegmentById(
    shieldInformationBarrierSegmentId: string,
    headers: DeleteShieldInformationBarrierSegmentByIdHeaders = new DeleteShieldInformationBarrierSegmentByIdHeaders(
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
        '/shield_information_barrier_segments/',
        toString(shieldInformationBarrierSegmentId) as string
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
  async getShieldInformationBarrierSegments(
    queryParams: GetShieldInformationBarrierSegmentsQueryParams,
    headers: GetShieldInformationBarrierSegmentsHeaders = new GetShieldInformationBarrierSegmentsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegments> {
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
        this.networkSession.baseUrls.baseUrl,
        '/shield_information_barrier_segments'
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
    return deserializeShieldInformationBarrierSegments(response.data);
  }
  async createShieldInformationBarrierSegment(
    requestBody: CreateShieldInformationBarrierSegmentRequestBody,
    headers: CreateShieldInformationBarrierSegmentHeaders = new CreateShieldInformationBarrierSegmentHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegment> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/shield_information_barrier_segments'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateShieldInformationBarrierSegmentRequestBody(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrierSegment(response.data);
  }
}
export function serializeUpdateShieldInformationBarrierSegmentByIdRequestBody(
  val: UpdateShieldInformationBarrierSegmentByIdRequestBody
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['description']: val.description == void 0 ? void 0 : val.description,
  };
}
export function deserializeUpdateShieldInformationBarrierSegmentByIdRequestBody(
  val: any
): UpdateShieldInformationBarrierSegmentByIdRequestBody {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  return {
    name: name,
    description: description,
  } satisfies UpdateShieldInformationBarrierSegmentByIdRequestBody;
}
export function serializeCreateShieldInformationBarrierSegmentRequestBody(
  val: CreateShieldInformationBarrierSegmentRequestBody
): SerializedData {
  return {
    ['shield_information_barrier']: serializeShieldInformationBarrierBase(
      val.shieldInformationBarrier
    ),
    ['name']: val.name,
    ['description']: val.description == void 0 ? void 0 : val.description,
  };
}
export function deserializeCreateShieldInformationBarrierSegmentRequestBody(
  val: any
): CreateShieldInformationBarrierSegmentRequestBody {
  const shieldInformationBarrier: ShieldInformationBarrierBase =
    deserializeShieldInformationBarrierBase(val.shield_information_barrier);
  const name: string = val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  return {
    shieldInformationBarrier: shieldInformationBarrier,
    name: name,
    description: description,
  } satisfies CreateShieldInformationBarrierSegmentRequestBody;
}
