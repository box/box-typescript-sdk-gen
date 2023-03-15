import { Comments } from "../schemas.generated.js";
import { deserializeComments } from "../schemas.generated.js";
import { serializeComments } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Comment } from "../schemas.generated.js";
import { deserializeComment } from "../schemas.generated.js";
import { serializeComment } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type CommentsManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface GetFilesIdCommentsOptionsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
}
export interface GetCommentsIdOptionsArg {
    readonly fields?: string;
}
export interface PutCommentsIdRequestBodyArg {
    readonly message?: string;
}
export interface PutCommentsIdOptionsArg {
    readonly fields?: string;
}
export type PostCommentsRequestBodyArgItemFieldTypeField = "file" | "comment";
export interface PostCommentsRequestBodyArgItemField {
    readonly id: string;
    readonly type: PostCommentsRequestBodyArgItemFieldTypeField;
}
export interface PostCommentsRequestBodyArg {
    readonly message: string;
    readonly taggedMessage?: string;
    readonly item?: PostCommentsRequestBodyArgItemField;
}
export interface PostCommentsOptionsArg {
    readonly fields?: string;
}
export class CommentsManager {
    readonly auth!: CommentsManagerAuthField;
    constructor(fields: Omit<CommentsManager, "getFilesIdComments" | "getCommentsId" | "putCommentsId" | "deleteCommentsId" | "postComments">) {
        Object.assign(this, fields);
    }
    async getFilesIdComments(fileId: string, options: GetFilesIdCommentsOptionsArg = {} satisfies GetFilesIdCommentsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/comments") as string, { method: "GET", params: { ["fields"]: options.fields, ["limit"]: options.limit, ["offset"]: options.offset }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeComments(await deserializeJson(response.text));
    }
    async getCommentsId(commentId: string, options: GetCommentsIdOptionsArg = {} satisfies GetCommentsIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments/", commentId) as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeComment(await deserializeJson(response.text));
    }
    async putCommentsId(commentId: string, requestBody: PutCommentsIdRequestBodyArg, options: PutCommentsIdOptionsArg = {} satisfies PutCommentsIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments/", commentId) as string, { method: "PUT", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeComment(await deserializeJson(response.text));
    }
    async deleteCommentsId(commentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments/", commentId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async postComments(requestBody: PostCommentsRequestBodyArg, options: PostCommentsOptionsArg = {} satisfies PostCommentsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/comments") as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeComment(await deserializeJson(response.text));
    }
}
