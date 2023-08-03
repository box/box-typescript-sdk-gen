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
export declare class GetFileCommentsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileCommentsHeadersArg);
}
export interface GetCommentByIdQueryParamsArg {
    readonly fields?: string;
}
export declare class GetCommentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetCommentByIdHeadersArg);
}
export interface UpdateCommentByIdRequestBodyArg {
    readonly message?: string;
}
export interface UpdateCommentByIdQueryParamsArg {
    readonly fields?: string;
}
export declare class UpdateCommentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateCommentByIdHeadersArg);
}
export declare class DeleteCommentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteCommentByIdHeadersArg);
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
export declare class CreateCommentHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateCommentHeadersArg);
}
export declare class CommentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<CommentsManager, "getFileComments" | "getCommentById" | "updateCommentById" | "deleteCommentById" | "createComment">);
    getFileComments(fileId: string, queryParams?: GetFileCommentsQueryParamsArg, headers?: GetFileCommentsHeadersArg): Promise<Comments>;
    getCommentById(commentId: string, queryParams?: GetCommentByIdQueryParamsArg, headers?: GetCommentByIdHeadersArg): Promise<CommentFull>;
    updateCommentById(commentId: string, requestBody: UpdateCommentByIdRequestBodyArg, queryParams?: UpdateCommentByIdQueryParamsArg, headers?: UpdateCommentByIdHeadersArg): Promise<CommentFull>;
    deleteCommentById(commentId: string, headers?: DeleteCommentByIdHeadersArg): Promise<undefined>;
    createComment(requestBody: CreateCommentRequestBodyArg, queryParams?: CreateCommentQueryParamsArg, headers?: CreateCommentHeadersArg): Promise<Comment>;
}
export declare function serializeUpdateCommentByIdRequestBodyArg(val: UpdateCommentByIdRequestBodyArg): Json;
export declare function deserializeUpdateCommentByIdRequestBodyArg(val: any): UpdateCommentByIdRequestBodyArg;
export declare function serializeCreateCommentRequestBodyArgItemFieldTypeField(val: CreateCommentRequestBodyArgItemFieldTypeField): Json;
export declare function deserializeCreateCommentRequestBodyArgItemFieldTypeField(val: any): CreateCommentRequestBodyArgItemFieldTypeField;
export declare function serializeCreateCommentRequestBodyArgItemField(val: CreateCommentRequestBodyArgItemField): Json;
export declare function deserializeCreateCommentRequestBodyArgItemField(val: any): CreateCommentRequestBodyArgItemField;
export declare function serializeCreateCommentRequestBodyArg(val: CreateCommentRequestBodyArg): Json;
export declare function deserializeCreateCommentRequestBodyArg(val: any): CreateCommentRequestBodyArg;
