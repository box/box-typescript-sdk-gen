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
exports.TrashedFoldersManager = exports.DeleteTrashedFolderByIdHeaders = exports.GetTrashedFolderByIdHeaders = exports.RestoreFolderFromTrashHeaders = exports.DeleteTrashedFolderByIdOptionals = exports.GetTrashedFolderByIdOptionals = exports.RestoreFolderFromTrashOptionals = void 0;
exports.serializeRestoreFolderFromTrashRequestBodyParentField = serializeRestoreFolderFromTrashRequestBodyParentField;
exports.deserializeRestoreFolderFromTrashRequestBodyParentField = deserializeRestoreFolderFromTrashRequestBodyParentField;
exports.serializeRestoreFolderFromTrashRequestBody = serializeRestoreFolderFromTrashRequestBody;
exports.deserializeRestoreFolderFromTrashRequestBody = deserializeRestoreFolderFromTrashRequestBody;
const trashFolderRestored_generated_js_1 = require("../schemas/trashFolderRestored.generated.js");
const trashFolder_generated_js_1 = require("../schemas/trashFolder.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class RestoreFolderFromTrashOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.queryParams = {};
        this.headers = new RestoreFolderFromTrashHeaders({});
        this.cancellationToken = void 0;
        if (fields.requestBody !== undefined) {
            this.requestBody = fields.requestBody;
        }
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.RestoreFolderFromTrashOptionals = RestoreFolderFromTrashOptionals;
class GetTrashedFolderByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetTrashedFolderByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetTrashedFolderByIdOptionals = GetTrashedFolderByIdOptionals;
class DeleteTrashedFolderByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteTrashedFolderByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteTrashedFolderByIdOptionals = DeleteTrashedFolderByIdOptionals;
class RestoreFolderFromTrashHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.RestoreFolderFromTrashHeaders = RestoreFolderFromTrashHeaders;
class GetTrashedFolderByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetTrashedFolderByIdHeaders = GetTrashedFolderByIdHeaders;
class DeleteTrashedFolderByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteTrashedFolderByIdHeaders = DeleteTrashedFolderByIdHeaders;
class TrashedFoldersManager {
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
       * Restores a folder that has been moved to the trash.
       *
       * An optional new parent ID can be provided to restore the folder to in case the
       * original folder has been deleted.
       *
       * During this operation, part of the file tree will be locked, mainly
       * the source folder and all of its descendants, as well as the destination
       * folder.
       *
       * For the duration of the operation, no other move, copy, delete, or restore
       * operation can performed on any of the locked folders.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {RestoreFolderFromTrashOptionalsInput} optionalsInput
       * @returns {Promise<TrashFolderRestored>}
       */
    restoreFolderFromTrash(folderId_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, optionalsInput = {}) {
            const optionals = new RestoreFolderFromTrashOptionals({
                requestBody: optionalsInput.requestBody,
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const requestBody = optionals.requestBody;
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId)),
                method: 'POST',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeRestoreFolderFromTrashRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, trashFolderRestored_generated_js_1.deserializeTrashFolderRestored)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves a folder that has been moved to the trash.
       *
       * Please note that only if the folder itself has been moved to the
       * trash can it be retrieved with this API call. If instead one of
       * its parent folders was moved to the trash, only that folder
       * can be inspected using the
       * [`GET /folders/:id/trash`](e://get_folders_id_trash) API.
       *
       * To list all items that have been moved to the trash, please
       * use the [`GET /folders/trash/items`](e://get-folders-trash-items/)
       * API.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetTrashedFolderByIdOptionalsInput} optionalsInput
       * @returns {Promise<TrashFolder>}
       */
    getTrashedFolderById(folderId_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, optionalsInput = {}) {
            const optionals = new GetTrashedFolderByIdOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/trash'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, trashFolder_generated_js_1.deserializeTrashFolder)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Permanently deletes a folder that is in the trash.
       * This action cannot be undone.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {DeleteTrashedFolderByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteTrashedFolderById(folderId_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, optionalsInput = {}) {
            const optionals = new DeleteTrashedFolderByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/trash'),
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
exports.TrashedFoldersManager = TrashedFoldersManager;
function serializeRestoreFolderFromTrashRequestBodyParentField(val) {
    return { ['id']: val.id };
}
function deserializeRestoreFolderFromTrashRequestBodyParentField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RestoreFolderFromTrashRequestBodyParentField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "RestoreFolderFromTrashRequestBodyParentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { id: id };
}
function serializeRestoreFolderFromTrashRequestBody(val) {
    return {
        ['name']: val.name,
        ['parent']: val.parent == void 0
            ? val.parent
            : serializeRestoreFolderFromTrashRequestBodyParentField(val.parent),
    };
}
function deserializeRestoreFolderFromTrashRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RestoreFolderFromTrashRequestBody"',
        });
    }
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "RestoreFolderFromTrashRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    const parent = val.parent == void 0
        ? void 0
        : deserializeRestoreFolderFromTrashRequestBodyParentField(val.parent);
    return {
        name: name,
        parent: parent,
    };
}
//# sourceMappingURL=trashedFolders.generated.js.map