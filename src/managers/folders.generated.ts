import { serializeFolderFull } from '../schemas/folderFull.generated.js';
import { deserializeFolderFull } from '../schemas/folderFull.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeItems } from '../schemas/items.generated.js';
import { deserializeItems } from '../schemas/items.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FolderFull } from '../schemas/folderFull.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { Items } from '../schemas/items.generated.js';
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
export class GetFolderByIdOptionals {
  readonly queryParams: GetFolderByIdQueryParams =
    {} satisfies GetFolderByIdQueryParams;
  readonly headers: GetFolderByIdHeaders = new GetFolderByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFolderByIdOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetFolderByIdOptionals,
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
export interface GetFolderByIdOptionalsInput {
  readonly queryParams?: GetFolderByIdQueryParams;
  readonly headers?: GetFolderByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateFolderByIdOptionals {
  readonly requestBody: UpdateFolderByIdRequestBody =
    {} satisfies UpdateFolderByIdRequestBody;
  readonly queryParams: UpdateFolderByIdQueryParams =
    {} satisfies UpdateFolderByIdQueryParams;
  readonly headers: UpdateFolderByIdHeaders = new UpdateFolderByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateFolderByIdOptionals,
      'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateFolderByIdOptionals,
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
export interface UpdateFolderByIdOptionalsInput {
  readonly requestBody?: UpdateFolderByIdRequestBody;
  readonly queryParams?: UpdateFolderByIdQueryParams;
  readonly headers?: UpdateFolderByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteFolderByIdOptionals {
  readonly queryParams: DeleteFolderByIdQueryParams =
    {} satisfies DeleteFolderByIdQueryParams;
  readonly headers: DeleteFolderByIdHeaders = new DeleteFolderByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteFolderByIdOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          DeleteFolderByIdOptionals,
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
export interface DeleteFolderByIdOptionalsInput {
  readonly queryParams?: DeleteFolderByIdQueryParams;
  readonly headers?: DeleteFolderByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFolderItemsOptionals {
  readonly queryParams: GetFolderItemsQueryParams =
    {} satisfies GetFolderItemsQueryParams;
  readonly headers: GetFolderItemsHeaders = new GetFolderItemsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFolderItemsOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetFolderItemsOptionals,
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
export interface GetFolderItemsOptionalsInput {
  readonly queryParams?: GetFolderItemsQueryParams;
  readonly headers?: GetFolderItemsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateFolderOptionals {
  readonly queryParams: CreateFolderQueryParams =
    {} satisfies CreateFolderQueryParams;
  readonly headers: CreateFolderHeaders = new CreateFolderHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateFolderOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateFolderOptionals,
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
export interface CreateFolderOptionalsInput {
  readonly queryParams?: CreateFolderQueryParams;
  readonly headers?: CreateFolderHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CopyFolderOptionals {
  readonly queryParams: CopyFolderQueryParams =
    {} satisfies CopyFolderQueryParams;
  readonly headers: CopyFolderHeaders = new CopyFolderHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CopyFolderOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CopyFolderOptionals,
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
export interface CopyFolderOptionalsInput {
  readonly queryParams?: CopyFolderQueryParams;
  readonly headers?: CopyFolderHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
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
    fields: Omit<GetFolderByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetFolderByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.ifNoneMatch) {
      this.ifNoneMatch = fields.ifNoneMatch;
    }
    if (fields.boxapi) {
      this.boxapi = fields.boxapi;
    }
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFolderByIdHeadersInput {
  readonly ifNoneMatch?: string;
  readonly boxapi?: string;
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
  readonly unsharedAt?: DateTime;
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
    fields: Omit<UpdateFolderByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateFolderByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.ifMatch) {
      this.ifMatch = fields.ifMatch;
    }
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateFolderByIdHeadersInput {
  readonly ifMatch?: string;
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<DeleteFolderByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteFolderByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.ifMatch) {
      this.ifMatch = fields.ifMatch;
    }
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteFolderByIdHeadersInput {
  readonly ifMatch?: string;
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<GetFolderItemsHeaders, 'extraHeaders'> &
      Partial<Pick<GetFolderItemsHeaders, 'extraHeaders'>>
  ) {
    if (fields.boxapi) {
      this.boxapi = fields.boxapi;
    }
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFolderItemsHeadersInput {
  readonly boxapi?: string;
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<CreateFolderHeaders, 'extraHeaders'> &
      Partial<Pick<CreateFolderHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateFolderHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<CopyFolderHeaders, 'extraHeaders'> &
      Partial<Pick<CopyFolderHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CopyFolderHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class FoldersManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      FoldersManager,
      | 'networkSession'
      | 'getFolderById'
      | 'updateFolderById'
      | 'deleteFolderById'
      | 'getFolderItems'
      | 'createFolder'
      | 'copyFolder'
    > &
      Partial<Pick<FoldersManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getFolderById(
    folderId: string,
    optionalsInput: GetFolderByIdOptionalsInput = {}
  ): Promise<FolderFull> {
    const optionals: GetFolderByIdOptionals = new GetFolderByIdOptionals({
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
    optionalsInput: UpdateFolderByIdOptionalsInput = {}
  ): Promise<FolderFull> {
    const optionals: UpdateFolderByIdOptionals = new UpdateFolderByIdOptionals({
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
    optionalsInput: DeleteFolderByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteFolderByIdOptionals = new DeleteFolderByIdOptionals({
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
    optionalsInput: GetFolderItemsOptionalsInput = {}
  ): Promise<Items> {
    const optionals: GetFolderItemsOptionals = new GetFolderItemsOptionals({
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
    optionalsInput: CreateFolderOptionalsInput = {}
  ): Promise<FolderFull> {
    const optionals: CreateFolderOptionals = new CreateFolderOptionals({
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
    optionalsInput: CopyFolderOptionalsInput = {}
  ): Promise<FolderFull> {
    const optionals: CopyFolderOptionals = new CopyFolderOptionals({
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
export interface FoldersManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeGetFolderByIdQueryParamsSortField(
  val: GetFolderByIdQueryParamsSortField
): SerializedData {
  return val;
}
export function deserializeGetFolderByIdQueryParamsSortField(
  val: SerializedData
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
  val: GetFolderByIdQueryParamsDirectionField
): SerializedData {
  return val;
}
export function deserializeGetFolderByIdQueryParamsDirectionField(
  val: SerializedData
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
  val: UpdateFolderByIdRequestBodySyncStateField
): SerializedData {
  return val;
}
export function deserializeUpdateFolderByIdRequestBodySyncStateField(
  val: SerializedData
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
  val: UpdateFolderByIdRequestBodyParentField
): SerializedData {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeUpdateFolderByIdRequestBodyParentField(
  val: SerializedData
): UpdateFolderByIdRequestBodyParentField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateFolderByIdRequestBodyParentField"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "UpdateFolderByIdRequestBodyParentField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies UpdateFolderByIdRequestBodyParentField;
}
export function serializeUpdateFolderByIdRequestBodySharedLinkAccessField(
  val: UpdateFolderByIdRequestBodySharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateFolderByIdRequestBodySharedLinkAccessField(
  val: SerializedData
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
  val: UpdateFolderByIdRequestBodySharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
  };
}
export function deserializeUpdateFolderByIdRequestBodySharedLinkPermissionsField(
  val: SerializedData
): UpdateFolderByIdRequestBodySharedLinkPermissionsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateFolderByIdRequestBodySharedLinkPermissionsField"',
    });
  }
  if (!(val.can_download == void 0) && !sdIsBoolean(val.can_download)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_download" of type "UpdateFolderByIdRequestBodySharedLinkPermissionsField"',
    });
  }
  const canDownload: undefined | boolean =
    val.can_download == void 0 ? void 0 : val.can_download;
  return {
    canDownload: canDownload,
  } satisfies UpdateFolderByIdRequestBodySharedLinkPermissionsField;
}
export function serializeUpdateFolderByIdRequestBodySharedLinkField(
  val: UpdateFolderByIdRequestBodySharedLinkField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateFolderByIdRequestBodySharedLinkAccessField(val.access),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']:
      val.unsharedAt == void 0 ? void 0 : serializeDateTime(val.unsharedAt),
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateFolderByIdRequestBodySharedLinkPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateFolderByIdRequestBodySharedLinkField(
  val: SerializedData
): UpdateFolderByIdRequestBodySharedLinkField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateFolderByIdRequestBodySharedLinkField"',
    });
  }
  const access: undefined | UpdateFolderByIdRequestBodySharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateFolderByIdRequestBodySharedLinkAccessField(val.access);
  if (!(val.password == void 0) && !sdIsString(val.password)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "password" of type "UpdateFolderByIdRequestBodySharedLinkField"',
    });
  }
  const password: undefined | string =
    val.password == void 0 ? void 0 : val.password;
  if (!(val.vanity_name == void 0) && !sdIsString(val.vanity_name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "vanity_name" of type "UpdateFolderByIdRequestBodySharedLinkField"',
    });
  }
  const vanityName: undefined | string =
    val.vanity_name == void 0 ? void 0 : val.vanity_name;
  if (!(val.unshared_at == void 0) && !sdIsString(val.unshared_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "unshared_at" of type "UpdateFolderByIdRequestBodySharedLinkField"',
    });
  }
  const unsharedAt: undefined | DateTime =
    val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
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
  val: UpdateFolderByIdRequestBodyFolderUploadEmailAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateFolderByIdRequestBodyFolderUploadEmailAccessField(
  val: SerializedData
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
  val: UpdateFolderByIdRequestBodyFolderUploadEmailField
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
  val: SerializedData
): UpdateFolderByIdRequestBodyFolderUploadEmailField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateFolderByIdRequestBodyFolderUploadEmailField"',
    });
  }
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
  val: UpdateFolderByIdRequestBodyCollectionsField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']: val.type == void 0 ? void 0 : val.type,
  };
}
export function deserializeUpdateFolderByIdRequestBodyCollectionsField(
  val: SerializedData
): UpdateFolderByIdRequestBodyCollectionsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateFolderByIdRequestBodyCollectionsField"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "UpdateFolderByIdRequestBodyCollectionsField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  if (!(val.type == void 0) && !sdIsString(val.type)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "type" of type "UpdateFolderByIdRequestBodyCollectionsField"',
    });
  }
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  return {
    id: id,
    type: type,
  } satisfies UpdateFolderByIdRequestBodyCollectionsField;
}
export function serializeUpdateFolderByIdRequestBody(
  val: UpdateFolderByIdRequestBody
): SerializedData {
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
        : (val.tags.map(function (item: string): SerializedData {
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
          ): SerializedData {
            return serializeUpdateFolderByIdRequestBodyCollectionsField(item);
          }) as readonly any[]),
    ['can_non_owners_view_collaborators']:
      val.canNonOwnersViewCollaborators == void 0
        ? void 0
        : val.canNonOwnersViewCollaborators,
  };
}
export function deserializeUpdateFolderByIdRequestBody(
  val: SerializedData
): UpdateFolderByIdRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateFolderByIdRequestBody"',
    });
  }
  if (!(val.name == void 0) && !sdIsString(val.name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "name" of type "UpdateFolderByIdRequestBody"',
    });
  }
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  if (!(val.description == void 0) && !sdIsString(val.description)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "description" of type "UpdateFolderByIdRequestBody"',
    });
  }
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const syncState: undefined | UpdateFolderByIdRequestBodySyncStateField =
    val.sync_state == void 0
      ? void 0
      : deserializeUpdateFolderByIdRequestBodySyncStateField(val.sync_state);
  if (
    !(val.can_non_owners_invite == void 0) &&
    !sdIsBoolean(val.can_non_owners_invite)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_non_owners_invite" of type "UpdateFolderByIdRequestBody"',
    });
  }
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
  if (!(val.tags == void 0) && !sdIsList(val.tags)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "tags" of type "UpdateFolderByIdRequestBody"',
    });
  }
  const tags: undefined | readonly string[] =
    val.tags == void 0
      ? void 0
      : sdIsList(val.tags)
      ? (val.tags.map(function (itm: SerializedData): string {
          if (!sdIsString(itm)) {
            throw new BoxSdkError({
              message: 'Expecting string for "UpdateFolderByIdRequestBody"',
            });
          }
          return itm;
        }) as readonly any[])
      : [];
  if (
    !(val.is_collaboration_restricted_to_enterprise == void 0) &&
    !sdIsBoolean(val.is_collaboration_restricted_to_enterprise)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_collaboration_restricted_to_enterprise" of type "UpdateFolderByIdRequestBody"',
    });
  }
  const isCollaborationRestrictedToEnterprise: undefined | boolean =
    val.is_collaboration_restricted_to_enterprise == void 0
      ? void 0
      : val.is_collaboration_restricted_to_enterprise;
  if (!(val.collections == void 0) && !sdIsList(val.collections)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "collections" of type "UpdateFolderByIdRequestBody"',
    });
  }
  const collections:
    | undefined
    | readonly UpdateFolderByIdRequestBodyCollectionsField[] =
    val.collections == void 0
      ? void 0
      : sdIsList(val.collections)
      ? (val.collections.map(function (
          itm: SerializedData
        ): UpdateFolderByIdRequestBodyCollectionsField {
          return deserializeUpdateFolderByIdRequestBodyCollectionsField(itm);
        }) as readonly any[])
      : [];
  if (
    !(val.can_non_owners_view_collaborators == void 0) &&
    !sdIsBoolean(val.can_non_owners_view_collaborators)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_non_owners_view_collaborators" of type "UpdateFolderByIdRequestBody"',
    });
  }
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
  val: GetFolderItemsQueryParamsSortField
): SerializedData {
  return val;
}
export function deserializeGetFolderItemsQueryParamsSortField(
  val: SerializedData
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
  val: GetFolderItemsQueryParamsDirectionField
): SerializedData {
  return val;
}
export function deserializeGetFolderItemsQueryParamsDirectionField(
  val: SerializedData
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
  val: CreateFolderRequestBodyParentField
): SerializedData {
  return { ['id']: val.id };
}
export function deserializeCreateFolderRequestBodyParentField(
  val: SerializedData
): CreateFolderRequestBodyParentField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CreateFolderRequestBodyParentField"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "CreateFolderRequestBodyParentField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "CreateFolderRequestBodyParentField"',
    });
  }
  const id: string = val.id;
  return { id: id } satisfies CreateFolderRequestBodyParentField;
}
export function serializeCreateFolderRequestBodyFolderUploadEmailAccessField(
  val: CreateFolderRequestBodyFolderUploadEmailAccessField
): SerializedData {
  return val;
}
export function deserializeCreateFolderRequestBodyFolderUploadEmailAccessField(
  val: SerializedData
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
  val: CreateFolderRequestBodyFolderUploadEmailField
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
  val: SerializedData
): CreateFolderRequestBodyFolderUploadEmailField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateFolderRequestBodyFolderUploadEmailField"',
    });
  }
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
  val: CreateFolderRequestBodySyncStateField
): SerializedData {
  return val;
}
export function deserializeCreateFolderRequestBodySyncStateField(
  val: SerializedData
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
export function serializeCreateFolderRequestBody(
  val: CreateFolderRequestBody
): SerializedData {
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
  val: SerializedData
): CreateFolderRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CreateFolderRequestBody"',
    });
  }
  if (val.name == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "name" of type "CreateFolderRequestBody" to be defined',
    });
  }
  if (!sdIsString(val.name)) {
    throw new BoxSdkError({
      message: 'Expecting string for "name" of type "CreateFolderRequestBody"',
    });
  }
  const name: string = val.name;
  if (val.parent == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "parent" of type "CreateFolderRequestBody" to be defined',
    });
  }
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
  val: CopyFolderRequestBodyParentField
): SerializedData {
  return { ['id']: val.id };
}
export function deserializeCopyFolderRequestBodyParentField(
  val: SerializedData
): CopyFolderRequestBodyParentField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CopyFolderRequestBodyParentField"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "CopyFolderRequestBodyParentField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "CopyFolderRequestBodyParentField"',
    });
  }
  const id: string = val.id;
  return { id: id } satisfies CopyFolderRequestBodyParentField;
}
export function serializeCopyFolderRequestBody(
  val: CopyFolderRequestBody
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['parent']: serializeCopyFolderRequestBodyParentField(val.parent),
  };
}
export function deserializeCopyFolderRequestBody(
  val: SerializedData
): CopyFolderRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CopyFolderRequestBody"',
    });
  }
  if (!(val.name == void 0) && !sdIsString(val.name)) {
    throw new BoxSdkError({
      message: 'Expecting string for "name" of type "CopyFolderRequestBody"',
    });
  }
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  if (val.parent == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "parent" of type "CopyFolderRequestBody" to be defined',
    });
  }
  const parent: CopyFolderRequestBodyParentField =
    deserializeCopyFolderRequestBodyParentField(val.parent);
  return { name: name, parent: parent } satisfies CopyFolderRequestBody;
}
