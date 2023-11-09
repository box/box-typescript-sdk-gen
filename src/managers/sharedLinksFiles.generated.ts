import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { FileFull } from '../schemas.generated.js';
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
export interface GetSharedItemsQueryParamsArg {
  readonly fields?: readonly string[];
}
export class GetSharedItemsHeadersArg {
  readonly ifNoneMatch?: string;
  readonly boxapi!: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetSharedItemsHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetSharedItemsHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetFileGetSharedLinkQueryParamsArg {
  readonly fields: string;
}
export class GetFileGetSharedLinkHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileGetSharedLinkHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetFileGetSharedLinkHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
  readonly canDownload?: boolean;
  readonly canPreview?: boolean;
  readonly canEdit?: boolean;
}
export interface UpdateFileAddSharedLinkRequestBodyArgSharedLinkField {
  readonly access?: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFileAddSharedLinkRequestBodyArg {
  readonly sharedLink?: UpdateFileAddSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFileAddSharedLinkQueryParamsArg {
  readonly fields: string;
}
export class UpdateFileAddSharedLinkHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFileAddSharedLinkHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateFileAddSharedLinkHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField =
  'open' | 'company' | 'collaborators';
export interface UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
  readonly canDownload?: boolean;
  readonly canPreview?: boolean;
  readonly canEdit?: boolean;
}
export interface UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField {
  readonly access?: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFileUpdateSharedLinkRequestBodyArg {
  readonly sharedLink?: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFileUpdateSharedLinkQueryParamsArg {
  readonly fields: string;
}
export class UpdateFileUpdateSharedLinkHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFileUpdateSharedLinkHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateFileUpdateSharedLinkHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField {}
export interface UpdateFileRemoveSharedLinkRequestBodyArg {
  readonly sharedLink?: UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFileRemoveSharedLinkQueryParamsArg {
  readonly fields: string;
}
export class UpdateFileRemoveSharedLinkHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFileRemoveSharedLinkHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateFileRemoveSharedLinkHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class SharedLinksFilesManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      SharedLinksFilesManager,
      | 'getSharedItems'
      | 'getFileGetSharedLink'
      | 'updateFileAddSharedLink'
      | 'updateFileUpdateSharedLink'
      | 'updateFileRemoveSharedLink'
    >
  ) {
    Object.assign(this, fields);
  }
  async getSharedItems(
    queryParams: GetSharedItemsQueryParamsArg = {} satisfies GetSharedItemsQueryParamsArg,
    headers: GetSharedItemsHeadersArg,
    cancellationToken?: CancellationToken
  ): Promise<FileFull> {
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
      ''.concat('https://api.box.com/2.0/shared_items') as string,
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
    return deserializeFileFull(response.data);
  }
  async getFileGetSharedLink(
    fileId: string,
    queryParams: GetFileGetSharedLinkQueryParamsArg,
    headers: GetFileGetSharedLinkHeadersArg = new GetFileGetSharedLinkHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) as string });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
        toString(fileId) as string,
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
    return deserializeFileFull(response.data);
  }
  async updateFileAddSharedLink(
    fileId: string,
    requestBody: UpdateFileAddSharedLinkRequestBodyArg = {} satisfies UpdateFileAddSharedLinkRequestBodyArg,
    queryParams: UpdateFileAddSharedLinkQueryParamsArg,
    headers: UpdateFileAddSharedLinkHeadersArg = new UpdateFileAddSharedLinkHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) as string });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
        toString(fileId) as string,
        '#add_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateFileAddSharedLinkRequestBodyArg(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFileFull(response.data);
  }
  async updateFileUpdateSharedLink(
    fileId: string,
    requestBody: UpdateFileUpdateSharedLinkRequestBodyArg = {} satisfies UpdateFileUpdateSharedLinkRequestBodyArg,
    queryParams: UpdateFileUpdateSharedLinkQueryParamsArg,
    headers: UpdateFileUpdateSharedLinkHeadersArg = new UpdateFileUpdateSharedLinkHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) as string });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
        toString(fileId) as string,
        '#update_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateFileUpdateSharedLinkRequestBodyArg(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFileFull(response.data);
  }
  async updateFileRemoveSharedLink(
    fileId: string,
    requestBody: UpdateFileRemoveSharedLinkRequestBodyArg = {} satisfies UpdateFileRemoveSharedLinkRequestBodyArg,
    queryParams: UpdateFileRemoveSharedLinkQueryParamsArg,
    headers: UpdateFileRemoveSharedLinkHeadersArg = new UpdateFileRemoveSharedLinkHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) as string });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
        toString(fileId) as string,
        '#remove_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateFileRemoveSharedLinkRequestBodyArg(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFileFull(response.data);
  }
}
export function serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(
  val: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(
  val: any
): UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField"';
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
export function serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(
  val: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(
  val: any
): UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
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
  } satisfies UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(
  val: UpdateFileAddSharedLinkRequestBodyArgSharedLinkField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(
  val: any
): UpdateFileAddSharedLinkRequestBodyArgSharedLinkField {
  const access:
    | undefined
    | UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(
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
    | UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies UpdateFileAddSharedLinkRequestBodyArgSharedLinkField;
}
export function serializeUpdateFileAddSharedLinkRequestBodyArg(
  val: UpdateFileAddSharedLinkRequestBodyArg
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateFileAddSharedLinkRequestBodyArg(
  val: any
): UpdateFileAddSharedLinkRequestBodyArg {
  const sharedLink:
    | undefined
    | UpdateFileAddSharedLinkRequestBodyArgSharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies UpdateFileAddSharedLinkRequestBodyArg;
}
export function serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(
  val: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(
  val: any
): UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField"';
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
export function serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(
  val: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(
  val: any
): UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
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
  } satisfies UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(
  val: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(
  val: any
): UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField {
  const access:
    | undefined
    | UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(
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
    | UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export function serializeUpdateFileUpdateSharedLinkRequestBodyArg(
  val: UpdateFileUpdateSharedLinkRequestBodyArg
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateFileUpdateSharedLinkRequestBodyArg(
  val: any
): UpdateFileUpdateSharedLinkRequestBodyArg {
  const sharedLink:
    | undefined
    | UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies UpdateFileUpdateSharedLinkRequestBodyArg;
}
export function serializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(
  val: UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField
): SerializedData {
  return {};
}
export function deserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(
  val: any
): UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField {
  return {} satisfies UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export function serializeUpdateFileRemoveSharedLinkRequestBodyArg(
  val: UpdateFileRemoveSharedLinkRequestBodyArg
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateFileRemoveSharedLinkRequestBodyArg(
  val: any
): UpdateFileRemoveSharedLinkRequestBodyArg {
  const sharedLink:
    | undefined
    | UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies UpdateFileRemoveSharedLinkRequestBodyArg;
}
