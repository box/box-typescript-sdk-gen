import { serializeCollaborations } from '../schemas/collaborations.generated.js';
import { deserializeCollaborations } from '../schemas/collaborations.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { Collaborations } from '../schemas/collaborations.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
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
export class GetFileCollaborationsOptionals {
  readonly queryParams: GetFileCollaborationsQueryParams =
    {} satisfies GetFileCollaborationsQueryParams;
  readonly headers: GetFileCollaborationsHeaders =
    new GetFileCollaborationsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFileCollaborationsOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetFileCollaborationsOptionals,
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
export interface GetFileCollaborationsOptionalsInput {
  readonly queryParams?: GetFileCollaborationsQueryParams;
  readonly headers?: GetFileCollaborationsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFolderCollaborationsOptionals {
  readonly queryParams: GetFolderCollaborationsQueryParams =
    {} satisfies GetFolderCollaborationsQueryParams;
  readonly headers: GetFolderCollaborationsHeaders =
    new GetFolderCollaborationsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFolderCollaborationsOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetFolderCollaborationsOptionals,
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
export interface GetFolderCollaborationsOptionalsInput {
  readonly queryParams?: GetFolderCollaborationsQueryParams;
  readonly headers?: GetFolderCollaborationsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetCollaborationsOptionals {
  readonly headers: GetCollaborationsHeaders = new GetCollaborationsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<GetCollaborationsOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<GetCollaborationsOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetCollaborationsOptionalsInput {
  readonly headers?: GetCollaborationsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetGroupCollaborationsOptionals {
  readonly queryParams: GetGroupCollaborationsQueryParams =
    {} satisfies GetGroupCollaborationsQueryParams;
  readonly headers: GetGroupCollaborationsHeaders =
    new GetGroupCollaborationsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetGroupCollaborationsOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetGroupCollaborationsOptionals,
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
export interface GetGroupCollaborationsOptionalsInput {
  readonly queryParams?: GetGroupCollaborationsQueryParams;
  readonly headers?: GetGroupCollaborationsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
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
    fields: Omit<GetFileCollaborationsHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileCollaborationsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<GetFolderCollaborationsHeaders, 'extraHeaders'> &
      Partial<Pick<GetFolderCollaborationsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<GetCollaborationsHeaders, 'extraHeaders'> &
      Partial<Pick<GetCollaborationsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<GetGroupCollaborationsHeaders, 'extraHeaders'> &
      Partial<Pick<GetGroupCollaborationsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<
      ListCollaborationsManager,
      | 'networkSession'
      | 'getFileCollaborations'
      | 'getFolderCollaborations'
      | 'getCollaborations'
      | 'getGroupCollaborations'
    > &
      Partial<Pick<ListCollaborationsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getFileCollaborations(
    fileId: string,
    optionalsInput: GetFileCollaborationsOptionalsInput = {}
  ): Promise<Collaborations> {
    const optionals: GetFileCollaborationsOptionals =
      new GetFileCollaborationsOptionals({
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
      ['marker']: toString(queryParams.marker) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/files/',
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
    optionalsInput: GetFolderCollaborationsOptionalsInput = {}
  ): Promise<Collaborations> {
    const optionals: GetFolderCollaborationsOptionals =
      new GetFolderCollaborationsOptionals({
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
        '/2.0/folders/',
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
    optionalsInput: GetCollaborationsOptionalsInput = {}
  ): Promise<Collaborations> {
    const optionals: GetCollaborationsOptionals =
      new GetCollaborationsOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
        '/2.0/collaborations'
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
    optionalsInput: GetGroupCollaborationsOptionalsInput = {}
  ): Promise<Collaborations> {
    const optionals: GetGroupCollaborationsOptionals =
      new GetGroupCollaborationsOptionals({
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
      ['limit']: toString(queryParams.limit) as string,
      ['offset']: toString(queryParams.offset) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/groups/',
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
  val: GetCollaborationsQueryParamsStatusField
): SerializedData {
  return val;
}
export function deserializeGetCollaborationsQueryParamsStatusField(
  val: SerializedData
): GetCollaborationsQueryParamsStatusField {
  if (val == 'pending') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize GetCollaborationsQueryParamsStatusField",
  });
}
