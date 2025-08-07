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
exports.TransferManager = exports.TransferOwnedFolderHeaders = exports.TransferOwnedFolderOptionals = void 0;
exports.serializeTransferOwnedFolderRequestBodyOwnedByField = serializeTransferOwnedFolderRequestBodyOwnedByField;
exports.deserializeTransferOwnedFolderRequestBodyOwnedByField = deserializeTransferOwnedFolderRequestBodyOwnedByField;
exports.serializeTransferOwnedFolderRequestBody = serializeTransferOwnedFolderRequestBody;
exports.deserializeTransferOwnedFolderRequestBody = deserializeTransferOwnedFolderRequestBody;
const folderFull_generated_js_1 = require("../schemas/folderFull.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class TransferOwnedFolderOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new TransferOwnedFolderHeaders({});
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
exports.TransferOwnedFolderOptionals = TransferOwnedFolderOptionals;
class TransferOwnedFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.TransferOwnedFolderHeaders = TransferOwnedFolderHeaders;
class TransferManager {
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
       * Move all of the items (files, folders and workflows) owned by a user into
       * another user's account
       *
       * Only the root folder (`0`) can be transferred.
       *
       * Folders can only be moved across users by users with administrative
       * permissions.
       *
       * All existing shared links and folder-level collaborations are transferred
       * during the operation. Please note that while collaborations at the individual
       * file-level are transferred during the operation, the collaborations are
       * deleted when the original user is deleted.
       *
       * If the user has a large number of items across all folders, the call will
       * be run asynchronously. If the operation is not completed within 10 minutes,
       * the user will receive a 200 OK response, and the operation will continue running.
       *
       * If the destination path has a metadata cascade policy attached to any of
       * the parent folders, a metadata cascade operation will be kicked off
       * asynchronously.
       *
       * There is currently no way to check for when this operation is finished.
       *
       * The destination folder's name will be in the format `{User}'s Files and
       * Folders`, where `{User}` is the display name of the user.
       *
       * To make this API call your application will need to have the "Read and write
       * all files and folders stored in Box" scope enabled.
       *
       * Please make sure the destination user has access to `Relay` or `Relay Lite`,
       * and has access to the files and folders involved in the workflows being
       * transferred.
       *
       * Admins will receive an email when the operation is completed.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {TransferOwnedFolderRequestBody} requestBody Request body of transferOwnedFolder method
       * @param {TransferOwnedFolderOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    transferOwnedFolder(userId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (userId, requestBody, optionalsInput = {}) {
            const optionals = new TransferOwnedFolderOptionals({
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
                ['notify']: (0, utils_js_2.toString)(queryParams.notify),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/', (0, utils_js_2.toString)(userId), '/folders/0'),
                method: 'PUT',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeTransferOwnedFolderRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, folderFull_generated_js_1.deserializeFolderFull)(response.data)), { rawData: response.data });
        });
    }
}
exports.TransferManager = TransferManager;
function serializeTransferOwnedFolderRequestBodyOwnedByField(val) {
    return { ['id']: val.id };
}
function deserializeTransferOwnedFolderRequestBodyOwnedByField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TransferOwnedFolderRequestBodyOwnedByField"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "TransferOwnedFolderRequestBodyOwnedByField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TransferOwnedFolderRequestBodyOwnedByField"',
        });
    }
    const id = val.id;
    return { id: id };
}
function serializeTransferOwnedFolderRequestBody(val) {
    return {
        ['owned_by']: serializeTransferOwnedFolderRequestBodyOwnedByField(val.ownedBy),
    };
}
function deserializeTransferOwnedFolderRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TransferOwnedFolderRequestBody"',
        });
    }
    if (val.owned_by == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "owned_by" of type "TransferOwnedFolderRequestBody" to be defined',
        });
    }
    const ownedBy = deserializeTransferOwnedFolderRequestBodyOwnedByField(val.owned_by);
    return { ownedBy: ownedBy };
}
//# sourceMappingURL=transfer.generated.js.map