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
export interface GetFileByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetFileByIdHeaders {
  readonly ifNoneMatch?: string;
  readonly boxapi?: string;
  readonly xRepHints?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetFileByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateFileByIdRequestBodyParentField {
  readonly id?: string;
}
export type UpdateFileByIdRequestBodySharedLinkAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface UpdateFileByIdRequestBodySharedLinkPermissionsField {
  readonly canDownload?: boolean;
}
export interface UpdateFileByIdRequestBodySharedLinkField {
  readonly access?: UpdateFileByIdRequestBodySharedLinkAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: UpdateFileByIdRequestBodySharedLinkPermissionsField;
}
export type UpdateFileByIdRequestBodyLockAccessField = 'lock';
export interface UpdateFileByIdRequestBodyLockField {
  readonly access?: UpdateFileByIdRequestBodyLockAccessField;
  readonly expiresAt?: string;
  readonly isDownloadPrevented?: boolean;
}
export type UpdateFileByIdRequestBodyPermissionsCanDownloadField =
  | 'open'
  | 'company';
export interface UpdateFileByIdRequestBodyPermissionsField {
  readonly canDownload?: UpdateFileByIdRequestBodyPermissionsCanDownloadField;
}
export interface UpdateFileByIdRequestBodyCollectionsField {
  readonly id?: string;
  readonly type?: string;
}
export interface UpdateFileByIdRequestBody {
  readonly name?: string;
  readonly description?: string;
  readonly parent?: UpdateFileByIdRequestBodyParentField;
  readonly sharedLink?: UpdateFileByIdRequestBodySharedLinkField;
  readonly lock?: UpdateFileByIdRequestBodyLockField;
  readonly dispositionAt?: string;
  readonly permissions?: UpdateFileByIdRequestBodyPermissionsField;
  readonly collections?: readonly UpdateFileByIdRequestBodyCollectionsField[];
  readonly tags?: readonly string[];
}
export interface UpdateFileByIdQueryParams {
  readonly fields?: readonly string[];
}
export class UpdateFileByIdHeaders {
  readonly ifMatch?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFileByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateFileByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteFileByIdHeaders {
  readonly ifMatch?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFileByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteFileByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CopyFileRequestBodyParentField {
  readonly id: string;
}
export interface CopyFileRequestBody {
  readonly name?: string;
  readonly version?: string;
  readonly parent: CopyFileRequestBodyParentField;
}
export interface CopyFileQueryParams {
  readonly fields?: readonly string[];
}
export class CopyFileHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CopyFileHeaders, 'extraHeaders'>
      | Partial<Pick<CopyFileHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type GetFileThumbnailByIdExtension = 'png' | 'jpg';
export interface GetFileThumbnailByIdQueryParams {
  readonly minHeight?: number;
  readonly minWidth?: number;
  readonly maxHeight?: number;
  readonly maxWidth?: number;
}
export class GetFileThumbnailByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileThumbnailByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetFileThumbnailByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class FilesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          FilesManager,
          | 'networkSession'
          | 'getFileById'
          | 'updateFileById'
          | 'deleteFileById'
          | 'copyFile'
          | 'getFileThumbnailById'
        >
      | Partial<Pick<FilesManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getFileById(
    fileId: string,
    queryParams: GetFileByIdQueryParams = {} satisfies GetFileByIdQueryParams,
    headers: GetFileByIdHeaders = new GetFileByIdHeaders({}),
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
        ['x-rep-hints']: toString(headers.xRepHints) as string,
      },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string
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
  async updateFileById(
    fileId: string,
    requestBody: UpdateFileByIdRequestBody = {} satisfies UpdateFileByIdRequestBody,
    queryParams: UpdateFileByIdQueryParams = {} satisfies UpdateFileByIdQueryParams,
    headers: UpdateFileByIdHeaders = new UpdateFileByIdHeaders({}),
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
      ...{ ['if-match']: toString(headers.ifMatch) as string },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateFileByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFileFull(response.data);
  }
  async deleteFileById(
    fileId: string,
    headers: DeleteFileByIdHeaders = new DeleteFileByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{ ['if-match']: toString(headers.ifMatch) as string },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string
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
  async copyFile(
    fileId: string,
    requestBody: CopyFileRequestBody,
    queryParams: CopyFileQueryParams = {} satisfies CopyFileQueryParams,
    headers: CopyFileHeaders = new CopyFileHeaders({}),
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
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '/copy'
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeCopyFileRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFileFull(response.data);
  }
  async getFileThumbnailById(
    fileId: string,
    extension: GetFileThumbnailByIdExtension,
    queryParams: GetFileThumbnailByIdQueryParams = {} satisfies GetFileThumbnailByIdQueryParams,
    headers: GetFileThumbnailByIdHeaders = new GetFileThumbnailByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<ByteStream> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['min_height']: toString(queryParams.minHeight) as string,
      ['min_width']: toString(queryParams.minWidth) as string,
      ['max_height']: toString(queryParams.maxHeight) as string,
      ['max_width']: toString(queryParams.maxWidth) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '/thumbnail.',
        toString(extension) as string
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'binary',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return response.content;
  }
}
export function serializeUpdateFileByIdRequestBodyParentField(
  val: UpdateFileByIdRequestBodyParentField
): SerializedData {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeUpdateFileByIdRequestBodyParentField(
  val: any
): UpdateFileByIdRequestBodyParentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies UpdateFileByIdRequestBodyParentField;
}
export function serializeUpdateFileByIdRequestBodySharedLinkAccessField(
  val: UpdateFileByIdRequestBodySharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateFileByIdRequestBodySharedLinkAccessField(
  val: any
): UpdateFileByIdRequestBodySharedLinkAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateFileByIdRequestBodySharedLinkAccessField"';
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
export function serializeUpdateFileByIdRequestBodySharedLinkPermissionsField(
  val: UpdateFileByIdRequestBodySharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
  };
}
export function deserializeUpdateFileByIdRequestBodySharedLinkPermissionsField(
  val: any
): UpdateFileByIdRequestBodySharedLinkPermissionsField {
  const canDownload: undefined | boolean =
    val.can_download == void 0 ? void 0 : val.can_download;
  return {
    canDownload: canDownload,
  } satisfies UpdateFileByIdRequestBodySharedLinkPermissionsField;
}
export function serializeUpdateFileByIdRequestBodySharedLinkField(
  val: UpdateFileByIdRequestBodySharedLinkField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodySharedLinkAccessField(val.access),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodySharedLinkPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateFileByIdRequestBodySharedLinkField(
  val: any
): UpdateFileByIdRequestBodySharedLinkField {
  const access: undefined | UpdateFileByIdRequestBodySharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodySharedLinkAccessField(val.access);
  const password: undefined | string =
    val.password == void 0 ? void 0 : val.password;
  const vanityName: undefined | string =
    val.vanity_name == void 0 ? void 0 : val.vanity_name;
  const unsharedAt: undefined | string =
    val.unshared_at == void 0 ? void 0 : val.unshared_at;
  const permissions:
    | undefined
    | UpdateFileByIdRequestBodySharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodySharedLinkPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies UpdateFileByIdRequestBodySharedLinkField;
}
export function serializeUpdateFileByIdRequestBodyLockAccessField(
  val: UpdateFileByIdRequestBodyLockAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateFileByIdRequestBodyLockAccessField(
  val: any
): UpdateFileByIdRequestBodyLockAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateFileByIdRequestBodyLockAccessField"';
  }
  if (val == 'lock') {
    return 'lock';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateFileByIdRequestBodyLockField(
  val: UpdateFileByIdRequestBodyLockField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodyLockAccessField(val.access),
    ['expires_at']: val.expiresAt == void 0 ? void 0 : val.expiresAt,
    ['is_download_prevented']:
      val.isDownloadPrevented == void 0 ? void 0 : val.isDownloadPrevented,
  };
}
export function deserializeUpdateFileByIdRequestBodyLockField(
  val: any
): UpdateFileByIdRequestBodyLockField {
  const access: undefined | UpdateFileByIdRequestBodyLockAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodyLockAccessField(val.access);
  const expiresAt: undefined | string =
    val.expires_at == void 0 ? void 0 : val.expires_at;
  const isDownloadPrevented: undefined | boolean =
    val.is_download_prevented == void 0 ? void 0 : val.is_download_prevented;
  return {
    access: access,
    expiresAt: expiresAt,
    isDownloadPrevented: isDownloadPrevented,
  } satisfies UpdateFileByIdRequestBodyLockField;
}
export function serializeUpdateFileByIdRequestBodyPermissionsCanDownloadField(
  val: UpdateFileByIdRequestBodyPermissionsCanDownloadField
): SerializedData {
  return val;
}
export function deserializeUpdateFileByIdRequestBodyPermissionsCanDownloadField(
  val: any
): UpdateFileByIdRequestBodyPermissionsCanDownloadField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateFileByIdRequestBodyPermissionsCanDownloadField"';
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'company') {
    return 'company';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateFileByIdRequestBodyPermissionsField(
  val: UpdateFileByIdRequestBodyPermissionsField
): SerializedData {
  return {
    ['can_download']:
      val.canDownload == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodyPermissionsCanDownloadField(
            val.canDownload
          ),
  };
}
export function deserializeUpdateFileByIdRequestBodyPermissionsField(
  val: any
): UpdateFileByIdRequestBodyPermissionsField {
  const canDownload:
    | undefined
    | UpdateFileByIdRequestBodyPermissionsCanDownloadField =
    val.can_download == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodyPermissionsCanDownloadField(
          val.can_download
        );
  return {
    canDownload: canDownload,
  } satisfies UpdateFileByIdRequestBodyPermissionsField;
}
export function serializeUpdateFileByIdRequestBodyCollectionsField(
  val: UpdateFileByIdRequestBodyCollectionsField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']: val.type == void 0 ? void 0 : val.type,
  };
}
export function deserializeUpdateFileByIdRequestBodyCollectionsField(
  val: any
): UpdateFileByIdRequestBodyCollectionsField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  return {
    id: id,
    type: type,
  } satisfies UpdateFileByIdRequestBodyCollectionsField;
}
export function serializeUpdateFileByIdRequestBody(
  val: UpdateFileByIdRequestBody
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodyParentField(val.parent),
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodySharedLinkField(val.sharedLink),
    ['lock']:
      val.lock == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodyLockField(val.lock),
    ['disposition_at']:
      val.dispositionAt == void 0 ? void 0 : val.dispositionAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodyPermissionsField(val.permissions),
    ['collections']:
      val.collections == void 0
        ? void 0
        : (val.collections.map(function (
            item: UpdateFileByIdRequestBodyCollectionsField
          ): any {
            return serializeUpdateFileByIdRequestBodyCollectionsField(item);
          }) as readonly any[]),
    ['tags']:
      val.tags == void 0
        ? void 0
        : (val.tags.map(function (item: string): any {
            return item;
          }) as readonly any[]),
  };
}
export function deserializeUpdateFileByIdRequestBody(
  val: any
): UpdateFileByIdRequestBody {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const parent: undefined | UpdateFileByIdRequestBodyParentField =
    val.parent == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodyParentField(val.parent);
  const sharedLink: undefined | UpdateFileByIdRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodySharedLinkField(val.shared_link);
  const lock: undefined | UpdateFileByIdRequestBodyLockField =
    val.lock == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodyLockField(val.lock);
  const dispositionAt: undefined | string =
    val.disposition_at == void 0 ? void 0 : val.disposition_at;
  const permissions: undefined | UpdateFileByIdRequestBodyPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodyPermissionsField(val.permissions);
  const collections:
    | undefined
    | readonly UpdateFileByIdRequestBodyCollectionsField[] =
    val.collections == void 0
      ? void 0
      : sdIsList(val.collections)
      ? (val.collections.map(function (itm: SerializedData): any {
          return deserializeUpdateFileByIdRequestBodyCollectionsField(itm);
        }) as readonly any[])
      : [];
  const tags: undefined | readonly string[] =
    val.tags == void 0
      ? void 0
      : sdIsList(val.tags)
      ? (val.tags.map(function (itm: SerializedData): any {
          return itm;
        }) as readonly any[])
      : [];
  return {
    name: name,
    description: description,
    parent: parent,
    sharedLink: sharedLink,
    lock: lock,
    dispositionAt: dispositionAt,
    permissions: permissions,
    collections: collections,
    tags: tags,
  } satisfies UpdateFileByIdRequestBody;
}
export function serializeCopyFileRequestBodyParentField(
  val: CopyFileRequestBodyParentField
): SerializedData {
  return { ['id']: val.id };
}
export function deserializeCopyFileRequestBodyParentField(
  val: any
): CopyFileRequestBodyParentField {
  const id: string = val.id;
  return { id: id } satisfies CopyFileRequestBodyParentField;
}
export function serializeCopyFileRequestBody(
  val: CopyFileRequestBody
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['version']: val.version == void 0 ? void 0 : val.version,
    ['parent']: serializeCopyFileRequestBodyParentField(val.parent),
  };
}
export function deserializeCopyFileRequestBody(val: any): CopyFileRequestBody {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const version: undefined | string =
    val.version == void 0 ? void 0 : val.version;
  const parent: CopyFileRequestBodyParentField =
    deserializeCopyFileRequestBodyParentField(val.parent);
  return {
    name: name,
    version: version,
    parent: parent,
  } satisfies CopyFileRequestBody;
}
export function serializeGetFileThumbnailByIdExtension(
  val: GetFileThumbnailByIdExtension
): SerializedData {
  return val;
}
export function deserializeGetFileThumbnailByIdExtension(
  val: any
): GetFileThumbnailByIdExtension {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetFileThumbnailByIdExtension"';
  }
  if (val == 'png') {
    return 'png';
  }
  if (val == 'jpg') {
    return 'jpg';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
