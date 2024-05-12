import { serializeWebhooks } from '../schemas/webhooks.generated.js';
import { deserializeWebhooks } from '../schemas/webhooks.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeWebhook } from '../schemas/webhook.generated.js';
import { deserializeWebhook } from '../schemas/webhook.generated.js';
import { Webhooks } from '../schemas/webhooks.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { Webhook } from '../schemas/webhook.generated.js';
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
export class CreateWebhookOptionals {
  readonly headers: CreateWebhookHeaders = new CreateWebhookHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<CreateWebhookOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<CreateWebhookOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateWebhookOptionalsInput {
  readonly headers?: CreateWebhookHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetWebhookByIdOptionals {
  readonly headers: GetWebhookByIdHeaders = new GetWebhookByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<GetWebhookByIdOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<GetWebhookByIdOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetWebhookByIdOptionalsInput {
  readonly headers?: GetWebhookByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateWebhookByIdOptionals {
  readonly requestBody: UpdateWebhookByIdRequestBody =
    {} satisfies UpdateWebhookByIdRequestBody;
  readonly headers: UpdateWebhookByIdHeaders = new UpdateWebhookByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateWebhookByIdOptionals,
      'requestBody' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateWebhookByIdOptionals,
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
export interface UpdateWebhookByIdOptionalsInput {
  readonly requestBody?: UpdateWebhookByIdRequestBody;
  readonly headers?: UpdateWebhookByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteWebhookByIdOptionals {
  readonly headers: DeleteWebhookByIdHeaders = new DeleteWebhookByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<DeleteWebhookByIdOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<DeleteWebhookByIdOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface DeleteWebhookByIdOptionalsInput {
  readonly headers?: DeleteWebhookByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetWebhooksQueryParams {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetWebhooksHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetWebhooksHeaders, 'extraHeaders'> &
      Partial<Pick<GetWebhooksHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetWebhooksHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type CreateWebhookRequestBodyTargetTypeField = 'file' | 'folder';
export interface CreateWebhookRequestBodyTargetField {
  readonly id?: string;
  readonly type?: CreateWebhookRequestBodyTargetTypeField;
}
export type CreateWebhookRequestBodyTriggersField =
  | 'FILE.UPLOADED'
  | 'FILE.PREVIEWED'
  | 'FILE.DOWNLOADED'
  | 'FILE.TRASHED'
  | 'FILE.DELETED'
  | 'FILE.RESTORED'
  | 'FILE.COPIED'
  | 'FILE.MOVED'
  | 'FILE.LOCKED'
  | 'FILE.UNLOCKED'
  | 'FILE.RENAMED'
  | 'COMMENT.CREATED'
  | 'COMMENT.UPDATED'
  | 'COMMENT.DELETED'
  | 'TASK_ASSIGNMENT.CREATED'
  | 'TASK_ASSIGNMENT.UPDATED'
  | 'METADATA_INSTANCE.CREATED'
  | 'METADATA_INSTANCE.UPDATED'
  | 'METADATA_INSTANCE.DELETED'
  | 'FOLDER.CREATED'
  | 'FOLDER.RENAMED'
  | 'FOLDER.DOWNLOADED'
  | 'FOLDER.RESTORED'
  | 'FOLDER.DELETED'
  | 'FOLDER.COPIED'
  | 'FOLDER.MOVED'
  | 'FOLDER.TRASHED'
  | 'WEBHOOK.DELETED'
  | 'COLLABORATION.CREATED'
  | 'COLLABORATION.ACCEPTED'
  | 'COLLABORATION.REJECTED'
  | 'COLLABORATION.REMOVED'
  | 'COLLABORATION.UPDATED'
  | 'SHARED_LINK.DELETED'
  | 'SHARED_LINK.CREATED'
  | 'SHARED_LINK.UPDATED'
  | 'SIGN_REQUEST.COMPLETED'
  | 'SIGN_REQUEST.DECLINED'
  | 'SIGN_REQUEST.EXPIRED'
  | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED';
export interface CreateWebhookRequestBody {
  readonly target: CreateWebhookRequestBodyTargetField;
  readonly address: string;
  readonly triggers: readonly CreateWebhookRequestBodyTriggersField[];
}
export class CreateWebhookHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateWebhookHeaders, 'extraHeaders'> &
      Partial<Pick<CreateWebhookHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateWebhookHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GetWebhookByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetWebhookByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetWebhookByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetWebhookByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateWebhookByIdRequestBodyTargetTypeField = 'file' | 'folder';
export interface UpdateWebhookByIdRequestBodyTargetField {
  readonly id?: string;
  readonly type?: UpdateWebhookByIdRequestBodyTargetTypeField;
}
export type UpdateWebhookByIdRequestBodyTriggersField =
  | 'FILE.UPLOADED'
  | 'FILE.PREVIEWED'
  | 'FILE.DOWNLOADED'
  | 'FILE.TRASHED'
  | 'FILE.DELETED'
  | 'FILE.RESTORED'
  | 'FILE.COPIED'
  | 'FILE.MOVED'
  | 'FILE.LOCKED'
  | 'FILE.UNLOCKED'
  | 'FILE.RENAMED'
  | 'COMMENT.CREATED'
  | 'COMMENT.UPDATED'
  | 'COMMENT.DELETED'
  | 'TASK_ASSIGNMENT.CREATED'
  | 'TASK_ASSIGNMENT.UPDATED'
  | 'METADATA_INSTANCE.CREATED'
  | 'METADATA_INSTANCE.UPDATED'
  | 'METADATA_INSTANCE.DELETED'
  | 'FOLDER.CREATED'
  | 'FOLDER.RENAMED'
  | 'FOLDER.DOWNLOADED'
  | 'FOLDER.RESTORED'
  | 'FOLDER.DELETED'
  | 'FOLDER.COPIED'
  | 'FOLDER.MOVED'
  | 'FOLDER.TRASHED'
  | 'WEBHOOK.DELETED'
  | 'COLLABORATION.CREATED'
  | 'COLLABORATION.ACCEPTED'
  | 'COLLABORATION.REJECTED'
  | 'COLLABORATION.REMOVED'
  | 'COLLABORATION.UPDATED'
  | 'SHARED_LINK.DELETED'
  | 'SHARED_LINK.CREATED'
  | 'SHARED_LINK.UPDATED'
  | 'SIGN_REQUEST.COMPLETED'
  | 'SIGN_REQUEST.DECLINED'
  | 'SIGN_REQUEST.EXPIRED'
  | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED';
export interface UpdateWebhookByIdRequestBody {
  readonly target?: UpdateWebhookByIdRequestBodyTargetField;
  readonly address?: string;
  readonly triggers?: readonly UpdateWebhookByIdRequestBodyTriggersField[];
}
export class UpdateWebhookByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateWebhookByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateWebhookByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateWebhookByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteWebhookByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteWebhookByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteWebhookByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteWebhookByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class WebhooksManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      WebhooksManager,
      | 'networkSession'
      | 'getWebhooks'
      | 'createWebhook'
      | 'getWebhookById'
      | 'updateWebhookById'
      | 'deleteWebhookById'
    > &
      Partial<Pick<WebhooksManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getWebhooks(
    queryParams: GetWebhooksQueryParams = {} satisfies GetWebhooksQueryParams,
    headersInput: GetWebhooksHeadersInput = new GetWebhooksHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Webhooks> {
    const headers: GetWebhooksHeaders = new GetWebhooksHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/webhooks') as string,
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
    return deserializeWebhooks(response.data);
  }
  async createWebhook(
    requestBody: CreateWebhookRequestBody,
    optionalsInput: CreateWebhookOptionalsInput = {}
  ): Promise<Webhook> {
    const optionals: CreateWebhookOptionals = new CreateWebhookOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/webhooks') as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateWebhookRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWebhook(response.data);
  }
  async getWebhookById(
    webhookId: string,
    optionalsInput: GetWebhookByIdOptionalsInput = {}
  ): Promise<Webhook> {
    const optionals: GetWebhookByIdOptionals = new GetWebhookByIdOptionals({
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
        '/webhooks/',
        toString(webhookId) as string
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
    return deserializeWebhook(response.data);
  }
  async updateWebhookById(
    webhookId: string,
    optionalsInput: UpdateWebhookByIdOptionalsInput = {}
  ): Promise<Webhook> {
    const optionals: UpdateWebhookByIdOptionals =
      new UpdateWebhookByIdOptionals({
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
        '/webhooks/',
        toString(webhookId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateWebhookByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWebhook(response.data);
  }
  async deleteWebhookById(
    webhookId: string,
    optionalsInput: DeleteWebhookByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteWebhookByIdOptionals =
      new DeleteWebhookByIdOptionals({
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
        '/webhooks/',
        toString(webhookId) as string
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
export interface WebhooksManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeCreateWebhookRequestBodyTargetTypeField(
  val: CreateWebhookRequestBodyTargetTypeField
): SerializedData {
  return val;
}
export function deserializeCreateWebhookRequestBodyTargetTypeField(
  val: SerializedData
): CreateWebhookRequestBodyTargetTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateWebhookRequestBodyTargetTypeField"',
    });
  }
  if (val == 'file') {
    return 'file';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateWebhookRequestBodyTargetField(
  val: CreateWebhookRequestBodyTargetField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateWebhookRequestBodyTargetTypeField(val.type),
  };
}
export function deserializeCreateWebhookRequestBodyTargetField(
  val: SerializedData
): CreateWebhookRequestBodyTargetField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CreateWebhookRequestBodyTargetField"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "CreateWebhookRequestBodyTargetField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | CreateWebhookRequestBodyTargetTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateWebhookRequestBodyTargetTypeField(val.type);
  return { id: id, type: type } satisfies CreateWebhookRequestBodyTargetField;
}
export function serializeCreateWebhookRequestBodyTriggersField(
  val: CreateWebhookRequestBodyTriggersField
): SerializedData {
  return val;
}
export function deserializeCreateWebhookRequestBodyTriggersField(
  val: SerializedData
): CreateWebhookRequestBodyTriggersField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CreateWebhookRequestBodyTriggersField"',
    });
  }
  if (val == 'FILE.UPLOADED') {
    return 'FILE.UPLOADED';
  }
  if (val == 'FILE.PREVIEWED') {
    return 'FILE.PREVIEWED';
  }
  if (val == 'FILE.DOWNLOADED') {
    return 'FILE.DOWNLOADED';
  }
  if (val == 'FILE.TRASHED') {
    return 'FILE.TRASHED';
  }
  if (val == 'FILE.DELETED') {
    return 'FILE.DELETED';
  }
  if (val == 'FILE.RESTORED') {
    return 'FILE.RESTORED';
  }
  if (val == 'FILE.COPIED') {
    return 'FILE.COPIED';
  }
  if (val == 'FILE.MOVED') {
    return 'FILE.MOVED';
  }
  if (val == 'FILE.LOCKED') {
    return 'FILE.LOCKED';
  }
  if (val == 'FILE.UNLOCKED') {
    return 'FILE.UNLOCKED';
  }
  if (val == 'FILE.RENAMED') {
    return 'FILE.RENAMED';
  }
  if (val == 'COMMENT.CREATED') {
    return 'COMMENT.CREATED';
  }
  if (val == 'COMMENT.UPDATED') {
    return 'COMMENT.UPDATED';
  }
  if (val == 'COMMENT.DELETED') {
    return 'COMMENT.DELETED';
  }
  if (val == 'TASK_ASSIGNMENT.CREATED') {
    return 'TASK_ASSIGNMENT.CREATED';
  }
  if (val == 'TASK_ASSIGNMENT.UPDATED') {
    return 'TASK_ASSIGNMENT.UPDATED';
  }
  if (val == 'METADATA_INSTANCE.CREATED') {
    return 'METADATA_INSTANCE.CREATED';
  }
  if (val == 'METADATA_INSTANCE.UPDATED') {
    return 'METADATA_INSTANCE.UPDATED';
  }
  if (val == 'METADATA_INSTANCE.DELETED') {
    return 'METADATA_INSTANCE.DELETED';
  }
  if (val == 'FOLDER.CREATED') {
    return 'FOLDER.CREATED';
  }
  if (val == 'FOLDER.RENAMED') {
    return 'FOLDER.RENAMED';
  }
  if (val == 'FOLDER.DOWNLOADED') {
    return 'FOLDER.DOWNLOADED';
  }
  if (val == 'FOLDER.RESTORED') {
    return 'FOLDER.RESTORED';
  }
  if (val == 'FOLDER.DELETED') {
    return 'FOLDER.DELETED';
  }
  if (val == 'FOLDER.COPIED') {
    return 'FOLDER.COPIED';
  }
  if (val == 'FOLDER.MOVED') {
    return 'FOLDER.MOVED';
  }
  if (val == 'FOLDER.TRASHED') {
    return 'FOLDER.TRASHED';
  }
  if (val == 'WEBHOOK.DELETED') {
    return 'WEBHOOK.DELETED';
  }
  if (val == 'COLLABORATION.CREATED') {
    return 'COLLABORATION.CREATED';
  }
  if (val == 'COLLABORATION.ACCEPTED') {
    return 'COLLABORATION.ACCEPTED';
  }
  if (val == 'COLLABORATION.REJECTED') {
    return 'COLLABORATION.REJECTED';
  }
  if (val == 'COLLABORATION.REMOVED') {
    return 'COLLABORATION.REMOVED';
  }
  if (val == 'COLLABORATION.UPDATED') {
    return 'COLLABORATION.UPDATED';
  }
  if (val == 'SHARED_LINK.DELETED') {
    return 'SHARED_LINK.DELETED';
  }
  if (val == 'SHARED_LINK.CREATED') {
    return 'SHARED_LINK.CREATED';
  }
  if (val == 'SHARED_LINK.UPDATED') {
    return 'SHARED_LINK.UPDATED';
  }
  if (val == 'SIGN_REQUEST.COMPLETED') {
    return 'SIGN_REQUEST.COMPLETED';
  }
  if (val == 'SIGN_REQUEST.DECLINED') {
    return 'SIGN_REQUEST.DECLINED';
  }
  if (val == 'SIGN_REQUEST.EXPIRED') {
    return 'SIGN_REQUEST.EXPIRED';
  }
  if (val == 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED') {
    return 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateWebhookRequestBody(
  val: CreateWebhookRequestBody
): SerializedData {
  return {
    ['target']: serializeCreateWebhookRequestBodyTargetField(val.target),
    ['address']: val.address,
    ['triggers']: val.triggers.map(function (
      item: CreateWebhookRequestBodyTriggersField
    ): SerializedData {
      return serializeCreateWebhookRequestBodyTriggersField(item);
    }) as readonly any[],
  };
}
export function deserializeCreateWebhookRequestBody(
  val: SerializedData
): CreateWebhookRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CreateWebhookRequestBody"',
    });
  }
  if (val.target == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "target" of type "CreateWebhookRequestBody" to be defined',
    });
  }
  const target: CreateWebhookRequestBodyTargetField =
    deserializeCreateWebhookRequestBodyTargetField(val.target);
  if (val.address == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "address" of type "CreateWebhookRequestBody" to be defined',
    });
  }
  if (!sdIsString(val.address)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "address" of type "CreateWebhookRequestBody"',
    });
  }
  const address: string = val.address;
  if (val.triggers == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "triggers" of type "CreateWebhookRequestBody" to be defined',
    });
  }
  if (!sdIsList(val.triggers)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "triggers" of type "CreateWebhookRequestBody"',
    });
  }
  const triggers: readonly CreateWebhookRequestBodyTriggersField[] = sdIsList(
    val.triggers
  )
    ? (val.triggers.map(function (
        itm: SerializedData
      ): CreateWebhookRequestBodyTriggersField {
        return deserializeCreateWebhookRequestBodyTriggersField(itm);
      }) as readonly any[])
    : [];
  return {
    target: target,
    address: address,
    triggers: triggers,
  } satisfies CreateWebhookRequestBody;
}
export function serializeUpdateWebhookByIdRequestBodyTargetTypeField(
  val: UpdateWebhookByIdRequestBodyTargetTypeField
): SerializedData {
  return val;
}
export function deserializeUpdateWebhookByIdRequestBodyTargetTypeField(
  val: SerializedData
): UpdateWebhookByIdRequestBodyTargetTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateWebhookByIdRequestBodyTargetTypeField"',
    });
  }
  if (val == 'file') {
    return 'file';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateWebhookByIdRequestBodyTargetField(
  val: UpdateWebhookByIdRequestBodyTargetField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeUpdateWebhookByIdRequestBodyTargetTypeField(val.type),
  };
}
export function deserializeUpdateWebhookByIdRequestBodyTargetField(
  val: SerializedData
): UpdateWebhookByIdRequestBodyTargetField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateWebhookByIdRequestBodyTargetField"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "UpdateWebhookByIdRequestBodyTargetField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | UpdateWebhookByIdRequestBodyTargetTypeField =
    val.type == void 0
      ? void 0
      : deserializeUpdateWebhookByIdRequestBodyTargetTypeField(val.type);
  return {
    id: id,
    type: type,
  } satisfies UpdateWebhookByIdRequestBodyTargetField;
}
export function serializeUpdateWebhookByIdRequestBodyTriggersField(
  val: UpdateWebhookByIdRequestBodyTriggersField
): SerializedData {
  return val;
}
export function deserializeUpdateWebhookByIdRequestBodyTriggersField(
  val: SerializedData
): UpdateWebhookByIdRequestBodyTriggersField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateWebhookByIdRequestBodyTriggersField"',
    });
  }
  if (val == 'FILE.UPLOADED') {
    return 'FILE.UPLOADED';
  }
  if (val == 'FILE.PREVIEWED') {
    return 'FILE.PREVIEWED';
  }
  if (val == 'FILE.DOWNLOADED') {
    return 'FILE.DOWNLOADED';
  }
  if (val == 'FILE.TRASHED') {
    return 'FILE.TRASHED';
  }
  if (val == 'FILE.DELETED') {
    return 'FILE.DELETED';
  }
  if (val == 'FILE.RESTORED') {
    return 'FILE.RESTORED';
  }
  if (val == 'FILE.COPIED') {
    return 'FILE.COPIED';
  }
  if (val == 'FILE.MOVED') {
    return 'FILE.MOVED';
  }
  if (val == 'FILE.LOCKED') {
    return 'FILE.LOCKED';
  }
  if (val == 'FILE.UNLOCKED') {
    return 'FILE.UNLOCKED';
  }
  if (val == 'FILE.RENAMED') {
    return 'FILE.RENAMED';
  }
  if (val == 'COMMENT.CREATED') {
    return 'COMMENT.CREATED';
  }
  if (val == 'COMMENT.UPDATED') {
    return 'COMMENT.UPDATED';
  }
  if (val == 'COMMENT.DELETED') {
    return 'COMMENT.DELETED';
  }
  if (val == 'TASK_ASSIGNMENT.CREATED') {
    return 'TASK_ASSIGNMENT.CREATED';
  }
  if (val == 'TASK_ASSIGNMENT.UPDATED') {
    return 'TASK_ASSIGNMENT.UPDATED';
  }
  if (val == 'METADATA_INSTANCE.CREATED') {
    return 'METADATA_INSTANCE.CREATED';
  }
  if (val == 'METADATA_INSTANCE.UPDATED') {
    return 'METADATA_INSTANCE.UPDATED';
  }
  if (val == 'METADATA_INSTANCE.DELETED') {
    return 'METADATA_INSTANCE.DELETED';
  }
  if (val == 'FOLDER.CREATED') {
    return 'FOLDER.CREATED';
  }
  if (val == 'FOLDER.RENAMED') {
    return 'FOLDER.RENAMED';
  }
  if (val == 'FOLDER.DOWNLOADED') {
    return 'FOLDER.DOWNLOADED';
  }
  if (val == 'FOLDER.RESTORED') {
    return 'FOLDER.RESTORED';
  }
  if (val == 'FOLDER.DELETED') {
    return 'FOLDER.DELETED';
  }
  if (val == 'FOLDER.COPIED') {
    return 'FOLDER.COPIED';
  }
  if (val == 'FOLDER.MOVED') {
    return 'FOLDER.MOVED';
  }
  if (val == 'FOLDER.TRASHED') {
    return 'FOLDER.TRASHED';
  }
  if (val == 'WEBHOOK.DELETED') {
    return 'WEBHOOK.DELETED';
  }
  if (val == 'COLLABORATION.CREATED') {
    return 'COLLABORATION.CREATED';
  }
  if (val == 'COLLABORATION.ACCEPTED') {
    return 'COLLABORATION.ACCEPTED';
  }
  if (val == 'COLLABORATION.REJECTED') {
    return 'COLLABORATION.REJECTED';
  }
  if (val == 'COLLABORATION.REMOVED') {
    return 'COLLABORATION.REMOVED';
  }
  if (val == 'COLLABORATION.UPDATED') {
    return 'COLLABORATION.UPDATED';
  }
  if (val == 'SHARED_LINK.DELETED') {
    return 'SHARED_LINK.DELETED';
  }
  if (val == 'SHARED_LINK.CREATED') {
    return 'SHARED_LINK.CREATED';
  }
  if (val == 'SHARED_LINK.UPDATED') {
    return 'SHARED_LINK.UPDATED';
  }
  if (val == 'SIGN_REQUEST.COMPLETED') {
    return 'SIGN_REQUEST.COMPLETED';
  }
  if (val == 'SIGN_REQUEST.DECLINED') {
    return 'SIGN_REQUEST.DECLINED';
  }
  if (val == 'SIGN_REQUEST.EXPIRED') {
    return 'SIGN_REQUEST.EXPIRED';
  }
  if (val == 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED') {
    return 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateWebhookByIdRequestBody(
  val: UpdateWebhookByIdRequestBody
): SerializedData {
  return {
    ['target']:
      val.target == void 0
        ? void 0
        : serializeUpdateWebhookByIdRequestBodyTargetField(val.target),
    ['address']: val.address == void 0 ? void 0 : val.address,
    ['triggers']:
      val.triggers == void 0
        ? void 0
        : (val.triggers.map(function (
            item: UpdateWebhookByIdRequestBodyTriggersField
          ): SerializedData {
            return serializeUpdateWebhookByIdRequestBodyTriggersField(item);
          }) as readonly any[]),
  };
}
export function deserializeUpdateWebhookByIdRequestBody(
  val: SerializedData
): UpdateWebhookByIdRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateWebhookByIdRequestBody"',
    });
  }
  const target: undefined | UpdateWebhookByIdRequestBodyTargetField =
    val.target == void 0
      ? void 0
      : deserializeUpdateWebhookByIdRequestBodyTargetField(val.target);
  if (!(val.address == void 0) && !sdIsString(val.address)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "address" of type "UpdateWebhookByIdRequestBody"',
    });
  }
  const address: undefined | string =
    val.address == void 0 ? void 0 : val.address;
  if (!(val.triggers == void 0) && !sdIsList(val.triggers)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "triggers" of type "UpdateWebhookByIdRequestBody"',
    });
  }
  const triggers:
    | undefined
    | readonly UpdateWebhookByIdRequestBodyTriggersField[] =
    val.triggers == void 0
      ? void 0
      : sdIsList(val.triggers)
      ? (val.triggers.map(function (
          itm: SerializedData
        ): UpdateWebhookByIdRequestBodyTriggersField {
          return deserializeUpdateWebhookByIdRequestBodyTriggersField(itm);
        }) as readonly any[])
      : [];
  return {
    target: target,
    address: address,
    triggers: triggers,
  } satisfies UpdateWebhookByIdRequestBody;
}
