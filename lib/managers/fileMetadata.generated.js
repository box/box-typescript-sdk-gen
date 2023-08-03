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
exports.deserializeDeleteFileMetadataByIdScopeArg = exports.serializeDeleteFileMetadataByIdScopeArg = exports.deserializeCreateFileMetadataByIdRequestBodyArg = exports.serializeCreateFileMetadataByIdRequestBodyArg = exports.deserializeCreateFileMetadataByIdScopeArg = exports.serializeCreateFileMetadataByIdScopeArg = exports.deserializeGetFileMetadataByIdScopeArg = exports.serializeGetFileMetadataByIdScopeArg = exports.FileMetadataManager = exports.DeleteFileMetadataByIdHeadersArg = exports.CreateFileMetadataByIdHeadersArg = exports.GetFileMetadataByIdHeadersArg = exports.GetFileMetadataHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetFileMetadataHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFileMetadataHeadersArg = GetFileMetadataHeadersArg;
class GetFileMetadataByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFileMetadataByIdHeadersArg = GetFileMetadataByIdHeadersArg;
class CreateFileMetadataByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateFileMetadataByIdHeadersArg = CreateFileMetadataByIdHeadersArg;
class DeleteFileMetadataByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteFileMetadataByIdHeadersArg = DeleteFileMetadataByIdHeadersArg;
class FileMetadataManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileMetadata(fileId, headers = new GetFileMetadataHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata"), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeMetadatas)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileMetadataById(fileId, scope, templateKey, headers = new GetFileMetadataByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/", scope, "/", templateKey), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeMetadata)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFileMetadataById(fileId, scope, templateKey, requestBody, headers = new CreateFileMetadataByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/", scope, "/", templateKey), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateFileMetadataByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeMetadata)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFileMetadataById(fileId, scope, templateKey, headers = new DeleteFileMetadataByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/", scope, "/", templateKey), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.FileMetadataManager = FileMetadataManager;
function serializeGetFileMetadataByIdScopeArg(val) {
    return val;
}
exports.serializeGetFileMetadataByIdScopeArg = serializeGetFileMetadataByIdScopeArg;
function deserializeGetFileMetadataByIdScopeArg(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"GetFileMetadataByIdScopeArg\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetFileMetadataByIdScopeArg = deserializeGetFileMetadataByIdScopeArg;
function serializeCreateFileMetadataByIdScopeArg(val) {
    return val;
}
exports.serializeCreateFileMetadataByIdScopeArg = serializeCreateFileMetadataByIdScopeArg;
function deserializeCreateFileMetadataByIdScopeArg(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateFileMetadataByIdScopeArg\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateFileMetadataByIdScopeArg = deserializeCreateFileMetadataByIdScopeArg;
function serializeCreateFileMetadataByIdRequestBodyArg(val) {
    return {};
}
exports.serializeCreateFileMetadataByIdRequestBodyArg = serializeCreateFileMetadataByIdRequestBodyArg;
function deserializeCreateFileMetadataByIdRequestBodyArg(val) {
    return {};
}
exports.deserializeCreateFileMetadataByIdRequestBodyArg = deserializeCreateFileMetadataByIdRequestBodyArg;
function serializeDeleteFileMetadataByIdScopeArg(val) {
    return val;
}
exports.serializeDeleteFileMetadataByIdScopeArg = serializeDeleteFileMetadataByIdScopeArg;
function deserializeDeleteFileMetadataByIdScopeArg(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"DeleteFileMetadataByIdScopeArg\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeDeleteFileMetadataByIdScopeArg = deserializeDeleteFileMetadataByIdScopeArg;
//# sourceMappingURL=fileMetadata.generated.js.map