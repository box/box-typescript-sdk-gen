import { Webhooks } from "../schemas.generated.js";
import { deserializeWebhooks } from "../schemas.generated.js";
import { serializeWebhooks } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Webhook } from "../schemas.generated.js";
import { deserializeWebhook } from "../schemas.generated.js";
import { serializeWebhook } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
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
export class WebhooksManager {
    readonly auth!: WebhooksManagerAuthField;
    constructor(fields: Omit<WebhooksManager, "getWebhooks" | "postWebhooks" | "getWebhooksId" | "putWebhooksId" | "deleteWebhooksId">) {
        Object.assign(this, fields);
    }
    async getWebhooks(options: GetWebhooksOptionsArg = {} satisfies GetWebhooksOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/webhooks") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWebhooks(await deserializeJson(response.text));
    }
    async postWebhooks(requestBody: PostWebhooksRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/webhooks") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWebhook(await deserializeJson(response.text));
    }
    async getWebhooksId(webhookId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/webhooks/", webhookId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWebhook(await deserializeJson(response.text));
    }
    async putWebhooksId(webhookId: string, requestBody: PutWebhooksIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/webhooks/", webhookId) as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWebhook(await deserializeJson(response.text));
    }
    async deleteWebhooksId(webhookId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/webhooks/", webhookId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
