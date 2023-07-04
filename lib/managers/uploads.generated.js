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
exports.newDeserializePreflightFileUploadRequestBodyArg = exports.newSerializePreflightFileUploadRequestBodyArg = exports.newDeserializePreflightFileUploadRequestBodyArgParentField = exports.newSerializePreflightFileUploadRequestBodyArgParentField = exports.newDeserializeUploadFileHeadersArg = exports.newSerializeUploadFileHeadersArg = exports.newDeserializeUploadFileQueryParamsArg = exports.newSerializeUploadFileQueryParamsArg = exports.newDeserializeUploadFileRequestBodyArgAttributesField = exports.newSerializeUploadFileRequestBodyArgAttributesField = exports.newDeserializeUploadFileRequestBodyArgAttributesFieldParentField = exports.newSerializeUploadFileRequestBodyArgAttributesFieldParentField = exports.newDeserializeUploadFileVersionHeadersArg = exports.newSerializeUploadFileVersionHeadersArg = exports.newDeserializeUploadFileVersionQueryParamsArg = exports.newSerializeUploadFileVersionQueryParamsArg = exports.newDeserializeUploadFileVersionRequestBodyArgAttributesField = exports.newSerializeUploadFileVersionRequestBodyArgAttributesField = exports.UploadsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class UploadsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    uploadFileVersion(fileId, requestBody, queryParams = {}, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/", fileId, "/content"), { method: "POST", params: (0, utils_js_1.toMap)(queryParams), headers: (0, utils_js_1.toMap)(headers), multipartData: [{ partName: "attributes", body: JSON.stringify(requestBody.attributes) }, { partName: "file", fileStream: requestBody.file }], contentType: "multipart/form-data", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFiles)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    uploadFile(requestBody, queryParams = {}, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://upload.box.com/api/2.0/files/content"), { method: "POST", params: (0, utils_js_1.toMap)(queryParams), headers: (0, utils_js_1.toMap)(headers), multipartData: [{ partName: "attributes", body: JSON.stringify(requestBody.attributes) }, { partName: "file", fileStream: requestBody.file }], contentType: "multipart/form-data", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFiles)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    preflightFileUpload(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/content"), { method: "OPTIONS", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeUploadUrl)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.UploadsManager = UploadsManager;
function newSerializeUploadFileVersionRequestBodyArgAttributesField(val) {
    return { ["name"]: val.name, ["contentModifiedAt"]: val.contentModifiedAt };
}
exports.newSerializeUploadFileVersionRequestBodyArgAttributesField = newSerializeUploadFileVersionRequestBodyArgAttributesField;
function newDeserializeUploadFileVersionRequestBodyArgAttributesField(val) {
    const name = val.name;
    const contentModifiedAt = (0, json_js_2.isJson)(val.contentModifiedAt, "string") ? val.contentModifiedAt : void 0;
    return { name: name, contentModifiedAt: contentModifiedAt };
}
exports.newDeserializeUploadFileVersionRequestBodyArgAttributesField = newDeserializeUploadFileVersionRequestBodyArgAttributesField;
function newSerializeUploadFileVersionQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeUploadFileVersionQueryParamsArg = newSerializeUploadFileVersionQueryParamsArg;
function newDeserializeUploadFileVersionQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeUploadFileVersionQueryParamsArg = newDeserializeUploadFileVersionQueryParamsArg;
function newSerializeUploadFileVersionHeadersArg(val) {
    return { ["ifMatch"]: val.ifMatch, ["contentMd5"]: val.contentMd5 };
}
exports.newSerializeUploadFileVersionHeadersArg = newSerializeUploadFileVersionHeadersArg;
function newDeserializeUploadFileVersionHeadersArg(val) {
    const ifMatch = (0, json_js_2.isJson)(val.ifMatch, "string") ? val.ifMatch : void 0;
    const contentMd5 = (0, json_js_2.isJson)(val.contentMd5, "string") ? val.contentMd5 : void 0;
    return { ifMatch: ifMatch, contentMd5: contentMd5 };
}
exports.newDeserializeUploadFileVersionHeadersArg = newDeserializeUploadFileVersionHeadersArg;
function newSerializeUploadFileRequestBodyArgAttributesFieldParentField(val) {
    return { ["id"]: val.id };
}
exports.newSerializeUploadFileRequestBodyArgAttributesFieldParentField = newSerializeUploadFileRequestBodyArgAttributesFieldParentField;
function newDeserializeUploadFileRequestBodyArgAttributesFieldParentField(val) {
    const id = val.id;
    return { id: id };
}
exports.newDeserializeUploadFileRequestBodyArgAttributesFieldParentField = newDeserializeUploadFileRequestBodyArgAttributesFieldParentField;
function newSerializeUploadFileRequestBodyArgAttributesField(val) {
    return { ["name"]: val.name, ["parent"]: newSerializeUploadFileRequestBodyArgAttributesFieldParentField(val.parent), ["contentCreatedAt"]: val.contentCreatedAt, ["contentModifiedAt"]: val.contentModifiedAt };
}
exports.newSerializeUploadFileRequestBodyArgAttributesField = newSerializeUploadFileRequestBodyArgAttributesField;
function newDeserializeUploadFileRequestBodyArgAttributesField(val) {
    const name = val.name;
    const parent = newDeserializeUploadFileRequestBodyArgAttributesFieldParentField(val.parent);
    const contentCreatedAt = (0, json_js_2.isJson)(val.contentCreatedAt, "string") ? val.contentCreatedAt : void 0;
    const contentModifiedAt = (0, json_js_2.isJson)(val.contentModifiedAt, "string") ? val.contentModifiedAt : void 0;
    return { name: name, parent: parent, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt };
}
exports.newDeserializeUploadFileRequestBodyArgAttributesField = newDeserializeUploadFileRequestBodyArgAttributesField;
function newSerializeUploadFileQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeUploadFileQueryParamsArg = newSerializeUploadFileQueryParamsArg;
function newDeserializeUploadFileQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeUploadFileQueryParamsArg = newDeserializeUploadFileQueryParamsArg;
function newSerializeUploadFileHeadersArg(val) {
    return { ["contentMd5"]: val.contentMd5 };
}
exports.newSerializeUploadFileHeadersArg = newSerializeUploadFileHeadersArg;
function newDeserializeUploadFileHeadersArg(val) {
    const contentMd5 = (0, json_js_2.isJson)(val.contentMd5, "string") ? val.contentMd5 : void 0;
    return { contentMd5: contentMd5 };
}
exports.newDeserializeUploadFileHeadersArg = newDeserializeUploadFileHeadersArg;
function newSerializePreflightFileUploadRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.newSerializePreflightFileUploadRequestBodyArgParentField = newSerializePreflightFileUploadRequestBodyArgParentField;
function newDeserializePreflightFileUploadRequestBodyArgParentField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { id: id };
}
exports.newDeserializePreflightFileUploadRequestBodyArgParentField = newDeserializePreflightFileUploadRequestBodyArgParentField;
function newSerializePreflightFileUploadRequestBodyArg(val) {
    return { ["name"]: val.name, ["size"]: val.size, ["parent"]: val.parent == void 0 ? void 0 : newSerializePreflightFileUploadRequestBodyArgParentField(val.parent) };
}
exports.newSerializePreflightFileUploadRequestBodyArg = newSerializePreflightFileUploadRequestBodyArg;
function newDeserializePreflightFileUploadRequestBodyArg(val) {
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const size = (0, json_js_2.isJson)(val.size, "number") ? val.size : void 0;
    const parent = val.parent == void 0 ? void 0 : newDeserializePreflightFileUploadRequestBodyArgParentField(val.parent);
    return { name: name, size: size, parent: parent };
}
exports.newDeserializePreflightFileUploadRequestBodyArg = newDeserializePreflightFileUploadRequestBodyArg;
//# sourceMappingURL=uploads.generated.js.map