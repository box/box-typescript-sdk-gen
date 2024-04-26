import { serializeFileVersions } from '../schemas.generated.js';
import { deserializeFileVersions } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeFileVersionFull } from '../schemas.generated.js';
import { deserializeFileVersionFull } from '../schemas.generated.js';
import { FileVersions } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { FileVersionFull } from '../schemas.generated.js';
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
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetFileVersionsOptionals {
  readonly queryParams: GetFileVersionsQueryParams =
    {} satisfies GetFileVersionsQueryParams;
  readonly headers: GetFileVersionsHeaders = new GetFileVersionsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFileVersionsOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetFileVersionsOptionals,
          'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetFileVersionsOptionalsInput {
  readonly queryParams?: GetFileVersionsQueryParams;
  readonly headers?: GetFileVersionsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFileVersionByIdOptionals {
  readonly queryParams: GetFileVersionByIdQueryParams =
    {} satisfies GetFileVersionByIdQueryParams;
  readonly headers: GetFileVersionByIdHeaders = new GetFileVersionByIdHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFileVersionByIdOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetFileVersionByIdOptionals,
          'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetFileVersionByIdOptionalsInput {
  readonly queryParams?: GetFileVersionByIdQueryParams;
  readonly headers?: GetFileVersionByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateFileVersionByIdOptionals {
  readonly requestBody: UpdateFileVersionByIdRequestBody =
    {} satisfies UpdateFileVersionByIdRequestBody;
  readonly headers: UpdateFileVersionByIdHeaders =
    new UpdateFileVersionByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateFileVersionByIdOptionals,
      'requestBody' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateFileVersionByIdOptionals,
          'requestBody' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.requestBody) {
      this.requestBody = fields.requestBody;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface UpdateFileVersionByIdOptionalsInput {
  readonly requestBody?: UpdateFileVersionByIdRequestBody;
  readonly headers?: UpdateFileVersionByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteFileVersionByIdOptionals {
  readonly headers: DeleteFileVersionByIdHeaders =
    new DeleteFileVersionByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteFileVersionByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<DeleteFileVersionByIdOptionals, 'headers' | 'cancellationToken'>
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
export interface DeleteFileVersionByIdOptionalsInput {
  readonly headers?: DeleteFileVersionByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class PromoteFileVersionOptionals {
  readonly requestBody: PromoteFileVersionRequestBody =
    {} satisfies PromoteFileVersionRequestBody;
  readonly queryParams: PromoteFileVersionQueryParams =
    {} satisfies PromoteFileVersionQueryParams;
  readonly headers: PromoteFileVersionHeaders = new PromoteFileVersionHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      PromoteFileVersionOptionals,
      'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          PromoteFileVersionOptionals,
          'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.requestBody) {
      this.requestBody = fields.requestBody;
    }
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface PromoteFileVersionOptionalsInput {
  readonly requestBody?: PromoteFileVersionRequestBody;
  readonly queryParams?: PromoteFileVersionQueryParams;
  readonly headers?: PromoteFileVersionHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
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
    fields: Omit<GetFileVersionsHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileVersionsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFileVersionsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetFileVersionByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetFileVersionByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetFileVersionByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileVersionByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFileVersionByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface UpdateFileVersionByIdRequestBody {
  readonly trashedAt?: string;
}
export class UpdateFileVersionByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateFileVersionByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateFileVersionByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateFileVersionByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteFileVersionByIdHeaders {
  readonly ifMatch?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteFileVersionByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteFileVersionByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.ifMatch) {
      this.ifMatch = fields.ifMatch;
    }
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteFileVersionByIdHeadersInput {
  readonly ifMatch?: string;
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<PromoteFileVersionHeaders, 'extraHeaders'> &
      Partial<Pick<PromoteFileVersionHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface PromoteFileVersionHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class FileVersionsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      FileVersionsManager,
      | 'networkSession'
      | 'getFileVersions'
      | 'getFileVersionById'
      | 'updateFileVersionById'
      | 'deleteFileVersionById'
      | 'promoteFileVersion'
    > &
      Partial<Pick<FileVersionsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getFileVersions(
    fileId: string,
    optionalsInput: GetFileVersionsOptionalsInput = {}
  ): Promise<FileVersions> {
    const optionals: GetFileVersionsOptionals = new GetFileVersionsOptionals({
      queryParams: optionalsInput.queryParams,
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: GetFileVersionByIdOptionalsInput = {}
  ): Promise<FileVersionFull> {
    const optionals: GetFileVersionByIdOptionals =
      new GetFileVersionByIdOptionals({
        queryParams: optionalsInput.queryParams,
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: UpdateFileVersionByIdOptionalsInput = {}
  ): Promise<FileVersionFull> {
    const optionals: UpdateFileVersionByIdOptionals =
      new UpdateFileVersionByIdOptionals({
        requestBody: optionalsInput.requestBody,
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const requestBody: any = optionals.requestBody;
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
    optionalsInput: DeleteFileVersionByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteFileVersionByIdOptionals =
      new DeleteFileVersionByIdOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: PromoteFileVersionOptionalsInput = {}
  ): Promise<FileVersionFull> {
    const optionals: PromoteFileVersionOptionals =
      new PromoteFileVersionOptionals({
        requestBody: optionalsInput.requestBody,
        queryParams: optionalsInput.queryParams,
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const requestBody: any = optionals.requestBody;
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
export interface FileVersionsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
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
    throw new BoxSdkError({
      message:
        'Expecting a string for "PromoteFileVersionRequestBodyTypeField"',
    });
  }
  if (val == 'file_version') {
    return 'file_version';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
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
