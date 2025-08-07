import { deserializeComments } from '../schemas/comments.generated.js';
import { deserializeCommentFull } from '../schemas/commentFull.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetFileCommentsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFileCommentsHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetCommentByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetCommentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateCommentByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.queryParams = {};
        this.headers = new UpdateCommentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.requestBody !== undefined) {
            this.requestBody = fields.requestBody;
        }
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteCommentByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteCommentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateCommentOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new CreateCommentHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFileCommentsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetCommentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateCommentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteCommentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateCommentHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CommentsManager {
    constructor(fields) {
        this.networkSession = new NetworkSession({});
        if (fields.auth !== undefined) {
            this.auth = fields.auth;
        }
        if (fields.networkSession !== undefined) {
            this.networkSession = fields.networkSession;
        }
    }
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
    async getFileComments(fileId, optionalsInput = {}) {
        const optionals = new GetFileCommentsOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
            ['limit']: toString(queryParams.limit),
            ['offset']: toString(queryParams.offset),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/comments'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeComments(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieves the message and metadata for a specific comment, as well
       * as information on the user who created the comment.
       * @param {string} commentId The ID of the comment.
      Example: "12345"
       * @param {GetCommentByIdOptionalsInput} optionalsInput
       * @returns {Promise<CommentFull>}
       */
    async getCommentById(commentId, optionalsInput = {}) {
        const optionals = new GetCommentByIdOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/comments/', toString(commentId)),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeCommentFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Update the message of a comment.
       * @param {string} commentId The ID of the comment.
      Example: "12345"
       * @param {UpdateCommentByIdOptionalsInput} optionalsInput
       * @returns {Promise<CommentFull>}
       */
    async updateCommentById(commentId, optionalsInput = {}) {
        const optionals = new UpdateCommentByIdOptionals({
            requestBody: optionalsInput.requestBody,
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const requestBody = optionals.requestBody;
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/comments/', toString(commentId)),
            method: 'PUT',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeUpdateCommentByIdRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeCommentFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Permanently deletes a comment.
       * @param {string} commentId The ID of the comment.
      Example: "12345"
       * @param {DeleteCommentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteCommentById(commentId, optionalsInput = {}) {
        const optionals = new DeleteCommentByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/comments/', toString(commentId)),
            method: 'DELETE',
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
    /**
     * Adds a comment by the user to a specific file, or
     * as a reply to an other comment.
     * @param {CreateCommentRequestBody} requestBody Request body of createComment method
     * @param {CreateCommentOptionalsInput} optionalsInput
     * @returns {Promise<CommentFull>}
     */
    async createComment(requestBody, optionalsInput = {}) {
        const optionals = new CreateCommentOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/comments'),
            method: 'POST',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeCreateCommentRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeCommentFull(response.data),
            rawData: response.data,
        };
    }
}
export function serializeUpdateCommentByIdRequestBody(val) {
    return { ['message']: val.message };
}
export function deserializeUpdateCommentByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateCommentByIdRequestBody"',
        });
    }
    if (!(val.message == void 0) && !sdIsString(val.message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "message" of type "UpdateCommentByIdRequestBody"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    return { message: message };
}
export function serializeCreateCommentRequestBodyItemTypeField(val) {
    return val;
}
export function deserializeCreateCommentRequestBodyItemTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'comment') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateCommentRequestBodyItemTypeField",
    });
}
export function serializeCreateCommentRequestBodyItemField(val) {
    return {
        ['id']: val.id,
        ['type']: serializeCreateCommentRequestBodyItemTypeField(val.type),
    };
}
export function deserializeCreateCommentRequestBodyItemField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateCommentRequestBodyItemField"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateCommentRequestBodyItemField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateCommentRequestBodyItemField"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "CreateCommentRequestBodyItemField" to be defined',
        });
    }
    const type = deserializeCreateCommentRequestBodyItemTypeField(val.type);
    return { id: id, type: type };
}
export function serializeCreateCommentRequestBody(val) {
    return {
        ['message']: val.message,
        ['tagged_message']: val.taggedMessage,
        ['item']: serializeCreateCommentRequestBodyItemField(val.item),
    };
}
export function deserializeCreateCommentRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateCommentRequestBody"',
        });
    }
    if (val.message == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "message" of type "CreateCommentRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "message" of type "CreateCommentRequestBody"',
        });
    }
    const message = val.message;
    if (!(val.tagged_message == void 0) && !sdIsString(val.tagged_message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "tagged_message" of type "CreateCommentRequestBody"',
        });
    }
    const taggedMessage = val.tagged_message == void 0 ? void 0 : val.tagged_message;
    if (val.item == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "item" of type "CreateCommentRequestBody" to be defined',
        });
    }
    const item = deserializeCreateCommentRequestBodyItemField(val.item);
    return {
        message: message,
        taggedMessage: taggedMessage,
        item: item,
    };
}
//# sourceMappingURL=comments.generated.js.map