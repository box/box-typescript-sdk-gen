import { Webhook } from './webhook.generated.js';
import { UserMini } from './userMini.generated.js';
import { FileOrFolder } from './fileOrFolder.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type WebhookInvocationTypeField = 'webhook_event';
export type WebhookInvocationTriggerField = 'FILE.UPLOADED' | 'FILE.PREVIEWED' | 'FILE.DOWNLOADED' | 'FILE.TRASHED' | 'FILE.DELETED' | 'FILE.RESTORED' | 'FILE.COPIED' | 'FILE.MOVED' | 'FILE.LOCKED' | 'FILE.UNLOCKED' | 'FILE.RENAMED' | 'COMMENT.CREATED' | 'COMMENT.UPDATED' | 'COMMENT.DELETED' | 'TASK_ASSIGNMENT.CREATED' | 'TASK_ASSIGNMENT.UPDATED' | 'METADATA_INSTANCE.CREATED' | 'METADATA_INSTANCE.UPDATED' | 'METADATA_INSTANCE.DELETED' | 'FOLDER.CREATED' | 'FOLDER.RENAMED' | 'FOLDER.DOWNLOADED' | 'FOLDER.RESTORED' | 'FOLDER.DELETED' | 'FOLDER.COPIED' | 'FOLDER.MOVED' | 'FOLDER.TRASHED' | 'WEBHOOK.DELETED' | 'COLLABORATION.CREATED' | 'COLLABORATION.ACCEPTED' | 'COLLABORATION.REJECTED' | 'COLLABORATION.REMOVED' | 'COLLABORATION.UPDATED' | 'SHARED_LINK.DELETED' | 'SHARED_LINK.CREATED' | 'SHARED_LINK.UPDATED' | 'SIGN_REQUEST.COMPLETED' | 'SIGN_REQUEST.DECLINED' | 'SIGN_REQUEST.EXPIRED' | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED' | string;
export interface WebhookInvocation {
    /**
     * The unique identifier for this webhook invocation. */
    readonly id?: string;
    /**
     * The value will always be `webhook_event`. */
    readonly type?: WebhookInvocationTypeField;
    readonly webhook?: Webhook;
    readonly createdBy?: UserMini;
    /**
     * A timestamp identifying the time that
     * the webhook event was triggered. */
    readonly createdAt?: DateTime;
    readonly trigger?: WebhookInvocationTriggerField;
    readonly source?: FileOrFolder;
    readonly rawData?: SerializedData;
}
export declare function serializeWebhookInvocationTypeField(val: WebhookInvocationTypeField): SerializedData;
export declare function deserializeWebhookInvocationTypeField(val: SerializedData): WebhookInvocationTypeField;
export declare function serializeWebhookInvocationTriggerField(val: WebhookInvocationTriggerField): SerializedData;
export declare function deserializeWebhookInvocationTriggerField(val: SerializedData): WebhookInvocationTriggerField;
export declare function serializeWebhookInvocation(val: WebhookInvocation): SerializedData;
export declare function deserializeWebhookInvocation(val: SerializedData): WebhookInvocation;
