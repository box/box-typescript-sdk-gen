import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type CommentsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
export declare class CommentsManager {
    readonly auth: CommentsManagerAuthField;
    constructor(fields: Omit<CommentsManager, "getFileComments" | "getCommentById" | "updateCommentById" | "deleteCommentById" | "createComment">);
    getFileComments(fileId: string, options?: GetFileCommentsOptionsArg): Promise<any>;
    getCommentById(commentId: string, options?: GetCommentByIdOptionsArg): Promise<any>;
    updateCommentById(commentId: string, requestBody: UpdateCommentByIdRequestBodyArg, options?: UpdateCommentByIdOptionsArg): Promise<any>;
    deleteCommentById(commentId: string): Promise<any>;
    createComment(requestBody: CreateCommentRequestBodyArg, options?: CreateCommentOptionsArg): Promise<any>;
}
