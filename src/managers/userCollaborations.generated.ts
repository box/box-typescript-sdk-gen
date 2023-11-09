import { serializeCollaboration } from '../schemas.generated.js';
import { deserializeCollaboration } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { Collaboration } from '../schemas.generated.js';
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
export interface GetCollaborationByIdQueryParamsArg {
  readonly fields?: readonly string[];
}
export class GetCollaborationByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetCollaborationByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetCollaborationByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateCollaborationByIdRequestBodyArgRoleField =
  | 'editor'
  | 'viewer'
  | 'previewer'
  | 'uploader'
  | 'previewer uploader'
  | 'viewer uploader'
  | 'co-owner'
  | 'owner';
export type UpdateCollaborationByIdRequestBodyArgStatusField =
  | 'pending'
  | 'accepted'
  | 'rejected';
export interface UpdateCollaborationByIdRequestBodyArg {
  readonly role: UpdateCollaborationByIdRequestBodyArgRoleField;
  readonly status?: UpdateCollaborationByIdRequestBodyArgStatusField;
  readonly expiresAt?: string;
  readonly canViewPath?: boolean;
}
export class UpdateCollaborationByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateCollaborationByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateCollaborationByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteCollaborationByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteCollaborationByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteCollaborationByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateCollaborationRequestBodyArgItemFieldTypeField =
  | 'file'
  | 'folder';
export interface CreateCollaborationRequestBodyArgItemField {
  readonly type?: CreateCollaborationRequestBodyArgItemFieldTypeField;
  readonly id?: string;
}
export type CreateCollaborationRequestBodyArgAccessibleByFieldTypeField =
  | 'user'
  | 'group';
export interface CreateCollaborationRequestBodyArgAccessibleByField {
  readonly type: CreateCollaborationRequestBodyArgAccessibleByFieldTypeField;
  readonly id?: string;
  readonly login?: string;
}
export type CreateCollaborationRequestBodyArgRoleField =
  | 'editor'
  | 'viewer'
  | 'previewer'
  | 'uploader'
  | 'previewer uploader'
  | 'viewer uploader'
  | 'co-owner';
