import { serializeGroups } from '../schemas.generated.js';
import { deserializeGroups } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeGroupFull } from '../schemas.generated.js';
import { deserializeGroupFull } from '../schemas.generated.js';
import { Groups } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { GroupFull } from '../schemas.generated.js';
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
export interface GetGroupsQueryParams {
  readonly filterTerm?: string;
  readonly fields?: readonly string[];
  readonly limit?: number;
  readonly offset?: number;
}
export class GetGroupsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetGroupsHeaders, 'extraHeaders'>
      | Partial<Pick<GetGroupsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateGroupRequestBodyInvitabilityLevelField =
  | 'admins_only'
  | 'admins_and_members'
  | 'all_managed_users';
export type CreateGroupRequestBodyMemberViewabilityLevelField =
  | 'admins_only'
  | 'admins_and_members'
  | 'all_managed_users';
export interface CreateGroupRequestBody {
  readonly name: string;
  readonly provenance?: string;
  readonly externalSyncIdentifier?: string;
  readonly description?: string;
  readonly invitabilityLevel?: CreateGroupRequestBodyInvitabilityLevelField;
  readonly memberViewabilityLevel?: CreateGroupRequestBodyMemberViewabilityLevelField;
}
export interface CreateGroupQueryParams {
  readonly fields?: readonly string[];
}
export class CreateGroupHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateGroupHeaders, 'extraHeaders'>
      | Partial<Pick<CreateGroupHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetGroupByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetGroupByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetGroupByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetGroupByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateGroupByIdRequestBodyInvitabilityLevelField =
  | 'admins_only'
  | 'admins_and_members'
  | 'all_managed_users';
export type UpdateGroupByIdRequestBodyMemberViewabilityLevelField =
  | 'admins_only'
  | 'admins_and_members'
  | 'all_managed_users';
