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
exports.deserializeGetFileTrashQueryParamsArg = exports.serializeGetFileTrashQueryParamsArg = exports.deserializeRestoreFileFromTrashQueryParamsArg = exports.serializeRestoreFileFromTrashQueryParamsArg = exports.deserializeRestoreFileFromTrashRequestBodyArg = exports.serializeRestoreFileFromTrashRequestBodyArg = exports.deserializeRestoreFileFromTrashRequestBodyArgParentField = exports.serializeRestoreFileFromTrashRequestBodyArgParentField = exports.TrashedFilesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class TrashedFilesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    restoreFileFromTrash(fileId, requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId), { method: "POST", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeTrashFileRestored)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileTrash(fileId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/trash"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeTrashFile)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFileTrash(fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/trash"), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.TrashedFilesManager = TrashedFilesManager;
function serializeRestoreFileFromTrashRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.serializeRestoreFileFromTrashRequestBodyArgParentField = serializeRestoreFileFromTrashRequestBodyArgParentField;
function deserializeRestoreFileFromTrashRequestBodyArgParentField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { id: id };
}
exports.deserializeRestoreFileFromTrashRequestBodyArgParentField = deserializeRestoreFileFromTrashRequestBodyArgParentField;
function serializeRestoreFileFromTrashRequestBodyArg(val) {
    return { ["name"]: val.name, ["parent"]: val.parent == void 0 ? void 0 : serializeRestoreFileFromTrashRequestBodyArgParentField(val.parent) };
}
exports.serializeRestoreFileFromTrashRequestBodyArg = serializeRestoreFileFromTrashRequestBodyArg;
function deserializeRestoreFileFromTrashRequestBodyArg(val) {
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const parent = val.parent == void 0 ? void 0 : deserializeRestoreFileFromTrashRequestBodyArgParentField(val.parent);
    return { name: name, parent: parent };
}
exports.deserializeRestoreFileFromTrashRequestBodyArg = deserializeRestoreFileFromTrashRequestBodyArg;
function serializeRestoreFileFromTrashQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeRestoreFileFromTrashQueryParamsArg = serializeRestoreFileFromTrashQueryParamsArg;
function deserializeRestoreFileFromTrashQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeRestoreFileFromTrashQueryParamsArg = deserializeRestoreFileFromTrashQueryParamsArg;
function serializeGetFileTrashQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetFileTrashQueryParamsArg = serializeGetFileTrashQueryParamsArg;
function deserializeGetFileTrashQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeGetFileTrashQueryParamsArg = deserializeGetFileTrashQueryParamsArg;
//# sourceMappingURL=trashedFiles.generated.js.map