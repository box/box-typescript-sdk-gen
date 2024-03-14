import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeItems } from '../schemas.generated.js';
import { deserializeItems } from '../schemas.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Items } from '../schemas.generated.js';
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
export type GetFolderByIdQueryParamsSortField = 'id' | 'name' | 'date' | 'size';
export type GetFolderByIdQueryParamsDirectionField = 'ASC' | 'DESC';
export interface GetFolderByIdQueryParams {
  readonly fields?: readonly string[];
  readonly sort?: GetFolderByIdQueryParamsSortField;
  readonly direction?: GetFolderByIdQueryParamsDirectionField;
  readonly offset?: number;
  readonly limit?: number;
}
export class GetFolderByIdHeaders {
  readonly ifNoneMatch?: string;
  readonly boxapi?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFolderByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetFolderByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFolderByIdRequestBodySyncStateField =
  | 'synced'
  | 'not_synced'
  | 'partially_synced';
export interface UpdateFolderByIdRequestBodyParentField {
  readonly id?: string;
}
export type UpdateFolderByIdRequestBodySharedLinkAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface UpdateFolderByIdRequestBodySharedLinkPermissionsField {
  readonly canDownload?: boolean;
}
export interface UpdateFolderByIdRequestBodySharedLinkField {
  readonly access?: UpdateFolderByIdRequestBodySharedLinkAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: UpdateFolderByIdRequestBodySharedLinkPermissionsField;
}
export type UpdateFolderByIdRequestBodyFolderUploadEmailAccessField =
  | 'open'
  | 'collaborators';
export interface UpdateFolderByIdRequestBodyFolderUploadEmailField {
  readonly access?: UpdateFolderByIdRequestBodyFolderUploadEmailAccessField;
}
export interface UpdateFolderByIdRequestBodyCollectionsField {
  readonly id?: string;
  readonly type?: string;
}
export interface UpdateFolderByIdRequestBody {
  readonly name?: string;
  readonly description?: string;
  readonly syncState?: UpdateFolderByIdRequestBodySyncStateField;
  readonly canNonOwnersInvite?: boolean;
  readonly parent?: UpdateFolderByIdRequestBodyParentField;
  readonly sharedLink?: UpdateFolderByIdRequestBodySharedLinkField;
  readonly folderUploadEmail?: UpdateFolderByIdRequestBodyFolderUploadEmailField;
  readonly tags?: readonly string[];
  readonly isCollaborationRestrictedToEnterprise?: boolean;
  readonly collections?: readonly UpdateFolderByIdRequestBodyCollectionsField[];
  readonly canNonOwnersViewCollaborators?: boolean;
}
export interface UpdateFolderByIdQueryParams {
  readonly fields?: readonly string[];
}
export class UpdateFolderByIdHeaders {
  readonly ifMatch?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFolderByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateFolderByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface DeleteFolderByIdQueryParams {
  readonly recursive?: boolean;
}
export class DeleteFolderByIdHeaders {
  readonly ifMatch?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFolderByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteFolderByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type GetFolderItemsQueryParamsSortField =
  | 'id'
  | 'name'
  | 'date'
  | 'size';
export type GetFolderItemsQueryParamsDirectionField = 'ASC' | 'DESC';
export interface GetFolderItemsQueryParams {
  readonly fields?: readonly string[];
  readonly usemarker?: boolean;
  readonly marker?: string;
  readonly offset?: number;
  readonly limit?: number;
  readonly sort?: GetFolderItemsQueryParamsSortField;
  readonly direction?: GetFolderItemsQueryParamsDirectionField;
}
export class GetFolderItemsHeaders {
  readonly boxapi?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFolderItemsHeaders, 'extraHeaders'>
      | Partial<Pick<GetFolderItemsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateFolderRequestBodyParentField {
  readonly id: string;
}
export type CreateFolderRequestBodyFolderUploadEmailAccessField =
  | 'open'
  | 'collaborators';
export interface CreateFolderRequestBodyFolderUploadEmailField {
  readonly access?: CreateFolderRequestBodyFolderUploadEmailAccessField;
}
export type CreateFolderRequestBodySyncStateField =
  | 'synced'
  | 'not_synced'
  | 'partially_synced';
export interface CreateFolderRequestBody {
  readonly name: string;
  readonly parent: CreateFolderRequestBodyParentField;
  readonly folderUploadEmail?: CreateFolderRequestBodyFolderUploadEmailField;
  readonly syncState?: CreateFolderRequestBodySyncStateField;
}
export interface CreateFolderQueryParams {
  readonly fields?: readonly string[];
}
export class CreateFolderHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateFolderHeaders, 'extraHeaders'>
      | Partial<Pick<CreateFolderHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CopyFolderRequestBodyParentField {
  readonly id: string;
}
export interface CopyFolderRequestBody {
  readonly name?: string;
  readonly parent: CopyFolderRequestBodyParentField;
}
export interface CopyFolderQueryParams {
  readonly fields?: readonly string[];
}
export class CopyFolderHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CopyFolderHeaders, 'extraHeaders'>
      | Partial<Pick<CopyFolderHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class FoldersManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          FoldersManager,
          | 'networkSession'
          | 'getFolderById'
          | 'updateFolderById'
          | 'deleteFolderById'
          | 'getFolderItems'
          | 'createFolder'
          | 'copyFolder'
        >
      | Partial<Pick<FoldersManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getFolderById(
    folderId: string,
    queryParams: GetFolderByIdQueryParams = {} satisfies GetFolderByIdQueryParams,
    headers: GetFolderByIdHeaders = new GetFolderByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<FolderFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
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
        this.networkSession.baseUrls.baseUrl,
        '/folders/',
        toString(folderId) as string
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
    return deserializeFolderFull(response.data);
  }
  async updateFolderById(
    folderId: string,
    requestBody: UpdateFolderByIdRequestBody = {} satisfies UpdateFolderByIdRequestBody,
    queryParams: UpdateFolderByIdQueryParams = {} satisfies UpdateFolderByIdQueryParams,
    headers: UpdateFolderByIdHeaders = new UpdateFolderByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<FolderFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{ ['if-match']: toString(headers.ifMatch) as string },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/folders/',
        toString(folderId) as string
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateFolderByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFolderFull(response.data);
  }
  async deleteFolderById(
    folderId: string,
    queryParams: DeleteFolderByIdQueryParams = {} satisfies DeleteFolderByIdQueryParams,
    headers: DeleteFolderByIdHeaders = new DeleteFolderByIdHeaders({}),
    cancellationToken?: CancellationToken
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
        this.networkSession.baseUrls.baseUrl,
        '/folders/',
        toString(folderId) as string
      ) as string,
      {
        method: 'DELETE',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
  async getFolderItems(
    folderId: string,
    queryParams: GetFolderItemsQueryParams = {} satisfies GetFolderItemsQueryParams,
    headers: GetFolderItemsHeaders = new GetFolderItemsHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Items> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
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
        this.networkSession.baseUrls.baseUrl,
        '/folders/',
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
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeItems(response.data);
  }
  async createFolder(
    requestBody: CreateFolderRequestBody,
    queryParams: CreateFolderQueryParams = {} satisfies CreateFolderQueryParams,
    headers: CreateFolderHeaders = new CreateFolderHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<FolderFull> {
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
      ''.concat(this.networkSession.baseUrls.baseUrl, '/folders') as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeCreateFolderRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFolderFull(response.data);
  }
  async copyFolder(
    folderId: string,
    requestBody: CopyFolderRequestBody,
    queryParams: CopyFolderQueryParams = {} satisfies CopyFolderQueryParams,
    headers: CopyFolderHeaders = new CopyFolderHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<FolderFull> {
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
        '/folders/',
        toString(folderId) as string,
        '/copy'
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeCopyFolderRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFolderFull(response.data);
  }
}
export function serializeGetFolderByIdQueryParamsSortField(
  val: any
): SerializedData {
  return val;
}
export function deserializeGetFolderByIdQueryParamsSortField(
  val: any
): GetFolderByIdQueryParamsSortField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "GetFolderByIdQueryParamsSortField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeGetFolderByIdQueryParamsDirectionField(
  val: any
): SerializedData {
  return val;
}
export function deserializeGetFolderByIdQueryParamsDirectionField(
  val: any
): GetFolderByIdQueryParamsDirectionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "GetFolderByIdQueryParamsDirectionField"',
    });
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateFolderByIdRequestBodySyncStateField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateFolderByIdRequestBodySyncStateField(
  val: any
): UpdateFolderByIdRequestBodySyncStateField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateFolderByIdRequestBodySyncStateField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateFolderByIdRequestBodyParentField(
  val: any
): SerializedData {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeUpdateFolderByIdRequestBodyParentField(
  val: any
): UpdateFolderByIdRequestBodyParentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies UpdateFolderByIdRequestBodyParentField;
}
export function serializeUpdateFolderByIdRequestBodySharedLinkAccessField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateFolderByIdRequestBodySharedLinkAccessField(
  val: any
): UpdateFolderByIdRequestBodySharedLinkAccessField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateFolderByIdRequestBodySharedLinkAccessField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateFolderByIdRequestBodySharedLinkPermissionsField(
  val: any
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
  };
}
export function deserializeUpdateFolderByIdRequestBodySharedLinkPermissionsField(
  val: any
): UpdateFolderByIdRequestBodySharedLinkPermissionsField {
  const canDownload: undefined | boolean =
    val.can_download == void 0 ? void 0 : val.can_download;
  return {
    canDownload: canDownload,
  } satisfies UpdateFolderByIdRequestBodySharedLinkPermissionsField;
}
export function serializeUpdateFolderByIdRequestBodySharedLinkField(
  val: any
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFolderByIdRequestBodySharedLinkAccessField(val.access),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateFolderByIdRequestBodySharedLinkPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateFolderByIdRequestBodySharedLinkField(
  val: any
): UpdateFolderByIdRequestBodySharedLinkField {
  const access: undefined | UpdateFolderByIdRequestBodySharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFolderByIdRequestBodySharedLinkAccessField(val.access);
  const password: undefined | string =
    val.password == void 0 ? void 0 : val.password;
  const vanityName: undefined | string =
    val.vanity_name == void 0 ? void 0 : val.vanity_name;
  const unsharedAt: undefined | string =
    val.unshared_at == void 0 ? void 0 : val.unshared_at;
  const permissions:
    | undefined
    | UpdateFolderByIdRequestBodySharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateFolderByIdRequestBodySharedLinkPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies UpdateFolderByIdRequestBodySharedLinkField;
}
export function serializeUpdateFolderByIdRequestBodyFolderUploadEmailAccessField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateFolderByIdRequestBodyFolderUploadEmailAccessField(
  val: any
): UpdateFolderByIdRequestBodyFolderUploadEmailAccessField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateFolderByIdRequestBodyFolderUploadEmailAccessField"',
    });
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'collaborators') {
    return 'collaborators';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateFolderByIdRequestBodyFolderUploadEmailField(
  val: any
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFolderByIdRequestBodyFolderUploadEmailAccessField(
            val.access
          ),
  };
}
export function deserializeUpdateFolderByIdRequestBodyFolderUploadEmailField(
  val: any
): UpdateFolderByIdRequestBodyFolderUploadEmailField {
  const access:
    | undefined
    | UpdateFolderByIdRequestBodyFolderUploadEmailAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFolderByIdRequestBodyFolderUploadEmailAccessField(
          val.access
        );
  return {
    access: access,
  } satisfies UpdateFolderByIdRequestBodyFolderUploadEmailField;
}
export function serializeUpdateFolderByIdRequestBodyCollectionsField(
  val: any
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']: val.type == void 0 ? void 0 : val.type,
  };
}
export function deserializeUpdateFolderByIdRequestBodyCollectionsField(
  val: any
): UpdateFolderByIdRequestBodyCollectionsField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  return {
    id: id,
    type: type,
  } satisfies UpdateFolderByIdRequestBodyCollectionsField;
}
export function serializeUpdateFolderByIdRequestBody(val: any): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['sync_state']:
      val.syncState == void 0
        ? void 0
        : serializeUpdateFolderByIdRequestBodySyncStateField(val.syncState),
    ['can_non_owners_invite']:
      val.canNonOwnersInvite == void 0 ? void 0 : val.canNonOwnersInvite,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializeUpdateFolderByIdRequestBodyParentField(val.parent),
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateFolderByIdRequestBodySharedLinkField(val.sharedLink),
    ['folder_upload_email']:
      val.folderUploadEmail == void 0
        ? void 0
        : serializeUpdateFolderByIdRequestBodyFolderUploadEmailField(
            val.folderUploadEmail
          ),
    ['tags']:
      val.tags == void 0
        ? void 0
        : (val.tags.map(function (item: string): any {
            return item;
          }) as readonly any[]),
    ['is_collaboration_restricted_to_enterprise']:
      val.isCollaborationRestrictedToEnterprise == void 0
        ? void 0
        : val.isCollaborationRestrictedToEnterprise,
    ['collections']:
      val.collections == void 0
        ? void 0
        : (val.collections.map(function (
            item: UpdateFolderByIdRequestBodyCollectionsField
          ): any {
            return serializeUpdateFolderByIdRequestBodyCollectionsField(item);
          }) as readonly any[]),
    ['can_non_owners_view_collaborators']:
      val.canNonOwnersViewCollaborators == void 0
        ? void 0
        : val.canNonOwnersViewCollaborators,
  };
}
export function deserializeUpdateFolderByIdRequestBody(
  val: any
): UpdateFolderByIdRequestBody {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const syncState: undefined | UpdateFolderByIdRequestBodySyncStateField =
    val.sync_state == void 0
      ? void 0
      : deserializeUpdateFolderByIdRequestBodySyncStateField(val.sync_state);
  const canNonOwnersInvite: undefined | boolean =
    val.can_non_owners_invite == void 0 ? void 0 : val.can_non_owners_invite;
  const parent: undefined | UpdateFolderByIdRequestBodyParentField =
    val.parent == void 0
      ? void 0
      : deserializeUpdateFolderByIdRequestBodyParentField(val.parent);
  const sharedLink: undefined | UpdateFolderByIdRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateFolderByIdRequestBodySharedLinkField(val.shared_link);
  const folderUploadEmail:
    | undefined
    | UpdateFolderByIdRequestBodyFolderUploadEmailField =
    val.folder_upload_email == void 0
      ? void 0
      : deserializeUpdateFolderByIdRequestBodyFolderUploadEmailField(
          val.folder_upload_email
        );
  const tags: undefined | readonly string[] =
    val.tags == void 0
      ? void 0
      : sdIsList(val.tags)
      ? (val.tags.map(function (itm: SerializedData): any {
          return itm;
        }) as readonly any[])
      : [];
  const isCollaborationRestrictedToEnterprise: undefined | boolean =
    val.is_collaboration_restricted_to_enterprise == void 0
      ? void 0
      : val.is_collaboration_restricted_to_enterprise;
  const collections:
    | undefined
    | readonly UpdateFolderByIdRequestBodyCollectionsField[] =
    val.collections == void 0
      ? void 0
      : sdIsList(val.collections)
      ? (val.collections.map(function (itm: SerializedData): any {
          return deserializeUpdateFolderByIdRequestBodyCollectionsField(itm);
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
  } satisfies UpdateFolderByIdRequestBody;
}
export function serializeGetFolderItemsQueryParamsSortField(
  val: any
): SerializedData {
  return val;
}
export function deserializeGetFolderItemsQueryParamsSortField(
  val: any
): GetFolderItemsQueryParamsSortField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "GetFolderItemsQueryParamsSortField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeGetFolderItemsQueryParamsDirectionField(
  val: any
): SerializedData {
  return val;
}
export function deserializeGetFolderItemsQueryParamsDirectionField(
  val: any
): GetFolderItemsQueryParamsDirectionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "GetFolderItemsQueryParamsDirectionField"',
    });
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateFolderRequestBodyParentField(
  val: any
): SerializedData {
  return { ['id']: val.id };
}
export function deserializeCreateFolderRequestBodyParentField(
  val: any
): CreateFolderRequestBodyParentField {
  const id: string = val.id;
  return { id: id } satisfies CreateFolderRequestBodyParentField;
}
export function serializeCreateFolderRequestBodyFolderUploadEmailAccessField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateFolderRequestBodyFolderUploadEmailAccessField(
  val: any
): CreateFolderRequestBodyFolderUploadEmailAccessField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateFolderRequestBodyFolderUploadEmailAccessField"',
    });
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'collaborators') {
    return 'collaborators';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateFolderRequestBodyFolderUploadEmailField(
  val: any
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeCreateFolderRequestBodyFolderUploadEmailAccessField(
            val.access
          ),
  };
}
export function deserializeCreateFolderRequestBodyFolderUploadEmailField(
  val: any
): CreateFolderRequestBodyFolderUploadEmailField {
  const access:
    | undefined
    | CreateFolderRequestBodyFolderUploadEmailAccessField =
    val.access == void 0
      ? void 0
      : deserializeCreateFolderRequestBodyFolderUploadEmailAccessField(
          val.access
        );
  return {
    access: access,
  } satisfies CreateFolderRequestBodyFolderUploadEmailField;
}
export function serializeCreateFolderRequestBodySyncStateField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateFolderRequestBodySyncStateField(
  val: any
): CreateFolderRequestBodySyncStateField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CreateFolderRequestBodySyncStateField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateFolderRequestBody(val: any): SerializedData {
  return {
    ['name']: val.name,
    ['parent']: serializeCreateFolderRequestBodyParentField(val.parent),
    ['folder_upload_email']:
      val.folderUploadEmail == void 0
        ? void 0
        : serializeCreateFolderRequestBodyFolderUploadEmailField(
            val.folderUploadEmail
          ),
    ['sync_state']:
      val.syncState == void 0
        ? void 0
        : serializeCreateFolderRequestBodySyncStateField(val.syncState),
  };
}
export function deserializeCreateFolderRequestBody(
  val: any
): CreateFolderRequestBody {
  const name: string = val.name;
  const parent: CreateFolderRequestBodyParentField =
    deserializeCreateFolderRequestBodyParentField(val.parent);
  const folderUploadEmail:
    | undefined
    | CreateFolderRequestBodyFolderUploadEmailField =
    val.folder_upload_email == void 0
      ? void 0
      : deserializeCreateFolderRequestBodyFolderUploadEmailField(
          val.folder_upload_email
        );
  const syncState: undefined | CreateFolderRequestBodySyncStateField =
    val.sync_state == void 0
      ? void 0
      : deserializeCreateFolderRequestBodySyncStateField(val.sync_state);
  return {
    name: name,
    parent: parent,
    folderUploadEmail: folderUploadEmail,
    syncState: syncState,
  } satisfies CreateFolderRequestBody;
}
export function serializeCopyFolderRequestBodyParentField(
  val: any
): SerializedData {
  return { ['id']: val.id };
}
export function deserializeCopyFolderRequestBodyParentField(
  val: any
): CopyFolderRequestBodyParentField {
  const id: string = val.id;
  return { id: id } satisfies CopyFolderRequestBodyParentField;
}
export function serializeCopyFolderRequestBody(val: any): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['parent']: serializeCopyFolderRequestBodyParentField(val.parent),
  };
}
export function deserializeCopyFolderRequestBody(
  val: any
): CopyFolderRequestBody {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const parent: CopyFolderRequestBodyParentField =
    deserializeCopyFolderRequestBodyParentField(val.parent);
  return { name: name, parent: parent } satisfies CopyFolderRequestBody;
}
