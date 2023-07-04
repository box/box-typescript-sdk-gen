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
exports.newDeserializeCreateFileUploadSessionCommitHeadersArg = exports.newSerializeCreateFileUploadSessionCommitHeadersArg = exports.newDeserializeCreateFileUploadSessionCommitRequestBodyArg = exports.newSerializeCreateFileUploadSessionCommitRequestBodyArg = exports.newDeserializeGetFileUploadSessionPartsQueryParamsArg = exports.newSerializeGetFileUploadSessionPartsQueryParamsArg = exports.newDeserializeCreateFileUploadSessionForExistingFileRequestBodyArg = exports.newSerializeCreateFileUploadSessionForExistingFileRequestBodyArg = exports.newDeserializeCreateFileUploadSessionRequestBodyArg = exports.newSerializeCreateFileUploadSessionRequestBodyArg = exports.ChunkedUploadsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const schemas_generated_js_4 = require("../schemas.generated.js");
const schemas_generated_js_5 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class ChunkedUploadsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    createFileUploadSession(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeUploadSession)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFileUploadSessionForExistingFile(fileId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/", fileId, "/upload_sessions"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeUploadSession)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileUploadSessionById(uploadSessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeUploadSession)((0, json_js_1.deserializeJson)(response.text));
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
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId, "/parts"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeUploadParts)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFileUploadSessionCommit(uploadSessionId, requestBody, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId, "/commit"), { method: "POST", headers: (0, utils_js_1.toMap)(headers), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.newDeserializeFiles)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.ChunkedUploadsManager = ChunkedUploadsManager;
function newSerializeCreateFileUploadSessionRequestBodyArg(val) {
    return { ["folderId"]: val.folderId, ["fileSize"]: val.fileSize, ["fileName"]: val.fileName };
}
exports.newSerializeCreateFileUploadSessionRequestBodyArg = newSerializeCreateFileUploadSessionRequestBodyArg;
function newDeserializeCreateFileUploadSessionRequestBodyArg(val) {
    const folderId = val.folderId;
    const fileSize = val.fileSize;
    const fileName = val.fileName;
    return { folderId: folderId, fileSize: fileSize, fileName: fileName };
}
exports.newDeserializeCreateFileUploadSessionRequestBodyArg = newDeserializeCreateFileUploadSessionRequestBodyArg;
function newSerializeCreateFileUploadSessionForExistingFileRequestBodyArg(val) {
    return { ["fileSize"]: val.fileSize, ["fileName"]: val.fileName };
}
exports.newSerializeCreateFileUploadSessionForExistingFileRequestBodyArg = newSerializeCreateFileUploadSessionForExistingFileRequestBodyArg;
function newDeserializeCreateFileUploadSessionForExistingFileRequestBodyArg(val) {
    const fileSize = val.fileSize;
    const fileName = (0, json_js_2.isJson)(val.fileName, "string") ? val.fileName : void 0;
    return { fileSize: fileSize, fileName: fileName };
}
exports.newDeserializeCreateFileUploadSessionForExistingFileRequestBodyArg = newDeserializeCreateFileUploadSessionForExistingFileRequestBodyArg;
function newSerializeGetFileUploadSessionPartsQueryParamsArg(val) {
    return { ["offset"]: val.offset, ["limit"]: val.limit };
}
exports.newSerializeGetFileUploadSessionPartsQueryParamsArg = newSerializeGetFileUploadSessionPartsQueryParamsArg;
function newDeserializeGetFileUploadSessionPartsQueryParamsArg(val) {
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { offset: offset, limit: limit };
}
exports.newDeserializeGetFileUploadSessionPartsQueryParamsArg = newDeserializeGetFileUploadSessionPartsQueryParamsArg;
function newSerializeCreateFileUploadSessionCommitRequestBodyArg(val) {
    return { ["parts"]: val.parts.map(function (item) {
            return (0, schemas_generated_js_4.newSerializeUploadPart)(item);
        }) };
}
exports.newSerializeCreateFileUploadSessionCommitRequestBodyArg = newSerializeCreateFileUploadSessionCommitRequestBodyArg;
function newDeserializeCreateFileUploadSessionCommitRequestBodyArg(val) {
    const parts = val.parts.map(function (itm) {
        return (0, schemas_generated_js_5.newDeserializeUploadPart)(itm);
    });
    return { parts: parts };
}
exports.newDeserializeCreateFileUploadSessionCommitRequestBodyArg = newDeserializeCreateFileUploadSessionCommitRequestBodyArg;
function newSerializeCreateFileUploadSessionCommitHeadersArg(val) {
    return { ["digest"]: val.digest, ["ifMatch"]: val.ifMatch, ["ifNoneMatch"]: val.ifNoneMatch };
}
exports.newSerializeCreateFileUploadSessionCommitHeadersArg = newSerializeCreateFileUploadSessionCommitHeadersArg;
function newDeserializeCreateFileUploadSessionCommitHeadersArg(val) {
    const digest = val.digest;
    const ifMatch = (0, json_js_2.isJson)(val.ifMatch, "string") ? val.ifMatch : void 0;
    const ifNoneMatch = (0, json_js_2.isJson)(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    return { digest: digest, ifMatch: ifMatch, ifNoneMatch: ifNoneMatch };
}
exports.newDeserializeCreateFileUploadSessionCommitHeadersArg = newDeserializeCreateFileUploadSessionCommitHeadersArg;
//# sourceMappingURL=chunkedUploads.generated.js.map