import { serializeGroupMemberships } from '../schemas.generated.js';
import { deserializeGroupMemberships } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeGroupMembership } from '../schemas.generated.js';
import { deserializeGroupMembership } from '../schemas.generated.js';
import { GroupMemberships } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { GroupMembership } from '../schemas.generated.js';
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
export interface GetUserMembershipsQueryParams {
  readonly limit?: number;
  readonly offset?: number;
}
export class GetUserMembershipsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetUserMembershipsHeaders, 'extraHeaders'>
      | Partial<Pick<GetUserMembershipsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetGroupMembershipsQueryParams {
  readonly limit?: number;
  readonly offset?: number;
}
export class GetGroupMembershipsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetGroupMembershipsHeaders, 'extraHeaders'>
      | Partial<Pick<GetGroupMembershipsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateGroupMembershipRequestBodyUserField {
  readonly id: string;
}
export interface CreateGroupMembershipRequestBodyGroupField {
  readonly id: string;
}
export type CreateGroupMembershipRequestBodyRoleField = 'member' | 'admin';
export interface CreateGroupMembershipRequestBody {
  readonly user: CreateGroupMembershipRequestBodyUserField;
  readonly group: CreateGroupMembershipRequestBodyGroupField;
  readonly role?: CreateGroupMembershipRequestBodyRoleField;
  readonly configurablePermissions?: {
    readonly [key: string]: boolean;
  };
}
export interface CreateGroupMembershipQueryParams {
  readonly fields?: readonly string[];
}
export class CreateGroupMembershipHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateGroupMembershipHeaders, 'extraHeaders'>
      | Partial<Pick<CreateGroupMembershipHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetGroupMembershipByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetGroupMembershipByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetGroupMembershipByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetGroupMembershipByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateGroupMembershipByIdRequestBodyRoleField = 'member' | 'admin';