export interface CreateCollaborationRequestBodyArg {
  readonly item: CreateCollaborationRequestBodyArgItemField;
  readonly accessibleBy: CreateCollaborationRequestBodyArgAccessibleByField;
  readonly role: CreateCollaborationRequestBodyArgRoleField;
  readonly isAccessOnly?: boolean;
  readonly canViewPath?: boolean;
  readonly expiresAt?: string;
}
export interface CreateCollaborationQueryParamsArg {
  readonly fields?: readonly string[];
  readonly notify?: boolean;
}
export class CreateCollaborationHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateCollaborationHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateCollaborationHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class UserCollaborationsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      UserCollaborationsManager,
      | 'getCollaborationById'
      | 'updateCollaborationById'
      | 'deleteCollaborationById'
      | 'createCollaboration'
    >
  ) {
    Object.assign(this, fields);
  }
  async getCollaborationById(
    collaborationId: string,
    queryParams: GetCollaborationByIdQueryParamsArg = {} satisfies GetCollaborationByIdQueryParamsArg,
    headers: GetCollaborationByIdHeadersArg = new GetCollaborationByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Collaboration> {
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
        'https://api.box.com/2.0/collaborations/',
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
    requestBody: UpdateCollaborationByIdRequestBodyArg,
    headers: UpdateCollaborationByIdHeadersArg = new UpdateCollaborationByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Collaboration> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/collaborations/',
        toString(collaborationId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateCollaborationByIdRequestBodyArg(requestBody),
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
    headers: DeleteCollaborationByIdHeadersArg = new DeleteCollaborationByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/collaborations/',
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
    requestBody: CreateCollaborationRequestBodyArg,
    queryParams: CreateCollaborationQueryParamsArg = {} satisfies CreateCollaborationQueryParamsArg,
    headers: CreateCollaborationHeadersArg = new CreateCollaborationHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Collaboration> {
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
      ''.concat('https://api.box.com/2.0/collaborations') as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeCreateCollaborationRequestBodyArg(requestBody),
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
export function serializeUpdateCollaborationByIdRequestBodyArgRoleField(
  val: UpdateCollaborationByIdRequestBodyArgRoleField
): SerializedData {
  return val;
}
export function deserializeUpdateCollaborationByIdRequestBodyArgRoleField(
  val: any
): UpdateCollaborationByIdRequestBodyArgRoleField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateCollaborationByIdRequestBodyArgRoleField"';
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
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateCollaborationByIdRequestBodyArgStatusField(
  val: UpdateCollaborationByIdRequestBodyArgStatusField
): SerializedData {
  return val;
}
export function deserializeUpdateCollaborationByIdRequestBodyArgStatusField(
  val: any
): UpdateCollaborationByIdRequestBodyArgStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateCollaborationByIdRequestBodyArgStatusField"';
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
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateCollaborationByIdRequestBodyArg(
  val: UpdateCollaborationByIdRequestBodyArg
): SerializedData {
  return {
    ['role']: serializeUpdateCollaborationByIdRequestBodyArgRoleField(val.role),
    ['status']:
      val.status == void 0
        ? void 0
        : serializeUpdateCollaborationByIdRequestBodyArgStatusField(val.status),
    ['expires_at']: val.expiresAt == void 0 ? void 0 : val.expiresAt,
    ['can_view_path']: val.canViewPath == void 0 ? void 0 : val.canViewPath,
  };
}
export function deserializeUpdateCollaborationByIdRequestBodyArg(
  val: any
): UpdateCollaborationByIdRequestBodyArg {
  const role: UpdateCollaborationByIdRequestBodyArgRoleField =
    deserializeUpdateCollaborationByIdRequestBodyArgRoleField(val.role);
  const status: undefined | UpdateCollaborationByIdRequestBodyArgStatusField =
    val.status == void 0
      ? void 0
      : deserializeUpdateCollaborationByIdRequestBodyArgStatusField(val.status);
  const expiresAt: undefined | string =
    val.expires_at == void 0 ? void 0 : val.expires_at;
  const canViewPath: undefined | boolean =
    val.can_view_path == void 0 ? void 0 : val.can_view_path;
  return {
    role: role,
    status: status,
    expiresAt: expiresAt,
    canViewPath: canViewPath,
  } satisfies UpdateCollaborationByIdRequestBodyArg;
}
export function serializeCreateCollaborationRequestBodyArgItemFieldTypeField(
  val: CreateCollaborationRequestBodyArgItemFieldTypeField
): SerializedData {
  return val;
}
export function deserializeCreateCollaborationRequestBodyArgItemFieldTypeField(
  val: any
): CreateCollaborationRequestBodyArgItemFieldTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateCollaborationRequestBodyArgItemFieldTypeField"';
  }
  if (val == 'file') {
    return 'file';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateCollaborationRequestBodyArgItemField(
  val: CreateCollaborationRequestBodyArgItemField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateCollaborationRequestBodyArgItemFieldTypeField(
            val.type
          ),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeCreateCollaborationRequestBodyArgItemField(
  val: any
): CreateCollaborationRequestBodyArgItemField {
  const type: undefined | CreateCollaborationRequestBodyArgItemFieldTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateCollaborationRequestBodyArgItemFieldTypeField(
          val.type
        );
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateCollaborationRequestBodyArgItemField;
}
export function serializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(
  val: CreateCollaborationRequestBodyArgAccessibleByFieldTypeField
): SerializedData {
  return val;
}
export function deserializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(
  val: any
): CreateCollaborationRequestBodyArgAccessibleByFieldTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateCollaborationRequestBodyArgAccessibleByFieldTypeField"';
  }
  if (val == 'user') {
    return 'user';
  }
  if (val == 'group') {
    return 'group';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateCollaborationRequestBodyArgAccessibleByField(
  val: CreateCollaborationRequestBodyArgAccessibleByField
): SerializedData {
  return {
    ['type']:
      serializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(
        val.type
      ),
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['login']: val.login == void 0 ? void 0 : val.login,
  };
}
export function deserializeCreateCollaborationRequestBodyArgAccessibleByField(
  val: any
): CreateCollaborationRequestBodyArgAccessibleByField {
  const type: CreateCollaborationRequestBodyArgAccessibleByFieldTypeField =
    deserializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(
      val.type
    );
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  return {
    type: type,
    id: id,
    login: login,
  } satisfies CreateCollaborationRequestBodyArgAccessibleByField;
}
export function serializeCreateCollaborationRequestBodyArgRoleField(
  val: CreateCollaborationRequestBodyArgRoleField
): SerializedData {
  return val;
}
export function deserializeCreateCollaborationRequestBodyArgRoleField(
  val: any
): CreateCollaborationRequestBodyArgRoleField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateCollaborationRequestBodyArgRoleField"';
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
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateCollaborationRequestBodyArg(
  val: CreateCollaborationRequestBodyArg
): SerializedData {
  return {
    ['item']: serializeCreateCollaborationRequestBodyArgItemField(val.item),
    ['accessible_by']:
      serializeCreateCollaborationRequestBodyArgAccessibleByField(
        val.accessibleBy
      ),
    ['role']: serializeCreateCollaborationRequestBodyArgRoleField(val.role),
    ['is_access_only']: val.isAccessOnly == void 0 ? void 0 : val.isAccessOnly,
    ['can_view_path']: val.canViewPath == void 0 ? void 0 : val.canViewPath,
    ['expires_at']: val.expiresAt == void 0 ? void 0 : val.expiresAt,
  };
}
export function deserializeCreateCollaborationRequestBodyArg(
  val: any
): CreateCollaborationRequestBodyArg {
  const item: CreateCollaborationRequestBodyArgItemField =
    deserializeCreateCollaborationRequestBodyArgItemField(val.item);
  const accessibleBy: CreateCollaborationRequestBodyArgAccessibleByField =
    deserializeCreateCollaborationRequestBodyArgAccessibleByField(
      val.accessible_by
    );
  const role: CreateCollaborationRequestBodyArgRoleField =
    deserializeCreateCollaborationRequestBodyArgRoleField(val.role);
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
  } satisfies CreateCollaborationRequestBodyArg;
}
