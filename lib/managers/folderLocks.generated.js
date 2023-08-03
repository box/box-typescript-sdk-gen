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
exports.deserializeCreateFolderLockRequestBodyArg = exports.serializeCreateFolderLockRequestBodyArg = exports.deserializeCreateFolderLockRequestBodyArgFolderField = exports.serializeCreateFolderLockRequestBodyArgFolderField = exports.deserializeCreateFolderLockRequestBodyArgLockedOperationsField = exports.serializeCreateFolderLockRequestBodyArgLockedOperationsField = exports.FolderLocksManager = exports.DeleteFolderLockByIdHeadersArg = exports.CreateFolderLockHeadersArg = exports.GetFolderLocksHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class GetFolderLocksHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFolderLocksHeadersArg = GetFolderLocksHeadersArg;
class CreateFolderLockHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateFolderLockHeadersArg = CreateFolderLockHeadersArg;
class DeleteFolderLockByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteFolderLockByIdHeadersArg = DeleteFolderLockByIdHeadersArg;
class FolderLocksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFolderLocks(queryParams, headers = new GetFolderLocksHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["folder_id"]: (0, utils_js_2.toString)(queryParams.folderId) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folder_locks"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderLocks)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFolderLock(requestBody, headers = new CreateFolderLockHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folder_locks"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateFolderLockRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeFolderLock)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFolderLockById(folderLockId, headers = new DeleteFolderLockByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folder_locks/", folderLockId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.FolderLocksManager = FolderLocksManager;
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
    return { ["locked_operations"]: val.lockedOperations == void 0 ? void 0 : serializeCreateFolderLockRequestBodyArgLockedOperationsField(val.lockedOperations), ["folder"]: serializeCreateFolderLockRequestBodyArgFolderField(val.folder) };
}
exports.serializeCreateFolderLockRequestBodyArg = serializeCreateFolderLockRequestBodyArg;
function deserializeCreateFolderLockRequestBodyArg(val) {
    const lockedOperations = val.locked_operations == void 0 ? void 0 : deserializeCreateFolderLockRequestBodyArgLockedOperationsField(val.locked_operations);
    const folder = deserializeCreateFolderLockRequestBodyArgFolderField(val.folder);
    return { lockedOperations: lockedOperations, folder: folder };
}
exports.deserializeCreateFolderLockRequestBodyArg = deserializeCreateFolderLockRequestBodyArg;
//# sourceMappingURL=folderLocks.generated.js.map