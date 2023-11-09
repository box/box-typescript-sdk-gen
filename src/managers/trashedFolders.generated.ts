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
export interface RestoreFolderFromTrashRequestBodyArgParentField {
  readonly id?: string;
}
export interface RestoreFolderFromTrashRequestBodyArg {
  readonly name?: string;
  readonly parent?: RestoreFolderFromTrashRequestBodyArgParentField;
}
export interface RestoreFolderFromTrashQueryParamsArg {
  readonly fields?: readonly string[];
}
export class RestoreFolderFromTrashHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<RestoreFolderFromTrashHeadersArg, 'extraHeaders'>
      | Partial<Pick<RestoreFolderFromTrashHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetFolderTrashQueryParamsArg {
  readonly fields?: readonly string[];
}
export class GetFolderTrashHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFolderTrashHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetFolderTrashHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteFolderTrashHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFolderTrashHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteFolderTrashHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class TrashedFoldersManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      TrashedFoldersManager,
      'restoreFolderFromTrash' | 'getFolderTrash' | 'deleteFolderTrash'
    >
  ) {
    Object.assign(this, fields);
  }
  async restoreFolderFromTrash(
    folderId: string,
    requestBody: RestoreFolderFromTrashRequestBodyArg = {} satisfies RestoreFolderFromTrashRequestBodyArg,
    queryParams: RestoreFolderFromTrashQueryParamsArg = {} satisfies RestoreFolderFromTrashQueryParamsArg,
    headers: RestoreFolderFromTrashHeadersArg = new RestoreFolderFromTrashHeadersArg(
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
        'https://api.box.com/2.0/folders/',
        toString(folderId) as string
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeRestoreFolderFromTrashRequestBodyArg(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTrashFolderRestored(response.data);
  }
  async getFolderTrash(
    folderId: string,
    queryParams: GetFolderTrashQueryParamsArg = {} satisfies GetFolderTrashQueryParamsArg,
    headers: GetFolderTrashHeadersArg = new GetFolderTrashHeadersArg({}),
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
        'https://api.box.com/2.0/folders/',
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
  async deleteFolderTrash(
    folderId: string,
    headers: DeleteFolderTrashHeadersArg = new DeleteFolderTrashHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/folders/',
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
export function serializeRestoreFolderFromTrashRequestBodyArgParentField(
  val: RestoreFolderFromTrashRequestBodyArgParentField
): SerializedData {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeRestoreFolderFromTrashRequestBodyArgParentField(
  val: any
): RestoreFolderFromTrashRequestBodyArgParentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies RestoreFolderFromTrashRequestBodyArgParentField;
}
export function serializeRestoreFolderFromTrashRequestBodyArg(
  val: RestoreFolderFromTrashRequestBodyArg
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializeRestoreFolderFromTrashRequestBodyArgParentField(val.parent),
  };
}
export function deserializeRestoreFolderFromTrashRequestBodyArg(
  val: any
): RestoreFolderFromTrashRequestBodyArg {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const parent: undefined | RestoreFolderFromTrashRequestBodyArgParentField =
    val.parent == void 0
      ? void 0
      : deserializeRestoreFolderFromTrashRequestBodyArgParentField(val.parent);
  return {
    name: name,
    parent: parent,
  } satisfies RestoreFolderFromTrashRequestBodyArg;
}
