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
exports.deserializeGetFileThumbnailByIdQueryParamsArg = exports.serializeGetFileThumbnailByIdQueryParamsArg = exports.deserializeGetFileThumbnailByIdExtensionArg = exports.serializeGetFileThumbnailByIdExtensionArg = exports.deserializeCopyFileQueryParamsArg = exports.serializeCopyFileQueryParamsArg = exports.deserializeCopyFileRequestBodyArg = exports.serializeCopyFileRequestBodyArg = exports.deserializeCopyFileRequestBodyArgParentField = exports.serializeCopyFileRequestBodyArgParentField = exports.deserializeDeleteFileByIdHeadersArg = exports.serializeDeleteFileByIdHeadersArg = exports.deserializeUpdateFileByIdHeadersArg = exports.serializeUpdateFileByIdHeadersArg = exports.deserializeUpdateFileByIdQueryParamsArg = exports.serializeUpdateFileByIdQueryParamsArg = exports.deserializeUpdateFileByIdRequestBodyArg = exports.serializeUpdateFileByIdRequestBodyArg = exports.deserializeUpdateFileByIdRequestBodyArgPermissionsField = exports.serializeUpdateFileByIdRequestBodyArgPermissionsField = exports.deserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField = exports.serializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField = exports.deserializeUpdateFileByIdRequestBodyArgLockField = exports.serializeUpdateFileByIdRequestBodyArgLockField = exports.deserializeUpdateFileByIdRequestBodyArgLockFieldAccessField = exports.serializeUpdateFileByIdRequestBodyArgLockFieldAccessField = exports.deserializeUpdateFileByIdRequestBodyArgSharedLinkField = exports.serializeUpdateFileByIdRequestBodyArgSharedLinkField = exports.deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField = exports.serializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField = exports.deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField = exports.serializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField = exports.deserializeUpdateFileByIdRequestBodyArgParentField = exports.serializeUpdateFileByIdRequestBodyArgParentField = exports.deserializeGetFileByIdHeadersArg = exports.serializeGetFileByIdHeadersArg = exports.deserializeGetFileByIdQueryParamsArg = exports.serializeGetFileByIdQueryParamsArg = exports.FilesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class FilesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileById(fileId, queryParams = {}, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), headers: (0, utils_js_1.toMap)(headers), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileById(fileId, requestBody, queryParams = {}, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), headers: (0, utils_js_1.toMap)(headers), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFileById(fileId, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId), { method: "DELETE", headers: (0, utils_js_1.toMap)(headers), auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    copyFile(fileId, requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/copy"), { method: "POST", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileThumbnailById(fileId, extension, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/thumbnail.", extension), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.FilesManager = FilesManager;
function serializeGetFileByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetFileByIdQueryParamsArg = serializeGetFileByIdQueryParamsArg;
function deserializeGetFileByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeGetFileByIdQueryParamsArg = deserializeGetFileByIdQueryParamsArg;
function serializeGetFileByIdHeadersArg(val) {
    return { ["ifNoneMatch"]: val.ifNoneMatch, ["boxapi"]: val.boxapi, ["xRepHints"]: val.xRepHints };
}
exports.serializeGetFileByIdHeadersArg = serializeGetFileByIdHeadersArg;
function deserializeGetFileByIdHeadersArg(val) {
    const ifNoneMatch = (0, json_js_2.isJson)(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    const boxapi = (0, json_js_2.isJson)(val.boxapi, "string") ? val.boxapi : void 0;
    const xRepHints = (0, json_js_2.isJson)(val.xRepHints, "string") ? val.xRepHints : void 0;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi, xRepHints: xRepHints };
}
exports.deserializeGetFileByIdHeadersArg = deserializeGetFileByIdHeadersArg;
function serializeUpdateFileByIdRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.serializeUpdateFileByIdRequestBodyArgParentField = serializeUpdateFileByIdRequestBodyArgParentField;
function deserializeUpdateFileByIdRequestBodyArgParentField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { id: id };
}
exports.deserializeUpdateFileByIdRequestBodyArgParentField = deserializeUpdateFileByIdRequestBodyArgParentField;
function serializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField = serializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField;
function deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
    return { ["canDownload"]: val.canDownload };
}
exports.serializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField = serializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField;
function deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_2.isJson)(val.canDownload, "boolean") ? val.canDownload : void 0;
    return { canDownload: canDownload };
}
exports.deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField = deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField;
function serializeUpdateFileByIdRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.serializeUpdateFileByIdRequestBodyArgSharedLinkField = serializeUpdateFileByIdRequestBodyArgSharedLinkField;
function deserializeUpdateFileByIdRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions = val.permissions == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.deserializeUpdateFileByIdRequestBodyArgSharedLinkField = deserializeUpdateFileByIdRequestBodyArgSharedLinkField;
function serializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val) {
    return val;
}
exports.serializeUpdateFileByIdRequestBodyArgLockFieldAccessField = serializeUpdateFileByIdRequestBodyArgLockFieldAccessField;
function deserializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateFileByIdRequestBodyArgLockFieldAccessField\"";
    }
    if (val == "lock") {
        return "lock";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateFileByIdRequestBodyArgLockFieldAccessField = deserializeUpdateFileByIdRequestBodyArgLockFieldAccessField;
function serializeUpdateFileByIdRequestBodyArgLockField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val.access), ["expiresAt"]: val.expiresAt, ["isDownloadPrevented"]: val.isDownloadPrevented };
}
exports.serializeUpdateFileByIdRequestBodyArgLockField = serializeUpdateFileByIdRequestBodyArgLockField;
function deserializeUpdateFileByIdRequestBodyArgLockField(val) {
    const access = val.access == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val.access);
    const expiresAt = (0, json_js_2.isJson)(val.expiresAt, "string") ? val.expiresAt : void 0;
    const isDownloadPrevented = (0, json_js_2.isJson)(val.isDownloadPrevented, "boolean") ? val.isDownloadPrevented : void 0;
    return { access: access, expiresAt: expiresAt, isDownloadPrevented: isDownloadPrevented };
}
exports.deserializeUpdateFileByIdRequestBodyArgLockField = deserializeUpdateFileByIdRequestBodyArgLockField;
function serializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val) {
    return val;
}
exports.serializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField = serializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField;
function deserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
    return { ["canDownload"]: val.canDownload == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val.canDownload) };
}
exports.serializeUpdateFileByIdRequestBodyArgPermissionsField = serializeUpdateFileByIdRequestBodyArgPermissionsField;
function deserializeUpdateFileByIdRequestBodyArgPermissionsField(val) {
    const canDownload = val.canDownload == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val.canDownload);
    return { canDownload: canDownload };
}
exports.deserializeUpdateFileByIdRequestBodyArgPermissionsField = deserializeUpdateFileByIdRequestBodyArgPermissionsField;
function serializeUpdateFileByIdRequestBodyArg(val) {
    return { ["name"]: val.name, ["description"]: val.description, ["parent"]: val.parent == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgParentField(val.parent), ["sharedLink"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgSharedLinkField(val.sharedLink), ["lock"]: val.lock == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgLockField(val.lock), ["dispositionAt"]: val.dispositionAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgPermissionsField(val.permissions), ["tags"]: val.tags == void 0 ? void 0 : val.tags.map(function (item) {
            return void 0;
        }) };
}
exports.serializeUpdateFileByIdRequestBodyArg = serializeUpdateFileByIdRequestBodyArg;
function deserializeUpdateFileByIdRequestBodyArg(val) {
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const description = (0, json_js_2.isJson)(val.description, "string") ? val.description : void 0;
    const parent = val.parent == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgParentField(val.parent);
    const sharedLink = val.sharedLink == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgSharedLinkField(val.sharedLink);
    const lock = val.lock == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgLockField(val.lock);
    const dispositionAt = (0, json_js_2.isJson)(val.dispositionAt, "string") ? val.dispositionAt : void 0;
    const permissions = val.permissions == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgPermissionsField(val.permissions);
    const tags = (0, json_js_2.isJson)(val.tags, "array") ? val.tags.map(function (itm) {
        return void 0;
    }) : void 0;
    return { name: name, description: description, parent: parent, sharedLink: sharedLink, lock: lock, dispositionAt: dispositionAt, permissions: permissions, tags: tags };
}
exports.deserializeUpdateFileByIdRequestBodyArg = deserializeUpdateFileByIdRequestBodyArg;
function serializeUpdateFileByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeUpdateFileByIdQueryParamsArg = serializeUpdateFileByIdQueryParamsArg;
function deserializeUpdateFileByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeUpdateFileByIdQueryParamsArg = deserializeUpdateFileByIdQueryParamsArg;
function serializeUpdateFileByIdHeadersArg(val) {
    return { ["ifMatch"]: val.ifMatch };
}
exports.serializeUpdateFileByIdHeadersArg = serializeUpdateFileByIdHeadersArg;
function deserializeUpdateFileByIdHeadersArg(val) {
    const ifMatch = (0, json_js_2.isJson)(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch };
}
exports.deserializeUpdateFileByIdHeadersArg = deserializeUpdateFileByIdHeadersArg;
function serializeDeleteFileByIdHeadersArg(val) {
    return { ["ifMatch"]: val.ifMatch };
}
exports.serializeDeleteFileByIdHeadersArg = serializeDeleteFileByIdHeadersArg;
function deserializeDeleteFileByIdHeadersArg(val) {
    const ifMatch = (0, json_js_2.isJson)(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch };
}
exports.deserializeDeleteFileByIdHeadersArg = deserializeDeleteFileByIdHeadersArg;
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
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const version = (0, json_js_2.isJson)(val.version, "string") ? val.version : void 0;
    const parent = deserializeCopyFileRequestBodyArgParentField(val.parent);
    return { name: name, version: version, parent: parent };
}
exports.deserializeCopyFileRequestBodyArg = deserializeCopyFileRequestBodyArg;
function serializeCopyFileQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeCopyFileQueryParamsArg = serializeCopyFileQueryParamsArg;
function deserializeCopyFileQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeCopyFileQueryParamsArg = deserializeCopyFileQueryParamsArg;
function serializeGetFileThumbnailByIdExtensionArg(val) {
    return val;
}
exports.serializeGetFileThumbnailByIdExtensionArg = serializeGetFileThumbnailByIdExtensionArg;
function deserializeGetFileThumbnailByIdExtensionArg(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
function serializeGetFileThumbnailByIdQueryParamsArg(val) {
    return { ["minHeight"]: val.minHeight, ["minWidth"]: val.minWidth, ["maxHeight"]: val.maxHeight, ["maxWidth"]: val.maxWidth };
}
exports.serializeGetFileThumbnailByIdQueryParamsArg = serializeGetFileThumbnailByIdQueryParamsArg;
function deserializeGetFileThumbnailByIdQueryParamsArg(val) {
    const minHeight = (0, json_js_2.isJson)(val.minHeight, "number") ? val.minHeight : void 0;
    const minWidth = (0, json_js_2.isJson)(val.minWidth, "number") ? val.minWidth : void 0;
    const maxHeight = (0, json_js_2.isJson)(val.maxHeight, "number") ? val.maxHeight : void 0;
    const maxWidth = (0, json_js_2.isJson)(val.maxWidth, "number") ? val.maxWidth : void 0;
    return { minHeight: minHeight, minWidth: minWidth, maxHeight: maxHeight, maxWidth: maxWidth };
}
exports.deserializeGetFileThumbnailByIdQueryParamsArg = deserializeGetFileThumbnailByIdQueryParamsArg;
//# sourceMappingURL=files.generated.js.map