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
exports.SharedLinksFilesManager = exports.RemoveSharedLinkFromFileHeaders = exports.UpdateSharedLinkOnFileHeaders = exports.AddShareLinkToFileHeaders = exports.GetSharedLinkForFileHeaders = exports.FindFileForSharedLinkHeaders = exports.RemoveSharedLinkFromFileOptionals = exports.UpdateSharedLinkOnFileOptionals = exports.AddShareLinkToFileOptionals = exports.GetSharedLinkForFileOptionals = exports.FindFileForSharedLinkOptionals = void 0;
exports.serializeAddShareLinkToFileRequestBodySharedLinkAccessField = serializeAddShareLinkToFileRequestBodySharedLinkAccessField;
exports.deserializeAddShareLinkToFileRequestBodySharedLinkAccessField = deserializeAddShareLinkToFileRequestBodySharedLinkAccessField;
exports.serializeAddShareLinkToFileRequestBodySharedLinkPermissionsField = serializeAddShareLinkToFileRequestBodySharedLinkPermissionsField;
exports.deserializeAddShareLinkToFileRequestBodySharedLinkPermissionsField = deserializeAddShareLinkToFileRequestBodySharedLinkPermissionsField;
exports.serializeAddShareLinkToFileRequestBodySharedLinkField = serializeAddShareLinkToFileRequestBodySharedLinkField;
exports.deserializeAddShareLinkToFileRequestBodySharedLinkField = deserializeAddShareLinkToFileRequestBodySharedLinkField;
exports.serializeAddShareLinkToFileRequestBody = serializeAddShareLinkToFileRequestBody;
exports.deserializeAddShareLinkToFileRequestBody = deserializeAddShareLinkToFileRequestBody;
exports.serializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField = serializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField;
exports.deserializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField = deserializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField;
exports.serializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField = serializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField;
exports.deserializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField = deserializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField;
exports.serializeUpdateSharedLinkOnFileRequestBodySharedLinkField = serializeUpdateSharedLinkOnFileRequestBodySharedLinkField;
exports.deserializeUpdateSharedLinkOnFileRequestBodySharedLinkField = deserializeUpdateSharedLinkOnFileRequestBodySharedLinkField;
exports.serializeUpdateSharedLinkOnFileRequestBody = serializeUpdateSharedLinkOnFileRequestBody;
exports.deserializeUpdateSharedLinkOnFileRequestBody = deserializeUpdateSharedLinkOnFileRequestBody;
exports.serializeRemoveSharedLinkFromFileRequestBodySharedLinkField = serializeRemoveSharedLinkFromFileRequestBodySharedLinkField;
exports.deserializeRemoveSharedLinkFromFileRequestBodySharedLinkField = deserializeRemoveSharedLinkFromFileRequestBodySharedLinkField;
exports.serializeRemoveSharedLinkFromFileRequestBody = serializeRemoveSharedLinkFromFileRequestBody;
exports.deserializeRemoveSharedLinkFromFileRequestBody = deserializeRemoveSharedLinkFromFileRequestBody;
const fileFull_generated_js_1 = require("../schemas/fileFull.generated.js");
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
class FindFileForSharedLinkOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.FindFileForSharedLinkOptionals = FindFileForSharedLinkOptionals;
class GetSharedLinkForFileOptionals {
    constructor(fields) {
        this.headers = new GetSharedLinkForFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetSharedLinkForFileOptionals = GetSharedLinkForFileOptionals;
class AddShareLinkToFileOptionals {
    constructor(fields) {
        this.headers = new AddShareLinkToFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.AddShareLinkToFileOptionals = AddShareLinkToFileOptionals;
class UpdateSharedLinkOnFileOptionals {
    constructor(fields) {
        this.headers = new UpdateSharedLinkOnFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateSharedLinkOnFileOptionals = UpdateSharedLinkOnFileOptionals;
class RemoveSharedLinkFromFileOptionals {
    constructor(fields) {
        this.headers = new RemoveSharedLinkFromFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.RemoveSharedLinkFromFileOptionals = RemoveSharedLinkFromFileOptionals;
class FindFileForSharedLinkHeaders {
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
exports.FindFileForSharedLinkHeaders = FindFileForSharedLinkHeaders;
class GetSharedLinkForFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetSharedLinkForFileHeaders = GetSharedLinkForFileHeaders;
class AddShareLinkToFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.AddShareLinkToFileHeaders = AddShareLinkToFileHeaders;
class UpdateSharedLinkOnFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateSharedLinkOnFileHeaders = UpdateSharedLinkOnFileHeaders;
class RemoveSharedLinkFromFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.RemoveSharedLinkFromFileHeaders = RemoveSharedLinkFromFileHeaders;
class SharedLinksFilesManager {
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
     * Returns the file represented by a shared link.
     *
     * A shared file can be represented by a shared link,
     * which can originate within the current enterprise or within another.
     *
     * This endpoint allows an application to retrieve information about a
     * shared file when only given a shared link.
     *
     * The `shared_link_permission_options` array field can be returned
     * by requesting it in the `fields` query parameter.
     * @param {FindFileForSharedLinkQueryParams} queryParams Query parameters of findFileForSharedLink method
     * @param {FindFileForSharedLinkHeadersInput} headersInput Headers of findFileForSharedLink method
     * @param {FindFileForSharedLinkOptionalsInput} optionalsInput
     * @returns {Promise<FileFull>}
     */
    findFileForSharedLink() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput, optionalsInput = {}) {
            const headers = new FindFileForSharedLinkHeaders({
                ifNoneMatch: headersInput.ifNoneMatch,
                boxapi: headersInput.boxapi,
                extraHeaders: headersInput.extraHeaders,
            });
            const optionals = new FindFileForSharedLinkOptionals({
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
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shared_items'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, fileFull_generated_js_1.deserializeFileFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Gets the information for a shared link on a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetSharedLinkForFileQueryParams} queryParams Query parameters of getSharedLinkForFile method
       * @param {GetSharedLinkForFileOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    getSharedLinkForFile(fileId_1, queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, queryParams, optionalsInput = {}) {
            const optionals = new GetSharedLinkForFileOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({ ['fields']: (0, utils_js_4.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_4.toString)(fileId), '#get_shared_link'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, fileFull_generated_js_1.deserializeFileFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Adds a shared link to a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {AddShareLinkToFileRequestBody} requestBody Request body of addShareLinkToFile method
       * @param {AddShareLinkToFileQueryParams} queryParams Query parameters of addShareLinkToFile method
       * @param {AddShareLinkToFileOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    addShareLinkToFile(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, requestBody = {}, queryParams, optionalsInput = {}) {
            const optionals = new AddShareLinkToFileOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({ ['fields']: (0, utils_js_4.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_4.toString)(fileId), '#add_shared_link'),
                method: 'PUT',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeAddShareLinkToFileRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, fileFull_generated_js_1.deserializeFileFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates a shared link on a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {UpdateSharedLinkOnFileRequestBody} requestBody Request body of updateSharedLinkOnFile method
       * @param {UpdateSharedLinkOnFileQueryParams} queryParams Query parameters of updateSharedLinkOnFile method
       * @param {UpdateSharedLinkOnFileOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    updateSharedLinkOnFile(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, requestBody = {}, queryParams, optionalsInput = {}) {
            const optionals = new UpdateSharedLinkOnFileOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({ ['fields']: (0, utils_js_4.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_4.toString)(fileId), '#update_shared_link'),
                method: 'PUT',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeUpdateSharedLinkOnFileRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, fileFull_generated_js_1.deserializeFileFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Removes a shared link from a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {RemoveSharedLinkFromFileRequestBody} requestBody Request body of removeSharedLinkFromFile method
       * @param {RemoveSharedLinkFromFileQueryParams} queryParams Query parameters of removeSharedLinkFromFile method
       * @param {RemoveSharedLinkFromFileOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    removeSharedLinkFromFile(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, requestBody = {}, queryParams, optionalsInput = {}) {
            const optionals = new RemoveSharedLinkFromFileOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({ ['fields']: (0, utils_js_4.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_4.toString)(fileId), '#remove_shared_link'),
                method: 'PUT',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeRemoveSharedLinkFromFileRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, fileFull_generated_js_1.deserializeFileFull)(response.data)), { rawData: response.data });
        });
    }
}
exports.SharedLinksFilesManager = SharedLinksFilesManager;
function serializeAddShareLinkToFileRequestBodySharedLinkAccessField(val) {
    return val;
}
function deserializeAddShareLinkToFileRequestBodySharedLinkAccessField(val) {
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
        message: "Can't deserialize AddShareLinkToFileRequestBodySharedLinkAccessField",
    });
}
function serializeAddShareLinkToFileRequestBodySharedLinkPermissionsField(val) {
    return {
        ['can_download']: val.canDownload,
        ['can_preview']: val.canPreview,
        ['can_edit']: val.canEdit,
    };
}
function deserializeAddShareLinkToFileRequestBodySharedLinkPermissionsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToFileRequestBodySharedLinkPermissionsField"',
        });
    }
    if (!(val.can_download == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_download)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "AddShareLinkToFileRequestBodySharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download == void 0 ? void 0 : val.can_download;
    if (!(val.can_preview == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_preview)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "AddShareLinkToFileRequestBodySharedLinkPermissionsField"',
        });
    }
    const canPreview = val.can_preview == void 0 ? void 0 : val.can_preview;
    if (!(val.can_edit == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_edit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_edit" of type "AddShareLinkToFileRequestBodySharedLinkPermissionsField"',
        });
    }
    const canEdit = val.can_edit == void 0 ? void 0 : val.can_edit;
    return {
        canDownload: canDownload,
        canPreview: canPreview,
        canEdit: canEdit,
    };
}
function serializeAddShareLinkToFileRequestBodySharedLinkField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeAddShareLinkToFileRequestBodySharedLinkAccessField(val.access),
        ['password']: val.password,
        ['vanity_name']: val.vanityName,
        ['unshared_at']: val.unsharedAt == void 0
            ? val.unsharedAt
            : (0, utils_js_1.serializeDateTime)(val.unsharedAt),
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeAddShareLinkToFileRequestBodySharedLinkPermissionsField(val.permissions),
    };
}
function deserializeAddShareLinkToFileRequestBodySharedLinkField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToFileRequestBodySharedLinkField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeAddShareLinkToFileRequestBodySharedLinkAccessField(val.access);
    if (!(val.password == void 0) && !(0, json_js_2.sdIsString)(val.password)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "password" of type "AddShareLinkToFileRequestBodySharedLinkField"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.vanity_name == void 0) && !(0, json_js_2.sdIsString)(val.vanity_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "AddShareLinkToFileRequestBodySharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    if (!(val.unshared_at == void 0) && !(0, json_js_2.sdIsString)(val.unshared_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "AddShareLinkToFileRequestBodySharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.unshared_at);
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeAddShareLinkToFileRequestBodySharedLinkPermissionsField(val.permissions);
    return {
        access: access,
        password: password,
        vanityName: vanityName,
        unsharedAt: unsharedAt,
        permissions: permissions,
    };
}
function serializeAddShareLinkToFileRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeAddShareLinkToFileRequestBodySharedLinkField(val.sharedLink),
    };
}
function deserializeAddShareLinkToFileRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToFileRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeAddShareLinkToFileRequestBodySharedLinkField(val.shared_link);
    return { sharedLink: sharedLink };
}
function serializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField(val) {
    return val;
}
function deserializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField(val) {
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
        message: "Can't deserialize UpdateSharedLinkOnFileRequestBodySharedLinkAccessField",
    });
}
function serializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField(val) {
    return {
        ['can_download']: val.canDownload,
        ['can_preview']: val.canPreview,
        ['can_edit']: val.canEdit,
    };
}
function deserializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField"',
        });
    }
    if (!(val.can_download == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_download)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download == void 0 ? void 0 : val.can_download;
    if (!(val.can_preview == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_preview)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField"',
        });
    }
    const canPreview = val.can_preview == void 0 ? void 0 : val.can_preview;
    if (!(val.can_edit == void 0) && !(0, json_js_1.sdIsBoolean)(val.can_edit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_edit" of type "UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField"',
        });
    }
    const canEdit = val.can_edit == void 0 ? void 0 : val.can_edit;
    return {
        canDownload: canDownload,
        canPreview: canPreview,
        canEdit: canEdit,
    };
}
function serializeUpdateSharedLinkOnFileRequestBodySharedLinkField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField(val.access),
        ['password']: val.password,
        ['vanity_name']: val.vanityName,
        ['unshared_at']: val.unsharedAt == void 0
            ? val.unsharedAt
            : (0, utils_js_1.serializeDateTime)(val.unsharedAt),
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField(val.permissions),
    };
}
function deserializeUpdateSharedLinkOnFileRequestBodySharedLinkField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnFileRequestBodySharedLinkField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField(val.access);
    if (!(val.password == void 0) && !(0, json_js_2.sdIsString)(val.password)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "password" of type "UpdateSharedLinkOnFileRequestBodySharedLinkField"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.vanity_name == void 0) && !(0, json_js_2.sdIsString)(val.vanity_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "UpdateSharedLinkOnFileRequestBodySharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    if (!(val.unshared_at == void 0) && !(0, json_js_2.sdIsString)(val.unshared_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "UpdateSharedLinkOnFileRequestBodySharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.unshared_at);
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField(val.permissions);
    return {
        access: access,
        password: password,
        vanityName: vanityName,
        unsharedAt: unsharedAt,
        permissions: permissions,
    };
}
function serializeUpdateSharedLinkOnFileRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeUpdateSharedLinkOnFileRequestBodySharedLinkField(val.sharedLink),
    };
}
function deserializeUpdateSharedLinkOnFileRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnFileRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnFileRequestBodySharedLinkField(val.shared_link);
    return { sharedLink: sharedLink };
}
function serializeRemoveSharedLinkFromFileRequestBodySharedLinkField(val) {
    return {};
}
function deserializeRemoveSharedLinkFromFileRequestBodySharedLinkField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RemoveSharedLinkFromFileRequestBodySharedLinkField"',
        });
    }
    return {};
}
function serializeRemoveSharedLinkFromFileRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeRemoveSharedLinkFromFileRequestBodySharedLinkField(val.sharedLink),
    };
}
function deserializeRemoveSharedLinkFromFileRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RemoveSharedLinkFromFileRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeRemoveSharedLinkFromFileRequestBodySharedLinkField(val.shared_link);
    return {
        sharedLink: sharedLink,
    };
}
//# sourceMappingURL=sharedLinksFiles.generated.js.map