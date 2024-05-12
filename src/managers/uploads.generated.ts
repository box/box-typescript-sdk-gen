import { serializeFiles } from '../schemas/files.generated.js';
import { deserializeFiles } from '../schemas/files.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeUploadUrl } from '../schemas/uploadUrl.generated.js';
import { deserializeUploadUrl } from '../schemas/uploadUrl.generated.js';
import { serializeConflictError } from '../schemas/conflictError.generated.js';
import { deserializeConflictError } from '../schemas/conflictError.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { Files } from '../schemas/files.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { UploadUrl } from '../schemas/uploadUrl.generated.js';
import { ConflictError } from '../schemas/conflictError.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { DateTime } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { MultipartItem } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class UploadFileVersionOptionals {
  readonly queryParams: UploadFileVersionQueryParams =
    {} satisfies UploadFileVersionQueryParams;
  readonly headers: UploadFileVersionHeaders = new UploadFileVersionHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UploadFileVersionOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UploadFileVersionOptionals,
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
export interface UploadFileVersionOptionalsInput {
  readonly queryParams?: UploadFileVersionQueryParams;
  readonly headers?: UploadFileVersionHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UploadFileOptionals {
  readonly queryParams: UploadFileQueryParams =
    {} satisfies UploadFileQueryParams;
  readonly headers: UploadFileHeaders = new UploadFileHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UploadFileOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UploadFileOptionals,
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
export interface UploadFileOptionalsInput {
  readonly queryParams?: UploadFileQueryParams;
  readonly headers?: UploadFileHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface UploadFileVersionRequestBodyAttributesField {
  readonly name: string;
  readonly contentModifiedAt?: DateTime;
}
export interface UploadFileVersionRequestBody {
  readonly attributes: UploadFileVersionRequestBodyAttributesField;
  readonly file: ByteStream;
  readonly fileFileName?: string;
  readonly fileContentType?: string;
}
export interface UploadFileVersionQueryParams {
  readonly fields?: readonly string[];
}
export class UploadFileVersionHeaders {
  readonly ifMatch?: string;
  readonly contentMd5?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UploadFileVersionHeaders, 'extraHeaders'> &
      Partial<Pick<UploadFileVersionHeaders, 'extraHeaders'>>
  ) {
    if (fields.ifMatch) {
      this.ifMatch = fields.ifMatch;
    }
    if (fields.contentMd5) {
      this.contentMd5 = fields.contentMd5;
    }
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UploadFileVersionHeadersInput {
  readonly ifMatch?: string;
  readonly contentMd5?: string;
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface UploadFileRequestBodyAttributesParentField {
  readonly id: string;
}
export interface UploadFileRequestBodyAttributesField {
  readonly name: string;
  readonly parent: UploadFileRequestBodyAttributesParentField;
  readonly contentCreatedAt?: DateTime;
  readonly contentModifiedAt?: DateTime;
}
export interface UploadFileRequestBody {
  readonly attributes: UploadFileRequestBodyAttributesField;
  readonly file: ByteStream;
  readonly fileFileName?: string;
  readonly fileContentType?: string;
}
export interface UploadFileQueryParams {
  readonly fields?: readonly string[];
}
export class UploadFileHeaders {
  readonly contentMd5?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UploadFileHeaders, 'extraHeaders'> &
      Partial<Pick<UploadFileHeaders, 'extraHeaders'>>
  ) {
    if (fields.contentMd5) {
      this.contentMd5 = fields.contentMd5;
    }
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UploadFileHeadersInput {
  readonly contentMd5?: string;
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface PreflightFileUploadCheckRequestBodyParentField {
  readonly id?: string;
}
export interface PreflightFileUploadCheckRequestBody {
  readonly name?: string;
  readonly size?: number;
  readonly parent?: PreflightFileUploadCheckRequestBodyParentField;
}
export class PreflightFileUploadCheckHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<PreflightFileUploadCheckHeaders, 'extraHeaders'> &
      Partial<Pick<PreflightFileUploadCheckHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface PreflightFileUploadCheckHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class UploadsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      UploadsManager,
      | 'networkSession'
      | 'uploadFileVersion'
      | 'uploadFile'
      | 'preflightFileUploadCheck'
    > &
      Partial<Pick<UploadsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async uploadFileVersion(
    fileId: string,
    requestBody: UploadFileVersionRequestBody,
    optionalsInput: UploadFileVersionOptionalsInput = {}
  ): Promise<Files> {
    const optionals: UploadFileVersionOptionals =
      new UploadFileVersionOptionals({
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
    } = prepareParams({
      ...{
        ['if-match']: toString(headers.ifMatch) as string,
        ['content-md5']: toString(headers.contentMd5) as string,
      },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.uploadUrl,
        '/files/',
        toString(fileId) as string,
        '/content'
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        multipartData: [
          {
            partName: 'attributes',
            data: serializeUploadFileVersionRequestBodyAttributesField(
              requestBody.attributes
            ),
          } satisfies MultipartItem,
          {
            partName: 'file',
            fileStream: requestBody.file,
            fileName: requestBody.fileFileName,
            contentType: requestBody.fileContentType,
          } satisfies MultipartItem,
        ],
        contentType: 'multipart/form-data',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFiles(response.data);
  }
  async uploadFile(
    requestBody: UploadFileRequestBody,
    optionalsInput: UploadFileOptionalsInput = {}
  ): Promise<Files> {
    const optionals: UploadFileOptionals = new UploadFileOptionals({
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
    } = prepareParams({
      ...{ ['content-md5']: toString(headers.contentMd5) as string },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.uploadUrl,
        '/files/content'
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        multipartData: [
          {
            partName: 'attributes',
            data: serializeUploadFileRequestBodyAttributesField(
              requestBody.attributes
            ),
          } satisfies MultipartItem,
          {
            partName: 'file',
            fileStream: requestBody.file,
            fileName: requestBody.fileFileName,
            contentType: requestBody.fileContentType,
          } satisfies MultipartItem,
        ],
        contentType: 'multipart/form-data',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFiles(response.data);
  }
  async preflightFileUploadCheck(
    requestBody: PreflightFileUploadCheckRequestBody = {} satisfies PreflightFileUploadCheckRequestBody,
    headersInput: PreflightFileUploadCheckHeadersInput = new PreflightFileUploadCheckHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<UploadUrl> {
    const headers: PreflightFileUploadCheckHeaders =
      new PreflightFileUploadCheckHeaders({
        extraHeaders: headersInput.extraHeaders,
      });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/content'
      ) as string,
      {
        method: 'OPTIONS',
        headers: headersMap,
        data: serializePreflightFileUploadCheckRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUploadUrl(response.data);
  }
}
export interface UploadsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeUploadFileVersionRequestBodyAttributesField(
  val: UploadFileVersionRequestBodyAttributesField
): SerializedData {
  return {
    ['name']: val.name,
    ['content_modified_at']:
      val.contentModifiedAt == void 0
        ? void 0
        : serializeDateTime(val.contentModifiedAt),
  };
}
export function deserializeUploadFileVersionRequestBodyAttributesField(
  val: any
): UploadFileVersionRequestBodyAttributesField {
  const name: string = val.name;
  const contentModifiedAt: undefined | DateTime =
    val.content_modified_at == void 0
      ? void 0
      : deserializeDateTime(val.content_modified_at);
  return {
    name: name,
    contentModifiedAt: contentModifiedAt,
  } satisfies UploadFileVersionRequestBodyAttributesField;
}
export function serializeUploadFileRequestBodyAttributesParentField(
  val: UploadFileRequestBodyAttributesParentField
): SerializedData {
  return { ['id']: val.id };
}
export function deserializeUploadFileRequestBodyAttributesParentField(
  val: any
): UploadFileRequestBodyAttributesParentField {
  const id: string = val.id;
  return { id: id } satisfies UploadFileRequestBodyAttributesParentField;
}
export function serializeUploadFileRequestBodyAttributesField(
  val: UploadFileRequestBodyAttributesField
): SerializedData {
  return {
    ['name']: val.name,
    ['parent']: serializeUploadFileRequestBodyAttributesParentField(val.parent),
    ['content_created_at']:
      val.contentCreatedAt == void 0
        ? void 0
        : serializeDateTime(val.contentCreatedAt),
    ['content_modified_at']:
      val.contentModifiedAt == void 0
        ? void 0
        : serializeDateTime(val.contentModifiedAt),
  };
}
export function deserializeUploadFileRequestBodyAttributesField(
  val: any
): UploadFileRequestBodyAttributesField {
  const name: string = val.name;
  const parent: UploadFileRequestBodyAttributesParentField =
    deserializeUploadFileRequestBodyAttributesParentField(val.parent);
  const contentCreatedAt: undefined | DateTime =
    val.content_created_at == void 0
      ? void 0
      : deserializeDateTime(val.content_created_at);
  const contentModifiedAt: undefined | DateTime =
    val.content_modified_at == void 0
      ? void 0
      : deserializeDateTime(val.content_modified_at);
  return {
    name: name,
    parent: parent,
    contentCreatedAt: contentCreatedAt,
    contentModifiedAt: contentModifiedAt,
  } satisfies UploadFileRequestBodyAttributesField;
}
export function serializePreflightFileUploadCheckRequestBodyParentField(
  val: PreflightFileUploadCheckRequestBodyParentField
): SerializedData {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializePreflightFileUploadCheckRequestBodyParentField(
  val: any
): PreflightFileUploadCheckRequestBodyParentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies PreflightFileUploadCheckRequestBodyParentField;
}
export function serializePreflightFileUploadCheckRequestBody(
  val: PreflightFileUploadCheckRequestBody
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['size']: val.size == void 0 ? void 0 : val.size,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializePreflightFileUploadCheckRequestBodyParentField(val.parent),
  };
}
export function deserializePreflightFileUploadCheckRequestBody(
  val: any
): PreflightFileUploadCheckRequestBody {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  const parent: undefined | PreflightFileUploadCheckRequestBodyParentField =
    val.parent == void 0
      ? void 0
      : deserializePreflightFileUploadCheckRequestBodyParentField(val.parent);
  return {
    name: name,
    size: size,
    parent: parent,
  } satisfies PreflightFileUploadCheckRequestBody;
}
