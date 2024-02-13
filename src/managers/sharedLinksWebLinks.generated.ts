import { serializeWebLink } from '../schemas.generated.js';
import { deserializeWebLink } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { WebLink } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.generated.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { sdToJson } from '../json.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { BoxSdkError } from '../errors.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export interface FindWebLinkForSharedLinkQueryParams {
  readonly fields?: readonly string[];
}
export class FindWebLinkForSharedLinkHeaders {
  readonly ifNoneMatch?: string;
  readonly boxapi!: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<FindWebLinkForSharedLinkHeaders, 'extraHeaders'>
      | Partial<Pick<FindWebLinkForSharedLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetSharedLinkForWebLinkQueryParams {
  readonly fields: string;
}
export class GetSharedLinkForWebLinkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetSharedLinkForWebLinkHeaders, 'extraHeaders'>
      | Partial<Pick<GetSharedLinkForWebLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type AddShareLinkToWebLinkRequestBodySharedLinkAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField {
  readonly canDownload?: boolean;
  readonly canPreview?: boolean;
  readonly canEdit?: boolean;
}
export interface AddShareLinkToWebLinkRequestBodySharedLinkField {
  readonly access?: AddShareLinkToWebLinkRequestBodySharedLinkAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField;
}
export interface AddShareLinkToWebLinkRequestBody {
  readonly sharedLink?: AddShareLinkToWebLinkRequestBodySharedLinkField;
}
export interface AddShareLinkToWebLinkQueryParams {
  readonly fields: string;
}
export class AddShareLinkToWebLinkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<AddShareLinkToWebLinkHeaders, 'extraHeaders'>
      | Partial<Pick<AddShareLinkToWebLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField {
  readonly canDownload?: boolean;
  readonly canPreview?: boolean;
  readonly canEdit?: boolean;
}
export interface UpdateSharedLinkOnWebLinkRequestBodySharedLinkField {
  readonly access?: UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField;
}
export interface UpdateSharedLinkOnWebLinkRequestBody {
  readonly sharedLink?: UpdateSharedLinkOnWebLinkRequestBodySharedLinkField;
}
export interface UpdateSharedLinkOnWebLinkQueryParams {
  readonly fields: string;
}
export class UpdateSharedLinkOnWebLinkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateSharedLinkOnWebLinkHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateSharedLinkOnWebLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface RemoveSharedLinkFromWebLinkRequestBodySharedLinkField {}
export interface RemoveSharedLinkFromWebLinkRequestBody {
  readonly sharedLink?: RemoveSharedLinkFromWebLinkRequestBodySharedLinkField;
}
export interface RemoveSharedLinkFromWebLinkQueryParams {
  readonly fields: string;
}
export class RemoveSharedLinkFromWebLinkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<RemoveSharedLinkFromWebLinkHeaders, 'extraHeaders'>
      | Partial<Pick<RemoveSharedLinkFromWebLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class SharedLinksWebLinksManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          SharedLinksWebLinksManager,
          | 'networkSession'
          | 'findWebLinkForSharedLink'
          | 'getSharedLinkForWebLink'
          | 'addShareLinkToWebLink'
          | 'updateSharedLinkOnWebLink'
          | 'removeSharedLinkFromWebLink'
        >
      | Partial<Pick<SharedLinksWebLinksManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async findWebLinkForSharedLink(
    queryParams: FindWebLinkForSharedLinkQueryParams = {} satisfies FindWebLinkForSharedLinkQueryParams,
    headers: FindWebLinkForSharedLinkHeaders,
    cancellationToken?: CancellationToken
  ): Promise<WebLink> {
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
        '/shared_items#web_links'
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
    return deserializeWebLink(response.data);
  }
  async getSharedLinkForWebLink(
    webLinkId: string,
    queryParams: GetSharedLinkForWebLinkQueryParams,
    headers: GetSharedLinkForWebLinkHeaders = new GetSharedLinkForWebLinkHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<WebLink> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) as string });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/web_links/',
        toString(webLinkId) as string,
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
    return deserializeWebLink(response.data);
  }
  async addShareLinkToWebLink(
    webLinkId: string,
    requestBody: AddShareLinkToWebLinkRequestBody = {} satisfies AddShareLinkToWebLinkRequestBody,
    queryParams: AddShareLinkToWebLinkQueryParams,
    headers: AddShareLinkToWebLinkHeaders = new AddShareLinkToWebLinkHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<WebLink> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) as string });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/web_links/',
        toString(webLinkId) as string,
        '#add_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeAddShareLinkToWebLinkRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWebLink(response.data);
  }
  async updateSharedLinkOnWebLink(
    webLinkId: string,
    requestBody: UpdateSharedLinkOnWebLinkRequestBody = {} satisfies UpdateSharedLinkOnWebLinkRequestBody,
    queryParams: UpdateSharedLinkOnWebLinkQueryParams,
    headers: UpdateSharedLinkOnWebLinkHeaders = new UpdateSharedLinkOnWebLinkHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<WebLink> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) as string });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/web_links/',
        toString(webLinkId) as string,
        '#update_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateSharedLinkOnWebLinkRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWebLink(response.data);
  }
  async removeSharedLinkFromWebLink(
    webLinkId: string,
    requestBody: RemoveSharedLinkFromWebLinkRequestBody = {} satisfies RemoveSharedLinkFromWebLinkRequestBody,
    queryParams: RemoveSharedLinkFromWebLinkQueryParams,
    headers: RemoveSharedLinkFromWebLinkHeaders = new RemoveSharedLinkFromWebLinkHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<WebLink> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) as string });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/web_links/',
        toString(webLinkId) as string,
        '#remove_shared_link'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeRemoveSharedLinkFromWebLinkRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWebLink(response.data);
  }
}
export function serializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField(
  val: AddShareLinkToWebLinkRequestBodySharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField(
  val: any
): AddShareLinkToWebLinkRequestBodySharedLinkAccessField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "AddShareLinkToWebLinkRequestBodySharedLinkAccessField"',
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
export function serializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField(
  val: AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField(
  val: any
): AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField {
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
  } satisfies AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField;
}
export function serializeAddShareLinkToWebLinkRequestBodySharedLinkField(
  val: AddShareLinkToWebLinkRequestBodySharedLinkField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeAddShareLinkToWebLinkRequestBodySharedLinkField(
  val: any
): AddShareLinkToWebLinkRequestBodySharedLinkField {
  const access:
    | undefined
    | AddShareLinkToWebLinkRequestBodySharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField(
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
    | AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies AddShareLinkToWebLinkRequestBodySharedLinkField;
}
export function serializeAddShareLinkToWebLinkRequestBody(
  val: AddShareLinkToWebLinkRequestBody
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeAddShareLinkToWebLinkRequestBodySharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeAddShareLinkToWebLinkRequestBody(
  val: any
): AddShareLinkToWebLinkRequestBody {
  const sharedLink:
    | undefined
    | AddShareLinkToWebLinkRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeAddShareLinkToWebLinkRequestBodySharedLinkField(
          val.shared_link
        );
  return { sharedLink: sharedLink } satisfies AddShareLinkToWebLinkRequestBody;
}
export function serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField(
  val: UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField(
  val: any
): UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField"',
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
export function serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField(
  val: UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField(
  val: any
): UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField {
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
  } satisfies UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField;
}
export function serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField(
  val: UpdateSharedLinkOnWebLinkRequestBodySharedLinkField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField(
  val: any
): UpdateSharedLinkOnWebLinkRequestBodySharedLinkField {
  const access:
    | undefined
    | UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField(
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
    | UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies UpdateSharedLinkOnWebLinkRequestBodySharedLinkField;
}
export function serializeUpdateSharedLinkOnWebLinkRequestBody(
  val: UpdateSharedLinkOnWebLinkRequestBody
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateSharedLinkOnWebLinkRequestBody(
  val: any
): UpdateSharedLinkOnWebLinkRequestBody {
  const sharedLink:
    | undefined
    | UpdateSharedLinkOnWebLinkRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies UpdateSharedLinkOnWebLinkRequestBody;
}
export function serializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField(
  val: RemoveSharedLinkFromWebLinkRequestBodySharedLinkField
): SerializedData {
  return {};
}
export function deserializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField(
  val: any
): RemoveSharedLinkFromWebLinkRequestBodySharedLinkField {
  return {} satisfies RemoveSharedLinkFromWebLinkRequestBodySharedLinkField;
}
export function serializeRemoveSharedLinkFromWebLinkRequestBody(
  val: RemoveSharedLinkFromWebLinkRequestBody
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeRemoveSharedLinkFromWebLinkRequestBody(
  val: any
): RemoveSharedLinkFromWebLinkRequestBody {
  const sharedLink:
    | undefined
    | RemoveSharedLinkFromWebLinkRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies RemoveSharedLinkFromWebLinkRequestBody;
}
