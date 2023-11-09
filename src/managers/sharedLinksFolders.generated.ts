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
export interface GetSharedItemFoldersQueryParamsArg {
  readonly fields?: readonly string[];
}
export class GetSharedItemFoldersHeadersArg {
  readonly ifNoneMatch?: string;
  readonly boxapi!: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetSharedItemFoldersHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetSharedItemFoldersHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetFolderGetSharedLinkQueryParamsArg {
  readonly fields: string;
}
export class GetFolderGetSharedLinkHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFolderGetSharedLinkHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetFolderGetSharedLinkHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
  readonly canDownload?: boolean;
  readonly canPreview?: boolean;
  readonly canEdit?: boolean;
}
export interface UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField {
  readonly access?: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFolderAddSharedLinkRequestBodyArg {
  readonly sharedLink?: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFolderAddSharedLinkQueryParamsArg {
  readonly fields: string;
}
export class UpdateFolderAddSharedLinkHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFolderAddSharedLinkHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateFolderAddSharedLinkHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField =
  'open' | 'company' | 'collaborators';
export interface UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
  readonly canDownload?: boolean;
  readonly canPreview?: boolean;
  readonly canEdit?: boolean;
}
export interface UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField {
  readonly access?: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFolderUpdateSharedLinkRequestBodyArg {
  readonly sharedLink?: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFolderUpdateSharedLinkQueryParamsArg {
  readonly fields: string;
}
export class UpdateFolderUpdateSharedLinkHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFolderUpdateSharedLinkHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateFolderUpdateSharedLinkHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField {}
export interface UpdateFolderRemoveSharedLinkRequestBodyArg {
  readonly sharedLink?: UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFolderRemoveSharedLinkQueryParamsArg {
  readonly fields: string;
}
export class UpdateFolderRemoveSharedLinkHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFolderRemoveSharedLinkHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateFolderRemoveSharedLinkHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class SharedLinksFoldersManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      SharedLinksFoldersManager,
      | 'getSharedItemFolders'
      | 'getFolderGetSharedLink'
      | 'updateFolderAddSharedLink'
      | 'updateFolderUpdateSharedLink'
      | 'updateFolderRemoveSharedLink'
    >
  ) {
    Object.assign(this, fields);
  }
  async getSharedItemFolders(
    queryParams: GetSharedItemFoldersQueryParamsArg = {} satisfies GetSharedItemFoldersQueryParamsArg,
    headers: GetSharedItemFoldersHeadersArg,
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
      ''.concat('https://api.box.com/2.0/shared_items#folders') as string,
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
    queryParams: GetFolderGetSharedLinkQueryParamsArg,
    headers: GetFolderGetSharedLinkHeadersArg = new GetFolderGetSharedLinkHeadersArg(
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
        'https://api.box.com/2.0/folders/',
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
    requestBody: UpdateFolderAddSharedLinkRequestBodyArg = {} satisfies UpdateFolderAddSharedLinkRequestBodyArg,
    queryParams: UpdateFolderAddSharedLinkQueryParamsArg,
    headers: UpdateFolderAddSharedLinkHeadersArg = new UpdateFolderAddSharedLinkHeadersArg(
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
        'https://api.box.com/2.0/folders/',
        toString(folderId) as string,
        '#add_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateFolderAddSharedLinkRequestBodyArg(requestBody),
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
    requestBody: UpdateFolderUpdateSharedLinkRequestBodyArg = {} satisfies UpdateFolderUpdateSharedLinkRequestBodyArg,
    queryParams: UpdateFolderUpdateSharedLinkQueryParamsArg,
    headers: UpdateFolderUpdateSharedLinkHeadersArg = new UpdateFolderUpdateSharedLinkHeadersArg(
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
        'https://api.box.com/2.0/folders/',
        toString(folderId) as string,
        '#update_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateFolderUpdateSharedLinkRequestBodyArg(requestBody),
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
    requestBody: UpdateFolderRemoveSharedLinkRequestBodyArg = {} satisfies UpdateFolderRemoveSharedLinkRequestBodyArg,
    queryParams: UpdateFolderRemoveSharedLinkQueryParamsArg,
    headers: UpdateFolderRemoveSharedLinkHeadersArg = new UpdateFolderRemoveSharedLinkHeadersArg(
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
        'https://api.box.com/2.0/folders/',
        toString(folderId) as string,
        '#remove_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateFolderRemoveSharedLinkRequestBodyArg(requestBody),
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
export function serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(
  val: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(
  val: any
): UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField"';
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
export function serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(
  val: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(
  val: any
): UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
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
  } satisfies UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(
  val: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(
  val: any
): UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField {
  const access:
    | undefined
    | UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(
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
    | UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField;
}
export function serializeUpdateFolderAddSharedLinkRequestBodyArg(
  val: UpdateFolderAddSharedLinkRequestBodyArg
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateFolderAddSharedLinkRequestBodyArg(
  val: any
): UpdateFolderAddSharedLinkRequestBodyArg {
  const sharedLink:
    | undefined
    | UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies UpdateFolderAddSharedLinkRequestBodyArg;
}
export function serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(
  val: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(
  val: any
): UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField"';
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
export function serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(
  val: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(
  val: any
): UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
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
  } satisfies UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(
  val: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(
  val: any
): UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField {
  const access:
    | undefined
    | UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(
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
    | UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export function serializeUpdateFolderUpdateSharedLinkRequestBodyArg(
  val: UpdateFolderUpdateSharedLinkRequestBodyArg
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateFolderUpdateSharedLinkRequestBodyArg(
  val: any
): UpdateFolderUpdateSharedLinkRequestBodyArg {
  const sharedLink:
    | undefined
    | UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies UpdateFolderUpdateSharedLinkRequestBodyArg;
}
export function serializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(
  val: UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField
): SerializedData {
  return {};
}
export function deserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(
  val: any
): UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField {
  return {} satisfies UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export function serializeUpdateFolderRemoveSharedLinkRequestBodyArg(
  val: UpdateFolderRemoveSharedLinkRequestBodyArg
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateFolderRemoveSharedLinkRequestBodyArg(
  val: any
): UpdateFolderRemoveSharedLinkRequestBodyArg {
  const sharedLink:
    | undefined
    | UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies UpdateFolderRemoveSharedLinkRequestBodyArg;
}
