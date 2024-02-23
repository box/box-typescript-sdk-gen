import { serializeWebLink } from '../schemas.generated.js';
import { deserializeWebLink } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { WebLink } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { sdToJson } from '../serialization/json.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface CreateWebLinkRequestBodyParentField {
  readonly id: string;
}
export interface CreateWebLinkRequestBody {
  readonly url: string;
  readonly parent: CreateWebLinkRequestBodyParentField;
  readonly name?: string;
  readonly description?: string;
}
export class CreateWebLinkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateWebLinkHeaders, 'extraHeaders'>
      | Partial<Pick<CreateWebLinkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetWebLinkByIdHeaders {
  readonly boxapi?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetWebLinkByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetWebLinkByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateWebLinkByIdRequestBodyParentField {
  readonly id?: string;
}
export type UpdateWebLinkByIdRequestBodySharedLinkAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface UpdateWebLinkByIdRequestBodySharedLinkField {
  readonly access?: UpdateWebLinkByIdRequestBodySharedLinkAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
}
export interface UpdateWebLinkByIdRequestBody {
  readonly url?: string;
  readonly parent?: UpdateWebLinkByIdRequestBodyParentField;
  readonly name?: string;
  readonly description?: string;
  readonly sharedLink?: UpdateWebLinkByIdRequestBodySharedLinkField;
}
export class UpdateWebLinkByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateWebLinkByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateWebLinkByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteWebLinkByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteWebLinkByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteWebLinkByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class WebLinksManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          WebLinksManager,
          | 'networkSession'
          | 'createWebLink'
          | 'getWebLinkById'
          | 'updateWebLinkById'
          | 'deleteWebLinkById'
        >
      | Partial<Pick<WebLinksManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async createWebLink(
    requestBody: CreateWebLinkRequestBody,
    headers: CreateWebLinkHeaders = new CreateWebLinkHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<WebLink> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/web_links') as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateWebLinkRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWebLink(response.data);
  }
  async getWebLinkById(
    webLinkId: string,
    headers: GetWebLinkByIdHeaders = new GetWebLinkByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<WebLink> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{ ['boxapi']: toString(headers.boxapi) as string },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/web_links/',
        toString(webLinkId) as string
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWebLink(response.data);
  }
  async updateWebLinkById(
    webLinkId: string,
    requestBody: UpdateWebLinkByIdRequestBody = {} satisfies UpdateWebLinkByIdRequestBody,
    headers: UpdateWebLinkByIdHeaders = new UpdateWebLinkByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<WebLink> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/web_links/',
        toString(webLinkId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateWebLinkByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWebLink(response.data);
  }
  async deleteWebLinkById(
    webLinkId: string,
    headers: DeleteWebLinkByIdHeaders = new DeleteWebLinkByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/web_links/',
        toString(webLinkId) as string
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
}
export function serializeCreateWebLinkRequestBodyParentField(
  val: CreateWebLinkRequestBodyParentField
): SerializedData {
  return { ['id']: val.id };
}
export function deserializeCreateWebLinkRequestBodyParentField(
  val: any
): CreateWebLinkRequestBodyParentField {
  const id: string = val.id;
  return { id: id } satisfies CreateWebLinkRequestBodyParentField;
}
export function serializeCreateWebLinkRequestBody(
  val: CreateWebLinkRequestBody
): SerializedData {
  return {
    ['url']: val.url,
    ['parent']: serializeCreateWebLinkRequestBodyParentField(val.parent),
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['description']: val.description == void 0 ? void 0 : val.description,
  };
}
export function deserializeCreateWebLinkRequestBody(
  val: any
): CreateWebLinkRequestBody {
  const url: string = val.url;
  const parent: CreateWebLinkRequestBodyParentField =
    deserializeCreateWebLinkRequestBodyParentField(val.parent);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  return {
    url: url,
    parent: parent,
    name: name,
    description: description,
  } satisfies CreateWebLinkRequestBody;
}
export function serializeUpdateWebLinkByIdRequestBodyParentField(
  val: UpdateWebLinkByIdRequestBodyParentField
): SerializedData {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeUpdateWebLinkByIdRequestBodyParentField(
  val: any
): UpdateWebLinkByIdRequestBodyParentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies UpdateWebLinkByIdRequestBodyParentField;
}
export function serializeUpdateWebLinkByIdRequestBodySharedLinkAccessField(
  val: UpdateWebLinkByIdRequestBodySharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeUpdateWebLinkByIdRequestBodySharedLinkAccessField(
  val: any
): UpdateWebLinkByIdRequestBodySharedLinkAccessField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateWebLinkByIdRequestBodySharedLinkAccessField"',
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
export function serializeUpdateWebLinkByIdRequestBodySharedLinkField(
  val: UpdateWebLinkByIdRequestBodySharedLinkField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateWebLinkByIdRequestBodySharedLinkAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
  };
}
export function deserializeUpdateWebLinkByIdRequestBodySharedLinkField(
  val: any
): UpdateWebLinkByIdRequestBodySharedLinkField {
  const access: undefined | UpdateWebLinkByIdRequestBodySharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateWebLinkByIdRequestBodySharedLinkAccessField(
          val.access
        );
  const password: undefined | string =
    val.password == void 0 ? void 0 : val.password;
  const vanityName: undefined | string =
    val.vanity_name == void 0 ? void 0 : val.vanity_name;
  const unsharedAt: undefined | string =
    val.unshared_at == void 0 ? void 0 : val.unshared_at;
  return {
    access: access,
    password: password,
    vanityName: vanityName,
    unsharedAt: unsharedAt,
  } satisfies UpdateWebLinkByIdRequestBodySharedLinkField;
}
export function serializeUpdateWebLinkByIdRequestBody(
  val: UpdateWebLinkByIdRequestBody
): SerializedData {
  return {
    ['url']: val.url == void 0 ? void 0 : val.url,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializeUpdateWebLinkByIdRequestBodyParentField(val.parent),
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateWebLinkByIdRequestBodySharedLinkField(val.sharedLink),
  };
}
export function deserializeUpdateWebLinkByIdRequestBody(
  val: any
): UpdateWebLinkByIdRequestBody {
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  const parent: undefined | UpdateWebLinkByIdRequestBodyParentField =
    val.parent == void 0
      ? void 0
      : deserializeUpdateWebLinkByIdRequestBodyParentField(val.parent);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const sharedLink: undefined | UpdateWebLinkByIdRequestBodySharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateWebLinkByIdRequestBodySharedLinkField(val.shared_link);
  return {
    url: url,
    parent: parent,
    name: name,
    description: description,
    sharedLink: sharedLink,
  } satisfies UpdateWebLinkByIdRequestBody;
}
