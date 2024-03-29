import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { FileFull } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
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
export interface FindFileForSharedLinkQueryParams {
  readonly fields?: readonly string[];
}
export class FindFileForSharedLinkHeaders {
  readonly ifNoneMatch?: string;
  readonly boxapi!: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<FindFileForSharedLinkHeaders, 'extraHeaders'>
      | Partial<Pick<FindFileForSharedLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetSharedLinkForFileQueryParams {
  readonly fields: string;
}
export class GetSharedLinkForFileHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetSharedLinkForFileHeaders, 'extraHeaders'>
      | Partial<Pick<GetSharedLinkForFileHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type AddShareLinkToFileRequestBodySharedLinkAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface AddShareLinkToFileRequestBodySharedLinkPermissionsField {
  readonly canDownload?: boolean;
  readonly canPreview?: boolean;
  readonly canEdit?: boolean;
}
export interface AddShareLinkToFileRequestBodySharedLinkField {
  readonly access?: AddShareLinkToFileRequestBodySharedLinkAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: AddShareLinkToFileRequestBodySharedLinkPermissionsField;
}
export interface AddShareLinkToFileRequestBody {
  readonly sharedLink?: AddShareLinkToFileRequestBodySharedLinkField;
}
export interface AddShareLinkToFileQueryParams {
  readonly fields: string;
}
export class AddShareLinkToFileHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<AddShareLinkToFileHeaders, 'extraHeaders'>
      | Partial<Pick<AddShareLinkToFileHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateSharedLinkOnFileRequestBodySharedLinkAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField {
  readonly canDownload?: boolean;
  readonly canPreview?: boolean;
  readonly canEdit?: boolean;
}
export interface UpdateSharedLinkOnFileRequestBodySharedLinkField {
  readonly access?: UpdateSharedLinkOnFileRequestBodySharedLinkAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField;
}
export interface UpdateSharedLinkOnFileRequestBody {
  readonly sharedLink?: UpdateSharedLinkOnFileRequestBodySharedLinkField;
}
export interface UpdateSharedLinkOnFileQueryParams {
  readonly fields: string;
}
export class UpdateSharedLinkOnFileHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateSharedLinkOnFileHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateSharedLinkOnFileHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface RemoveSharedLinkFromFileRequestBodySharedLinkField {}
export interface RemoveSharedLinkFromFileRequestBody {
  readonly sharedLink?: RemoveSharedLinkFromFileRequestBodySharedLinkField;
}
export interface RemoveSharedLinkFromFileQueryParams {
  readonly fields: string;
}
export class RemoveSharedLinkFromFileHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<RemoveSharedLinkFromFileHeaders, 'extraHeaders'>
      | Partial<Pick<RemoveSharedLinkFromFileHeaders, 'extraHeaders'>>
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
          | 'findFileForSharedLink'
          | 'getSharedLinkForFile'
          | 'addShareLinkToFile'
          | 'updateSharedLinkOnFile'
          | 'removeSharedLinkFromFile'
        >
      | Partial<Pick<SharedLinksFilesManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async findFileForSharedLink(
    queryParams: FindFileForSharedLinkQueryParams = {} satisfies FindFileForSharedLinkQueryParams,
    headers: FindFileForSharedLinkHeaders,
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
  async getSharedLinkForFile(
    fileId: string,
    queryParams: GetSharedLinkForFileQueryParams,
    headers: GetSharedLinkForFileHeaders = new GetSharedLinkForFileHeaders({}),
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
  async addShareLinkToFile(
    fileId: string,
    requestBody: AddShareLinkToFileRequestBody = {} satisfies AddShareLinkToFileRequestBody,
    queryParams: AddShareLinkToFileQueryParams,
    headers: AddShareLinkToFileHeaders = new AddShareLinkToFileHeaders({}),
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
        data: serializeAddShareLinkToFileRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFileFull(response.data);
  }
  async updateSharedLinkOnFile(
    fileId: string,
    requestBody: UpdateSharedLinkOnFileRequestBody = {} satisfies UpdateSharedLinkOnFileRequestBody,
    queryParams: UpdateSharedLinkOnFileQueryParams,
    headers: UpdateSharedLinkOnFileHeaders = new UpdateSharedLinkOnFileHeaders(
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
        data: serializeUpdateSharedLinkOnFileRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFileFull(response.data);
  }
  async removeSharedLinkFromFile(
    fileId: string,
    requestBody: RemoveSharedLinkFromFileRequestBody = {} satisfies RemoveSharedLinkFromFileRequestBody,
    queryParams: RemoveSharedLinkFromFileQueryParams,
    headers: RemoveSharedLinkFromFileHeaders = new RemoveSharedLinkFromFileHeaders(
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
        data: serializeRemoveSharedLinkFromFileRequestBody(requestBody),
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
export function serializeAddShareLinkToFileRequestBodySharedLinkAccessField(
  val: any
): SerializedData {
  return val;
}
export function deserializeAddShareLinkToFileRequestBodySharedLinkAccessField(
  val: any
): AddShareLinkToFileRequestBodySharedLinkAccessField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "AddShareLinkToFileRequestBodySharedLinkAccessField"',
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
export function serializeAddShareLinkToFileRequestBodySharedLinkPermissionsField(
  val: any
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeAddShareLinkToFileRequestBodySharedLinkPermissionsField(
  val: any
): AddShareLinkToFileRequestBodySharedLinkPermissionsField {
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
  } satisfies AddShareLinkToFileRequestBodySharedLinkPermissionsField;
}
export function serializeAddShareLinkToFileRequestBodySharedLinkField(
  val: any
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeAddShareLinkToFileRequestBodySharedLinkAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeAddShareLinkToFileRequestBodySharedLinkPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeAddShareLinkToFileRequestBodySharedLinkField(
  val: any
): AddShareLinkToFileRequestBodySharedLinkField {
  const access: undefined | AddShareLinkToFileRequestBodySharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeAddShareLinkToFileRequestBodySharedLinkAccessField(
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
    | AddShareLinkToFileRequestBodySharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeAddShareLinkToFileRequestBodySharedLinkPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies AddShareLinkToFileRequestBodySharedLinkField;
}
export function serializeAddShareLinkToFileRequestBody(
  val: any
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeAddShareLinkToFileRequestBodySharedLinkField(val.sharedLink),
  };
}
export function deserializeAddShareLinkToFileRequestBody(
  val: any
): AddShareLinkToFileRequestBody {
  const sharedLink: undefined | AddShareLinkToFileRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeAddShareLinkToFileRequestBodySharedLinkField(
          val.shared_link
        );
  return { sharedLink: sharedLink } satisfies AddShareLinkToFileRequestBody;
}
export function serializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField(
  val: any
): UpdateSharedLinkOnFileRequestBodySharedLinkAccessField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateSharedLinkOnFileRequestBodySharedLinkAccessField"',
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
export function serializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField(
  val: any
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField(
  val: any
): UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField {
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
  } satisfies UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField;
}
export function serializeUpdateSharedLinkOnFileRequestBodySharedLinkField(
  val: any
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateSharedLinkOnFileRequestBodySharedLinkField(
  val: any
): UpdateSharedLinkOnFileRequestBodySharedLinkField {
  const access:
    | undefined
    | UpdateSharedLinkOnFileRequestBodySharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField(
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
    | UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies UpdateSharedLinkOnFileRequestBodySharedLinkField;
}
export function serializeUpdateSharedLinkOnFileRequestBody(
  val: any
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateSharedLinkOnFileRequestBodySharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateSharedLinkOnFileRequestBody(
  val: any
): UpdateSharedLinkOnFileRequestBody {
  const sharedLink:
    | undefined
    | UpdateSharedLinkOnFileRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateSharedLinkOnFileRequestBodySharedLinkField(
          val.shared_link
        );
  return { sharedLink: sharedLink } satisfies UpdateSharedLinkOnFileRequestBody;
}
export function serializeRemoveSharedLinkFromFileRequestBodySharedLinkField(
  val: any
): SerializedData {
  return {};
}
export function deserializeRemoveSharedLinkFromFileRequestBodySharedLinkField(
  val: any
): RemoveSharedLinkFromFileRequestBodySharedLinkField {
  return {} satisfies RemoveSharedLinkFromFileRequestBodySharedLinkField;
}
export function serializeRemoveSharedLinkFromFileRequestBody(
  val: any
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeRemoveSharedLinkFromFileRequestBodySharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeRemoveSharedLinkFromFileRequestBody(
  val: any
): RemoveSharedLinkFromFileRequestBody {
  const sharedLink:
    | undefined
    | RemoveSharedLinkFromFileRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeRemoveSharedLinkFromFileRequestBodySharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies RemoveSharedLinkFromFileRequestBody;
}
