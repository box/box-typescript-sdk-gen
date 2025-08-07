import { SerializedData } from '../serialization/json.js';
export type WebhookMiniTypeField = 'webhook';
export type WebhookMiniTargetTypeField = 'file' | 'folder';
export interface WebhookMiniTargetField {
    /**
     * The ID of the item to trigger a webhook. */
    readonly id?: string;
    /**
     * The type of item to trigger a webhook. */
    readonly type?: WebhookMiniTargetTypeField;
    readonly rawData?: SerializedData;
}
export interface WebhookMini {
    /**
     * The unique identifier for this webhook. */
    readonly id?: string;
    /**
     * The value will always be `webhook`. */
    readonly type?: WebhookMiniTypeField;
    /**
     * The item that will trigger the webhook. */
    readonly target?: WebhookMiniTargetField;
    readonly rawData?: SerializedData;
}
export declare function serializeWebhookMiniTypeField(val: WebhookMiniTypeField): SerializedData;
export declare function deserializeWebhookMiniTypeField(val: SerializedData): WebhookMiniTypeField;
export declare function serializeWebhookMiniTargetTypeField(val: WebhookMiniTargetTypeField): SerializedData;
export declare function deserializeWebhookMiniTargetTypeField(val: SerializedData): WebhookMiniTargetTypeField;
export declare function serializeWebhookMiniTargetField(val: WebhookMiniTargetField): SerializedData;
export declare function deserializeWebhookMiniTargetField(val: SerializedData): WebhookMiniTargetField;
export declare function serializeWebhookMini(val: WebhookMini): SerializedData;
export declare function deserializeWebhookMini(val: SerializedData): WebhookMini;
