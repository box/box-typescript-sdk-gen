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
export interface GetSharedItemsQueryParams {
  readonly fields?: readonly string[];
}
export class GetSharedItemsHeaders {
  readonly ifNoneMatch?: string;
  readonly boxapi!: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetSharedItemsHeaders, 'extraHeaders'>
      | Partial<Pick<GetSharedItemsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetFileGetSharedLinkQueryParams {
  readonly fields: string;
}
export class GetFileGetSharedLinkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileGetSharedLinkHeaders, 'extraHeaders'>
      | Partial<Pick<GetFileGetSharedLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFileAddSharedLinkRequestBodySharedLinkAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface UpdateFileAddSharedLinkRequestBodySharedLinkPermissionsField {
  readonly canDownload?: boolean;
  readonly canPreview?: boolean;
  readonly canEdit?: boolean;
}
export interface UpdateFileAddSharedLinkRequestBodySharedLinkField {
  readonly access?: UpdateFileAddSharedLinkRequestBodySharedLinkAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: UpdateFileAddSharedLinkRequestBodySharedLinkPermissionsField;
}
export interface UpdateFileAddSharedLinkRequestBody {
  readonly sharedLink?: UpdateFileAddSharedLinkRequestBodySharedLinkField;
}
export interface UpdateFileAddSharedLinkQueryParams {
  readonly fields: string;
}
export class UpdateFileAddSharedLinkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFileAddSharedLinkHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateFileAddSharedLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFileUpdateSharedLinkRequestBodySharedLinkAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface UpdateFileUpdateSharedLinkRequestBodySharedLinkPermissionsField {
  readonly canDownload?: boolean;
  readonly canPreview?: boolean;
  readonly canEdit?: boolean;
}
export interface UpdateFileUpdateSharedLinkRequestBodySharedLinkField {
  readonly access?: UpdateFileUpdateSharedLinkRequestBodySharedLinkAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: UpdateFileUpdateSharedLinkRequestBodySharedLinkPermissionsField;
}
export interface UpdateFileUpdateSharedLinkRequestBody {
  readonly sharedLink?: UpdateFileUpdateSharedLinkRequestBodySharedLinkField;
}
export interface UpdateFileUpdateSharedLinkQueryParams {
  readonly fields: string;
}
export class UpdateFileUpdateSharedLinkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFileUpdateSharedLinkHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateFileUpdateSharedLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateFileRemoveSharedLinkRequestBodySharedLinkField {}
export interface UpdateFileRemoveSharedLinkRequestBody {
  readonly sharedLink?: UpdateFileRemoveSharedLinkRequestBodySharedLinkField;
}
export interface UpdateFileRemoveSharedLinkQueryParams {
  readonly fields: string;
}
export class UpdateFileRemoveSharedLinkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFileRemoveSharedLinkHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateFileRemoveSharedLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class SharedLinksFilesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          SharedLinksFilesManager,
          | 'networkSession'
          | 'getSharedItems'
          | 'getFileGetSharedLink'
          | 'updateFileAddSharedLink'
          | 'updateFileUpdateSharedLink'
          | 'updateFileRemoveSharedLink'
        >
      | Partial<Pick<SharedLinksFilesManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getSharedItems(
    queryParams: GetSharedItemsQueryParams = {} satisfies GetSharedItemsQueryParams,
    headers: GetSharedItemsHeaders,
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
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/shared_items'
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
  async getFileGetSharedLink(
    fileId: string,
    queryParams: GetFileGetSharedLinkQueryParams,
    headers: GetFileGetSharedLinkHeaders = new GetFileGetSharedLinkHeaders({}),
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
        this.networkSession.baseUrls.baseUrl,
        '/files/',
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
    requestBody: UpdateFileAddSharedLinkRequestBody = {} satisfies UpdateFileAddSharedLinkRequestBody,
    queryParams: UpdateFileAddSharedLinkQueryParams,
    headers: UpdateFileAddSharedLinkHeaders = new UpdateFileAddSharedLinkHeaders(
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
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '#add_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateFileAddSharedLinkRequestBody(requestBody),
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
    requestBody: UpdateFileUpdateSharedLinkRequestBody = {} satisfies UpdateFileUpdateSharedLinkRequestBody,
    queryParams: UpdateFileUpdateSharedLinkQueryParams,
    headers: UpdateFileUpdateSharedLinkHeaders = new UpdateFileUpdateSharedLinkHeaders(
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
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '#update_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateFileUpdateSharedLinkRequestBody(requestBody),
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
    requestBody: UpdateFileRemoveSharedLinkRequestBody = {} satisfies UpdateFileRemoveSharedLinkRequestBody,
    queryParams: UpdateFileRemoveSharedLinkQueryParams,
    headers: UpdateFileRemoveSharedLinkHeaders = new UpdateFileRemoveSharedLinkHeaders(
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
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '#remove_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateFileRemoveSharedLinkRequestBody(requestBody),
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
export function serializeUpdateFileAddSharedLinkRequestBodySharedLinkAccessField(
  val: UpdateFileAddSharedLinkRequestBodySharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateFileAddSharedLinkRequestBodySharedLinkAccessField(
  val: any
): UpdateFileAddSharedLinkRequestBodySharedLinkAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateFileAddSharedLinkRequestBodySharedLinkAccessField"';
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
export function serializeUpdateFileAddSharedLinkRequestBodySharedLinkPermissionsField(
  val: UpdateFileAddSharedLinkRequestBodySharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeUpdateFileAddSharedLinkRequestBodySharedLinkPermissionsField(
  val: any
): UpdateFileAddSharedLinkRequestBodySharedLinkPermissionsField {
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
  } satisfies UpdateFileAddSharedLinkRequestBodySharedLinkPermissionsField;
}
export function serializeUpdateFileAddSharedLinkRequestBodySharedLinkField(
  val: UpdateFileAddSharedLinkRequestBodySharedLinkField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFileAddSharedLinkRequestBodySharedLinkAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateFileAddSharedLinkRequestBodySharedLinkPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateFileAddSharedLinkRequestBodySharedLinkField(
  val: any
): UpdateFileAddSharedLinkRequestBodySharedLinkField {
  const access:
    | undefined
    | UpdateFileAddSharedLinkRequestBodySharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFileAddSharedLinkRequestBodySharedLinkAccessField(
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
    | UpdateFileAddSharedLinkRequestBodySharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateFileAddSharedLinkRequestBodySharedLinkPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies UpdateFileAddSharedLinkRequestBodySharedLinkField;
}
export function serializeUpdateFileAddSharedLinkRequestBody(
  val: UpdateFileAddSharedLinkRequestBody
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateFileAddSharedLinkRequestBodySharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateFileAddSharedLinkRequestBody(
  val: any
): UpdateFileAddSharedLinkRequestBody {
  const sharedLink:
    | undefined
    | UpdateFileAddSharedLinkRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateFileAddSharedLinkRequestBodySharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies UpdateFileAddSharedLinkRequestBody;
}
export function serializeUpdateFileUpdateSharedLinkRequestBodySharedLinkAccessField(
  val: UpdateFileUpdateSharedLinkRequestBodySharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateFileUpdateSharedLinkRequestBodySharedLinkAccessField(
  val: any
): UpdateFileUpdateSharedLinkRequestBodySharedLinkAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateFileUpdateSharedLinkRequestBodySharedLinkAccessField"';
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
export function serializeUpdateFileUpdateSharedLinkRequestBodySharedLinkPermissionsField(
  val: UpdateFileUpdateSharedLinkRequestBodySharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeUpdateFileUpdateSharedLinkRequestBodySharedLinkPermissionsField(
  val: any
): UpdateFileUpdateSharedLinkRequestBodySharedLinkPermissionsField {
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
  } satisfies UpdateFileUpdateSharedLinkRequestBodySharedLinkPermissionsField;
}
export function serializeUpdateFileUpdateSharedLinkRequestBodySharedLinkField(
  val: UpdateFileUpdateSharedLinkRequestBodySharedLinkField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFileUpdateSharedLinkRequestBodySharedLinkAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateFileUpdateSharedLinkRequestBodySharedLinkPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateFileUpdateSharedLinkRequestBodySharedLinkField(
  val: any
): UpdateFileUpdateSharedLinkRequestBodySharedLinkField {
  const access:
    | undefined
    | UpdateFileUpdateSharedLinkRequestBodySharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFileUpdateSharedLinkRequestBodySharedLinkAccessField(
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
    | UpdateFileUpdateSharedLinkRequestBodySharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateFileUpdateSharedLinkRequestBodySharedLinkPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies UpdateFileUpdateSharedLinkRequestBodySharedLinkField;
}
export function serializeUpdateFileUpdateSharedLinkRequestBody(
  val: UpdateFileUpdateSharedLinkRequestBody
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateFileUpdateSharedLinkRequestBodySharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateFileUpdateSharedLinkRequestBody(
  val: any
): UpdateFileUpdateSharedLinkRequestBody {
  const sharedLink:
    | undefined
    | UpdateFileUpdateSharedLinkRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateFileUpdateSharedLinkRequestBodySharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies UpdateFileUpdateSharedLinkRequestBody;
}
export function serializeUpdateFileRemoveSharedLinkRequestBodySharedLinkField(
  val: UpdateFileRemoveSharedLinkRequestBodySharedLinkField
): SerializedData {
  return {};
}
export function deserializeUpdateFileRemoveSharedLinkRequestBodySharedLinkField(
  val: any
): UpdateFileRemoveSharedLinkRequestBodySharedLinkField {
  return {} satisfies UpdateFileRemoveSharedLinkRequestBodySharedLinkField;
}
export function serializeUpdateFileRemoveSharedLinkRequestBody(
  val: UpdateFileRemoveSharedLinkRequestBody
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateFileRemoveSharedLinkRequestBodySharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateFileRemoveSharedLinkRequestBody(
  val: any
): UpdateFileRemoveSharedLinkRequestBody {
  const sharedLink:
    | undefined
    | UpdateFileRemoveSharedLinkRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateFileRemoveSharedLinkRequestBodySharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies UpdateFileRemoveSharedLinkRequestBody;
}
