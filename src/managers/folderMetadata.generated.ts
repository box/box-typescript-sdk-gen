import { serializeMetadatas } from '../schemas.generated.js';
import { deserializeMetadatas } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeMetadataFull } from '../schemas.generated.js';
import { deserializeMetadataFull } from '../schemas.generated.js';
import { Metadatas } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { MetadataFull } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetFolderMetadataHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFolderMetadataHeaders, 'extraHeaders'>
      | Partial<Pick<GetFolderMetadataHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type GetFolderMetadataByIdScope = 'global' | 'enterprise';
export class GetFolderMetadataByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFolderMetadataByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetFolderMetadataByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateFolderMetadataByIdScope = 'global' | 'enterprise';
export type CreateFolderMetadataByIdRequestBody = {
  readonly [key: string]: string;
};
export class CreateFolderMetadataByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateFolderMetadataByIdHeaders, 'extraHeaders'>
      | Partial<Pick<CreateFolderMetadataByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFolderMetadataByIdScope = 'global' | 'enterprise';
export type UpdateFolderMetadataByIdRequestBodyOpField =
  | 'add'
  | 'replace'
  | 'remove'
  | 'test'
  | 'move'
  | 'copy';
export interface UpdateFolderMetadataByIdRequestBody {
  readonly op?: UpdateFolderMetadataByIdRequestBodyOpField;
  readonly path?: string;
  readonly value?: string;
  readonly from?: string;
}
export class UpdateFolderMetadataByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFolderMetadataByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateFolderMetadataByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type DeleteFolderMetadataByIdScope = 'global' | 'enterprise';
export class DeleteFolderMetadataByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFolderMetadataByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteFolderMetadataByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class FolderMetadataManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          FolderMetadataManager,
          | 'networkSession'
          | 'getFolderMetadata'
          | 'getFolderMetadataById'
          | 'createFolderMetadataById'
          | 'updateFolderMetadataById'
          | 'deleteFolderMetadataById'
        >
      | Partial<Pick<FolderMetadataManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getFolderMetadata(
    folderId: string,
    headers: GetFolderMetadataHeaders = new GetFolderMetadataHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Metadatas> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/folders/',
        toString(folderId) as string,
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
  async getFolderMetadataById(
    folderId: string,
    scope: GetFolderMetadataByIdScope,
    templateKey: string,
    headers: GetFolderMetadataByIdHeaders = new GetFolderMetadataByIdHeaders(
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
        '/folders/',
        toString(folderId) as string,
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
  async createFolderMetadataById(
    folderId: string,
    scope: CreateFolderMetadataByIdScope,
    templateKey: string,
    requestBody: CreateFolderMetadataByIdRequestBody,
    headers: CreateFolderMetadataByIdHeaders = new CreateFolderMetadataByIdHeaders(
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
        '/folders/',
        toString(folderId) as string,
        '/metadata/',
        toString(scope) as string,
        '/',
        toString(templateKey) as string
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateFolderMetadataByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataFull(response.data);
  }
  async updateFolderMetadataById(
    folderId: string,
    scope: UpdateFolderMetadataByIdScope,
    templateKey: string,
    requestBody: readonly UpdateFolderMetadataByIdRequestBody[],
    headers: UpdateFolderMetadataByIdHeaders = new UpdateFolderMetadataByIdHeaders(
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
        '/folders/',
        toString(folderId) as string,
        '/metadata/',
        toString(scope) as string,
        '/',
        toString(templateKey) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: requestBody.map(
          serializeUpdateFolderMetadataByIdRequestBody
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
  async deleteFolderMetadataById(
    folderId: string,
    scope: DeleteFolderMetadataByIdScope,
    templateKey: string,
    headers: DeleteFolderMetadataByIdHeaders = new DeleteFolderMetadataByIdHeaders(
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
export function serializeGetFolderMetadataByIdScope(
  val: GetFolderMetadataByIdScope
): SerializedData {
  return val;
}
export function deserializeGetFolderMetadataByIdScope(
  val: any
): GetFolderMetadataByIdScope {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "GetFolderMetadataByIdScope"',
    });
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateFolderMetadataByIdScope(
  val: CreateFolderMetadataByIdScope
): SerializedData {
  return val;
}
export function deserializeCreateFolderMetadataByIdScope(
  val: any
): CreateFolderMetadataByIdScope {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CreateFolderMetadataByIdScope"',
    });
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateFolderMetadataByIdRequestBody(
  val: CreateFolderMetadataByIdRequestBody
): SerializedData {
  return val;
}
export function deserializeCreateFolderMetadataByIdRequestBody(
  val: any
): CreateFolderMetadataByIdRequestBody {
  return val;
}
export function serializeUpdateFolderMetadataByIdScope(
  val: UpdateFolderMetadataByIdScope
): SerializedData {
  return val;
}
export function deserializeUpdateFolderMetadataByIdScope(
  val: any
): UpdateFolderMetadataByIdScope {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "UpdateFolderMetadataByIdScope"',
    });
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateFolderMetadataByIdRequestBodyOpField(
  val: UpdateFolderMetadataByIdRequestBodyOpField
): SerializedData {
  return val;
}
export function deserializeUpdateFolderMetadataByIdRequestBodyOpField(
  val: any
): UpdateFolderMetadataByIdRequestBodyOpField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateFolderMetadataByIdRequestBodyOpField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateFolderMetadataByIdRequestBody(
  val: UpdateFolderMetadataByIdRequestBody
): SerializedData {
  return {
    ['op']:
      val.op == void 0
        ? void 0
        : serializeUpdateFolderMetadataByIdRequestBodyOpField(val.op),
    ['path']: val.path == void 0 ? void 0 : val.path,
    ['value']: val.value == void 0 ? void 0 : val.value,
    ['from']: val.from == void 0 ? void 0 : val.from,
  };
}
export function deserializeUpdateFolderMetadataByIdRequestBody(
  val: any
): UpdateFolderMetadataByIdRequestBody {
  const op: undefined | UpdateFolderMetadataByIdRequestBodyOpField =
    val.op == void 0
      ? void 0
      : deserializeUpdateFolderMetadataByIdRequestBodyOpField(val.op);
  const path: undefined | string = val.path == void 0 ? void 0 : val.path;
  const value: undefined | string = val.value == void 0 ? void 0 : val.value;
  const from: undefined | string = val.from == void 0 ? void 0 : val.from;
  return {
    op: op,
    path: path,
    value: value,
    from: from,
  } satisfies UpdateFolderMetadataByIdRequestBody;
}
export function serializeDeleteFolderMetadataByIdScope(
  val: DeleteFolderMetadataByIdScope
): SerializedData {
  return val;
}
export function deserializeDeleteFolderMetadataByIdScope(
  val: any
): DeleteFolderMetadataByIdScope {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "DeleteFolderMetadataByIdScope"',
    });
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
