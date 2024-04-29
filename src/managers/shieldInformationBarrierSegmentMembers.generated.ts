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
export class GetShieldInformationBarrierSegmentMemberByIdOptionals {
  readonly headers: GetShieldInformationBarrierSegmentMemberByIdHeaders =
    new GetShieldInformationBarrierSegmentMemberByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetShieldInformationBarrierSegmentMemberByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetShieldInformationBarrierSegmentMemberByIdOptionals,
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
export interface GetShieldInformationBarrierSegmentMemberByIdOptionalsInput {
  readonly headers?: GetShieldInformationBarrierSegmentMemberByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteShieldInformationBarrierSegmentMemberByIdOptionals {
  readonly headers: DeleteShieldInformationBarrierSegmentMemberByIdHeaders =
    new DeleteShieldInformationBarrierSegmentMemberByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteShieldInformationBarrierSegmentMemberByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          DeleteShieldInformationBarrierSegmentMemberByIdOptionals,
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
export interface DeleteShieldInformationBarrierSegmentMemberByIdOptionalsInput {
  readonly headers?: DeleteShieldInformationBarrierSegmentMemberByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetShieldInformationBarrierSegmentMembersOptionals {
  readonly headers: GetShieldInformationBarrierSegmentMembersHeaders =
    new GetShieldInformationBarrierSegmentMembersHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetShieldInformationBarrierSegmentMembersOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetShieldInformationBarrierSegmentMembersOptionals,
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
export interface GetShieldInformationBarrierSegmentMembersOptionalsInput {
  readonly headers?: GetShieldInformationBarrierSegmentMembersHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateShieldInformationBarrierSegmentMemberOptionals {
  readonly headers: CreateShieldInformationBarrierSegmentMemberHeaders =
    new CreateShieldInformationBarrierSegmentMemberHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateShieldInformationBarrierSegmentMemberOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateShieldInformationBarrierSegmentMemberOptionals,
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
export interface CreateShieldInformationBarrierSegmentMemberOptionalsInput {
  readonly headers?: CreateShieldInformationBarrierSegmentMemberHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetShieldInformationBarrierSegmentMemberByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<
      GetShieldInformationBarrierSegmentMemberByIdHeaders,
      'extraHeaders'
    > &
      Partial<
        Pick<
          GetShieldInformationBarrierSegmentMemberByIdHeaders,
          'extraHeaders'
        >
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetShieldInformationBarrierSegmentMemberByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteShieldInformationBarrierSegmentMemberByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<
      DeleteShieldInformationBarrierSegmentMemberByIdHeaders,
      'extraHeaders'
    > &
      Partial<
        Pick<
          DeleteShieldInformationBarrierSegmentMemberByIdHeaders,
          'extraHeaders'
        >
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteShieldInformationBarrierSegmentMemberByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<
      GetShieldInformationBarrierSegmentMembersHeaders,
      'extraHeaders'
    > &
      Partial<
        Pick<GetShieldInformationBarrierSegmentMembersHeaders, 'extraHeaders'>
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetShieldInformationBarrierSegmentMembersHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<
      CreateShieldInformationBarrierSegmentMemberHeaders,
      'extraHeaders'
    > &
      Partial<
        Pick<CreateShieldInformationBarrierSegmentMemberHeaders, 'extraHeaders'>
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateShieldInformationBarrierSegmentMemberHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class ShieldInformationBarrierSegmentMembersManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      ShieldInformationBarrierSegmentMembersManager,
      | 'networkSession'
      | 'getShieldInformationBarrierSegmentMemberById'
      | 'deleteShieldInformationBarrierSegmentMemberById'
      | 'getShieldInformationBarrierSegmentMembers'
      | 'createShieldInformationBarrierSegmentMember'
    > &
      Partial<
        Pick<ShieldInformationBarrierSegmentMembersManager, 'networkSession'>
      >
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getShieldInformationBarrierSegmentMemberById(
    shieldInformationBarrierSegmentMemberId: string,
    optionalsInput: GetShieldInformationBarrierSegmentMemberByIdOptionalsInput = {}
  ): Promise<ShieldInformationBarrierSegmentMember> {
    const optionals: GetShieldInformationBarrierSegmentMemberByIdOptionals =
      new GetShieldInformationBarrierSegmentMemberByIdOptionals({
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
    optionalsInput: DeleteShieldInformationBarrierSegmentMemberByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteShieldInformationBarrierSegmentMemberByIdOptionals =
      new DeleteShieldInformationBarrierSegmentMemberByIdOptionals({
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
    optionalsInput: GetShieldInformationBarrierSegmentMembersOptionalsInput = {}
  ): Promise<ShieldInformationBarrierSegmentMembers> {
    const optionals: GetShieldInformationBarrierSegmentMembersOptionals =
      new GetShieldInformationBarrierSegmentMembersOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: CreateShieldInformationBarrierSegmentMemberOptionalsInput = {}
  ): Promise<ShieldInformationBarrierSegmentMember> {
    const optionals: CreateShieldInformationBarrierSegmentMemberOptionals =
      new CreateShieldInformationBarrierSegmentMemberOptionals({
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
export interface ShieldInformationBarrierSegmentMembersManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
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
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateShieldInformationBarrierSegmentMemberRequestBodyTypeField"',
    });
  }
  if (val == 'shield_information_barrier_segment_member') {
    return 'shield_information_barrier_segment_member';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
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
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateShieldInformationBarrierSegmentMemberRequestBodyShieldInformationBarrierSegmentTypeField"',
    });
  }
  if (val == 'shield_information_barrier_segment') {
    return 'shield_information_barrier_segment';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
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
