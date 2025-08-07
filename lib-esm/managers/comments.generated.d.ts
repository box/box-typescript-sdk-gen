import { Comments } from '../schemas/comments.generated.js';
import { CommentFull } from '../schemas/commentFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFileCommentsOptionals {
    readonly queryParams: GetFileCommentsQueryParams;
    readonly headers: GetFileCommentsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileCommentsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFileCommentsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFileCommentsOptionalsInput {
    readonly queryParams?: GetFileCommentsQueryParams;
    readonly headers?: GetFileCommentsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetCommentByIdOptionals {
    readonly queryParams: GetCommentByIdQueryParams;
    readonly headers: GetCommentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetCommentByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetCommentByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetCommentByIdOptionalsInput {
    readonly queryParams?: GetCommentByIdQueryParams;
    readonly headers?: GetCommentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateCommentByIdOptionals {
    readonly requestBody: UpdateCommentByIdRequestBody;
    readonly queryParams: UpdateCommentByIdQueryParams;
    readonly headers: UpdateCommentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateCommentByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateCommentByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateCommentByIdOptionalsInput {
    readonly requestBody?: UpdateCommentByIdRequestBody;
    readonly queryParams?: UpdateCommentByIdQueryParams;
    readonly headers?: UpdateCommentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteCommentByIdOptionals {
    readonly headers: DeleteCommentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteCommentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteCommentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteCommentByIdOptionalsInput {
    readonly headers?: DeleteCommentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateCommentOptionals {
    readonly queryParams: CreateCommentQueryParams;
    readonly headers: CreateCommentHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateCommentOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CreateCommentOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CreateCommentOptionalsInput {
    readonly queryParams?: CreateCommentQueryParams;
    readonly headers?: CreateCommentHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetFileCommentsQueryParams {
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested. */
    readonly fields?: readonly string[];
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
    /**
     * The offset of the item at which to begin the response.
     *
     * Queries with offset parameter value
     * exceeding 10000 will be rejected
     * with a 400 response. */
    readonly offset?: number;
}
export declare class GetFileCommentsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileCommentsHeaders, 'extraHeaders'> & Partial<Pick<GetFileCommentsHeaders, 'extraHeaders'>>);
}
export interface GetFileCommentsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetCommentByIdQueryParams {
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested. */
    readonly fields?: readonly string[];
}
export declare class GetCommentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCommentByIdHeaders, 'extraHeaders'> & Partial<Pick<GetCommentByIdHeaders, 'extraHeaders'>>);
}
export interface GetCommentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateCommentByIdRequestBody {
    /**
     * The text of the comment to update. */
    readonly message?: string;
    readonly rawData?: SerializedData;
}
export interface UpdateCommentByIdQueryParams {
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested. */
    readonly fields?: readonly string[];
}
export declare class UpdateCommentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateCommentByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateCommentByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateCommentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteCommentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteCommentByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteCommentByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteCommentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateCommentRequestBodyItemTypeField = 'file' | 'comment';
export interface CreateCommentRequestBodyItemField {
    /**
     * The ID of the item. */
    readonly id: string;
    /**
     * The type of the item that this comment will be placed on. */
    readonly type: CreateCommentRequestBodyItemTypeField;
    readonly rawData?: SerializedData;
}
export interface CreateCommentRequestBody {
    /**
     * The text of the comment.
     *
     * To mention a user, use the `tagged_message`
     * parameter instead. */
    readonly message: string;
    /**
     * The text of the comment, including `@[user_id:name]`
     * somewhere in the message to mention another user, which
     * will send them an email notification, letting them know
     * they have been mentioned.
     *
     * The `user_id` is the target user's ID, where the `name`
     * can be any custom phrase. In the Box UI this name will
     * link to the user's profile.
     *
     * If you are not mentioning another user, use `message`
     * instead. */
    readonly taggedMessage?: string;
    /**
     * The item to attach the comment to. */
    readonly item: CreateCommentRequestBodyItemField;
    readonly rawData?: SerializedData;
}
export interface CreateCommentQueryParams {
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested. */
    readonly fields?: readonly string[];
}
export declare class CreateCommentHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateCommentHeaders, 'extraHeaders'> & Partial<Pick<CreateCommentHeaders, 'extraHeaders'>>);
}
export interface CreateCommentHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CommentsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<CommentsManager, 'networkSession' | 'getFileComments' | 'getCommentById' | 'updateCommentById' | 'deleteCommentById' | 'createComment'> & Partial<Pick<CommentsManager, 'networkSession'>>);
    /**
       * Retrieves a list of comments for a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileCommentsOptionalsInput} optionalsInput
       * @returns {Promise<Comments>}
       */
    getFileComments(fileId: string, optionalsInput?: GetFileCommentsOptionalsInput): Promise<Comments>;
    /**
       * Retrieves the message and metadata for a specific comment, as well
       * as information on the user who created the comment.
       * @param {string} commentId The ID of the comment.
      Example: "12345"
       * @param {GetCommentByIdOptionalsInput} optionalsInput
       * @returns {Promise<CommentFull>}
       */
    getCommentById(commentId: string, optionalsInput?: GetCommentByIdOptionalsInput): Promise<CommentFull>;
    /**
       * Update the message of a comment.
       * @param {string} commentId The ID of the comment.
      Example: "12345"
       * @param {UpdateCommentByIdOptionalsInput} optionalsInput
       * @returns {Promise<CommentFull>}
       */
    updateCommentById(commentId: string, optionalsInput?: UpdateCommentByIdOptionalsInput): Promise<CommentFull>;
    /**
       * Permanently deletes a comment.
       * @param {string} commentId The ID of the comment.
      Example: "12345"
       * @param {DeleteCommentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteCommentById(commentId: string, optionalsInput?: DeleteCommentByIdOptionalsInput): Promise<undefined>;
    /**
     * Adds a comment by the user to a specific file, or
     * as a reply to an other comment.
     * @param {CreateCommentRequestBody} requestBody Request body of createComment method
     * @param {CreateCommentOptionalsInput} optionalsInput
     * @returns {Promise<CommentFull>}
     */
    createComment(requestBody: CreateCommentRequestBody, optionalsInput?: CreateCommentOptionalsInput): Promise<CommentFull>;
}
export interface CommentsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUpdateCommentByIdRequestBody(val: UpdateCommentByIdRequestBody): SerializedData;
export declare function deserializeUpdateCommentByIdRequestBody(val: SerializedData): UpdateCommentByIdRequestBody;
export declare function serializeCreateCommentRequestBodyItemTypeField(val: CreateCommentRequestBodyItemTypeField): SerializedData;
export declare function deserializeCreateCommentRequestBodyItemTypeField(val: SerializedData): CreateCommentRequestBodyItemTypeField;
export declare function serializeCreateCommentRequestBodyItemField(val: CreateCommentRequestBodyItemField): SerializedData;
export declare function deserializeCreateCommentRequestBodyItemField(val: SerializedData): CreateCommentRequestBodyItemField;
export declare function serializeCreateCommentRequestBody(val: CreateCommentRequestBody): SerializedData;
export declare function deserializeCreateCommentRequestBody(val: SerializedData): CreateCommentRequestBody;
