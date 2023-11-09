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
export interface GetFileVersionsQueryParamsArg {
  readonly fields?: readonly string[];
  readonly limit?: number;
  readonly offset?: number;
}
export class GetFileVersionsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileVersionsHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetFileVersionsHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetFileVersionByIdQueryParamsArg {
  readonly fields?: readonly string[];
}
export class GetFileVersionByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileVersionByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetFileVersionByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateFileVersionByIdRequestBodyArg {
  readonly trashedAt?: string;
}
export class UpdateFileVersionByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFileVersionByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateFileVersionByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteFileVersionByIdHeadersArg {
  readonly ifMatch?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFileVersionByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteFileVersionByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type PromoteFileVersionRequestBodyArgTypeField = 'file_version';
export interface PromoteFileVersionRequestBodyArg {
  readonly id?: string;
  readonly type?: PromoteFileVersionRequestBodyArgTypeField;
}
export interface PromoteFileVersionQueryParamsArg {
  readonly fields?: readonly string[];
}
export class PromoteFileVersionHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<PromoteFileVersionHeadersArg, 'extraHeaders'>
      | Partial<Pick<PromoteFileVersionHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class FileVersionsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      FileVersionsManager,
      | 'getFileVersions'
      | 'getFileVersionById'
      | 'updateFileVersionById'
      | 'deleteFileVersionById'
      | 'promoteFileVersion'
    >
  ) {
    Object.assign(this, fields);
  }
  async getFileVersions(
    fileId: string,
    queryParams: GetFileVersionsQueryParamsArg = {} satisfies GetFileVersionsQueryParamsArg,
    headers: GetFileVersionsHeadersArg = new GetFileVersionsHeadersArg({}),
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
        'https://api.box.com/2.0/files/',
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
    queryParams: GetFileVersionByIdQueryParamsArg = {} satisfies GetFileVersionByIdQueryParamsArg,
    headers: GetFileVersionByIdHeadersArg = new GetFileVersionByIdHeadersArg(
      {}
    ),
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
        'https://api.box.com/2.0/files/',
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
    requestBody: UpdateFileVersionByIdRequestBodyArg = {} satisfies UpdateFileVersionByIdRequestBodyArg,
    headers: UpdateFileVersionByIdHeadersArg = new UpdateFileVersionByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileVersionFull> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
        toString(fileId) as string,
        '/versions/',
        toString(fileVersionId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateFileVersionByIdRequestBodyArg(requestBody),
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
    headers: DeleteFileVersionByIdHeadersArg = new DeleteFileVersionByIdHeadersArg(
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
        'https://api.box.com/2.0/files/',
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
    requestBody: PromoteFileVersionRequestBodyArg = {} satisfies PromoteFileVersionRequestBodyArg,
    queryParams: PromoteFileVersionQueryParamsArg = {} satisfies PromoteFileVersionQueryParamsArg,
    headers: PromoteFileVersionHeadersArg = new PromoteFileVersionHeadersArg(
      {}
    ),
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
        'https://api.box.com/2.0/files/',
        toString(fileId) as string,
        '/versions/current'
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializePromoteFileVersionRequestBodyArg(requestBody),
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
export function serializeUpdateFileVersionByIdRequestBodyArg(
  val: UpdateFileVersionByIdRequestBodyArg
): SerializedData {
  return { ['trashed_at']: val.trashedAt == void 0 ? void 0 : val.trashedAt };
}
export function deserializeUpdateFileVersionByIdRequestBodyArg(
  val: any
): UpdateFileVersionByIdRequestBodyArg {
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  return { trashedAt: trashedAt } satisfies UpdateFileVersionByIdRequestBodyArg;
}
export function serializePromoteFileVersionRequestBodyArgTypeField(
  val: PromoteFileVersionRequestBodyArgTypeField
): SerializedData {
  return val;
}
export function deserializePromoteFileVersionRequestBodyArgTypeField(
  val: any
): PromoteFileVersionRequestBodyArgTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "PromoteFileVersionRequestBodyArgTypeField"';
  }
  if (val == 'file_version') {
    return 'file_version';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializePromoteFileVersionRequestBodyArg(
  val: PromoteFileVersionRequestBodyArg
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializePromoteFileVersionRequestBodyArgTypeField(val.type),
  };
}
export function deserializePromoteFileVersionRequestBodyArg(
  val: any
): PromoteFileVersionRequestBodyArg {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | PromoteFileVersionRequestBodyArgTypeField =
    val.type == void 0
      ? void 0
      : deserializePromoteFileVersionRequestBodyArgTypeField(val.type);
  return { id: id, type: type } satisfies PromoteFileVersionRequestBodyArg;
}
