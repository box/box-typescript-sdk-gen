import { serializeTrashFolderRestored } from '../schemas.generated.js';
import { deserializeTrashFolderRestored } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeTrashFolder } from '../schemas.generated.js';
import { deserializeTrashFolder } from '../schemas.generated.js';
import { TrashFolderRestored } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { TrashFolder } from '../schemas.generated.js';
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
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export interface RestoreFolderFromTrashRequestBodyParentField {
  readonly id?: string;
}
export interface RestoreFolderFromTrashRequestBody {
  readonly name?: string;
  readonly parent?: RestoreFolderFromTrashRequestBodyParentField;
}
export interface RestoreFolderFromTrashQueryParams {
  readonly fields?: readonly string[];
}
export class RestoreFolderFromTrashHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<RestoreFolderFromTrashHeaders, 'extraHeaders'>
      | Partial<Pick<RestoreFolderFromTrashHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetTrashedFolderByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetTrashedFolderByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetTrashedFolderByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetTrashedFolderByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteTrashedFolderByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteTrashedFolderByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteTrashedFolderByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class TrashedFoldersManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          TrashedFoldersManager,
          | 'networkSession'
          | 'restoreFolderFromTrash'
          | 'getTrashedFolderById'
          | 'deleteTrashedFolderById'
        >
      | Partial<Pick<TrashedFoldersManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async restoreFolderFromTrash(
    folderId: string,
    requestBody: RestoreFolderFromTrashRequestBody = {} satisfies RestoreFolderFromTrashRequestBody,
    queryParams: RestoreFolderFromTrashQueryParams = {} satisfies RestoreFolderFromTrashQueryParams,
    headers: RestoreFolderFromTrashHeaders = new RestoreFolderFromTrashHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<TrashFolderRestored> {
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
        toString(folderId) as string
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeRestoreFolderFromTrashRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTrashFolderRestored(response.data);
  }
  async getTrashedFolderById(
    folderId: string,
    queryParams: GetTrashedFolderByIdQueryParams = {} satisfies GetTrashedFolderByIdQueryParams,
    headers: GetTrashedFolderByIdHeaders = new GetTrashedFolderByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<TrashFolder> {
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
    return deserializeTrashFolder(response.data);
  }
  async deleteTrashedFolderById(
    folderId: string,
    headers: DeleteTrashedFolderByIdHeaders = new DeleteTrashedFolderByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/folders/',
        toString(folderId) as string,
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
export function serializeRestoreFolderFromTrashRequestBodyParentField(
  val: RestoreFolderFromTrashRequestBodyParentField
): SerializedData {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeRestoreFolderFromTrashRequestBodyParentField(
  val: any
): RestoreFolderFromTrashRequestBodyParentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies RestoreFolderFromTrashRequestBodyParentField;
}
export function serializeRestoreFolderFromTrashRequestBody(
  val: RestoreFolderFromTrashRequestBody
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializeRestoreFolderFromTrashRequestBodyParentField(val.parent),
  };
}
export function deserializeRestoreFolderFromTrashRequestBody(
  val: any
): RestoreFolderFromTrashRequestBody {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const parent: undefined | RestoreFolderFromTrashRequestBodyParentField =
    val.parent == void 0
      ? void 0
      : deserializeRestoreFolderFromTrashRequestBodyParentField(val.parent);
  return {
    name: name,
    parent: parent,
  } satisfies RestoreFolderFromTrashRequestBody;
}
