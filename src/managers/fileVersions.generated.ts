import { serializeFileVersions } from '../schemas.generated.js';
import { deserializeFileVersions } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeFileVersionFull } from '../schemas.generated.js';
import { deserializeFileVersionFull } from '../schemas.generated.js';
import { FileVersions } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { FileVersionFull } from '../schemas.generated.js';
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
export interface GetFileVersionsQueryParams {
  readonly fields?: readonly string[];
  readonly limit?: number;
  readonly offset?: number;
}
export class GetFileVersionsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileVersionsHeaders, 'extraHeaders'>
      | Partial<Pick<GetFileVersionsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetFileVersionByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetFileVersionByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileVersionByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetFileVersionByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateFileVersionByIdRequestBody {
  readonly trashedAt?: string;
}
export class UpdateFileVersionByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFileVersionByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateFileVersionByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteFileVersionByIdHeaders {
  readonly ifMatch?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFileVersionByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteFileVersionByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type PromoteFileVersionRequestBodyTypeField = 'file_version';
export interface PromoteFileVersionRequestBody {
  readonly id?: string;
  readonly type?: PromoteFileVersionRequestBodyTypeField;
}
export interface PromoteFileVersionQueryParams {
  readonly fields?: readonly string[];
}
export class PromoteFileVersionHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<PromoteFileVersionHeaders, 'extraHeaders'>
      | Partial<Pick<PromoteFileVersionHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class FileVersionsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          FileVersionsManager,
          | 'networkSession'
          | 'getFileVersions'
          | 'getFileVersionById'
          | 'updateFileVersionById'
          | 'deleteFileVersionById'
          | 'promoteFileVersion'
        >
      | Partial<Pick<FileVersionsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getFileVersions(
    fileId: string,
    queryParams: GetFileVersionsQueryParams = {} satisfies GetFileVersionsQueryParams,
    headers: GetFileVersionsHeaders = new GetFileVersionsHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<FileVersions> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
      ['limit']: toString(queryParams.limit) as string,
      ['offset']: toString(queryParams.offset) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '/versions'
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
    return deserializeFileVersions(response.data);
  }
  async getFileVersionById(
    fileId: string,
    fileVersionId: string,
    queryParams: GetFileVersionByIdQueryParams = {} satisfies GetFileVersionByIdQueryParams,
    headers: GetFileVersionByIdHeaders = new GetFileVersionByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<FileVersionFull> {
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
        '/versions/',
        toString(fileVersionId) as string
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
    return deserializeFileVersionFull(response.data);
  }
  async updateFileVersionById(
    fileId: string,
    fileVersionId: string,
    requestBody: UpdateFileVersionByIdRequestBody = {} satisfies UpdateFileVersionByIdRequestBody,
    headers: UpdateFileVersionByIdHeaders = new UpdateFileVersionByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileVersionFull> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '/versions/',
        toString(fileVersionId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateFileVersionByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFileVersionFull(response.data);
  }
  async deleteFileVersionById(
    fileId: string,
    fileVersionId: string,
    headers: DeleteFileVersionByIdHeaders = new DeleteFileVersionByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{ ['if-match']: toString(headers.ifMatch) as string },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '/versions/',
        toString(fileVersionId) as string
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
  async promoteFileVersion(
    fileId: string,
    requestBody: PromoteFileVersionRequestBody = {} satisfies PromoteFileVersionRequestBody,
    queryParams: PromoteFileVersionQueryParams = {} satisfies PromoteFileVersionQueryParams,
    headers: PromoteFileVersionHeaders = new PromoteFileVersionHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<FileVersionFull> {
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
        '/versions/current'
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializePromoteFileVersionRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFileVersionFull(response.data);
  }
}
export function serializeUpdateFileVersionByIdRequestBody(
  val: UpdateFileVersionByIdRequestBody
): SerializedData {
  return { ['trashed_at']: val.trashedAt == void 0 ? void 0 : val.trashedAt };
}
export function deserializeUpdateFileVersionByIdRequestBody(
  val: any
): UpdateFileVersionByIdRequestBody {
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  return { trashedAt: trashedAt } satisfies UpdateFileVersionByIdRequestBody;
}
export function serializePromoteFileVersionRequestBodyTypeField(
  val: PromoteFileVersionRequestBodyTypeField
): SerializedData {
  return val;
}
export function deserializePromoteFileVersionRequestBodyTypeField(
  val: any
): PromoteFileVersionRequestBodyTypeField {
  if (!sdIsString(val)) {
    throw new Error(
      String('Expecting a string for "PromoteFileVersionRequestBodyTypeField"')
    );
  }
  if (val == 'file_version') {
    return 'file_version';
  }
  throw new Error(String(''.concat('Invalid value: ', val) as string));
}
export function serializePromoteFileVersionRequestBody(
  val: PromoteFileVersionRequestBody
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializePromoteFileVersionRequestBodyTypeField(val.type),
  };
}
export function deserializePromoteFileVersionRequestBody(
  val: any
): PromoteFileVersionRequestBody {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | PromoteFileVersionRequestBodyTypeField =
    val.type == void 0
      ? void 0
      : deserializePromoteFileVersionRequestBodyTypeField(val.type);
  return { id: id, type: type } satisfies PromoteFileVersionRequestBody;
}
