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
exports.newDeserializeGetFileThumbnailByIdQueryParamsArg = exports.newSerializeGetFileThumbnailByIdQueryParamsArg = exports.newDeserializeGetFileThumbnailByIdExtensionArg = exports.newSerializeGetFileThumbnailByIdExtensionArg = exports.newDeserializeCopyFileQueryParamsArg = exports.newSerializeCopyFileQueryParamsArg = exports.newDeserializeCopyFileRequestBodyArg = exports.newSerializeCopyFileRequestBodyArg = exports.newDeserializeCopyFileRequestBodyArgParentField = exports.newSerializeCopyFileRequestBodyArgParentField = exports.newDeserializeDeleteFileByIdHeadersArg = exports.newSerializeDeleteFileByIdHeadersArg = exports.newDeserializeUpdateFileByIdHeadersArg = exports.newSerializeUpdateFileByIdHeadersArg = exports.newDeserializeUpdateFileByIdQueryParamsArg = exports.newSerializeUpdateFileByIdQueryParamsArg = exports.newDeserializeUpdateFileByIdRequestBodyArg = exports.newSerializeUpdateFileByIdRequestBodyArg = exports.newDeserializeUpdateFileByIdRequestBodyArgPermissionsField = exports.newSerializeUpdateFileByIdRequestBodyArgPermissionsField = exports.newDeserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField = exports.newSerializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField = exports.newDeserializeUpdateFileByIdRequestBodyArgLockField = exports.newSerializeUpdateFileByIdRequestBodyArgLockField = exports.newDeserializeUpdateFileByIdRequestBodyArgLockFieldAccessField = exports.newSerializeUpdateFileByIdRequestBodyArgLockFieldAccessField = exports.newDeserializeUpdateFileByIdRequestBodyArgSharedLinkField = exports.newSerializeUpdateFileByIdRequestBodyArgSharedLinkField = exports.newDeserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField = exports.newSerializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField = exports.newDeserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField = exports.newSerializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField = exports.newDeserializeUpdateFileByIdRequestBodyArgParentField = exports.newSerializeUpdateFileByIdRequestBodyArgParentField = exports.newDeserializeGetFileByIdHeadersArg = exports.newSerializeGetFileByIdHeadersArg = exports.newDeserializeGetFileByIdQueryParamsArg = exports.newSerializeGetFileByIdQueryParamsArg = exports.FilesManager = void 0;
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
            return (0, schemas_generated_js_1.newDeserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileById(fileId, requestBody, queryParams = {}, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), headers: (0, utils_js_1.toMap)(headers), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
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
            return (0, schemas_generated_js_1.newDeserializeFileFull)((0, json_js_1.deserializeJson)(response.text));
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
function newSerializeGetFileByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetFileByIdQueryParamsArg = newSerializeGetFileByIdQueryParamsArg;
function newDeserializeGetFileByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetFileByIdQueryParamsArg = newDeserializeGetFileByIdQueryParamsArg;
function newSerializeGetFileByIdHeadersArg(val) {
    return { ["ifNoneMatch"]: val.ifNoneMatch, ["boxapi"]: val.boxapi, ["xRepHints"]: val.xRepHints };
}
exports.newSerializeGetFileByIdHeadersArg = newSerializeGetFileByIdHeadersArg;
function newDeserializeGetFileByIdHeadersArg(val) {
    const ifNoneMatch = (0, json_js_2.isJson)(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    const boxapi = (0, json_js_2.isJson)(val.boxapi, "string") ? val.boxapi : void 0;
    const xRepHints = (0, json_js_2.isJson)(val.xRepHints, "string") ? val.xRepHints : void 0;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi, xRepHints: xRepHints };
}
exports.newDeserializeGetFileByIdHeadersArg = newDeserializeGetFileByIdHeadersArg;
function newSerializeUpdateFileByIdRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.newSerializeUpdateFileByIdRequestBodyArgParentField = newSerializeUpdateFileByIdRequestBodyArgParentField;
function newDeserializeUpdateFileByIdRequestBodyArgParentField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { id: id };
}
exports.newDeserializeUpdateFileByIdRequestBodyArgParentField = newDeserializeUpdateFileByIdRequestBodyArgParentField;
function newSerializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val) {
    return val;
}
exports.newSerializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField = newSerializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField;
function newDeserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val) {
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
exports.newDeserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField = newDeserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField;
function newSerializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val) {
    return { ["canDownload"]: val.canDownload };
}
exports.newSerializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField = newSerializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField;
function newDeserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val) {
    const canDownload = (0, json_js_2.isJson)(val.canDownload, "boolean") ? val.canDownload : void 0;
    return { canDownload: canDownload };
}
exports.newDeserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField = newDeserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField;
function newSerializeUpdateFileByIdRequestBodyArgSharedLinkField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
exports.newSerializeUpdateFileByIdRequestBodyArgSharedLinkField = newSerializeUpdateFileByIdRequestBodyArgSharedLinkField;
function newDeserializeUpdateFileByIdRequestBodyArgSharedLinkField(val) {
    const access = val.access == void 0 ? void 0 : newDeserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password = (0, json_js_2.isJson)(val.password, "string") ? val.password : void 0;
    const vanityName = (0, json_js_2.isJson)(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt = (0, json_js_2.isJson)(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions = val.permissions == void 0 ? void 0 : newDeserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions };
}
exports.newDeserializeUpdateFileByIdRequestBodyArgSharedLinkField = newDeserializeUpdateFileByIdRequestBodyArgSharedLinkField;
function newSerializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val) {
    return val;
}
exports.newSerializeUpdateFileByIdRequestBodyArgLockFieldAccessField = newSerializeUpdateFileByIdRequestBodyArgLockFieldAccessField;
function newDeserializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateFileByIdRequestBodyArgLockFieldAccessField\"";
    }
    if (val == "lock") {
        return "lock";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeUpdateFileByIdRequestBodyArgLockFieldAccessField = newDeserializeUpdateFileByIdRequestBodyArgLockFieldAccessField;
function newSerializeUpdateFileByIdRequestBodyArgLockField(val) {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val.access), ["expiresAt"]: val.expiresAt, ["isDownloadPrevented"]: val.isDownloadPrevented };
}
exports.newSerializeUpdateFileByIdRequestBodyArgLockField = newSerializeUpdateFileByIdRequestBodyArgLockField;
function newDeserializeUpdateFileByIdRequestBodyArgLockField(val) {
    const access = val.access == void 0 ? void 0 : newDeserializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val.access);
    const expiresAt = (0, json_js_2.isJson)(val.expiresAt, "string") ? val.expiresAt : void 0;
    const isDownloadPrevented = (0, json_js_2.isJson)(val.isDownloadPrevented, "boolean") ? val.isDownloadPrevented : void 0;
    return { access: access, expiresAt: expiresAt, isDownloadPrevented: isDownloadPrevented };
}
exports.newDeserializeUpdateFileByIdRequestBodyArgLockField = newDeserializeUpdateFileByIdRequestBodyArgLockField;
function newSerializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val) {
    return val;
}
exports.newSerializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField = newSerializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField;
function newDeserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val) {
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
exports.newDeserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField = newDeserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField;
function newSerializeUpdateFileByIdRequestBodyArgPermissionsField(val) {
    return { ["canDownload"]: val.canDownload == void 0 ? void 0 : newSerializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val.canDownload) };
}
exports.newSerializeUpdateFileByIdRequestBodyArgPermissionsField = newSerializeUpdateFileByIdRequestBodyArgPermissionsField;
function newDeserializeUpdateFileByIdRequestBodyArgPermissionsField(val) {
    const canDownload = val.canDownload == void 0 ? void 0 : newDeserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val.canDownload);
    return { canDownload: canDownload };
}
exports.newDeserializeUpdateFileByIdRequestBodyArgPermissionsField = newDeserializeUpdateFileByIdRequestBodyArgPermissionsField;
function newSerializeUpdateFileByIdRequestBodyArg(val) {
    return { ["name"]: val.name, ["description"]: val.description, ["parent"]: val.parent == void 0 ? void 0 : newSerializeUpdateFileByIdRequestBodyArgParentField(val.parent), ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateFileByIdRequestBodyArgSharedLinkField(val.sharedLink), ["lock"]: val.lock == void 0 ? void 0 : newSerializeUpdateFileByIdRequestBodyArgLockField(val.lock), ["dispositionAt"]: val.dispositionAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateFileByIdRequestBodyArgPermissionsField(val.permissions), ["tags"]: val.tags == void 0 ? void 0 : val.tags.map(function (item) {
            return void 0;
        }) };
}
exports.newSerializeUpdateFileByIdRequestBodyArg = newSerializeUpdateFileByIdRequestBodyArg;
function newDeserializeUpdateFileByIdRequestBodyArg(val) {
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const description = (0, json_js_2.isJson)(val.description, "string") ? val.description : void 0;
    const parent = val.parent == void 0 ? void 0 : newDeserializeUpdateFileByIdRequestBodyArgParentField(val.parent);
    const sharedLink = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateFileByIdRequestBodyArgSharedLinkField(val.sharedLink);
    const lock = val.lock == void 0 ? void 0 : newDeserializeUpdateFileByIdRequestBodyArgLockField(val.lock);
    const dispositionAt = (0, json_js_2.isJson)(val.dispositionAt, "string") ? val.dispositionAt : void 0;
    const permissions = val.permissions == void 0 ? void 0 : newDeserializeUpdateFileByIdRequestBodyArgPermissionsField(val.permissions);
    const tags = (0, json_js_2.isJson)(val.tags, "array") ? val.tags.map(function (itm) {
        return void 0;
    }) : void 0;
    return { name: name, description: description, parent: parent, sharedLink: sharedLink, lock: lock, dispositionAt: dispositionAt, permissions: permissions, tags: tags };
}
exports.newDeserializeUpdateFileByIdRequestBodyArg = newDeserializeUpdateFileByIdRequestBodyArg;
function newSerializeUpdateFileByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeUpdateFileByIdQueryParamsArg = newSerializeUpdateFileByIdQueryParamsArg;
function newDeserializeUpdateFileByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeUpdateFileByIdQueryParamsArg = newDeserializeUpdateFileByIdQueryParamsArg;
function newSerializeUpdateFileByIdHeadersArg(val) {
    return { ["ifMatch"]: val.ifMatch };
}
exports.newSerializeUpdateFileByIdHeadersArg = newSerializeUpdateFileByIdHeadersArg;
function newDeserializeUpdateFileByIdHeadersArg(val) {
    const ifMatch = (0, json_js_2.isJson)(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch };
}
exports.newDeserializeUpdateFileByIdHeadersArg = newDeserializeUpdateFileByIdHeadersArg;
function newSerializeDeleteFileByIdHeadersArg(val) {
    return { ["ifMatch"]: val.ifMatch };
}
exports.newSerializeDeleteFileByIdHeadersArg = newSerializeDeleteFileByIdHeadersArg;
function newDeserializeDeleteFileByIdHeadersArg(val) {
    const ifMatch = (0, json_js_2.isJson)(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch };
}
exports.newDeserializeDeleteFileByIdHeadersArg = newDeserializeDeleteFileByIdHeadersArg;
function newSerializeCopyFileRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.newSerializeCopyFileRequestBodyArgParentField = newSerializeCopyFileRequestBodyArgParentField;
function newDeserializeCopyFileRequestBodyArgParentField(val) {
    const id = val.id;
    return { id: id };
}
exports.newDeserializeCopyFileRequestBodyArgParentField = newDeserializeCopyFileRequestBodyArgParentField;
function newSerializeCopyFileRequestBodyArg(val) {
    return { ["name"]: val.name, ["version"]: val.version, ["parent"]: newSerializeCopyFileRequestBodyArgParentField(val.parent) };
}
exports.newSerializeCopyFileRequestBodyArg = newSerializeCopyFileRequestBodyArg;
function newDeserializeCopyFileRequestBodyArg(val) {
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const version = (0, json_js_2.isJson)(val.version, "string") ? val.version : void 0;
    const parent = newDeserializeCopyFileRequestBodyArgParentField(val.parent);
    return { name: name, version: version, parent: parent };
}
exports.newDeserializeCopyFileRequestBodyArg = newDeserializeCopyFileRequestBodyArg;
function newSerializeCopyFileQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeCopyFileQueryParamsArg = newSerializeCopyFileQueryParamsArg;
function newDeserializeCopyFileQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeCopyFileQueryParamsArg = newDeserializeCopyFileQueryParamsArg;
function newSerializeGetFileThumbnailByIdExtensionArg(val) {
    return val;
}
exports.newSerializeGetFileThumbnailByIdExtensionArg = newSerializeGetFileThumbnailByIdExtensionArg;
function newDeserializeGetFileThumbnailByIdExtensionArg(val) {
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
exports.newDeserializeGetFileThumbnailByIdExtensionArg = newDeserializeGetFileThumbnailByIdExtensionArg;
function newSerializeGetFileThumbnailByIdQueryParamsArg(val) {
    return { ["minHeight"]: val.minHeight, ["minWidth"]: val.minWidth, ["maxHeight"]: val.maxHeight, ["maxWidth"]: val.maxWidth };
}
exports.newSerializeGetFileThumbnailByIdQueryParamsArg = newSerializeGetFileThumbnailByIdQueryParamsArg;
function newDeserializeGetFileThumbnailByIdQueryParamsArg(val) {
    const minHeight = (0, json_js_2.isJson)(val.minHeight, "number") ? val.minHeight : void 0;
    const minWidth = (0, json_js_2.isJson)(val.minWidth, "number") ? val.minWidth : void 0;
    const maxHeight = (0, json_js_2.isJson)(val.maxHeight, "number") ? val.maxHeight : void 0;
    const maxWidth = (0, json_js_2.isJson)(val.maxWidth, "number") ? val.maxWidth : void 0;
    return { minHeight: minHeight, minWidth: minWidth, maxHeight: maxHeight, maxWidth: maxWidth };
}
exports.newDeserializeGetFileThumbnailByIdQueryParamsArg = newDeserializeGetFileThumbnailByIdQueryParamsArg;
//# sourceMappingURL=files.generated.js.map