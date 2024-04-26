import { serializeComments } from '../schemas.generated.js';
import { deserializeComments } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeCommentFull } from '../schemas.generated.js';
import { deserializeCommentFull } from '../schemas.generated.js';
import { Comments } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { CommentFull } from '../schemas.generated.js';
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
export class GetFileCommentsOptionals {
  readonly queryParams: GetFileCommentsQueryParams =
    {} satisfies GetFileCommentsQueryParams;
  readonly headers: GetFileCommentsHeaders = new GetFileCommentsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFileCommentsOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetFileCommentsOptionals,
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
export interface GetFileCommentsOptionalsInput {
  readonly queryParams?: GetFileCommentsQueryParams;
  readonly headers?: GetFileCommentsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetCommentByIdOptionals {
  readonly queryParams: GetCommentByIdQueryParams =
    {} satisfies GetCommentByIdQueryParams;
  readonly headers: GetCommentByIdHeaders = new GetCommentByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetCommentByIdOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetCommentByIdOptionals,
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
export interface GetCommentByIdOptionalsInput {
  readonly queryParams?: GetCommentByIdQueryParams;
  readonly headers?: GetCommentByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateCommentByIdOptionals {
  readonly requestBody: UpdateCommentByIdRequestBody =
    {} satisfies UpdateCommentByIdRequestBody;
  readonly queryParams: UpdateCommentByIdQueryParams =
    {} satisfies UpdateCommentByIdQueryParams;
  readonly headers: UpdateCommentByIdHeaders = new UpdateCommentByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateCommentByIdOptionals,
      'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateCommentByIdOptionals,
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
export interface UpdateCommentByIdOptionalsInput {
  readonly requestBody?: UpdateCommentByIdRequestBody;
  readonly queryParams?: UpdateCommentByIdQueryParams;
  readonly headers?: UpdateCommentByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteCommentByIdOptionals {
  readonly headers: DeleteCommentByIdHeaders = new DeleteCommentByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<DeleteCommentByIdOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<DeleteCommentByIdOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface DeleteCommentByIdOptionalsInput {
  readonly headers?: DeleteCommentByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateCommentOptionals {
  readonly queryParams: CreateCommentQueryParams =
    {} satisfies CreateCommentQueryParams;
  readonly headers: CreateCommentHeaders = new CreateCommentHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateCommentOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateCommentOptionals,
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
export interface CreateCommentOptionalsInput {
  readonly queryParams?: CreateCommentQueryParams;
  readonly headers?: CreateCommentHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetFileCommentsQueryParams {
  readonly fields?: readonly string[];
  readonly limit?: number;
  readonly offset?: number;
}
export class GetFileCommentsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetFileCommentsHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileCommentsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFileCommentsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetCommentByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetCommentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetCommentByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetCommentByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetCommentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface UpdateCommentByIdRequestBody {
  readonly message?: string;
}
export interface UpdateCommentByIdQueryParams {
  readonly fields?: readonly string[];
}
export class UpdateCommentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateCommentByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateCommentByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateCommentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteCommentByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteCommentByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteCommentByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteCommentByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type CreateCommentRequestBodyItemTypeField = 'file' | 'comment';
export interface CreateCommentRequestBodyItemField {
  readonly id: string;
  readonly type: CreateCommentRequestBodyItemTypeField;
}
export interface CreateCommentRequestBody {
  readonly message: string;
  readonly taggedMessage?: string;
  readonly item: CreateCommentRequestBodyItemField;
}
export interface CreateCommentQueryParams {
  readonly fields?: readonly string[];
}
export class CreateCommentHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateCommentHeaders, 'extraHeaders'> &
      Partial<Pick<CreateCommentHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateCommentHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class CommentsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      CommentsManager,
      | 'networkSession'
      | 'getFileComments'
      | 'getCommentById'
      | 'updateCommentById'
      | 'deleteCommentById'
      | 'createComment'
    > &
      Partial<Pick<CommentsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getFileComments(
    fileId: string,
    optionalsInput: GetFileCommentsOptionalsInput = {}
  ): Promise<Comments> {
    const optionals: any = new GetFileCommentsOptionals({
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
        '/comments'
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
    return deserializeComments(response.data);
  }
  async getCommentById(
    commentId: string,
    optionalsInput: GetCommentByIdOptionalsInput = {}
  ): Promise<CommentFull> {
    const optionals: any = new GetCommentByIdOptionals({
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
        '/comments/',
        toString(commentId) as string
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
    return deserializeCommentFull(response.data);
  }
  async updateCommentById(
    commentId: string,
    optionalsInput: UpdateCommentByIdOptionalsInput = {}
  ): Promise<CommentFull> {
    const optionals: any = new UpdateCommentByIdOptionals({
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
        '/comments/',
        toString(commentId) as string
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateCommentByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeCommentFull(response.data);
  }
  async deleteCommentById(
    commentId: string,
    optionalsInput: DeleteCommentByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: any = new DeleteCommentByIdOptionals({
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
        '/comments/',
        toString(commentId) as string
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
  async createComment(
    requestBody: CreateCommentRequestBody,
    optionalsInput: CreateCommentOptionalsInput = {}
  ): Promise<CommentFull> {
    const optionals: any = new CreateCommentOptionals({
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
      ''.concat(this.networkSession.baseUrls.baseUrl, '/comments') as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeCreateCommentRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeCommentFull(response.data);
  }
}
export interface CommentsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeUpdateCommentByIdRequestBody(
  val: any
): SerializedData {
  return { ['message']: val.message == void 0 ? void 0 : val.message };
}
export function deserializeUpdateCommentByIdRequestBody(
  val: any
): UpdateCommentByIdRequestBody {
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  return { message: message } satisfies UpdateCommentByIdRequestBody;
}
export function serializeCreateCommentRequestBodyItemTypeField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateCommentRequestBodyItemTypeField(
  val: any
): CreateCommentRequestBodyItemTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CreateCommentRequestBodyItemTypeField"',
    });
  }
  if (val == 'file') {
    return 'file';
  }
  if (val == 'comment') {
    return 'comment';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateCommentRequestBodyItemField(
  val: any
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeCreateCommentRequestBodyItemTypeField(val.type),
  };
}
export function deserializeCreateCommentRequestBodyItemField(
  val: any
): CreateCommentRequestBodyItemField {
  const id: string = val.id;
  const type: CreateCommentRequestBodyItemTypeField =
    deserializeCreateCommentRequestBodyItemTypeField(val.type);
  return { id: id, type: type } satisfies CreateCommentRequestBodyItemField;
}
export function serializeCreateCommentRequestBody(val: any): SerializedData {
  return {
    ['message']: val.message,
    ['tagged_message']:
      val.taggedMessage == void 0 ? void 0 : val.taggedMessage,
    ['item']: serializeCreateCommentRequestBodyItemField(val.item),
  };
}
export function deserializeCreateCommentRequestBody(
  val: any
): CreateCommentRequestBody {
  const message: string = val.message;
  const taggedMessage: undefined | string =
    val.tagged_message == void 0 ? void 0 : val.tagged_message;
  const item: CreateCommentRequestBodyItemField =
    deserializeCreateCommentRequestBodyItemField(val.item);
  return {
    message: message,
    taggedMessage: taggedMessage,
    item: item,
  } satisfies CreateCommentRequestBody;
}
