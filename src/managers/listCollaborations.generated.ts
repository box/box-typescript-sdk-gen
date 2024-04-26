import { serializeCollaborations } from '../schemas.generated.js';
import { deserializeCollaborations } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { Collaborations } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
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
export interface GetFileCollaborationsQueryParams {
  readonly fields?: readonly string[];
  readonly limit?: number;
  readonly marker?: string;
}
export class GetFileCollaborationsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileCollaborationsHeaders, 'extraHeaders'>
      | Partial<Pick<GetFileCollaborationsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetFileCollaborationsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetFolderCollaborationsQueryParams {
  readonly fields?: readonly string[];
}
export class GetFolderCollaborationsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFolderCollaborationsHeaders, 'extraHeaders'>
      | Partial<Pick<GetFolderCollaborationsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetFolderCollaborationsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type GetCollaborationsQueryParamsStatusField = 'pending';
export interface GetCollaborationsQueryParams {
  readonly status: GetCollaborationsQueryParamsStatusField;
  readonly fields?: readonly string[];
  readonly offset?: number;
  readonly limit?: number;
}
export class GetCollaborationsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetCollaborationsHeaders, 'extraHeaders'>
      | Partial<Pick<GetCollaborationsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetCollaborationsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetGroupCollaborationsQueryParams {
  readonly limit?: number;
  readonly offset?: number;
}
export class GetGroupCollaborationsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetGroupCollaborationsHeaders, 'extraHeaders'>
      | Partial<Pick<GetGroupCollaborationsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetGroupCollaborationsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class ListCollaborationsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          ListCollaborationsManager,
          | 'networkSession'
          | 'getFileCollaborations'
          | 'getFolderCollaborations'
          | 'getCollaborations'
          | 'getGroupCollaborations'
        >
      | Partial<Pick<ListCollaborationsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getFileCollaborations(
    fileId: string,
    queryParams: GetFileCollaborationsQueryParams = {} satisfies GetFileCollaborationsQueryParams,
    headersInput: GetFileCollaborationsHeadersInput = new GetFileCollaborationsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Collaborations> {
    const headers: any = new GetFileCollaborationsHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
      ['limit']: toString(queryParams.limit) as string,
      ['marker']: toString(queryParams.marker) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '/collaborations'
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
    return deserializeCollaborations(response.data);
  }
  async getFolderCollaborations(
    folderId: string,
    queryParams: GetFolderCollaborationsQueryParams = {} satisfies GetFolderCollaborationsQueryParams,
    headersInput: GetFolderCollaborationsHeadersInput = new GetFolderCollaborationsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Collaborations> {
    const headers: any = new GetFolderCollaborationsHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
        '/folders/',
        toString(folderId) as string,
        '/collaborations'
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
    return deserializeCollaborations(response.data);
  }
  async getCollaborations(
    queryParams: GetCollaborationsQueryParams,
    headersInput: GetCollaborationsHeadersInput = new GetCollaborationsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Collaborations> {
    const headers: any = new GetCollaborationsHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['status']: toString(queryParams.status) as string,
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
      ['offset']: toString(queryParams.offset) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/collaborations'
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
    return deserializeCollaborations(response.data);
  }
  async getGroupCollaborations(
    groupId: string,
    queryParams: GetGroupCollaborationsQueryParams = {} satisfies GetGroupCollaborationsQueryParams,
    headersInput: GetGroupCollaborationsHeadersInput = new GetGroupCollaborationsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Collaborations> {
    const headers: any = new GetGroupCollaborationsHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['limit']: toString(queryParams.limit) as string,
      ['offset']: toString(queryParams.offset) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/groups/',
        toString(groupId) as string,
        '/collaborations'
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
    return deserializeCollaborations(response.data);
  }
}
export interface ListCollaborationsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeGetCollaborationsQueryParamsStatusField(
  val: any
): SerializedData {
  return val;
}
export function deserializeGetCollaborationsQueryParamsStatusField(
  val: any
): GetCollaborationsQueryParamsStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "GetCollaborationsQueryParamsStatusField"',
    });
  }
  if (val == 'pending') {
    return 'pending';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
