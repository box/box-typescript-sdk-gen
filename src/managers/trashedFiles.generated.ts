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
export interface RestoreFileFromTrashRequestBodyParentField {
  readonly id?: string;
}
export interface RestoreFileFromTrashRequestBody {
  readonly name?: string;
  readonly parent?: RestoreFileFromTrashRequestBodyParentField;
}
export interface RestoreFileFromTrashQueryParams {
  readonly fields?: readonly string[];
}
export class RestoreFileFromTrashHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<RestoreFileFromTrashHeaders, 'extraHeaders'>
      | Partial<Pick<RestoreFileFromTrashHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetTrashedFileByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetTrashedFileByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetTrashedFileByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetTrashedFileByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteTrashedFileByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteTrashedFileByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteTrashedFileByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class TrashedFilesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          TrashedFilesManager,
          | 'networkSession'
          | 'restoreFileFromTrash'
          | 'getTrashedFileById'
          | 'deleteTrashedFileById'
        >
      | Partial<Pick<TrashedFilesManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async restoreFileFromTrash(
    fileId: string,
    requestBody: RestoreFileFromTrashRequestBody = {} satisfies RestoreFileFromTrashRequestBody,
    queryParams: RestoreFileFromTrashQueryParams = {} satisfies RestoreFileFromTrashQueryParams,
    headers: RestoreFileFromTrashHeaders = new RestoreFileFromTrashHeaders({}),
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
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeRestoreFileFromTrashRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTrashFileRestored(response.data);
  }
  async getTrashedFileById(
    fileId: string,
    queryParams: GetTrashedFileByIdQueryParams = {} satisfies GetTrashedFileByIdQueryParams,
    headers: GetTrashedFileByIdHeaders = new GetTrashedFileByIdHeaders({}),
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
        this.networkSession.baseUrls.baseUrl,
        '/files/',
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
  async deleteTrashedFileById(
    fileId: string,
    headers: DeleteTrashedFileByIdHeaders = new DeleteTrashedFileByIdHeaders(
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
        '/files/',
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
export function serializeRestoreFileFromTrashRequestBodyParentField(
  val: RestoreFileFromTrashRequestBodyParentField
): SerializedData {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeRestoreFileFromTrashRequestBodyParentField(
  val: any
): RestoreFileFromTrashRequestBodyParentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies RestoreFileFromTrashRequestBodyParentField;
}
export function serializeRestoreFileFromTrashRequestBody(
  val: RestoreFileFromTrashRequestBody
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializeRestoreFileFromTrashRequestBodyParentField(val.parent),
  };
}
export function deserializeRestoreFileFromTrashRequestBody(
  val: any
): RestoreFileFromTrashRequestBody {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const parent: undefined | RestoreFileFromTrashRequestBodyParentField =
    val.parent == void 0
      ? void 0
      : deserializeRestoreFileFromTrashRequestBodyParentField(val.parent);
  return {
    name: name,
    parent: parent,
  } satisfies RestoreFileFromTrashRequestBody;
}
