import { serializeMetadatas } from '../schemas.generated.js';
import { deserializeMetadatas } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeMetadataFull } from '../schemas.generated.js';
import { deserializeMetadataFull } from '../schemas.generated.js';
import { Metadatas } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { MetadataFull } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.generated.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export class GetFileMetadataHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileMetadataHeaders, 'extraHeaders'>
      | Partial<Pick<GetFileMetadataHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type GetFileMetadataByIdScope = 'global' | 'enterprise';
export class GetFileMetadataByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileMetadataByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetFileMetadataByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateFileMetadataByIdScope = 'global' | 'enterprise';
export type CreateFileMetadataByIdRequestBody = {
  readonly [key: string]: string;
};
export class CreateFileMetadataByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateFileMetadataByIdHeaders, 'extraHeaders'>
      | Partial<Pick<CreateFileMetadataByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFileMetadataByIdScope = 'global' | 'enterprise';
export type UpdateFileMetadataByIdRequestBodyOpField =
  | 'add'
  | 'replace'
  | 'remove'
  | 'test'
  | 'move'
  | 'copy';
export interface UpdateFileMetadataByIdRequestBody {
  readonly op?: UpdateFileMetadataByIdRequestBodyOpField;
  readonly path?: string;
  readonly value?: string;
  readonly from?: string;
}
export class UpdateFileMetadataByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFileMetadataByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateFileMetadataByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type DeleteFileMetadataByIdScope = 'global' | 'enterprise';
export class DeleteFileMetadataByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFileMetadataByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteFileMetadataByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class FileMetadataManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          FileMetadataManager,
          | 'networkSession'
          | 'getFileMetadata'
          | 'getFileMetadataById'
          | 'createFileMetadataById'
          | 'updateFileMetadataById'
          | 'deleteFileMetadataById'
        >
      | Partial<Pick<FileMetadataManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getFileMetadata(
    fileId: string,
    headers: GetFileMetadataHeaders = new GetFileMetadataHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Metadatas> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '/metadata'
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadatas(response.data);
  }
  async getFileMetadataById(
    fileId: string,
    scope: GetFileMetadataByIdScope,
    templateKey: string,
    headers: GetFileMetadataByIdHeaders = new GetFileMetadataByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<MetadataFull> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '/metadata/',
        toString(scope) as string,
        '/',
        toString(templateKey) as string
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataFull(response.data);
  }
  async createFileMetadataById(
    fileId: string,
    scope: CreateFileMetadataByIdScope,
    templateKey: string,
    requestBody: CreateFileMetadataByIdRequestBody,
    headers: CreateFileMetadataByIdHeaders = new CreateFileMetadataByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataFull> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '/metadata/',
        toString(scope) as string,
        '/',
        toString(templateKey) as string
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateFileMetadataByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataFull(response.data);
  }
  async updateFileMetadataById(
    fileId: string,
    scope: UpdateFileMetadataByIdScope,
    templateKey: string,
    requestBody: readonly UpdateFileMetadataByIdRequestBody[],
    headers: UpdateFileMetadataByIdHeaders = new UpdateFileMetadataByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataFull> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '/metadata/',
        toString(scope) as string,
        '/',
        toString(templateKey) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: requestBody.map(
          serializeUpdateFileMetadataByIdRequestBody
        ) as readonly any[],
        contentType: 'application/json-patch+json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataFull(response.data);
  }
  async deleteFileMetadataById(
    fileId: string,
    scope: DeleteFileMetadataByIdScope,
    templateKey: string,
    headers: DeleteFileMetadataByIdHeaders = new DeleteFileMetadataByIdHeaders(
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
        '/metadata/',
        toString(scope) as string,
        '/',
        toString(templateKey) as string
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
export function serializeGetFileMetadataByIdScope(
  val: GetFileMetadataByIdScope
): SerializedData {
  return val;
}
export function deserializeGetFileMetadataByIdScope(
  val: any
): GetFileMetadataByIdScope {
  if (!sdIsString(val)) {
    throw new Error(
      String('Expecting a string for "GetFileMetadataByIdScope"')
    );
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new Error(String(''.concat('Invalid value: ', val) as string));
}
export function serializeCreateFileMetadataByIdScope(
  val: CreateFileMetadataByIdScope
): SerializedData {
  return val;
}
export function deserializeCreateFileMetadataByIdScope(
  val: any
): CreateFileMetadataByIdScope {
  if (!sdIsString(val)) {
    throw new Error(
      String('Expecting a string for "CreateFileMetadataByIdScope"')
    );
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new Error(String(''.concat('Invalid value: ', val) as string));
}
export function serializeCreateFileMetadataByIdRequestBody(
  val: CreateFileMetadataByIdRequestBody
): SerializedData {
  return val;
}
export function deserializeCreateFileMetadataByIdRequestBody(
  val: any
): CreateFileMetadataByIdRequestBody {
  return val;
}
export function serializeUpdateFileMetadataByIdScope(
  val: UpdateFileMetadataByIdScope
): SerializedData {
  return val;
}
export function deserializeUpdateFileMetadataByIdScope(
  val: any
): UpdateFileMetadataByIdScope {
  if (!sdIsString(val)) {
    throw new Error(
      String('Expecting a string for "UpdateFileMetadataByIdScope"')
    );
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new Error(String(''.concat('Invalid value: ', val) as string));
}
export function serializeUpdateFileMetadataByIdRequestBodyOpField(
  val: UpdateFileMetadataByIdRequestBodyOpField
): SerializedData {
  return val;
}
export function deserializeUpdateFileMetadataByIdRequestBodyOpField(
  val: any
): UpdateFileMetadataByIdRequestBodyOpField {
  if (!sdIsString(val)) {
    throw new Error(
      String(
        'Expecting a string for "UpdateFileMetadataByIdRequestBodyOpField"'
      )
    );
  }
  if (val == 'add') {
    return 'add';
  }
  if (val == 'replace') {
    return 'replace';
  }
  if (val == 'remove') {
    return 'remove';
  }
  if (val == 'test') {
    return 'test';
  }
  if (val == 'move') {
    return 'move';
  }
  if (val == 'copy') {
    return 'copy';
  }
  throw new Error(String(''.concat('Invalid value: ', val) as string));
}
export function serializeUpdateFileMetadataByIdRequestBody(
  val: UpdateFileMetadataByIdRequestBody
): SerializedData {
  return {
    ['op']:
      val.op == void 0
        ? void 0
        : serializeUpdateFileMetadataByIdRequestBodyOpField(val.op),
    ['path']: val.path == void 0 ? void 0 : val.path,
    ['value']: val.value == void 0 ? void 0 : val.value,
    ['from']: val.from == void 0 ? void 0 : val.from,
  };
}
export function deserializeUpdateFileMetadataByIdRequestBody(
  val: any
): UpdateFileMetadataByIdRequestBody {
  const op: undefined | UpdateFileMetadataByIdRequestBodyOpField =
    val.op == void 0
      ? void 0
      : deserializeUpdateFileMetadataByIdRequestBodyOpField(val.op);
  const path: undefined | string = val.path == void 0 ? void 0 : val.path;
  const value: undefined | string = val.value == void 0 ? void 0 : val.value;
  const from: undefined | string = val.from == void 0 ? void 0 : val.from;
  return {
    op: op,
    path: path,
    value: value,
    from: from,
  } satisfies UpdateFileMetadataByIdRequestBody;
}
export function serializeDeleteFileMetadataByIdScope(
  val: DeleteFileMetadataByIdScope
): SerializedData {
  return val;
}
export function deserializeDeleteFileMetadataByIdScope(
  val: any
): DeleteFileMetadataByIdScope {
  if (!sdIsString(val)) {
    throw new Error(
      String('Expecting a string for "DeleteFileMetadataByIdScope"')
    );
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new Error(String(''.concat('Invalid value: ', val) as string));
}
