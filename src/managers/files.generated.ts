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
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { serializeJson } from '../json.js';
import { isJson } from '../json.js';
export interface GetFileByIdQueryParamsArg {
  readonly fields?: readonly string[];
}
export class GetFileByIdHeadersArg {
  readonly ifNoneMatch?: string;
  readonly boxapi?: string;
  readonly xRepHints?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetFileByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateFileByIdRequestBodyArgParentField {
  readonly id?: string;
}
export type UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField {
  readonly canDownload?: boolean;
}
export interface UpdateFileByIdRequestBodyArgSharedLinkField {
  readonly access?: UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField;
}
export type UpdateFileByIdRequestBodyArgLockFieldAccessField = 'lock';
export interface UpdateFileByIdRequestBodyArgLockField {
  readonly access?: UpdateFileByIdRequestBodyArgLockFieldAccessField;
  readonly expiresAt?: string;
  readonly isDownloadPrevented?: boolean;
}
export type UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField =
  | 'open'
  | 'company';
export interface UpdateFileByIdRequestBodyArgPermissionsField {
  readonly canDownload?: UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField;
}
export interface UpdateFileByIdRequestBodyArgCollectionsField {
  readonly id?: string;
  readonly type?: string;
}
export interface UpdateFileByIdRequestBodyArg {
  readonly name?: string;
  readonly description?: string;
  readonly parent?: UpdateFileByIdRequestBodyArgParentField;
  readonly sharedLink?: UpdateFileByIdRequestBodyArgSharedLinkField;
  readonly lock?: UpdateFileByIdRequestBodyArgLockField;
  readonly dispositionAt?: string;
  readonly permissions?: UpdateFileByIdRequestBodyArgPermissionsField;
  readonly collections?: readonly UpdateFileByIdRequestBodyArgCollectionsField[];
  readonly tags?: readonly string[];
}
export interface UpdateFileByIdQueryParamsArg {
  readonly fields?: readonly string[];
}
export class UpdateFileByIdHeadersArg {
  readonly ifMatch?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFileByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateFileByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteFileByIdHeadersArg {
  readonly ifMatch?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFileByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteFileByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CopyFileRequestBodyArgParentField {
  readonly id: string;
}
export interface CopyFileRequestBodyArg {
  readonly name?: string;
  readonly version?: string;
  readonly parent: CopyFileRequestBodyArgParentField;
}
export interface CopyFileQueryParamsArg {
  readonly fields?: readonly string[];
}
export class CopyFileHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CopyFileHeadersArg, 'extraHeaders'>
      | Partial<Pick<CopyFileHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type GetFileThumbnailByIdExtensionArg = 'png' | 'jpg';
export interface GetFileThumbnailByIdQueryParamsArg {
  readonly minHeight?: number;
  readonly minWidth?: number;
  readonly maxHeight?: number;
  readonly maxWidth?: number;
}
export class GetFileThumbnailByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileThumbnailByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetFileThumbnailByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class FilesManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      FilesManager,
      | 'getFileById'
      | 'updateFileById'
      | 'deleteFileById'
      | 'copyFile'
      | 'getFileThumbnailById'
    >
  ) {
    Object.assign(this, fields);
  }
  async getFileById(
    fileId: string,
    queryParams: GetFileByIdQueryParamsArg = {} satisfies GetFileByIdQueryParamsArg,
    headers: GetFileByIdHeadersArg = new GetFileByIdHeadersArg({})
  ): Promise<FileFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
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
        'https://api.box.com/2.0/files/',
        toString(fileId) as string
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
    return deserializeFileFull(deserializeJson(response.text));
  }
  async updateFileById(
    fileId: string,
    requestBody: UpdateFileByIdRequestBodyArg = {} satisfies UpdateFileByIdRequestBodyArg,
    queryParams: UpdateFileByIdQueryParamsArg = {} satisfies UpdateFileByIdQueryParamsArg,
    headers: UpdateFileByIdHeadersArg = new UpdateFileByIdHeadersArg({})
  ): Promise<FileFull> {
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
        'https://api.box.com/2.0/files/',
        toString(fileId) as string
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        body: serializeJson(serializeUpdateFileByIdRequestBodyArg(requestBody)),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFileFull(deserializeJson(response.text));
  }
  async deleteFileById(
    fileId: string,
    headers: DeleteFileByIdHeadersArg = new DeleteFileByIdHeadersArg({})
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{ ['if-match']: toString(headers.ifMatch) as string },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
        toString(fileId) as string
      ) as string,
      {
        method: 'DELETE',
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
  async copyFile(
    fileId: string,
    requestBody: CopyFileRequestBodyArg,
    queryParams: CopyFileQueryParamsArg = {} satisfies CopyFileQueryParamsArg,
    headers: CopyFileHeadersArg = new CopyFileHeadersArg({})
  ): Promise<FileFull> {
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
        'https://api.box.com/2.0/files/',
        toString(fileId) as string,
        '/copy'
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        body: serializeJson(serializeCopyFileRequestBodyArg(requestBody)),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFileFull(deserializeJson(response.text));
  }
  async getFileThumbnailById(
    fileId: string,
    extension: GetFileThumbnailByIdExtensionArg,
    queryParams: GetFileThumbnailByIdQueryParamsArg = {} satisfies GetFileThumbnailByIdQueryParamsArg,
    headers: GetFileThumbnailByIdHeadersArg = new GetFileThumbnailByIdHeadersArg(
      {}
    )
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
        'https://api.box.com/2.0/files/',
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
      } satisfies FetchOptions
    )) as FetchResponse;
    return response.content;
  }
}
export function serializeUpdateFileByIdRequestBodyArgParentField(
  val: UpdateFileByIdRequestBodyArgParentField
): Json {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeUpdateFileByIdRequestBodyArgParentField(
  val: any
): UpdateFileByIdRequestBodyArgParentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies UpdateFileByIdRequestBodyArgParentField;
}
export function serializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(
  val: UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField
): Json {
  return val;
}
export function deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(
  val: any
): UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField"';
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
export function serializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(
  val: UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField
): Json {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
  };
}
export function deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(
  val: any
): UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField {
  const canDownload: undefined | boolean =
    val.can_download == void 0 ? void 0 : val.can_download;
  return {
    canDownload: canDownload,
  } satisfies UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField;
}
export function serializeUpdateFileByIdRequestBodyArgSharedLinkField(
  val: UpdateFileByIdRequestBodyArgSharedLinkField
): Json {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateFileByIdRequestBodyArgSharedLinkField(
  val: any
): UpdateFileByIdRequestBodyArgSharedLinkField {
  const access:
    | undefined
    | UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(
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
    | UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies UpdateFileByIdRequestBodyArgSharedLinkField;
}
export function serializeUpdateFileByIdRequestBodyArgLockFieldAccessField(
  val: UpdateFileByIdRequestBodyArgLockFieldAccessField
): Json {
  return val;
}
export function deserializeUpdateFileByIdRequestBodyArgLockFieldAccessField(
  val: any
): UpdateFileByIdRequestBodyArgLockFieldAccessField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "UpdateFileByIdRequestBodyArgLockFieldAccessField"';
  }
  if (val == 'lock') {
    return 'lock';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateFileByIdRequestBodyArgLockField(
  val: UpdateFileByIdRequestBodyArgLockField
): Json {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val.access),
    ['expires_at']: val.expiresAt == void 0 ? void 0 : val.expiresAt,
    ['is_download_prevented']:
      val.isDownloadPrevented == void 0 ? void 0 : val.isDownloadPrevented,
  };
}
export function deserializeUpdateFileByIdRequestBodyArgLockField(
  val: any
): UpdateFileByIdRequestBodyArgLockField {
  const access: undefined | UpdateFileByIdRequestBodyArgLockFieldAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val.access);
  const expiresAt: undefined | string =
    val.expires_at == void 0 ? void 0 : val.expires_at;
  const isDownloadPrevented: undefined | boolean =
    val.is_download_prevented == void 0 ? void 0 : val.is_download_prevented;
  return {
    access: access,
    expiresAt: expiresAt,
    isDownloadPrevented: isDownloadPrevented,
  } satisfies UpdateFileByIdRequestBodyArgLockField;
}
export function serializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(
  val: UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField
): Json {
  return val;
}
export function deserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(
  val: any
): UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField"';
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'company') {
    return 'company';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateFileByIdRequestBodyArgPermissionsField(
  val: UpdateFileByIdRequestBodyArgPermissionsField
): Json {
  return {
    ['can_download']:
      val.canDownload == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(
            val.canDownload
          ),
  };
}
export function deserializeUpdateFileByIdRequestBodyArgPermissionsField(
  val: any
): UpdateFileByIdRequestBodyArgPermissionsField {
  const canDownload:
    | undefined
    | UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField =
    val.can_download == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(
          val.can_download
        );
  return {
    canDownload: canDownload,
  } satisfies UpdateFileByIdRequestBodyArgPermissionsField;
}
export function serializeUpdateFileByIdRequestBodyArgCollectionsField(
  val: UpdateFileByIdRequestBodyArgCollectionsField
): Json {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']: val.type == void 0 ? void 0 : val.type,
  };
}
export function deserializeUpdateFileByIdRequestBodyArgCollectionsField(
  val: any
): UpdateFileByIdRequestBodyArgCollectionsField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  return {
    id: id,
    type: type,
  } satisfies UpdateFileByIdRequestBodyArgCollectionsField;
}
export function serializeUpdateFileByIdRequestBodyArg(
  val: UpdateFileByIdRequestBodyArg
): Json {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodyArgParentField(val.parent),
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodyArgSharedLinkField(val.sharedLink),
    ['lock']:
      val.lock == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodyArgLockField(val.lock),
    ['disposition_at']:
      val.dispositionAt == void 0 ? void 0 : val.dispositionAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodyArgPermissionsField(
            val.permissions
          ),
    ['collections']:
      val.collections == void 0
        ? void 0
        : (val.collections?.map(function (
            item: UpdateFileByIdRequestBodyArgCollectionsField
          ): any {
            return serializeUpdateFileByIdRequestBodyArgCollectionsField(item);
          }) as readonly any[]),
    ['tags']:
      val.tags == void 0
        ? void 0
        : (val.tags?.map(function (item: string): any {
            return item;
          }) as readonly any[]),
  };
}
export function deserializeUpdateFileByIdRequestBodyArg(
  val: any
): UpdateFileByIdRequestBodyArg {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const parent: undefined | UpdateFileByIdRequestBodyArgParentField =
    val.parent == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodyArgParentField(val.parent);
  const sharedLink: undefined | UpdateFileByIdRequestBodyArgSharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodyArgSharedLinkField(val.shared_link);
  const lock: undefined | UpdateFileByIdRequestBodyArgLockField =
    val.lock == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodyArgLockField(val.lock);
  const dispositionAt: undefined | string =
    val.disposition_at == void 0 ? void 0 : val.disposition_at;
  const permissions: undefined | UpdateFileByIdRequestBodyArgPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodyArgPermissionsField(
          val.permissions
        );
  const collections:
    | undefined
    | readonly UpdateFileByIdRequestBodyArgCollectionsField[] =
    val.collections == void 0
      ? void 0
      : isJson(val.collections, 'array')
      ? (val.collections?.map(function (itm: Json): any {
          return deserializeUpdateFileByIdRequestBodyArgCollectionsField(itm);
        }) as readonly any[])
      : [];
  const tags: undefined | readonly string[] =
    val.tags == void 0
      ? void 0
      : isJson(val.tags, 'array')
      ? (val.tags?.map(function (itm: Json): any {
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
  } satisfies UpdateFileByIdRequestBodyArg;
}
export function serializeCopyFileRequestBodyArgParentField(
  val: CopyFileRequestBodyArgParentField
): Json {
  return { ['id']: val.id };
}
export function deserializeCopyFileRequestBodyArgParentField(
  val: any
): CopyFileRequestBodyArgParentField {
  const id: string = val.id;
  return { id: id } satisfies CopyFileRequestBodyArgParentField;
}
export function serializeCopyFileRequestBodyArg(
  val: CopyFileRequestBodyArg
): Json {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['version']: val.version == void 0 ? void 0 : val.version,
    ['parent']: serializeCopyFileRequestBodyArgParentField(val.parent),
  };
}
export function deserializeCopyFileRequestBodyArg(
  val: any
): CopyFileRequestBodyArg {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const version: undefined | string =
    val.version == void 0 ? void 0 : val.version;
  const parent: CopyFileRequestBodyArgParentField =
    deserializeCopyFileRequestBodyArgParentField(val.parent);
  return {
    name: name,
    version: version,
    parent: parent,
  } satisfies CopyFileRequestBodyArg;
}
export function serializeGetFileThumbnailByIdExtensionArg(
  val: GetFileThumbnailByIdExtensionArg
): Json {
  return val;
}
export function deserializeGetFileThumbnailByIdExtensionArg(
  val: any
): GetFileThumbnailByIdExtensionArg {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetFileThumbnailByIdExtensionArg"';
  }
  if (val == 'png') {
    return 'png';
  }
  if (val == 'jpg') {
    return 'jpg';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
