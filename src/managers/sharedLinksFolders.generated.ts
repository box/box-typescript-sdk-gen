import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { FolderFull } from '../schemas.generated.js';
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
export interface GetSharedItemFoldersQueryParams {
  readonly fields?: readonly string[];
}
export class GetSharedItemFoldersHeaders {
  readonly ifNoneMatch?: string;
  readonly boxapi!: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetSharedItemFoldersHeaders, 'extraHeaders'>
      | Partial<Pick<GetSharedItemFoldersHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetFolderGetSharedLinkQueryParams {
  readonly fields: string;
}
export class GetFolderGetSharedLinkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFolderGetSharedLinkHeaders, 'extraHeaders'>
      | Partial<Pick<GetFolderGetSharedLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFolderAddSharedLinkRequestBodySharedLinkAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface UpdateFolderAddSharedLinkRequestBodySharedLinkPermissionsField {
  readonly canDownload?: boolean;
  readonly canPreview?: boolean;
  readonly canEdit?: boolean;
}
export interface UpdateFolderAddSharedLinkRequestBodySharedLinkField {
  readonly access?: UpdateFolderAddSharedLinkRequestBodySharedLinkAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: UpdateFolderAddSharedLinkRequestBodySharedLinkPermissionsField;
}
export interface UpdateFolderAddSharedLinkRequestBody {
  readonly sharedLink?: UpdateFolderAddSharedLinkRequestBodySharedLinkField;
}
export interface UpdateFolderAddSharedLinkQueryParams {
  readonly fields: string;
}
export class UpdateFolderAddSharedLinkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFolderAddSharedLinkHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateFolderAddSharedLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFolderUpdateSharedLinkRequestBodySharedLinkAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface UpdateFolderUpdateSharedLinkRequestBodySharedLinkPermissionsField {
  readonly canDownload?: boolean;
  readonly canPreview?: boolean;
  readonly canEdit?: boolean;
}
export interface UpdateFolderUpdateSharedLinkRequestBodySharedLinkField {
  readonly access?: UpdateFolderUpdateSharedLinkRequestBodySharedLinkAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: UpdateFolderUpdateSharedLinkRequestBodySharedLinkPermissionsField;
}
export interface UpdateFolderUpdateSharedLinkRequestBody {
  readonly sharedLink?: UpdateFolderUpdateSharedLinkRequestBodySharedLinkField;
}
export interface UpdateFolderUpdateSharedLinkQueryParams {
  readonly fields: string;
}
export class UpdateFolderUpdateSharedLinkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFolderUpdateSharedLinkHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateFolderUpdateSharedLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateFolderRemoveSharedLinkRequestBodySharedLinkField {}
export interface UpdateFolderRemoveSharedLinkRequestBody {
  readonly sharedLink?: UpdateFolderRemoveSharedLinkRequestBodySharedLinkField;
}
export interface UpdateFolderRemoveSharedLinkQueryParams {
  readonly fields: string;
}
export class UpdateFolderRemoveSharedLinkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFolderRemoveSharedLinkHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateFolderRemoveSharedLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class SharedLinksFoldersManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          SharedLinksFoldersManager,
          | 'networkSession'
          | 'getSharedItemFolders'
          | 'getFolderGetSharedLink'
          | 'updateFolderAddSharedLink'
          | 'updateFolderUpdateSharedLink'
          | 'updateFolderRemoveSharedLink'
        >
      | Partial<Pick<SharedLinksFoldersManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getSharedItemFolders(
    queryParams: GetSharedItemFoldersQueryParams = {} satisfies GetSharedItemFoldersQueryParams,
    headers: GetSharedItemFoldersHeaders,
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
      ...{
        ['if-none-match']: toString(headers.ifNoneMatch) as string,
        ['boxapi']: toString(headers.boxapi) as string,
      },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/shared_items#folders'
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
  async getFolderGetSharedLink(
    folderId: string,
    queryParams: GetFolderGetSharedLinkQueryParams,
    headers: GetFolderGetSharedLinkHeaders = new GetFolderGetSharedLinkHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FolderFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) as string });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/folders/',
        toString(folderId) as string,
        '#get_shared_link'
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
  async updateFolderAddSharedLink(
    folderId: string,
    requestBody: UpdateFolderAddSharedLinkRequestBody = {} satisfies UpdateFolderAddSharedLinkRequestBody,
    queryParams: UpdateFolderAddSharedLinkQueryParams,
    headers: UpdateFolderAddSharedLinkHeaders = new UpdateFolderAddSharedLinkHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FolderFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) as string });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/folders/',
        toString(folderId) as string,
        '#add_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateFolderAddSharedLinkRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFolderFull(response.data);
  }
  async updateFolderUpdateSharedLink(
    folderId: string,
    requestBody: UpdateFolderUpdateSharedLinkRequestBody = {} satisfies UpdateFolderUpdateSharedLinkRequestBody,
    queryParams: UpdateFolderUpdateSharedLinkQueryParams,
    headers: UpdateFolderUpdateSharedLinkHeaders = new UpdateFolderUpdateSharedLinkHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FolderFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) as string });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/folders/',
        toString(folderId) as string,
        '#update_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateFolderUpdateSharedLinkRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFolderFull(response.data);
  }
  async updateFolderRemoveSharedLink(
    folderId: string,
    requestBody: UpdateFolderRemoveSharedLinkRequestBody = {} satisfies UpdateFolderRemoveSharedLinkRequestBody,
    queryParams: UpdateFolderRemoveSharedLinkQueryParams,
    headers: UpdateFolderRemoveSharedLinkHeaders = new UpdateFolderRemoveSharedLinkHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FolderFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) as string });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/folders/',
        toString(folderId) as string,
        '#remove_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateFolderRemoveSharedLinkRequestBody(requestBody),
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
export function serializeUpdateFolderAddSharedLinkRequestBodySharedLinkAccessField(
  val: UpdateFolderAddSharedLinkRequestBodySharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateFolderAddSharedLinkRequestBodySharedLinkAccessField(
  val: any
): UpdateFolderAddSharedLinkRequestBodySharedLinkAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateFolderAddSharedLinkRequestBodySharedLinkAccessField"';
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
export function serializeUpdateFolderAddSharedLinkRequestBodySharedLinkPermissionsField(
  val: UpdateFolderAddSharedLinkRequestBodySharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeUpdateFolderAddSharedLinkRequestBodySharedLinkPermissionsField(
  val: any
): UpdateFolderAddSharedLinkRequestBodySharedLinkPermissionsField {
  const canDownload: undefined | boolean =
    val.can_download == void 0 ? void 0 : val.can_download;
  const canPreview: undefined | boolean =
    val.can_preview == void 0 ? void 0 : val.can_preview;
  const canEdit: undefined | boolean =
    val.can_edit == void 0 ? void 0 : val.can_edit;
  return {
    canDownload: canDownload,
    canPreview: canPreview,
    canEdit: canEdit,
  } satisfies UpdateFolderAddSharedLinkRequestBodySharedLinkPermissionsField;
}
export function serializeUpdateFolderAddSharedLinkRequestBodySharedLinkField(
  val: UpdateFolderAddSharedLinkRequestBodySharedLinkField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFolderAddSharedLinkRequestBodySharedLinkAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateFolderAddSharedLinkRequestBodySharedLinkPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateFolderAddSharedLinkRequestBodySharedLinkField(
  val: any
): UpdateFolderAddSharedLinkRequestBodySharedLinkField {
  const access:
    | undefined
    | UpdateFolderAddSharedLinkRequestBodySharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFolderAddSharedLinkRequestBodySharedLinkAccessField(
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
    | UpdateFolderAddSharedLinkRequestBodySharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateFolderAddSharedLinkRequestBodySharedLinkPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies UpdateFolderAddSharedLinkRequestBodySharedLinkField;
}
export function serializeUpdateFolderAddSharedLinkRequestBody(
  val: UpdateFolderAddSharedLinkRequestBody
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateFolderAddSharedLinkRequestBodySharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateFolderAddSharedLinkRequestBody(
  val: any
): UpdateFolderAddSharedLinkRequestBody {
  const sharedLink:
    | undefined
    | UpdateFolderAddSharedLinkRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateFolderAddSharedLinkRequestBodySharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies UpdateFolderAddSharedLinkRequestBody;
}
export function serializeUpdateFolderUpdateSharedLinkRequestBodySharedLinkAccessField(
  val: UpdateFolderUpdateSharedLinkRequestBodySharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateFolderUpdateSharedLinkRequestBodySharedLinkAccessField(
  val: any
): UpdateFolderUpdateSharedLinkRequestBodySharedLinkAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateFolderUpdateSharedLinkRequestBodySharedLinkAccessField"';
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
export function serializeUpdateFolderUpdateSharedLinkRequestBodySharedLinkPermissionsField(
  val: UpdateFolderUpdateSharedLinkRequestBodySharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeUpdateFolderUpdateSharedLinkRequestBodySharedLinkPermissionsField(
  val: any
): UpdateFolderUpdateSharedLinkRequestBodySharedLinkPermissionsField {
  const canDownload: undefined | boolean =
    val.can_download == void 0 ? void 0 : val.can_download;
  const canPreview: undefined | boolean =
    val.can_preview == void 0 ? void 0 : val.can_preview;
  const canEdit: undefined | boolean =
    val.can_edit == void 0 ? void 0 : val.can_edit;
  return {
    canDownload: canDownload,
    canPreview: canPreview,
    canEdit: canEdit,
  } satisfies UpdateFolderUpdateSharedLinkRequestBodySharedLinkPermissionsField;
}
export function serializeUpdateFolderUpdateSharedLinkRequestBodySharedLinkField(
  val: UpdateFolderUpdateSharedLinkRequestBodySharedLinkField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFolderUpdateSharedLinkRequestBodySharedLinkAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateFolderUpdateSharedLinkRequestBodySharedLinkPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateFolderUpdateSharedLinkRequestBodySharedLinkField(
  val: any
): UpdateFolderUpdateSharedLinkRequestBodySharedLinkField {
  const access:
    | undefined
    | UpdateFolderUpdateSharedLinkRequestBodySharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFolderUpdateSharedLinkRequestBodySharedLinkAccessField(
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
    | UpdateFolderUpdateSharedLinkRequestBodySharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateFolderUpdateSharedLinkRequestBodySharedLinkPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies UpdateFolderUpdateSharedLinkRequestBodySharedLinkField;
}
export function serializeUpdateFolderUpdateSharedLinkRequestBody(
  val: UpdateFolderUpdateSharedLinkRequestBody
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateFolderUpdateSharedLinkRequestBodySharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateFolderUpdateSharedLinkRequestBody(
  val: any
): UpdateFolderUpdateSharedLinkRequestBody {
  const sharedLink:
    | undefined
    | UpdateFolderUpdateSharedLinkRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateFolderUpdateSharedLinkRequestBodySharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies UpdateFolderUpdateSharedLinkRequestBody;
}
export function serializeUpdateFolderRemoveSharedLinkRequestBodySharedLinkField(
  val: UpdateFolderRemoveSharedLinkRequestBodySharedLinkField
): SerializedData {
  return {};
}
export function deserializeUpdateFolderRemoveSharedLinkRequestBodySharedLinkField(
  val: any
): UpdateFolderRemoveSharedLinkRequestBodySharedLinkField {
  return {} satisfies UpdateFolderRemoveSharedLinkRequestBodySharedLinkField;
}
export function serializeUpdateFolderRemoveSharedLinkRequestBody(
  val: UpdateFolderRemoveSharedLinkRequestBody
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateFolderRemoveSharedLinkRequestBodySharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateFolderRemoveSharedLinkRequestBody(
  val: any
): UpdateFolderRemoveSharedLinkRequestBody {
  const sharedLink:
    | undefined
    | UpdateFolderRemoveSharedLinkRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateFolderRemoveSharedLinkRequestBodySharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies UpdateFolderRemoveSharedLinkRequestBody;
}
