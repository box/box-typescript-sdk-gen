import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
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
export declare class CommentsManager {
    readonly auth: CommentsManagerAuthField;
    constructor(fields: Omit<CommentsManager, "getFilesIdComments" | "getCommentsId" | "putCommentsId" | "deleteCommentsId" | "postComments">);
    getFilesIdComments(fileId: string, options?: GetFilesIdCommentsOptionsArg): Promise<any>;
    getCommentsId(commentId: string, options?: GetCommentsIdOptionsArg): Promise<any>;
    putCommentsId(commentId: string, requestBody: PutCommentsIdRequestBodyArg, options?: PutCommentsIdOptionsArg): Promise<any>;
    deleteCommentsId(commentId: string): Promise<any>;
    postComments(requestBody: PostCommentsRequestBodyArg, options?: PostCommentsOptionsArg): Promise<any>;
}
