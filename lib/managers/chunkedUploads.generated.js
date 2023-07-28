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
exports.deserializeCreateFileUploadSessionCommitHeadersArg = exports.serializeCreateFileUploadSessionCommitHeadersArg = exports.deserializeCreateFileUploadSessionCommitRequestBodyArg = exports.serializeCreateFileUploadSessionCommitRequestBodyArg = exports.deserializeGetFileUploadSessionPartsQueryParamsArg = exports.serializeGetFileUploadSessionPartsQueryParamsArg = exports.deserializeUploadFilePartHeadersArg = exports.serializeUploadFilePartHeadersArg = exports.deserializeCreateFileUploadSessionForExistingFileRequestBodyArg = exports.serializeCreateFileUploadSessionForExistingFileRequestBodyArg = exports.deserializeCreateFileUploadSessionRequestBodyArg = exports.serializeCreateFileUploadSessionRequestBodyArg = exports.ChunkedUploadsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const schemas_generated_js_4 = require("../schemas.generated.js");
const schemas_generated_js_5 = require("../schemas.generated.js");
const schemas_generated_js_6 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class ChunkedUploadsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createFileUploadSession(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions"), { method: "POST", body: (0, json_js_1.serializeJson)(serializeCreateFileUploadSessionRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeUploadSession)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    createFileUploadSessionForExistingFile(fileId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/", fileId, "/upload_sessions"), { method: "POST", body: (0, json_js_1.serializeJson)(serializeCreateFileUploadSessionForExistingFileRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeUploadSession)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    getFileUploadSessionById(uploadSessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeUploadSession)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    uploadFilePart(uploadSessionId, requestBody, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)({ ["digest"]: (0, utils_js_2.toString)(headers.digest), ["content-range"]: (0, utils_js_2.toString)(headers.contentRange) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId), { method: "PUT", headers: headersMap, body: requestBody, contentType: "application/octet-stream", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeUploadedPart)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    deleteFileUploadSessionById(uploadSessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    getFileUploadSessionParts(uploadSessionId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["offset"]: (0, utils_js_2.toString)(queryParams.offset), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId, "/parts"), { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeUploadParts)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    createFileUploadSessionCommit(uploadSessionId, requestBody, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)({ ["digest"]: (0, utils_js_2.toString)(headers.digest), ["if-match"]: (0, utils_js_2.toString)(headers.ifMatch), ["if-none-match"]: (0, utils_js_2.toString)(headers.ifNoneMatch) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId, "/commit"), { method: "POST", headers: headersMap, body: (0, json_js_1.serializeJson)(serializeCreateFileUploadSessionCommitRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_4.deserializeFiles)((0, json_js_2.deserializeJson)(response.text));
        });
    }
}
exports.ChunkedUploadsManager = ChunkedUploadsManager;
function serializeCreateFileUploadSessionRequestBodyArg(val) {
    return { ["folder_id"]: val.folderId, ["file_size"]: val.fileSize, ["file_name"]: val.fileName };
}
exports.serializeCreateFileUploadSessionRequestBodyArg = serializeCreateFileUploadSessionRequestBodyArg;
function deserializeCreateFileUploadSessionRequestBodyArg(val) {
    const folderId = val.folder_id;
    const fileSize = val.file_size;
    const fileName = val.file_name;
    return { folderId: folderId, fileSize: fileSize, fileName: fileName };
}
exports.deserializeCreateFileUploadSessionRequestBodyArg = deserializeCreateFileUploadSessionRequestBodyArg;
function serializeCreateFileUploadSessionForExistingFileRequestBodyArg(val) {
    return { ["file_size"]: val.fileSize, ["file_name"]: val.fileName };
}
exports.serializeCreateFileUploadSessionForExistingFileRequestBodyArg = serializeCreateFileUploadSessionForExistingFileRequestBodyArg;
function deserializeCreateFileUploadSessionForExistingFileRequestBodyArg(val) {
    const fileSize = val.file_size;
    const fileName = (0, json_js_3.isJson)(val.file_name, "string") ? val.file_name : void 0;
    return { fileSize: fileSize, fileName: fileName };
}
exports.deserializeCreateFileUploadSessionForExistingFileRequestBodyArg = deserializeCreateFileUploadSessionForExistingFileRequestBodyArg;
function serializeUploadFilePartHeadersArg(val) {
    return { ["digest"]: val.digest, ["content-range"]: val.contentRange };
}
exports.serializeUploadFilePartHeadersArg = serializeUploadFilePartHeadersArg;
function deserializeUploadFilePartHeadersArg(val) {
    const digest = val.digest;
    const contentRange = val["content-range"];
    return { digest: digest, contentRange: contentRange };
}
exports.deserializeUploadFilePartHeadersArg = deserializeUploadFilePartHeadersArg;
function serializeGetFileUploadSessionPartsQueryParamsArg(val) {
    return { ["offset"]: val.offset, ["limit"]: val.limit };
}
exports.serializeGetFileUploadSessionPartsQueryParamsArg = serializeGetFileUploadSessionPartsQueryParamsArg;
function deserializeGetFileUploadSessionPartsQueryParamsArg(val) {
    const offset = (0, json_js_3.isJson)(val.offset, "number") ? val.offset : void 0;
    const limit = (0, json_js_3.isJson)(val.limit, "number") ? val.limit : void 0;
    return { offset: offset, limit: limit };
}
exports.deserializeGetFileUploadSessionPartsQueryParamsArg = deserializeGetFileUploadSessionPartsQueryParamsArg;
function serializeCreateFileUploadSessionCommitRequestBodyArg(val) {
    return { ["parts"]: val.parts.map(function (item) {
            return (0, schemas_generated_js_5.serializeUploadPart)(item);
        }) };
}
exports.serializeCreateFileUploadSessionCommitRequestBodyArg = serializeCreateFileUploadSessionCommitRequestBodyArg;
function deserializeCreateFileUploadSessionCommitRequestBodyArg(val) {
    const parts = val.parts.map(function (itm) {
        return (0, schemas_generated_js_6.deserializeUploadPart)(itm);
    });
    return { parts: parts };
}
exports.deserializeCreateFileUploadSessionCommitRequestBodyArg = deserializeCreateFileUploadSessionCommitRequestBodyArg;
function serializeCreateFileUploadSessionCommitHeadersArg(val) {
    return { ["digest"]: val.digest, ["if-match"]: val.ifMatch, ["if-none-match"]: val.ifNoneMatch };
}
exports.serializeCreateFileUploadSessionCommitHeadersArg = serializeCreateFileUploadSessionCommitHeadersArg;
function deserializeCreateFileUploadSessionCommitHeadersArg(val) {
    const digest = val.digest;
    const ifMatch = (0, json_js_3.isJson)(val["if-match"], "string") ? val["if-match"] : void 0;
    const ifNoneMatch = (0, json_js_3.isJson)(val["if-none-match"], "string") ? val["if-none-match"] : void 0;
    return { digest: digest, ifMatch: ifMatch, ifNoneMatch: ifNoneMatch };
}
exports.deserializeCreateFileUploadSessionCommitHeadersArg = deserializeCreateFileUploadSessionCommitHeadersArg;
//# sourceMappingURL=chunkedUploads.generated.js.map