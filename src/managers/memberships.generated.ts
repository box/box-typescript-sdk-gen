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
export interface GetUserMembershipsQueryParamsArg {
  readonly limit?: number;
  readonly offset?: number;
}
export class GetUserMembershipsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetUserMembershipsHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetUserMembershipsHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetGroupMembershipsQueryParamsArg {
  readonly limit?: number;
  readonly offset?: number;
}
export class GetGroupMembershipsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetGroupMembershipsHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetGroupMembershipsHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateGroupMembershipRequestBodyArgUserField {
  readonly id: string;
}
export interface CreateGroupMembershipRequestBodyArgGroupField {
  readonly id: string;
}
export type CreateGroupMembershipRequestBodyArgRoleField = 'member' | 'admin';
export interface CreateGroupMembershipRequestBodyArg {
  readonly user: CreateGroupMembershipRequestBodyArgUserField;
  readonly group: CreateGroupMembershipRequestBodyArgGroupField;
  readonly role?: CreateGroupMembershipRequestBodyArgRoleField;
  readonly configurablePermissions?: {
    readonly [key: string]: boolean;
  };
}
export interface CreateGroupMembershipQueryParamsArg {
  readonly fields?: readonly string[];
}
export class CreateGroupMembershipHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateGroupMembershipHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateGroupMembershipHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetGroupMembershipByIdQueryParamsArg {
  readonly fields?: readonly string[];
}
export class GetGroupMembershipByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetGroupMembershipByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetGroupMembershipByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateGroupMembershipByIdRequestBodyArgRoleField =
  | 'member'
  | 'admin';
