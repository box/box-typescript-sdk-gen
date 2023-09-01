import { serializeFolderLocks } from '../schemas.generated.js';
import { deserializeFolderLocks } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeFolderLock } from '../schemas.generated.js';
import { deserializeFolderLock } from '../schemas.generated.js';
import { FolderLocks } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { FolderLock } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { serializeJson } from '../json.js';
export interface GetFolderLocksQueryParamsArg {
  readonly folderId: string;
}
export class GetFolderLocksHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetFolderLocksHeadersArg) {
    Object.assign(this, fields);
  }
}
export interface CreateFolderLockRequestBodyArgLockedOperationsField {
  readonly move: boolean;
  readonly delete: boolean;
}
export interface CreateFolderLockRequestBodyArgFolderField {
  readonly type: string;
  readonly id: string;
}
export interface CreateFolderLockRequestBodyArg {
  readonly lockedOperations?: CreateFolderLockRequestBodyArgLockedOperationsField;
  readonly folder: CreateFolderLockRequestBodyArgFolderField;
}
export class CreateFolderLockHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: CreateFolderLockHeadersArg) {
    Object.assign(this, fields);
  }
}
export class DeleteFolderLockByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: DeleteFolderLockByIdHeadersArg) {
    Object.assign(this, fields);
  }
}
export class FolderLocksManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      FolderLocksManager,
      'getFolderLocks' | 'createFolderLock' | 'deleteFolderLockById'
    >
  ) {
    Object.assign(this, fields);
  }
  async getFolderLocks(
    queryParams: GetFolderLocksQueryParamsArg,
    headers: GetFolderLocksHeadersArg = new GetFolderLocksHeadersArg({})
  ): Promise<FolderLocks> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['folder_id']: toString(queryParams.folderId) });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/folder_locks') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFolderLocks(deserializeJson(response.text));
  }
  async createFolderLock(
    requestBody: CreateFolderLockRequestBodyArg,
    headers: CreateFolderLockHeadersArg = new CreateFolderLockHeadersArg({})
  ): Promise<FolderLock> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/folder_locks') as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateFolderLockRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFolderLock(deserializeJson(response.text));
  }
  async deleteFolderLockById(
    folderLockId: string,
    headers: DeleteFolderLockByIdHeadersArg = new DeleteFolderLockByIdHeadersArg(
      {}
    )
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/folder_locks/',
        folderLockId
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
export function serializeCreateFolderLockRequestBodyArgLockedOperationsField(
  val: CreateFolderLockRequestBodyArgLockedOperationsField
): Json {
  return { ['move']: val.move, ['delete']: val.delete };
}
export function deserializeCreateFolderLockRequestBodyArgLockedOperationsField(
  val: any
): CreateFolderLockRequestBodyArgLockedOperationsField {
  const move: boolean = val.move;
  const _delete: boolean = val.delete;
  return {
    move: move,
    delete: _delete,
  } satisfies CreateFolderLockRequestBodyArgLockedOperationsField;
}
export function serializeCreateFolderLockRequestBodyArgFolderField(
  val: CreateFolderLockRequestBodyArgFolderField
): Json {
  return { ['type']: val.type, ['id']: val.id };
}
export function deserializeCreateFolderLockRequestBodyArgFolderField(
  val: any
): CreateFolderLockRequestBodyArgFolderField {
  const type: string = val.type;
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateFolderLockRequestBodyArgFolderField;
}
export function serializeCreateFolderLockRequestBodyArg(
  val: CreateFolderLockRequestBodyArg
): Json {
  return {
    ['locked_operations']:
      val.lockedOperations == void 0
        ? void 0
        : serializeCreateFolderLockRequestBodyArgLockedOperationsField(
            val.lockedOperations
          ),
    ['folder']: serializeCreateFolderLockRequestBodyArgFolderField(val.folder),
  };
}
export function deserializeCreateFolderLockRequestBodyArg(
  val: any
): CreateFolderLockRequestBodyArg {
  const lockedOperations:
    | undefined
    | CreateFolderLockRequestBodyArgLockedOperationsField =
    val.locked_operations == void 0
      ? void 0
      : deserializeCreateFolderLockRequestBodyArgLockedOperationsField(
          val.locked_operations
        );
  const folder: CreateFolderLockRequestBodyArgFolderField =
    deserializeCreateFolderLockRequestBodyArgFolderField(val.folder);
  return {
    lockedOperations: lockedOperations,
    folder: folder,
  } satisfies CreateFolderLockRequestBodyArg;
}
