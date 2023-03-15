import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type WebhooksManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface GetWebhooksOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type PostWebhooksRequestBodyArgTargetFieldTypeField = "file" | "folder";
export interface PostWebhooksRequestBodyArgTargetField {
    readonly id?: string;
    readonly type?: PostWebhooksRequestBodyArgTargetFieldTypeField;
}
export type PostWebhooksRequestBodyArgTriggersField = "FILE.UPLOADED" | "FILE.PREVIEWED" | "FILE.DOWNLOADED" | "FILE.TRASHED" | "FILE.DELETED" | "FILE.RESTORED" | "FILE.COPIED" | "FILE.MOVED" | "FILE.LOCKED" | "FILE.UNLOCKED" | "FILE.RENAMED" | "COMMENT.CREATED" | "COMMENT.UPDATED" | "COMMENT.DELETED" | "TASK_ASSIGNMENT.CREATED" | "TASK_ASSIGNMENT.UPDATED" | "METADATA_INSTANCE.CREATED" | "METADATA_INSTANCE.UPDATED" | "METADATA_INSTANCE.DELETED" | "FOLDER.CREATED" | "FOLDER.RENAMED" | "FOLDER.DOWNLOADED" | "FOLDER.RESTORED" | "FOLDER.DELETED" | "FOLDER.COPIED" | "FOLDER.MOVED" | "FOLDER.TRASHED" | "WEBHOOK.DELETED" | "COLLABORATION.CREATED" | "COLLABORATION.ACCEPTED" | "COLLABORATION.REJECTED" | "COLLABORATION.REMOVED" | "COLLABORATION.UPDATED" | "SHARED_LINK.DELETED" | "SHARED_LINK.CREATED" | "SHARED_LINK.UPDATED" | "SIGN_REQUEST.COMPLETED" | "SIGN_REQUEST.DECLINED" | "SIGN_REQUEST.EXPIRED";
export interface PostWebhooksRequestBodyArg {
    readonly target: PostWebhooksRequestBodyArgTargetField;
    readonly address: string;
    readonly triggers: readonly PostWebhooksRequestBodyArgTriggersField[];
}
export type PutWebhooksIdRequestBodyArgTargetFieldTypeField = "file" | "folder";
export interface PutWebhooksIdRequestBodyArgTargetField {
    readonly id?: string;
    readonly type?: PutWebhooksIdRequestBodyArgTargetFieldTypeField;
}
export type PutWebhooksIdRequestBodyArgTriggersField = "FILE.UPLOADED" | "FILE.PREVIEWED" | "FILE.DOWNLOADED" | "FILE.TRASHED" | "FILE.DELETED" | "FILE.RESTORED" | "FILE.COPIED" | "FILE.MOVED" | "FILE.LOCKED" | "FILE.UNLOCKED" | "FILE.RENAMED" | "COMMENT.CREATED" | "COMMENT.UPDATED" | "COMMENT.DELETED" | "TASK_ASSIGNMENT.CREATED" | "TASK_ASSIGNMENT.UPDATED" | "METADATA_INSTANCE.CREATED" | "METADATA_INSTANCE.UPDATED" | "METADATA_INSTANCE.DELETED" | "FOLDER.CREATED" | "FOLDER.RENAMED" | "FOLDER.DOWNLOADED" | "FOLDER.RESTORED" | "FOLDER.DELETED" | "FOLDER.COPIED" | "FOLDER.MOVED" | "FOLDER.TRASHED" | "WEBHOOK.DELETED" | "COLLABORATION.CREATED" | "COLLABORATION.ACCEPTED" | "COLLABORATION.REJECTED" | "COLLABORATION.REMOVED" | "COLLABORATION.UPDATED" | "SHARED_LINK.DELETED" | "SHARED_LINK.CREATED" | "SHARED_LINK.UPDATED" | "SIGN_REQUEST.COMPLETED" | "SIGN_REQUEST.DECLINED" | "SIGN_REQUEST.EXPIRED";
export interface PutWebhooksIdRequestBodyArg {
    readonly target?: PutWebhooksIdRequestBodyArgTargetField;
    readonly address?: string;
    readonly triggers?: readonly PutWebhooksIdRequestBodyArgTriggersField[];
}
export declare class WebhooksManager {
    readonly auth: WebhooksManagerAuthField;
    constructor(fields: Omit<WebhooksManager, "getWebhooks" | "postWebhooks" | "getWebhooksId" | "putWebhooksId" | "deleteWebhooksId">);
    getWebhooks(options?: GetWebhooksOptionsArg): Promise<any>;
    postWebhooks(requestBody: PostWebhooksRequestBodyArg): Promise<any>;
    getWebhooksId(webhookId: string): Promise<any>;
    putWebhooksId(webhookId: string, requestBody: PutWebhooksIdRequestBodyArg): Promise<any>;
    deleteWebhooksId(webhookId: string): Promise<any>;
}
