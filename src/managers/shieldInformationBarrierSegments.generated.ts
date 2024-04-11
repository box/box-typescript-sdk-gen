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
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
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
export interface GetShieldInformationBarrierSegmentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
export interface UpdateShieldInformationBarrierSegmentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
export interface DeleteShieldInformationBarrierSegmentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
export interface GetShieldInformationBarrierSegmentsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
export interface CreateShieldInformationBarrierSegmentHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    headersInput: GetShieldInformationBarrierSegmentByIdHeadersInput = new GetShieldInformationBarrierSegmentByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegment> {
    const headers: any = new GetShieldInformationBarrierSegmentByIdHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
    headersInput: UpdateShieldInformationBarrierSegmentByIdHeadersInput = new UpdateShieldInformationBarrierSegmentByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegment> {
    const headers: any = new UpdateShieldInformationBarrierSegmentByIdHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
    headersInput: DeleteShieldInformationBarrierSegmentByIdHeadersInput = new DeleteShieldInformationBarrierSegmentByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headers: any = new DeleteShieldInformationBarrierSegmentByIdHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
    headersInput: GetShieldInformationBarrierSegmentsHeadersInput = new GetShieldInformationBarrierSegmentsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegments> {
    const headers: any = new GetShieldInformationBarrierSegmentsHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
    headersInput: CreateShieldInformationBarrierSegmentHeadersInput = new CreateShieldInformationBarrierSegmentHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegment> {
    const headers: any = new CreateShieldInformationBarrierSegmentHeaders({
      extraHeaders: headersInput.extraHeaders,
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
export interface ShieldInformationBarrierSegmentsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeUpdateShieldInformationBarrierSegmentByIdRequestBody(
  val: any
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
  val: any
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
