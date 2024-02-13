import { serializeWebhooks } from '../schemas.generated.js';
import { deserializeWebhooks } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeWebhook } from '../schemas.generated.js';
import { deserializeWebhook } from '../schemas.generated.js';
import { Webhooks } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Webhook } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.generated.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { sdToJson } from '../json.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { BoxSdkError } from '../errors.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export interface GetWebhooksQueryParams {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetWebhooksHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetWebhooksHeaders, 'extraHeaders'>
      | Partial<Pick<GetWebhooksHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
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
    fields:
      | Omit<CreateWebhookHeaders, 'extraHeaders'>
      | Partial<Pick<CreateWebhookHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetWebhookByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetWebhookByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetWebhookByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
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
    fields:
      | Omit<UpdateWebhookByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateWebhookByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteWebhookByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteWebhookByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteWebhookByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class WebhooksManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          WebhooksManager,
          | 'networkSession'
          | 'getWebhooks'
          | 'createWebhook'
          | 'getWebhookById'
          | 'updateWebhookById'
          | 'deleteWebhookById'
        >
      | Partial<Pick<WebhooksManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getWebhooks(
    queryParams: GetWebhooksQueryParams = {} satisfies GetWebhooksQueryParams,
    headers: GetWebhooksHeaders = new GetWebhooksHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Webhooks> {
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
    headers: CreateWebhookHeaders = new CreateWebhookHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Webhook> {
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
    headers: GetWebhookByIdHeaders = new GetWebhookByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Webhook> {
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
    requestBody: UpdateWebhookByIdRequestBody = {} satisfies UpdateWebhookByIdRequestBody,
    headers: UpdateWebhookByIdHeaders = new UpdateWebhookByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Webhook> {
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
    headers: DeleteWebhookByIdHeaders = new DeleteWebhookByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
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
export function serializeCreateWebhookRequestBodyTargetTypeField(
  val: CreateWebhookRequestBodyTargetTypeField
): SerializedData {
  return val;
}
export function deserializeCreateWebhookRequestBodyTargetTypeField(
  val: any
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
  val: any
): CreateWebhookRequestBodyTargetField {
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
  val: any
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
    ): any {
      return serializeCreateWebhookRequestBodyTriggersField(item);
    }) as readonly any[],
  };
}
export function deserializeCreateWebhookRequestBody(
  val: any
): CreateWebhookRequestBody {
  const target: CreateWebhookRequestBodyTargetField =
    deserializeCreateWebhookRequestBodyTargetField(val.target);
  const address: string = val.address;
  const triggers: readonly CreateWebhookRequestBodyTriggersField[] = sdIsList(
    val.triggers
  )
    ? (val.triggers.map(function (itm: SerializedData): any {
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
  val: any
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
  val: any
): UpdateWebhookByIdRequestBodyTargetField {
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
  val: any
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
          ): any {
            return serializeUpdateWebhookByIdRequestBodyTriggersField(item);
          }) as readonly any[]),
  };
}
export function deserializeUpdateWebhookByIdRequestBody(
  val: any
): UpdateWebhookByIdRequestBody {
  const target: undefined | UpdateWebhookByIdRequestBodyTargetField =
    val.target == void 0
      ? void 0
      : deserializeUpdateWebhookByIdRequestBodyTargetField(val.target);
  const address: undefined | string =
    val.address == void 0 ? void 0 : val.address;
  const triggers:
    | undefined
    | readonly UpdateWebhookByIdRequestBodyTriggersField[] =
    val.triggers == void 0
      ? void 0
      : sdIsList(val.triggers)
      ? (val.triggers.map(function (itm: SerializedData): any {
          return deserializeUpdateWebhookByIdRequestBodyTriggersField(itm);
        }) as readonly any[])
      : [];
  return {
    target: target,
    address: address,
    triggers: triggers,
  } satisfies UpdateWebhookByIdRequestBody;
}
