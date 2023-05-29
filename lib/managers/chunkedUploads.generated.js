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
exports.ChunkedUploadsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class ChunkedUploadsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createFileUploadSession(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeUploadSession)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFileUploadSessionForExistingFile(fileId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/", fileId, "/upload_sessions"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeUploadSession)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileUploadSessionById(uploadSessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeUploadSession)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFileUploadSessionById(uploadSessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    getFileUploadSessionParts(uploadSessionId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId, "/parts"), { method: "GET", params: { ["offset"]: options.offset, ["limit"]: options.limit }, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeUploadParts)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFileUploadSessionCommit(uploadSessionId, digest, requestBody, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId, "/commit"), { method: "POST", headers: { ["digest"]: digest, ["if-match"]: options.ifMatch, ["if-none-match"]: options.ifNoneMatch }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeFiles)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.ChunkedUploadsManager = ChunkedUploadsManager;
//# sourceMappingURL=chunkedUploads.generated.js.map