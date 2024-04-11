import { serializeCollaboration } from '../schemas.generated.js';
import { deserializeCollaboration } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { Collaboration } from '../schemas.generated.js';
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
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface GetCollaborationByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetCollaborationByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetCollaborationByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetCollaborationByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetCollaborationByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateCollaborationByIdRequestBodyRoleField =
  | 'editor'
  | 'viewer'
  | 'previewer'
  | 'uploader'
  | 'previewer uploader'
  | 'viewer uploader'
  | 'co-owner'
  | 'owner';
export type UpdateCollaborationByIdRequestBodyStatusField =
  | 'pending'
  | 'accepted'
  | 'rejected';
export interface UpdateCollaborationByIdRequestBody {
  readonly role: UpdateCollaborationByIdRequestBodyRoleField;
  readonly status?: UpdateCollaborationByIdRequestBodyStatusField;
  readonly expiresAt?: string;
  readonly canViewPath?: boolean;
}
export class UpdateCollaborationByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateCollaborationByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateCollaborationByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateCollaborationByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteCollaborationByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteCollaborationByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteCollaborationByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface DeleteCollaborationByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type CreateCollaborationRequestBodyItemTypeField = 'file' | 'folder';
export interface CreateCollaborationRequestBodyItemField {
  readonly type?: CreateCollaborationRequestBodyItemTypeField;
  readonly id?: string;
}
export type CreateCollaborationRequestBodyAccessibleByTypeField =
  | 'user'
  | 'group';
export interface CreateCollaborationRequestBodyAccessibleByField {
  readonly type: CreateCollaborationRequestBodyAccessibleByTypeField;
  readonly id?: string;
  readonly login?: string;
}
export type CreateCollaborationRequestBodyRoleField =
  | 'editor'
  | 'viewer'
  | 'previewer'
  | 'uploader'
  | 'previewer uploader'
  | 'viewer uploader'
  | 'co-owner';
