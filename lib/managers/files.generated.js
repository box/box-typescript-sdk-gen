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
exports.deserializeGetFileThumbnailByIdExtensionArg = exports.serializeGetFileThumbnailByIdExtensionArg = exports.deserializeCopyFileRequestBodyArg = exports.serializeCopyFileRequestBodyArg = exports.deserializeCopyFileRequestBodyArgParentField = exports.serializeCopyFileRequestBodyArgParentField = exports.deserializeUpdateFileByIdRequestBodyArg = exports.serializeUpdateFileByIdRequestBodyArg = exports.deserializeUpdateFileByIdRequestBodyArgCollectionsField = exports.serializeUpdateFileByIdRequestBodyArgCollectionsField = exports.deserializeUpdateFileByIdRequestBodyArgPermissionsField = exports.serializeUpdateFileByIdRequestBodyArgPermissionsField = exports.deserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField = exports.serializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField = exports.deserializeUpdateFileByIdRequestBodyArgLockField = exports.serializeUpdateFileByIdRequestBodyArgLockField = exports.deserializeUpdateFileByIdRequestBodyArgLockFieldAccessField = exports.serializeUpdateFileByIdRequestBodyArgLockFieldAccessField = exports.deserializeUpdateFileByIdRequestBodyArgSharedLinkField = exports.serializeUpdateFileByIdRequestBodyArgSharedLinkField = exports.deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField = exports.serializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField = exports.deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField = exports.serializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField = exports.deserializeUpdateFileByIdRequestBodyArgParentField = exports.serializeUpdateFileByIdRequestBodyArgParentField = exports.FilesManager = exports.GetFileThumbnailByIdHeadersArg = exports.CopyFileHeadersArg = exports.DeleteFileByIdHeadersArg = exports.UpdateFileByIdHeadersArg = exports.GetFileByIdHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetFileByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFileByIdHeadersArg = GetFileByIdHeadersArg;
class UpdateFileByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateFileByIdHeadersArg = UpdateFileByIdHeadersArg;
class DeleteFileByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteFileByIdHeadersArg = DeleteFileByIdHeadersArg;
class CopyFileHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CopyFileHeadersArg = CopyFileHeadersArg;
class GetFileThumbnailByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFileThumbnailByIdHeadersArg = GetFileThumbnailByIdHeadersArg;
class FilesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileById(fileId, queryParams = {}, headers = new GetFileByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ["if-none-match"]: (0, utils_js_2.toString)(headers.ifNoneMatch), ["boxapi"]: (0, utils_js_2.toString)(headers.boxapi), ["x-rep-hints"]: (0, utils_js_2.toString)(headers.xRepHints) }, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileById(fileId, requestBody, queryParams = {}, headers = new UpdateFileByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ["if-match"]: (0, utils_js_2.toString)(headers.ifMatch) }, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId), { method: "PUT", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateFileByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFileById(fileId, headers = new DeleteFileByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ["if-match"]: (0, utils_js_2.toString)(headers.ifMatch) }, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    copyFile(fileId, requestBody, queryParams = {}, headers = new CopyFileHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/copy"), { method: "POST", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCopyFileRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileThumbnailById(fileId, extension, queryParams = {}, headers = new GetFileThumbnailByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["min_height"]: (0, utils_js_2.toString)(queryParams.minHeight), ["min_width"]: (0, utils_js_2.toString)(queryParams.minWidth), ["max_height"]: (0, utils_js_2.toString)(queryParams.maxHeight), ["max_width"]: (0, utils_js_2.toString)(queryParams.maxWidth) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/thumbnail.", extension), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "binary", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.FilesManager = FilesManager;
function serializeUpdateFileByIdRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.serializeUpdateFileByIdRequestBodyArgParentField = serializeUpdateFileByIdRequestBodyArgParentField;
function deserializeUpdateFileByIdRequestBodyArgParentField(val) {
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    return { id: id };
}
exports.deserializeUpdateFileByIdRequestBodyArgParentField = deserializeUpdateFileByIdRequestBodyArgParentField;
function serializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField = serializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField;
function deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField = deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField;
function serializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val) {
    return { ["can_download"]: val.canDownload };
}
exports.serializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField = serializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField;
function deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_3.isJson)(val.can_download, "boolean") ? val.can_download : void 0;
    return { canDownload: canDownload };
}
exports.deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField = deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField;
function serializeUpdateFileByIdRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanity_name"]: val.vanityName, ["unshared_at"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.serializeUpdateFileByIdRequestBodyArgSharedLinkField = serializeUpdateFileByIdRequestBodyArgSharedLinkField;
function deserializeUpdateFileByIdRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_3.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_3.isJson)(val.vanity_name, "string") ? val.vanity_name : void 0;
    const unsharedAt = (0, json_js_3.isJson)(val.unshared_at, "string") ? val.unshared_at : void 0;
    const permissions = val.permissions == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.deserializeUpdateFileByIdRequestBodyArgSharedLinkField = deserializeUpdateFileByIdRequestBodyArgSharedLinkField;
function serializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val) {
    return val;
}
exports.serializeUpdateFileByIdRequestBodyArgLockFieldAccessField = serializeUpdateFileByIdRequestBodyArgLockFieldAccessField;
function deserializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateFileByIdRequestBodyArgLockFieldAccessField\"";
    }
    if (val == "lock") {
        return "lock";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateFileByIdRequestBodyArgLockFieldAccessField = deserializeUpdateFileByIdRequestBodyArgLockFieldAccessField;
function serializeUpdateFileByIdRequestBodyArgLockField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val.access), ["expires_at"]: val.expiresAt, ["is_download_prevented"]: val.isDownloadPrevented };
}
exports.serializeUpdateFileByIdRequestBodyArgLockField = serializeUpdateFileByIdRequestBodyArgLockField;
function deserializeUpdateFileByIdRequestBodyArgLockField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val.access);
    const expiresAt = (0, json_js_3.isJson)(val.expires_at, "string") ? val.expires_at : void 0;
    const isDownloadPrevented = (0, json_js_3.isJson)(val.is_download_prevented, "boolean") ? val.is_download_prevented : void 0;
    return { access: access, expiresAt: expiresAt, isDownloadPrevented: isDownloadPrevented };
}
exports.deserializeUpdateFileByIdRequestBodyArgLockField = deserializeUpdateFileByIdRequestBodyArgLockField;
function serializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val) {
    return val;
}
exports.serializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField = serializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField;
function deserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField = deserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField;
function serializeUpdateFileByIdRequestBodyArgPermissionsField(val) {
    return { ["can_download"]: val.canDownload == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val.canDownload) };
}
exports.serializeUpdateFileByIdRequestBodyArgPermissionsField = serializeUpdateFileByIdRequestBodyArgPermissionsField;
function deserializeUpdateFileByIdRequestBodyArgPermissionsField(val) {
    const canDownload = val.can_download == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val.can_download);
    return { canDownload: canDownload };
}
exports.deserializeUpdateFileByIdRequestBodyArgPermissionsField = deserializeUpdateFileByIdRequestBodyArgPermissionsField;
function serializeUpdateFileByIdRequestBodyArgCollectionsField(val) {
    return { ["id"]: val.id, ["type"]: val.type };
}
exports.serializeUpdateFileByIdRequestBodyArgCollectionsField = serializeUpdateFileByIdRequestBodyArgCollectionsField;
function deserializeUpdateFileByIdRequestBodyArgCollectionsField(val) {
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    const type = (0, json_js_3.isJson)(val.type, "string") ? val.type : void 0;
    return { id: id, type: type };
}
exports.deserializeUpdateFileByIdRequestBodyArgCollectionsField = deserializeUpdateFileByIdRequestBodyArgCollectionsField;
function serializeUpdateFileByIdRequestBodyArg(val) {
    return { ["name"]: val.name, ["description"]: val.description, ["parent"]: val.parent == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgParentField(val.parent), ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgSharedLinkField(val.sharedLink), ["lock"]: val.lock == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgLockField(val.lock), ["disposition_at"]: val.dispositionAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgPermissionsField(val.permissions), ["collections"]: val.collections == void 0 ? void 0 : val.collections.map(function (item) {
            return serializeUpdateFileByIdRequestBodyArgCollectionsField(item);
        }), ["tags"]: val.tags == void 0 ? void 0 : val.tags.map(function (item) {
            return void 0;
        }) };
}
exports.serializeUpdateFileByIdRequestBodyArg = serializeUpdateFileByIdRequestBodyArg;
function deserializeUpdateFileByIdRequestBodyArg(val) {
    const name = (0, json_js_3.isJson)(val.name, "string") ? val.name : void 0;
    const description = (0, json_js_3.isJson)(val.description, "string") ? val.description : void 0;
    const parent = val.parent == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgParentField(val.parent);
    const sharedLink = val.shared_link == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgSharedLinkField(val.shared_link);
    const lock = val.lock == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgLockField(val.lock);
    const dispositionAt = (0, json_js_3.isJson)(val.disposition_at, "string") ? val.disposition_at : void 0;
    const permissions = val.permissions == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgPermissionsField(val.permissions);
    const collections = (0, json_js_3.isJson)(val.collections, "array") ? val.collections.map(function (itm) {
        return deserializeUpdateFileByIdRequestBodyArgCollectionsField(itm);
    }) : void 0;
    const tags = (0, json_js_3.isJson)(val.tags, "array") ? val.tags.map(function (itm) {
        return void 0;
    }) : void 0;
    return { name: name, description: description, parent: parent, sharedLink: sharedLink, lock: lock, dispositionAt: dispositionAt, permissions: permissions, collections: collections, tags: tags };
}
exports.deserializeUpdateFileByIdRequestBodyArg = deserializeUpdateFileByIdRequestBodyArg;
function serializeCopyFileRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.serializeCopyFileRequestBodyArgParentField = serializeCopyFileRequestBodyArgParentField;
function deserializeCopyFileRequestBodyArgParentField(val) {
    const id = val.id;
    return { id: id };
}
exports.deserializeCopyFileRequestBodyArgParentField = deserializeCopyFileRequestBodyArgParentField;
function serializeCopyFileRequestBodyArg(val) {
    return { ["name"]: val.name, ["version"]: val.version, ["parent"]: serializeCopyFileRequestBodyArgParentField(val.parent) };
}
exports.serializeCopyFileRequestBodyArg = serializeCopyFileRequestBodyArg;
function deserializeCopyFileRequestBodyArg(val) {
    const name = (0, json_js_3.isJson)(val.name, "string") ? val.name : void 0;
    const version = (0, json_js_3.isJson)(val.version, "string") ? val.version : void 0;
    const parent = deserializeCopyFileRequestBodyArgParentField(val.parent);
    return { name: name, version: version, parent: parent };
}
exports.deserializeCopyFileRequestBodyArg = deserializeCopyFileRequestBodyArg;
function serializeGetFileThumbnailByIdExtensionArg(val) {
    return val;
}
exports.serializeGetFileThumbnailByIdExtensionArg = serializeGetFileThumbnailByIdExtensionArg;
function deserializeGetFileThumbnailByIdExtensionArg(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"GetFileThumbnailByIdExtensionArg\"";
    }
    if (val == "png") {
        return "png";
    }
    if (val == "jpg") {
        return "jpg";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetFileThumbnailByIdExtensionArg = deserializeGetFileThumbnailByIdExtensionArg;
//# sourceMappingURL=files.generated.js.map