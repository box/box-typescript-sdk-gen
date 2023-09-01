import { serializeTrashWebLinkRestored } from '../schemas.generated.js';
import { deserializeTrashWebLinkRestored } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeTrashWebLink } from '../schemas.generated.js';
import { deserializeTrashWebLink } from '../schemas.generated.js';
import { TrashWebLinkRestored } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { TrashWebLink } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { serializeJson } from '../json.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
export interface CreateWebLinkByIdRequestBodyArgParentField {
  readonly id?: string;
}
export interface CreateWebLinkByIdRequestBodyArg {
  readonly name?: string;
  readonly parent?: CreateWebLinkByIdRequestBodyArgParentField;
}
export interface CreateWebLinkByIdQueryParamsArg {
  readonly fields?: string;
}
export class CreateWebLinkByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: CreateWebLinkByIdHeadersArg) {
    Object.assign(this, fields);
  }
}
export interface GetWebLinkTrashQueryParamsArg {
  readonly fields?: string;
}
export class GetWebLinkTrashHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetWebLinkTrashHeadersArg) {
    Object.assign(this, fields);
  }
}
export class DeleteWebLinkTrashHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: DeleteWebLinkTrashHeadersArg) {
    Object.assign(this, fields);
  }
}
export class TrashedWebLinksManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      TrashedWebLinksManager,
      'createWebLinkById' | 'getWebLinkTrash' | 'deleteWebLinkTrash'
    >
  ) {
    Object.assign(this, fields);
  }
  async createWebLinkById(
    webLinkId: string,
    requestBody: CreateWebLinkByIdRequestBodyArg = {} satisfies CreateWebLinkByIdRequestBodyArg,
    queryParams: CreateWebLinkByIdQueryParamsArg = {} satisfies CreateWebLinkByIdQueryParamsArg,
    headers: CreateWebLinkByIdHeadersArg = new CreateWebLinkByIdHeadersArg({})
  ): Promise<TrashWebLinkRestored> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/web_links/', webLinkId) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        body: serializeJson(
          serializeCreateWebLinkByIdRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTrashWebLinkRestored(deserializeJson(response.text));
  }
  async getWebLinkTrash(
    webLinkId: string,
    queryParams: GetWebLinkTrashQueryParamsArg = {} satisfies GetWebLinkTrashQueryParamsArg,
    headers: GetWebLinkTrashHeadersArg = new GetWebLinkTrashHeadersArg({})
  ): Promise<TrashWebLink> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/web_links/',
        webLinkId,
        '/trash'
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
    return deserializeTrashWebLink(deserializeJson(response.text));
  }
  async deleteWebLinkTrash(
    webLinkId: string,
    headers: DeleteWebLinkTrashHeadersArg = new DeleteWebLinkTrashHeadersArg({})
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/web_links/',
        webLinkId,
        '/trash'
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
}
export function serializeCreateWebLinkByIdRequestBodyArgParentField(
  val: CreateWebLinkByIdRequestBodyArgParentField
): Json {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeCreateWebLinkByIdRequestBodyArgParentField(
  val: any
): CreateWebLinkByIdRequestBodyArgParentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies CreateWebLinkByIdRequestBodyArgParentField;
}
export function serializeCreateWebLinkByIdRequestBodyArg(
  val: CreateWebLinkByIdRequestBodyArg
): Json {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializeCreateWebLinkByIdRequestBodyArgParentField(val.parent),
  };
}
export function deserializeCreateWebLinkByIdRequestBodyArg(
  val: any
): CreateWebLinkByIdRequestBodyArg {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const parent: undefined | CreateWebLinkByIdRequestBodyArgParentField =
    val.parent == void 0
      ? void 0
      : deserializeCreateWebLinkByIdRequestBodyArgParentField(val.parent);
  return {
    name: name,
    parent: parent,
  } satisfies CreateWebLinkByIdRequestBodyArg;
}
