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
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const utils_js_3 = require("../utils.js");
const utils_js_4 = require("../utils.js");
const client_generated_js_1 = require("../client.generated.js");
const jwtAuth_js_1 = require("../jwtAuth.js");
const jwtAuth_js_2 = require("../jwtAuth.js");
test("comments", function comments() {
    return __awaiter(this, void 0, void 0, function* () {
        const jwtConfig = jwtAuth_js_2.JwtConfig.fromConfigJsonString((0, utils_js_1.decodeBase64)((0, utils_js_3.getEnvVar)("JWT_CONFIG_BASE_64")));
        const auth = new jwtAuth_js_1.JwtAuth({ config: jwtConfig });
        const client = new client_generated_js_1.Client({ auth: auth });
        const fileSize = 256;
        const fileName = (0, utils_js_4.getUuid)();
        const fileByteStream = (0, utils_js_2.generateByteStream)(fileSize);
        const parentId = "0";
        const uploadedFiles = yield client.uploads.uploadFile({ attributes: { name: fileName, parent: { id: parentId } }, file: fileByteStream });
        const fileId = uploadedFiles.entries[0].id;
        const comments = yield client.comments.getFileComments(fileId);
        if (!(comments.totalCount == 0)) {
            throw "Assertion failed";
        }
        const message = "Hello there!";
        const newComment = yield client.comments.createComment({ message: message, item: { id: fileId, type: "file" } });
        if (!(newComment.message == message)) {
            throw "Assertion failed";
        }
        if (!(newComment.isReplyComment == false)) {
            throw "Assertion failed";
        }
        if (!(newComment.item.id == fileId)) {
            throw "Assertion failed";
        }
        const newReplyComment = yield client.comments.createComment({ message: message, item: { id: newComment.id, type: "comment" } });
        if (!(newReplyComment.message == message)) {
            throw "Assertion failed";
        }
        if (!(newReplyComment.isReplyComment == true)) {
            throw "Assertion failed";
        }
        const newMessage = "Hi!";
        yield client.comments.updateCommentById(newReplyComment.id, { message: newMessage });
        const newComments = yield client.comments.getFileComments(fileId);
        if (!(newComments.totalCount == 2)) {
            throw "Assertion failed";
        }
        if (!(newComments.entries[1].message == newMessage)) {
            throw "Assertion failed";
        }
        if (!!((yield client.comments.getCommentById(newComment.id)) == void 0)) {
            throw "Assertion failed";
        }
        yield client.comments.deleteCommentById(newComment.id);
        expect(() => __awaiter(this, void 0, void 0, function* () { yield client.comments.getCommentById(newComment.id); })).rejects.toThrow();
        yield client.files.deleteFileById(fileId);
    });
});
//# sourceMappingURL=comments.generated.test.js.map