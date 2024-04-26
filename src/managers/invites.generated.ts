import { serializeInvite } from '../schemas.generated.js';
import { deserializeInvite } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { Invite } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateInviteOptionals {
  readonly queryParams: CreateInviteQueryParams =
    {} satisfies CreateInviteQueryParams;
  readonly headers: CreateInviteHeaders = new CreateInviteHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateInviteOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateInviteOptionals,
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
export interface CreateInviteOptionalsInput {
  readonly queryParams?: CreateInviteQueryParams;
  readonly headers?: CreateInviteHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetInviteByIdOptionals {
  readonly queryParams: GetInviteByIdQueryParams =
    {} satisfies GetInviteByIdQueryParams;
  readonly headers: GetInviteByIdHeaders = new GetInviteByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetInviteByIdOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetInviteByIdOptionals,
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
export interface GetInviteByIdOptionalsInput {
  readonly queryParams?: GetInviteByIdQueryParams;
  readonly headers?: GetInviteByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface CreateInviteRequestBodyEnterpriseField {
  readonly id: string;
}
export interface CreateInviteRequestBodyActionableByField {
  readonly login?: string;
}
export interface CreateInviteRequestBody {
  readonly enterprise: CreateInviteRequestBodyEnterpriseField;
  readonly actionableBy: CreateInviteRequestBodyActionableByField;
}
export interface CreateInviteQueryParams {
  readonly fields?: readonly string[];
}
export class CreateInviteHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateInviteHeaders, 'extraHeaders'> &
      Partial<Pick<CreateInviteHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateInviteHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetInviteByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetInviteByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetInviteByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetInviteByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetInviteByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class InvitesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      InvitesManager,
      'networkSession' | 'createInvite' | 'getInviteById'
    > &
      Partial<Pick<InvitesManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async createInvite(
    requestBody: CreateInviteRequestBody,
    optionalsInput: CreateInviteOptionalsInput = {}
  ): Promise<Invite> {
    const optionals: any = new CreateInviteOptionals({
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
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/invites') as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeCreateInviteRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeInvite(response.data);
  }
  async getInviteById(
    inviteId: string,
    optionalsInput: GetInviteByIdOptionalsInput = {}
  ): Promise<Invite> {
    const optionals: any = new GetInviteByIdOptionals({
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
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/invites/',
        toString(inviteId) as string
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
    return deserializeInvite(response.data);
  }
}
export interface InvitesManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeCreateInviteRequestBodyEnterpriseField(
  val: any
): SerializedData {
  return { ['id']: val.id };
}
export function deserializeCreateInviteRequestBodyEnterpriseField(
  val: any
): CreateInviteRequestBodyEnterpriseField {
  const id: string = val.id;
  return { id: id } satisfies CreateInviteRequestBodyEnterpriseField;
}
export function serializeCreateInviteRequestBodyActionableByField(
  val: any
): SerializedData {
  return { ['login']: val.login == void 0 ? void 0 : val.login };
}
export function deserializeCreateInviteRequestBodyActionableByField(
  val: any
): CreateInviteRequestBodyActionableByField {
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  return { login: login } satisfies CreateInviteRequestBodyActionableByField;
}
export function serializeCreateInviteRequestBody(val: any): SerializedData {
  return {
    ['enterprise']: serializeCreateInviteRequestBodyEnterpriseField(
      val.enterprise
    ),
    ['actionable_by']: serializeCreateInviteRequestBodyActionableByField(
      val.actionableBy
    ),
  };
}
export function deserializeCreateInviteRequestBody(
  val: any
): CreateInviteRequestBody {
  const enterprise: CreateInviteRequestBodyEnterpriseField =
    deserializeCreateInviteRequestBodyEnterpriseField(val.enterprise);
  const actionableBy: CreateInviteRequestBodyActionableByField =
    deserializeCreateInviteRequestBodyActionableByField(val.actionable_by);
  return {
    enterprise: enterprise,
    actionableBy: actionableBy,
  } satisfies CreateInviteRequestBody;
}
