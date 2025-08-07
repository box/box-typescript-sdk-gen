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
exports.TrashedWebLinksManager = exports.DeleteTrashedWebLinkByIdHeaders = exports.GetTrashedWebLinkByIdHeaders = exports.RestoreWeblinkFromTrashHeaders = exports.DeleteTrashedWebLinkByIdOptionals = exports.GetTrashedWebLinkByIdOptionals = exports.RestoreWeblinkFromTrashOptionals = void 0;
exports.serializeRestoreWeblinkFromTrashRequestBodyParentField = serializeRestoreWeblinkFromTrashRequestBodyParentField;
exports.deserializeRestoreWeblinkFromTrashRequestBodyParentField = deserializeRestoreWeblinkFromTrashRequestBodyParentField;
exports.serializeRestoreWeblinkFromTrashRequestBody = serializeRestoreWeblinkFromTrashRequestBody;
exports.deserializeRestoreWeblinkFromTrashRequestBody = deserializeRestoreWeblinkFromTrashRequestBody;
const trashWebLinkRestored_generated_js_1 = require("../schemas/trashWebLinkRestored.generated.js");
const trashWebLink_generated_js_1 = require("../schemas/trashWebLink.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class RestoreWeblinkFromTrashOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.queryParams = {};
        this.headers = new RestoreWeblinkFromTrashHeaders({});
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
exports.RestoreWeblinkFromTrashOptionals = RestoreWeblinkFromTrashOptionals;
class GetTrashedWebLinkByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetTrashedWebLinkByIdHeaders({});
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
exports.GetTrashedWebLinkByIdOptionals = GetTrashedWebLinkByIdOptionals;
class DeleteTrashedWebLinkByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteTrashedWebLinkByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteTrashedWebLinkByIdOptionals = DeleteTrashedWebLinkByIdOptionals;
class RestoreWeblinkFromTrashHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.RestoreWeblinkFromTrashHeaders = RestoreWeblinkFromTrashHeaders;
class GetTrashedWebLinkByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetTrashedWebLinkByIdHeaders = GetTrashedWebLinkByIdHeaders;
class DeleteTrashedWebLinkByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteTrashedWebLinkByIdHeaders = DeleteTrashedWebLinkByIdHeaders;
class TrashedWebLinksManager {
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
       * Restores a web link that has been moved to the trash.
       *
       * An optional new parent ID can be provided to restore the  web link to in case
       * the original folder has been deleted.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {RestoreWeblinkFromTrashOptionalsInput} optionalsInput
       * @returns {Promise<TrashWebLinkRestored>}
       */
    restoreWeblinkFromTrash(webLinkId_1) {
        return __awaiter(this, arguments, void 0, function* (webLinkId, optionalsInput = {}) {
            const optionals = new RestoreWeblinkFromTrashOptionals({
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
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', (0, utils_js_2.toString)(webLinkId)),
                method: 'POST',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeRestoreWeblinkFromTrashRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, trashWebLinkRestored_generated_js_1.deserializeTrashWebLinkRestored)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves a web link that has been moved to the trash.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {GetTrashedWebLinkByIdOptionalsInput} optionalsInput
       * @returns {Promise<TrashWebLink>}
       */
    getTrashedWebLinkById(webLinkId_1) {
        return __awaiter(this, arguments, void 0, function* (webLinkId, optionalsInput = {}) {
            const optionals = new GetTrashedWebLinkByIdOptionals({
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
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', (0, utils_js_2.toString)(webLinkId), '/trash'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, trashWebLink_generated_js_1.deserializeTrashWebLink)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Permanently deletes a web link that is in the trash.
       * This action cannot be undone.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {DeleteTrashedWebLinkByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteTrashedWebLinkById(webLinkId_1) {
        return __awaiter(this, arguments, void 0, function* (webLinkId, optionalsInput = {}) {
            const optionals = new DeleteTrashedWebLinkByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', (0, utils_js_2.toString)(webLinkId), '/trash'),
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
exports.TrashedWebLinksManager = TrashedWebLinksManager;
function serializeRestoreWeblinkFromTrashRequestBodyParentField(val) {
    return { ['id']: val.id };
}
function deserializeRestoreWeblinkFromTrashRequestBodyParentField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RestoreWeblinkFromTrashRequestBodyParentField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "RestoreWeblinkFromTrashRequestBodyParentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { id: id };
}
function serializeRestoreWeblinkFromTrashRequestBody(val) {
    return {
        ['name']: val.name,
        ['parent']: val.parent == void 0
            ? val.parent
            : serializeRestoreWeblinkFromTrashRequestBodyParentField(val.parent),
    };
}
function deserializeRestoreWeblinkFromTrashRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RestoreWeblinkFromTrashRequestBody"',
        });
    }
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "RestoreWeblinkFromTrashRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    const parent = val.parent == void 0
        ? void 0
        : deserializeRestoreWeblinkFromTrashRequestBodyParentField(val.parent);
    return {
        name: name,
        parent: parent,
    };
}
//# sourceMappingURL=trashedWebLinks.generated.js.map