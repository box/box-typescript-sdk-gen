import { serializeFolderLocks } from '../schemas.generated.js';
import { deserializeFolderLocks } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeFolderLock } from '../schemas.generated.js';
import { deserializeFolderLock } from '../schemas.generated.js';
import { FolderLocks } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { FolderLock } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface GetFolderLocksQueryParams {
  readonly folderId: string;
}
export class GetFolderLocksHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFolderLocksHeaders, 'extraHeaders'>
      | Partial<Pick<GetFolderLocksHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateFolderLockRequestBodyLockedOperationsField {
  readonly move: boolean;
  readonly delete: boolean;
}
export interface CreateFolderLockRequestBodyFolderField {
  readonly type: string;
  readonly id: string;
}
export interface CreateFolderLockRequestBody {
  readonly lockedOperations?: CreateFolderLockRequestBodyLockedOperationsField;
  readonly folder: CreateFolderLockRequestBodyFolderField;
}
export class CreateFolderLockHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateFolderLockHeaders, 'extraHeaders'>
      | Partial<Pick<CreateFolderLockHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteFolderLockByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFolderLockByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteFolderLockByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class FolderLocksManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          FolderLocksManager,
          | 'networkSession'
          | 'getFolderLocks'
          | 'createFolderLock'
          | 'deleteFolderLockById'
        >
      | Partial<Pick<FolderLocksManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getFolderLocks(
    queryParams: GetFolderLocksQueryParams,
    headers: GetFolderLocksHeaders = new GetFolderLocksHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<FolderLocks> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['folder_id']: toString(queryParams.folderId) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/folder_locks'
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
    return deserializeFolderLocks(response.data);
  }
  async createFolderLock(
    requestBody: CreateFolderLockRequestBody,
    headers: CreateFolderLockHeaders = new CreateFolderLockHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<FolderLock> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/folder_locks'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateFolderLockRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFolderLock(response.data);
  }
  async deleteFolderLockById(
    folderLockId: string,
    headers: DeleteFolderLockByIdHeaders = new DeleteFolderLockByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/folder_locks/',
        toString(folderLockId) as string
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
export function serializeCreateFolderLockRequestBodyLockedOperationsField(
  val: CreateFolderLockRequestBodyLockedOperationsField
): SerializedData {
  return { ['move']: val.move, ['delete']: val.delete };
}
export function deserializeCreateFolderLockRequestBodyLockedOperationsField(
  val: any
): CreateFolderLockRequestBodyLockedOperationsField {
  const move: boolean = val.move;
  const _delete: boolean = val.delete;
  return {
    move: move,
    delete: _delete,
  } satisfies CreateFolderLockRequestBodyLockedOperationsField;
}
export function serializeCreateFolderLockRequestBodyFolderField(
  val: CreateFolderLockRequestBodyFolderField
): SerializedData {
  return { ['type']: val.type, ['id']: val.id };
}
export function deserializeCreateFolderLockRequestBodyFolderField(
  val: any
): CreateFolderLockRequestBodyFolderField {
  const type: string = val.type;
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies CreateFolderLockRequestBodyFolderField;
}
export function serializeCreateFolderLockRequestBody(
  val: CreateFolderLockRequestBody
): SerializedData {
  return {
    ['locked_operations']:
      val.lockedOperations == void 0
        ? void 0
        : serializeCreateFolderLockRequestBodyLockedOperationsField(
            val.lockedOperations
          ),
    ['folder']: serializeCreateFolderLockRequestBodyFolderField(val.folder),
  };
}
export function deserializeCreateFolderLockRequestBody(
  val: any
): CreateFolderLockRequestBody {
  const lockedOperations:
    | undefined
    | CreateFolderLockRequestBodyLockedOperationsField =
    val.locked_operations == void 0
      ? void 0
      : deserializeCreateFolderLockRequestBodyLockedOperationsField(
          val.locked_operations
        );
  const folder: CreateFolderLockRequestBodyFolderField =
    deserializeCreateFolderLockRequestBodyFolderField(val.folder);
  return {
    lockedOperations: lockedOperations,
    folder: folder,
  } satisfies CreateFolderLockRequestBody;
}
