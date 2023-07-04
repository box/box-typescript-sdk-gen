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
exports.newDeserializeCreateFolderLockRequestBodyArg = exports.newSerializeCreateFolderLockRequestBodyArg = exports.newDeserializeCreateFolderLockRequestBodyArgFolderField = exports.newSerializeCreateFolderLockRequestBodyArgFolderField = exports.newDeserializeCreateFolderLockRequestBodyArgLockedOperationsField = exports.newSerializeCreateFolderLockRequestBodyArgLockedOperationsField = exports.newDeserializeGetFolderLocksQueryParamsArg = exports.newSerializeGetFolderLocksQueryParamsArg = exports.FolderLocksManager = void 0;
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
            return (0, schemas_generated_js_1.newDeserializeFolderLocks)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFolderLock(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folder_locks"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeFolderLock)((0, json_js_1.deserializeJson)(response.text));
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
function newSerializeGetFolderLocksQueryParamsArg(val) {
    return { ["folderId"]: val.folderId };
}
exports.newSerializeGetFolderLocksQueryParamsArg = newSerializeGetFolderLocksQueryParamsArg;
function newDeserializeGetFolderLocksQueryParamsArg(val) {
    const folderId = val.folderId;
    return { folderId: folderId };
}
exports.newDeserializeGetFolderLocksQueryParamsArg = newDeserializeGetFolderLocksQueryParamsArg;
function newSerializeCreateFolderLockRequestBodyArgLockedOperationsField(val) {
    return { ["move"]: val.move, ["delete"]: val.delete };
}
exports.newSerializeCreateFolderLockRequestBodyArgLockedOperationsField = newSerializeCreateFolderLockRequestBodyArgLockedOperationsField;
function newDeserializeCreateFolderLockRequestBodyArgLockedOperationsField(val) {
    const move = val.move;
    const _delete = val.delete;
    return { move: move, delete: _delete };
}
exports.newDeserializeCreateFolderLockRequestBodyArgLockedOperationsField = newDeserializeCreateFolderLockRequestBodyArgLockedOperationsField;
function newSerializeCreateFolderLockRequestBodyArgFolderField(val) {
    return { ["type"]: val.type, ["id"]: val.id };
}
exports.newSerializeCreateFolderLockRequestBodyArgFolderField = newSerializeCreateFolderLockRequestBodyArgFolderField;
function newDeserializeCreateFolderLockRequestBodyArgFolderField(val) {
    const type = val.type;
    const id = val.id;
    return { type: type, id: id };
}
exports.newDeserializeCreateFolderLockRequestBodyArgFolderField = newDeserializeCreateFolderLockRequestBodyArgFolderField;
function newSerializeCreateFolderLockRequestBodyArg(val) {
    return { ["lockedOperations"]: val.lockedOperations == void 0 ? void 0 : newSerializeCreateFolderLockRequestBodyArgLockedOperationsField(val.lockedOperations), ["folder"]: newSerializeCreateFolderLockRequestBodyArgFolderField(val.folder) };
}
exports.newSerializeCreateFolderLockRequestBodyArg = newSerializeCreateFolderLockRequestBodyArg;
function newDeserializeCreateFolderLockRequestBodyArg(val) {
    const lockedOperations = val.lockedOperations == void 0 ? void 0 : newDeserializeCreateFolderLockRequestBodyArgLockedOperationsField(val.lockedOperations);
    const folder = newDeserializeCreateFolderLockRequestBodyArgFolderField(val.folder);
    return { lockedOperations: lockedOperations, folder: folder };
}
exports.newDeserializeCreateFolderLockRequestBodyArg = newDeserializeCreateFolderLockRequestBodyArg;
//# sourceMappingURL=folderLocks.generated.js.map