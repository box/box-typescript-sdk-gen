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
export declare function newSerializeGetFileCommentsQueryParamsArg(val: GetFileCommentsQueryParamsArg): Json;
export declare function newDeserializeGetFileCommentsQueryParamsArg(val: any): GetFileCommentsQueryParamsArg;
export declare function newSerializeGetCommentByIdQueryParamsArg(val: GetCommentByIdQueryParamsArg): Json;
export declare function newDeserializeGetCommentByIdQueryParamsArg(val: any): GetCommentByIdQueryParamsArg;
export declare function newSerializeUpdateCommentByIdRequestBodyArg(val: UpdateCommentByIdRequestBodyArg): Json;
export declare function newDeserializeUpdateCommentByIdRequestBodyArg(val: any): UpdateCommentByIdRequestBodyArg;
export declare function newSerializeUpdateCommentByIdQueryParamsArg(val: UpdateCommentByIdQueryParamsArg): Json;
export declare function newDeserializeUpdateCommentByIdQueryParamsArg(val: any): UpdateCommentByIdQueryParamsArg;
export declare function newSerializeCreateCommentRequestBodyArgItemFieldTypeField(val: CreateCommentRequestBodyArgItemFieldTypeField): Json;
export declare function newDeserializeCreateCommentRequestBodyArgItemFieldTypeField(val: any): CreateCommentRequestBodyArgItemFieldTypeField;
export declare function newSerializeCreateCommentRequestBodyArgItemField(val: CreateCommentRequestBodyArgItemField): Json;
export declare function newDeserializeCreateCommentRequestBodyArgItemField(val: any): CreateCommentRequestBodyArgItemField;
export declare function newSerializeCreateCommentRequestBodyArg(val: CreateCommentRequestBodyArg): Json;
export declare function newDeserializeCreateCommentRequestBodyArg(val: any): CreateCommentRequestBodyArg;
export declare function newSerializeCreateCommentQueryParamsArg(val: CreateCommentQueryParamsArg): Json;
export declare function newDeserializeCreateCommentQueryParamsArg(val: any): CreateCommentQueryParamsArg;
