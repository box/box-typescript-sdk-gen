import { WebhookMini } from './webhookMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type WebhookTriggersField = 'FILE.UPLOADED' | 'FILE.PREVIEWED' | 'FILE.DOWNLOADED' | 'FILE.TRASHED' | 'FILE.DELETED' | 'FILE.RESTORED' | 'FILE.COPIED' | 'FILE.MOVED' | 'FILE.LOCKED' | 'FILE.UNLOCKED' | 'FILE.RENAMED' | 'COMMENT.CREATED' | 'COMMENT.UPDATED' | 'COMMENT.DELETED' | 'TASK_ASSIGNMENT.CREATED' | 'TASK_ASSIGNMENT.UPDATED' | 'METADATA_INSTANCE.CREATED' | 'METADATA_INSTANCE.UPDATED' | 'METADATA_INSTANCE.DELETED' | 'FOLDER.CREATED' | 'FOLDER.RENAMED' | 'FOLDER.DOWNLOADED' | 'FOLDER.RESTORED' | 'FOLDER.DELETED' | 'FOLDER.COPIED' | 'FOLDER.MOVED' | 'FOLDER.TRASHED' | 'WEBHOOK.DELETED' | 'COLLABORATION.CREATED' | 'COLLABORATION.ACCEPTED' | 'COLLABORATION.REJECTED' | 'COLLABORATION.REMOVED' | 'COLLABORATION.UPDATED' | 'SHARED_LINK.DELETED' | 'SHARED_LINK.CREATED' | 'SHARED_LINK.UPDATED' | 'SIGN_REQUEST.COMPLETED' | 'SIGN_REQUEST.DECLINED' | 'SIGN_REQUEST.EXPIRED' | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED' | string;
export type Webhook = WebhookMini & {
    readonly createdBy?: UserMini;
    /**
     * A timestamp identifying the time that
     * the webhook was created. */
    readonly createdAt?: DateTime;
    /**
     * The URL that is notified by this webhook. */
    readonly address?: string;
    /**
     * An array of event names that this webhook is
     * to be triggered for. */
    readonly triggers?: readonly WebhookTriggersField[];
};
export declare function serializeWebhookTriggersField(val: WebhookTriggersField): SerializedData;
export declare function deserializeWebhookTriggersField(val: SerializedData): WebhookTriggersField;
export declare function serializeWebhook(val: Webhook): SerializedData;
export declare function deserializeWebhook(val: SerializedData): Webhook;
