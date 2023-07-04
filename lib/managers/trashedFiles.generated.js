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
exports.newDeserializeGetFileTrashQueryParamsArg = exports.newSerializeGetFileTrashQueryParamsArg = exports.newDeserializeRestoreFileFromTrashQueryParamsArg = exports.newSerializeRestoreFileFromTrashQueryParamsArg = exports.newDeserializeRestoreFileFromTrashRequestBodyArg = exports.newSerializeRestoreFileFromTrashRequestBodyArg = exports.newDeserializeRestoreFileFromTrashRequestBodyArgParentField = exports.newSerializeRestoreFileFromTrashRequestBodyArgParentField = exports.TrashedFilesManager = void 0;
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
            return (0, schemas_generated_js_1.newDeserializeTrashFileRestored)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileTrash(fileId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/trash"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeTrashFile)((0, json_js_1.deserializeJson)(response.text));
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
function newSerializeRestoreFileFromTrashRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.newSerializeRestoreFileFromTrashRequestBodyArgParentField = newSerializeRestoreFileFromTrashRequestBodyArgParentField;
function newDeserializeRestoreFileFromTrashRequestBodyArgParentField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { id: id };
}
exports.newDeserializeRestoreFileFromTrashRequestBodyArgParentField = newDeserializeRestoreFileFromTrashRequestBodyArgParentField;
function newSerializeRestoreFileFromTrashRequestBodyArg(val) {
    return { ["name"]: val.name, ["parent"]: val.parent == void 0 ? void 0 : newSerializeRestoreFileFromTrashRequestBodyArgParentField(val.parent) };
}
exports.newSerializeRestoreFileFromTrashRequestBodyArg = newSerializeRestoreFileFromTrashRequestBodyArg;
function newDeserializeRestoreFileFromTrashRequestBodyArg(val) {
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const parent = val.parent == void 0 ? void 0 : newDeserializeRestoreFileFromTrashRequestBodyArgParentField(val.parent);
    return { name: name, parent: parent };
}
exports.newDeserializeRestoreFileFromTrashRequestBodyArg = newDeserializeRestoreFileFromTrashRequestBodyArg;
function newSerializeRestoreFileFromTrashQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeRestoreFileFromTrashQueryParamsArg = newSerializeRestoreFileFromTrashQueryParamsArg;
function newDeserializeRestoreFileFromTrashQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeRestoreFileFromTrashQueryParamsArg = newDeserializeRestoreFileFromTrashQueryParamsArg;
function newSerializeGetFileTrashQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetFileTrashQueryParamsArg = newSerializeGetFileTrashQueryParamsArg;
function newDeserializeGetFileTrashQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetFileTrashQueryParamsArg = newDeserializeGetFileTrashQueryParamsArg;
//# sourceMappingURL=trashedFiles.generated.js.map