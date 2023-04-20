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
exports.CommentsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class CommentsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileComments(fileId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/comments"), { method: "GET", params: { ["fields"]: options.fields, ["limit"]: options.limit, ["offset"]: options.offset }, auth: this.auth });
            return (0, schemas_generated_js_1.deserializeComments)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getCommentById(commentId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/comments/", commentId), { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth });
            return (0, schemas_generated_js_2.deserializeCommentFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateCommentById(commentId, requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/comments/", commentId), { method: "PUT", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth });
            return (0, schemas_generated_js_2.deserializeCommentFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteCommentById(commentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/comments/", commentId), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
    createComment(requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/comments"), { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth });
            return (0, schemas_generated_js_3.deserializeComment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.CommentsManager = CommentsManager;
//# sourceMappingURL=comments.generated.js.map