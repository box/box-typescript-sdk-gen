import { serializeGroups } from '../schemas/groups.generated.js';
import { deserializeGroups } from '../schemas/groups.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeGroupFull } from '../schemas/groupFull.generated.js';
import { deserializeGroupFull } from '../schemas/groupFull.generated.js';
import { Groups } from '../schemas/groups.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { GroupFull } from '../schemas/groupFull.generated.js';
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
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateGroupOptionals {
  readonly queryParams: CreateGroupQueryParams =
    {} satisfies CreateGroupQueryParams;
  readonly headers: CreateGroupHeaders = new CreateGroupHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateGroupOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateGroupOptionals,
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
export interface CreateGroupOptionalsInput {
  readonly queryParams?: CreateGroupQueryParams;
  readonly headers?: CreateGroupHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetGroupByIdOptionals {
  readonly queryParams: GetGroupByIdQueryParams =
    {} satisfies GetGroupByIdQueryParams;
  readonly headers: GetGroupByIdHeaders = new GetGroupByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetGroupByIdOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetGroupByIdOptionals,
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
export interface GetGroupByIdOptionalsInput {
  readonly queryParams?: GetGroupByIdQueryParams;
  readonly headers?: GetGroupByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateGroupByIdOptionals {
  readonly requestBody: UpdateGroupByIdRequestBody =
    {} satisfies UpdateGroupByIdRequestBody;
  readonly queryParams: UpdateGroupByIdQueryParams =
    {} satisfies UpdateGroupByIdQueryParams;
  readonly headers: UpdateGroupByIdHeaders = new UpdateGroupByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateGroupByIdOptionals,
      'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateGroupByIdOptionals,
          'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.requestBody) {
      this.requestBody = fields.requestBody;
    }
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
export interface UpdateGroupByIdOptionalsInput {
  readonly requestBody?: UpdateGroupByIdRequestBody;
  readonly queryParams?: UpdateGroupByIdQueryParams;
  readonly headers?: UpdateGroupByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteGroupByIdOptionals {
  readonly headers: DeleteGroupByIdHeaders = new DeleteGroupByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<DeleteGroupByIdOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<DeleteGroupByIdOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface DeleteGroupByIdOptionalsInput {
  readonly headers?: DeleteGroupByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
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
    fields: Omit<GetGroupsHeaders, 'extraHeaders'> &
      Partial<Pick<GetGroupsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetGroupsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<CreateGroupHeaders, 'extraHeaders'> &
      Partial<Pick<CreateGroupHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateGroupHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetGroupByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetGroupByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetGroupByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetGroupByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetGroupByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<UpdateGroupByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateGroupByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateGroupByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteGroupByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteGroupByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteGroupByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteGroupByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GroupsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      GroupsManager,
      | 'networkSession'
      | 'getGroups'
      | 'createGroup'
      | 'getGroupById'
      | 'updateGroupById'
      | 'deleteGroupById'
    > &
      Partial<Pick<GroupsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getGroups(
    queryParams: GetGroupsQueryParams = {} satisfies GetGroupsQueryParams,
    headersInput: GetGroupsHeadersInput = new GetGroupsHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Groups> {
    const headers: GetGroupsHeaders = new GetGroupsHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
    optionalsInput: CreateGroupOptionalsInput = {}
  ): Promise<GroupFull> {
    const optionals: CreateGroupOptionals = new CreateGroupOptionals({
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
    optionalsInput: GetGroupByIdOptionalsInput = {}
  ): Promise<GroupFull> {
    const optionals: GetGroupByIdOptionals = new GetGroupByIdOptionals({
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
    optionalsInput: UpdateGroupByIdOptionalsInput = {}
  ): Promise<GroupFull> {
    const optionals: UpdateGroupByIdOptionals = new UpdateGroupByIdOptionals({
      requestBody: optionalsInput.requestBody,
      queryParams: optionalsInput.queryParams,
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const requestBody: any = optionals.requestBody;
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
    optionalsInput: DeleteGroupByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteGroupByIdOptionals = new DeleteGroupByIdOptionals({
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
export interface GroupsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
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
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateGroupRequestBodyInvitabilityLevelField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
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
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateGroupRequestBodyMemberViewabilityLevelField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
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
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateGroupByIdRequestBodyInvitabilityLevelField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
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
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateGroupByIdRequestBodyMemberViewabilityLevelField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
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
