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
exports.SharedLinksFoldersManager = exports.RemoveSharedLinkFromFolderHeaders = exports.UpdateSharedLinkOnFolderHeaders = exports.AddShareLinkToFolderHeaders = exports.GetSharedLinkForFolderHeaders = exports.FindFolderForSharedLinkHeaders = exports.RemoveSharedLinkFromFolderOptionals = exports.UpdateSharedLinkOnFolderOptionals = exports.AddShareLinkToFolderOptionals = exports.GetSharedLinkForFolderOptionals = exports.FindFolderForSharedLinkOptionals = void 0;
exports.serializeAddShareLinkToFolderRequestBodySharedLinkAccessField = serializeAddShareLinkToFolderRequestBodySharedLinkAccessField;
exports.deserializeAddShareLinkToFolderRequestBodySharedLinkAccessField = deserializeAddShareLinkToFolderRequestBodySharedLinkAccessField;
exports.serializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField = serializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField;
exports.deserializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField = deserializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField;
exports.serializeAddShareLinkToFolderRequestBodySharedLinkField = serializeAddShareLinkToFolderRequestBodySharedLinkField;
exports.deserializeAddShareLinkToFolderRequestBodySharedLinkField = deserializeAddShareLinkToFolderRequestBodySharedLinkField;
exports.serializeAddShareLinkToFolderRequestBody = serializeAddShareLinkToFolderRequestBody;
exports.deserializeAddShareLinkToFolderRequestBody = deserializeAddShareLinkToFolderRequestBody;
exports.serializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField = serializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField;
exports.deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField = deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField;
exports.serializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField = serializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField;
exports.deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField = deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField;
exports.serializeUpdateSharedLinkOnFolderRequestBodySharedLinkField = serializeUpdateSharedLinkOnFolderRequestBodySharedLinkField;
exports.deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkField = deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkField;
exports.serializeUpdateSharedLinkOnFolderRequestBody = serializeUpdateSharedLinkOnFolderRequestBody;
exports.deserializeUpdateSharedLinkOnFolderRequestBody = deserializeUpdateSharedLinkOnFolderRequestBody;
exports.serializeRemoveSharedLinkFromFolderRequestBodySharedLinkField = serializeRemoveSharedLinkFromFolderRequestBodySharedLinkField;
exports.deserializeRemoveSharedLinkFromFolderRequestBodySharedLinkField = deserializeRemoveSharedLinkFromFolderRequestBodySharedLinkField;
exports.serializeRemoveSharedLinkFromFolderRequestBody = serializeRemoveSharedLinkFromFolderRequestBody;
exports.deserializeRemoveSharedLinkFromFolderRequestBody = deserializeRemoveSharedLinkFromFolderRequestBody;
const folderFull_generated_js_1 = require("../schemas/folderFull.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class FindFolderForSharedLinkOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.FindFolderForSharedLinkOptionals = FindFolderForSharedLinkOptionals;
class GetSharedLinkForFolderOptionals {
    constructor(fields) {
        this.headers = new GetSharedLinkForFolderHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetSharedLinkForFolderOptionals = GetSharedLinkForFolderOptionals;
class AddShareLinkToFolderOptionals {
    constructor(fields) {
        this.headers = new AddShareLinkToFolderHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.AddShareLinkToFolderOptionals = AddShareLinkToFolderOptionals;
class UpdateSharedLinkOnFolderOptionals {
    constructor(fields) {
        this.headers = new UpdateSharedLinkOnFolderHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateSharedLinkOnFolderOptionals = UpdateSharedLinkOnFolderOptionals;
class RemoveSharedLinkFromFolderOptionals {
    constructor(fields) {
        this.headers = new RemoveSharedLinkFromFolderHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.RemoveSharedLinkFromFolderOptionals = RemoveSharedLinkFromFolderOptionals;
class FindFolderForSharedLinkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.ifNoneMatch !== undefined) {
            this.ifNoneMatch = fields.ifNoneMatch;
        }
        if (fields.boxapi !== undefined) {
            this.boxapi = fields.boxapi;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.FindFolderForSharedLinkHeaders = FindFolderForSharedLinkHeaders;
class GetSharedLinkForFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetSharedLinkForFolderHeaders = GetSharedLinkForFolderHeaders;
class AddShareLinkToFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.AddShareLinkToFolderHeaders = AddShareLinkToFolderHeaders;
class UpdateSharedLinkOnFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateSharedLinkOnFolderHeaders = UpdateSharedLinkOnFolderHeaders;
class RemoveSharedLinkFromFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.RemoveSharedLinkFromFolderHeaders = RemoveSharedLinkFromFolderHeaders;
class SharedLinksFoldersManager {
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
     * Return the folder represented by a shared link.
     *
     * A shared folder can be represented by a shared link,
     * which can originate within the current enterprise or within another.
     *
     * This endpoint allows an application to retrieve information about a
     * shared folder when only given a shared link.
     * @param {FindFolderForSharedLinkQueryParams} queryParams Query parameters of findFolderForSharedLink method
     * @param {FindFolderForSharedLinkHeadersInput} headersInput Headers of findFolderForSharedLink method
     * @param {FindFolderForSharedLinkOptionalsInput} optionalsInput
     * @returns {Promise<FolderFull>}
     */
    findFolderForSharedLink() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput, optionalsInput = {}) {
            const headers = new FindFolderForSharedLinkHeaders({
                ifNoneMatch: headersInput.ifNoneMatch,
                boxapi: headersInput.boxapi,
                extraHeaders: headersInput.extraHeaders,
            });
            const optionals = new FindFolderForSharedLinkOptionals({
                cancellationToken: optionalsInput.cancellationToken,
            });
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_4.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({
                ['if-none-match']: (0, utils_js_4.toString)(headers.ifNoneMatch),
                ['boxapi']: (0, utils_js_4.toString)(headers.boxapi),
            }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shared_items#folders'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, folderFull_generated_js_1.deserializeFolderFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Gets the information for a shared link on a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetSharedLinkForFolderQueryParams} queryParams Query parameters of getSharedLinkForFolder method
       * @param {GetSharedLinkForFolderOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    getSharedLinkForFolder(folderId_1, queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, queryParams, optionalsInput = {}) {
            const optionals = new GetSharedLinkForFolderOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({ ['fields']: (0, utils_js_4.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_4.toString)(folderId), '#get_shared_link'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, folderFull_generated_js_1.deserializeFolderFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Adds a shared link to a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {AddShareLinkToFolderRequestBody} requestBody Request body of addShareLinkToFolder method
       * @param {AddShareLinkToFolderQueryParams} queryParams Query parameters of addShareLinkToFolder method
       * @param {AddShareLinkToFolderOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    addShareLinkToFolder(folderId_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, requestBody = {}, queryParams, optionalsInput = {}) {
            const optionals = new AddShareLinkToFolderOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({ ['fields']: (0, utils_js_4.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_4.toString)(folderId), '#add_shared_link'),
                method: 'PUT',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeAddShareLinkToFolderRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, folderFull_generated_js_1.deserializeFolderFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates a shared link on a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {UpdateSharedLinkOnFolderRequestBody} requestBody Request body of updateSharedLinkOnFolder method
       * @param {UpdateSharedLinkOnFolderQueryParams} queryParams Query parameters of updateSharedLinkOnFolder method
       * @param {UpdateSharedLinkOnFolderOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    updateSharedLinkOnFolder(folderId_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, requestBody = {}, queryParams, optionalsInput = {}) {
            const optionals = new UpdateSharedLinkOnFolderOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({ ['fields']: (0, utils_js_4.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_4.toString)(folderId), '#update_shared_link'),
                method: 'PUT',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeUpdateSharedLinkOnFolderRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, folderFull_generated_js_1.deserializeFolderFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Removes a shared link from a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {RemoveSharedLinkFromFolderRequestBody} requestBody Request body of removeSharedLinkFromFolder method
       * @param {RemoveSharedLinkFromFolderQueryParams} queryParams Query parameters of removeSharedLinkFromFolder method
       * @param {RemoveSharedLinkFromFolderOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    removeSharedLinkFromFolder(folderId_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, requestBody = {}, queryParams, optionalsInput = {}) {
            const optionals = new RemoveSharedLinkFromFolderOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({ ['fields']: (0, utils_js_4.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_4.toString)(folderId), '#remove_shared_link'),
                method: 'PUT',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeRemoveSharedLinkFromFolderRequestBody(requestBody),
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
exports.SharedLinksFoldersManager = SharedLinksFoldersManager;
function serializeAddShareLinkToFolderRequestBodySharedLinkAccessField(val) {
    return val;
}
function deserializeAddShareLinkToFolderRequestBodySharedLinkAccessField(val) {
    if (val == 'open') {
        return val;
    }
    if (val == 'company') {
        return val;
    }
    if (val == 'collaborators') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AddShareLinkToFolderRequestBodySharedLinkAccessField",
    });
}
function serializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField(val) {
    return {
        ['can_download']: val.canDownload,
        ['can_preview']: val.canPreview,
        ['can_edit']: val.canEdit,
    };
}
function deserializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToFolderRequestBodySharedLinkPermissionsField"',
        });
    }
    if (!(val.can_download == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_download)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "AddShareLinkToFolderRequestBodySharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download == void 0 ? void 0 : val.can_download;
    if (!(val.can_preview == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_preview)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "AddShareLinkToFolderRequestBodySharedLinkPermissionsField"',
        });
    }
    const canPreview = val.can_preview == void 0 ? void 0 : val.can_preview;
    if (!(val.can_edit == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_edit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_edit" of type "AddShareLinkToFolderRequestBodySharedLinkPermissionsField"',
        });
    }
    const canEdit = val.can_edit == void 0 ? void 0 : val.can_edit;
    return {
        canDownload: canDownload,
        canPreview: canPreview,
        canEdit: canEdit,
    };
}
function serializeAddShareLinkToFolderRequestBodySharedLinkField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeAddShareLinkToFolderRequestBodySharedLinkAccessField(val.access),
        ['password']: val.password,
        ['vanity_name']: val.vanityName,
        ['unshared_at']: val.unsharedAt == void 0
            ? val.unsharedAt
            : (0, utils_js_1.serializeDateTime)(val.unsharedAt),
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField(val.permissions),
    };
}
function deserializeAddShareLinkToFolderRequestBodySharedLinkField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToFolderRequestBodySharedLinkField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeAddShareLinkToFolderRequestBodySharedLinkAccessField(val.access);
    if (!(val.password == void 0) && !(0, json_js_2.sdIsString)(val.password)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "password" of type "AddShareLinkToFolderRequestBodySharedLinkField"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.vanity_name == void 0) && !(0, json_js_2.sdIsString)(val.vanity_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "AddShareLinkToFolderRequestBodySharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    if (!(val.unshared_at == void 0) && !(0, json_js_2.sdIsString)(val.unshared_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "AddShareLinkToFolderRequestBodySharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.unshared_at);
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField(val.permissions);
    return {
        access: access,
        password: password,
        vanityName: vanityName,
        unsharedAt: unsharedAt,
        permissions: permissions,
    };
}
function serializeAddShareLinkToFolderRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeAddShareLinkToFolderRequestBodySharedLinkField(val.sharedLink),
    };
}
function deserializeAddShareLinkToFolderRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToFolderRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeAddShareLinkToFolderRequestBodySharedLinkField(val.shared_link);
    return { sharedLink: sharedLink };
}
function serializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField(val) {
    return val;
}
function deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField(val) {
    if (val == 'open') {
        return val;
    }
    if (val == 'company') {
        return val;
    }
    if (val == 'collaborators') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField",
    });
}
function serializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField(val) {
    return {
        ['can_download']: val.canDownload,
        ['can_preview']: val.canPreview,
        ['can_edit']: val.canEdit,
    };
}
function deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField"',
        });
    }
    if (!(val.can_download == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_download)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download == void 0 ? void 0 : val.can_download;
    if (!(val.can_preview == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_preview)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField"',
        });
    }
    const canPreview = val.can_preview == void 0 ? void 0 : val.can_preview;
    if (!(val.can_edit == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_edit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_edit" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField"',
        });
    }
    const canEdit = val.can_edit == void 0 ? void 0 : val.can_edit;
    return {
        canDownload: canDownload,
        canPreview: canPreview,
        canEdit: canEdit,
    };
}
function serializeUpdateSharedLinkOnFolderRequestBodySharedLinkField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField(val.access),
        ['password']: val.password,
        ['vanity_name']: val.vanityName,
        ['unshared_at']: val.unsharedAt == void 0
            ? val.unsharedAt
            : (0, utils_js_1.serializeDateTime)(val.unsharedAt),
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField(val.permissions),
    };
}
function deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnFolderRequestBodySharedLinkField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField(val.access);
    if (!(val.password == void 0) && !(0, json_js_2.sdIsString)(val.password)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "password" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkField"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.vanity_name == void 0) && !(0, json_js_2.sdIsString)(val.vanity_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    if (!(val.unshared_at == void 0) && !(0, json_js_2.sdIsString)(val.unshared_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.unshared_at);
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField(val.permissions);
    return {
        access: access,
        password: password,
        vanityName: vanityName,
        unsharedAt: unsharedAt,
        permissions: permissions,
    };
}
function serializeUpdateSharedLinkOnFolderRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeUpdateSharedLinkOnFolderRequestBodySharedLinkField(val.sharedLink),
    };
}
function deserializeUpdateSharedLinkOnFolderRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnFolderRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkField(val.shared_link);
    return {
        sharedLink: sharedLink,
    };
}
function serializeRemoveSharedLinkFromFolderRequestBodySharedLinkField(val) {
    return {};
}
function deserializeRemoveSharedLinkFromFolderRequestBodySharedLinkField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RemoveSharedLinkFromFolderRequestBodySharedLinkField"',
        });
    }
    return {};
}
function serializeRemoveSharedLinkFromFolderRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeRemoveSharedLinkFromFolderRequestBodySharedLinkField(val.sharedLink),
    };
}
function deserializeRemoveSharedLinkFromFolderRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RemoveSharedLinkFromFolderRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeRemoveSharedLinkFromFolderRequestBodySharedLinkField(val.shared_link);
    return {
        sharedLink: sharedLink,
    };
}
//# sourceMappingURL=sharedLinksFolders.generated.js.map