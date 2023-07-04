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
exports.newDeserializeGetFolderTrashQueryParamsArg = exports.newSerializeGetFolderTrashQueryParamsArg = exports.newDeserializeRestoreFolderFromTrashQueryParamsArg = exports.newSerializeRestoreFolderFromTrashQueryParamsArg = exports.newDeserializeRestoreFolderFromTrashRequestBodyArg = exports.newSerializeRestoreFolderFromTrashRequestBodyArg = exports.newDeserializeRestoreFolderFromTrashRequestBodyArgParentField = exports.newSerializeRestoreFolderFromTrashRequestBodyArgParentField = exports.TrashedFoldersManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class TrashedFoldersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    restoreFolderFromTrash(folderId, requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId), { method: "POST", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeTrashFolderRestored)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFolderTrash(folderId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/trash"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeTrashFolder)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFolderTrash(folderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/trash"), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.TrashedFoldersManager = TrashedFoldersManager;
function newSerializeRestoreFolderFromTrashRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.newSerializeRestoreFolderFromTrashRequestBodyArgParentField = newSerializeRestoreFolderFromTrashRequestBodyArgParentField;
function newDeserializeRestoreFolderFromTrashRequestBodyArgParentField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { id: id };
}
exports.newDeserializeRestoreFolderFromTrashRequestBodyArgParentField = newDeserializeRestoreFolderFromTrashRequestBodyArgParentField;
function newSerializeRestoreFolderFromTrashRequestBodyArg(val) {
    return { ["name"]: val.name, ["parent"]: val.parent == void 0 ? void 0 : newSerializeRestoreFolderFromTrashRequestBodyArgParentField(val.parent) };
}
exports.newSerializeRestoreFolderFromTrashRequestBodyArg = newSerializeRestoreFolderFromTrashRequestBodyArg;
function newDeserializeRestoreFolderFromTrashRequestBodyArg(val) {
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const parent = val.parent == void 0 ? void 0 : newDeserializeRestoreFolderFromTrashRequestBodyArgParentField(val.parent);
    return { name: name, parent: parent };
}
exports.newDeserializeRestoreFolderFromTrashRequestBodyArg = newDeserializeRestoreFolderFromTrashRequestBodyArg;
function newSerializeRestoreFolderFromTrashQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeRestoreFolderFromTrashQueryParamsArg = newSerializeRestoreFolderFromTrashQueryParamsArg;
function newDeserializeRestoreFolderFromTrashQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeRestoreFolderFromTrashQueryParamsArg = newDeserializeRestoreFolderFromTrashQueryParamsArg;
function newSerializeGetFolderTrashQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetFolderTrashQueryParamsArg = newSerializeGetFolderTrashQueryParamsArg;
function newDeserializeGetFolderTrashQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetFolderTrashQueryParamsArg = newDeserializeGetFolderTrashQueryParamsArg;
//# sourceMappingURL=trashedFolders.generated.js.map