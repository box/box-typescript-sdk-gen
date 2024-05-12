import { serializeMetadatas } from '../schemas/metadatas.generated.js';
import { deserializeMetadatas } from '../schemas/metadatas.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeMetadataFull } from '../schemas/metadataFull.generated.js';
import { deserializeMetadataFull } from '../schemas/metadataFull.generated.js';
import { Metadatas } from '../schemas/metadatas.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { MetadataFull } from '../schemas/metadataFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
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
export class GetFileMetadataOptionals {
  readonly headers: GetFileMetadataHeaders = new GetFileMetadataHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<GetFileMetadataOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<GetFileMetadataOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetFileMetadataOptionalsInput {
  readonly headers?: GetFileMetadataHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFileMetadataByIdOptionals {
  readonly headers: GetFileMetadataByIdHeaders = new GetFileMetadataByIdHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFileMetadataByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetFileMetadataByIdOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetFileMetadataByIdOptionalsInput {
  readonly headers?: GetFileMetadataByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateFileMetadataByIdOptionals {
  readonly headers: CreateFileMetadataByIdHeaders =
    new CreateFileMetadataByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateFileMetadataByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<CreateFileMetadataByIdOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateFileMetadataByIdOptionalsInput {
  readonly headers?: CreateFileMetadataByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateFileMetadataByIdOptionals {
  readonly headers: UpdateFileMetadataByIdHeaders =
    new UpdateFileMetadataByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateFileMetadataByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<UpdateFileMetadataByIdOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface UpdateFileMetadataByIdOptionalsInput {
  readonly headers?: UpdateFileMetadataByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteFileMetadataByIdOptionals {
  readonly headers: DeleteFileMetadataByIdHeaders =
    new DeleteFileMetadataByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteFileMetadataByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<DeleteFileMetadataByIdOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface DeleteFileMetadataByIdOptionalsInput {
  readonly headers?: DeleteFileMetadataByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFileMetadataHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetFileMetadataHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileMetadataHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFileMetadataHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type GetFileMetadataByIdScope = 'global' | 'enterprise';
export class GetFileMetadataByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetFileMetadataByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileMetadataByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFileMetadataByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type CreateFileMetadataByIdScope = 'global' | 'enterprise';
export type CreateFileMetadataByIdRequestBody = {
  readonly [key: string]: any;
};
export class CreateFileMetadataByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateFileMetadataByIdHeaders, 'extraHeaders'> &
      Partial<Pick<CreateFileMetadataByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateFileMetadataByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<UpdateFileMetadataByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateFileMetadataByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateFileMetadataByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type DeleteFileMetadataByIdScope = 'global' | 'enterprise';
export class DeleteFileMetadataByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteFileMetadataByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteFileMetadataByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteFileMetadataByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class FileMetadataManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      FileMetadataManager,
      | 'networkSession'
      | 'getFileMetadata'
      | 'getFileMetadataById'
      | 'createFileMetadataById'
      | 'updateFileMetadataById'
      | 'deleteFileMetadataById'
    > &
      Partial<Pick<FileMetadataManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getFileMetadata(
    fileId: string,
    optionalsInput: GetFileMetadataOptionalsInput = {}
  ): Promise<Metadatas> {
    const optionals: GetFileMetadataOptionals = new GetFileMetadataOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: GetFileMetadataByIdOptionalsInput = {}
  ): Promise<MetadataFull> {
    const optionals: GetFileMetadataByIdOptionals =
      new GetFileMetadataByIdOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: CreateFileMetadataByIdOptionalsInput = {}
  ): Promise<MetadataFull> {
    const optionals: CreateFileMetadataByIdOptionals =
      new CreateFileMetadataByIdOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: UpdateFileMetadataByIdOptionalsInput = {}
  ): Promise<MetadataFull> {
    const optionals: UpdateFileMetadataByIdOptionals =
      new UpdateFileMetadataByIdOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: DeleteFileMetadataByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteFileMetadataByIdOptionals =
      new DeleteFileMetadataByIdOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
export interface FileMetadataManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
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
    throw new BoxSdkError({
      message: 'Expecting a string for "GetFileMetadataByIdScope"',
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
export function serializeCreateFileMetadataByIdScope(
  val: CreateFileMetadataByIdScope
): SerializedData {
  return val;
}
export function deserializeCreateFileMetadataByIdScope(
  val: any
): CreateFileMetadataByIdScope {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CreateFileMetadataByIdScope"',
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
export function serializeCreateFileMetadataByIdRequestBody(
  val: CreateFileMetadataByIdRequestBody
): SerializedData {
  return Object.fromEntries(
    Object.entries(val).map(([k, v]: [string, any]) => [
      k,
      (function (v: any): any {
        return v;
      })(v),
    ])
  ) as {
    readonly [key: string]: any;
  };
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
    throw new BoxSdkError({
      message: 'Expecting a string for "UpdateFileMetadataByIdScope"',
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
export function serializeUpdateFileMetadataByIdRequestBodyOpField(
  val: UpdateFileMetadataByIdRequestBodyOpField
): SerializedData {
  return val;
}
export function deserializeUpdateFileMetadataByIdRequestBodyOpField(
  val: any
): UpdateFileMetadataByIdRequestBodyOpField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateFileMetadataByIdRequestBodyOpField"',
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
    throw new BoxSdkError({
      message: 'Expecting a string for "DeleteFileMetadataByIdScope"',
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
