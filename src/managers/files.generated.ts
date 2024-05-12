import { serializeFileFull } from '../schemas/fileFull.generated.js';
import { deserializeFileFull } from '../schemas/fileFull.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FileFull } from '../schemas/fileFull.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
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
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetFileByIdOptionals {
  readonly queryParams: GetFileByIdQueryParams =
    {} satisfies GetFileByIdQueryParams;
  readonly headers: GetFileByIdHeaders = new GetFileByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFileByIdOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetFileByIdOptionals,
          'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetFileByIdOptionalsInput {
  readonly queryParams?: GetFileByIdQueryParams;
  readonly headers?: GetFileByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateFileByIdOptionals {
  readonly requestBody: UpdateFileByIdRequestBody =
    {} satisfies UpdateFileByIdRequestBody;
  readonly queryParams: UpdateFileByIdQueryParams =
    {} satisfies UpdateFileByIdQueryParams;
  readonly headers: UpdateFileByIdHeaders = new UpdateFileByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateFileByIdOptionals,
      'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateFileByIdOptionals,
          'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.requestBody) {
      this.requestBody = fields.requestBody;
    }
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface UpdateFileByIdOptionalsInput {
  readonly requestBody?: UpdateFileByIdRequestBody;
  readonly queryParams?: UpdateFileByIdQueryParams;
  readonly headers?: UpdateFileByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteFileByIdOptionals {
  readonly headers: DeleteFileByIdHeaders = new DeleteFileByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<DeleteFileByIdOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<DeleteFileByIdOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface DeleteFileByIdOptionalsInput {
  readonly headers?: DeleteFileByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CopyFileOptionals {
  readonly queryParams: CopyFileQueryParams = {} satisfies CopyFileQueryParams;
  readonly headers: CopyFileHeaders = new CopyFileHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CopyFileOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<CopyFileOptionals, 'queryParams' | 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CopyFileOptionalsInput {
  readonly queryParams?: CopyFileQueryParams;
  readonly headers?: CopyFileHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFileThumbnailByIdOptionals {
  readonly queryParams: GetFileThumbnailByIdQueryParams =
    {} satisfies GetFileThumbnailByIdQueryParams;
  readonly headers: GetFileThumbnailByIdHeaders =
    new GetFileThumbnailByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFileThumbnailByIdOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetFileThumbnailByIdOptionals,
          'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetFileThumbnailByIdOptionalsInput {
  readonly queryParams?: GetFileThumbnailByIdQueryParams;
  readonly headers?: GetFileThumbnailByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
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
    fields: Omit<GetFileByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.ifNoneMatch) {
      this.ifNoneMatch = fields.ifNoneMatch;
    }
    if (fields.boxapi) {
      this.boxapi = fields.boxapi;
    }
    if (fields.xRepHints) {
      this.xRepHints = fields.xRepHints;
    }
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFileByIdHeadersInput {
  readonly ifNoneMatch?: string;
  readonly boxapi?: string;
  readonly xRepHints?: string;
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
  readonly unsharedAt?: DateTime;
  readonly permissions?: UpdateFileByIdRequestBodySharedLinkPermissionsField;
}
export type UpdateFileByIdRequestBodyLockAccessField = 'lock';
export interface UpdateFileByIdRequestBodyLockField {
  readonly access?: UpdateFileByIdRequestBodyLockAccessField;
  readonly expiresAt?: DateTime;
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
  readonly dispositionAt?: DateTime;
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
    fields: Omit<UpdateFileByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateFileByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.ifMatch) {
      this.ifMatch = fields.ifMatch;
    }
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateFileByIdHeadersInput {
  readonly ifMatch?: string;
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteFileByIdHeaders {
  readonly ifMatch?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteFileByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteFileByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.ifMatch) {
      this.ifMatch = fields.ifMatch;
    }
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteFileByIdHeadersInput {
  readonly ifMatch?: string;
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<CopyFileHeaders, 'extraHeaders'> &
      Partial<Pick<CopyFileHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CopyFileHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<GetFileThumbnailByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileThumbnailByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFileThumbnailByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class FilesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      FilesManager,
      | 'networkSession'
      | 'getFileById'
      | 'updateFileById'
      | 'deleteFileById'
      | 'copyFile'
      | 'getFileThumbnailById'
    > &
      Partial<Pick<FilesManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getFileById(
    fileId: string,
    optionalsInput: GetFileByIdOptionalsInput = {}
  ): Promise<FileFull> {
    const optionals: GetFileByIdOptionals = new GetFileByIdOptionals({
      queryParams: optionalsInput.queryParams,
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: UpdateFileByIdOptionalsInput = {}
  ): Promise<FileFull> {
    const optionals: UpdateFileByIdOptionals = new UpdateFileByIdOptionals({
      requestBody: optionalsInput.requestBody,
      queryParams: optionalsInput.queryParams,
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const requestBody: any = optionals.requestBody;
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: DeleteFileByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteFileByIdOptionals = new DeleteFileByIdOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: CopyFileOptionalsInput = {}
  ): Promise<FileFull> {
    const optionals: CopyFileOptionals = new CopyFileOptionals({
      queryParams: optionalsInput.queryParams,
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: GetFileThumbnailByIdOptionalsInput = {}
  ): Promise<ByteStream> {
    const optionals: GetFileThumbnailByIdOptionals =
      new GetFileThumbnailByIdOptionals({
        queryParams: optionalsInput.queryParams,
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
export interface FilesManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeUpdateFileByIdRequestBodyParentField(
  val: UpdateFileByIdRequestBodyParentField
): SerializedData {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeUpdateFileByIdRequestBodyParentField(
  val: SerializedData
): UpdateFileByIdRequestBodyParentField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateFileByIdRequestBodyParentField"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "UpdateFileByIdRequestBodyParentField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies UpdateFileByIdRequestBodyParentField;
}
export function serializeUpdateFileByIdRequestBodySharedLinkAccessField(
  val: UpdateFileByIdRequestBodySharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateFileByIdRequestBodySharedLinkAccessField(
  val: SerializedData
): UpdateFileByIdRequestBodySharedLinkAccessField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateFileByIdRequestBodySharedLinkAccessField"',
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
export function serializeUpdateFileByIdRequestBodySharedLinkPermissionsField(
  val: UpdateFileByIdRequestBodySharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
  };
}
export function deserializeUpdateFileByIdRequestBodySharedLinkPermissionsField(
  val: SerializedData
): UpdateFileByIdRequestBodySharedLinkPermissionsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateFileByIdRequestBodySharedLinkPermissionsField"',
    });
  }
  if (!(val.can_download == void 0) && !sdIsBoolean(val.can_download)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_download" of type "UpdateFileByIdRequestBodySharedLinkPermissionsField"',
    });
  }
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
    ['unshared_at']:
      val.unsharedAt == void 0 ? void 0 : serializeDateTime(val.unsharedAt),
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodySharedLinkPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateFileByIdRequestBodySharedLinkField(
  val: SerializedData
): UpdateFileByIdRequestBodySharedLinkField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateFileByIdRequestBodySharedLinkField"',
    });
  }
  const access: undefined | UpdateFileByIdRequestBodySharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodySharedLinkAccessField(val.access);
  if (!(val.password == void 0) && !sdIsString(val.password)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "password" of type "UpdateFileByIdRequestBodySharedLinkField"',
    });
  }
  const password: undefined | string =
    val.password == void 0 ? void 0 : val.password;
  if (!(val.vanity_name == void 0) && !sdIsString(val.vanity_name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "vanity_name" of type "UpdateFileByIdRequestBodySharedLinkField"',
    });
  }
  const vanityName: undefined | string =
    val.vanity_name == void 0 ? void 0 : val.vanity_name;
  if (!(val.unshared_at == void 0) && !sdIsString(val.unshared_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "unshared_at" of type "UpdateFileByIdRequestBodySharedLinkField"',
    });
  }
  const unsharedAt: undefined | DateTime =
    val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
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
  val: SerializedData
): UpdateFileByIdRequestBodyLockAccessField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateFileByIdRequestBodyLockAccessField"',
    });
  }
  if (val == 'lock') {
    return 'lock';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateFileByIdRequestBodyLockField(
  val: UpdateFileByIdRequestBodyLockField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodyLockAccessField(val.access),
    ['expires_at']:
      val.expiresAt == void 0 ? void 0 : serializeDateTime(val.expiresAt),
    ['is_download_prevented']:
      val.isDownloadPrevented == void 0 ? void 0 : val.isDownloadPrevented,
  };
}
export function deserializeUpdateFileByIdRequestBodyLockField(
  val: SerializedData
): UpdateFileByIdRequestBodyLockField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateFileByIdRequestBodyLockField"',
    });
  }
  const access: undefined | UpdateFileByIdRequestBodyLockAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodyLockAccessField(val.access);
  if (!(val.expires_at == void 0) && !sdIsString(val.expires_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "expires_at" of type "UpdateFileByIdRequestBodyLockField"',
    });
  }
  const expiresAt: undefined | DateTime =
    val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
  if (
    !(val.is_download_prevented == void 0) &&
    !sdIsBoolean(val.is_download_prevented)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_download_prevented" of type "UpdateFileByIdRequestBodyLockField"',
    });
  }
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
  val: SerializedData
): UpdateFileByIdRequestBodyPermissionsCanDownloadField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateFileByIdRequestBodyPermissionsCanDownloadField"',
    });
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'company') {
    return 'company';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
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
  val: SerializedData
): UpdateFileByIdRequestBodyPermissionsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateFileByIdRequestBodyPermissionsField"',
    });
  }
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
  val: SerializedData
): UpdateFileByIdRequestBodyCollectionsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateFileByIdRequestBodyCollectionsField"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "UpdateFileByIdRequestBodyCollectionsField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  if (!(val.type == void 0) && !sdIsString(val.type)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "type" of type "UpdateFileByIdRequestBodyCollectionsField"',
    });
  }
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
      val.dispositionAt == void 0
        ? void 0
        : serializeDateTime(val.dispositionAt),
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateFileByIdRequestBodyPermissionsField(val.permissions),
    ['collections']:
      val.collections == void 0
        ? void 0
        : (val.collections.map(function (
            item: UpdateFileByIdRequestBodyCollectionsField
          ): SerializedData {
            return serializeUpdateFileByIdRequestBodyCollectionsField(item);
          }) as readonly any[]),
    ['tags']:
      val.tags == void 0
        ? void 0
        : (val.tags.map(function (item: string): SerializedData {
            return item;
          }) as readonly any[]),
  };
}
export function deserializeUpdateFileByIdRequestBody(
  val: SerializedData
): UpdateFileByIdRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateFileByIdRequestBody"',
    });
  }
  if (!(val.name == void 0) && !sdIsString(val.name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "name" of type "UpdateFileByIdRequestBody"',
    });
  }
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  if (!(val.description == void 0) && !sdIsString(val.description)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "description" of type "UpdateFileByIdRequestBody"',
    });
  }
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
  if (!(val.disposition_at == void 0) && !sdIsString(val.disposition_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "disposition_at" of type "UpdateFileByIdRequestBody"',
    });
  }
  const dispositionAt: undefined | DateTime =
    val.disposition_at == void 0
      ? void 0
      : deserializeDateTime(val.disposition_at);
  const permissions: undefined | UpdateFileByIdRequestBodyPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateFileByIdRequestBodyPermissionsField(val.permissions);
  if (!(val.collections == void 0) && !sdIsList(val.collections)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "collections" of type "UpdateFileByIdRequestBody"',
    });
  }
  const collections:
    | undefined
    | readonly UpdateFileByIdRequestBodyCollectionsField[] =
    val.collections == void 0
      ? void 0
      : sdIsList(val.collections)
      ? (val.collections.map(function (
          itm: SerializedData
        ): UpdateFileByIdRequestBodyCollectionsField {
          return deserializeUpdateFileByIdRequestBodyCollectionsField(itm);
        }) as readonly any[])
      : [];
  if (!(val.tags == void 0) && !sdIsList(val.tags)) {
    throw new BoxSdkError({
      message: 'Expecting array for "tags" of type "UpdateFileByIdRequestBody"',
    });
  }
  const tags: undefined | readonly string[] =
    val.tags == void 0
      ? void 0
      : sdIsList(val.tags)
      ? (val.tags.map(function (itm: SerializedData): string {
          if (!sdIsString(itm)) {
            throw new BoxSdkError({
              message: 'Expecting string for "UpdateFileByIdRequestBody"',
            });
          }
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
  val: SerializedData
): CopyFileRequestBodyParentField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CopyFileRequestBodyParentField"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "CopyFileRequestBodyParentField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "CopyFileRequestBodyParentField"',
    });
  }
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
export function deserializeCopyFileRequestBody(
  val: SerializedData
): CopyFileRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CopyFileRequestBody"',
    });
  }
  if (!(val.name == void 0) && !sdIsString(val.name)) {
    throw new BoxSdkError({
      message: 'Expecting string for "name" of type "CopyFileRequestBody"',
    });
  }
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  if (!(val.version == void 0) && !sdIsString(val.version)) {
    throw new BoxSdkError({
      message: 'Expecting string for "version" of type "CopyFileRequestBody"',
    });
  }
  const version: undefined | string =
    val.version == void 0 ? void 0 : val.version;
  if (val.parent == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "parent" of type "CopyFileRequestBody" to be defined',
    });
  }
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
  val: SerializedData
): GetFileThumbnailByIdExtension {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "GetFileThumbnailByIdExtension"',
    });
  }
  if (val == 'png') {
    return 'png';
  }
  if (val == 'jpg') {
    return 'jpg';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
