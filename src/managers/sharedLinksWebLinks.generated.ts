import { serializeWebLink } from '../schemas.generated.js';
import { deserializeWebLink } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { WebLink } from '../schemas.generated.js';
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
export interface GetSharedItemWebLinksQueryParams {
  readonly fields?: readonly string[];
}
export class GetSharedItemWebLinksHeaders {
  readonly ifNoneMatch?: string;
  readonly boxapi!: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetSharedItemWebLinksHeaders, 'extraHeaders'>
      | Partial<Pick<GetSharedItemWebLinksHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetWebLinkGetSharedLinkQueryParams {
  readonly fields: string;
}
export class GetWebLinkGetSharedLinkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetWebLinkGetSharedLinkHeaders, 'extraHeaders'>
      | Partial<Pick<GetWebLinkGetSharedLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateWebLinkAddSharedLinkRequestBodySharedLinkAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface UpdateWebLinkAddSharedLinkRequestBodySharedLinkPermissionsField {
  readonly canDownload?: boolean;
  readonly canPreview?: boolean;
  readonly canEdit?: boolean;
}
export interface UpdateWebLinkAddSharedLinkRequestBodySharedLinkField {
  readonly access?: UpdateWebLinkAddSharedLinkRequestBodySharedLinkAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: UpdateWebLinkAddSharedLinkRequestBodySharedLinkPermissionsField;
}
export interface UpdateWebLinkAddSharedLinkRequestBody {
  readonly sharedLink?: UpdateWebLinkAddSharedLinkRequestBodySharedLinkField;
}
export interface UpdateWebLinkAddSharedLinkQueryParams {
  readonly fields: string;
}
export class UpdateWebLinkAddSharedLinkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateWebLinkAddSharedLinkHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateWebLinkAddSharedLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkPermissionsField {
  readonly canDownload?: boolean;
  readonly canPreview?: boolean;
  readonly canEdit?: boolean;
}
export interface UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkField {
  readonly access?: UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
  readonly permissions?: UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkPermissionsField;
}
export interface UpdateWebLinkUpdateSharedLinkRequestBody {
  readonly sharedLink?: UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkField;
}
export interface UpdateWebLinkUpdateSharedLinkQueryParams {
  readonly fields: string;
}
export class UpdateWebLinkUpdateSharedLinkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateWebLinkUpdateSharedLinkHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateWebLinkUpdateSharedLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateWebLinkRemoveSharedLinkRequestBodySharedLinkField {}
export interface UpdateWebLinkRemoveSharedLinkRequestBody {
  readonly sharedLink?: UpdateWebLinkRemoveSharedLinkRequestBodySharedLinkField;
}
export interface UpdateWebLinkRemoveSharedLinkQueryParams {
  readonly fields: string;
}
export class UpdateWebLinkRemoveSharedLinkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateWebLinkRemoveSharedLinkHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateWebLinkRemoveSharedLinkHeaders, 'extraHeaders'>>
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
          | 'getSharedItemWebLinks'
          | 'getWebLinkGetSharedLink'
          | 'updateWebLinkAddSharedLink'
          | 'updateWebLinkUpdateSharedLink'
          | 'updateWebLinkRemoveSharedLink'
        >
      | Partial<Pick<SharedLinksWebLinksManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getSharedItemWebLinks(
    queryParams: GetSharedItemWebLinksQueryParams = {} satisfies GetSharedItemWebLinksQueryParams,
    headers: GetSharedItemWebLinksHeaders,
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
  async getWebLinkGetSharedLink(
    webLinkId: string,
    queryParams: GetWebLinkGetSharedLinkQueryParams,
    headers: GetWebLinkGetSharedLinkHeaders = new GetWebLinkGetSharedLinkHeaders(
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
  async updateWebLinkAddSharedLink(
    webLinkId: string,
    requestBody: UpdateWebLinkAddSharedLinkRequestBody = {} satisfies UpdateWebLinkAddSharedLinkRequestBody,
    queryParams: UpdateWebLinkAddSharedLinkQueryParams,
    headers: UpdateWebLinkAddSharedLinkHeaders = new UpdateWebLinkAddSharedLinkHeaders(
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
        data: serializeUpdateWebLinkAddSharedLinkRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWebLink(response.data);
  }
  async updateWebLinkUpdateSharedLink(
    webLinkId: string,
    requestBody: UpdateWebLinkUpdateSharedLinkRequestBody = {} satisfies UpdateWebLinkUpdateSharedLinkRequestBody,
    queryParams: UpdateWebLinkUpdateSharedLinkQueryParams,
    headers: UpdateWebLinkUpdateSharedLinkHeaders = new UpdateWebLinkUpdateSharedLinkHeaders(
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
        data: serializeUpdateWebLinkUpdateSharedLinkRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWebLink(response.data);
  }
  async updateWebLinkRemoveSharedLink(
    webLinkId: string,
    requestBody: UpdateWebLinkRemoveSharedLinkRequestBody = {} satisfies UpdateWebLinkRemoveSharedLinkRequestBody,
    queryParams: UpdateWebLinkRemoveSharedLinkQueryParams,
    headers: UpdateWebLinkRemoveSharedLinkHeaders = new UpdateWebLinkRemoveSharedLinkHeaders(
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
        data: serializeUpdateWebLinkRemoveSharedLinkRequestBody(requestBody),
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
export function serializeUpdateWebLinkAddSharedLinkRequestBodySharedLinkAccessField(
  val: UpdateWebLinkAddSharedLinkRequestBodySharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateWebLinkAddSharedLinkRequestBodySharedLinkAccessField(
  val: any
): UpdateWebLinkAddSharedLinkRequestBodySharedLinkAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateWebLinkAddSharedLinkRequestBodySharedLinkAccessField"';
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
export function serializeUpdateWebLinkAddSharedLinkRequestBodySharedLinkPermissionsField(
  val: UpdateWebLinkAddSharedLinkRequestBodySharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeUpdateWebLinkAddSharedLinkRequestBodySharedLinkPermissionsField(
  val: any
): UpdateWebLinkAddSharedLinkRequestBodySharedLinkPermissionsField {
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
  } satisfies UpdateWebLinkAddSharedLinkRequestBodySharedLinkPermissionsField;
}
export function serializeUpdateWebLinkAddSharedLinkRequestBodySharedLinkField(
  val: UpdateWebLinkAddSharedLinkRequestBodySharedLinkField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateWebLinkAddSharedLinkRequestBodySharedLinkAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateWebLinkAddSharedLinkRequestBodySharedLinkPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateWebLinkAddSharedLinkRequestBodySharedLinkField(
  val: any
): UpdateWebLinkAddSharedLinkRequestBodySharedLinkField {
  const access:
    | undefined
    | UpdateWebLinkAddSharedLinkRequestBodySharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateWebLinkAddSharedLinkRequestBodySharedLinkAccessField(
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
    | UpdateWebLinkAddSharedLinkRequestBodySharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateWebLinkAddSharedLinkRequestBodySharedLinkPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies UpdateWebLinkAddSharedLinkRequestBodySharedLinkField;
}
export function serializeUpdateWebLinkAddSharedLinkRequestBody(
  val: UpdateWebLinkAddSharedLinkRequestBody
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateWebLinkAddSharedLinkRequestBodySharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateWebLinkAddSharedLinkRequestBody(
  val: any
): UpdateWebLinkAddSharedLinkRequestBody {
  const sharedLink:
    | undefined
    | UpdateWebLinkAddSharedLinkRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateWebLinkAddSharedLinkRequestBodySharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies UpdateWebLinkAddSharedLinkRequestBody;
}
export function serializeUpdateWebLinkUpdateSharedLinkRequestBodySharedLinkAccessField(
  val: UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateWebLinkUpdateSharedLinkRequestBodySharedLinkAccessField(
  val: any
): UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkAccessField"';
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
export function serializeUpdateWebLinkUpdateSharedLinkRequestBodySharedLinkPermissionsField(
  val: UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload == void 0 ? void 0 : val.canDownload,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_edit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeUpdateWebLinkUpdateSharedLinkRequestBodySharedLinkPermissionsField(
  val: any
): UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkPermissionsField {
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
  } satisfies UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkPermissionsField;
}
export function serializeUpdateWebLinkUpdateSharedLinkRequestBodySharedLinkField(
  val: UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateWebLinkUpdateSharedLinkRequestBodySharedLinkAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeUpdateWebLinkUpdateSharedLinkRequestBodySharedLinkPermissionsField(
            val.permissions
          ),
  };
}
export function deserializeUpdateWebLinkUpdateSharedLinkRequestBodySharedLinkField(
  val: any
): UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkField {
  const access:
    | undefined
    | UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateWebLinkUpdateSharedLinkRequestBodySharedLinkAccessField(
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
    | UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeUpdateWebLinkUpdateSharedLinkRequestBodySharedLinkPermissionsField(
          val.permissions
        );
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
    permissions: permissions,
  } satisfies UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkField;
}
export function serializeUpdateWebLinkUpdateSharedLinkRequestBody(
  val: UpdateWebLinkUpdateSharedLinkRequestBody
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateWebLinkUpdateSharedLinkRequestBodySharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateWebLinkUpdateSharedLinkRequestBody(
  val: any
): UpdateWebLinkUpdateSharedLinkRequestBody {
  const sharedLink:
    | undefined
    | UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateWebLinkUpdateSharedLinkRequestBodySharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies UpdateWebLinkUpdateSharedLinkRequestBody;
}
export function serializeUpdateWebLinkRemoveSharedLinkRequestBodySharedLinkField(
  val: UpdateWebLinkRemoveSharedLinkRequestBodySharedLinkField
): SerializedData {
  return {};
}
export function deserializeUpdateWebLinkRemoveSharedLinkRequestBodySharedLinkField(
  val: any
): UpdateWebLinkRemoveSharedLinkRequestBodySharedLinkField {
  return {} satisfies UpdateWebLinkRemoveSharedLinkRequestBodySharedLinkField;
}
export function serializeUpdateWebLinkRemoveSharedLinkRequestBody(
  val: UpdateWebLinkRemoveSharedLinkRequestBody
): SerializedData {
  return {
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateWebLinkRemoveSharedLinkRequestBodySharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateWebLinkRemoveSharedLinkRequestBody(
  val: any
): UpdateWebLinkRemoveSharedLinkRequestBody {
  const sharedLink:
    | undefined
    | UpdateWebLinkRemoveSharedLinkRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateWebLinkRemoveSharedLinkRequestBodySharedLinkField(
          val.shared_link
        );
  return {
    sharedLink: sharedLink,
  } satisfies UpdateWebLinkRemoveSharedLinkRequestBody;
}
