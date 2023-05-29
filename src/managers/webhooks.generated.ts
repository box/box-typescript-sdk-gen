import { Webhooks } from "../schemas.generated.js";
import { deserializeWebhooks } from "../schemas.generated.js";
import { serializeWebhooks } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Webhook } from "../schemas.generated.js";
import { deserializeWebhook } from "../schemas.generated.js";
import { serializeWebhook } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
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
export class WebhooksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<WebhooksManager, "getWebhooks" | "createWebhook" | "getWebhookById" | "updateWebhookById" | "deleteWebhookById">) {
        Object.assign(this, fields);
    }
    async getWebhooks(options: GetWebhooksOptionsArg = {} satisfies GetWebhooksOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/webhooks") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebhooks(deserializeJson(response.text));
    }
    async createWebhook(requestBody: CreateWebhookRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/webhooks") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebhook(deserializeJson(response.text));
    }
    async getWebhookById(webhookId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/webhooks/", webhookId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebhook(deserializeJson(response.text));
    }
    async updateWebhookById(webhookId: string, requestBody: UpdateWebhookByIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/webhooks/", webhookId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebhook(deserializeJson(response.text));
    }
    async deleteWebhookById(webhookId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/webhooks/", webhookId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
