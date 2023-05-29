import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface GetWebhooksOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type CreateWebhookRequestBodyArgTargetFieldTypeField = "file" | "folder";
export interface CreateWebhookRequestBodyArgTargetField {
    readonly id?: string;
    readonly type?: CreateWebhookRequestBodyArgTargetFieldTypeField;
}
export type CreateWebhookRequestBodyArgTriggersField = "FILE.UPLOADED" | "FILE.PREVIEWED" | "FILE.DOWNLOADED" | "FILE.TRASHED" | "FILE.DELETED" | "FILE.RESTORED" | "FILE.COPIED" | "FILE.MOVED" | "FILE.LOCKED" | "FILE.UNLOCKED" | "FILE.RENAMED" | "COMMENT.CREATED" | "COMMENT.UPDATED" | "COMMENT.DELETED" | "TASK_ASSIGNMENT.CREATED" | "TASK_ASSIGNMENT.UPDATED" | "METADATA_INSTANCE.CREATED" | "METADATA_INSTANCE.UPDATED" | "METADATA_INSTANCE.DELETED" | "FOLDER.CREATED" | "FOLDER.RENAMED" | "FOLDER.DOWNLOADED" | "FOLDER.RESTORED" | "FOLDER.DELETED" | "FOLDER.COPIED" | "FOLDER.MOVED" | "FOLDER.TRASHED" | "WEBHOOK.DELETED" | "COLLABORATION.CREATED" | "COLLABORATION.ACCEPTED" | "COLLABORATION.REJECTED" | "COLLABORATION.REMOVED" | "COLLABORATION.UPDATED" | "SHARED_LINK.DELETED" | "SHARED_LINK.CREATED" | "SHARED_LINK.UPDATED" | "SIGN_REQUEST.COMPLETED" | "SIGN_REQUEST.DECLINED" | "SIGN_REQUEST.EXPIRED" | "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED";
export interface CreateWebhookRequestBodyArg {
    readonly target: CreateWebhookRequestBodyArgTargetField;
    readonly address: string;
    readonly triggers: readonly CreateWebhookRequestBodyArgTriggersField[];
}
export type UpdateWebhookByIdRequestBodyArgTargetFieldTypeField = "file" | "folder";
export interface UpdateWebhookByIdRequestBodyArgTargetField {
    readonly id?: string;
    readonly type?: UpdateWebhookByIdRequestBodyArgTargetFieldTypeField;
}
export type UpdateWebhookByIdRequestBodyArgTriggersField = "FILE.UPLOADED" | "FILE.PREVIEWED" | "FILE.DOWNLOADED" | "FILE.TRASHED" | "FILE.DELETED" | "FILE.RESTORED" | "FILE.COPIED" | "FILE.MOVED" | "FILE.LOCKED" | "FILE.UNLOCKED" | "FILE.RENAMED" | "COMMENT.CREATED" | "COMMENT.UPDATED" | "COMMENT.DELETED" | "TASK_ASSIGNMENT.CREATED" | "TASK_ASSIGNMENT.UPDATED" | "METADATA_INSTANCE.CREATED" | "METADATA_INSTANCE.UPDATED" | "METADATA_INSTANCE.DELETED" | "FOLDER.CREATED" | "FOLDER.RENAMED" | "FOLDER.DOWNLOADED" | "FOLDER.RESTORED" | "FOLDER.DELETED" | "FOLDER.COPIED" | "FOLDER.MOVED" | "FOLDER.TRASHED" | "WEBHOOK.DELETED" | "COLLABORATION.CREATED" | "COLLABORATION.ACCEPTED" | "COLLABORATION.REJECTED" | "COLLABORATION.REMOVED" | "COLLABORATION.UPDATED" | "SHARED_LINK.DELETED" | "SHARED_LINK.CREATED" | "SHARED_LINK.UPDATED" | "SIGN_REQUEST.COMPLETED" | "SIGN_REQUEST.DECLINED" | "SIGN_REQUEST.EXPIRED" | "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED";
export interface UpdateWebhookByIdRequestBodyArg {
    readonly target?: UpdateWebhookByIdRequestBodyArgTargetField;
    readonly address?: string;
    readonly triggers?: readonly UpdateWebhookByIdRequestBodyArgTriggersField[];
}
export declare class WebhooksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<WebhooksManager, "getWebhooks" | "createWebhook" | "getWebhookById" | "updateWebhookById" | "deleteWebhookById">);
    getWebhooks(options?: GetWebhooksOptionsArg): Promise<any>;
    createWebhook(requestBody: CreateWebhookRequestBodyArg): Promise<any>;
    getWebhookById(webhookId: string): Promise<any>;
    updateWebhookById(webhookId: string, requestBody: UpdateWebhookByIdRequestBodyArg): Promise<any>;
    deleteWebhookById(webhookId: string): Promise<any>;
}
