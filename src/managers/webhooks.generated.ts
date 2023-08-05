import { serializeWebhooks } from "../schemas.generated.js";
import { deserializeWebhooks } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeWebhook } from "../schemas.generated.js";
import { deserializeWebhook } from "../schemas.generated.js";
import { Webhooks } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Webhook } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
import { ByteStream } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
import { isJson } from "../json.js";
export interface GetWebhooksQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export class GetWebhooksHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetWebhooksHeadersArg) {
        Object.assign(this, fields);
    }
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
export class CreateWebhookHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: CreateWebhookHeadersArg) {
        Object.assign(this, fields);
    }
}
export class GetWebhookByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetWebhookByIdHeadersArg) {
        Object.assign(this, fields);
    }
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
export class UpdateWebhookByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: UpdateWebhookByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class DeleteWebhookByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteWebhookByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class WebhooksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<WebhooksManager, "getWebhooks" | "createWebhook" | "getWebhookById" | "updateWebhookById" | "deleteWebhookById">) {
        Object.assign(this, fields);
    }
    async getWebhooks(queryParams: GetWebhooksQueryParamsArg = {} satisfies GetWebhooksQueryParamsArg, headers: GetWebhooksHeadersArg = new GetWebhooksHeadersArg({})): Promise<Webhooks> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["marker"]: toString(queryParams.marker), ["limit"]: toString(queryParams.limit) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/webhooks") as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebhooks(deserializeJson(response.text));
    }
    async createWebhook(requestBody: CreateWebhookRequestBodyArg, headers: CreateWebhookHeadersArg = new CreateWebhookHeadersArg({})): Promise<Webhook> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/webhooks") as string, { method: "POST", headers: headersMap, body: serializeJson(serializeCreateWebhookRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebhook(deserializeJson(response.text));
    }
    async getWebhookById(webhookId: string, headers: GetWebhookByIdHeadersArg = new GetWebhookByIdHeadersArg({})): Promise<Webhook> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/webhooks/", webhookId) as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebhook(deserializeJson(response.text));
    }
    async updateWebhookById(webhookId: string, requestBody: UpdateWebhookByIdRequestBodyArg, headers: UpdateWebhookByIdHeadersArg = new UpdateWebhookByIdHeadersArg({})): Promise<Webhook> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/webhooks/", webhookId) as string, { method: "PUT", headers: headersMap, body: serializeJson(serializeUpdateWebhookByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWebhook(deserializeJson(response.text));
    }
    async deleteWebhookById(webhookId: string, headers: DeleteWebhookByIdHeadersArg = new DeleteWebhookByIdHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/webhooks/", webhookId) as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
}
export function serializeCreateWebhookRequestBodyArgTargetFieldTypeField(val: CreateWebhookRequestBodyArgTargetFieldTypeField): Json {
    return val;
}
export function deserializeCreateWebhookRequestBodyArgTargetFieldTypeField(val: any): CreateWebhookRequestBodyArgTargetFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateWebhookRequestBodyArgTargetFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateWebhookRequestBodyArgTargetField(val: CreateWebhookRequestBodyArgTargetField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCreateWebhookRequestBodyArgTargetFieldTypeField(val.type) };
}
export function deserializeCreateWebhookRequestBodyArgTargetField(val: any): CreateWebhookRequestBodyArgTargetField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CreateWebhookRequestBodyArgTargetFieldTypeField = val.type == void 0 ? void 0 : deserializeCreateWebhookRequestBodyArgTargetFieldTypeField(val.type);
    return { id: id, type: type } satisfies CreateWebhookRequestBodyArgTargetField;
}
export function serializeCreateWebhookRequestBodyArgTriggersField(val: CreateWebhookRequestBodyArgTriggersField): Json {
    return val;
}
export function deserializeCreateWebhookRequestBodyArgTriggersField(val: any): CreateWebhookRequestBodyArgTriggersField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateWebhookRequestBodyArgTriggersField\"";
    }
    if (val == "FILE.UPLOADED") {
        return "FILE.UPLOADED";
    }
    if (val == "FILE.PREVIEWED") {
        return "FILE.PREVIEWED";
    }
    if (val == "FILE.DOWNLOADED") {
        return "FILE.DOWNLOADED";
    }
    if (val == "FILE.TRASHED") {
        return "FILE.TRASHED";
    }
    if (val == "FILE.DELETED") {
        return "FILE.DELETED";
    }
    if (val == "FILE.RESTORED") {
        return "FILE.RESTORED";
    }
    if (val == "FILE.COPIED") {
        return "FILE.COPIED";
    }
    if (val == "FILE.MOVED") {
        return "FILE.MOVED";
    }
    if (val == "FILE.LOCKED") {
        return "FILE.LOCKED";
    }
    if (val == "FILE.UNLOCKED") {
        return "FILE.UNLOCKED";
    }
    if (val == "FILE.RENAMED") {
        return "FILE.RENAMED";
    }
    if (val == "COMMENT.CREATED") {
        return "COMMENT.CREATED";
    }
    if (val == "COMMENT.UPDATED") {
        return "COMMENT.UPDATED";
    }
    if (val == "COMMENT.DELETED") {
        return "COMMENT.DELETED";
    }
    if (val == "TASK_ASSIGNMENT.CREATED") {
        return "TASK_ASSIGNMENT.CREATED";
    }
    if (val == "TASK_ASSIGNMENT.UPDATED") {
        return "TASK_ASSIGNMENT.UPDATED";
    }
    if (val == "METADATA_INSTANCE.CREATED") {
        return "METADATA_INSTANCE.CREATED";
    }
    if (val == "METADATA_INSTANCE.UPDATED") {
        return "METADATA_INSTANCE.UPDATED";
    }
    if (val == "METADATA_INSTANCE.DELETED") {
        return "METADATA_INSTANCE.DELETED";
    }
    if (val == "FOLDER.CREATED") {
        return "FOLDER.CREATED";
    }
    if (val == "FOLDER.RENAMED") {
        return "FOLDER.RENAMED";
    }
    if (val == "FOLDER.DOWNLOADED") {
        return "FOLDER.DOWNLOADED";
    }
    if (val == "FOLDER.RESTORED") {
        return "FOLDER.RESTORED";
    }
    if (val == "FOLDER.DELETED") {
        return "FOLDER.DELETED";
    }
    if (val == "FOLDER.COPIED") {
        return "FOLDER.COPIED";
    }
    if (val == "FOLDER.MOVED") {
        return "FOLDER.MOVED";
    }
    if (val == "FOLDER.TRASHED") {
        return "FOLDER.TRASHED";
    }
    if (val == "WEBHOOK.DELETED") {
        return "WEBHOOK.DELETED";
    }
    if (val == "COLLABORATION.CREATED") {
        return "COLLABORATION.CREATED";
    }
    if (val == "COLLABORATION.ACCEPTED") {
        return "COLLABORATION.ACCEPTED";
    }
    if (val == "COLLABORATION.REJECTED") {
        return "COLLABORATION.REJECTED";
    }
    if (val == "COLLABORATION.REMOVED") {
        return "COLLABORATION.REMOVED";
    }
    if (val == "COLLABORATION.UPDATED") {
        return "COLLABORATION.UPDATED";
    }
    if (val == "SHARED_LINK.DELETED") {
        return "SHARED_LINK.DELETED";
    }
    if (val == "SHARED_LINK.CREATED") {
        return "SHARED_LINK.CREATED";
    }
    if (val == "SHARED_LINK.UPDATED") {
        return "SHARED_LINK.UPDATED";
    }
    if (val == "SIGN_REQUEST.COMPLETED") {
        return "SIGN_REQUEST.COMPLETED";
    }
    if (val == "SIGN_REQUEST.DECLINED") {
        return "SIGN_REQUEST.DECLINED";
    }
    if (val == "SIGN_REQUEST.EXPIRED") {
        return "SIGN_REQUEST.EXPIRED";
    }
    if (val == "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED") {
        return "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateWebhookRequestBodyArg(val: CreateWebhookRequestBodyArg): Json {
    return { ["target"]: serializeCreateWebhookRequestBodyArgTargetField(val.target), ["address"]: val.address, ["triggers"]: val.triggers.map(function (item: CreateWebhookRequestBodyArgTriggersField): any {
            return serializeCreateWebhookRequestBodyArgTriggersField(item);
        }) as readonly any[] };
}
export function deserializeCreateWebhookRequestBodyArg(val: any): CreateWebhookRequestBodyArg {
    const target: CreateWebhookRequestBodyArgTargetField = deserializeCreateWebhookRequestBodyArgTargetField(val.target);
    const address: string = val.address;
    const triggers: readonly CreateWebhookRequestBodyArgTriggersField[] = val.triggers.map(function (itm: Json): any {
        return deserializeCreateWebhookRequestBodyArgTriggersField(itm);
    }) as readonly any[];
    return { target: target, address: address, triggers: triggers } satisfies CreateWebhookRequestBodyArg;
}
export function serializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField(val: UpdateWebhookByIdRequestBodyArgTargetFieldTypeField): Json {
    return val;
}
export function deserializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField(val: any): UpdateWebhookByIdRequestBodyArgTargetFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateWebhookByIdRequestBodyArgTargetFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateWebhookByIdRequestBodyArgTargetField(val: UpdateWebhookByIdRequestBodyArgTargetField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField(val.type) };
}
export function deserializeUpdateWebhookByIdRequestBodyArgTargetField(val: any): UpdateWebhookByIdRequestBodyArgTargetField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | UpdateWebhookByIdRequestBodyArgTargetFieldTypeField = val.type == void 0 ? void 0 : deserializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField(val.type);
    return { id: id, type: type } satisfies UpdateWebhookByIdRequestBodyArgTargetField;
}
export function serializeUpdateWebhookByIdRequestBodyArgTriggersField(val: UpdateWebhookByIdRequestBodyArgTriggersField): Json {
    return val;
}
export function deserializeUpdateWebhookByIdRequestBodyArgTriggersField(val: any): UpdateWebhookByIdRequestBodyArgTriggersField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateWebhookByIdRequestBodyArgTriggersField\"";
    }
    if (val == "FILE.UPLOADED") {
        return "FILE.UPLOADED";
    }
    if (val == "FILE.PREVIEWED") {
        return "FILE.PREVIEWED";
    }
    if (val == "FILE.DOWNLOADED") {
        return "FILE.DOWNLOADED";
    }
    if (val == "FILE.TRASHED") {
        return "FILE.TRASHED";
    }
    if (val == "FILE.DELETED") {
        return "FILE.DELETED";
    }
    if (val == "FILE.RESTORED") {
        return "FILE.RESTORED";
    }
    if (val == "FILE.COPIED") {
        return "FILE.COPIED";
    }
    if (val == "FILE.MOVED") {
        return "FILE.MOVED";
    }
    if (val == "FILE.LOCKED") {
        return "FILE.LOCKED";
    }
    if (val == "FILE.UNLOCKED") {
        return "FILE.UNLOCKED";
    }
    if (val == "FILE.RENAMED") {
        return "FILE.RENAMED";
    }
    if (val == "COMMENT.CREATED") {
        return "COMMENT.CREATED";
    }
    if (val == "COMMENT.UPDATED") {
        return "COMMENT.UPDATED";
    }
    if (val == "COMMENT.DELETED") {
        return "COMMENT.DELETED";
    }
    if (val == "TASK_ASSIGNMENT.CREATED") {
        return "TASK_ASSIGNMENT.CREATED";
    }
    if (val == "TASK_ASSIGNMENT.UPDATED") {
        return "TASK_ASSIGNMENT.UPDATED";
    }
    if (val == "METADATA_INSTANCE.CREATED") {
        return "METADATA_INSTANCE.CREATED";
    }
    if (val == "METADATA_INSTANCE.UPDATED") {
        return "METADATA_INSTANCE.UPDATED";
    }
    if (val == "METADATA_INSTANCE.DELETED") {
        return "METADATA_INSTANCE.DELETED";
    }
    if (val == "FOLDER.CREATED") {
        return "FOLDER.CREATED";
    }
    if (val == "FOLDER.RENAMED") {
        return "FOLDER.RENAMED";
    }
    if (val == "FOLDER.DOWNLOADED") {
        return "FOLDER.DOWNLOADED";
    }
    if (val == "FOLDER.RESTORED") {
        return "FOLDER.RESTORED";
    }
    if (val == "FOLDER.DELETED") {
        return "FOLDER.DELETED";
    }
    if (val == "FOLDER.COPIED") {
        return "FOLDER.COPIED";
    }
    if (val == "FOLDER.MOVED") {
        return "FOLDER.MOVED";
    }
    if (val == "FOLDER.TRASHED") {
        return "FOLDER.TRASHED";
    }
    if (val == "WEBHOOK.DELETED") {
        return "WEBHOOK.DELETED";
    }
    if (val == "COLLABORATION.CREATED") {
        return "COLLABORATION.CREATED";
    }
    if (val == "COLLABORATION.ACCEPTED") {
        return "COLLABORATION.ACCEPTED";
    }
    if (val == "COLLABORATION.REJECTED") {
        return "COLLABORATION.REJECTED";
    }
    if (val == "COLLABORATION.REMOVED") {
        return "COLLABORATION.REMOVED";
    }
    if (val == "COLLABORATION.UPDATED") {
        return "COLLABORATION.UPDATED";
    }
    if (val == "SHARED_LINK.DELETED") {
        return "SHARED_LINK.DELETED";
    }
    if (val == "SHARED_LINK.CREATED") {
        return "SHARED_LINK.CREATED";
    }
    if (val == "SHARED_LINK.UPDATED") {
        return "SHARED_LINK.UPDATED";
    }
    if (val == "SIGN_REQUEST.COMPLETED") {
        return "SIGN_REQUEST.COMPLETED";
    }
    if (val == "SIGN_REQUEST.DECLINED") {
        return "SIGN_REQUEST.DECLINED";
    }
    if (val == "SIGN_REQUEST.EXPIRED") {
        return "SIGN_REQUEST.EXPIRED";
    }
    if (val == "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED") {
        return "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateWebhookByIdRequestBodyArg(val: UpdateWebhookByIdRequestBodyArg): Json {
    return { ["target"]: val.target == void 0 ? void 0 : serializeUpdateWebhookByIdRequestBodyArgTargetField(val.target), ["address"]: val.address, ["triggers"]: val.triggers == void 0 ? void 0 : val.triggers.map(function (item: UpdateWebhookByIdRequestBodyArgTriggersField): any {
            return serializeUpdateWebhookByIdRequestBodyArgTriggersField(item);
        }) as readonly any[] };
}
export function deserializeUpdateWebhookByIdRequestBodyArg(val: any): UpdateWebhookByIdRequestBodyArg {
    const target: undefined | UpdateWebhookByIdRequestBodyArgTargetField = val.target == void 0 ? void 0 : deserializeUpdateWebhookByIdRequestBodyArgTargetField(val.target);
    const address: undefined | string = isJson(val.address, "string") ? val.address : void 0;
    const triggers: undefined | readonly UpdateWebhookByIdRequestBodyArgTriggersField[] = isJson(val.triggers, "array") ? val.triggers.map(function (itm: Json): any {
        return deserializeUpdateWebhookByIdRequestBodyArgTriggersField(itm);
    }) as readonly any[] : void 0;
    return { target: target, address: address, triggers: triggers } satisfies UpdateWebhookByIdRequestBodyArg;
}