export interface CreateCollaborationRequestBody {
  readonly item: CreateCollaborationRequestBodyItemField;
  readonly accessibleBy: CreateCollaborationRequestBodyAccessibleByField;
  readonly role: CreateCollaborationRequestBodyRoleField;
  readonly isAccessOnly?: boolean;
  readonly canViewPath?: boolean;
  readonly expiresAt?: string;
}
export interface CreateCollaborationQueryParams {
  readonly fields?: readonly string[];
  readonly notify?: boolean;
}
export class CreateCollaborationHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateCollaborationHeaders, 'extraHeaders'>
      | Partial<Pick<CreateCollaborationHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateCollaborationHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class UserCollaborationsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          UserCollaborationsManager,
          | 'networkSession'
          | 'getCollaborationById'
          | 'updateCollaborationById'
          | 'deleteCollaborationById'
          | 'createCollaboration'
        >
      | Partial<Pick<UserCollaborationsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getCollaborationById(
    collaborationId: string,
    queryParams: GetCollaborationByIdQueryParams = {} satisfies GetCollaborationByIdQueryParams,
    headersInput: GetCollaborationByIdHeadersInput = new GetCollaborationByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Collaboration> {
    const headers: any = new GetCollaborationByIdHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
        '/collaborations/',
        toString(collaborationId) as string
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
    return deserializeCollaboration(response.data);
  }
  async updateCollaborationById(
    collaborationId: string,
    requestBody: UpdateCollaborationByIdRequestBody,
    headersInput: UpdateCollaborationByIdHeadersInput = new UpdateCollaborationByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Collaboration> {
    const headers: any = new UpdateCollaborationByIdHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/collaborations/',
        toString(collaborationId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateCollaborationByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeCollaboration(response.data);
  }
  async deleteCollaborationById(
    collaborationId: string,
    headersInput: DeleteCollaborationByIdHeadersInput = new DeleteCollaborationByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headers: any = new DeleteCollaborationByIdHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/collaborations/',
        toString(collaborationId) as string
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
  async createCollaboration(
    requestBody: CreateCollaborationRequestBody,
    queryParams: CreateCollaborationQueryParams = {} satisfies CreateCollaborationQueryParams,
    headersInput: CreateCollaborationHeadersInput = new CreateCollaborationHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Collaboration> {
    const headers: any = new CreateCollaborationHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
      ['notify']: toString(queryParams.notify) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/collaborations'
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeCreateCollaborationRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeCollaboration(response.data);
  }
}
export interface UserCollaborationsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeUpdateCollaborationByIdRequestBodyRoleField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateCollaborationByIdRequestBodyRoleField(
  val: any
): UpdateCollaborationByIdRequestBodyRoleField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateCollaborationByIdRequestBodyRoleField"',
    });
  }
  if (val == 'editor') {
    return 'editor';
  }
  if (val == 'viewer') {
    return 'viewer';
  }
  if (val == 'previewer') {
    return 'previewer';
  }
  if (val == 'uploader') {
    return 'uploader';
  }
  if (val == 'previewer uploader') {
    return 'previewer uploader';
  }
  if (val == 'viewer uploader') {
    return 'viewer uploader';
  }
  if (val == 'co-owner') {
    return 'co-owner';
  }
  if (val == 'owner') {
    return 'owner';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateCollaborationByIdRequestBodyStatusField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateCollaborationByIdRequestBodyStatusField(
  val: any
): UpdateCollaborationByIdRequestBodyStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateCollaborationByIdRequestBodyStatusField"',
    });
  }
  if (val == 'pending') {
    return 'pending';
  }
  if (val == 'accepted') {
    return 'accepted';
  }
  if (val == 'rejected') {
    return 'rejected';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateCollaborationByIdRequestBody(
  val: any
): SerializedData {
  return {
    ['role']: serializeUpdateCollaborationByIdRequestBodyRoleField(val.role),
    ['status']:
      val.status == void 0
        ? void 0
        : serializeUpdateCollaborationByIdRequestBodyStatusField(val.status),
    ['expires_at']: val.expiresAt == void 0 ? void 0 : val.expiresAt,
    ['can_view_path']: val.canViewPath == void 0 ? void 0 : val.canViewPath,
  };
}
export function deserializeUpdateCollaborationByIdRequestBody(
  val: any
): UpdateCollaborationByIdRequestBody {
  const role: UpdateCollaborationByIdRequestBodyRoleField =
    deserializeUpdateCollaborationByIdRequestBodyRoleField(val.role);
  const status: undefined | UpdateCollaborationByIdRequestBodyStatusField =
    val.status == void 0
      ? void 0
      : deserializeUpdateCollaborationByIdRequestBodyStatusField(val.status);
  const expiresAt: undefined | string =
    val.expires_at == void 0 ? void 0 : val.expires_at;
  const canViewPath: undefined | boolean =
    val.can_view_path == void 0 ? void 0 : val.can_view_path;
  return {
    role: role,
    status: status,
    expiresAt: expiresAt,
    canViewPath: canViewPath,
  } satisfies UpdateCollaborationByIdRequestBody;
}
export function serializeCreateCollaborationRequestBodyItemTypeField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateCollaborationRequestBodyItemTypeField(
  val: any
): CreateCollaborationRequestBodyItemTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateCollaborationRequestBodyItemTypeField"',
    });
  }
  if (val == 'file') {
    return 'file';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateCollaborationRequestBodyItemField(
  val: any
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateCollaborationRequestBodyItemTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeCreateCollaborationRequestBodyItemField(
  val: any
): CreateCollaborationRequestBodyItemField {
  const type: undefined | CreateCollaborationRequestBodyItemTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateCollaborationRequestBodyItemTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateCollaborationRequestBodyItemField;
}
export function serializeCreateCollaborationRequestBodyAccessibleByTypeField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateCollaborationRequestBodyAccessibleByTypeField(
  val: any
): CreateCollaborationRequestBodyAccessibleByTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateCollaborationRequestBodyAccessibleByTypeField"',
    });
  }
  if (val == 'user') {
    return 'user';
  }
  if (val == 'group') {
    return 'group';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateCollaborationRequestBodyAccessibleByField(
  val: any
): SerializedData {
  return {
    ['type']: serializeCreateCollaborationRequestBodyAccessibleByTypeField(
      val.type
    ),
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['login']: val.login == void 0 ? void 0 : val.login,
  };
}
export function deserializeCreateCollaborationRequestBodyAccessibleByField(
  val: any
): CreateCollaborationRequestBodyAccessibleByField {
  const type: CreateCollaborationRequestBodyAccessibleByTypeField =
    deserializeCreateCollaborationRequestBodyAccessibleByTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  return {
    type: type,
    id: id,
    login: login,
  } satisfies CreateCollaborationRequestBodyAccessibleByField;
}
export function serializeCreateCollaborationRequestBodyRoleField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateCollaborationRequestBodyRoleField(
  val: any
): CreateCollaborationRequestBodyRoleField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateCollaborationRequestBodyRoleField"',
    });
  }
  if (val == 'editor') {
    return 'editor';
  }
  if (val == 'viewer') {
    return 'viewer';
  }
  if (val == 'previewer') {
    return 'previewer';
  }
  if (val == 'uploader') {
    return 'uploader';
  }
  if (val == 'previewer uploader') {
    return 'previewer uploader';
  }
  if (val == 'viewer uploader') {
    return 'viewer uploader';
  }
  if (val == 'co-owner') {
    return 'co-owner';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateCollaborationRequestBody(
  val: any
): SerializedData {
  return {
    ['item']: serializeCreateCollaborationRequestBodyItemField(val.item),
    ['accessible_by']: serializeCreateCollaborationRequestBodyAccessibleByField(
      val.accessibleBy
    ),
    ['role']: serializeCreateCollaborationRequestBodyRoleField(val.role),
    ['is_access_only']: val.isAccessOnly == void 0 ? void 0 : val.isAccessOnly,
    ['can_view_path']: val.canViewPath == void 0 ? void 0 : val.canViewPath,
    ['expires_at']: val.expiresAt == void 0 ? void 0 : val.expiresAt,
  };
}
export function deserializeCreateCollaborationRequestBody(
  val: any
): CreateCollaborationRequestBody {
  const item: CreateCollaborationRequestBodyItemField =
    deserializeCreateCollaborationRequestBodyItemField(val.item);
  const accessibleBy: CreateCollaborationRequestBodyAccessibleByField =
    deserializeCreateCollaborationRequestBodyAccessibleByField(
      val.accessible_by
    );
  const role: CreateCollaborationRequestBodyRoleField =
    deserializeCreateCollaborationRequestBodyRoleField(val.role);
  const isAccessOnly: undefined | boolean =
    val.is_access_only == void 0 ? void 0 : val.is_access_only;
  const canViewPath: undefined | boolean =
    val.can_view_path == void 0 ? void 0 : val.can_view_path;
  const expiresAt: undefined | string =
    val.expires_at == void 0 ? void 0 : val.expires_at;
  return {
    item: item,
    accessibleBy: accessibleBy,
    role: role,
    isAccessOnly: isAccessOnly,
    canViewPath: canViewPath,
    expiresAt: expiresAt,
  } satisfies CreateCollaborationRequestBody;
}
