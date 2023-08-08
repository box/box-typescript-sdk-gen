import { serializeComments } from "../schemas.generated.js";
import { deserializeComments } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeCommentFull } from "../schemas.generated.js";
import { deserializeCommentFull } from "../schemas.generated.js";
import { serializeComment } from "../schemas.generated.js";
import { deserializeComment } from "../schemas.generated.js";
import { Comments } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { CommentFull } from "../schemas.generated.js";
import { Comment } from "../schemas.generated.js";
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
export interface GetFileCommentsQueryParamsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
}
export class GetFileCommentsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFileCommentsHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface GetCommentByIdQueryParamsArg {
    readonly fields?: string;
}
export class GetCommentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetCommentByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface UpdateCommentByIdRequestBodyArg {
    readonly message?: string;
}
export interface UpdateCommentByIdQueryParamsArg {
    readonly fields?: string;
}
export class UpdateCommentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: UpdateCommentByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class DeleteCommentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteCommentByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export type CreateCommentRequestBodyArgItemFieldTypeField = "file" | "comment";
export interface CreateCommentRequestBodyArgItemField {
    readonly id: string;
    readonly type: CreateCommentRequestBodyArgItemFieldTypeField;
}
export interface CreateCommentRequestBodyArg {
    readonly message: string;
    readonly taggedMessage?: string;
    readonly item: CreateCommentRequestBodyArgItemField;
}
export interface CreateCommentQueryParamsArg {
    readonly fields?: string;
}
export class CreateCommentHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: CreateCommentHeadersArg) {
        Object.assign(this, fields);
    }
}
export class CommentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<CommentsManager, "getFileComments" | "getCommentById" | "updateCommentById" | "deleteCommentById" | "createComment">) {
        Object.assign(this, fields);
    }
    async getFileComments(fileId: string, queryParams: GetFileCommentsQueryParamsArg = {} satisfies GetFileCommentsQueryParamsArg, headers: GetFileCommentsHeadersArg = new GetFileCommentsHeadersArg({})): Promise<Comments> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields), ["limit"]: toString(queryParams.limit), ["offset"]: toString(queryParams.offset) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/comments") as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeComments(deserializeJson(response.text));
    }
    async getCommentById(commentId: string, queryParams: GetCommentByIdQueryParamsArg = {} satisfies GetCommentByIdQueryParamsArg, headers: GetCommentByIdHeadersArg = new GetCommentByIdHeadersArg({})): Promise<CommentFull> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments/", commentId) as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCommentFull(deserializeJson(response.text));
    }
    async updateCommentById(commentId: string, requestBody: UpdateCommentByIdRequestBodyArg = {} satisfies UpdateCommentByIdRequestBodyArg, queryParams: UpdateCommentByIdQueryParamsArg = {} satisfies UpdateCommentByIdQueryParamsArg, headers: UpdateCommentByIdHeadersArg = new UpdateCommentByIdHeadersArg({})): Promise<CommentFull> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments/", commentId) as string, { method: "PUT", params: queryParamsMap, headers: headersMap, body: serializeJson(serializeUpdateCommentByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCommentFull(deserializeJson(response.text));
    }
    async deleteCommentById(commentId: string, headers: DeleteCommentByIdHeadersArg = new DeleteCommentByIdHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments/", commentId) as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async createComment(requestBody: CreateCommentRequestBodyArg, queryParams: CreateCommentQueryParamsArg = {} satisfies CreateCommentQueryParamsArg, headers: CreateCommentHeadersArg = new CreateCommentHeadersArg({})): Promise<Comment> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments") as string, { method: "POST", params: queryParamsMap, headers: headersMap, body: serializeJson(serializeCreateCommentRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeComment(deserializeJson(response.text));
    }
}
export function serializeUpdateCommentByIdRequestBodyArg(val: UpdateCommentByIdRequestBodyArg): Json {
    return { ["message"]: val.message };
}
export function deserializeUpdateCommentByIdRequestBodyArg(val: any): UpdateCommentByIdRequestBodyArg {
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    return { message: message } satisfies UpdateCommentByIdRequestBodyArg;
}
export function serializeCreateCommentRequestBodyArgItemFieldTypeField(val: CreateCommentRequestBodyArgItemFieldTypeField): Json {
    return val;
}
export function deserializeCreateCommentRequestBodyArgItemFieldTypeField(val: any): CreateCommentRequestBodyArgItemFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateCommentRequestBodyArgItemFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "comment") {
        return "comment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateCommentRequestBodyArgItemField(val: CreateCommentRequestBodyArgItemField): Json {
    return { ["id"]: val.id, ["type"]: serializeCreateCommentRequestBodyArgItemFieldTypeField(val.type) };
}
export function deserializeCreateCommentRequestBodyArgItemField(val: any): CreateCommentRequestBodyArgItemField {
    const id: string = val.id;
    const type: CreateCommentRequestBodyArgItemFieldTypeField = deserializeCreateCommentRequestBodyArgItemFieldTypeField(val.type);
    return { id: id, type: type } satisfies CreateCommentRequestBodyArgItemField;
}
export function serializeCreateCommentRequestBodyArg(val: CreateCommentRequestBodyArg): Json {
    return { ["message"]: val.message, ["tagged_message"]: val.taggedMessage, ["item"]: serializeCreateCommentRequestBodyArgItemField(val.item) };
}
export function deserializeCreateCommentRequestBodyArg(val: any): CreateCommentRequestBodyArg {
    const message: string = val.message;
    const taggedMessage: undefined | string = isJson(val.tagged_message, "string") ? val.tagged_message : void 0;
    const item: CreateCommentRequestBodyArgItemField = deserializeCreateCommentRequestBodyArgItemField(val.item);
    return { message: message, taggedMessage: taggedMessage, item: item } satisfies CreateCommentRequestBodyArg;
}
