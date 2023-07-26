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
exports.deserializeGetFolderTrashQueryParamsArg = exports.serializeGetFolderTrashQueryParamsArg = exports.deserializeRestoreFolderFromTrashQueryParamsArg = exports.serializeRestoreFolderFromTrashQueryParamsArg = exports.deserializeRestoreFolderFromTrashRequestBodyArg = exports.serializeRestoreFolderFromTrashRequestBodyArg = exports.deserializeRestoreFolderFromTrashRequestBodyArgParentField = exports.serializeRestoreFolderFromTrashRequestBodyArgParentField = exports.TrashedFoldersManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class TrashedFoldersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    restoreFolderFromTrash(folderId, requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId), { method: "POST", params: (0, utils_js_1.prepareParams)(serializeRestoreFolderFromTrashQueryParamsArg(queryParams)), body: (0, json_js_1.serializeJson)(serializeRestoreFolderFromTrashRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeTrashFolderRestored)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    getFolderTrash(folderId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/trash"), { method: "GET", params: (0, utils_js_1.prepareParams)(serializeGetFolderTrashQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeTrashFolder)((0, json_js_2.deserializeJson)(response.text));
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
function serializeRestoreFolderFromTrashRequestBodyArgParentField(val) {
    return { ["id"]: val.id };
}
exports.serializeRestoreFolderFromTrashRequestBodyArgParentField = serializeRestoreFolderFromTrashRequestBodyArgParentField;
function deserializeRestoreFolderFromTrashRequestBodyArgParentField(val) {
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    return { id: id };
}
exports.deserializeRestoreFolderFromTrashRequestBodyArgParentField = deserializeRestoreFolderFromTrashRequestBodyArgParentField;
function serializeRestoreFolderFromTrashRequestBodyArg(val) {
    return { ["name"]: val.name, ["parent"]: val.parent == void 0 ? void 0 : serializeRestoreFolderFromTrashRequestBodyArgParentField(val.parent) };
}
exports.serializeRestoreFolderFromTrashRequestBodyArg = serializeRestoreFolderFromTrashRequestBodyArg;
function deserializeRestoreFolderFromTrashRequestBodyArg(val) {
    const name = (0, json_js_3.isJson)(val.name, "string") ? val.name : void 0;
    const parent = val.parent == void 0 ? void 0 : deserializeRestoreFolderFromTrashRequestBodyArgParentField(val.parent);
    return { name: name, parent: parent };
}
exports.deserializeRestoreFolderFromTrashRequestBodyArg = deserializeRestoreFolderFromTrashRequestBodyArg;
function serializeRestoreFolderFromTrashQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeRestoreFolderFromTrashQueryParamsArg = serializeRestoreFolderFromTrashQueryParamsArg;
function deserializeRestoreFolderFromTrashQueryParamsArg(val) {
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeRestoreFolderFromTrashQueryParamsArg = deserializeRestoreFolderFromTrashQueryParamsArg;
function serializeGetFolderTrashQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetFolderTrashQueryParamsArg = serializeGetFolderTrashQueryParamsArg;
function deserializeGetFolderTrashQueryParamsArg(val) {
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeGetFolderTrashQueryParamsArg = deserializeGetFolderTrashQueryParamsArg;
//# sourceMappingURL=trashedFolders.generated.js.map