export interface UpdateGroupMembershipByIdRequestBodyArg {
  readonly role?: UpdateGroupMembershipByIdRequestBodyArgRoleField;
  readonly configurablePermissions?: {
    readonly [key: string]: boolean;
  };
}
export interface UpdateGroupMembershipByIdQueryParamsArg {
  readonly fields?: readonly string[];
}
export class UpdateGroupMembershipByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateGroupMembershipByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateGroupMembershipByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteGroupMembershipByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteGroupMembershipByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteGroupMembershipByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class MembershipsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      MembershipsManager,
      | 'getUserMemberships'
      | 'getGroupMemberships'
      | 'createGroupMembership'
      | 'getGroupMembershipById'
      | 'updateGroupMembershipById'
      | 'deleteGroupMembershipById'
    >
  ) {
    Object.assign(this, fields);
  }
  async getUserMemberships(
    userId: string,
    queryParams: GetUserMembershipsQueryParamsArg = {} satisfies GetUserMembershipsQueryParamsArg,
    headers: GetUserMembershipsHeadersArg = new GetUserMembershipsHeadersArg(
      {}
    ),
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
        'https://api.box.com/2.0/users/',
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
    queryParams: GetGroupMembershipsQueryParamsArg = {} satisfies GetGroupMembershipsQueryParamsArg,
    headers: GetGroupMembershipsHeadersArg = new GetGroupMembershipsHeadersArg(
      {}
    ),
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
        'https://api.box.com/2.0/groups/',
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
    requestBody: CreateGroupMembershipRequestBodyArg,
    queryParams: CreateGroupMembershipQueryParamsArg = {} satisfies CreateGroupMembershipQueryParamsArg,
    headers: CreateGroupMembershipHeadersArg = new CreateGroupMembershipHeadersArg(
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
      ''.concat('https://api.box.com/2.0/group_memberships') as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeCreateGroupMembershipRequestBodyArg(requestBody),
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
    queryParams: GetGroupMembershipByIdQueryParamsArg = {} satisfies GetGroupMembershipByIdQueryParamsArg,
    headers: GetGroupMembershipByIdHeadersArg = new GetGroupMembershipByIdHeadersArg(
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
        'https://api.box.com/2.0/group_memberships/',
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
    requestBody: UpdateGroupMembershipByIdRequestBodyArg = {} satisfies UpdateGroupMembershipByIdRequestBodyArg,
    queryParams: UpdateGroupMembershipByIdQueryParamsArg = {} satisfies UpdateGroupMembershipByIdQueryParamsArg,
    headers: UpdateGroupMembershipByIdHeadersArg = new UpdateGroupMembershipByIdHeadersArg(
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
        'https://api.box.com/2.0/group_memberships/',
        toString(groupMembershipId) as string
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateGroupMembershipByIdRequestBodyArg(requestBody),
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
    headers: DeleteGroupMembershipByIdHeadersArg = new DeleteGroupMembershipByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/group_memberships/',
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
export function serializeCreateGroupMembershipRequestBodyArgUserField(
  val: CreateGroupMembershipRequestBodyArgUserField
): SerializedData {
  return { ['id']: val.id };
}
export function deserializeCreateGroupMembershipRequestBodyArgUserField(
  val: any
): CreateGroupMembershipRequestBodyArgUserField {
  const id: string = val.id;
  return { id: id } satisfies CreateGroupMembershipRequestBodyArgUserField;
}
export function serializeCreateGroupMembershipRequestBodyArgGroupField(
  val: CreateGroupMembershipRequestBodyArgGroupField
): SerializedData {
  return { ['id']: val.id };
}
export function deserializeCreateGroupMembershipRequestBodyArgGroupField(
  val: any
): CreateGroupMembershipRequestBodyArgGroupField {
  const id: string = val.id;
  return { id: id } satisfies CreateGroupMembershipRequestBodyArgGroupField;
}
export function serializeCreateGroupMembershipRequestBodyArgRoleField(
  val: CreateGroupMembershipRequestBodyArgRoleField
): SerializedData {
  return val;
}
export function deserializeCreateGroupMembershipRequestBodyArgRoleField(
  val: any
): CreateGroupMembershipRequestBodyArgRoleField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateGroupMembershipRequestBodyArgRoleField"';
  }
  if (val == 'member') {
    return 'member';
  }
  if (val == 'admin') {
    return 'admin';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateGroupMembershipRequestBodyArg(
  val: CreateGroupMembershipRequestBodyArg
): SerializedData {
  return {
    ['user']: serializeCreateGroupMembershipRequestBodyArgUserField(val.user),
    ['group']: serializeCreateGroupMembershipRequestBodyArgGroupField(
      val.group
    ),
    ['role']:
      val.role == void 0
        ? void 0
        : serializeCreateGroupMembershipRequestBodyArgRoleField(val.role),
    ['configurable_permissions']:
      val.configurablePermissions == void 0
        ? void 0
        : val.configurablePermissions,
  };
}
export function deserializeCreateGroupMembershipRequestBodyArg(
  val: any
): CreateGroupMembershipRequestBodyArg {
  const user: CreateGroupMembershipRequestBodyArgUserField =
    deserializeCreateGroupMembershipRequestBodyArgUserField(val.user);
  const group: CreateGroupMembershipRequestBodyArgGroupField =
    deserializeCreateGroupMembershipRequestBodyArgGroupField(val.group);
  const role: undefined | CreateGroupMembershipRequestBodyArgRoleField =
    val.role == void 0
      ? void 0
      : deserializeCreateGroupMembershipRequestBodyArgRoleField(val.role);
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
  } satisfies CreateGroupMembershipRequestBodyArg;
}
export function serializeUpdateGroupMembershipByIdRequestBodyArgRoleField(
  val: UpdateGroupMembershipByIdRequestBodyArgRoleField
): SerializedData {
  return val;
}
export function deserializeUpdateGroupMembershipByIdRequestBodyArgRoleField(
  val: any
): UpdateGroupMembershipByIdRequestBodyArgRoleField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateGroupMembershipByIdRequestBodyArgRoleField"';
  }
  if (val == 'member') {
    return 'member';
  }
  if (val == 'admin') {
    return 'admin';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateGroupMembershipByIdRequestBodyArg(
  val: UpdateGroupMembershipByIdRequestBodyArg
): SerializedData {
  return {
    ['role']:
      val.role == void 0
        ? void 0
        : serializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val.role),
    ['configurable_permissions']:
      val.configurablePermissions == void 0
        ? void 0
        : val.configurablePermissions,
  };
}
export function deserializeUpdateGroupMembershipByIdRequestBodyArg(
  val: any
): UpdateGroupMembershipByIdRequestBodyArg {
  const role: undefined | UpdateGroupMembershipByIdRequestBodyArgRoleField =
    val.role == void 0
      ? void 0
      : deserializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val.role);
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
  } satisfies UpdateGroupMembershipByIdRequestBodyArg;
}
