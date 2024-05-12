import { serializeWebhook } from './webhook.generated.js';
import { deserializeWebhook } from './webhook.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeFileOrFolder } from './fileOrFolder.generated.js';
import { deserializeFileOrFolder } from './fileOrFolder.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { Webhook } from './webhook.generated.js';
import { UserMini } from './userMini.generated.js';
import { FileOrFolder } from './fileOrFolder.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type WebhookInvocationTypeField = 'webhook_event';
export type WebhookInvocationTriggerField =
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
export interface WebhookInvocation {
  readonly id?: string;
  readonly type?: WebhookInvocationTypeField;
  readonly webhook?: Webhook;
  readonly createdBy?: UserMini;
  readonly createdAt?: DateTime;
  readonly trigger?: WebhookInvocationTriggerField;
  readonly source?: FileOrFolder;
}
export function serializeWebhookInvocationTypeField(
  val: WebhookInvocationTypeField
): SerializedData {
  return val;
}
export function deserializeWebhookInvocationTypeField(
  val: SerializedData
): WebhookInvocationTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "WebhookInvocationTypeField"',
    });
  }
  if (val == 'webhook_event') {
    return 'webhook_event';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeWebhookInvocationTriggerField(
  val: WebhookInvocationTriggerField
): SerializedData {
  return val;
}
export function deserializeWebhookInvocationTriggerField(
  val: SerializedData
): WebhookInvocationTriggerField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "WebhookInvocationTriggerField"',
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
export function serializeWebhookInvocation(
  val: WebhookInvocation
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeWebhookInvocationTypeField(val.type),
    ['webhook']: val.webhook == void 0 ? void 0 : serializeWebhook(val.webhook),
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['trigger']:
      val.trigger == void 0
        ? void 0
        : serializeWebhookInvocationTriggerField(val.trigger),
    ['source']:
      val.source == void 0 ? void 0 : serializeFileOrFolder(val.source),
  };
}
export function deserializeWebhookInvocation(
  val: SerializedData
): WebhookInvocation {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "WebhookInvocation"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "WebhookInvocation"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | WebhookInvocationTypeField =
    val.type == void 0
      ? void 0
      : deserializeWebhookInvocationTypeField(val.type);
  const webhook: undefined | Webhook =
    val.webhook == void 0 ? void 0 : deserializeWebhook(val.webhook);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "created_at" of type "WebhookInvocation"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const trigger: undefined | WebhookInvocationTriggerField =
    val.trigger == void 0
      ? void 0
      : deserializeWebhookInvocationTriggerField(val.trigger);
  const source: undefined | FileOrFolder =
    val.source == void 0 ? void 0 : deserializeFileOrFolder(val.source);
  return {
    id: id,
    type: type,
    webhook: webhook,
    createdBy: createdBy,
    createdAt: createdAt,
    trigger: trigger,
    source: source,
  } satisfies WebhookInvocation;
}
