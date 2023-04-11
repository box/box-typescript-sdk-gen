import { Comments } from "../schemas.generated.js";
import { deserializeComments } from "../schemas.generated.js";
import { serializeComments } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { CommentFull } from "../schemas.generated.js";
import { deserializeCommentFull } from "../schemas.generated.js";
import { serializeCommentFull } from "../schemas.generated.js";
import { Comment } from "../schemas.generated.js";
import { deserializeComment } from "../schemas.generated.js";
import { serializeComment } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type CommentsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface GetFileCommentsOptionsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
}
export interface GetCommentByIdOptionsArg {
    readonly fields?: string;
}
export interface UpdateCommentByIdRequestBodyArg {
    readonly message?: string;
}
export interface UpdateCommentByIdOptionsArg {
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
export interface CreateCommentOptionsArg {
    readonly fields?: string;
}
export class CommentsManager {
    readonly auth!: CommentsManagerAuthField;
    constructor(fields: Omit<CommentsManager, "getFileComments" | "getCommentById" | "updateCommentById" | "deleteCommentById" | "createComment">) {
        Object.assign(this, fields);
    }
    async getFileComments(fileId: string, options: GetFileCommentsOptionsArg = {} satisfies GetFileCommentsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/comments") as string, { method: "GET", params: { ["fields"]: options.fields, ["limit"]: options.limit, ["offset"]: options.offset }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeComments(deserializeJSON(response.text) as JSON);
    }
    async getCommentById(commentId: string, options: GetCommentByIdOptionsArg = {} satisfies GetCommentByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments/", commentId) as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCommentFull(deserializeJSON(response.text) as JSON);
    }
    async updateCommentById(commentId: string, requestBody: UpdateCommentByIdRequestBodyArg, options: UpdateCommentByIdOptionsArg = {} satisfies UpdateCommentByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments/", commentId) as string, { method: "PUT", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCommentFull(deserializeJSON(response.text) as JSON);
    }
    async deleteCommentById(commentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments/", commentId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async createComment(requestBody: CreateCommentRequestBodyArg, options: CreateCommentOptionsArg = {} satisfies CreateCommentOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments") as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeComment(deserializeJSON(response.text) as JSON);
    }
}
