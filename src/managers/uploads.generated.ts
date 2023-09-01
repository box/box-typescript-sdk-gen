import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeUploadUrl } from '../schemas.generated.js';
import { deserializeUploadUrl } from '../schemas.generated.js';
import { serializeConflictError } from '../schemas.generated.js';
import { deserializeConflictError } from '../schemas.generated.js';
import { Files } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { UploadUrl } from '../schemas.generated.js';
import { ConflictError } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { MultipartItem } from '../fetch.js';
import { serializeJson } from '../json.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
export interface UploadFileVersionRequestBodyArgAttributesField {
  readonly name: string;
  readonly contentModifiedAt?: string;
}
export interface UploadFileVersionRequestBodyArg {
  readonly attributes: UploadFileVersionRequestBodyArgAttributesField;
  readonly file: ByteStream;
  readonly fileFileName?: string;
  readonly fileContentType?: string;
}
export interface UploadFileVersionQueryParamsArg {
  readonly fields?: string;
}
export class UploadFileVersionHeadersArg {
  readonly ifMatch?: string;
  readonly contentMd5?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: UploadFileVersionHeadersArg) {
    Object.assign(this, fields);
  }
}
export interface UploadFileRequestBodyArgAttributesFieldParentField {
  readonly id: string;
}
export interface UploadFileRequestBodyArgAttributesField {
  readonly name: string;
  readonly parent: UploadFileRequestBodyArgAttributesFieldParentField;
  readonly contentCreatedAt?: string;
  readonly contentModifiedAt?: string;
}
export interface UploadFileRequestBodyArg {
  readonly attributes: UploadFileRequestBodyArgAttributesField;
  readonly file: ByteStream;
  readonly fileFileName?: string;
  readonly fileContentType?: string;
}
export interface UploadFileQueryParamsArg {
  readonly fields?: string;
}
export class UploadFileHeadersArg {
  readonly contentMd5?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: UploadFileHeadersArg) {
    Object.assign(this, fields);
  }
}
export interface PreflightFileUploadRequestBodyArgParentField {
  readonly id?: string;
}
export interface PreflightFileUploadRequestBodyArg {
  readonly name?: string;
  readonly size?: number;
  readonly parent?: PreflightFileUploadRequestBodyArgParentField;
}
export class PreflightFileUploadHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: PreflightFileUploadHeadersArg) {
    Object.assign(this, fields);
  }
}
export class UploadsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      UploadsManager,
      'uploadFileVersion' | 'uploadFile' | 'preflightFileUpload'
    >
  ) {
    Object.assign(this, fields);
  }
  async uploadFileVersion(
    fileId: string,
    requestBody: UploadFileVersionRequestBodyArg,
    queryParams: UploadFileVersionQueryParamsArg = {} satisfies UploadFileVersionQueryParamsArg,
    headers: UploadFileVersionHeadersArg = new UploadFileVersionHeadersArg({})
  ): Promise<Files> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{
        ['if-match']: toString(headers.ifMatch),
        ['content-md5']: toString(headers.contentMd5),
      },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://upload.box.com/api/2.0/files/',
        fileId,
        '/content'
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        multipartData: [
          {
            partName: 'attributes',
            body: serializeJson(
              serializeUploadFileVersionRequestBodyArgAttributesField(
                requestBody.attributes
              )
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
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFiles(deserializeJson(response.text));
  }
  async uploadFile(
    requestBody: UploadFileRequestBodyArg,
    queryParams: UploadFileQueryParamsArg = {} satisfies UploadFileQueryParamsArg,
    headers: UploadFileHeadersArg = new UploadFileHeadersArg({})
  ): Promise<Files> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({ ['fields']: toString(queryParams.fields) });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{ ['content-md5']: toString(headers.contentMd5) },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat('https://upload.box.com/api/2.0/files/content') as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        multipartData: [
          {
            partName: 'attributes',
            body: serializeJson(
              serializeUploadFileRequestBodyArgAttributesField(
                requestBody.attributes
              )
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
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFiles(deserializeJson(response.text));
  }
  async preflightFileUpload(
    requestBody: PreflightFileUploadRequestBodyArg = {} satisfies PreflightFileUploadRequestBodyArg,
    headers: PreflightFileUploadHeadersArg = new PreflightFileUploadHeadersArg(
      {}
    )
  ): Promise<UploadUrl> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/files/content') as string,
      {
        method: 'OPTIONS',
        headers: headersMap,
        body: serializeJson(
          serializePreflightFileUploadRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUploadUrl(deserializeJson(response.text));
  }
}
export function serializeUploadFileVersionRequestBodyArgAttributesField(
  val: UploadFileVersionRequestBodyArgAttributesField
): Json {
  return {
    ['name']: val.name,
    ['content_modified_at']:
      val.contentModifiedAt == void 0 ? void 0 : val.contentModifiedAt,
  };
}
export function deserializeUploadFileVersionRequestBodyArgAttributesField(
  val: any
): UploadFileVersionRequestBodyArgAttributesField {
  const name: string = val.name;
  const contentModifiedAt: undefined | string =
    val.content_modified_at == void 0 ? void 0 : val.content_modified_at;
  return {
    name: name,
    contentModifiedAt: contentModifiedAt,
  } satisfies UploadFileVersionRequestBodyArgAttributesField;
}
export function serializeUploadFileRequestBodyArgAttributesFieldParentField(
  val: UploadFileRequestBodyArgAttributesFieldParentField
): Json {
  return { ['id']: val.id };
}
export function deserializeUploadFileRequestBodyArgAttributesFieldParentField(
  val: any
): UploadFileRequestBodyArgAttributesFieldParentField {
  const id: string = val.id;
  return {
    id: id,
  } satisfies UploadFileRequestBodyArgAttributesFieldParentField;
}
export function serializeUploadFileRequestBodyArgAttributesField(
  val: UploadFileRequestBodyArgAttributesField
): Json {
  return {
    ['name']: val.name,
    ['parent']: serializeUploadFileRequestBodyArgAttributesFieldParentField(
      val.parent
    ),
    ['content_created_at']:
      val.contentCreatedAt == void 0 ? void 0 : val.contentCreatedAt,
    ['content_modified_at']:
      val.contentModifiedAt == void 0 ? void 0 : val.contentModifiedAt,
  };
}
export function deserializeUploadFileRequestBodyArgAttributesField(
  val: any
): UploadFileRequestBodyArgAttributesField {
  const name: string = val.name;
  const parent: UploadFileRequestBodyArgAttributesFieldParentField =
    deserializeUploadFileRequestBodyArgAttributesFieldParentField(val.parent);
  const contentCreatedAt: undefined | string =
    val.content_created_at == void 0 ? void 0 : val.content_created_at;
  const contentModifiedAt: undefined | string =
    val.content_modified_at == void 0 ? void 0 : val.content_modified_at;
  return {
    name: name,
    parent: parent,
    contentCreatedAt: contentCreatedAt,
    contentModifiedAt: contentModifiedAt,
  } satisfies UploadFileRequestBodyArgAttributesField;
}
export function serializePreflightFileUploadRequestBodyArgParentField(
  val: PreflightFileUploadRequestBodyArgParentField
): Json {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializePreflightFileUploadRequestBodyArgParentField(
  val: any
): PreflightFileUploadRequestBodyArgParentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies PreflightFileUploadRequestBodyArgParentField;
}
export function serializePreflightFileUploadRequestBodyArg(
  val: PreflightFileUploadRequestBodyArg
): Json {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['size']: val.size == void 0 ? void 0 : val.size,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializePreflightFileUploadRequestBodyArgParentField(val.parent),
  };
}
export function deserializePreflightFileUploadRequestBodyArg(
  val: any
): PreflightFileUploadRequestBodyArg {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  const parent: undefined | PreflightFileUploadRequestBodyArgParentField =
    val.parent == void 0
      ? void 0
      : deserializePreflightFileUploadRequestBodyArgParentField(val.parent);
  return {
    name: name,
    size: size,
    parent: parent,
  } satisfies PreflightFileUploadRequestBodyArg;
}
