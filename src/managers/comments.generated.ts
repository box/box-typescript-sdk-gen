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
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export interface GetFileCommentsQueryParamsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
}
export interface GetCommentByIdQueryParamsArg {
    readonly fields?: string;
}
export interface UpdateCommentByIdRequestBodyArg {
    readonly message?: string;
}
export interface UpdateCommentByIdQueryParamsArg {
    readonly fields?: string;
}
export type CreateCommentRequestBodyArgItemFieldTypeField = "file" | "comment";
export interface CreateCommentRequestBodyArgItemField {
    readonly id: string;
    readonly type: CreateCommentRequestBodyArgItemFieldTypeField;
}
export interface CreateCommentRequestBodyArg {
    readonly message: string;
    readonly taggedMessage?: string;
    readonly item?: CreateCommentRequestBodyArgItemField;
}
export interface CreateCommentQueryParamsArg {
    readonly fields?: string;
}
export class CommentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<CommentsManager, "getFileComments" | "getCommentById" | "updateCommentById" | "deleteCommentById" | "createComment">) {
        Object.assign(this, fields);
    }
    async getFileComments(fileId: string, queryParams: undefined | GetFileCommentsQueryParamsArg = {} satisfies GetFileCommentsQueryParamsArg): Promise<Comments> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/comments") as string, { method: "GET", params: prepareParams(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeComments(deserializeJson(response.text));
    }
    async getCommentById(commentId: string, queryParams: undefined | GetCommentByIdQueryParamsArg = {} satisfies GetCommentByIdQueryParamsArg): Promise<CommentFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments/", commentId) as string, { method: "GET", params: prepareParams(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCommentFull(deserializeJson(response.text));
    }
    async updateCommentById(commentId: string, requestBody: UpdateCommentByIdRequestBodyArg, queryParams: undefined | UpdateCommentByIdQueryParamsArg = {} satisfies UpdateCommentByIdQueryParamsArg): Promise<CommentFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments/", commentId) as string, { method: "PUT", params: prepareParams(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCommentFull(deserializeJson(response.text));
    }
    async deleteCommentById(commentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments/", commentId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async createComment(requestBody: CreateCommentRequestBodyArg, queryParams: undefined | CreateCommentQueryParamsArg = {} satisfies CreateCommentQueryParamsArg): Promise<Comment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments") as string, { method: "POST", params: prepareParams(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeComment(deserializeJson(response.text));
    }
}
export function serializeGetFileCommentsQueryParamsArg(val: GetFileCommentsQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["limit"]: val.limit, ["offset"]: val.offset };
}
export function deserializeGetFileCommentsQueryParamsArg(val: any): GetFileCommentsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    return { fields: fields, limit: limit, offset: offset } satisfies GetFileCommentsQueryParamsArg;
}
export function serializeGetCommentByIdQueryParamsArg(val: GetCommentByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeGetCommentByIdQueryParamsArg(val: any): GetCommentByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetCommentByIdQueryParamsArg;
}
export function serializeUpdateCommentByIdRequestBodyArg(val: UpdateCommentByIdRequestBodyArg): Json {
    return { ["message"]: val.message };
}
export function deserializeUpdateCommentByIdRequestBodyArg(val: any): UpdateCommentByIdRequestBodyArg {
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    return { message: message } satisfies UpdateCommentByIdRequestBodyArg;
}
export function serializeUpdateCommentByIdQueryParamsArg(val: UpdateCommentByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeUpdateCommentByIdQueryParamsArg(val: any): UpdateCommentByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies UpdateCommentByIdQueryParamsArg;
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
    return { ["message"]: val.message, ["taggedMessage"]: val.taggedMessage, ["item"]: val.item == void 0 ? void 0 : serializeCreateCommentRequestBodyArgItemField(val.item) };
}
export function deserializeCreateCommentRequestBodyArg(val: any): CreateCommentRequestBodyArg {
    const message: string = val.message;
    const taggedMessage: undefined | string = isJson(val.taggedMessage, "string") ? val.taggedMessage : void 0;
    const item: undefined | CreateCommentRequestBodyArgItemField = val.item == void 0 ? void 0 : deserializeCreateCommentRequestBodyArgItemField(val.item);
    return { message: message, taggedMessage: taggedMessage, item: item } satisfies CreateCommentRequestBodyArg;
}
export function serializeCreateCommentQueryParamsArg(val: CreateCommentQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeCreateCommentQueryParamsArg(val: any): CreateCommentQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies CreateCommentQueryParamsArg;
}
