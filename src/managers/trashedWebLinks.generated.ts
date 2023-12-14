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
export interface RestoreWeblinkFromTrashRequestBodyParentField {
  readonly id?: string;
}
export interface RestoreWeblinkFromTrashRequestBody {
  readonly name?: string;
  readonly parent?: RestoreWeblinkFromTrashRequestBodyParentField;
}
export interface RestoreWeblinkFromTrashQueryParams {
  readonly fields?: readonly string[];
}
export class RestoreWeblinkFromTrashHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<RestoreWeblinkFromTrashHeaders, 'extraHeaders'>
      | Partial<Pick<RestoreWeblinkFromTrashHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetWebLinkTrashQueryParams {
  readonly fields?: readonly string[];
}
export class GetWebLinkTrashHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetWebLinkTrashHeaders, 'extraHeaders'>
      | Partial<Pick<GetWebLinkTrashHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteWebLinkTrashHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteWebLinkTrashHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteWebLinkTrashHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class TrashedWebLinksManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          TrashedWebLinksManager,
          | 'networkSession'
          | 'restoreWeblinkFromTrash'
          | 'getWebLinkTrash'
          | 'deleteWebLinkTrash'
        >
      | Partial<Pick<TrashedWebLinksManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async restoreWeblinkFromTrash(
    webLinkId: string,
    requestBody: RestoreWeblinkFromTrashRequestBody = {} satisfies RestoreWeblinkFromTrashRequestBody,
    queryParams: RestoreWeblinkFromTrashQueryParams = {} satisfies RestoreWeblinkFromTrashQueryParams,
    headers: RestoreWeblinkFromTrashHeaders = new RestoreWeblinkFromTrashHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<TrashWebLinkRestored> {
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
        '/web_links/',
        toString(webLinkId) as string
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeRestoreWeblinkFromTrashRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTrashWebLinkRestored(response.data);
  }
  async getWebLinkTrash(
    webLinkId: string,
    queryParams: GetWebLinkTrashQueryParams = {} satisfies GetWebLinkTrashQueryParams,
    headers: GetWebLinkTrashHeaders = new GetWebLinkTrashHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<TrashWebLink> {
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
        '/web_links/',
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
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTrashWebLink(response.data);
  }
  async deleteWebLinkTrash(
    webLinkId: string,
    headers: DeleteWebLinkTrashHeaders = new DeleteWebLinkTrashHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/web_links/',
        toString(webLinkId) as string,
        '/trash'
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
export function serializeRestoreWeblinkFromTrashRequestBodyParentField(
  val: RestoreWeblinkFromTrashRequestBodyParentField
): SerializedData {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeRestoreWeblinkFromTrashRequestBodyParentField(
  val: any
): RestoreWeblinkFromTrashRequestBodyParentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies RestoreWeblinkFromTrashRequestBodyParentField;
}
export function serializeRestoreWeblinkFromTrashRequestBody(
  val: RestoreWeblinkFromTrashRequestBody
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializeRestoreWeblinkFromTrashRequestBodyParentField(val.parent),
  };
}
export function deserializeRestoreWeblinkFromTrashRequestBody(
  val: any
): RestoreWeblinkFromTrashRequestBody {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const parent: undefined | RestoreWeblinkFromTrashRequestBodyParentField =
    val.parent == void 0
      ? void 0
      : deserializeRestoreWeblinkFromTrashRequestBodyParentField(val.parent);
  return {
    name: name,
    parent: parent,
  } satisfies RestoreWeblinkFromTrashRequestBody;
}
