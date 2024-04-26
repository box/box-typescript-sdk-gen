import { serializeTrashFolderRestored } from '../schemas.generated.js';
import { deserializeTrashFolderRestored } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeTrashFolder } from '../schemas.generated.js';
import { deserializeTrashFolder } from '../schemas.generated.js';
import { TrashFolderRestored } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { TrashFolder } from '../schemas.generated.js';
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
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class RestoreFolderFromTrashOptionals {
  readonly requestBody: RestoreFolderFromTrashRequestBody =
    {} satisfies RestoreFolderFromTrashRequestBody;
  readonly queryParams: RestoreFolderFromTrashQueryParams =
    {} satisfies RestoreFolderFromTrashQueryParams;
  readonly headers: RestoreFolderFromTrashHeaders =
    new RestoreFolderFromTrashHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      RestoreFolderFromTrashOptionals,
      'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          RestoreFolderFromTrashOptionals,
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
export interface RestoreFolderFromTrashOptionalsInput {
  readonly requestBody?: RestoreFolderFromTrashRequestBody;
  readonly queryParams?: RestoreFolderFromTrashQueryParams;
  readonly headers?: RestoreFolderFromTrashHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetTrashedFolderByIdOptionals {
  readonly queryParams: GetTrashedFolderByIdQueryParams =
    {} satisfies GetTrashedFolderByIdQueryParams;
  readonly headers: GetTrashedFolderByIdHeaders =
    new GetTrashedFolderByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetTrashedFolderByIdOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetTrashedFolderByIdOptionals,
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
export interface GetTrashedFolderByIdOptionalsInput {
  readonly queryParams?: GetTrashedFolderByIdQueryParams;
  readonly headers?: GetTrashedFolderByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteTrashedFolderByIdOptionals {
  readonly headers: DeleteTrashedFolderByIdHeaders =
    new DeleteTrashedFolderByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteTrashedFolderByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<DeleteTrashedFolderByIdOptionals, 'headers' | 'cancellationToken'>
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
export interface DeleteTrashedFolderByIdOptionalsInput {
  readonly headers?: DeleteTrashedFolderByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface RestoreFolderFromTrashRequestBodyParentField {
  readonly id?: string;
}
export interface RestoreFolderFromTrashRequestBody {
  readonly name?: string;
  readonly parent?: RestoreFolderFromTrashRequestBodyParentField;
}
export interface RestoreFolderFromTrashQueryParams {
  readonly fields?: readonly string[];
}
export class RestoreFolderFromTrashHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<RestoreFolderFromTrashHeaders, 'extraHeaders'> &
      Partial<Pick<RestoreFolderFromTrashHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface RestoreFolderFromTrashHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetTrashedFolderByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetTrashedFolderByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetTrashedFolderByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetTrashedFolderByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetTrashedFolderByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteTrashedFolderByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteTrashedFolderByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteTrashedFolderByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteTrashedFolderByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class TrashedFoldersManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      TrashedFoldersManager,
      | 'networkSession'
      | 'restoreFolderFromTrash'
      | 'getTrashedFolderById'
      | 'deleteTrashedFolderById'
    > &
      Partial<Pick<TrashedFoldersManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async restoreFolderFromTrash(
    folderId: string,
    optionalsInput: RestoreFolderFromTrashOptionalsInput = {}
  ): Promise<TrashFolderRestored> {
    const optionals: RestoreFolderFromTrashOptionals =
      new RestoreFolderFromTrashOptionals({
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
        '/folders/',
        toString(folderId) as string
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeRestoreFolderFromTrashRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTrashFolderRestored(response.data);
  }
  async getTrashedFolderById(
    folderId: string,
    optionalsInput: GetTrashedFolderByIdOptionalsInput = {}
  ): Promise<TrashFolder> {
    const optionals: GetTrashedFolderByIdOptionals =
      new GetTrashedFolderByIdOptionals({
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
        '/folders/',
        toString(folderId) as string,
        '/trash'
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
    return deserializeTrashFolder(response.data);
  }
  async deleteTrashedFolderById(
    folderId: string,
    optionalsInput: DeleteTrashedFolderByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteTrashedFolderByIdOptionals =
      new DeleteTrashedFolderByIdOptionals({
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
        '/folders/',
        toString(folderId) as string,
        '/trash'
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
export interface TrashedFoldersManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeRestoreFolderFromTrashRequestBodyParentField(
  val: RestoreFolderFromTrashRequestBodyParentField
): SerializedData {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeRestoreFolderFromTrashRequestBodyParentField(
  val: any
): RestoreFolderFromTrashRequestBodyParentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies RestoreFolderFromTrashRequestBodyParentField;
}
export function serializeRestoreFolderFromTrashRequestBody(
  val: RestoreFolderFromTrashRequestBody
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializeRestoreFolderFromTrashRequestBodyParentField(val.parent),
  };
}
export function deserializeRestoreFolderFromTrashRequestBody(
  val: any
): RestoreFolderFromTrashRequestBody {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const parent: undefined | RestoreFolderFromTrashRequestBodyParentField =
    val.parent == void 0
      ? void 0
      : deserializeRestoreFolderFromTrashRequestBodyParentField(val.parent);
  return {
    name: name,
    parent: parent,
  } satisfies RestoreFolderFromTrashRequestBody;
}
