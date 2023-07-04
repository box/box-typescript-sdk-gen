import { newSerializeComments } from "../schemas.generated.js";
import { newDeserializeComments } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeCommentFull } from "../schemas.generated.js";
import { newDeserializeCommentFull } from "../schemas.generated.js";
import { newSerializeComment } from "../schemas.generated.js";
import { newDeserializeComment } from "../schemas.generated.js";
import { Comments } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { CommentFull } from "../schemas.generated.js";
import { Comment } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
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
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/comments") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeComments(deserializeJson(response.text));
    }
    async getCommentById(commentId: string, queryParams: undefined | GetCommentByIdQueryParamsArg = {} satisfies GetCommentByIdQueryParamsArg): Promise<CommentFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments/", commentId) as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeCommentFull(deserializeJson(response.text));
    }
    async updateCommentById(commentId: string, requestBody: UpdateCommentByIdRequestBodyArg, queryParams: undefined | UpdateCommentByIdQueryParamsArg = {} satisfies UpdateCommentByIdQueryParamsArg): Promise<CommentFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments/", commentId) as string, { method: "PUT", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeCommentFull(deserializeJson(response.text));
    }
    async deleteCommentById(commentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments/", commentId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async createComment(requestBody: CreateCommentRequestBodyArg, queryParams: undefined | CreateCommentQueryParamsArg = {} satisfies CreateCommentQueryParamsArg): Promise<Comment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments") as string, { method: "POST", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeComment(deserializeJson(response.text));
    }
}
export function newSerializeGetFileCommentsQueryParamsArg(val: GetFileCommentsQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["limit"]: val.limit, ["offset"]: val.offset };
}
export function newDeserializeGetFileCommentsQueryParamsArg(val: any): GetFileCommentsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    return { fields: fields, limit: limit, offset: offset } satisfies GetFileCommentsQueryParamsArg;
}
export function newSerializeGetCommentByIdQueryParamsArg(val: GetCommentByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetCommentByIdQueryParamsArg(val: any): GetCommentByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetCommentByIdQueryParamsArg;
}
export function newSerializeUpdateCommentByIdRequestBodyArg(val: UpdateCommentByIdRequestBodyArg): Json {
    return { ["message"]: val.message };
}
export function newDeserializeUpdateCommentByIdRequestBodyArg(val: any): UpdateCommentByIdRequestBodyArg {
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    return { message: message } satisfies UpdateCommentByIdRequestBodyArg;
}
export function newSerializeUpdateCommentByIdQueryParamsArg(val: UpdateCommentByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeUpdateCommentByIdQueryParamsArg(val: any): UpdateCommentByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies UpdateCommentByIdQueryParamsArg;
}
export function newSerializeCreateCommentRequestBodyArgItemFieldTypeField(val: CreateCommentRequestBodyArgItemFieldTypeField): Json {
    return val;
}
export function newDeserializeCreateCommentRequestBodyArgItemFieldTypeField(val: any): CreateCommentRequestBodyArgItemFieldTypeField {
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
export function newSerializeCreateCommentRequestBodyArgItemField(val: CreateCommentRequestBodyArgItemField): Json {
    return { ["id"]: val.id, ["type"]: newSerializeCreateCommentRequestBodyArgItemFieldTypeField(val.type) };
}
export function newDeserializeCreateCommentRequestBodyArgItemField(val: any): CreateCommentRequestBodyArgItemField {
    const id: string = val.id;
    const type: CreateCommentRequestBodyArgItemFieldTypeField = newDeserializeCreateCommentRequestBodyArgItemFieldTypeField(val.type);
    return { id: id, type: type } satisfies CreateCommentRequestBodyArgItemField;
}
export function newSerializeCreateCommentRequestBodyArg(val: CreateCommentRequestBodyArg): Json {
    return { ["message"]: val.message, ["taggedMessage"]: val.taggedMessage, ["item"]: val.item == void 0 ? void 0 : newSerializeCreateCommentRequestBodyArgItemField(val.item) };
}
export function newDeserializeCreateCommentRequestBodyArg(val: any): CreateCommentRequestBodyArg {
    const message: string = val.message;
    const taggedMessage: undefined | string = isJson(val.taggedMessage, "string") ? val.taggedMessage : void 0;
    const item: undefined | CreateCommentRequestBodyArgItemField = val.item == void 0 ? void 0 : newDeserializeCreateCommentRequestBodyArgItemField(val.item);
    return { message: message, taggedMessage: taggedMessage, item: item } satisfies CreateCommentRequestBodyArg;
}
export function newSerializeCreateCommentQueryParamsArg(val: CreateCommentQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeCreateCommentQueryParamsArg(val: any): CreateCommentQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies CreateCommentQueryParamsArg;
}
