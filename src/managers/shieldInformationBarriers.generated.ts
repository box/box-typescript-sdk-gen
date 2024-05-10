import { serializeShieldInformationBarrier } from '../schemas/shieldInformationBarrier.generated.js';
import { deserializeShieldInformationBarrier } from '../schemas/shieldInformationBarrier.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeShieldInformationBarriers } from '../schemas/shieldInformationBarriers.generated.js';
import { deserializeShieldInformationBarriers } from '../schemas/shieldInformationBarriers.generated.js';
import { serializeEnterpriseBase } from '../schemas/enterpriseBase.generated.js';
import { deserializeEnterpriseBase } from '../schemas/enterpriseBase.generated.js';
import { ShieldInformationBarrier } from '../schemas/shieldInformationBarrier.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { ShieldInformationBarriers } from '../schemas/shieldInformationBarriers.generated.js';
import { EnterpriseBase } from '../schemas/enterpriseBase.generated.js';
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
export class GetShieldInformationBarrierByIdOptionals {
  readonly headers: GetShieldInformationBarrierByIdHeaders =
    new GetShieldInformationBarrierByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetShieldInformationBarrierByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetShieldInformationBarrierByIdOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface GetShieldInformationBarrierByIdOptionalsInput {
  readonly headers?: GetShieldInformationBarrierByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateShieldInformationBarrierStatusOptionals {
  readonly headers: UpdateShieldInformationBarrierStatusHeaders =
    new UpdateShieldInformationBarrierStatusHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateShieldInformationBarrierStatusOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateShieldInformationBarrierStatusOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface UpdateShieldInformationBarrierStatusOptionalsInput {
  readonly headers?: UpdateShieldInformationBarrierStatusHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateShieldInformationBarrierOptionals {
  readonly headers: CreateShieldInformationBarrierHeaders =
    new CreateShieldInformationBarrierHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateShieldInformationBarrierOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateShieldInformationBarrierOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface CreateShieldInformationBarrierOptionalsInput {
  readonly headers?: CreateShieldInformationBarrierHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetShieldInformationBarrierByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetShieldInformationBarrierByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetShieldInformationBarrierByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<UpdateShieldInformationBarrierStatusHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateShieldInformationBarrierStatusHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<GetShieldInformationBarriersHeaders, 'extraHeaders'> &
      Partial<Pick<GetShieldInformationBarriersHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<CreateShieldInformationBarrierHeaders, 'extraHeaders'> &
      Partial<Pick<CreateShieldInformationBarrierHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<
      ShieldInformationBarriersManager,
      | 'networkSession'
      | 'getShieldInformationBarrierById'
      | 'updateShieldInformationBarrierStatus'
      | 'getShieldInformationBarriers'
      | 'createShieldInformationBarrier'
    > &
      Partial<Pick<ShieldInformationBarriersManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getShieldInformationBarrierById(
    shieldInformationBarrierId: string,
    optionalsInput: GetShieldInformationBarrierByIdOptionalsInput = {}
  ): Promise<ShieldInformationBarrier> {
    const optionals: GetShieldInformationBarrierByIdOptionals =
      new GetShieldInformationBarrierByIdOptionals({
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
    optionalsInput: UpdateShieldInformationBarrierStatusOptionalsInput = {}
  ): Promise<ShieldInformationBarrier> {
    const optionals: UpdateShieldInformationBarrierStatusOptionals =
      new UpdateShieldInformationBarrierStatusOptionals({
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
    const headers: GetShieldInformationBarriersHeaders =
      new GetShieldInformationBarriersHeaders({
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
    optionalsInput: CreateShieldInformationBarrierOptionalsInput = {}
  ): Promise<ShieldInformationBarrier> {
    const optionals: CreateShieldInformationBarrierOptionals =
      new CreateShieldInformationBarrierOptionals({
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
  val: UpdateShieldInformationBarrierStatusRequestBodyStatusField
): SerializedData {
  return val;
}
export function deserializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(
  val: SerializedData
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
  val: SerializedData
): UpdateShieldInformationBarrierStatusRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateShieldInformationBarrierStatusRequestBody"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "UpdateShieldInformationBarrierStatusRequestBody" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "UpdateShieldInformationBarrierStatusRequestBody"',
    });
  }
  const id: string = val.id;
  if (val.status == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "status" of type "UpdateShieldInformationBarrierStatusRequestBody" to be defined',
    });
  }
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
  val: SerializedData
): CreateShieldInformationBarrierRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateShieldInformationBarrierRequestBody"',
    });
  }
  if (val.enterprise == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "enterprise" of type "CreateShieldInformationBarrierRequestBody" to be defined',
    });
  }
  const enterprise: EnterpriseBase = deserializeEnterpriseBase(val.enterprise);
  return {
    enterprise: enterprise,
  } satisfies CreateShieldInformationBarrierRequestBody;
}
