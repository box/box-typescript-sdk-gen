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
exports.deserializeCreateCommentQueryParamsArg = exports.serializeCreateCommentQueryParamsArg = exports.deserializeCreateCommentRequestBodyArg = exports.serializeCreateCommentRequestBodyArg = exports.deserializeCreateCommentRequestBodyArgItemField = exports.serializeCreateCommentRequestBodyArgItemField = exports.deserializeCreateCommentRequestBodyArgItemFieldTypeField = exports.serializeCreateCommentRequestBodyArgItemFieldTypeField = exports.deserializeUpdateCommentByIdQueryParamsArg = exports.serializeUpdateCommentByIdQueryParamsArg = exports.deserializeUpdateCommentByIdRequestBodyArg = exports.serializeUpdateCommentByIdRequestBodyArg = exports.deserializeGetCommentByIdQueryParamsArg = exports.serializeGetCommentByIdQueryParamsArg = exports.deserializeGetFileCommentsQueryParamsArg = exports.serializeGetFileCommentsQueryParamsArg = exports.CommentsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class CommentsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileComments(fileId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/comments"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeComments)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getCommentById(commentId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/comments/", commentId), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeCommentFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateCommentById(commentId, requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/comments/", commentId), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeCommentFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteCommentById(commentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/comments/", commentId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    createComment(requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/comments"), { method: "POST", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeComment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.CommentsManager = CommentsManager;
function serializeGetFileCommentsQueryParamsArg(val) {
    return { ["fields"]: val.fields, ["limit"]: val.limit, ["offset"]: val.offset };
}
exports.serializeGetFileCommentsQueryParamsArg = serializeGetFileCommentsQueryParamsArg;
function deserializeGetFileCommentsQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    return { fields: fields, limit: limit, offset: offset };
}
exports.deserializeGetFileCommentsQueryParamsArg = deserializeGetFileCommentsQueryParamsArg;
function serializeGetCommentByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetCommentByIdQueryParamsArg = serializeGetCommentByIdQueryParamsArg;
function deserializeGetCommentByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeGetCommentByIdQueryParamsArg = deserializeGetCommentByIdQueryParamsArg;
function serializeUpdateCommentByIdRequestBodyArg(val) {
    return { ["message"]: val.message };
}
exports.serializeUpdateCommentByIdRequestBodyArg = serializeUpdateCommentByIdRequestBodyArg;
function deserializeUpdateCommentByIdRequestBodyArg(val) {
    const message = (0, json_js_2.isJson)(val.message, "string") ? val.message : void 0;
    return { message: message };
}
exports.deserializeUpdateCommentByIdRequestBodyArg = deserializeUpdateCommentByIdRequestBodyArg;
function serializeUpdateCommentByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeUpdateCommentByIdQueryParamsArg = serializeUpdateCommentByIdQueryParamsArg;
function deserializeUpdateCommentByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeUpdateCommentByIdQueryParamsArg = deserializeUpdateCommentByIdQueryParamsArg;
function serializeCreateCommentRequestBodyArgItemFieldTypeField(val) {
    return val;
}
exports.serializeCreateCommentRequestBodyArgItemFieldTypeField = serializeCreateCommentRequestBodyArgItemFieldTypeField;
function deserializeCreateCommentRequestBodyArgItemFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
    return { ["message"]: val.message, ["taggedMessage"]: val.taggedMessage, ["item"]: val.item == void 0 ? void 0 : serializeCreateCommentRequestBodyArgItemField(val.item) };
}
exports.serializeCreateCommentRequestBodyArg = serializeCreateCommentRequestBodyArg;
function deserializeCreateCommentRequestBodyArg(val) {
    const message = val.message;
    const taggedMessage = (0, json_js_2.isJson)(val.taggedMessage, "string") ? val.taggedMessage : void 0;
    const item = val.item == void 0 ? void 0 : deserializeCreateCommentRequestBodyArgItemField(val.item);
    return { message: message, taggedMessage: taggedMessage, item: item };
}
exports.deserializeCreateCommentRequestBodyArg = deserializeCreateCommentRequestBodyArg;
function serializeCreateCommentQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeCreateCommentQueryParamsArg = serializeCreateCommentQueryParamsArg;
function deserializeCreateCommentQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeCreateCommentQueryParamsArg = deserializeCreateCommentQueryParamsArg;
//# sourceMappingURL=comments.generated.js.map