export interface UpdateGroupMembershipByIdRequestBody {
  readonly role?: UpdateGroupMembershipByIdRequestBodyRoleField;
  readonly configurablePermissions?: {
    readonly [key: string]: boolean;
  };
}
export interface UpdateGroupMembershipByIdQueryParams {
  readonly fields?: readonly string[];
}
export class UpdateGroupMembershipByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateGroupMembershipByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateGroupMembershipByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteGroupMembershipByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteGroupMembershipByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteGroupMembershipByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class MembershipsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          MembershipsManager,
          | 'networkSession'
          | 'getUserMemberships'
          | 'getGroupMemberships'
          | 'createGroupMembership'
          | 'getGroupMembershipById'
          | 'updateGroupMembershipById'
          | 'deleteGroupMembershipById'
        >
      | Partial<Pick<MembershipsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getUserMemberships(
    userId: string,
    queryParams: GetUserMembershipsQueryParams = {} satisfies GetUserMembershipsQueryParams,
    headers: GetUserMembershipsHeaders = new GetUserMembershipsHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<GroupMemberships> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['limit']: toString(queryParams.limit) as string,
      ['offset']: toString(queryParams.offset) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/users/',
        toString(userId) as string,
        '/memberships'
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
    return deserializeGroupMemberships(response.data);
  }
  async getGroupMemberships(
    groupId: string,
    queryParams: GetGroupMembershipsQueryParams = {} satisfies GetGroupMembershipsQueryParams,
    headers: GetGroupMembershipsHeaders = new GetGroupMembershipsHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<GroupMemberships> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['limit']: toString(queryParams.limit) as string,
      ['offset']: toString(queryParams.offset) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/groups/',
        toString(groupId) as string,
        '/memberships'
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
    return deserializeGroupMemberships(response.data);
  }
  async createGroupMembership(
    requestBody: CreateGroupMembershipRequestBody,
    queryParams: CreateGroupMembershipQueryParams = {} satisfies CreateGroupMembershipQueryParams,
    headers: CreateGroupMembershipHeaders = new CreateGroupMembershipHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<GroupMembership> {
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
        '/group_memberships'
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeCreateGroupMembershipRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeGroupMembership(response.data);
  }
  async getGroupMembershipById(
    groupMembershipId: string,
    queryParams: GetGroupMembershipByIdQueryParams = {} satisfies GetGroupMembershipByIdQueryParams,
    headers: GetGroupMembershipByIdHeaders = new GetGroupMembershipByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<GroupMembership> {
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
        '/group_memberships/',
        toString(groupMembershipId) as string
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
    return deserializeGroupMembership(response.data);
  }
  async updateGroupMembershipById(
    groupMembershipId: string,
    requestBody: UpdateGroupMembershipByIdRequestBody = {} satisfies UpdateGroupMembershipByIdRequestBody,
    queryParams: UpdateGroupMembershipByIdQueryParams = {} satisfies UpdateGroupMembershipByIdQueryParams,
    headers: UpdateGroupMembershipByIdHeaders = new UpdateGroupMembershipByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<GroupMembership> {
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
        '/group_memberships/',
        toString(groupMembershipId) as string
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateGroupMembershipByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeGroupMembership(response.data);
  }
  async deleteGroupMembershipById(
    groupMembershipId: string,
    headers: DeleteGroupMembershipByIdHeaders = new DeleteGroupMembershipByIdHeaders(
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
        '/group_memberships/',
        toString(groupMembershipId) as string
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
}
export function serializeCreateGroupMembershipRequestBodyUserField(
  val: CreateGroupMembershipRequestBodyUserField
): SerializedData {
  return { ['id']: val.id };
}
export function deserializeCreateGroupMembershipRequestBodyUserField(
  val: any
): CreateGroupMembershipRequestBodyUserField {
  const id: string = val.id;
  return { id: id } satisfies CreateGroupMembershipRequestBodyUserField;
}
export function serializeCreateGroupMembershipRequestBodyGroupField(
  val: CreateGroupMembershipRequestBodyGroupField
): SerializedData {
  return { ['id']: val.id };
}
export function deserializeCreateGroupMembershipRequestBodyGroupField(
  val: any
): CreateGroupMembershipRequestBodyGroupField {
  const id: string = val.id;
  return { id: id } satisfies CreateGroupMembershipRequestBodyGroupField;
}
export function serializeCreateGroupMembershipRequestBodyRoleField(
  val: CreateGroupMembershipRequestBodyRoleField
): SerializedData {
  return val;
}
export function deserializeCreateGroupMembershipRequestBodyRoleField(
  val: any
): CreateGroupMembershipRequestBodyRoleField {
  if (!sdIsString(val)) {
    throw new Error(
      String(
        'Expecting a string for "CreateGroupMembershipRequestBodyRoleField"'
      )
    );
  }
  if (val == 'member') {
    return 'member';
  }
  if (val == 'admin') {
    return 'admin';
  }
  throw new Error(String(''.concat('Invalid value: ', val) as string));
}
export function serializeCreateGroupMembershipRequestBody(
  val: CreateGroupMembershipRequestBody
): SerializedData {
  return {
    ['user']: serializeCreateGroupMembershipRequestBodyUserField(val.user),
    ['group']: serializeCreateGroupMembershipRequestBodyGroupField(val.group),
    ['role']:
      val.role == void 0
        ? void 0
        : serializeCreateGroupMembershipRequestBodyRoleField(val.role),
    ['configurable_permissions']:
      val.configurablePermissions == void 0
        ? void 0
        : val.configurablePermissions,
  };
}
export function deserializeCreateGroupMembershipRequestBody(
  val: any
): CreateGroupMembershipRequestBody {
  const user: CreateGroupMembershipRequestBodyUserField =
    deserializeCreateGroupMembershipRequestBodyUserField(val.user);
  const group: CreateGroupMembershipRequestBodyGroupField =
    deserializeCreateGroupMembershipRequestBodyGroupField(val.group);
  const role: undefined | CreateGroupMembershipRequestBodyRoleField =
    val.role == void 0
      ? void 0
      : deserializeCreateGroupMembershipRequestBodyRoleField(val.role);
  const configurablePermissions:
    | undefined
    | {
        readonly [key: string]: boolean;
      } =
    val.configurable_permissions == void 0
      ? void 0
      : val.configurable_permissions;
  return {
    user: user,
    group: group,
    role: role,
    configurablePermissions: configurablePermissions,
  } satisfies CreateGroupMembershipRequestBody;
}
export function serializeUpdateGroupMembershipByIdRequestBodyRoleField(
  val: UpdateGroupMembershipByIdRequestBodyRoleField
): SerializedData {
  return val;
}
export function deserializeUpdateGroupMembershipByIdRequestBodyRoleField(
  val: any
): UpdateGroupMembershipByIdRequestBodyRoleField {
  if (!sdIsString(val)) {
    throw new Error(
      String(
        'Expecting a string for "UpdateGroupMembershipByIdRequestBodyRoleField"'
      )
    );
  }
  if (val == 'member') {
    return 'member';
  }
  if (val == 'admin') {
    return 'admin';
  }
  throw new Error(String(''.concat('Invalid value: ', val) as string));
}
export function serializeUpdateGroupMembershipByIdRequestBody(
  val: UpdateGroupMembershipByIdRequestBody
): SerializedData {
  return {
    ['role']:
      val.role == void 0
        ? void 0
        : serializeUpdateGroupMembershipByIdRequestBodyRoleField(val.role),
    ['configurable_permissions']:
      val.configurablePermissions == void 0
        ? void 0
        : val.configurablePermissions,
  };
}
export function deserializeUpdateGroupMembershipByIdRequestBody(
  val: any
): UpdateGroupMembershipByIdRequestBody {
  const role: undefined | UpdateGroupMembershipByIdRequestBodyRoleField =
    val.role == void 0
      ? void 0
      : deserializeUpdateGroupMembershipByIdRequestBodyRoleField(val.role);
  const configurablePermissions:
    | undefined
    | {
        readonly [key: string]: boolean;
      } =
    val.configurable_permissions == void 0
      ? void 0
      : val.configurable_permissions;
  return {
    role: role,
    configurablePermissions: configurablePermissions,
  } satisfies UpdateGroupMembershipByIdRequestBody;
}
