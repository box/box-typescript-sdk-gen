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
exports.deserializeDeleteFolderMetadataByIdScopeArg = exports.serializeDeleteFolderMetadataByIdScopeArg = exports.deserializeCreateFolderMetadataByIdRequestBodyArg = exports.serializeCreateFolderMetadataByIdRequestBodyArg = exports.deserializeCreateFolderMetadataByIdScopeArg = exports.serializeCreateFolderMetadataByIdScopeArg = exports.deserializeGetFolderMetadataByIdScopeArg = exports.serializeGetFolderMetadataByIdScopeArg = exports.FolderMetadataManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class FolderMetadataManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFolderMetadata(folderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata"), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeMetadatas)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFolderMetadataById(folderId, scope, templateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/", scope, "/", templateKey), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeMetadata)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFolderMetadataById(folderId, scope, templateKey, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/", scope, "/", templateKey), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeMetadata)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFolderMetadataById(folderId, scope, templateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/", scope, "/", templateKey), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.FolderMetadataManager = FolderMetadataManager;
function serializeGetFolderMetadataByIdScopeArg(val) {
    return val;
}
exports.serializeGetFolderMetadataByIdScopeArg = serializeGetFolderMetadataByIdScopeArg;
function deserializeGetFolderMetadataByIdScopeArg(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"GetFolderMetadataByIdScopeArg\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetFolderMetadataByIdScopeArg = deserializeGetFolderMetadataByIdScopeArg;
function serializeCreateFolderMetadataByIdScopeArg(val) {
    return val;
}
exports.serializeCreateFolderMetadataByIdScopeArg = serializeCreateFolderMetadataByIdScopeArg;
function deserializeCreateFolderMetadataByIdScopeArg(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateFolderMetadataByIdScopeArg\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateFolderMetadataByIdScopeArg = deserializeCreateFolderMetadataByIdScopeArg;
function serializeCreateFolderMetadataByIdRequestBodyArg(val) {
    return {};
}
exports.serializeCreateFolderMetadataByIdRequestBodyArg = serializeCreateFolderMetadataByIdRequestBodyArg;
function deserializeCreateFolderMetadataByIdRequestBodyArg(val) {
    return {};
}
exports.deserializeCreateFolderMetadataByIdRequestBodyArg = deserializeCreateFolderMetadataByIdRequestBodyArg;
function serializeDeleteFolderMetadataByIdScopeArg(val) {
    return val;
}
exports.serializeDeleteFolderMetadataByIdScopeArg = serializeDeleteFolderMetadataByIdScopeArg;
function deserializeDeleteFolderMetadataByIdScopeArg(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"DeleteFolderMetadataByIdScopeArg\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeDeleteFolderMetadataByIdScopeArg = deserializeDeleteFolderMetadataByIdScopeArg;
//# sourceMappingURL=folderMetadata.generated.js.map