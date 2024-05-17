import { serializeFolderFull } from '../schemas/folderFull.generated.js';
import { deserializeFolderFull } from '../schemas/folderFull.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FolderFull } from '../schemas/folderFull.generated.js';
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
export class FindFolderForSharedLinkOptionals {
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<FindFolderForSharedLinkOptionals, 'cancellationToken'> &
      Partial<Pick<FindFolderForSharedLinkOptionals, 'cancellationToken'>>
  ) {
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface FindFolderForSharedLinkOptionalsInput {
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetSharedLinkForFolderOptionals {
  readonly headers: GetSharedLinkForFolderHeaders =
    new GetSharedLinkForFolderHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetSharedLinkForFolderOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetSharedLinkForFolderOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetSharedLinkForFolderOptionalsInput {
  readonly headers?: GetSharedLinkForFolderHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class AddShareLinkToFolderOptionals {
  readonly headers: AddShareLinkToFolderHeaders =
    new AddShareLinkToFolderHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      AddShareLinkToFolderOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<AddShareLinkToFolderOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface AddShareLinkToFolderOptionalsInput {
  readonly headers?: AddShareLinkToFolderHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateSharedLinkOnFolderOptionals {
  readonly headers: UpdateSharedLinkOnFolderHeaders =
    new UpdateSharedLinkOnFolderHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateSharedLinkOnFolderOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<UpdateSharedLinkOnFolderOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface UpdateSharedLinkOnFolderOptionalsInput {
  readonly headers?: UpdateSharedLinkOnFolderHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class RemoveSharedLinkFromFolderOptionals {
  readonly headers: RemoveSharedLinkFromFolderHeaders =
    new RemoveSharedLinkFromFolderHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      RemoveSharedLinkFromFolderOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          RemoveSharedLinkFromFolderOptionals,
          'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface RemoveSharedLinkFromFolderOptionalsInput {
  readonly headers?: RemoveSharedLinkFromFolderHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface FindFolderForSharedLinkQueryParams {
  readonly fields?: readonly string[];
}
export class FindFolderForSharedLinkHeaders {
  readonly ifNoneMatch?: string;
  readonly boxapi!: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<FindFolderForSharedLinkHeaders, 'extraHeaders'> &
      Partial<Pick<FindFolderForSharedLinkHeaders, 'extraHeaders'>>
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
export interface FindFolderForSharedLinkHeadersInput {
  readonly ifNoneMatch?: string;
  readonly boxapi: string;
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetSharedLinkForFolderQueryParams {
  readonly fields: string;
}
export class GetSharedLinkForFolderHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetSharedLinkForFolderHeaders, 'extraHeaders'> &
      Partial<Pick<GetSharedLinkForFolderHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetSharedLinkForFolderHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type AddShareLinkToFolderRequestBodySharedLinkAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface AddShareLinkToFolderRequestBodySharedLinkPermissionsField {
  readonly canDownload?: boolean;
  readonly canPreview?: boolean;
  readonly canEdit?: boolean;
}
export interface AddShareLinkToFolderRequestBodySharedLinkField {
  readonly access?: AddShareLinkToFolderRequestBodySharedLinkAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: DateTime;
  readonly permissions?: AddShareLinkToFolderRequestBodySharedLinkPermissionsField;
}
export interface AddShareLinkToFolderRequestBody {
  readonly sharedLink?: AddShareLinkToFolderRequestBodySharedLinkField;
}
export interface AddShareLinkToFolderQueryParams {
  readonly fields: string;
}
export class AddShareLinkToFolderHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<AddShareLinkToFolderHeaders, 'extraHeaders'> &
      Partial<Pick<AddShareLinkToFolderHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface AddShareLinkToFolderHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField {
  readonly canDownload?: boolean;
  readonly canPreview?: boolean;
  readonly canEdit?: boolean;
}
export interface UpdateSharedLinkOnFolderRequestBodySharedLinkField {
  readonly access?: UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: DateTime;
  readonly permissions?: UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField;
}
export interface UpdateSharedLinkOnFolderRequestBody {
  readonly sharedLink?: UpdateSharedLinkOnFolderRequestBodySharedLinkField;
}
export interface UpdateSharedLinkOnFolderQueryParams {
  readonly fields: string;
}
export class UpdateSharedLinkOnFolderHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateSharedLinkOnFolderHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateSharedLinkOnFolderHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateSharedLinkOnFolderHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface RemoveSharedLinkFromFolderRequestBodySharedLinkField {}
export interface RemoveSharedLinkFromFolderRequestBody {
  readonly sharedLink?: RemoveSharedLinkFromFolderRequestBodySharedLinkField;
}
export interface RemoveSharedLinkFromFolderQueryParams {
  readonly fields: string;
}
export class RemoveSharedLinkFromFolderHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<RemoveSharedLinkFromFolderHeaders, 'extraHeaders'> &
      Partial<Pick<RemoveSharedLinkFromFolderHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface RemoveSharedLinkFromFolderHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class SharedLinksFoldersManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      SharedLinksFoldersManager,
      | 'networkSession'
      | 'findFolderForSharedLink'
      | 'getSharedLinkForFolder'
      | 'addShareLinkToFolder'
      | 'updateSharedLinkOnFolder'
      | 'removeSharedLinkFromFolder'
    > &
      Partial<Pick<SharedLinksFoldersManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async findFolderForSharedLink(
    queryParams: FindFolderForSharedLinkQueryParams = {} satisfies FindFolderForSharedLinkQueryParams,
    headersInput: FindFolderForSharedLinkHeadersInput,
    optionalsInput: FindFolderForSharedLinkOptionalsInput = {}
  ): Promise<FolderFull> {
    const headers: FindFolderForSharedLinkHeaders =
      new FindFolderForSharedLinkHeaders({
        ifNoneMatch: headersInput.ifNoneMatch,
        boxapi: headersInput.boxapi,
        extraHeaders: headersInput.extraHeaders,
      });
    const optionals: FindFolderForSharedLinkOptionals =
      new FindFolderForSharedLinkOptionals({
        cancellationToken: optionalsInput.cancellationToken,
      });
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
      },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/shared_items#folders'
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
  async getSharedLinkForFolder(
    folderId: string,
    queryParams: GetSharedLinkForFolderQueryParams,
    optionalsInput: GetSharedLinkForFolderOptionalsInput = {}
  ): Promise<FolderFull> {
    const optionals: GetSharedLinkForFolderOptionals =
      new GetSharedLinkForFolderOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) as string });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/folders/',
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
  async addShareLinkToFolder(
    folderId: string,
    requestBody: AddShareLinkToFolderRequestBody = {} satisfies AddShareLinkToFolderRequestBody,
    queryParams: AddShareLinkToFolderQueryParams,
    optionalsInput: AddShareLinkToFolderOptionalsInput = {}
  ): Promise<FolderFull> {
    const optionals: AddShareLinkToFolderOptionals =
      new AddShareLinkToFolderOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) as string });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/folders/',
        toString(folderId) as string,
        '#add_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeAddShareLinkToFolderRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFolderFull(response.data);
  }
  async updateSharedLinkOnFolder(
    folderId: string,
    requestBody: UpdateSharedLinkOnFolderRequestBody = {} satisfies UpdateSharedLinkOnFolderRequestBody,
    queryParams: UpdateSharedLinkOnFolderQueryParams,
    optionalsInput: UpdateSharedLinkOnFolderOptionalsInput = {}
  ): Promise<FolderFull> {
    const optionals: UpdateSharedLinkOnFolderOptionals =
      new UpdateSharedLinkOnFolderOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) as string });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/folders/',
        toString(folderId) as string,
        '#update_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateSharedLinkOnFolderRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFolderFull(response.data);
  }
  async removeSharedLinkFromFolder(
    folderId: string,
    requestBody: RemoveSharedLinkFromFolderRequestBody = {} satisfies RemoveSharedLinkFromFolderRequestBody,
    queryParams: RemoveSharedLinkFromFolderQueryParams,
    optionalsInput: RemoveSharedLinkFromFolderOptionalsInput = {}
  ): Promise<FolderFull> {
    const optionals: RemoveSharedLinkFromFolderOptionals =
      new RemoveSharedLinkFromFolderOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) as string });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/folders/',
        toString(folderId) as string,
        '#remove_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeRemoveSharedLinkFromFolderRequestBody(requestBody),
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
export interface SharedLinksFoldersManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeAddShareLinkToFolderRequestBodySharedLinkAccessField(
  val: AddShareLinkToFolderRequestBodySharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeAddShareLinkToFolderRequestBodySharedLinkAccessField(
  val: SerializedData
): AddShareLinkToFolderRequestBodySharedLinkAccessField {
  if (val == 'open') {
    return val;
  }
  if (val == 'company') {
    return val;
  }
  if (val == 'collaborators') {
    return val;
  }
  throw new BoxSdkError({
    message:
      "Can't deserialize AddShareLinkToFolderRequestBodySharedLinkAccessField",
  });
}
export function serializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField(
  val: AddShareLinkToFolderRequestBodySharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField(
  val: SerializedData
): AddShareLinkToFolderRequestBodySharedLinkPermissionsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "AddShareLinkToFolderRequestBodySharedLinkPermissionsField"',
    });
  }
  if (!(val.can_download == void 0) && !sdIsBoolean(val.can_download)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_download" of type "AddShareLinkToFolderRequestBodySharedLinkPermissionsField"',
    });
  }
  const canDownload: undefined | boolean =
    val.can_download == void 0 ? void 0 : val.can_download;
  if (!(val.can_preview == void 0) && !sdIsBoolean(val.can_preview)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_preview" of type "AddShareLinkToFolderRequestBodySharedLinkPermissionsField"',
    });
  }
  const canPreview: undefined | boolean =
    val.can_preview == void 0 ? void 0 : val.can_preview;
  if (!(val.can_edit == void 0) && !sdIsBoolean(val.can_edit)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_edit" of type "AddShareLinkToFolderRequestBodySharedLinkPermissionsField"',
    });
  }
  const canEdit: undefined | boolean =
    val.can_edit == void 0 ? void 0 : val.can_edit;
  return {
    canDownload: canDownload,
    canPreview: canPreview,
    canEdit: canEdit,
  } satisfies AddShareLinkToFolderRequestBodySharedLinkPermissionsField;
}
export function serializeAddShareLinkToFolderRequestBodySharedLinkField(
  val: AddShareLinkToFolderRequestBodySharedLinkField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeAddShareLinkToFolderRequestBodySharedLinkAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']:
      val.unsharedAt == void 0 ? void 0 : serializeDateTime(val.unsharedAt),
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeAddShareLinkToFolderRequestBodySharedLinkField(
  val: SerializedData
): AddShareLinkToFolderRequestBodySharedLinkField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "AddShareLinkToFolderRequestBodySharedLinkField"',
    });
  }
  const access:
    | undefined
    | AddShareLinkToFolderRequestBodySharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeAddShareLinkToFolderRequestBodySharedLinkAccessField(
          val.access
        );
  if (!(val.password == void 0) && !sdIsString(val.password)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "password" of type "AddShareLinkToFolderRequestBodySharedLinkField"',
    });
  }
  const password: undefined | string =
    val.password == void 0 ? void 0 : val.password;
  if (!(val.vanity_name == void 0) && !sdIsString(val.vanity_name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "vanity_name" of type "AddShareLinkToFolderRequestBodySharedLinkField"',
    });
  }
  const vanityName: undefined | string =
    val.vanity_name == void 0 ? void 0 : val.vanity_name;
  if (!(val.unshared_at == void 0) && !sdIsString(val.unshared_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "unshared_at" of type "AddShareLinkToFolderRequestBodySharedLinkField"',
    });
  }
  const unsharedAt: undefined | DateTime =
    val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
  const permissions:
    | undefined
    | AddShareLinkToFolderRequestBodySharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies AddShareLinkToFolderRequestBodySharedLinkField;
}
export function serializeAddShareLinkToFolderRequestBody(
  val: AddShareLinkToFolderRequestBody
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeAddShareLinkToFolderRequestBodySharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeAddShareLinkToFolderRequestBody(
  val: SerializedData
): AddShareLinkToFolderRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AddShareLinkToFolderRequestBody"',
    });
  }
  const sharedLink: undefined | AddShareLinkToFolderRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeAddShareLinkToFolderRequestBodySharedLinkField(
          val.shared_link
        );
  return { sharedLink: sharedLink } satisfies AddShareLinkToFolderRequestBody;
}
export function serializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField(
  val: UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField(
  val: SerializedData
): UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField {
  if (val == 'open') {
    return val;
  }
  if (val == 'company') {
    return val;
  }
  if (val == 'collaborators') {
    return val;
  }
  throw new BoxSdkError({
    message:
      "Can't deserialize UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField",
  });
}
export function serializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField(
  val: UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField(
  val: SerializedData
): UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField"',
    });
  }
  if (!(val.can_download == void 0) && !sdIsBoolean(val.can_download)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_download" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField"',
    });
  }
  const canDownload: undefined | boolean =
    val.can_download == void 0 ? void 0 : val.can_download;
  if (!(val.can_preview == void 0) && !sdIsBoolean(val.can_preview)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_preview" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField"',
    });
  }
  const canPreview: undefined | boolean =
    val.can_preview == void 0 ? void 0 : val.can_preview;
  if (!(val.can_edit == void 0) && !sdIsBoolean(val.can_edit)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_edit" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField"',
    });
  }
  const canEdit: undefined | boolean =
    val.can_edit == void 0 ? void 0 : val.can_edit;
  return {
    canDownload: canDownload,
    canPreview: canPreview,
    canEdit: canEdit,
  } satisfies UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField;
}
export function serializeUpdateSharedLinkOnFolderRequestBodySharedLinkField(
  val: UpdateSharedLinkOnFolderRequestBodySharedLinkField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']:
      val.unsharedAt == void 0 ? void 0 : serializeDateTime(val.unsharedAt),
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkField(
  val: SerializedData
): UpdateSharedLinkOnFolderRequestBodySharedLinkField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateSharedLinkOnFolderRequestBodySharedLinkField"',
    });
  }
  const access:
    | undefined
    | UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField(
          val.access
        );
  if (!(val.password == void 0) && !sdIsString(val.password)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "password" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkField"',
    });
  }
  const password: undefined | string =
    val.password == void 0 ? void 0 : val.password;
  if (!(val.vanity_name == void 0) && !sdIsString(val.vanity_name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "vanity_name" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkField"',
    });
  }
  const vanityName: undefined | string =
    val.vanity_name == void 0 ? void 0 : val.vanity_name;
  if (!(val.unshared_at == void 0) && !sdIsString(val.unshared_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "unshared_at" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkField"',
    });
  }
  const unsharedAt: undefined | DateTime =
    val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
  const permissions:
    | undefined
    | UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies UpdateSharedLinkOnFolderRequestBodySharedLinkField;
}
export function serializeUpdateSharedLinkOnFolderRequestBody(
  val: UpdateSharedLinkOnFolderRequestBody
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateSharedLinkOnFolderRequestBodySharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateSharedLinkOnFolderRequestBody(
  val: SerializedData
): UpdateSharedLinkOnFolderRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateSharedLinkOnFolderRequestBody"',
    });
  }
  const sharedLink:
    | undefined
    | UpdateSharedLinkOnFolderRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies UpdateSharedLinkOnFolderRequestBody;
}
export function serializeRemoveSharedLinkFromFolderRequestBodySharedLinkField(
  val: RemoveSharedLinkFromFolderRequestBodySharedLinkField
): SerializedData {
  return {};
}
export function deserializeRemoveSharedLinkFromFolderRequestBodySharedLinkField(
  val: SerializedData
): RemoveSharedLinkFromFolderRequestBodySharedLinkField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "RemoveSharedLinkFromFolderRequestBodySharedLinkField"',
    });
  }
  return {} satisfies RemoveSharedLinkFromFolderRequestBodySharedLinkField;
}
export function serializeRemoveSharedLinkFromFolderRequestBody(
  val: RemoveSharedLinkFromFolderRequestBody
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeRemoveSharedLinkFromFolderRequestBodySharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeRemoveSharedLinkFromFolderRequestBody(
  val: SerializedData
): RemoveSharedLinkFromFolderRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "RemoveSharedLinkFromFolderRequestBody"',
    });
  }
  const sharedLink:
    | undefined
    | RemoveSharedLinkFromFolderRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeRemoveSharedLinkFromFolderRequestBodySharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies RemoveSharedLinkFromFolderRequestBody;
}
