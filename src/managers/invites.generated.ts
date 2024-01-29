import { serializeInvite } from '../schemas.generated.js';
import { deserializeInvite } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { Invite } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.generated.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { sdToJson } from '../json.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
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
    fields:
      | Omit<CreateInviteHeaders, 'extraHeaders'>
      | Partial<Pick<CreateInviteHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetInviteByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetInviteByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetInviteByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetInviteByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class InvitesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          InvitesManager,
          'networkSession' | 'createInvite' | 'getInviteById'
        >
      | Partial<Pick<InvitesManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async createInvite(
    requestBody: CreateInviteRequestBody,
    queryParams: CreateInviteQueryParams = {} satisfies CreateInviteQueryParams,
    headers: CreateInviteHeaders = new CreateInviteHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Invite> {
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
    queryParams: GetInviteByIdQueryParams = {} satisfies GetInviteByIdQueryParams,
    headers: GetInviteByIdHeaders = new GetInviteByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Invite> {
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
export function serializeCreateInviteRequestBodyEnterpriseField(
  val: CreateInviteRequestBodyEnterpriseField
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
  val: CreateInviteRequestBodyActionableByField
): SerializedData {
  return { ['login']: val.login == void 0 ? void 0 : val.login };
}
export function deserializeCreateInviteRequestBodyActionableByField(
  val: any
): CreateInviteRequestBodyActionableByField {
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  return { login: login } satisfies CreateInviteRequestBodyActionableByField;
}
export function serializeCreateInviteRequestBody(
  val: CreateInviteRequestBody
): SerializedData {
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
