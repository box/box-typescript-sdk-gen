import { Webhooks } from "../schemas.generated.js";
import { Webhook } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetWebhooksQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetWebhooksHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetWebhooksHeadersArg);
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
export declare class CreateWebhookHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateWebhookHeadersArg);
}
export declare class GetWebhookByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetWebhookByIdHeadersArg);
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
export declare class UpdateWebhookByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateWebhookByIdHeadersArg);
}
export declare class DeleteWebhookByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteWebhookByIdHeadersArg);
}
export declare class WebhooksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<WebhooksManager, "getWebhooks" | "createWebhook" | "getWebhookById" | "updateWebhookById" | "deleteWebhookById">);
    getWebhooks(queryParams?: GetWebhooksQueryParamsArg, headers?: GetWebhooksHeadersArg): Promise<Webhooks>;
    createWebhook(requestBody: CreateWebhookRequestBodyArg, headers?: CreateWebhookHeadersArg): Promise<Webhook>;
    getWebhookById(webhookId: string, headers?: GetWebhookByIdHeadersArg): Promise<Webhook>;
    updateWebhookById(webhookId: string, requestBody: UpdateWebhookByIdRequestBodyArg, headers?: UpdateWebhookByIdHeadersArg): Promise<Webhook>;
    deleteWebhookById(webhookId: string, headers?: DeleteWebhookByIdHeadersArg): Promise<undefined>;
}
export declare function serializeCreateWebhookRequestBodyArgTargetFieldTypeField(val: CreateWebhookRequestBodyArgTargetFieldTypeField): Json;
export declare function deserializeCreateWebhookRequestBodyArgTargetFieldTypeField(val: any): CreateWebhookRequestBodyArgTargetFieldTypeField;
export declare function serializeCreateWebhookRequestBodyArgTargetField(val: CreateWebhookRequestBodyArgTargetField): Json;
export declare function deserializeCreateWebhookRequestBodyArgTargetField(val: any): CreateWebhookRequestBodyArgTargetField;
export declare function serializeCreateWebhookRequestBodyArgTriggersField(val: CreateWebhookRequestBodyArgTriggersField): Json;
export declare function deserializeCreateWebhookRequestBodyArgTriggersField(val: any): CreateWebhookRequestBodyArgTriggersField;
export declare function serializeCreateWebhookRequestBodyArg(val: CreateWebhookRequestBodyArg): Json;
export declare function deserializeCreateWebhookRequestBodyArg(val: any): CreateWebhookRequestBodyArg;
export declare function serializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField(val: UpdateWebhookByIdRequestBodyArgTargetFieldTypeField): Json;
export declare function deserializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField(val: any): UpdateWebhookByIdRequestBodyArgTargetFieldTypeField;
export declare function serializeUpdateWebhookByIdRequestBodyArgTargetField(val: UpdateWebhookByIdRequestBodyArgTargetField): Json;
export declare function deserializeUpdateWebhookByIdRequestBodyArgTargetField(val: any): UpdateWebhookByIdRequestBodyArgTargetField;
export declare function serializeUpdateWebhookByIdRequestBodyArgTriggersField(val: UpdateWebhookByIdRequestBodyArgTriggersField): Json;
export declare function deserializeUpdateWebhookByIdRequestBodyArgTriggersField(val: any): UpdateWebhookByIdRequestBodyArgTriggersField;
export declare function serializeUpdateWebhookByIdRequestBodyArg(val: UpdateWebhookByIdRequestBodyArg): Json;
export declare function deserializeUpdateWebhookByIdRequestBodyArg(val: any): UpdateWebhookByIdRequestBodyArg;
