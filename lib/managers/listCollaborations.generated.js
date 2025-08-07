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
exports.ListCollaborationsManager = exports.GetGroupCollaborationsHeaders = exports.GetCollaborationsHeaders = exports.GetFolderCollaborationsHeaders = exports.GetFileCollaborationsHeaders = exports.GetGroupCollaborationsOptionals = exports.GetCollaborationsOptionals = exports.GetFolderCollaborationsOptionals = exports.GetFileCollaborationsOptionals = void 0;
exports.serializeGetCollaborationsQueryParamsStatusField = serializeGetCollaborationsQueryParamsStatusField;
exports.deserializeGetCollaborationsQueryParamsStatusField = deserializeGetCollaborationsQueryParamsStatusField;
const collaborations_generated_js_1 = require("../schemas/collaborations.generated.js");
const collaborationsOffsetPaginated_generated_js_1 = require("../schemas/collaborationsOffsetPaginated.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
class GetFileCollaborationsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFileCollaborationsHeaders({});
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
exports.GetFileCollaborationsOptionals = GetFileCollaborationsOptionals;
class GetFolderCollaborationsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFolderCollaborationsHeaders({});
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
exports.GetFolderCollaborationsOptionals = GetFolderCollaborationsOptionals;
class GetCollaborationsOptionals {
    constructor(fields) {
        this.headers = new GetCollaborationsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetCollaborationsOptionals = GetCollaborationsOptionals;
class GetGroupCollaborationsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetGroupCollaborationsHeaders({});
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
exports.GetGroupCollaborationsOptionals = GetGroupCollaborationsOptionals;
class GetFileCollaborationsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileCollaborationsHeaders = GetFileCollaborationsHeaders;
class GetFolderCollaborationsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFolderCollaborationsHeaders = GetFolderCollaborationsHeaders;
class GetCollaborationsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetCollaborationsHeaders = GetCollaborationsHeaders;
class GetGroupCollaborationsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetGroupCollaborationsHeaders = GetGroupCollaborationsHeaders;
class ListCollaborationsManager {
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
       * Retrieves a list of pending and active collaborations for a
       * file. This returns all the users that have access to the file
       * or have been invited to the file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileCollaborationsOptionalsInput} optionalsInput
       * @returns {Promise<Collaborations>}
       */
    getFileCollaborations(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new GetFileCollaborationsOptionals({
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
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/collaborations'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, collaborations_generated_js_1.deserializeCollaborations)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves a list of pending and active collaborations for a
       * folder. This returns all the users that have access to the folder
       * or have been invited to the folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      Example: "12345"
       * @param {GetFolderCollaborationsOptionalsInput} optionalsInput
       * @returns {Promise<Collaborations>}
       */
    getFolderCollaborations(folderId_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, optionalsInput = {}) {
            const optionals = new GetFolderCollaborationsOptionals({
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
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/collaborations'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, collaborations_generated_js_1.deserializeCollaborations)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Retrieves all pending collaboration invites for this user.
     * @param {GetCollaborationsQueryParams} queryParams Query parameters of getCollaborations method
     * @param {GetCollaborationsOptionalsInput} optionalsInput
     * @returns {Promise<CollaborationsOffsetPaginated>}
     */
    getCollaborations(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetCollaborationsOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['status']: (0, utils_js_2.toString)(queryParams.status),
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
                ['offset']: (0, utils_js_2.toString)(queryParams.offset),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaborations'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, collaborationsOffsetPaginated_generated_js_1.deserializeCollaborationsOffsetPaginated)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves all the collaborations for a group. The user
       * must have admin permissions to inspect enterprise's groups.
       *
       * Each collaboration object has details on which files or
       * folders the group has access to and with what role.
       * @param {string} groupId The ID of the group.
      Example: "57645"
       * @param {GetGroupCollaborationsOptionalsInput} optionalsInput
       * @returns {Promise<CollaborationsOffsetPaginated>}
       */
    getGroupCollaborations(groupId_1) {
        return __awaiter(this, arguments, void 0, function* (groupId, optionalsInput = {}) {
            const optionals = new GetGroupCollaborationsOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['offset']: (0, utils_js_2.toString)(queryParams.offset),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/groups/', (0, utils_js_2.toString)(groupId), '/collaborations'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, collaborationsOffsetPaginated_generated_js_1.deserializeCollaborationsOffsetPaginated)(response.data)), { rawData: response.data });
        });
    }
}
exports.ListCollaborationsManager = ListCollaborationsManager;
function serializeGetCollaborationsQueryParamsStatusField(val) {
    return val;
}
function deserializeGetCollaborationsQueryParamsStatusField(val) {
    if (val == 'pending') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetCollaborationsQueryParamsStatusField",
    });
}
//# sourceMappingURL=listCollaborations.generated.js.map