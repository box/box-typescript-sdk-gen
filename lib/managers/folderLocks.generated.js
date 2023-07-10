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
exports.deserializeCreateFolderLockRequestBodyArg = exports.serializeCreateFolderLockRequestBodyArg = exports.deserializeCreateFolderLockRequestBodyArgFolderField = exports.serializeCreateFolderLockRequestBodyArgFolderField = exports.deserializeCreateFolderLockRequestBodyArgLockedOperationsField = exports.serializeCreateFolderLockRequestBodyArgLockedOperationsField = exports.deserializeGetFolderLocksQueryParamsArg = exports.serializeGetFolderLocksQueryParamsArg = exports.FolderLocksManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class FolderLocksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFolderLocks(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folder_locks"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderLocks)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFolderLock(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folder_locks"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeFolderLock)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFolderLockById(folderLockId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folder_locks/", folderLockId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.FolderLocksManager = FolderLocksManager;
function serializeGetFolderLocksQueryParamsArg(val) {
    return { ["folderId"]: val.folderId };
}
exports.serializeGetFolderLocksQueryParamsArg = serializeGetFolderLocksQueryParamsArg;
function deserializeGetFolderLocksQueryParamsArg(val) {
    const folderId = val.folderId;
    return { folderId: folderId };
}
exports.deserializeGetFolderLocksQueryParamsArg = deserializeGetFolderLocksQueryParamsArg;
function serializeCreateFolderLockRequestBodyArgLockedOperationsField(val) {
    return { ["move"]: val.move, ["delete"]: val.delete };
}
exports.serializeCreateFolderLockRequestBodyArgLockedOperationsField = serializeCreateFolderLockRequestBodyArgLockedOperationsField;
function deserializeCreateFolderLockRequestBodyArgLockedOperationsField(val) {
    const move = val.move;
    const _delete = val.delete;
    return { move: move, delete: _delete };
}
exports.deserializeCreateFolderLockRequestBodyArgLockedOperationsField = deserializeCreateFolderLockRequestBodyArgLockedOperationsField;
function serializeCreateFolderLockRequestBodyArgFolderField(val) {
    return { ["type"]: val.type, ["id"]: val.id };
}
exports.serializeCreateFolderLockRequestBodyArgFolderField = serializeCreateFolderLockRequestBodyArgFolderField;
function deserializeCreateFolderLockRequestBodyArgFolderField(val) {
    const type = val.type;
    const id = val.id;
    return { type: type, id: id };
}
exports.deserializeCreateFolderLockRequestBodyArgFolderField = deserializeCreateFolderLockRequestBodyArgFolderField;
function serializeCreateFolderLockRequestBodyArg(val) {
    return { ["lockedOperations"]: val.lockedOperations == void 0 ? void 0 : serializeCreateFolderLockRequestBodyArgLockedOperationsField(val.lockedOperations), ["folder"]: serializeCreateFolderLockRequestBodyArgFolderField(val.folder) };
}
exports.serializeCreateFolderLockRequestBodyArg = serializeCreateFolderLockRequestBodyArg;
function deserializeCreateFolderLockRequestBodyArg(val) {
    const lockedOperations = val.lockedOperations == void 0 ? void 0 : deserializeCreateFolderLockRequestBodyArgLockedOperationsField(val.lockedOperations);
    const folder = deserializeCreateFolderLockRequestBodyArgFolderField(val.folder);
    return { lockedOperations: lockedOperations, folder: folder };
}
exports.deserializeCreateFolderLockRequestBodyArg = deserializeCreateFolderLockRequestBodyArg;
//# sourceMappingURL=folderLocks.generated.js.map