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
exports.FolderLocksManager = exports.DeleteFolderLockByIdHeaders = exports.CreateFolderLockHeaders = exports.GetFolderLocksHeaders = exports.DeleteFolderLockByIdOptionals = exports.CreateFolderLockOptionals = exports.GetFolderLocksOptionals = void 0;
exports.serializeCreateFolderLockRequestBodyLockedOperationsField = serializeCreateFolderLockRequestBodyLockedOperationsField;
exports.deserializeCreateFolderLockRequestBodyLockedOperationsField = deserializeCreateFolderLockRequestBodyLockedOperationsField;
exports.serializeCreateFolderLockRequestBodyFolderField = serializeCreateFolderLockRequestBodyFolderField;
exports.deserializeCreateFolderLockRequestBodyFolderField = deserializeCreateFolderLockRequestBodyFolderField;
exports.serializeCreateFolderLockRequestBody = serializeCreateFolderLockRequestBody;
exports.deserializeCreateFolderLockRequestBody = deserializeCreateFolderLockRequestBody;
const folderLocks_generated_js_1 = require("../schemas/folderLocks.generated.js");
const folderLock_generated_js_1 = require("../schemas/folderLock.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class GetFolderLocksOptionals {
    constructor(fields) {
        this.headers = new GetFolderLocksHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFolderLocksOptionals = GetFolderLocksOptionals;
class CreateFolderLockOptionals {
    constructor(fields) {
        this.headers = new CreateFolderLockHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateFolderLockOptionals = CreateFolderLockOptionals;
class DeleteFolderLockByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteFolderLockByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteFolderLockByIdOptionals = DeleteFolderLockByIdOptionals;
class GetFolderLocksHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFolderLocksHeaders = GetFolderLocksHeaders;
class CreateFolderLockHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateFolderLockHeaders = CreateFolderLockHeaders;
class DeleteFolderLockByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteFolderLockByIdHeaders = DeleteFolderLockByIdHeaders;
class FolderLocksManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth !== undefined) {
            this.auth = fields.auth;
        }
        if (fields.networkSession !== undefined) {
            this.networkSession = fields.networkSession;
        }
    }
    /**
     * Retrieves folder lock details for a given folder.
     *
     * You must be authenticated as the owner or co-owner of the folder to
     * use this endpoint.
     * @param {GetFolderLocksQueryParams} queryParams Query parameters of getFolderLocks method
     * @param {GetFolderLocksOptionalsInput} optionalsInput
     * @returns {Promise<FolderLocks>}
     */
    getFolderLocks(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetFolderLocksOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['folder_id']: (0, utils_js_2.toString)(queryParams.folderId),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folder_locks'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, folderLocks_generated_js_1.deserializeFolderLocks)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a folder lock on a folder, preventing it from being moved and/or
     * deleted.
     *
     * You must be authenticated as the owner or co-owner of the folder to
     * use this endpoint.
     * @param {CreateFolderLockRequestBody} requestBody Request body of createFolderLock method
     * @param {CreateFolderLockOptionalsInput} optionalsInput
     * @returns {Promise<FolderLock>}
     */
    createFolderLock(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateFolderLockOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folder_locks'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateFolderLockRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, folderLock_generated_js_1.deserializeFolderLock)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Deletes a folder lock on a given folder.
       *
       * You must be authenticated as the owner or co-owner of the folder to
       * use this endpoint.
       * @param {string} folderLockId The ID of the folder lock.
      Example: "12345"
       * @param {DeleteFolderLockByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteFolderLockById(folderLockId_1) {
        return __awaiter(this, arguments, void 0, function* (folderLockId, optionalsInput = {}) {
            const optionals = new DeleteFolderLockByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folder_locks/', (0, utils_js_2.toString)(folderLockId)),
                method: 'DELETE',
                headers: headersMap,
                responseFormat: 'no_content',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
    }
}
exports.FolderLocksManager = FolderLocksManager;
function serializeCreateFolderLockRequestBodyLockedOperationsField(val) {
    return { ['move']: val.move, ['delete']: val.delete };
}
function deserializeCreateFolderLockRequestBodyLockedOperationsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateFolderLockRequestBodyLockedOperationsField"',
        });
    }
    if (val.move == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "move" of type "CreateFolderLockRequestBodyLockedOperationsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.move)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "move" of type "CreateFolderLockRequestBodyLockedOperationsField"',
        });
    }
    const move = val.move;
    if (val.delete == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "delete" of type "CreateFolderLockRequestBodyLockedOperationsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.delete)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "delete" of type "CreateFolderLockRequestBodyLockedOperationsField"',
        });
    }
    const _delete = val.delete;
    return {
        move: move,
        delete: _delete,
    };
}
function serializeCreateFolderLockRequestBodyFolderField(val) {
    return { ['type']: val.type, ['id']: val.id };
}
function deserializeCreateFolderLockRequestBodyFolderField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateFolderLockRequestBodyFolderField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CreateFolderLockRequestBodyFolderField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "type" of type "CreateFolderLockRequestBodyFolderField"',
        });
    }
    const type = val.type;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CreateFolderLockRequestBodyFolderField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateFolderLockRequestBodyFolderField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeCreateFolderLockRequestBody(val) {
    return {
        ['locked_operations']: val.lockedOperations == void 0
            ? val.lockedOperations
            : serializeCreateFolderLockRequestBodyLockedOperationsField(val.lockedOperations),
        ['folder']: serializeCreateFolderLockRequestBodyFolderField(val.folder),
    };
}
function deserializeCreateFolderLockRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateFolderLockRequestBody"',
        });
    }
    const lockedOperations = val.locked_operations == void 0
        ? void 0
        : deserializeCreateFolderLockRequestBodyLockedOperationsField(val.locked_operations);
    if (val.folder == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "folder" of type "CreateFolderLockRequestBody" to be defined',
        });
    }
    const folder = deserializeCreateFolderLockRequestBodyFolderField(val.folder);
    return {
        lockedOperations: lockedOperations,
        folder: folder,
    };
}
//# sourceMappingURL=folderLocks.generated.js.map