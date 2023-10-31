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
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { serializeJson } from '../json.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { isJson } from '../json.js';
export interface CreateWebLinkRequestBodyArgParentField {
  readonly id: string;
}
export interface CreateWebLinkRequestBodyArg {
  readonly url: string;
  readonly parent: CreateWebLinkRequestBodyArgParentField;
  readonly name?: string;
  readonly description?: string;
}
export class CreateWebLinkHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateWebLinkHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateWebLinkHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetWebLinkByIdHeadersArg {
  readonly boxapi?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetWebLinkByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetWebLinkByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateWebLinkByIdRequestBodyArgParentField {
  readonly id?: string;
}
export type UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export interface UpdateWebLinkByIdRequestBodyArgSharedLinkField {
  readonly access?: UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField;
  readonly password?: string;
  readonly vanityName?: string;
  readonly unsharedAt?: string;
}
export interface UpdateWebLinkByIdRequestBodyArg {
  readonly url?: string;
  readonly parent?: UpdateWebLinkByIdRequestBodyArgParentField;
  readonly name?: string;
  readonly description?: string;
  readonly sharedLink?: UpdateWebLinkByIdRequestBodyArgSharedLinkField;
}
export class UpdateWebLinkByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateWebLinkByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateWebLinkByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteWebLinkByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteWebLinkByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteWebLinkByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class WebLinksManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      WebLinksManager,
      | 'createWebLink'
      | 'getWebLinkById'
      | 'updateWebLinkById'
      | 'deleteWebLinkById'
    >
  ) {
    Object.assign(this, fields);
  }
  async createWebLink(
    requestBody: CreateWebLinkRequestBodyArg,
    headers: CreateWebLinkHeadersArg = new CreateWebLinkHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<WebLink> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/web_links') as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(serializeCreateWebLinkRequestBodyArg(requestBody)),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWebLink(deserializeJson(response.text));
  }
  async getWebLinkById(
    webLinkId: string,
    headers: GetWebLinkByIdHeadersArg = new GetWebLinkByIdHeadersArg({}),
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
        'https://api.box.com/2.0/web_links/',
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
    return deserializeWebLink(deserializeJson(response.text));
  }
  async updateWebLinkById(
    webLinkId: string,
    requestBody: UpdateWebLinkByIdRequestBodyArg = {} satisfies UpdateWebLinkByIdRequestBodyArg,
    headers: UpdateWebLinkByIdHeadersArg = new UpdateWebLinkByIdHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<WebLink> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/web_links/',
        toString(webLinkId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        body: serializeJson(
          serializeUpdateWebLinkByIdRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWebLink(deserializeJson(response.text));
  }
  async deleteWebLinkById(
    webLinkId: string,
    headers: DeleteWebLinkByIdHeadersArg = new DeleteWebLinkByIdHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/web_links/',
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
export function serializeCreateWebLinkRequestBodyArgParentField(
  val: CreateWebLinkRequestBodyArgParentField
): Json {
  return { ['id']: val.id };
}
export function deserializeCreateWebLinkRequestBodyArgParentField(
  val: any
): CreateWebLinkRequestBodyArgParentField {
  const id: string = val.id;
  return { id: id } satisfies CreateWebLinkRequestBodyArgParentField;
}
export function serializeCreateWebLinkRequestBodyArg(
  val: CreateWebLinkRequestBodyArg
): Json {
  return {
    ['url']: val.url,
    ['parent']: serializeCreateWebLinkRequestBodyArgParentField(val.parent),
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['description']: val.description == void 0 ? void 0 : val.description,
  };
}
export function deserializeCreateWebLinkRequestBodyArg(
  val: any
): CreateWebLinkRequestBodyArg {
  const url: string = val.url;
  const parent: CreateWebLinkRequestBodyArgParentField =
    deserializeCreateWebLinkRequestBodyArgParentField(val.parent);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  return {
    url: url,
    parent: parent,
    name: name,
    description: description,
  } satisfies CreateWebLinkRequestBodyArg;
}
export function serializeUpdateWebLinkByIdRequestBodyArgParentField(
  val: UpdateWebLinkByIdRequestBodyArgParentField
): Json {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeUpdateWebLinkByIdRequestBodyArgParentField(
  val: any
): UpdateWebLinkByIdRequestBodyArgParentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies UpdateWebLinkByIdRequestBodyArgParentField;
}
export function serializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(
  val: UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField
): Json {
  return val;
}
export function deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(
  val: any
): UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField"';
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
export function serializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(
  val: UpdateWebLinkByIdRequestBodyArgSharedLinkField
): Json {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(
            val.access
          ),
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
  };
}
export function deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(
  val: any
): UpdateWebLinkByIdRequestBodyArgSharedLinkField {
  const access:
    | undefined
    | UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField =
    val.access == void 0
      ? void 0
      : deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(
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
  } satisfies UpdateWebLinkByIdRequestBodyArgSharedLinkField;
}
export function serializeUpdateWebLinkByIdRequestBodyArg(
  val: UpdateWebLinkByIdRequestBodyArg
): Json {
  return {
    ['url']: val.url == void 0 ? void 0 : val.url,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializeUpdateWebLinkByIdRequestBodyArgParentField(val.parent),
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['shared_link']:
      val.sharedLink == void 0
        ? void 0
        : serializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(
            val.sharedLink
          ),
  };
}
export function deserializeUpdateWebLinkByIdRequestBodyArg(
  val: any
): UpdateWebLinkByIdRequestBodyArg {
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  const parent: undefined | UpdateWebLinkByIdRequestBodyArgParentField =
    val.parent == void 0
      ? void 0
      : deserializeUpdateWebLinkByIdRequestBodyArgParentField(val.parent);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const sharedLink: undefined | UpdateWebLinkByIdRequestBodyArgSharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(
          val.shared_link
        );
  return {
    url: url,
    parent: parent,
    name: name,
    description: description,
    sharedLink: sharedLink,
  } satisfies UpdateWebLinkByIdRequestBodyArg;
}
