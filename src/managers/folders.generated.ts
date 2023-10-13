import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeItems } from '../schemas.generated.js';
import { deserializeItems } from '../schemas.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Items } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { serializeJson } from '../json.js';
import { isJson } from '../json.js';
export type GetFolderByIdQueryParamsArgSortField =
  | 'id'
  | 'name'
  | 'date'
  | 'size';
export type GetFolderByIdQueryParamsArgDirectionField = 'ASC' | 'DESC';
export interface GetFolderByIdQueryParamsArg {
  readonly fields?: readonly string[];
  readonly sort?: GetFolderByIdQueryParamsArgSortField;
  readonly direction?: GetFolderByIdQueryParamsArgDirectionField;
  readonly offset?: number;
  readonly limit?: number;
}
export class GetFolderByIdHeadersArg {
  readonly ifNoneMatch?: string;
  readonly boxapi?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFolderByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetFolderByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFolderByIdRequestBodyArgSyncStateField =
  | 'synced'
  | 'not_synced'
  | 'partially_synced';
export interface UpdateFolderByIdRequestBodyArgParentField {
  readonly id?: string;
}
export type UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField {
  readonly canDownload?: boolean;
}
export interface UpdateFolderByIdRequestBodyArgSharedLinkField {
  readonly access?: UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField;
}
export type UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField =
  | 'open'
  | 'collaborators';
export interface UpdateFolderByIdRequestBodyArgFolderUploadEmailField {
  readonly access?: UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField;
}
export interface UpdateFolderByIdRequestBodyArgCollectionsField {
  readonly id?: string;
  readonly type?: string;
}
export interface UpdateFolderByIdRequestBodyArg {
  readonly name?: string;
  readonly description?: string;
  readonly syncState?: UpdateFolderByIdRequestBodyArgSyncStateField;
  readonly canNonOwnersInvite?: boolean;
  readonly parent?: UpdateFolderByIdRequestBodyArgParentField;
  readonly sharedLink?: UpdateFolderByIdRequestBodyArgSharedLinkField;
  readonly folderUploadEmail?: UpdateFolderByIdRequestBodyArgFolderUploadEmailField;
  readonly tags?: readonly string[];
  readonly isCollaborationRestrictedToEnterprise?: boolean;
  readonly collections?: readonly UpdateFolderByIdRequestBodyArgCollectionsField[];
  readonly canNonOwnersViewCollaborators?: boolean;
}
export interface UpdateFolderByIdQueryParamsArg {
  readonly fields?: readonly string[];
}
export class UpdateFolderByIdHeadersArg {
  readonly ifMatch?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFolderByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateFolderByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface DeleteFolderByIdQueryParamsArg {
  readonly recursive?: boolean;
}
export class DeleteFolderByIdHeadersArg {
  readonly ifMatch?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFolderByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteFolderByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type GetFolderItemsQueryParamsArgSortField =
  | 'id'
  | 'name'
  | 'date'
  | 'size';
export type GetFolderItemsQueryParamsArgDirectionField = 'ASC' | 'DESC';
export interface GetFolderItemsQueryParamsArg {
  readonly fields?: readonly string[];
  readonly usemarker?: boolean;
  readonly marker?: string;
  readonly offset?: number;
  readonly limit?: number;
  readonly sort?: GetFolderItemsQueryParamsArgSortField;
  readonly direction?: GetFolderItemsQueryParamsArgDirectionField;
}
export class GetFolderItemsHeadersArg {
  readonly boxapi?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFolderItemsHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetFolderItemsHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateFolderRequestBodyArgParentField {
  readonly id: string;
}
export type CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField =
  | 'open'
  | 'collaborators';
export interface CreateFolderRequestBodyArgFolderUploadEmailField {
  readonly access?: CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField;
}
export type CreateFolderRequestBodyArgSyncStateField =
  | 'synced'
  | 'not_synced'
  | 'partially_synced';
export interface CreateFolderRequestBodyArg {
  readonly name: string;
  readonly parent: CreateFolderRequestBodyArgParentField;
  readonly folderUploadEmail?: CreateFolderRequestBodyArgFolderUploadEmailField;
  readonly syncState?: CreateFolderRequestBodyArgSyncStateField;
}
export interface CreateFolderQueryParamsArg {
  readonly fields?: readonly string[];
}
export class CreateFolderHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateFolderHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateFolderHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CopyFolderRequestBodyArgParentField {
  readonly id: string;
}
export interface CopyFolderRequestBodyArg {
  readonly name?: string;
  readonly parent: CopyFolderRequestBodyArgParentField;
}
export interface CopyFolderQueryParamsArg {
  readonly fields?: readonly string[];
}
export class CopyFolderHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CopyFolderHeadersArg, 'extraHeaders'>
      | Partial<Pick<CopyFolderHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class FoldersManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      FoldersManager,
      | 'getFolderById'
      | 'updateFolderById'
      | 'deleteFolderById'
      | 'getFolderItems'
      | 'createFolder'
      | 'copyFolder'
    >
  ) {
    Object.assign(this, fields);
  }
  async getFolderById(
    folderId: string,
    queryParams: GetFolderByIdQueryParamsArg = {} satisfies GetFolderByIdQueryParamsArg,
    headers: GetFolderByIdHeadersArg = new GetFolderByIdHeadersArg({})
  ): Promise<FolderFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
      ['sort']: toString(queryParams.sort) as string,
      ['direction']: toString(queryParams.direction) as string,
      ['offset']: toString(queryParams.offset) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{
        ['if-none-match']: toString(headers.ifNoneMatch) as string,
        ['boxapi']: toString(headers.boxapi) as string,
      },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/folders/',
        toString(folderId) as string
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFolderFull(deserializeJson(response.text));
  }
  async updateFolderById(
    folderId: string,
    requestBody: UpdateFolderByIdRequestBodyArg = {} satisfies UpdateFolderByIdRequestBodyArg,
    queryParams: UpdateFolderByIdQueryParamsArg = {} satisfies UpdateFolderByIdQueryParamsArg,
    headers: UpdateFolderByIdHeadersArg = new UpdateFolderByIdHeadersArg({})
  ): Promise<FolderFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{ ['if-match']: toString(headers.ifMatch) as string },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/folders/',
        toString(folderId) as string
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        body: serializeJson(
          serializeUpdateFolderByIdRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFolderFull(deserializeJson(response.text));
  }
  async deleteFolderById(
    folderId: string,
    queryParams: DeleteFolderByIdQueryParamsArg = {} satisfies DeleteFolderByIdQueryParamsArg,
    headers: DeleteFolderByIdHeadersArg = new DeleteFolderByIdHeadersArg({})
  ): Promise<undefined> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['recursive']: toString(queryParams.recursive) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{ ['if-match']: toString(headers.ifMatch) as string },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/folders/',
        toString(folderId) as string
      ) as string,
      {
        method: 'DELETE',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
  async getFolderItems(
    folderId: string,
    queryParams: GetFolderItemsQueryParamsArg = {} satisfies GetFolderItemsQueryParamsArg,
    headers: GetFolderItemsHeadersArg = new GetFolderItemsHeadersArg({})
  ): Promise<Items> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
      ['usemarker']: toString(queryParams.usemarker) as string,
      ['marker']: toString(queryParams.marker) as string,
      ['offset']: toString(queryParams.offset) as string,
      ['limit']: toString(queryParams.limit) as string,
      ['sort']: toString(queryParams.sort) as string,
      ['direction']: toString(queryParams.direction) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{ ['boxapi']: toString(headers.boxapi) as string },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/folders/',
        toString(folderId) as string,
        '/items'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeItems(deserializeJson(response.text));
  }
  async createFolder(
    requestBody: CreateFolderRequestBodyArg,
    queryParams: CreateFolderQueryParamsArg = {} satisfies CreateFolderQueryParamsArg,
    headers: CreateFolderHeadersArg = new CreateFolderHeadersArg({})
  ): Promise<FolderFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/folders') as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        body: serializeJson(serializeCreateFolderRequestBodyArg(requestBody)),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFolderFull(deserializeJson(response.text));
  }
  async copyFolder(
    folderId: string,
    requestBody: CopyFolderRequestBodyArg,
    queryParams: CopyFolderQueryParamsArg = {} satisfies CopyFolderQueryParamsArg,
    headers: CopyFolderHeadersArg = new CopyFolderHeadersArg({})
  ): Promise<FolderFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/folders/',
        toString(folderId) as string,
        '/copy'
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        body: serializeJson(serializeCopyFolderRequestBodyArg(requestBody)),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFolderFull(deserializeJson(response.text));
  }
}
export function serializeGetFolderByIdQueryParamsArgSortField(
  val: GetFolderByIdQueryParamsArgSortField
): Json {
  return val;
}
export function deserializeGetFolderByIdQueryParamsArgSortField(
  val: any
): GetFolderByIdQueryParamsArgSortField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetFolderByIdQueryParamsArgSortField"';
  }
  if (val == 'id') {
    return 'id';
  }
  if (val == 'name') {
    return 'name';
  }
  if (val == 'date') {
    return 'date';
  }
  if (val == 'size') {
    return 'size';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGetFolderByIdQueryParamsArgDirectionField(
  val: GetFolderByIdQueryParamsArgDirectionField
): Json {
  return val;
}
export function deserializeGetFolderByIdQueryParamsArgDirectionField(
  val: any
): GetFolderByIdQueryParamsArgDirectionField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetFolderByIdQueryParamsArgDirectionField"';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateFolderByIdRequestBodyArgSyncStateField(
  val: UpdateFolderByIdRequestBodyArgSyncStateField
): Json {
  return val;
}
export function deserializeUpdateFolderByIdRequestBodyArgSyncStateField(
  val: any
): UpdateFolderByIdRequestBodyArgSyncStateField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "UpdateFolderByIdRequestBodyArgSyncStateField"';
  }
  if (val == 'synced') {
    return 'synced';
  }
  if (val == 'not_synced') {
    return 'not_synced';
  }
  if (val == 'partially_synced') {
    return 'partially_synced';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateFolderByIdRequestBodyArgParentField(
  val: UpdateFolderByIdRequestBodyArgParentField
): Json {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeUpdateFolderByIdRequestBodyArgParentField(
  val: any
): UpdateFolderByIdRequestBodyArgParentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies UpdateFolderByIdRequestBodyArgParentField;
}
export function serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(
  val: UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField
): Json {
  return val;
}
export function deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(
  val: any
): UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField"';
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'company') {
    return 'company';
  }
  if (val == 'collaborators') {
    return 'collaborators';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(
  val: UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField
): Json {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
  };
}
export function deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(
  val: any
): UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField {
  const canDownload: undefined | boolean =
    val.can_download == void 0 ? void 0 : val.can_download;
  return {
    canDownload: canDownload,
  } satisfies UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField;
}
export function serializeUpdateFolderByIdRequestBodyArgSharedLinkField(
  val: UpdateFolderByIdRequestBodyArgSharedLinkField
): Json {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateFolderByIdRequestBodyArgSharedLinkField(
  val: any
): UpdateFolderByIdRequestBodyArgSharedLinkField {
  const access:
    | undefined
    | UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(
          val.access
        );
  const password: undefined | string =
    val.password == void 0 ? void 0 : val.password;
  const vanityName: undefined | string =
    val.vanity_name == void 0 ? void 0 : val.vanity_name;
  const unsharedAt: undefined | string =
    val.unshared_at == void 0 ? void 0 : val.unshared_at;
  const permissions:
    | undefined
    | UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies UpdateFolderByIdRequestBodyArgSharedLinkField;
}
export function serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(
  val: UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField
): Json {
  return val;
}
export function deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(
  val: any
): UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField"';
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'collaborators') {
    return 'collaborators';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(
  val: UpdateFolderByIdRequestBodyArgFolderUploadEmailField
): Json {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(
            val.access
          ),
  };
}
export function deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(
  val: any
): UpdateFolderByIdRequestBodyArgFolderUploadEmailField {
  const access:
    | undefined
    | UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(
          val.access
        );
  return {
    access: access,
  } satisfies UpdateFolderByIdRequestBodyArgFolderUploadEmailField;
}
export function serializeUpdateFolderByIdRequestBodyArgCollectionsField(
  val: UpdateFolderByIdRequestBodyArgCollectionsField
): Json {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']: val.type == void 0 ? void 0 : val.type,
  };
}
export function deserializeUpdateFolderByIdRequestBodyArgCollectionsField(
  val: any
): UpdateFolderByIdRequestBodyArgCollectionsField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  return {
    id: id,
    type: type,
  } satisfies UpdateFolderByIdRequestBodyArgCollectionsField;
}
export function serializeUpdateFolderByIdRequestBodyArg(
  val: UpdateFolderByIdRequestBodyArg
): Json {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['sync_state']:
      val.syncState == void 0
        ? void 0
        : serializeUpdateFolderByIdRequestBodyArgSyncStateField(val.syncState),
    ['can_non_owners_invite']:
      val.canNonOwnersInvite == void 0 ? void 0 : val.canNonOwnersInvite,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializeUpdateFolderByIdRequestBodyArgParentField(val.parent),
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateFolderByIdRequestBodyArgSharedLinkField(
            val.sharedLink
          ),
    ['folder_upload_email']:
      val.folderUploadEmail == void 0
        ? void 0
        : serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(
            val.folderUploadEmail
          ),
    ['tags']:
      val.tags == void 0
        ? void 0
        : (val.tags?.map(function (item: string): any {
            return item;
          }) as readonly any[]),
    ['is_collaboration_restricted_to_enterprise']:
      val.isCollaborationRestrictedToEnterprise == void 0
        ? void 0
        : val.isCollaborationRestrictedToEnterprise,
    ['collections']:
      val.collections == void 0
        ? void 0
        : (val.collections?.map(function (
            item: UpdateFolderByIdRequestBodyArgCollectionsField
          ): any {
            return serializeUpdateFolderByIdRequestBodyArgCollectionsField(
              item
            );
          }) as readonly any[]),
    ['can_non_owners_view_collaborators']:
      val.canNonOwnersViewCollaborators == void 0
        ? void 0
        : val.canNonOwnersViewCollaborators,
  };
}
export function deserializeUpdateFolderByIdRequestBodyArg(
  val: any
): UpdateFolderByIdRequestBodyArg {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const syncState: undefined | UpdateFolderByIdRequestBodyArgSyncStateField =
    val.sync_state == void 0
      ? void 0
      : deserializeUpdateFolderByIdRequestBodyArgSyncStateField(val.sync_state);
  const canNonOwnersInvite: undefined | boolean =
    val.can_non_owners_invite == void 0 ? void 0 : val.can_non_owners_invite;
  const parent: undefined | UpdateFolderByIdRequestBodyArgParentField =
    val.parent == void 0
      ? void 0
      : deserializeUpdateFolderByIdRequestBodyArgParentField(val.parent);
  const sharedLink: undefined | UpdateFolderByIdRequestBodyArgSharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateFolderByIdRequestBodyArgSharedLinkField(
          val.shared_link
        );
  const folderUploadEmail:
    | undefined
    | UpdateFolderByIdRequestBodyArgFolderUploadEmailField =
    val.folder_upload_email == void 0
      ? void 0
      : deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(
          val.folder_upload_email
        );
  const tags: undefined | readonly string[] =
    val.tags == void 0
      ? void 0
      : isJson(val.tags, 'array')
      ? (val.tags?.map(function (itm: Json): any {
          return itm;
        }) as readonly any[])
      : [];
  const isCollaborationRestrictedToEnterprise: undefined | boolean =
    val.is_collaboration_restricted_to_enterprise == void 0
      ? void 0
      : val.is_collaboration_restricted_to_enterprise;
  const collections:
    | undefined
    | readonly UpdateFolderByIdRequestBodyArgCollectionsField[] =
    val.collections == void 0
      ? void 0
      : isJson(val.collections, 'array')
      ? (val.collections?.map(function (itm: Json): any {
          return deserializeUpdateFolderByIdRequestBodyArgCollectionsField(itm);
        }) as readonly any[])
      : [];
  const canNonOwnersViewCollaborators: undefined | boolean =
    val.can_non_owners_view_collaborators == void 0
      ? void 0
      : val.can_non_owners_view_collaborators;
  return {
    name: name,
    description: description,
    syncState: syncState,
    canNonOwnersInvite: canNonOwnersInvite,
    parent: parent,
    sharedLink: sharedLink,
    folderUploadEmail: folderUploadEmail,
    tags: tags,
    isCollaborationRestrictedToEnterprise:
      isCollaborationRestrictedToEnterprise,
    collections: collections,
    canNonOwnersViewCollaborators: canNonOwnersViewCollaborators,
  } satisfies UpdateFolderByIdRequestBodyArg;
}
export function serializeGetFolderItemsQueryParamsArgSortField(
  val: GetFolderItemsQueryParamsArgSortField
): Json {
  return val;
}
export function deserializeGetFolderItemsQueryParamsArgSortField(
  val: any
): GetFolderItemsQueryParamsArgSortField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetFolderItemsQueryParamsArgSortField"';
  }
  if (val == 'id') {
    return 'id';
  }
  if (val == 'name') {
    return 'name';
  }
  if (val == 'date') {
    return 'date';
  }
  if (val == 'size') {
    return 'size';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGetFolderItemsQueryParamsArgDirectionField(
  val: GetFolderItemsQueryParamsArgDirectionField
): Json {
  return val;
}
export function deserializeGetFolderItemsQueryParamsArgDirectionField(
  val: any
): GetFolderItemsQueryParamsArgDirectionField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetFolderItemsQueryParamsArgDirectionField"';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateFolderRequestBodyArgParentField(
  val: CreateFolderRequestBodyArgParentField
): Json {
  return { ['id']: val.id };
}
export function deserializeCreateFolderRequestBodyArgParentField(
  val: any
): CreateFolderRequestBodyArgParentField {
  const id: string = val.id;
  return { id: id } satisfies CreateFolderRequestBodyArgParentField;
}
export function serializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(
  val: CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField
): Json {
  return val;
}
export function deserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(
  val: any
): CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField"';
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'collaborators') {
    return 'collaborators';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateFolderRequestBodyArgFolderUploadEmailField(
  val: CreateFolderRequestBodyArgFolderUploadEmailField
): Json {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(
            val.access
          ),
  };
}
export function deserializeCreateFolderRequestBodyArgFolderUploadEmailField(
  val: any
): CreateFolderRequestBodyArgFolderUploadEmailField {
  const access:
    | undefined
    | CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField =
    val.access == void 0
      ? void 0
      : deserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(
          val.access
        );
  return {
    access: access,
  } satisfies CreateFolderRequestBodyArgFolderUploadEmailField;
}
export function serializeCreateFolderRequestBodyArgSyncStateField(
  val: CreateFolderRequestBodyArgSyncStateField
): Json {
  return val;
}
export function deserializeCreateFolderRequestBodyArgSyncStateField(
  val: any
): CreateFolderRequestBodyArgSyncStateField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "CreateFolderRequestBodyArgSyncStateField"';
  }
  if (val == 'synced') {
    return 'synced';
  }
  if (val == 'not_synced') {
    return 'not_synced';
  }
  if (val == 'partially_synced') {
    return 'partially_synced';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateFolderRequestBodyArg(
  val: CreateFolderRequestBodyArg
): Json {
  return {
    ['name']: val.name,
    ['parent']: serializeCreateFolderRequestBodyArgParentField(val.parent),
    ['folder_upload_email']:
      val.folderUploadEmail == void 0
        ? void 0
        : serializeCreateFolderRequestBodyArgFolderUploadEmailField(
            val.folderUploadEmail
          ),
    ['sync_state']:
      val.syncState == void 0
        ? void 0
        : serializeCreateFolderRequestBodyArgSyncStateField(val.syncState),
  };
}
export function deserializeCreateFolderRequestBodyArg(
  val: any
): CreateFolderRequestBodyArg {
  const name: string = val.name;
  const parent: CreateFolderRequestBodyArgParentField =
    deserializeCreateFolderRequestBodyArgParentField(val.parent);
  const folderUploadEmail:
    | undefined
    | CreateFolderRequestBodyArgFolderUploadEmailField =
    val.folder_upload_email == void 0
      ? void 0
      : deserializeCreateFolderRequestBodyArgFolderUploadEmailField(
          val.folder_upload_email
        );
  const syncState: undefined | CreateFolderRequestBodyArgSyncStateField =
    val.sync_state == void 0
      ? void 0
      : deserializeCreateFolderRequestBodyArgSyncStateField(val.sync_state);
  return {
    name: name,
    parent: parent,
    folderUploadEmail: folderUploadEmail,
    syncState: syncState,
  } satisfies CreateFolderRequestBodyArg;
}
export function serializeCopyFolderRequestBodyArgParentField(
  val: CopyFolderRequestBodyArgParentField
): Json {
  return { ['id']: val.id };
}
export function deserializeCopyFolderRequestBodyArgParentField(
  val: any
): CopyFolderRequestBodyArgParentField {
  const id: string = val.id;
  return { id: id } satisfies CopyFolderRequestBodyArgParentField;
}
export function serializeCopyFolderRequestBodyArg(
  val: CopyFolderRequestBodyArg
): Json {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['parent']: serializeCopyFolderRequestBodyArgParentField(val.parent),
  };
}
export function deserializeCopyFolderRequestBodyArg(
  val: any
): CopyFolderRequestBodyArg {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const parent: CopyFolderRequestBodyArgParentField =
    deserializeCopyFolderRequestBodyArgParentField(val.parent);
  return { name: name, parent: parent } satisfies CopyFolderRequestBodyArg;
}
