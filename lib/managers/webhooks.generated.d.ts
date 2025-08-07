import { Webhooks } from '../schemas/webhooks.generated.js';
import { Webhook } from '../schemas/webhook.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateWebhookOptionals {
    readonly headers: CreateWebhookHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateWebhookOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateWebhookOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateWebhookOptionalsInput {
    readonly headers?: CreateWebhookHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetWebhookByIdOptionals {
    readonly headers: GetWebhookByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetWebhookByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetWebhookByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetWebhookByIdOptionalsInput {
    readonly headers?: GetWebhookByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateWebhookByIdOptionals {
    readonly requestBody: UpdateWebhookByIdRequestBody;
    readonly headers: UpdateWebhookByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateWebhookByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateWebhookByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateWebhookByIdOptionalsInput {
    readonly requestBody?: UpdateWebhookByIdRequestBody;
    readonly headers?: UpdateWebhookByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteWebhookByIdOptionals {
    readonly headers: DeleteWebhookByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteWebhookByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteWebhookByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteWebhookByIdOptionalsInput {
    readonly headers?: DeleteWebhookByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class ValidateMessageOptionals {
    readonly secondaryKey?: string;
    readonly maxAge?: number;
    constructor(fields: Omit<ValidateMessageOptionals, 'secondaryKey' | 'maxAge'> & Partial<Pick<ValidateMessageOptionals, 'secondaryKey' | 'maxAge'>>);
}
export interface ValidateMessageOptionalsInput {
    readonly secondaryKey?: undefined | string;
    readonly maxAge?: undefined | number;
}
export interface GetWebhooksQueryParams {
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetWebhooksHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetWebhooksHeaders, 'extraHeaders'> & Partial<Pick<GetWebhooksHeaders, 'extraHeaders'>>);
}
export interface GetWebhooksHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateWebhookRequestBodyTargetTypeField = 'file' | 'folder';
export interface CreateWebhookRequestBodyTargetField {
    /**
     * The ID of the item to trigger a webhook. */
    readonly id?: string;
    /**
     * The type of item to trigger a webhook. */
    readonly type?: CreateWebhookRequestBodyTargetTypeField;
    readonly rawData?: SerializedData;
}
export type CreateWebhookRequestBodyTriggersField = 'FILE.UPLOADED' | 'FILE.PREVIEWED' | 'FILE.DOWNLOADED' | 'FILE.TRASHED' | 'FILE.DELETED' | 'FILE.RESTORED' | 'FILE.COPIED' | 'FILE.MOVED' | 'FILE.LOCKED' | 'FILE.UNLOCKED' | 'FILE.RENAMED' | 'COMMENT.CREATED' | 'COMMENT.UPDATED' | 'COMMENT.DELETED' | 'TASK_ASSIGNMENT.CREATED' | 'TASK_ASSIGNMENT.UPDATED' | 'METADATA_INSTANCE.CREATED' | 'METADATA_INSTANCE.UPDATED' | 'METADATA_INSTANCE.DELETED' | 'FOLDER.CREATED' | 'FOLDER.RENAMED' | 'FOLDER.DOWNLOADED' | 'FOLDER.RESTORED' | 'FOLDER.DELETED' | 'FOLDER.COPIED' | 'FOLDER.MOVED' | 'FOLDER.TRASHED' | 'WEBHOOK.DELETED' | 'COLLABORATION.CREATED' | 'COLLABORATION.ACCEPTED' | 'COLLABORATION.REJECTED' | 'COLLABORATION.REMOVED' | 'COLLABORATION.UPDATED' | 'SHARED_LINK.DELETED' | 'SHARED_LINK.CREATED' | 'SHARED_LINK.UPDATED' | 'SIGN_REQUEST.COMPLETED' | 'SIGN_REQUEST.DECLINED' | 'SIGN_REQUEST.EXPIRED' | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED' | string;
export interface CreateWebhookRequestBody {
    /**
     * The item that will trigger the webhook. */
    readonly target: CreateWebhookRequestBodyTargetField;
    /**
     * The URL that is notified by this webhook. */
    readonly address: string;
    /**
     * An array of event names that this webhook is
     * to be triggered for. */
    readonly triggers: readonly CreateWebhookRequestBodyTriggersField[];
    readonly rawData?: SerializedData;
}
export declare class CreateWebhookHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateWebhookHeaders, 'extraHeaders'> & Partial<Pick<CreateWebhookHeaders, 'extraHeaders'>>);
}
export interface CreateWebhookHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetWebhookByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetWebhookByIdHeaders, 'extraHeaders'> & Partial<Pick<GetWebhookByIdHeaders, 'extraHeaders'>>);
}
export interface GetWebhookByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateWebhookByIdRequestBodyTargetTypeField = 'file' | 'folder';
export interface UpdateWebhookByIdRequestBodyTargetField {
    /**
     * The ID of the item to trigger a webhook. */
    readonly id?: string;
    /**
     * The type of item to trigger a webhook. */
    readonly type?: UpdateWebhookByIdRequestBodyTargetTypeField;
    readonly rawData?: SerializedData;
}
export type UpdateWebhookByIdRequestBodyTriggersField = 'FILE.UPLOADED' | 'FILE.PREVIEWED' | 'FILE.DOWNLOADED' | 'FILE.TRASHED' | 'FILE.DELETED' | 'FILE.RESTORED' | 'FILE.COPIED' | 'FILE.MOVED' | 'FILE.LOCKED' | 'FILE.UNLOCKED' | 'FILE.RENAMED' | 'COMMENT.CREATED' | 'COMMENT.UPDATED' | 'COMMENT.DELETED' | 'TASK_ASSIGNMENT.CREATED' | 'TASK_ASSIGNMENT.UPDATED' | 'METADATA_INSTANCE.CREATED' | 'METADATA_INSTANCE.UPDATED' | 'METADATA_INSTANCE.DELETED' | 'FOLDER.CREATED' | 'FOLDER.RENAMED' | 'FOLDER.DOWNLOADED' | 'FOLDER.RESTORED' | 'FOLDER.DELETED' | 'FOLDER.COPIED' | 'FOLDER.MOVED' | 'FOLDER.TRASHED' | 'WEBHOOK.DELETED' | 'COLLABORATION.CREATED' | 'COLLABORATION.ACCEPTED' | 'COLLABORATION.REJECTED' | 'COLLABORATION.REMOVED' | 'COLLABORATION.UPDATED' | 'SHARED_LINK.DELETED' | 'SHARED_LINK.CREATED' | 'SHARED_LINK.UPDATED' | 'SIGN_REQUEST.COMPLETED' | 'SIGN_REQUEST.DECLINED' | 'SIGN_REQUEST.EXPIRED' | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED' | string;
export interface UpdateWebhookByIdRequestBody {
    /**
     * The item that will trigger the webhook. */
    readonly target?: UpdateWebhookByIdRequestBodyTargetField;
    /**
     * The URL that is notified by this webhook. */
    readonly address?: string;
    /**
     * An array of event names that this webhook is
     * to be triggered for. */
    readonly triggers?: readonly UpdateWebhookByIdRequestBodyTriggersField[];
    readonly rawData?: SerializedData;
}
export declare class UpdateWebhookByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateWebhookByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateWebhookByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateWebhookByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteWebhookByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteWebhookByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteWebhookByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteWebhookByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class WebhooksManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<WebhooksManager, 'networkSession' | 'getWebhooks' | 'createWebhook' | 'getWebhookById' | 'updateWebhookById' | 'deleteWebhookById' | 'validateMessage'> & Partial<Pick<WebhooksManager, 'networkSession'>>);
    /**
     * Returns all defined webhooks for the requesting application.
     *
     * This API only returns webhooks that are applied to files or folders that are
     * owned by the authenticated user. This means that an admin can not see webhooks
     * created by a service account unless the admin has access to those folders, and
     * vice versa.
     * @param {GetWebhooksQueryParams} queryParams Query parameters of getWebhooks method
     * @param {GetWebhooksHeadersInput} headersInput Headers of getWebhooks method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<Webhooks>}
     */
    getWebhooks(queryParams?: GetWebhooksQueryParams, headersInput?: GetWebhooksHeadersInput, cancellationToken?: CancellationToken): Promise<Webhooks>;
    /**
     * Creates a webhook.
     * @param {CreateWebhookRequestBody} requestBody Request body of createWebhook method
     * @param {CreateWebhookOptionalsInput} optionalsInput
     * @returns {Promise<Webhook>}
     */
    createWebhook(requestBody: CreateWebhookRequestBody, optionalsInput?: CreateWebhookOptionalsInput): Promise<Webhook>;
    /**
       * Retrieves a specific webhook.
       * @param {string} webhookId The ID of the webhook.
      Example: "3321123"
       * @param {GetWebhookByIdOptionalsInput} optionalsInput
       * @returns {Promise<Webhook>}
       */
    getWebhookById(webhookId: string, optionalsInput?: GetWebhookByIdOptionalsInput): Promise<Webhook>;
    /**
       * Updates a webhook.
       * @param {string} webhookId The ID of the webhook.
      Example: "3321123"
       * @param {UpdateWebhookByIdOptionalsInput} optionalsInput
       * @returns {Promise<Webhook>}
       */
    updateWebhookById(webhookId: string, optionalsInput?: UpdateWebhookByIdOptionalsInput): Promise<Webhook>;
    /**
       * Deletes a webhook.
       * @param {string} webhookId The ID of the webhook.
      Example: "3321123"
       * @param {DeleteWebhookByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteWebhookById(webhookId: string, optionalsInput?: DeleteWebhookByIdOptionalsInput): Promise<undefined>;
    /**
       * Validate a webhook message by verifying the signature and the delivery timestamp
       * @param {string} body The request body of the webhook message
       * @param {{
          readonly [key: string]: string;
      }} headers The headers of the webhook message
       * @param {string} primaryKey The primary signature to verify the message with
       * @param {ValidateMessageOptionalsInput} optionalsInput
       * @returns {Promise<boolean>}
       */
    static validateMessage(body: string, headers: {
        readonly [key: string]: string;
    }, primaryKey: string, optionalsInput?: ValidateMessageOptionalsInput): Promise<boolean>;
}
export interface WebhooksManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateWebhookRequestBodyTargetTypeField(val: CreateWebhookRequestBodyTargetTypeField): SerializedData;
export declare function deserializeCreateWebhookRequestBodyTargetTypeField(val: SerializedData): CreateWebhookRequestBodyTargetTypeField;
export declare function serializeCreateWebhookRequestBodyTargetField(val: CreateWebhookRequestBodyTargetField): SerializedData;
export declare function deserializeCreateWebhookRequestBodyTargetField(val: SerializedData): CreateWebhookRequestBodyTargetField;
export declare function serializeCreateWebhookRequestBodyTriggersField(val: CreateWebhookRequestBodyTriggersField): SerializedData;
export declare function deserializeCreateWebhookRequestBodyTriggersField(val: SerializedData): CreateWebhookRequestBodyTriggersField;
export declare function serializeCreateWebhookRequestBody(val: CreateWebhookRequestBody): SerializedData;
export declare function deserializeCreateWebhookRequestBody(val: SerializedData): CreateWebhookRequestBody;
export declare function serializeUpdateWebhookByIdRequestBodyTargetTypeField(val: UpdateWebhookByIdRequestBodyTargetTypeField): SerializedData;
export declare function deserializeUpdateWebhookByIdRequestBodyTargetTypeField(val: SerializedData): UpdateWebhookByIdRequestBodyTargetTypeField;
export declare function serializeUpdateWebhookByIdRequestBodyTargetField(val: UpdateWebhookByIdRequestBodyTargetField): SerializedData;
export declare function deserializeUpdateWebhookByIdRequestBodyTargetField(val: SerializedData): UpdateWebhookByIdRequestBodyTargetField;
export declare function serializeUpdateWebhookByIdRequestBodyTriggersField(val: UpdateWebhookByIdRequestBodyTriggersField): SerializedData;
export declare function deserializeUpdateWebhookByIdRequestBodyTriggersField(val: SerializedData): UpdateWebhookByIdRequestBodyTriggersField;
export declare function serializeUpdateWebhookByIdRequestBody(val: UpdateWebhookByIdRequestBody): SerializedData;
export declare function deserializeUpdateWebhookByIdRequestBody(val: SerializedData): UpdateWebhookByIdRequestBody;
//# sourceMappingURL=webhooks.generated.d.ts.map