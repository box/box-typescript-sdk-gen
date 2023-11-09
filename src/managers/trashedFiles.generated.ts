import { serializeTrashFileRestored } from '../schemas.generated.js';
import { deserializeTrashFileRestored } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeTrashFile } from '../schemas.generated.js';
import { deserializeTrashFile } from '../schemas.generated.js';
import { TrashFileRestored } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { TrashFile } from '../schemas.generated.js';
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
export interface RestoreFileFromTrashRequestBodyArgParentField {
  readonly id?: string;
}
export interface RestoreFileFromTrashRequestBodyArg {
  readonly name?: string;
  readonly parent?: RestoreFileFromTrashRequestBodyArgParentField;
}
export interface RestoreFileFromTrashQueryParamsArg {
  readonly fields?: readonly string[];
}
export class RestoreFileFromTrashHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<RestoreFileFromTrashHeadersArg, 'extraHeaders'>
      | Partial<Pick<RestoreFileFromTrashHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetFileTrashQueryParamsArg {
  readonly fields?: readonly string[];
}
export class GetFileTrashHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileTrashHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetFileTrashHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteFileTrashHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFileTrashHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteFileTrashHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class TrashedFilesManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      TrashedFilesManager,
      'restoreFileFromTrash' | 'getFileTrash' | 'deleteFileTrash'
    >
  ) {
    Object.assign(this, fields);
  }
  async restoreFileFromTrash(
    fileId: string,
    requestBody: RestoreFileFromTrashRequestBodyArg = {} satisfies RestoreFileFromTrashRequestBodyArg,
    queryParams: RestoreFileFromTrashQueryParamsArg = {} satisfies RestoreFileFromTrashQueryParamsArg,
    headers: RestoreFileFromTrashHeadersArg = new RestoreFileFromTrashHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<TrashFileRestored> {
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
        'https://api.box.com/2.0/files/',
        toString(fileId) as string
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeRestoreFileFromTrashRequestBodyArg(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTrashFileRestored(response.data);
  }
  async getFileTrash(
    fileId: string,
    queryParams: GetFileTrashQueryParamsArg = {} satisfies GetFileTrashQueryParamsArg,
    headers: GetFileTrashHeadersArg = new GetFileTrashHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<TrashFile> {
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
        'https://api.box.com/2.0/files/',
        toString(fileId) as string,
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
    return deserializeTrashFile(response.data);
  }
  async deleteFileTrash(
    fileId: string,
    headers: DeleteFileTrashHeadersArg = new DeleteFileTrashHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
        toString(fileId) as string,
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
export function serializeRestoreFileFromTrashRequestBodyArgParentField(
  val: RestoreFileFromTrashRequestBodyArgParentField
): SerializedData {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeRestoreFileFromTrashRequestBodyArgParentField(
  val: any
): RestoreFileFromTrashRequestBodyArgParentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies RestoreFileFromTrashRequestBodyArgParentField;
}
export function serializeRestoreFileFromTrashRequestBodyArg(
  val: RestoreFileFromTrashRequestBodyArg
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializeRestoreFileFromTrashRequestBodyArgParentField(val.parent),
  };
}
export function deserializeRestoreFileFromTrashRequestBodyArg(
  val: any
): RestoreFileFromTrashRequestBodyArg {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const parent: undefined | RestoreFileFromTrashRequestBodyArgParentField =
    val.parent == void 0
      ? void 0
      : deserializeRestoreFileFromTrashRequestBodyArgParentField(val.parent);
  return {
    name: name,
    parent: parent,
  } satisfies RestoreFileFromTrashRequestBodyArg;
}
