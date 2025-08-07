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
exports.UploadsManager = exports.UploadWithPreflightCheckHeaders = exports.UploadFileHeaders = exports.PreflightFileUploadCheckHeaders = exports.UploadFileVersionHeaders = exports.UploadWithPreflightCheckOptionals = exports.UploadFileOptionals = exports.UploadFileVersionOptionals = void 0;
exports.serializeUploadFileVersionRequestBodyAttributesField = serializeUploadFileVersionRequestBodyAttributesField;
exports.deserializeUploadFileVersionRequestBodyAttributesField = deserializeUploadFileVersionRequestBodyAttributesField;
exports.serializePreflightFileUploadCheckRequestBodyParentField = serializePreflightFileUploadCheckRequestBodyParentField;
exports.deserializePreflightFileUploadCheckRequestBodyParentField = deserializePreflightFileUploadCheckRequestBodyParentField;
exports.serializePreflightFileUploadCheckRequestBody = serializePreflightFileUploadCheckRequestBody;
exports.deserializePreflightFileUploadCheckRequestBody = deserializePreflightFileUploadCheckRequestBody;
exports.serializeUploadFileRequestBodyAttributesParentField = serializeUploadFileRequestBodyAttributesParentField;
exports.deserializeUploadFileRequestBodyAttributesParentField = deserializeUploadFileRequestBodyAttributesParentField;
exports.serializeUploadFileRequestBodyAttributesField = serializeUploadFileRequestBodyAttributesField;
exports.deserializeUploadFileRequestBodyAttributesField = deserializeUploadFileRequestBodyAttributesField;
exports.serializeUploadWithPreflightCheckRequestBodyAttributesParentField = serializeUploadWithPreflightCheckRequestBodyAttributesParentField;
exports.deserializeUploadWithPreflightCheckRequestBodyAttributesParentField = deserializeUploadWithPreflightCheckRequestBodyAttributesParentField;
exports.serializeUploadWithPreflightCheckRequestBodyAttributesField = serializeUploadWithPreflightCheckRequestBodyAttributesField;
exports.deserializeUploadWithPreflightCheckRequestBodyAttributesField = deserializeUploadWithPreflightCheckRequestBodyAttributesField;
const files_generated_js_1 = require("../schemas/files.generated.js");
const uploadUrl_generated_js_1 = require("../schemas/uploadUrl.generated.js");
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
class UploadFileVersionOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new UploadFileVersionHeaders({});
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
exports.UploadFileVersionOptionals = UploadFileVersionOptionals;
class UploadFileOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new UploadFileHeaders({});
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
exports.UploadFileOptionals = UploadFileOptionals;
class UploadWithPreflightCheckOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new UploadWithPreflightCheckHeaders({});
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
exports.UploadWithPreflightCheckOptionals = UploadWithPreflightCheckOptionals;
class UploadFileVersionHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.ifMatch !== undefined) {
            this.ifMatch = fields.ifMatch;
        }
        if (fields.contentMd5 !== undefined) {
            this.contentMd5 = fields.contentMd5;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UploadFileVersionHeaders = UploadFileVersionHeaders;
class PreflightFileUploadCheckHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.PreflightFileUploadCheckHeaders = PreflightFileUploadCheckHeaders;
class UploadFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.contentMd5 !== undefined) {
            this.contentMd5 = fields.contentMd5;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UploadFileHeaders = UploadFileHeaders;
class UploadWithPreflightCheckHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.contentMd5 !== undefined) {
            this.contentMd5 = fields.contentMd5;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UploadWithPreflightCheckHeaders = UploadWithPreflightCheckHeaders;
class UploadsManager {
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
       * Update a file's content. For file sizes over 50MB we recommend
       * using the Chunk Upload APIs.
       *
       * The `attributes` part of the body must come **before** the
       * `file` part. Requests that do not follow this format when
       * uploading the file will receive a HTTP `400` error with a
       * `metadata_after_file_contents` error code.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {UploadFileVersionRequestBody} requestBody Request body of uploadFileVersion method
       * @param {UploadFileVersionOptionalsInput} optionalsInput
       * @returns {Promise<Files>}
       */
    uploadFileVersion(fileId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, requestBody, optionalsInput = {}) {
            const optionals = new UploadFileVersionOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_4.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({
                ['if-match']: (0, utils_js_4.toString)(headers.ifMatch),
                ['content-md5']: (0, utils_js_4.toString)(headers.contentMd5),
            }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/', (0, utils_js_4.toString)(fileId), '/content'),
                method: 'POST',
                params: queryParamsMap,
                headers: headersMap,
                multipartData: [
                    {
                        partName: 'attributes',
                        data: serializeUploadFileVersionRequestBodyAttributesField(requestBody.attributes),
                    },
                    {
                        partName: 'file',
                        fileStream: requestBody.file,
                        fileName: requestBody.fileFileName,
                        contentType: requestBody.fileContentType,
                    },
                ],
                contentType: 'multipart/form-data',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, files_generated_js_1.deserializeFiles)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Performs a check to verify that a file will be accepted by Box
     * before you upload the entire file.
     * @param {PreflightFileUploadCheckRequestBody} requestBody Request body of preflightFileUploadCheck method
     * @param {PreflightFileUploadCheckHeadersInput} headersInput Headers of preflightFileUploadCheck method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<UploadUrl>}
     */
    preflightFileUploadCheck() {
        return __awaiter(this, arguments, void 0, function* (requestBody = {}, headersInput = new PreflightFileUploadCheckHeaders({}), cancellationToken) {
            const headers = new PreflightFileUploadCheckHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/content'),
                method: 'OPTIONS',
                headers: headersMap,
                data: serializePreflightFileUploadCheckRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, uploadUrl_generated_js_1.deserializeUploadUrl)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Uploads a small file to Box. For file sizes over 50MB we recommend
     * using the Chunk Upload APIs.
     *
     * The `attributes` part of the body must come **before** the
     * `file` part. Requests that do not follow this format when
     * uploading the file will receive a HTTP `400` error with a
     * `metadata_after_file_contents` error code.
     * @param {UploadFileRequestBody} requestBody Request body of uploadFile method
     * @param {UploadFileOptionalsInput} optionalsInput
     * @returns {Promise<Files>}
     */
    uploadFile(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new UploadFileOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_4.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({ ['content-md5']: (0, utils_js_4.toString)(headers.contentMd5) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/content'),
                method: 'POST',
                params: queryParamsMap,
                headers: headersMap,
                multipartData: [
                    {
                        partName: 'attributes',
                        data: serializeUploadFileRequestBodyAttributesField(requestBody.attributes),
                    },
                    {
                        partName: 'file',
                        fileStream: requestBody.file,
                        fileName: requestBody.fileFileName,
                        contentType: requestBody.fileContentType,
                    },
                ],
                contentType: 'multipart/form-data',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, files_generated_js_1.deserializeFiles)(response.data)), { rawData: response.data });
        });
    }
    /**
     *  Upload a file with a preflight check
     * @param {UploadWithPreflightCheckRequestBody} requestBody
     * @param {UploadWithPreflightCheckOptionalsInput} optionalsInput
     * @returns {Promise<Files>}
     */
    uploadWithPreflightCheck(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new UploadWithPreflightCheckOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_3.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_4.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({ ['content-md5']: (0, utils_js_4.toString)(headers.contentMd5) }, headers.extraHeaders));
            const preflightUploadUrl = yield this.preflightFileUploadCheck({
                name: requestBody.attributes.name,
                size: requestBody.attributes.size,
                parent: {
                    id: requestBody.attributes.parent.id,
                },
            }, {
                extraHeaders: headers.extraHeaders,
            }, cancellationToken);
            if (preflightUploadUrl.uploadUrl == void 0 ||
                !preflightUploadUrl.uploadUrl.includes('http')) {
                throw new errors_js_1.BoxSdkError({ message: 'Unable to get preflight upload URL' });
            }
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: preflightUploadUrl.uploadUrl,
                method: 'POST',
                params: queryParamsMap,
                headers: headersMap,
                multipartData: [
                    {
                        partName: 'attributes',
                        data: serializeUploadFileRequestBodyAttributesField(requestBody.attributes),
                    },
                    {
                        partName: 'file',
                        fileStream: requestBody.file,
                        fileName: requestBody.fileFileName,
                        contentType: requestBody.fileContentType,
                    },
                ],
                contentType: 'multipart/form-data',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, files_generated_js_1.deserializeFiles)(response.data)), { rawData: response.data });
        });
    }
}
exports.UploadsManager = UploadsManager;
function serializeUploadFileVersionRequestBodyAttributesField(val) {
    return {
        ['name']: val.name,
        ['content_modified_at']: val.contentModifiedAt == void 0
            ? val.contentModifiedAt
            : (0, utils_js_1.serializeDateTime)(val.contentModifiedAt),
    };
}
function deserializeUploadFileVersionRequestBodyAttributesField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UploadFileVersionRequestBodyAttributesField"',
        });
    }
    if (val.name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "name" of type "UploadFileVersionRequestBodyAttributesField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "UploadFileVersionRequestBodyAttributesField"',
        });
    }
    const name = val.name;
    if (!(val.content_modified_at == void 0) &&
        !(0, json_js_2.sdIsString)(val.content_modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "UploadFileVersionRequestBodyAttributesField"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.content_modified_at);
    return {
        name: name,
        contentModifiedAt: contentModifiedAt,
    };
}
function serializePreflightFileUploadCheckRequestBodyParentField(val) {
    return { ['id']: val.id };
}
function deserializePreflightFileUploadCheckRequestBodyParentField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "PreflightFileUploadCheckRequestBodyParentField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "PreflightFileUploadCheckRequestBodyParentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { id: id };
}
function serializePreflightFileUploadCheckRequestBody(val) {
    return {
        ['name']: val.name,
        ['size']: val.size,
        ['parent']: val.parent == void 0
            ? val.parent
            : serializePreflightFileUploadCheckRequestBodyParentField(val.parent),
    };
}
function deserializePreflightFileUploadCheckRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "PreflightFileUploadCheckRequestBody"',
        });
    }
    if (!(val.name == void 0) && !(0, json_js_2.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "PreflightFileUploadCheckRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.size == void 0) && !(0, json_js_1.sdIsNumber)(val.size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "size" of type "PreflightFileUploadCheckRequestBody"',
        });
    }
    const size = val.size == void 0 ? void 0 : val.size;
    const parent = val.parent == void 0
        ? void 0
        : deserializePreflightFileUploadCheckRequestBodyParentField(val.parent);
    return {
        name: name,
        size: size,
        parent: parent,
    };
}
function serializeUploadFileRequestBodyAttributesParentField(val) {
    return { ['id']: val.id };
}
function deserializeUploadFileRequestBodyAttributesParentField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UploadFileRequestBodyAttributesParentField"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "UploadFileRequestBodyAttributesParentField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UploadFileRequestBodyAttributesParentField"',
        });
    }
    const id = val.id;
    return { id: id };
}
function serializeUploadFileRequestBodyAttributesField(val) {
    return {
        ['name']: val.name,
        ['parent']: serializeUploadFileRequestBodyAttributesParentField(val.parent),
        ['content_created_at']: val.contentCreatedAt == void 0
            ? val.contentCreatedAt
            : (0, utils_js_1.serializeDateTime)(val.contentCreatedAt),
        ['content_modified_at']: val.contentModifiedAt == void 0
            ? val.contentModifiedAt
            : (0, utils_js_1.serializeDateTime)(val.contentModifiedAt),
    };
}
function deserializeUploadFileRequestBodyAttributesField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UploadFileRequestBodyAttributesField"',
        });
    }
    if (val.name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "name" of type "UploadFileRequestBodyAttributesField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "UploadFileRequestBodyAttributesField"',
        });
    }
    const name = val.name;
    if (val.parent == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "parent" of type "UploadFileRequestBodyAttributesField" to be defined',
        });
    }
    const parent = deserializeUploadFileRequestBodyAttributesParentField(val.parent);
    if (!(val.content_created_at == void 0) &&
        !(0, json_js_2.sdIsString)(val.content_created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content_created_at" of type "UploadFileRequestBodyAttributesField"',
        });
    }
    const contentCreatedAt = val.content_created_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.content_created_at);
    if (!(val.content_modified_at == void 0) &&
        !(0, json_js_2.sdIsString)(val.content_modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "UploadFileRequestBodyAttributesField"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.content_modified_at);
    return {
        name: name,
        parent: parent,
        contentCreatedAt: contentCreatedAt,
        contentModifiedAt: contentModifiedAt,
    };
}
function serializeUploadWithPreflightCheckRequestBodyAttributesParentField(val) {
    return { ['id']: val.id };
}
function deserializeUploadWithPreflightCheckRequestBodyAttributesParentField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UploadWithPreflightCheckRequestBodyAttributesParentField"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "UploadWithPreflightCheckRequestBodyAttributesParentField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UploadWithPreflightCheckRequestBodyAttributesParentField"',
        });
    }
    const id = val.id;
    return {
        id: id,
    };
}
function serializeUploadWithPreflightCheckRequestBodyAttributesField(val) {
    return {
        ['name']: val.name,
        ['parent']: serializeUploadWithPreflightCheckRequestBodyAttributesParentField(val.parent),
        ['content_created_at']: val.contentCreatedAt == void 0
            ? val.contentCreatedAt
            : (0, utils_js_1.serializeDateTime)(val.contentCreatedAt),
        ['content_modified_at']: val.contentModifiedAt == void 0
            ? val.contentModifiedAt
            : (0, utils_js_1.serializeDateTime)(val.contentModifiedAt),
        ['size']: val.size,
    };
}
function deserializeUploadWithPreflightCheckRequestBodyAttributesField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UploadWithPreflightCheckRequestBodyAttributesField"',
        });
    }
    if (val.name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "name" of type "UploadWithPreflightCheckRequestBodyAttributesField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "UploadWithPreflightCheckRequestBodyAttributesField"',
        });
    }
    const name = val.name;
    if (val.parent == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "parent" of type "UploadWithPreflightCheckRequestBodyAttributesField" to be defined',
        });
    }
    const parent = deserializeUploadWithPreflightCheckRequestBodyAttributesParentField(val.parent);
    if (!(val.content_created_at == void 0) &&
        !(0, json_js_2.sdIsString)(val.content_created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content_created_at" of type "UploadWithPreflightCheckRequestBodyAttributesField"',
        });
    }
    const contentCreatedAt = val.content_created_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.content_created_at);
    if (!(val.content_modified_at == void 0) &&
        !(0, json_js_2.sdIsString)(val.content_modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "UploadWithPreflightCheckRequestBodyAttributesField"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.content_modified_at);
    if (val.size == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "size" of type "UploadWithPreflightCheckRequestBodyAttributesField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsNumber)(val.size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "size" of type "UploadWithPreflightCheckRequestBodyAttributesField"',
        });
    }
    const size = val.size;
    return {
        name: name,
        parent: parent,
        contentCreatedAt: contentCreatedAt,
        contentModifiedAt: contentModifiedAt,
        size: size,
    };
}
//# sourceMappingURL=uploads.generated.js.map