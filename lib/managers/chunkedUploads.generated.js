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
exports.ChunkedUploadsManager = exports.CreateFileUploadSessionCommitHeaders = exports.CreateFileUploadSessionCommitByUrlHeaders = exports.GetFileUploadSessionPartsHeaders = exports.GetFileUploadSessionPartsByUrlHeaders = exports.DeleteFileUploadSessionByIdHeaders = exports.DeleteFileUploadSessionByUrlHeaders = exports.UploadFilePartHeaders = exports.UploadFilePartByUrlHeaders = exports.GetFileUploadSessionByIdHeaders = exports.GetFileUploadSessionByUrlHeaders = exports.CreateFileUploadSessionForExistingFileHeaders = exports.CreateFileUploadSessionHeaders = exports.CreateFileUploadSessionCommitOptionals = exports.CreateFileUploadSessionCommitByUrlOptionals = exports.GetFileUploadSessionPartsOptionals = exports.GetFileUploadSessionPartsByUrlOptionals = exports.DeleteFileUploadSessionByIdOptionals = exports.DeleteFileUploadSessionByUrlOptionals = exports.UploadFilePartOptionals = exports.UploadFilePartByUrlOptionals = exports.GetFileUploadSessionByIdOptionals = exports.GetFileUploadSessionByUrlOptionals = exports.CreateFileUploadSessionForExistingFileOptionals = exports.CreateFileUploadSessionOptionals = void 0;
exports.serializeCreateFileUploadSessionRequestBody = serializeCreateFileUploadSessionRequestBody;
exports.deserializeCreateFileUploadSessionRequestBody = deserializeCreateFileUploadSessionRequestBody;
exports.serializeCreateFileUploadSessionForExistingFileRequestBody = serializeCreateFileUploadSessionForExistingFileRequestBody;
exports.deserializeCreateFileUploadSessionForExistingFileRequestBody = deserializeCreateFileUploadSessionForExistingFileRequestBody;
exports.serializeCreateFileUploadSessionCommitByUrlRequestBody = serializeCreateFileUploadSessionCommitByUrlRequestBody;
exports.deserializeCreateFileUploadSessionCommitByUrlRequestBody = deserializeCreateFileUploadSessionCommitByUrlRequestBody;
exports.serializeCreateFileUploadSessionCommitRequestBody = serializeCreateFileUploadSessionCommitRequestBody;
exports.deserializeCreateFileUploadSessionCommitRequestBody = deserializeCreateFileUploadSessionCommitRequestBody;
const uploadSession_generated_js_1 = require("../schemas/uploadSession.generated.js");
const uploadedPart_generated_js_1 = require("../schemas/uploadedPart.generated.js");
const uploadParts_generated_js_1 = require("../schemas/uploadParts.generated.js");
const files_generated_js_1 = require("../schemas/files.generated.js");
const uploadPart_generated_js_1 = require("../schemas/uploadPart.generated.js");
const uploadPart_generated_js_2 = require("../schemas/uploadPart.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const utils_js_5 = require("../internal/utils.js");
const utils_js_6 = require("../internal/utils.js");
const utils_js_7 = require("../internal/utils.js");
const utils_js_8 = require("../internal/utils.js");
const utils_js_9 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
class CreateFileUploadSessionOptionals {
    constructor(fields) {
        this.headers = new CreateFileUploadSessionHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateFileUploadSessionOptionals = CreateFileUploadSessionOptionals;
class CreateFileUploadSessionForExistingFileOptionals {
    constructor(fields) {
        this.headers = new CreateFileUploadSessionForExistingFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateFileUploadSessionForExistingFileOptionals = CreateFileUploadSessionForExistingFileOptionals;
class GetFileUploadSessionByUrlOptionals {
    constructor(fields) {
        this.headers = new GetFileUploadSessionByUrlHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFileUploadSessionByUrlOptionals = GetFileUploadSessionByUrlOptionals;
class GetFileUploadSessionByIdOptionals {
    constructor(fields) {
        this.headers = new GetFileUploadSessionByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetFileUploadSessionByIdOptionals = GetFileUploadSessionByIdOptionals;
class UploadFilePartByUrlOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UploadFilePartByUrlOptionals = UploadFilePartByUrlOptionals;
class UploadFilePartOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UploadFilePartOptionals = UploadFilePartOptionals;
class DeleteFileUploadSessionByUrlOptionals {
    constructor(fields) {
        this.headers = new DeleteFileUploadSessionByUrlHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteFileUploadSessionByUrlOptionals = DeleteFileUploadSessionByUrlOptionals;
class DeleteFileUploadSessionByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteFileUploadSessionByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteFileUploadSessionByIdOptionals = DeleteFileUploadSessionByIdOptionals;
class GetFileUploadSessionPartsByUrlOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFileUploadSessionPartsByUrlHeaders({});
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
exports.GetFileUploadSessionPartsByUrlOptionals = GetFileUploadSessionPartsByUrlOptionals;
class GetFileUploadSessionPartsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFileUploadSessionPartsHeaders({});
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
exports.GetFileUploadSessionPartsOptionals = GetFileUploadSessionPartsOptionals;
class CreateFileUploadSessionCommitByUrlOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateFileUploadSessionCommitByUrlOptionals = CreateFileUploadSessionCommitByUrlOptionals;
class CreateFileUploadSessionCommitOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateFileUploadSessionCommitOptionals = CreateFileUploadSessionCommitOptionals;
class CreateFileUploadSessionHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateFileUploadSessionHeaders = CreateFileUploadSessionHeaders;
class CreateFileUploadSessionForExistingFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateFileUploadSessionForExistingFileHeaders = CreateFileUploadSessionForExistingFileHeaders;
class GetFileUploadSessionByUrlHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileUploadSessionByUrlHeaders = GetFileUploadSessionByUrlHeaders;
class GetFileUploadSessionByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileUploadSessionByIdHeaders = GetFileUploadSessionByIdHeaders;
class UploadFilePartByUrlHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.digest !== undefined) {
            this.digest = fields.digest;
        }
        if (fields.contentRange !== undefined) {
            this.contentRange = fields.contentRange;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UploadFilePartByUrlHeaders = UploadFilePartByUrlHeaders;
class UploadFilePartHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.digest !== undefined) {
            this.digest = fields.digest;
        }
        if (fields.contentRange !== undefined) {
            this.contentRange = fields.contentRange;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UploadFilePartHeaders = UploadFilePartHeaders;
class DeleteFileUploadSessionByUrlHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteFileUploadSessionByUrlHeaders = DeleteFileUploadSessionByUrlHeaders;
class DeleteFileUploadSessionByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteFileUploadSessionByIdHeaders = DeleteFileUploadSessionByIdHeaders;
class GetFileUploadSessionPartsByUrlHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileUploadSessionPartsByUrlHeaders = GetFileUploadSessionPartsByUrlHeaders;
class GetFileUploadSessionPartsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileUploadSessionPartsHeaders = GetFileUploadSessionPartsHeaders;
class CreateFileUploadSessionCommitByUrlHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.digest !== undefined) {
            this.digest = fields.digest;
        }
        if (fields.ifMatch !== undefined) {
            this.ifMatch = fields.ifMatch;
        }
        if (fields.ifNoneMatch !== undefined) {
            this.ifNoneMatch = fields.ifNoneMatch;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateFileUploadSessionCommitByUrlHeaders = CreateFileUploadSessionCommitByUrlHeaders;
class CreateFileUploadSessionCommitHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.digest !== undefined) {
            this.digest = fields.digest;
        }
        if (fields.ifMatch !== undefined) {
            this.ifMatch = fields.ifMatch;
        }
        if (fields.ifNoneMatch !== undefined) {
            this.ifNoneMatch = fields.ifNoneMatch;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateFileUploadSessionCommitHeaders = CreateFileUploadSessionCommitHeaders;
class ChunkedUploadsManager {
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
     * Creates an upload session for a new file.
     * @param {CreateFileUploadSessionRequestBody} requestBody Request body of createFileUploadSession method
     * @param {CreateFileUploadSessionOptionalsInput} optionalsInput
     * @returns {Promise<UploadSession>}
     */
    createFileUploadSession(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateFileUploadSessionOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/upload_sessions'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateFileUploadSessionRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, uploadSession_generated_js_1.deserializeUploadSession)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Creates an upload session for an existing file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {CreateFileUploadSessionForExistingFileRequestBody} requestBody Request body of createFileUploadSessionForExistingFile method
       * @param {CreateFileUploadSessionForExistingFileOptionalsInput} optionalsInput
       * @returns {Promise<UploadSession>}
       */
    createFileUploadSessionForExistingFile(fileId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, requestBody, optionalsInput = {}) {
            const optionals = new CreateFileUploadSessionForExistingFileOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/upload_sessions'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateFileUploadSessionForExistingFileRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, uploadSession_generated_js_1.deserializeUploadSession)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Using this method with urls provided in response when creating a new upload session is preferred to use over GetFileUploadSessionById method.
     * This allows to always upload your content to the closest Box data center and can significantly improve upload speed.
     *  Return information about an upload session.
     *
     * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions) endpoint.
     * @param {string} url URL of getFileUploadSessionById method
     * @param {GetFileUploadSessionByUrlOptionalsInput} optionalsInput
     * @returns {Promise<UploadSession>}
     */
    getFileUploadSessionByUrl(url_1) {
        return __awaiter(this, arguments, void 0, function* (url, optionalsInput = {}) {
            const optionals = new GetFileUploadSessionByUrlOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: url,
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, uploadSession_generated_js_1.deserializeUploadSession)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Return information about an upload session.
       *
       * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions) endpoint.
       * @param {string} uploadSessionId The ID of the upload session.
      Example: "D5E3F7A"
       * @param {GetFileUploadSessionByIdOptionalsInput} optionalsInput
       * @returns {Promise<UploadSession>}
       */
    getFileUploadSessionById(uploadSessionId_1) {
        return __awaiter(this, arguments, void 0, function* (uploadSessionId, optionalsInput = {}) {
            const optionals = new GetFileUploadSessionByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/upload_sessions/', (0, utils_js_2.toString)(uploadSessionId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, uploadSession_generated_js_1.deserializeUploadSession)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Using this method with urls provided in response when creating a new upload session is preferred to use over UploadFilePart method.
     * This allows to always upload your content to the closest Box data center and can significantly improve upload speed.
     *  Uploads a chunk of a file for an upload session.
     *
     * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
     * and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
     * @param {string} url URL of uploadFilePart method
     * @param {ByteStream} requestBody Request body of uploadFilePart method
     * @param {UploadFilePartByUrlHeadersInput} headersInput Headers of uploadFilePart method
     * @param {UploadFilePartByUrlOptionalsInput} optionalsInput
     * @returns {Promise<UploadedPart>}
     */
    uploadFilePartByUrl(url_1, requestBody_1, headersInput_1) {
        return __awaiter(this, arguments, void 0, function* (url, requestBody, headersInput, optionalsInput = {}) {
            const headers = new UploadFilePartByUrlHeaders({
                digest: headersInput.digest,
                contentRange: headersInput.contentRange,
                extraHeaders: headersInput.extraHeaders,
            });
            const optionals = new UploadFilePartByUrlOptionals({
                cancellationToken: optionalsInput.cancellationToken,
            });
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({
                ['digest']: (0, utils_js_2.toString)(headers.digest),
                ['content-range']: (0, utils_js_2.toString)(headers.contentRange),
            }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: url,
                method: 'PUT',
                headers: headersMap,
                fileStream: requestBody,
                contentType: 'application/octet-stream',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, uploadedPart_generated_js_1.deserializeUploadedPart)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Uploads a chunk of a file for an upload session.
       *
       * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
       * and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
       * @param {string} uploadSessionId The ID of the upload session.
      Example: "D5E3F7A"
       * @param {ByteStream} requestBody Request body of uploadFilePart method
       * @param {UploadFilePartHeadersInput} headersInput Headers of uploadFilePart method
       * @param {UploadFilePartOptionalsInput} optionalsInput
       * @returns {Promise<UploadedPart>}
       */
    uploadFilePart(uploadSessionId_1, requestBody_1, headersInput_1) {
        return __awaiter(this, arguments, void 0, function* (uploadSessionId, requestBody, headersInput, optionalsInput = {}) {
            const headers = new UploadFilePartHeaders({
                digest: headersInput.digest,
                contentRange: headersInput.contentRange,
                extraHeaders: headersInput.extraHeaders,
            });
            const optionals = new UploadFilePartOptionals({
                cancellationToken: optionalsInput.cancellationToken,
            });
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({
                ['digest']: (0, utils_js_2.toString)(headers.digest),
                ['content-range']: (0, utils_js_2.toString)(headers.contentRange),
            }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/upload_sessions/', (0, utils_js_2.toString)(uploadSessionId)),
                method: 'PUT',
                headers: headersMap,
                fileStream: requestBody,
                contentType: 'application/octet-stream',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, uploadedPart_generated_js_1.deserializeUploadedPart)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Using this method with urls provided in response when creating a new upload session is preferred to use over DeleteFileUploadSessionById method.
     * This allows to always upload your content to the closest Box data center and can significantly improve upload speed.
     *  Abort an upload session and discard all data uploaded.
     *
     * This cannot be reversed.
     *
     * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
     * and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
     * @param {string} url URL of deleteFileUploadSessionById method
     * @param {DeleteFileUploadSessionByUrlOptionalsInput} optionalsInput
     * @returns {Promise<undefined>}
     */
    deleteFileUploadSessionByUrl(url_1) {
        return __awaiter(this, arguments, void 0, function* (url, optionalsInput = {}) {
            const optionals = new DeleteFileUploadSessionByUrlOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: url,
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
    /**
       * Abort an upload session and discard all data uploaded.
       *
       * This cannot be reversed.
       *
       * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
       * and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
       * @param {string} uploadSessionId The ID of the upload session.
      Example: "D5E3F7A"
       * @param {DeleteFileUploadSessionByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteFileUploadSessionById(uploadSessionId_1) {
        return __awaiter(this, arguments, void 0, function* (uploadSessionId, optionalsInput = {}) {
            const optionals = new DeleteFileUploadSessionByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/upload_sessions/', (0, utils_js_2.toString)(uploadSessionId)),
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
    /**
     * Using this method with urls provided in response when creating a new upload session is preferred to use over GetFileUploadSessionParts method.
     * This allows to always upload your content to the closest Box data center and can significantly improve upload speed.
     *  Return a list of the chunks uploaded to the upload session so far.
     *
     * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
     * and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
     * @param {string} url URL of getFileUploadSessionParts method
     * @param {GetFileUploadSessionPartsByUrlOptionalsInput} optionalsInput
     * @returns {Promise<UploadParts>}
     */
    getFileUploadSessionPartsByUrl(url_1) {
        return __awaiter(this, arguments, void 0, function* (url, optionalsInput = {}) {
            const optionals = new GetFileUploadSessionPartsByUrlOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['offset']: (0, utils_js_2.toString)(queryParams.offset),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: url,
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, uploadParts_generated_js_1.deserializeUploadParts)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Return a list of the chunks uploaded to the upload session so far.
       *
       * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
       * and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
       * @param {string} uploadSessionId The ID of the upload session.
      Example: "D5E3F7A"
       * @param {GetFileUploadSessionPartsOptionalsInput} optionalsInput
       * @returns {Promise<UploadParts>}
       */
    getFileUploadSessionParts(uploadSessionId_1) {
        return __awaiter(this, arguments, void 0, function* (uploadSessionId, optionalsInput = {}) {
            const optionals = new GetFileUploadSessionPartsOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['offset']: (0, utils_js_2.toString)(queryParams.offset),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/upload_sessions/', (0, utils_js_2.toString)(uploadSessionId), '/parts'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, uploadParts_generated_js_1.deserializeUploadParts)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Using this method with urls provided in response when creating a new upload session is preferred to use over CreateFileUploadSessionCommit method.
     * This allows to always upload your content to the closest Box data center and can significantly improve upload speed.
     *  Close an upload session and create a file from the uploaded chunks.
     *
     * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
     * and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
     * @param {string} url URL of createFileUploadSessionCommit method
     * @param {CreateFileUploadSessionCommitByUrlRequestBody} requestBody Request body of createFileUploadSessionCommit method
     * @param {CreateFileUploadSessionCommitByUrlHeadersInput} headersInput Headers of createFileUploadSessionCommit method
     * @param {CreateFileUploadSessionCommitByUrlOptionalsInput} optionalsInput
     * @returns {Promise<undefined | Files>}
     */
    createFileUploadSessionCommitByUrl(url_1, requestBody_1, headersInput_1) {
        return __awaiter(this, arguments, void 0, function* (url, requestBody, headersInput, optionalsInput = {}) {
            const headers = new CreateFileUploadSessionCommitByUrlHeaders({
                digest: headersInput.digest,
                ifMatch: headersInput.ifMatch,
                ifNoneMatch: headersInput.ifNoneMatch,
                extraHeaders: headersInput.extraHeaders,
            });
            const optionals = new CreateFileUploadSessionCommitByUrlOptionals({
                cancellationToken: optionalsInput.cancellationToken,
            });
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({
                ['digest']: (0, utils_js_2.toString)(headers.digest),
                ['if-match']: (0, utils_js_2.toString)(headers.ifMatch),
                ['if-none-match']: (0, utils_js_2.toString)(headers.ifNoneMatch),
            }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: url,
                method: 'POST',
                headers: headersMap,
                data: serializeCreateFileUploadSessionCommitRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            if ((0, utils_js_2.toString)(response.status) == '202') {
                return void 0;
            }
            return Object.assign(Object.assign({}, (0, files_generated_js_1.deserializeFiles)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Close an upload session and create a file from the uploaded chunks.
       *
       * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
       * and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
       * @param {string} uploadSessionId The ID of the upload session.
      Example: "D5E3F7A"
       * @param {CreateFileUploadSessionCommitRequestBody} requestBody Request body of createFileUploadSessionCommit method
       * @param {CreateFileUploadSessionCommitHeadersInput} headersInput Headers of createFileUploadSessionCommit method
       * @param {CreateFileUploadSessionCommitOptionalsInput} optionalsInput
       * @returns {Promise<undefined | Files>}
       */
    createFileUploadSessionCommit(uploadSessionId_1, requestBody_1, headersInput_1) {
        return __awaiter(this, arguments, void 0, function* (uploadSessionId, requestBody, headersInput, optionalsInput = {}) {
            const headers = new CreateFileUploadSessionCommitHeaders({
                digest: headersInput.digest,
                ifMatch: headersInput.ifMatch,
                ifNoneMatch: headersInput.ifNoneMatch,
                extraHeaders: headersInput.extraHeaders,
            });
            const optionals = new CreateFileUploadSessionCommitOptionals({
                cancellationToken: optionalsInput.cancellationToken,
            });
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({
                ['digest']: (0, utils_js_2.toString)(headers.digest),
                ['if-match']: (0, utils_js_2.toString)(headers.ifMatch),
                ['if-none-match']: (0, utils_js_2.toString)(headers.ifNoneMatch),
            }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/upload_sessions/', (0, utils_js_2.toString)(uploadSessionId), '/commit'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateFileUploadSessionCommitRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            if ((0, utils_js_2.toString)(response.status) == '202') {
                return void 0;
            }
            return Object.assign(Object.assign({}, (0, files_generated_js_1.deserializeFiles)(response.data)), { rawData: response.data });
        });
    }
    /**
     * @param {PartAccumulator} acc
     * @param {ByteStream} chunk
     * @returns {Promise<PartAccumulator>}
     */
    reducer(acc, chunk) {
        return __awaiter(this, void 0, void 0, function* () {
            const lastIndex = acc.lastIndex;
            const parts = acc.parts;
            const chunkBuffer = yield (0, utils_js_6.readByteStream)(chunk);
            const hash = new utils_js_8.Hash({ algorithm: 'sha1' });
            yield hash.updateHash(chunkBuffer);
            const sha1 = yield hash.digestHash('base64');
            const digest = ''.concat('sha=', sha1);
            const chunkSize = (0, utils_js_9.bufferLength)(chunkBuffer);
            const bytesStart = lastIndex + 1;
            const bytesEnd = lastIndex + chunkSize;
            const contentRange = ''.concat('bytes ', (0, utils_js_2.toString)(bytesStart), '-', (0, utils_js_2.toString)(bytesEnd), '/', (0, utils_js_2.toString)(acc.fileSize));
            const uploadedPart = yield this.uploadFilePartByUrl(acc.uploadPartUrl, (0, utils_js_3.generateByteStreamFromBuffer)(chunkBuffer), {
                digest: digest,
                contentRange: contentRange,
            });
            const part = uploadedPart.part;
            const partSha1 = (0, utils_js_4.hexToBase64)(part.sha1);
            if (!(partSha1 == sha1)) {
                throw new Error('Assertion failed');
            }
            if (!(part.size == chunkSize)) {
                throw new Error('Assertion failed');
            }
            if (!(part.offset == bytesStart)) {
                throw new Error('Assertion failed');
            }
            yield acc.fileHash.updateHash(chunkBuffer);
            return {
                lastIndex: bytesEnd,
                parts: parts.concat([part]),
                fileSize: acc.fileSize,
                uploadPartUrl: acc.uploadPartUrl,
                fileHash: acc.fileHash,
            };
        });
    }
    /**
     * Starts the process of chunk uploading a big file. Should return a File object representing uploaded file.
     * @param {ByteStream} file The stream of the file to upload.
     * @param {string} fileName The name of the file, which will be used for storage in Box.
     * @param {number} fileSize The total size of the file for the chunked upload in bytes.
     * @param {string} parentFolderId The ID of the folder where the file should be uploaded.
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<FileFull>}
     */
    uploadBigFile(file, fileName, fileSize, parentFolderId, cancellationToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const uploadSession = yield this.createFileUploadSession({
                fileName: fileName,
                fileSize: fileSize,
                folderId: parentFolderId,
            }, {
                headers: new CreateFileUploadSessionHeaders({}),
                cancellationToken: cancellationToken,
            });
            const uploadPartUrl = uploadSession.sessionEndpoints.uploadPart;
            const commitUrl = uploadSession.sessionEndpoints.commit;
            const listPartsUrl = uploadSession.sessionEndpoints.listParts;
            const partSize = uploadSession.partSize;
            const totalParts = uploadSession.totalParts;
            if (!(partSize * totalParts >= fileSize)) {
                throw new Error('Assertion failed');
            }
            if (!(uploadSession.numPartsProcessed == 0)) {
                throw new Error('Assertion failed');
            }
            const fileHash = new utils_js_8.Hash({ algorithm: 'sha1' });
            const chunksIterator = (0, utils_js_5.iterateChunks)(file, partSize, fileSize);
            const results = yield (0, utils_js_7.reduceIterator)(chunksIterator, this.reducer.bind(this), {
                lastIndex: -1,
                parts: [],
                fileSize: fileSize,
                uploadPartUrl: uploadPartUrl,
                fileHash: fileHash,
            });
            const parts = results.parts;
            const processedSessionParts = yield this.getFileUploadSessionPartsByUrl(listPartsUrl, {
                queryParams: {},
                headers: new GetFileUploadSessionPartsByUrlHeaders({}),
                cancellationToken: cancellationToken,
            });
            if (!(processedSessionParts.totalCount == totalParts)) {
                throw new Error('Assertion failed');
            }
            const sha1 = yield fileHash.digestHash('base64');
            const digest = ''.concat('sha=', sha1);
            const committedSession = yield this.createFileUploadSessionCommitByUrl(commitUrl, {
                parts: parts,
            }, {
                digest: digest,
            }, {
                cancellationToken: cancellationToken,
            });
            return committedSession.entries[0];
        });
    }
}
exports.ChunkedUploadsManager = ChunkedUploadsManager;
function serializeCreateFileUploadSessionRequestBody(val) {
    return {
        ['folder_id']: val.folderId,
        ['file_size']: val.fileSize,
        ['file_name']: val.fileName,
    };
}
function deserializeCreateFileUploadSessionRequestBody(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateFileUploadSessionRequestBody"',
        });
    }
    if (val.folder_id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "folder_id" of type "CreateFileUploadSessionRequestBody" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.folder_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "folder_id" of type "CreateFileUploadSessionRequestBody"',
        });
    }
    const folderId = val.folder_id;
    if (val.file_size == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "file_size" of type "CreateFileUploadSessionRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsNumber)(val.file_size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "file_size" of type "CreateFileUploadSessionRequestBody"',
        });
    }
    const fileSize = val.file_size;
    if (val.file_name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "file_name" of type "CreateFileUploadSessionRequestBody" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.file_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "file_name" of type "CreateFileUploadSessionRequestBody"',
        });
    }
    const fileName = val.file_name;
    return {
        folderId: folderId,
        fileSize: fileSize,
        fileName: fileName,
    };
}
function serializeCreateFileUploadSessionForExistingFileRequestBody(val) {
    return { ['file_size']: val.fileSize, ['file_name']: val.fileName };
}
function deserializeCreateFileUploadSessionForExistingFileRequestBody(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateFileUploadSessionForExistingFileRequestBody"',
        });
    }
    if (val.file_size == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "file_size" of type "CreateFileUploadSessionForExistingFileRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsNumber)(val.file_size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "file_size" of type "CreateFileUploadSessionForExistingFileRequestBody"',
        });
    }
    const fileSize = val.file_size;
    if (!(val.file_name == void 0) && !(0, json_js_2.sdIsString)(val.file_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "file_name" of type "CreateFileUploadSessionForExistingFileRequestBody"',
        });
    }
    const fileName = val.file_name == void 0 ? void 0 : val.file_name;
    return {
        fileSize: fileSize,
        fileName: fileName,
    };
}
function serializeCreateFileUploadSessionCommitByUrlRequestBody(val) {
    return {
        ['parts']: val.parts.map(function (item) {
            return (0, uploadPart_generated_js_1.serializeUploadPart)(item);
        }),
    };
}
function deserializeCreateFileUploadSessionCommitByUrlRequestBody(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateFileUploadSessionCommitByUrlRequestBody"',
        });
    }
    if (val.parts == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "parts" of type "CreateFileUploadSessionCommitByUrlRequestBody" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsList)(val.parts)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "parts" of type "CreateFileUploadSessionCommitByUrlRequestBody"',
        });
    }
    const parts = (0, json_js_3.sdIsList)(val.parts)
        ? val.parts.map(function (itm) {
            return (0, uploadPart_generated_js_2.deserializeUploadPart)(itm);
        })
        : [];
    return {
        parts: parts,
    };
}
function serializeCreateFileUploadSessionCommitRequestBody(val) {
    return {
        ['parts']: val.parts.map(function (item) {
            return (0, uploadPart_generated_js_1.serializeUploadPart)(item);
        }),
    };
}
function deserializeCreateFileUploadSessionCommitRequestBody(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateFileUploadSessionCommitRequestBody"',
        });
    }
    if (val.parts == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "parts" of type "CreateFileUploadSessionCommitRequestBody" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsList)(val.parts)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "parts" of type "CreateFileUploadSessionCommitRequestBody"',
        });
    }
    const parts = (0, json_js_3.sdIsList)(val.parts)
        ? val.parts.map(function (itm) {
            return (0, uploadPart_generated_js_2.deserializeUploadPart)(itm);
        })
        : [];
    return { parts: parts };
}
//# sourceMappingURL=chunkedUploads.generated.js.map