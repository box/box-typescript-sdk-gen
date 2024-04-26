import { serializeTrashWebLinkRestored } from '../schemas.generated.js';
import { deserializeTrashWebLinkRestored } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeTrashWebLink } from '../schemas.generated.js';
import { deserializeTrashWebLink } from '../schemas.generated.js';
import { TrashWebLinkRestored } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { TrashWebLink } from '../schemas.generated.js';
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
export class RestoreWeblinkFromTrashOptionals {
  readonly requestBody: RestoreWeblinkFromTrashRequestBody =
    {} satisfies RestoreWeblinkFromTrashRequestBody;
  readonly queryParams: RestoreWeblinkFromTrashQueryParams =
    {} satisfies RestoreWeblinkFromTrashQueryParams;
  readonly headers: RestoreWeblinkFromTrashHeaders =
    new RestoreWeblinkFromTrashHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      RestoreWeblinkFromTrashOptionals,
      'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          RestoreWeblinkFromTrashOptionals,
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
export interface RestoreWeblinkFromTrashOptionalsInput {
  readonly requestBody?: RestoreWeblinkFromTrashRequestBody;
  readonly queryParams?: RestoreWeblinkFromTrashQueryParams;
  readonly headers?: RestoreWeblinkFromTrashHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetTrashedWebLinkByIdOptionals {
  readonly queryParams: GetTrashedWebLinkByIdQueryParams =
    {} satisfies GetTrashedWebLinkByIdQueryParams;
  readonly headers: GetTrashedWebLinkByIdHeaders =
    new GetTrashedWebLinkByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetTrashedWebLinkByIdOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetTrashedWebLinkByIdOptionals,
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
export interface GetTrashedWebLinkByIdOptionalsInput {
  readonly queryParams?: GetTrashedWebLinkByIdQueryParams;
  readonly headers?: GetTrashedWebLinkByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteTrashedWebLinkByIdOptionals {
  readonly headers: DeleteTrashedWebLinkByIdHeaders =
    new DeleteTrashedWebLinkByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteTrashedWebLinkByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<DeleteTrashedWebLinkByIdOptionals, 'headers' | 'cancellationToken'>
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
export interface DeleteTrashedWebLinkByIdOptionalsInput {
  readonly headers?: DeleteTrashedWebLinkByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface RestoreWeblinkFromTrashRequestBodyParentField {
  readonly id?: string;
}
export interface RestoreWeblinkFromTrashRequestBody {
  readonly name?: string;
  readonly parent?: RestoreWeblinkFromTrashRequestBodyParentField;
}
export interface RestoreWeblinkFromTrashQueryParams {
  readonly fields?: readonly string[];
}
export class RestoreWeblinkFromTrashHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<RestoreWeblinkFromTrashHeaders, 'extraHeaders'> &
      Partial<Pick<RestoreWeblinkFromTrashHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface RestoreWeblinkFromTrashHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetTrashedWebLinkByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetTrashedWebLinkByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetTrashedWebLinkByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetTrashedWebLinkByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetTrashedWebLinkByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteTrashedWebLinkByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteTrashedWebLinkByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteTrashedWebLinkByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteTrashedWebLinkByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class TrashedWebLinksManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      TrashedWebLinksManager,
      | 'networkSession'
      | 'restoreWeblinkFromTrash'
      | 'getTrashedWebLinkById'
      | 'deleteTrashedWebLinkById'
    > &
      Partial<Pick<TrashedWebLinksManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async restoreWeblinkFromTrash(
    webLinkId: string,
    optionalsInput: RestoreWeblinkFromTrashOptionalsInput = {}
  ): Promise<TrashWebLinkRestored> {
    const optionals: any = new RestoreWeblinkFromTrashOptionals({
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
        '/web_links/',
        toString(webLinkId) as string
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeRestoreWeblinkFromTrashRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTrashWebLinkRestored(response.data);
  }
  async getTrashedWebLinkById(
    webLinkId: string,
    optionalsInput: GetTrashedWebLinkByIdOptionalsInput = {}
  ): Promise<TrashWebLink> {
    const optionals: any = new GetTrashedWebLinkByIdOptionals({
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
        '/web_links/',
        toString(webLinkId) as string,
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
    return deserializeTrashWebLink(response.data);
  }
  async deleteTrashedWebLinkById(
    webLinkId: string,
    optionalsInput: DeleteTrashedWebLinkByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: any = new DeleteTrashedWebLinkByIdOptionals({
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
        '/web_links/',
        toString(webLinkId) as string,
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
export interface TrashedWebLinksManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeRestoreWeblinkFromTrashRequestBodyParentField(
  val: any
): SerializedData {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeRestoreWeblinkFromTrashRequestBodyParentField(
  val: any
): RestoreWeblinkFromTrashRequestBodyParentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies RestoreWeblinkFromTrashRequestBodyParentField;
}
export function serializeRestoreWeblinkFromTrashRequestBody(
  val: any
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializeRestoreWeblinkFromTrashRequestBodyParentField(val.parent),
  };
}
export function deserializeRestoreWeblinkFromTrashRequestBody(
  val: any
): RestoreWeblinkFromTrashRequestBody {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const parent: undefined | RestoreWeblinkFromTrashRequestBodyParentField =
    val.parent == void 0
      ? void 0
      : deserializeRestoreWeblinkFromTrashRequestBodyParentField(val.parent);
  return {
    name: name,
    parent: parent,
  } satisfies RestoreWeblinkFromTrashRequestBody;
}
