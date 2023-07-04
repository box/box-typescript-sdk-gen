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
exports.newDeserializeDeleteFileMetadataByIdScopeArg = exports.newSerializeDeleteFileMetadataByIdScopeArg = exports.newDeserializeCreateFileMetadataByIdRequestBodyArg = exports.newSerializeCreateFileMetadataByIdRequestBodyArg = exports.newDeserializeCreateFileMetadataByIdScopeArg = exports.newSerializeCreateFileMetadataByIdScopeArg = exports.newDeserializeGetFileMetadataByIdScopeArg = exports.newSerializeGetFileMetadataByIdScopeArg = exports.FileMetadataManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class FileMetadataManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileMetadata(fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata"), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeMetadatas)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileMetadataById(fileId, scope, templateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/", scope, "/", templateKey), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeMetadata)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFileMetadataById(fileId, scope, templateKey, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/", scope, "/", templateKey), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeMetadata)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFileMetadataById(fileId, scope, templateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/", scope, "/", templateKey), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.FileMetadataManager = FileMetadataManager;
function newSerializeGetFileMetadataByIdScopeArg(val) {
    return val;
}
exports.newSerializeGetFileMetadataByIdScopeArg = newSerializeGetFileMetadataByIdScopeArg;
function newDeserializeGetFileMetadataByIdScopeArg(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeGetFileMetadataByIdScopeArg = newDeserializeGetFileMetadataByIdScopeArg;
function newSerializeCreateFileMetadataByIdScopeArg(val) {
    return val;
}
exports.newSerializeCreateFileMetadataByIdScopeArg = newSerializeCreateFileMetadataByIdScopeArg;
function newDeserializeCreateFileMetadataByIdScopeArg(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeCreateFileMetadataByIdScopeArg = newDeserializeCreateFileMetadataByIdScopeArg;
function newSerializeCreateFileMetadataByIdRequestBodyArg(val) {
    return {};
}
exports.newSerializeCreateFileMetadataByIdRequestBodyArg = newSerializeCreateFileMetadataByIdRequestBodyArg;
function newDeserializeCreateFileMetadataByIdRequestBodyArg(val) {
    return {};
}
exports.newDeserializeCreateFileMetadataByIdRequestBodyArg = newDeserializeCreateFileMetadataByIdRequestBodyArg;
function newSerializeDeleteFileMetadataByIdScopeArg(val) {
    return val;
}
exports.newSerializeDeleteFileMetadataByIdScopeArg = newSerializeDeleteFileMetadataByIdScopeArg;
function newDeserializeDeleteFileMetadataByIdScopeArg(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeDeleteFileMetadataByIdScopeArg = newDeserializeDeleteFileMetadataByIdScopeArg;
//# sourceMappingURL=fileMetadata.generated.js.map