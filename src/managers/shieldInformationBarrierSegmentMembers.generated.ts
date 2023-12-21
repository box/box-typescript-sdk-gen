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
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export class GetShieldInformationBarrierSegmentMemberByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          GetShieldInformationBarrierSegmentMemberByIdHeaders,
          'extraHeaders'
        >
      | Partial<
          Pick<
            GetShieldInformationBarrierSegmentMemberByIdHeaders,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteShieldInformationBarrierSegmentMemberByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          DeleteShieldInformationBarrierSegmentMemberByIdHeaders,
          'extraHeaders'
        >
      | Partial<
          Pick<
            DeleteShieldInformationBarrierSegmentMemberByIdHeaders,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface GetShieldInformationBarrierSegmentMembersQueryParams {
  readonly shieldInformationBarrierSegmentId: string;
  readonly marker?: string;
  readonly limit?: number;
}
export class GetShieldInformationBarrierSegmentMembersHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetShieldInformationBarrierSegmentMembersHeaders, 'extraHeaders'>
      | Partial<
          Pick<GetShieldInformationBarrierSegmentMembersHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export type CreateShieldInformationBarrierSegmentMemberRequestBodyTypeField =
  'shield_information_barrier_segment_member';
export type CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField =
  'shield_information_barrier_segment';
export interface CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField {
  readonly id?: string;
  readonly type?: CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField;
}
export interface CreateShieldInformationBarrierSegmentMemberRequestBody {
  readonly type?: CreateShieldInformationBarrierSegmentMemberRequestBodyTypeField;
  readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
  readonly shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField;
  readonly user: UserBase;
}
export class CreateShieldInformationBarrierSegmentMemberHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateShieldInformationBarrierSegmentMemberHeaders, 'extraHeaders'>
      | Partial<
          Pick<
            CreateShieldInformationBarrierSegmentMemberHeaders,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export class ShieldInformationBarrierSegmentMembersManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          ShieldInformationBarrierSegmentMembersManager,
          | 'networkSession'
          | 'getShieldInformationBarrierSegmentMemberById'
          | 'deleteShieldInformationBarrierSegmentMemberById'
          | 'getShieldInformationBarrierSegmentMembers'
          | 'createShieldInformationBarrierSegmentMember'
        >
      | Partial<
          Pick<ShieldInformationBarrierSegmentMembersManager, 'networkSession'>
        >
  ) {
    Object.assign(this, fields);
  }
  async getShieldInformationBarrierSegmentMemberById(
    shieldInformationBarrierSegmentMemberId: string,
    headers: GetShieldInformationBarrierSegmentMemberByIdHeaders = new GetShieldInformationBarrierSegmentMemberByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegmentMember> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/shield_information_barrier_segment_members/',
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
    return deserializeShieldInformationBarrierSegmentMember(response.data);
  }
  async deleteShieldInformationBarrierSegmentMemberById(
    shieldInformationBarrierSegmentMemberId: string,
    headers: DeleteShieldInformationBarrierSegmentMemberByIdHeaders = new DeleteShieldInformationBarrierSegmentMemberByIdHeaders(
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
        '/shield_information_barrier_segment_members/',
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
    queryParams: GetShieldInformationBarrierSegmentMembersQueryParams,
    headers: GetShieldInformationBarrierSegmentMembersHeaders = new GetShieldInformationBarrierSegmentMembersHeaders(
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
        this.networkSession.baseUrls.baseUrl,
        '/shield_information_barrier_segment_members'
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
    return deserializeShieldInformationBarrierSegmentMembers(response.data);
  }
  async createShieldInformationBarrierSegmentMember(
    requestBody: CreateShieldInformationBarrierSegmentMemberRequestBody,
    headers: CreateShieldInformationBarrierSegmentMemberHeaders = new CreateShieldInformationBarrierSegmentMemberHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ShieldInformationBarrierSegmentMember> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/shield_information_barrier_segment_members'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateShieldInformationBarrierSegmentMemberRequestBody(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeShieldInformationBarrierSegmentMember(response.data);
  }
}
export function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField(
  val: CreateShieldInformationBarrierSegmentMemberRequestBodyTypeField
): SerializedData {
  return val;
}
export function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField(
  val: any
): CreateShieldInformationBarrierSegmentMemberRequestBodyTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateShieldInformationBarrierSegmentMemberRequestBodyTypeField"';
  }
  if (val == 'shield_information_barrier_segment_member') {
    return 'shield_information_barrier_segment_member';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField(
  val: CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField
): SerializedData {
  return val;
}
export function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField(
  val: any
): CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField"';
  }
  if (val == 'shield_information_barrier_segment') {
    return 'shield_information_barrier_segment';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField(
  val: CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField(
            val.type
          ),
  };
}
export function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField(
  val: any
): CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type:
    | undefined
    | CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField(
          val.type
        );
  return {
    id: id,
    type: type,
  } satisfies CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField;
}
export function serializeCreateShieldInformationBarrierSegmentMemberRequestBody(
  val: CreateShieldInformationBarrierSegmentMemberRequestBody
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField(
            val.type
          ),
    ['shield_information_barrier']:
      val.shieldInformationBarrier == void 0
        ? void 0
        : serializeShieldInformationBarrierBase(val.shieldInformationBarrier),
    ['shield_information_barrier_segment']:
      serializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField(
        val.shieldInformationBarrierSegment
      ),
    ['user']: serializeUserBase(val.user),
  };
}
export function deserializeCreateShieldInformationBarrierSegmentMemberRequestBody(
  val: any
): CreateShieldInformationBarrierSegmentMemberRequestBody {
  const type:
    | undefined
    | CreateShieldInformationBarrierSegmentMemberRequestBodyTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyTypeField(
          val.type
        );
  const shieldInformationBarrier: undefined | ShieldInformationBarrierBase =
    val.shield_information_barrier == void 0
      ? void 0
      : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
  const shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField =
    deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentField(
      val.shield_information_barrier_segment
    );
  const user: UserBase = deserializeUserBase(val.user);
  return {
    type: type,
    shieldInformationBarrier: shieldInformationBarrier,
    shieldInformationBarrierSegment: shieldInformationBarrierSegment,
    user: user,
  } satisfies CreateShieldInformationBarrierSegmentMemberRequestBody;
}
