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
exports.deserializeCreateCommentRequestBodyArg = exports.serializeCreateCommentRequestBodyArg = exports.deserializeCreateCommentRequestBodyArgItemField = exports.serializeCreateCommentRequestBodyArgItemField = exports.deserializeCreateCommentRequestBodyArgItemFieldTypeField = exports.serializeCreateCommentRequestBodyArgItemFieldTypeField = exports.deserializeUpdateCommentByIdRequestBodyArg = exports.serializeUpdateCommentByIdRequestBodyArg = exports.CommentsManager = exports.CreateCommentHeadersArg = exports.DeleteCommentByIdHeadersArg = exports.UpdateCommentByIdHeadersArg = exports.GetCommentByIdHeadersArg = exports.GetFileCommentsHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetFileCommentsHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFileCommentsHeadersArg = GetFileCommentsHeadersArg;
class GetCommentByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetCommentByIdHeadersArg = GetCommentByIdHeadersArg;
class UpdateCommentByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateCommentByIdHeadersArg = UpdateCommentByIdHeadersArg;
class DeleteCommentByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteCommentByIdHeadersArg = DeleteCommentByIdHeadersArg;
class CreateCommentHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateCommentHeadersArg = CreateCommentHeadersArg;
class CommentsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileComments(fileId, queryParams = {}, headers = new GetFileCommentsHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["offset"]: (0, utils_js_2.toString)(queryParams.offset) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/comments"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeComments)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getCommentById(commentId, queryParams = {}, headers = new GetCommentByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/comments/", commentId), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeCommentFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateCommentById(commentId, requestBody, queryParams = {}, headers = new UpdateCommentByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/comments/", commentId), { method: "PUT", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateCommentByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeCommentFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteCommentById(commentId, headers = new DeleteCommentByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/comments/", commentId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    createComment(requestBody, queryParams = {}, headers = new CreateCommentHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/comments"), { method: "POST", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateCommentRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeComment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.CommentsManager = CommentsManager;
function serializeUpdateCommentByIdRequestBodyArg(val) {
    return { ["message"]: val.message };
}
exports.serializeUpdateCommentByIdRequestBodyArg = serializeUpdateCommentByIdRequestBodyArg;
function deserializeUpdateCommentByIdRequestBodyArg(val) {
    const message = (0, json_js_3.isJson)(val.message, "string") ? val.message : void 0;
    return { message: message };
}
exports.deserializeUpdateCommentByIdRequestBodyArg = deserializeUpdateCommentByIdRequestBodyArg;
function serializeCreateCommentRequestBodyArgItemFieldTypeField(val) {
    return val;
}
exports.serializeCreateCommentRequestBodyArgItemFieldTypeField = serializeCreateCommentRequestBodyArgItemFieldTypeField;
function deserializeCreateCommentRequestBodyArgItemFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateCommentRequestBodyArgItemFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "comment") {
        return "comment";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateCommentRequestBodyArgItemFieldTypeField = deserializeCreateCommentRequestBodyArgItemFieldTypeField;
function serializeCreateCommentRequestBodyArgItemField(val) {
    return { ["id"]: val.id, ["type"]: serializeCreateCommentRequestBodyArgItemFieldTypeField(val.type) };
}
exports.serializeCreateCommentRequestBodyArgItemField = serializeCreateCommentRequestBodyArgItemField;
function deserializeCreateCommentRequestBodyArgItemField(val) {
    const id = val.id;
    const type = deserializeCreateCommentRequestBodyArgItemFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.deserializeCreateCommentRequestBodyArgItemField = deserializeCreateCommentRequestBodyArgItemField;
function serializeCreateCommentRequestBodyArg(val) {
    return { ["message"]: val.message, ["tagged_message"]: val.taggedMessage, ["item"]: serializeCreateCommentRequestBodyArgItemField(val.item) };
}
exports.serializeCreateCommentRequestBodyArg = serializeCreateCommentRequestBodyArg;
function deserializeCreateCommentRequestBodyArg(val) {
    const message = val.message;
    const taggedMessage = (0, json_js_3.isJson)(val.tagged_message, "string") ? val.tagged_message : void 0;
    const item = deserializeCreateCommentRequestBodyArgItemField(val.item);
    return { message: message, taggedMessage: taggedMessage, item: item };
}
exports.deserializeCreateCommentRequestBodyArg = deserializeCreateCommentRequestBodyArg;
//# sourceMappingURL=comments.generated.js.map