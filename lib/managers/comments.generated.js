"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsManager = exports.CreateCommentHeaders = exports.DeleteCommentByIdHeaders = exports.UpdateCommentByIdHeaders = exports.GetCommentByIdHeaders = exports.GetFileCommentsHeaders = exports.CreateCommentOptionals = exports.DeleteCommentByIdOptionals = exports.UpdateCommentByIdOptionals = exports.GetCommentByIdOptionals = exports.GetFileCommentsOptionals = void 0;
exports.serializeUpdateCommentByIdRequestBody = serializeUpdateCommentByIdRequestBody;
exports.deserializeUpdateCommentByIdRequestBody = deserializeUpdateCommentByIdRequestBody;
exports.serializeCreateCommentRequestBodyItemTypeField = serializeCreateCommentRequestBodyItemTypeField;
exports.deserializeCreateCommentRequestBodyItemTypeField = deserializeCreateCommentRequestBodyItemTypeField;
exports.serializeCreateCommentRequestBodyItemField = serializeCreateCommentRequestBodyItemField;
exports.deserializeCreateCommentRequestBodyItemField = deserializeCreateCommentRequestBodyItemField;
exports.serializeCreateCommentRequestBody = serializeCreateCommentRequestBody;
exports.deserializeCreateCommentRequestBody = deserializeCreateCommentRequestBody;
const comments_generated_js_1 = require("../schemas/comments.generated.js");
const commentFull_generated_js_1 = require("../schemas/commentFull.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetFileCommentsOptionals {
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
exports.GetFileCommentsOptionals = GetFileCommentsOptionals;
class GetCommentByIdOptionals {
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
exports.GetCommentByIdOptionals = GetCommentByIdOptionals;
class UpdateCommentByIdOptionals {
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
exports.UpdateCommentByIdOptionals = UpdateCommentByIdOptionals;
class DeleteCommentByIdOptionals {
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
exports.DeleteCommentByIdOptionals = DeleteCommentByIdOptionals;
class CreateCommentOptionals {
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
exports.CreateCommentOptionals = CreateCommentOptionals;
class GetFileCommentsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileCommentsHeaders = GetFileCommentsHeaders;
class GetCommentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetCommentByIdHeaders = GetCommentByIdHeaders;
class UpdateCommentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateCommentByIdHeaders = UpdateCommentByIdHeaders;
class DeleteCommentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteCommentByIdHeaders = DeleteCommentByIdHeaders;
class CreateCommentHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateCommentHeaders = CreateCommentHeaders;
class CommentsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
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
    getFileComments(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new GetFileCommentsOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['offset']: (0, utils_js_2.toString)(queryParams.offset),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/comments'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, comments_generated_js_1.deserializeComments)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves the message and metadata for a specific comment, as well
       * as information on the user who created the comment.
       * @param {string} commentId The ID of the comment.
      Example: "12345"
       * @param {GetCommentByIdOptionalsInput} optionalsInput
       * @returns {Promise<CommentFull>}
       */
    getCommentById(commentId_1) {
        return __awaiter(this, arguments, void 0, function* (commentId, optionalsInput = {}) {
            const optionals = new GetCommentByIdOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/comments/', (0, utils_js_2.toString)(commentId)),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, commentFull_generated_js_1.deserializeCommentFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Update the message of a comment.
       * @param {string} commentId The ID of the comment.
      Example: "12345"
       * @param {UpdateCommentByIdOptionalsInput} optionalsInput
       * @returns {Promise<CommentFull>}
       */
    updateCommentById(commentId_1) {
        return __awaiter(this, arguments, void 0, function* (commentId, optionalsInput = {}) {
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
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/comments/', (0, utils_js_2.toString)(commentId)),
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
            return Object.assign(Object.assign({}, (0, commentFull_generated_js_1.deserializeCommentFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Permanently deletes a comment.
       * @param {string} commentId The ID of the comment.
      Example: "12345"
       * @param {DeleteCommentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteCommentById(commentId_1) {
        return __awaiter(this, arguments, void 0, function* (commentId, optionalsInput = {}) {
            const optionals = new DeleteCommentByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/comments/', (0, utils_js_2.toString)(commentId)),
                method: 'DELETE',
                headers: headersMap,
                responseFormat: 'no_content',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
    }
    /**
     * Adds a comment by the user to a specific file, or
     * as a reply to an other comment.
     * @param {CreateCommentRequestBody} requestBody Request body of createComment method
     * @param {CreateCommentOptionalsInput} optionalsInput
     * @returns {Promise<CommentFull>}
     */
    createComment(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateCommentOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
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
            return Object.assign(Object.assign({}, (0, commentFull_generated_js_1.deserializeCommentFull)(response.data)), { rawData: response.data });
        });
    }
}
exports.CommentsManager = CommentsManager;
function serializeUpdateCommentByIdRequestBody(val) {
    return { ['message']: val.message };
}
function deserializeUpdateCommentByIdRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateCommentByIdRequestBody"',
        });
    }
    if (!(val.message == void 0) && !(0, json_js_1.sdIsString)(val.message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "message" of type "UpdateCommentByIdRequestBody"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    return { message: message };
}
function serializeCreateCommentRequestBodyItemTypeField(val) {
    return val;
}
function deserializeCreateCommentRequestBodyItemTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'comment') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateCommentRequestBodyItemTypeField",
    });
}
function serializeCreateCommentRequestBodyItemField(val) {
    return {
        ['id']: val.id,
        ['type']: serializeCreateCommentRequestBodyItemTypeField(val.type),
    };
}
function deserializeCreateCommentRequestBodyItemField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateCommentRequestBodyItemField"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CreateCommentRequestBodyItemField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateCommentRequestBodyItemField"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CreateCommentRequestBodyItemField" to be defined',
        });
    }
    const type = deserializeCreateCommentRequestBodyItemTypeField(val.type);
    return { id: id, type: type };
}
function serializeCreateCommentRequestBody(val) {
    return {
        ['message']: val.message,
        ['tagged_message']: val.taggedMessage,
        ['item']: serializeCreateCommentRequestBodyItemField(val.item),
    };
}
function deserializeCreateCommentRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateCommentRequestBody"',
        });
    }
    if (val.message == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "message" of type "CreateCommentRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "message" of type "CreateCommentRequestBody"',
        });
    }
    const message = val.message;
    if (!(val.tagged_message == void 0) && !(0, json_js_1.sdIsString)(val.tagged_message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "tagged_message" of type "CreateCommentRequestBody"',
        });
    }
    const taggedMessage = val.tagged_message == void 0 ? void 0 : val.tagged_message;
    if (val.item == void 0) {
        throw new errors_js_1.BoxSdkError({
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