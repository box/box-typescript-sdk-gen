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
exports.DownloadsManager = exports.DownloadFileHeaders = exports.GetDownloadFileUrlHeaders = exports.DownloadFileOptionals = exports.GetDownloadFileUrlOptionals = void 0;
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
class GetDownloadFileUrlOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetDownloadFileUrlHeaders({});
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
exports.GetDownloadFileUrlOptionals = GetDownloadFileUrlOptionals;
class DownloadFileOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new DownloadFileHeaders({});
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
exports.DownloadFileOptionals = DownloadFileOptionals;
class GetDownloadFileUrlHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.range !== undefined) {
            this.range = fields.range;
        }
        if (fields.boxapi !== undefined) {
            this.boxapi = fields.boxapi;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetDownloadFileUrlHeaders = GetDownloadFileUrlHeaders;
class DownloadFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.range !== undefined) {
            this.range = fields.range;
        }
        if (fields.boxapi !== undefined) {
            this.boxapi = fields.boxapi;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DownloadFileHeaders = DownloadFileHeaders;
class DownloadsManager {
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
       * Returns the contents of a file in binary format.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetDownloadFileUrlOptionalsInput} optionalsInput
       * @returns {Promise<string>}
       */
    getDownloadFileUrl(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new GetDownloadFileUrlOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['version']: (0, utils_js_2.toString)(queryParams.version),
                ['access_token']: (0, utils_js_2.toString)(queryParams.accessToken),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({
                ['range']: (0, utils_js_2.toString)(headers.range),
                ['boxapi']: (0, utils_js_2.toString)(headers.boxapi),
            }, headers.extraHeaders));
            const cancellationController = (0, utils_js_4.createCancellationController)();
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/content'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'no_content',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken == void 0
                    ? cancellationController.signal
                    : cancellationToken,
                followRedirects: false,
            }));
            if ((0, utils_js_3.isBrowser)()) {
                cancellationController.abort();
                if (response.url == void 0) {
                    throw new errors_js_1.BoxSdkError({ message: 'Unable to get response URL' });
                }
                return response.url;
            }
            if ('location' in response.headers) {
                return response.headers.location;
            }
            if ('Location' in response.headers) {
                return response.headers.Location;
            }
            throw new errors_js_1.BoxSdkError({ message: 'No location header in response' });
        });
    }
    /**
       * Returns the contents of a file in binary format.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {DownloadFileOptionalsInput} optionalsInput
       * @returns {Promise<undefined | ByteStream>}
       */
    downloadFile(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new DownloadFileOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['version']: (0, utils_js_2.toString)(queryParams.version),
                ['access_token']: (0, utils_js_2.toString)(queryParams.accessToken),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({
                ['range']: (0, utils_js_2.toString)(headers.range),
                ['boxapi']: (0, utils_js_2.toString)(headers.boxapi),
            }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_2.toString)(fileId), '/content'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'binary',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            if ((0, utils_js_2.toString)(response.status) == '202') {
                return void 0;
            }
            return response.content;
        });
    }
}
exports.DownloadsManager = DownloadsManager;
//# sourceMappingURL=downloads.generated.js.map