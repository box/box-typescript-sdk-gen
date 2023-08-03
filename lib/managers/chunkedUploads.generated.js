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
exports.deserializeCreateFileUploadSessionCommitRequestBodyArg = exports.serializeCreateFileUploadSessionCommitRequestBodyArg = exports.deserializeCreateFileUploadSessionForExistingFileRequestBodyArg = exports.serializeCreateFileUploadSessionForExistingFileRequestBodyArg = exports.deserializeCreateFileUploadSessionRequestBodyArg = exports.serializeCreateFileUploadSessionRequestBodyArg = exports.ChunkedUploadsManager = exports.CreateFileUploadSessionCommitHeadersArg = exports.GetFileUploadSessionPartsHeadersArg = exports.DeleteFileUploadSessionByIdHeadersArg = exports.UploadFilePartHeadersArg = exports.GetFileUploadSessionByIdHeadersArg = exports.CreateFileUploadSessionForExistingFileHeadersArg = exports.CreateFileUploadSessionHeadersArg = void 0;
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
class CreateFileUploadSessionHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateFileUploadSessionHeadersArg = CreateFileUploadSessionHeadersArg;
class CreateFileUploadSessionForExistingFileHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateFileUploadSessionForExistingFileHeadersArg = CreateFileUploadSessionForExistingFileHeadersArg;
class GetFileUploadSessionByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFileUploadSessionByIdHeadersArg = GetFileUploadSessionByIdHeadersArg;
class UploadFilePartHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UploadFilePartHeadersArg = UploadFilePartHeadersArg;
class DeleteFileUploadSessionByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteFileUploadSessionByIdHeadersArg = DeleteFileUploadSessionByIdHeadersArg;
class GetFileUploadSessionPartsHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFileUploadSessionPartsHeadersArg = GetFileUploadSessionPartsHeadersArg;
class CreateFileUploadSessionCommitHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateFileUploadSessionCommitHeadersArg = CreateFileUploadSessionCommitHeadersArg;
class ChunkedUploadsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createFileUploadSession(requestBody, headers = new CreateFileUploadSessionHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions"), { method: "POST", headers: headersMap, body: (0, json_js_1.serializeJson)(serializeCreateFileUploadSessionRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeUploadSession)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    createFileUploadSessionForExistingFile(fileId, requestBody, headers = new CreateFileUploadSessionForExistingFileHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/", fileId, "/upload_sessions"), { method: "POST", headers: headersMap, body: (0, json_js_1.serializeJson)(serializeCreateFileUploadSessionForExistingFileRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeUploadSession)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    getFileUploadSessionById(uploadSessionId, headers = new GetFileUploadSessionByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeUploadSession)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    uploadFilePart(uploadSessionId, requestBody, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ["digest"]: (0, utils_js_2.toString)(headers.digest), ["content-range"]: (0, utils_js_2.toString)(headers.contentRange) }, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId), { method: "PUT", headers: headersMap, body: requestBody, contentType: "application/octet-stream", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeUploadedPart)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    deleteFileUploadSessionById(uploadSessionId, headers = new DeleteFileUploadSessionByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    getFileUploadSessionParts(uploadSessionId, queryParams = {}, headers = new GetFileUploadSessionPartsHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["offset"]: (0, utils_js_2.toString)(queryParams.offset), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId, "/parts"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeUploadParts)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    createFileUploadSessionCommit(uploadSessionId, requestBody, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ["digest"]: (0, utils_js_2.toString)(headers.digest), ["if-match"]: (0, utils_js_2.toString)(headers.ifMatch), ["if-none-match"]: (0, utils_js_2.toString)(headers.ifNoneMatch) }, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId, "/commit"), { method: "POST", headers: headersMap, body: (0, json_js_1.serializeJson)(serializeCreateFileUploadSessionCommitRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
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
//# sourceMappingURL=chunkedUploads.generated.js.map