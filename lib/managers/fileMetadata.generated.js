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
exports.FileMetadataManager = exports.DeleteFileMetadataByIdHeaders = exports.UpdateFileMetadataByIdHeaders = exports.CreateFileMetadataByIdHeaders = exports.GetFileMetadataByIdHeaders = exports.GetFileMetadataHeaders = exports.DeleteFileMetadataByIdOptionals = exports.UpdateFileMetadataByIdOptionals = exports.CreateFileMetadataByIdOptionals = exports.GetFileMetadataByIdOptionals = exports.GetFileMetadataOptionals = void 0;
exports.serializeGetFileMetadataByIdScope = serializeGetFileMetadataByIdScope;
exports.deserializeGetFileMetadataByIdScope = deserializeGetFileMetadataByIdScope;
exports.serializeCreateFileMetadataByIdScope = serializeCreateFileMetadataByIdScope;
exports.deserializeCreateFileMetadataByIdScope = deserializeCreateFileMetadataByIdScope;
exports.serializeCreateFileMetadataByIdRequestBody = serializeCreateFileMetadataByIdRequestBody;
exports.deserializeCreateFileMetadataByIdRequestBody = deserializeCreateFileMetadataByIdRequestBody;
exports.serializeUpdateFileMetadataByIdScope = serializeUpdateFileMetadataByIdScope;
exports.deserializeUpdateFileMetadataByIdScope = deserializeUpdateFileMetadataByIdScope;
exports.serializeUpdateFileMetadataByIdRequestBodyOpField = serializeUpdateFileMetadataByIdRequestBodyOpField;
exports.deserializeUpdateFileMetadataByIdRequestBodyOpField = deserializeUpdateFileMetadataByIdRequestBodyOpField;
exports.serializeUpdateFileMetadataByIdRequestBody = serializeUpdateFileMetadataByIdRequestBody;
exports.deserializeUpdateFileMetadataByIdRequestBody = deserializeUpdateFileMetadataByIdRequestBody;
exports.serializeDeleteFileMetadataByIdScope = serializeDeleteFileMetadataByIdScope;
exports.deserializeDeleteFileMetadataByIdScope = deserializeDeleteFileMetadataByIdScope;
const metadatas_generated_js_1 = require("../schemas/metadatas.generated.js");
const metadataFull_generated_js_1 = require("../schemas/metadataFull.generated.js");
const metadataInstanceValue_generated_js_1 = require("../schemas/metadataInstanceValue.generated.js");
const metadataInstanceValue_generated_js_2 = require("../schemas/metadataInstanceValue.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetFileMetadataOptionals {
    constructor(fields) {
        this.headers = new GetFileMetadataHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFileMetadataOptionals = GetFileMetadataOptionals;
class GetFileMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new GetFileMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFileMetadataByIdOptionals = GetFileMetadataByIdOptionals;
class CreateFileMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new CreateFileMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateFileMetadataByIdOptionals = CreateFileMetadataByIdOptionals;
class UpdateFileMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new UpdateFileMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateFileMetadataByIdOptionals = UpdateFileMetadataByIdOptionals;
class DeleteFileMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteFileMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteFileMetadataByIdOptionals = DeleteFileMetadataByIdOptionals;
class GetFileMetadataHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileMetadataHeaders = GetFileMetadataHeaders;
class GetFileMetadataByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileMetadataByIdHeaders = GetFileMetadataByIdHeaders;
class CreateFileMetadataByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateFileMetadataByIdHeaders = CreateFileMetadataByIdHeaders;
class UpdateFileMetadataByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateFileMetadataByIdHeaders = UpdateFileMetadataByIdHeaders;
class DeleteFileMetadataByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteFileMetadataByIdHeaders = DeleteFileMetadataByIdHeaders;
class FileMetadataManager {
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
       * Retrieves all metadata for a given file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileMetadataOptionalsInput} optionalsInput
       * @returns {Promise<Metadatas>}
       */
    getFileMetadata(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new GetFileMetadataOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata'),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, metadatas_generated_js_1.deserializeMetadatas)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves the instance of a metadata template that has been applied to a
       * file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {GetFileMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataFull>}
       */
    getFileMetadataById(fileId_1, scope_1, templateKey_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, scope, templateKey, optionalsInput = {}) {
            const optionals = new GetFileMetadataByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata/', (0, utils_js_2.toString)(scope), '/', (0, utils_js_2.toString)(templateKey)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, metadataFull_generated_js_1.deserializeMetadataFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Applies an instance of a metadata template to a file.
       *
       * In most cases only values that are present in the metadata template
       * will be accepted, except for the `global.properties` template which accepts
       * any key-value pair.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {CreateFileMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {CreateFileMetadataByIdRequestBody} requestBody Request body of createFileMetadataById method
       * @param {CreateFileMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataFull>}
       */
    createFileMetadataById(fileId_1, scope_1, templateKey_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, scope, templateKey, requestBody, optionalsInput = {}) {
            const optionals = new CreateFileMetadataByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata/', (0, utils_js_2.toString)(scope), '/', (0, utils_js_2.toString)(templateKey)),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateFileMetadataByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, metadataFull_generated_js_1.deserializeMetadataFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates a piece of metadata on a file.
       *
       * The metadata instance can only be updated if the template has already been
       * applied to the file before. When editing metadata, only values that match
       * the metadata template schema will be accepted.
       *
       * The update is applied atomically. If any errors occur during the
       * application of the operations, the metadata instance will not be changed.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {UpdateFileMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {readonly UpdateFileMetadataByIdRequestBody[]} requestBody Request body of updateFileMetadataById method
       * @param {UpdateFileMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataFull>}
       */
    updateFileMetadataById(fileId_1, scope_1, templateKey_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, scope, templateKey, requestBody, optionalsInput = {}) {
            const optionals = new UpdateFileMetadataByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata/', (0, utils_js_2.toString)(scope), '/', (0, utils_js_2.toString)(templateKey)),
                method: 'PUT',
                headers: headersMap,
                data: requestBody.map(serializeUpdateFileMetadataByIdRequestBody),
                contentType: 'application/json-patch+json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, metadataFull_generated_js_1.deserializeMetadataFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Deletes a piece of file metadata.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {DeleteFileMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {DeleteFileMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteFileMetadataById(fileId_1, scope_1, templateKey_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, scope, templateKey, optionalsInput = {}) {
            const optionals = new DeleteFileMetadataByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/metadata/', (0, utils_js_2.toString)(scope), '/', (0, utils_js_2.toString)(templateKey)),
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
exports.FileMetadataManager = FileMetadataManager;
function serializeGetFileMetadataByIdScope(val) {
    return val;
}
function deserializeGetFileMetadataByIdScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetFileMetadataByIdScope",
    });
}
function serializeCreateFileMetadataByIdScope(val) {
    return val;
}
function deserializeCreateFileMetadataByIdScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateFileMetadataByIdScope",
    });
}
function serializeCreateFileMetadataByIdRequestBody(val) {
    return Object.fromEntries(Object.entries(val).map(([k, v]) => [
        k,
        (function (v) {
            return v;
        })(v),
    ]));
}
function deserializeCreateFileMetadataByIdRequestBody(val) {
    return (0, json_js_2.sdIsMap)(val)
        ? Object.fromEntries(Object.entries(val).map(([k, v]) => [
            k,
            (function (v) {
                return v;
            })(v),
        ]))
        : {};
}
function serializeUpdateFileMetadataByIdScope(val) {
    return val;
}
function deserializeUpdateFileMetadataByIdScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateFileMetadataByIdScope",
    });
}
function serializeUpdateFileMetadataByIdRequestBodyOpField(val) {
    return val;
}
function deserializeUpdateFileMetadataByIdRequestBodyOpField(val) {
    if (val == 'add') {
        return val;
    }
    if (val == 'replace') {
        return val;
    }
    if (val == 'remove') {
        return val;
    }
    if (val == 'test') {
        return val;
    }
    if (val == 'move') {
        return val;
    }
    if (val == 'copy') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateFileMetadataByIdRequestBodyOpField",
    });
}
function serializeUpdateFileMetadataByIdRequestBody(val) {
    return {
        ['op']: val.op == void 0
            ? val.op
            : serializeUpdateFileMetadataByIdRequestBodyOpField(val.op),
        ['path']: val.path,
        ['value']: val.value == void 0
            ? val.value
            : (0, metadataInstanceValue_generated_js_1.serializeMetadataInstanceValue)(val.value),
        ['from']: val.from,
    };
}
function deserializeUpdateFileMetadataByIdRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateFileMetadataByIdRequestBody"',
        });
    }
    const op = val.op == void 0
        ? void 0
        : deserializeUpdateFileMetadataByIdRequestBodyOpField(val.op);
    if (!(val.path == void 0) && !(0, json_js_1.sdIsString)(val.path)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "path" of type "UpdateFileMetadataByIdRequestBody"',
        });
    }
    const path = val.path == void 0 ? void 0 : val.path;
    const value = val.value == void 0 ? void 0 : (0, metadataInstanceValue_generated_js_2.deserializeMetadataInstanceValue)(val.value);
    if (!(val.from == void 0) && !(0, json_js_1.sdIsString)(val.from)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "from" of type "UpdateFileMetadataByIdRequestBody"',
        });
    }
    const from = val.from == void 0 ? void 0 : val.from;
    return {
        op: op,
        path: path,
        value: value,
        from: from,
    };
}
function serializeDeleteFileMetadataByIdScope(val) {
    return val;
}
function deserializeDeleteFileMetadataByIdScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize DeleteFileMetadataByIdScope",
    });
}
//# sourceMappingURL=fileMetadata.generated.js.map