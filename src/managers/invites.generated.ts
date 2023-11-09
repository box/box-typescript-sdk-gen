import { serializeInvite } from '../schemas.generated.js';
import { deserializeInvite } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { Invite } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
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
export interface CreateInviteRequestBodyArgEnterpriseField {
  readonly id: string;
}
export interface CreateInviteRequestBodyArgActionableByField {
  readonly login?: string;
}
export interface CreateInviteRequestBodyArg {
  readonly enterprise: CreateInviteRequestBodyArgEnterpriseField;
  readonly actionableBy: CreateInviteRequestBodyArgActionableByField;
}
export interface CreateInviteQueryParamsArg {
  readonly fields?: readonly string[];
}
export class CreateInviteHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateInviteHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateInviteHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetInviteByIdQueryParamsArg {
  readonly fields?: readonly string[];
}
export class GetInviteByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetInviteByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetInviteByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class InvitesManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(fields: Omit<InvitesManager, 'createInvite' | 'getInviteById'>) {
    Object.assign(this, fields);
  }
  async createInvite(
    requestBody: CreateInviteRequestBodyArg,
    queryParams: CreateInviteQueryParamsArg = {} satisfies CreateInviteQueryParamsArg,
    headers: CreateInviteHeadersArg = new CreateInviteHeadersArg({}),
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
      ''.concat('https://api.box.com/2.0/invites') as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeCreateInviteRequestBodyArg(requestBody),
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
    queryParams: GetInviteByIdQueryParamsArg = {} satisfies GetInviteByIdQueryParamsArg,
    headers: GetInviteByIdHeadersArg = new GetInviteByIdHeadersArg({}),
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
        'https://api.box.com/2.0/invites/',
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
export function serializeCreateInviteRequestBodyArgEnterpriseField(
  val: CreateInviteRequestBodyArgEnterpriseField
): SerializedData {
  return { ['id']: val.id };
}
export function deserializeCreateInviteRequestBodyArgEnterpriseField(
  val: any
): CreateInviteRequestBodyArgEnterpriseField {
  const id: string = val.id;
  return { id: id } satisfies CreateInviteRequestBodyArgEnterpriseField;
}
export function serializeCreateInviteRequestBodyArgActionableByField(
  val: CreateInviteRequestBodyArgActionableByField
): SerializedData {
  return { ['login']: val.login == void 0 ? void 0 : val.login };
}
export function deserializeCreateInviteRequestBodyArgActionableByField(
  val: any
): CreateInviteRequestBodyArgActionableByField {
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  return { login: login } satisfies CreateInviteRequestBodyArgActionableByField;
}
export function serializeCreateInviteRequestBodyArg(
  val: CreateInviteRequestBodyArg
): SerializedData {
  return {
    ['enterprise']: serializeCreateInviteRequestBodyArgEnterpriseField(
      val.enterprise
    ),
    ['actionable_by']: serializeCreateInviteRequestBodyArgActionableByField(
      val.actionableBy
    ),
  };
}
export function deserializeCreateInviteRequestBodyArg(
  val: any
): CreateInviteRequestBodyArg {
  const enterprise: CreateInviteRequestBodyArgEnterpriseField =
    deserializeCreateInviteRequestBodyArgEnterpriseField(val.enterprise);
  const actionableBy: CreateInviteRequestBodyArgActionableByField =
    deserializeCreateInviteRequestBodyArgActionableByField(val.actionable_by);
  return {
    enterprise: enterprise,
    actionableBy: actionableBy,
  } satisfies CreateInviteRequestBodyArg;
}
