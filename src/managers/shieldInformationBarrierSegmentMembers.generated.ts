import { serializeShieldInformationBarrierSegmentMember } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegmentMember } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeShieldInformationBarrierSegmentMembers } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierSegmentMembers } from '../schemas.generated.js';
import { serializeShieldInformationBarrierBase } from '../schemas.generated.js';
import { deserializeShieldInformationBarrierBase } from '../schemas.generated.js';
import { serializeUserBase } from '../schemas.generated.js';
import { deserializeUserBase } from '../schemas.generated.js';
import { ShieldInformationBarrierSegmentMember } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { ShieldInformationBarrierSegmentMembers } from '../schemas.generated.js';
import { ShieldInformationBarrierBase } from '../schemas.generated.js';
import { UserBase } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { serializeJson } from '../json.js';
import { isJson } from '../json.js';
export class GetShieldInformationBarrierSegmentMemberByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          GetShieldInformationBarrierSegmentMemberByIdHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            GetShieldInformationBarrierSegmentMemberByIdHeadersArg,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteShieldInformationBarrierSegmentMemberByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          DeleteShieldInformationBarrierSegmentMemberByIdHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            DeleteShieldInformationBarrierSegmentMemberByIdHeadersArg,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface GetShieldInformationBarrierSegmentMembersQueryParamsArg {
  readonly shieldInformationBarrierSegmentId: string;
  readonly marker?: string;
  readonly limit?: number;
}
export class GetShieldInformationBarrierSegmentMembersHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          GetShieldInformationBarrierSegmentMembersHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            GetShieldInformationBarrierSegmentMembersHeadersArg,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export type CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField =
  'shield_information_barrier_segment_member';
export type CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField =
  'shield_information_barrier_segment';
export interface CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField {
  readonly id?: string;
  readonly type?: CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
}
export interface CreateShieldInformationBarrierSegmentMemberRequestBodyArg {
  readonly type?: CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField;
  readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
  readonly shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField;
  readonly user: UserBase;
}
export class CreateShieldInformationBarrierSegmentMemberHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          CreateShieldInformationBarrierSegmentMemberHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            CreateShieldInformationBarrierSegmentMemberHeadersArg,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export class ShieldInformationBarrierSegmentMembersManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      ShieldInformationBarrierSegmentMembersManager,
      | 'getShieldInformationBarrierSegmentMemberById'
      | 'deleteShieldInformationBarrierSegmentMemberById'
      | 'getShieldInformationBarrierSegmentMembers'
      | 'createShieldInformationBarrierSegmentMember'
    >
  ) {
    Object.assign(this, fields);
  }
  async getShieldInformationBarrierSegmentMemberById(
    shieldInformationBarrierSegmentMemberId: string,
    headers: GetShieldInformationBarrierSegmentMemberByIdHeadersArg = new GetShieldInformationBarrierSegmentMemberByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegmentMember> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/shield_information_barrier_segment_members/',
        toString(shieldInformationBarrierSegmentMemberId) as string
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
    return deserializeShieldInformationBarrierSegmentMember(
      deserializeJson(response.text)
    );
  }
  async deleteShieldInformationBarrierSegmentMemberById(
    shieldInformationBarrierSegmentMemberId: string,
    headers: DeleteShieldInformationBarrierSegmentMemberByIdHeadersArg = new DeleteShieldInformationBarrierSegmentMemberByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/shield_information_barrier_segment_members/',
        toString(shieldInformationBarrierSegmentMemberId) as string
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
  async getShieldInformationBarrierSegmentMembers(
    queryParams: GetShieldInformationBarrierSegmentMembersQueryParamsArg,
    headers: GetShieldInformationBarrierSegmentMembersHeadersArg = new GetShieldInformationBarrierSegmentMembersHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegmentMembers> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['shield_information_barrier_segment_id']: toString(
        queryParams.shieldInformationBarrierSegmentId
      ) as string,
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/shield_information_barrier_segment_members'
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
    return deserializeShieldInformationBarrierSegmentMembers(
      deserializeJson(response.text)
    );
  }
  async createShieldInformationBarrierSegmentMember(
    requestBody: CreateShieldInformationBarrierSegmentMemberRequestBodyArg,
    headers: CreateShieldInformationBarrierSegmentMemberHeadersArg = new CreateShieldInformationBarrierSegmentMemberHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegmentMember> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/shield_information_barrier_segment_members'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg(
            requestBody
          )
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrierSegmentMember(
      deserializeJson(response.text)
    );
  }
}
export function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(
  val: CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField
): Json {
  return val;
}
export function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(
  val: any
): CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField"';
  }
  if (val == 'shield_information_barrier_segment_member') {
    return 'shield_information_barrier_segment_member';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(
  val: CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField
): Json {
  return val;
}
export function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(
  val: any
): CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField"';
  }
  if (val == 'shield_information_barrier_segment') {
    return 'shield_information_barrier_segment';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(
  val: CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField
): Json {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(
            val.type
          ),
  };
}
export function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(
  val: any
): CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type:
    | undefined
    | CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(
          val.type
        );
  return {
    id: id,
    type: type,
  } satisfies CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField;
}
export function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg(
  val: CreateShieldInformationBarrierSegmentMemberRequestBodyArg
): Json {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(
            val.type
          ),
    ['shield_information_barrier']:
      val.shieldInformationBarrier == void 0
        ? void 0
        : serializeShieldInformationBarrierBase(val.shieldInformationBarrier),
    ['shield_information_barrier_segment']:
      serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(
        val.shieldInformationBarrierSegment
      ),
    ['user']: serializeUserBase(val.user),
  };
}
export function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg(
  val: any
): CreateShieldInformationBarrierSegmentMemberRequestBodyArg {
  const type:
    | undefined
    | CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(
          val.type
        );
  const shieldInformationBarrier: undefined | ShieldInformationBarrierBase =
    val.shield_information_barrier == void 0
      ? void 0
      : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
  const shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField =
    deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(
      val.shield_information_barrier_segment
    );
  const user: UserBase = deserializeUserBase(val.user);
  return {
    type: type,
    shieldInformationBarrier: shieldInformationBarrier,
    shieldInformationBarrierSegment: shieldInformationBarrierSegment,
    user: user,
  } satisfies CreateShieldInformationBarrierSegmentMemberRequestBodyArg;
}
