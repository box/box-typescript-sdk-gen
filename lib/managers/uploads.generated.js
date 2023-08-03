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
exports.deserializePreflightFileUploadRequestBodyArg = exports.serializePreflightFileUploadRequestBodyArg = exports.deserializePreflightFileUploadRequestBodyArgParentField = exports.serializePreflightFileUploadRequestBodyArgParentField = exports.deserializeUploadFileRequestBodyArgAttributesField = exports.serializeUploadFileRequestBodyArgAttributesField = exports.deserializeUploadFileRequestBodyArgAttributesFieldParentField = exports.serializeUploadFileRequestBodyArgAttributesFieldParentField = exports.deserializeUploadFileVersionRequestBodyArgAttributesField = exports.serializeUploadFileVersionRequestBodyArgAttributesField = exports.UploadsManager = exports.PreflightFileUploadHeadersArg = exports.UploadFileHeadersArg = exports.UploadFileVersionHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class UploadFileVersionHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UploadFileVersionHeadersArg = UploadFileVersionHeadersArg;
class UploadFileHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UploadFileHeadersArg = UploadFileHeadersArg;
class PreflightFileUploadHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.PreflightFileUploadHeadersArg = PreflightFileUploadHeadersArg;
class UploadsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    uploadFileVersion(fileId, requestBody, queryParams = {}, headers = new UploadFileVersionHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ["if-match"]: (0, utils_js_2.toString)(headers.ifMatch), ["content-md5"]: (0, utils_js_2.toString)(headers.contentMd5) }, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/", fileId, "/content"), { method: "POST", params: queryParamsMap, headers: headersMap, multipartData: [{ partName: "attributes", body: (0, json_js_1.serializeJson)(serializeUploadFileVersionRequestBodyArgAttributesField(requestBody.attributes)) }, { partName: "file", fileStream: requestBody.file, contentType: requestBody.fileContentType, fileName: requestBody.fileFileName }], contentType: "multipart/form-data", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFiles)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    uploadFile(requestBody, queryParams = {}, headers = new UploadFileHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ["content-md5"]: (0, utils_js_2.toString)(headers.contentMd5) }, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/content"), { method: "POST", params: queryParamsMap, headers: headersMap, multipartData: [{ partName: "attributes", body: (0, json_js_1.serializeJson)(serializeUploadFileRequestBodyArgAttributesField(requestBody.attributes)) }, { partName: "file", fileStream: requestBody.file, contentType: requestBody.fileContentType, fileName: requestBody.fileFileName }], contentType: "multipart/form-data", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFiles)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    preflightFileUpload(requestBody, headers = new PreflightFileUploadHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/content"), { method: "OPTIONS", headers: headersMap, body: (0, json_js_1.serializeJson)(serializePreflightFileUploadRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeUploadUrl)((0, json_js_2.deserializeJson)(response.text));
        });
    }
}
exports.UploadsManager = UploadsManager;
function serializeUploadFileVersionRequestBodyArgAttributesField(val) {
    return { ["name"]: val.name, ["content_modified_at"]: val.contentModifiedAt };
}
exports.serializeUploadFileVersionRequestBodyArgAttributesField = serializeUploadFileVersionRequestBodyArgAttributesField;
function deserializeUploadFileVersionRequestBodyArgAttributesField(val) {
    const name = val.name;
    const contentModifiedAt = (0, json_js_3.isJson)(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    return { name: name, contentModifiedAt: contentModifiedAt };
}
exports.deserializeUploadFileVersionRequestBodyArgAttributesField = deserializeUploadFileVersionRequestBodyArgAttributesField;
function serializeUploadFileRequestBodyArgAttributesFieldParentField(val) {
    return { ["id"]: val.id };
}
exports.serializeUploadFileRequestBodyArgAttributesFieldParentField = serializeUploadFileRequestBodyArgAttributesFieldParentField;
function deserializeUploadFileRequestBodyArgAttributesFieldParentField(val) {
    const id = val.id;
    return { id: id };
}
exports.deserializeUploadFileRequestBodyArgAttributesFieldParentField = deserializeUploadFileRequestBodyArgAttributesFieldParentField;
function serializeUploadFileRequestBodyArgAttributesField(val) {
    return { ["name"]: val.name, ["parent"]: serializeUploadFileRequestBodyArgAttributesFieldParentField(val.parent), ["content_created_at"]: val.contentCreatedAt, ["content_modified_at"]: val.contentModifiedAt };
}
exports.serializeUploadFileRequestBodyArgAttributesField = serializeUploadFileRequestBodyArgAttributesField;
function deserializeUploadFileRequestBodyArgAttributesField(val) {
    const name = val.name;
    const parent = deserializeUploadFileRequestBodyArgAttributesFieldParentField(val.parent);
    const contentCreatedAt = (0, json_js_3.isJson)(val.content_created_at, "string") ? val.content_created_at : void 0;
    const contentModifiedAt = (0, json_js_3.isJson)(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    return { name: name, parent: parent, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt };
}
exports.deserializeUploadFileRequestBodyArgAttributesField = deserializeUploadFileRequestBodyArgAttributesField;
function serializePreflightFileUploadRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.serializePreflightFileUploadRequestBodyArgParentField = serializePreflightFileUploadRequestBodyArgParentField;
function deserializePreflightFileUploadRequestBodyArgParentField(val) {
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    return { id: id };
}
exports.deserializePreflightFileUploadRequestBodyArgParentField = deserializePreflightFileUploadRequestBodyArgParentField;
function serializePreflightFileUploadRequestBodyArg(val) {
    return { ["name"]: val.name, ["size"]: val.size, ["parent"]: val.parent == void 0 ? void 0 : serializePreflightFileUploadRequestBodyArgParentField(val.parent) };
}
exports.serializePreflightFileUploadRequestBodyArg = serializePreflightFileUploadRequestBodyArg;
function deserializePreflightFileUploadRequestBodyArg(val) {
    const name = (0, json_js_3.isJson)(val.name, "string") ? val.name : void 0;
    const size = (0, json_js_3.isJson)(val.size, "number") ? val.size : void 0;
    const parent = val.parent == void 0 ? void 0 : deserializePreflightFileUploadRequestBodyArgParentField(val.parent);
    return { name: name, size: size, parent: parent };
}
exports.deserializePreflightFileUploadRequestBodyArg = deserializePreflightFileUploadRequestBodyArg;
//# sourceMappingURL=uploads.generated.js.map