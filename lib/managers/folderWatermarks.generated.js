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
exports.FolderWatermarksManager = exports.DeleteFolderWatermarkHeaders = exports.UpdateFolderWatermarkHeaders = exports.UpdateFolderWatermarkRequestBodyWatermarkField = exports.GetFolderWatermarkHeaders = exports.DeleteFolderWatermarkOptionals = exports.UpdateFolderWatermarkOptionals = exports.GetFolderWatermarkOptionals = void 0;
exports.serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField = serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField;
exports.deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField = deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField;
exports.serializeUpdateFolderWatermarkRequestBodyWatermarkField = serializeUpdateFolderWatermarkRequestBodyWatermarkField;
exports.deserializeUpdateFolderWatermarkRequestBodyWatermarkField = deserializeUpdateFolderWatermarkRequestBodyWatermarkField;
exports.serializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput = serializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput;
exports.deserializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput = deserializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput;
exports.serializeUpdateFolderWatermarkRequestBody = serializeUpdateFolderWatermarkRequestBody;
exports.deserializeUpdateFolderWatermarkRequestBody = deserializeUpdateFolderWatermarkRequestBody;
const watermark_generated_js_1 = require("../schemas/watermark.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetFolderWatermarkOptionals {
    constructor(fields) {
        this.headers = new GetFolderWatermarkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFolderWatermarkOptionals = GetFolderWatermarkOptionals;
class UpdateFolderWatermarkOptionals {
    constructor(fields) {
        this.headers = new UpdateFolderWatermarkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateFolderWatermarkOptionals = UpdateFolderWatermarkOptionals;
class DeleteFolderWatermarkOptionals {
    constructor(fields) {
        this.headers = new DeleteFolderWatermarkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteFolderWatermarkOptionals = DeleteFolderWatermarkOptionals;
class GetFolderWatermarkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFolderWatermarkHeaders = GetFolderWatermarkHeaders;
class UpdateFolderWatermarkRequestBodyWatermarkField {
    constructor(fields) {
        /**
         * The type of watermark to apply.
         *
         * Currently only supports one option. */
        this.imprint = 'default';
        if (fields.imprint !== undefined) {
            this.imprint = fields.imprint;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.UpdateFolderWatermarkRequestBodyWatermarkField = UpdateFolderWatermarkRequestBodyWatermarkField;
class UpdateFolderWatermarkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateFolderWatermarkHeaders = UpdateFolderWatermarkHeaders;
class DeleteFolderWatermarkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteFolderWatermarkHeaders = DeleteFolderWatermarkHeaders;
class FolderWatermarksManager {
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
       * Retrieve the watermark for a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetFolderWatermarkOptionalsInput} optionalsInput
       * @returns {Promise<Watermark>}
       */
    getFolderWatermark(folderId_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, optionalsInput = {}) {
            const optionals = new GetFolderWatermarkOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/watermark'),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, watermark_generated_js_1.deserializeWatermark)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Applies or update a watermark on a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {UpdateFolderWatermarkRequestBody} requestBody Request body of updateFolderWatermark method
       * @param {UpdateFolderWatermarkOptionalsInput} optionalsInput
       * @returns {Promise<Watermark>}
       */
    updateFolderWatermark(folderId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, requestBody, optionalsInput = {}) {
            const optionals = new UpdateFolderWatermarkOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/watermark'),
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateFolderWatermarkRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, watermark_generated_js_1.deserializeWatermark)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Removes the watermark from a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {DeleteFolderWatermarkOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteFolderWatermark(folderId_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, optionalsInput = {}) {
            const optionals = new DeleteFolderWatermarkOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/watermark'),
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
exports.FolderWatermarksManager = FolderWatermarksManager;
function serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val) {
    return val;
}
function deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val) {
    if (val == 'default') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateFolderWatermarkRequestBodyWatermarkImprintField",
    });
}
function serializeUpdateFolderWatermarkRequestBodyWatermarkField(val) {
    return {
        ['imprint']: serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val.imprint),
    };
}
function deserializeUpdateFolderWatermarkRequestBodyWatermarkField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateFolderWatermarkRequestBodyWatermarkField"',
        });
    }
    if (val.imprint == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "imprint" of type "UpdateFolderWatermarkRequestBodyWatermarkField" to be defined',
        });
    }
    const imprint = deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val.imprint);
    return {
        imprint: imprint,
    };
}
function serializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput(val) {
    return {
        ['imprint']: val.imprint == void 0
            ? val.imprint
            : serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val.imprint),
    };
}
function deserializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateFolderWatermarkRequestBodyWatermarkFieldInput"',
        });
    }
    const imprint = val.imprint == void 0
        ? void 0
        : deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val.imprint);
    return {
        imprint: imprint,
    };
}
function serializeUpdateFolderWatermarkRequestBody(val) {
    return {
        ['watermark']: serializeUpdateFolderWatermarkRequestBodyWatermarkField(val.watermark),
    };
}
function deserializeUpdateFolderWatermarkRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateFolderWatermarkRequestBody"',
        });
    }
    if (val.watermark == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "watermark" of type "UpdateFolderWatermarkRequestBody" to be defined',
        });
    }
    const watermark = deserializeUpdateFolderWatermarkRequestBodyWatermarkField(val.watermark);
    return { watermark: watermark };
}
//# sourceMappingURL=folderWatermarks.generated.js.map