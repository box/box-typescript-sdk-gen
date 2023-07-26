import { Comments } from "../schemas.generated.js";
import { CommentFull } from "../schemas.generated.js";
import { Comment } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
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
export declare class CommentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<CommentsManager, "getFileComments" | "getCommentById" | "updateCommentById" | "deleteCommentById" | "createComment">);
    getFileComments(fileId: string, queryParams?: undefined | GetFileCommentsQueryParamsArg): Promise<Comments>;
    getCommentById(commentId: string, queryParams?: undefined | GetCommentByIdQueryParamsArg): Promise<CommentFull>;
    updateCommentById(commentId: string, requestBody: UpdateCommentByIdRequestBodyArg, queryParams?: undefined | UpdateCommentByIdQueryParamsArg): Promise<CommentFull>;
    deleteCommentById(commentId: string): Promise<any>;
    createComment(requestBody: CreateCommentRequestBodyArg, queryParams?: undefined | CreateCommentQueryParamsArg): Promise<Comment>;
}
export declare function serializeGetFileCommentsQueryParamsArg(val: GetFileCommentsQueryParamsArg): Json;
export declare function deserializeGetFileCommentsQueryParamsArg(val: any): GetFileCommentsQueryParamsArg;
export declare function serializeGetCommentByIdQueryParamsArg(val: GetCommentByIdQueryParamsArg): Json;
export declare function deserializeGetCommentByIdQueryParamsArg(val: any): GetCommentByIdQueryParamsArg;
export declare function serializeUpdateCommentByIdRequestBodyArg(val: UpdateCommentByIdRequestBodyArg): Json;
export declare function deserializeUpdateCommentByIdRequestBodyArg(val: any): UpdateCommentByIdRequestBodyArg;
export declare function serializeUpdateCommentByIdQueryParamsArg(val: UpdateCommentByIdQueryParamsArg): Json;
export declare function deserializeUpdateCommentByIdQueryParamsArg(val: any): UpdateCommentByIdQueryParamsArg;
export declare function serializeCreateCommentRequestBodyArgItemFieldTypeField(val: CreateCommentRequestBodyArgItemFieldTypeField): Json;
export declare function deserializeCreateCommentRequestBodyArgItemFieldTypeField(val: any): CreateCommentRequestBodyArgItemFieldTypeField;
export declare function serializeCreateCommentRequestBodyArgItemField(val: CreateCommentRequestBodyArgItemField): Json;
export declare function deserializeCreateCommentRequestBodyArgItemField(val: any): CreateCommentRequestBodyArgItemField;
export declare function serializeCreateCommentRequestBodyArg(val: CreateCommentRequestBodyArg): Json;
export declare function deserializeCreateCommentRequestBodyArg(val: any): CreateCommentRequestBodyArg;
export declare function serializeCreateCommentQueryParamsArg(val: CreateCommentQueryParamsArg): Json;
export declare function deserializeCreateCommentQueryParamsArg(val: any): CreateCommentQueryParamsArg;
