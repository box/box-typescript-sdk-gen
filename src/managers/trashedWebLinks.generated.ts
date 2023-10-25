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
export interface RestoreWeblinkFromTrashRequestBodyArgParentField {
  readonly id?: string;
}
export interface RestoreWeblinkFromTrashRequestBodyArg {
  readonly name?: string;
  readonly parent?: RestoreWeblinkFromTrashRequestBodyArgParentField;
}
export interface RestoreWeblinkFromTrashQueryParamsArg {
  readonly fields?: readonly string[];
}
export class RestoreWeblinkFromTrashHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<RestoreWeblinkFromTrashHeadersArg, 'extraHeaders'>
      | Partial<Pick<RestoreWeblinkFromTrashHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetWebLinkTrashQueryParamsArg {
  readonly fields?: readonly string[];
}
export class GetWebLinkTrashHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetWebLinkTrashHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetWebLinkTrashHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteWebLinkTrashHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteWebLinkTrashHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteWebLinkTrashHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class TrashedWebLinksManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      TrashedWebLinksManager,
      'restoreWeblinkFromTrash' | 'getWebLinkTrash' | 'deleteWebLinkTrash'
    >
  ) {
    Object.assign(this, fields);
  }
  async restoreWeblinkFromTrash(
    webLinkId: string,
    requestBody: RestoreWeblinkFromTrashRequestBodyArg = {} satisfies RestoreWeblinkFromTrashRequestBodyArg,
    queryParams: RestoreWeblinkFromTrashQueryParamsArg = {} satisfies RestoreWeblinkFromTrashQueryParamsArg,
    headers: RestoreWeblinkFromTrashHeadersArg = new RestoreWeblinkFromTrashHeadersArg(
      {}
    )
  ): Promise<TrashWebLinkRestored> {
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
        'https://api.box.com/2.0/web_links/',
        toString(webLinkId) as string
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        body: serializeJson(
          serializeRestoreWeblinkFromTrashRequestBodyArg(requestBody)
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
    } = prepareParams({
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/web_links/',
        toString(webLinkId) as string,
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
        toString(webLinkId) as string,
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
export function serializeRestoreWeblinkFromTrashRequestBodyArgParentField(
  val: RestoreWeblinkFromTrashRequestBodyArgParentField
): Json {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeRestoreWeblinkFromTrashRequestBodyArgParentField(
  val: any
): RestoreWeblinkFromTrashRequestBodyArgParentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies RestoreWeblinkFromTrashRequestBodyArgParentField;
}
export function serializeRestoreWeblinkFromTrashRequestBodyArg(
  val: RestoreWeblinkFromTrashRequestBodyArg
): Json {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializeRestoreWeblinkFromTrashRequestBodyArgParentField(val.parent),
  };
}
export function deserializeRestoreWeblinkFromTrashRequestBodyArg(
  val: any
): RestoreWeblinkFromTrashRequestBodyArg {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const parent: undefined | RestoreWeblinkFromTrashRequestBodyArgParentField =
    val.parent == void 0
      ? void 0
      : deserializeRestoreWeblinkFromTrashRequestBodyArgParentField(val.parent);
  return {
    name: name,
    parent: parent,
  } satisfies RestoreWeblinkFromTrashRequestBodyArg;
}
