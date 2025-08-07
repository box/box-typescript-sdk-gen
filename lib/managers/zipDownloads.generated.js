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
exports.ZipDownloadsManager = exports.DownloadZipHeaders = exports.GetZipDownloadStatusHeaders = exports.GetZipDownloadContentHeaders = exports.CreateZipDownloadHeaders = exports.DownloadZipOptionals = exports.GetZipDownloadStatusOptionals = exports.GetZipDownloadContentOptionals = exports.CreateZipDownloadOptionals = void 0;
const zipDownload_generated_js_1 = require("../schemas/zipDownload.generated.js");
const zipDownloadRequest_generated_js_1 = require("../schemas/zipDownloadRequest.generated.js");
const zipDownloadStatus_generated_js_1 = require("../schemas/zipDownloadStatus.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
class CreateZipDownloadOptionals {
    constructor(fields) {
        this.headers = new CreateZipDownloadHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateZipDownloadOptionals = CreateZipDownloadOptionals;
class GetZipDownloadContentOptionals {
    constructor(fields) {
        this.headers = new GetZipDownloadContentHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetZipDownloadContentOptionals = GetZipDownloadContentOptionals;
class GetZipDownloadStatusOptionals {
    constructor(fields) {
        this.headers = new GetZipDownloadStatusHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetZipDownloadStatusOptionals = GetZipDownloadStatusOptionals;
class DownloadZipOptionals {
    constructor(fields) {
        this.headers = new DownloadZipHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DownloadZipOptionals = DownloadZipOptionals;
class CreateZipDownloadHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateZipDownloadHeaders = CreateZipDownloadHeaders;
class GetZipDownloadContentHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetZipDownloadContentHeaders = GetZipDownloadContentHeaders;
class GetZipDownloadStatusHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetZipDownloadStatusHeaders = GetZipDownloadStatusHeaders;
class DownloadZipHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DownloadZipHeaders = DownloadZipHeaders;
class ZipDownloadsManager {
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
     * Creates a request to download multiple files and folders as a single `zip`
     * archive file. This API does not return the archive but instead performs all
     * the checks to ensure that the user has access to all the items, and then
     * returns a `download_url` and a `status_url` that can be used to download the
     * archive.
     *
     * The limit for an archive is either the Account's upload limit or
     * 10,000 files, whichever is met first.
     *
     * **Note**: Downloading a large file can be
     * affected by various
     * factors such as distance, network latency,
     * bandwidth, and congestion, as well as packet loss
     * ratio and current server load.
     * For these reasons we recommend that a maximum ZIP archive
     * total size does not exceed 25GB.
     * @param {ZipDownloadRequest} requestBody Request body of createZipDownload method
     * @param {CreateZipDownloadOptionalsInput} optionalsInput
     * @returns {Promise<ZipDownload>}
     */
    createZipDownload(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateZipDownloadOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/zip_downloads'),
                method: 'POST',
                headers: headersMap,
                data: (0, zipDownloadRequest_generated_js_1.serializeZipDownloadRequest)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, zipDownload_generated_js_1.deserializeZipDownload)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Returns the contents of a `zip` archive in binary format. This URL does not
       * require any form of authentication and could be used in a user's browser to
       * download the archive to a user's device.
       *
       * By default, this URL is only valid for a few seconds from the creation of
       * the request for this archive. Once a download has started it can not be
       * stopped and resumed, instead a new request for a zip archive would need to
       * be created.
       *
       * The URL of this endpoint should not be considered as fixed. Instead, use
       * the [Create zip download](e://post_zip_downloads) API to request to create a
       * `zip` archive, and then follow the `download_url` field in the response to
       * this endpoint.
       * @param {string} downloadUrl The URL that can be used to download created `zip` archive.
       Example: `https://dl.boxcloud.com/2.0/zip_downloads/29l00nfxDyHOt7RphI9zT_w==nDnZEDjY2S8iEWWCHEEiptFxwoWojjlibZjJ6geuE5xnXENDTPxzgbks_yY=/content`
       * @param {GetZipDownloadContentOptionalsInput} optionalsInput
       * @returns {Promise<ByteStream>}
       */
    getZipDownloadContent(downloadUrl_1) {
        return __awaiter(this, arguments, void 0, function* (downloadUrl, optionalsInput = {}) {
            const optionals = new GetZipDownloadContentOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: downloadUrl,
                method: 'GET',
                headers: headersMap,
                responseFormat: 'binary',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return response.content;
        });
    }
    /**
       * Returns the download status of a `zip` archive, allowing an application to
       * inspect the progress of the download as well as the number of items that
       * might have been skipped.
       *
       * This endpoint can only be accessed once the download has started.
       * Subsequently this endpoint is valid for 12 hours from the start of the
       * download.
       *
       * The URL of this endpoint should not be considered as fixed. Instead, use
       * the [Create zip download](e://post_zip_downloads) API to request to create a
       * `zip` archive, and then follow the `status_url` field in the response to
       * this endpoint.
       * @param {string} statusUrl The URL that can be used to get the status of the `zip` archive being downloaded.
       Example: `https://dl.boxcloud.com/2.0/zip_downloads/29l00nfxDyHOt7RphI9zT_w==nDnZEDjY2S8iEWWCHEEiptFxwoWojjlibZjJ6geuE5xnXENDTPxzgbks_yY=/status`
       * @param {GetZipDownloadStatusOptionalsInput} optionalsInput
       * @returns {Promise<ZipDownloadStatus>}
       */
    getZipDownloadStatus(statusUrl_1) {
        return __awaiter(this, arguments, void 0, function* (statusUrl, optionalsInput = {}) {
            const optionals = new GetZipDownloadStatusOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: statusUrl,
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, zipDownloadStatus_generated_js_1.deserializeZipDownloadStatus)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a zip and downloads its content
     * @param {ZipDownloadRequest} requestBody Zip download request body
     * @param {DownloadZipOptionalsInput} optionalsInput
     * @returns {Promise<ByteStream>}
     */
    downloadZip(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new DownloadZipOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const zipDownloadSession = yield this.createZipDownload({
                items: requestBody.items,
                downloadFileName: requestBody.downloadFileName,
            }, {
                headers: new CreateZipDownloadHeaders({
                    extraHeaders: headers.extraHeaders,
                }),
                cancellationToken: cancellationToken,
            });
            return yield this.getZipDownloadContent(zipDownloadSession.downloadUrl, {
                headers: new GetZipDownloadContentHeaders({
                    extraHeaders: headers.extraHeaders,
                }),
                cancellationToken: cancellationToken,
            });
        });
    }
}
exports.ZipDownloadsManager = ZipDownloadsManager;
//# sourceMappingURL=zipDownloads.generated.js.map