export interface UpdateGroupByIdRequestBody {
  readonly name?: string;
  readonly provenance?: string;
  readonly externalSyncIdentifier?: string;
  readonly description?: string;
  readonly invitabilityLevel?: UpdateGroupByIdRequestBodyInvitabilityLevelField;
  readonly memberViewabilityLevel?: UpdateGroupByIdRequestBodyMemberViewabilityLevelField;
}
export interface UpdateGroupByIdQueryParams {
  readonly fields?: readonly string[];
}
export class UpdateGroupByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateGroupByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateGroupByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteGroupByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteGroupByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteGroupByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GroupsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          GroupsManager,
          | 'networkSession'
          | 'getGroups'
          | 'createGroup'
          | 'getGroupById'
          | 'updateGroupById'
          | 'deleteGroupById'
        >
      | Partial<Pick<GroupsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getGroups(
    queryParams: GetGroupsQueryParams = {} satisfies GetGroupsQueryParams,
    headers: GetGroupsHeaders = new GetGroupsHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Groups> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['filter_term']: toString(queryParams.filterTerm) as string,
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
      ['limit']: toString(queryParams.limit) as string,
      ['offset']: toString(queryParams.offset) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/groups') as string,
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
    return deserializeGroups(response.data);
  }
  async createGroup(
    requestBody: CreateGroupRequestBody,
    queryParams: CreateGroupQueryParams = {} satisfies CreateGroupQueryParams,
    headers: CreateGroupHeaders = new CreateGroupHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<GroupFull> {
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
      ''.concat(this.networkSession.baseUrls.baseUrl, '/groups') as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeCreateGroupRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeGroupFull(response.data);
  }
  async getGroupById(
    groupId: string,
    queryParams: GetGroupByIdQueryParams = {} satisfies GetGroupByIdQueryParams,
    headers: GetGroupByIdHeaders = new GetGroupByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<GroupFull> {
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
        '/groups/',
        toString(groupId) as string
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
    return deserializeGroupFull(response.data);
  }
  async updateGroupById(
    groupId: string,
    requestBody: UpdateGroupByIdRequestBody = {} satisfies UpdateGroupByIdRequestBody,
    queryParams: UpdateGroupByIdQueryParams = {} satisfies UpdateGroupByIdQueryParams,
    headers: UpdateGroupByIdHeaders = new UpdateGroupByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<GroupFull> {
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
        '/groups/',
        toString(groupId) as string
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateGroupByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeGroupFull(response.data);
  }
  async deleteGroupById(
    groupId: string,
    headers: DeleteGroupByIdHeaders = new DeleteGroupByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/groups/',
        toString(groupId) as string
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
export function serializeCreateGroupRequestBodyInvitabilityLevelField(
  val: CreateGroupRequestBodyInvitabilityLevelField
): SerializedData {
  return val;
}
export function deserializeCreateGroupRequestBodyInvitabilityLevelField(
  val: any
): CreateGroupRequestBodyInvitabilityLevelField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateGroupRequestBodyInvitabilityLevelField"';
  }
  if (val == 'admins_only') {
    return 'admins_only';
  }
  if (val == 'admins_and_members') {
    return 'admins_and_members';
  }
  if (val == 'all_managed_users') {
    return 'all_managed_users';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateGroupRequestBodyMemberViewabilityLevelField(
  val: CreateGroupRequestBodyMemberViewabilityLevelField
): SerializedData {
  return val;
}
export function deserializeCreateGroupRequestBodyMemberViewabilityLevelField(
  val: any
): CreateGroupRequestBodyMemberViewabilityLevelField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateGroupRequestBodyMemberViewabilityLevelField"';
  }
  if (val == 'admins_only') {
    return 'admins_only';
  }
  if (val == 'admins_and_members') {
    return 'admins_and_members';
  }
  if (val == 'all_managed_users') {
    return 'all_managed_users';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateGroupRequestBody(
  val: CreateGroupRequestBody
): SerializedData {
  return {
    ['name']: val.name,
    ['provenance']: val.provenance == void 0 ? void 0 : val.provenance,
    ['external_sync_identifier']:
      val.externalSyncIdentifier == void 0
        ? void 0
        : val.externalSyncIdentifier,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['invitability_level']:
      val.invitabilityLevel == void 0
        ? void 0
        : serializeCreateGroupRequestBodyInvitabilityLevelField(
            val.invitabilityLevel
          ),
    ['member_viewability_level']:
      val.memberViewabilityLevel == void 0
        ? void 0
        : serializeCreateGroupRequestBodyMemberViewabilityLevelField(
            val.memberViewabilityLevel
          ),
  };
}
export function deserializeCreateGroupRequestBody(
  val: any
): CreateGroupRequestBody {
  const name: string = val.name;
  const provenance: undefined | string =
    val.provenance == void 0 ? void 0 : val.provenance;
  const externalSyncIdentifier: undefined | string =
    val.external_sync_identifier == void 0
      ? void 0
      : val.external_sync_identifier;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const invitabilityLevel:
    | undefined
    | CreateGroupRequestBodyInvitabilityLevelField =
    val.invitability_level == void 0
      ? void 0
      : deserializeCreateGroupRequestBodyInvitabilityLevelField(
          val.invitability_level
        );
  const memberViewabilityLevel:
    | undefined
    | CreateGroupRequestBodyMemberViewabilityLevelField =
    val.member_viewability_level == void 0
      ? void 0
      : deserializeCreateGroupRequestBodyMemberViewabilityLevelField(
          val.member_viewability_level
        );
  return {
    name: name,
    provenance: provenance,
    externalSyncIdentifier: externalSyncIdentifier,
    description: description,
    invitabilityLevel: invitabilityLevel,
    memberViewabilityLevel: memberViewabilityLevel,
  } satisfies CreateGroupRequestBody;
}
export function serializeUpdateGroupByIdRequestBodyInvitabilityLevelField(
  val: UpdateGroupByIdRequestBodyInvitabilityLevelField
): SerializedData {
  return val;
}
export function deserializeUpdateGroupByIdRequestBodyInvitabilityLevelField(
  val: any
): UpdateGroupByIdRequestBodyInvitabilityLevelField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateGroupByIdRequestBodyInvitabilityLevelField"';
  }
  if (val == 'admins_only') {
    return 'admins_only';
  }
  if (val == 'admins_and_members') {
    return 'admins_and_members';
  }
  if (val == 'all_managed_users') {
    return 'all_managed_users';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField(
  val: UpdateGroupByIdRequestBodyMemberViewabilityLevelField
): SerializedData {
  return val;
}
export function deserializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField(
  val: any
): UpdateGroupByIdRequestBodyMemberViewabilityLevelField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateGroupByIdRequestBodyMemberViewabilityLevelField"';
  }
  if (val == 'admins_only') {
    return 'admins_only';
  }
  if (val == 'admins_and_members') {
    return 'admins_and_members';
  }
  if (val == 'all_managed_users') {
    return 'all_managed_users';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateGroupByIdRequestBody(
  val: UpdateGroupByIdRequestBody
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['provenance']: val.provenance == void 0 ? void 0 : val.provenance,
    ['external_sync_identifier']:
      val.externalSyncIdentifier == void 0
        ? void 0
        : val.externalSyncIdentifier,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['invitability_level']:
      val.invitabilityLevel == void 0
        ? void 0
        : serializeUpdateGroupByIdRequestBodyInvitabilityLevelField(
            val.invitabilityLevel
          ),
    ['member_viewability_level']:
      val.memberViewabilityLevel == void 0
        ? void 0
        : serializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField(
            val.memberViewabilityLevel
          ),
  };
}
export function deserializeUpdateGroupByIdRequestBody(
  val: any
): UpdateGroupByIdRequestBody {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const provenance: undefined | string =
    val.provenance == void 0 ? void 0 : val.provenance;
  const externalSyncIdentifier: undefined | string =
    val.external_sync_identifier == void 0
      ? void 0
      : val.external_sync_identifier;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const invitabilityLevel:
    | undefined
    | UpdateGroupByIdRequestBodyInvitabilityLevelField =
    val.invitability_level == void 0
      ? void 0
      : deserializeUpdateGroupByIdRequestBodyInvitabilityLevelField(
          val.invitability_level
        );
  const memberViewabilityLevel:
    | undefined
    | UpdateGroupByIdRequestBodyMemberViewabilityLevelField =
    val.member_viewability_level == void 0
      ? void 0
      : deserializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField(
          val.member_viewability_level
        );
  return {
    name: name,
    provenance: provenance,
    externalSyncIdentifier: externalSyncIdentifier,
    description: description,
    invitabilityLevel: invitabilityLevel,
    memberViewabilityLevel: memberViewabilityLevel,
  } satisfies UpdateGroupByIdRequestBody;
}
