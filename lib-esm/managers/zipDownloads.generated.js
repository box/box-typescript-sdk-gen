import { deserializeZipDownload } from '../schemas/zipDownload.generated.js';
import { serializeZipDownloadRequest } from '../schemas/zipDownloadRequest.generated.js';
import { deserializeZipDownloadStatus } from '../schemas/zipDownloadStatus.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
export class CreateZipDownloadOptionals {
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
export class GetZipDownloadContentOptionals {
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
export class GetZipDownloadStatusOptionals {
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
export class DownloadZipOptionals {
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
export class CreateZipDownloadHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetZipDownloadContentHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetZipDownloadStatusHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DownloadZipHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class ZipDownloadsManager {
    constructor(fields) {
        this.networkSession = new NetworkSession({});
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
    async createZipDownload(requestBody, optionalsInput = {}) {
        const optionals = new CreateZipDownloadOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/zip_downloads'),
            method: 'POST',
            headers: headersMap,
            data: serializeZipDownloadRequest(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeZipDownload(response.data),
            rawData: response.data,
        };
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
    async getZipDownloadContent(downloadUrl, optionalsInput = {}) {
        const optionals = new GetZipDownloadContentOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: downloadUrl,
            method: 'GET',
            headers: headersMap,
            responseFormat: 'binary',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return response.content;
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
    async getZipDownloadStatus(statusUrl, optionalsInput = {}) {
        const optionals = new GetZipDownloadStatusOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: statusUrl,
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeZipDownloadStatus(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a zip and downloads its content
     * @param {ZipDownloadRequest} requestBody Zip download request body
     * @param {DownloadZipOptionalsInput} optionalsInput
     * @returns {Promise<ByteStream>}
     */
    async downloadZip(requestBody, optionalsInput = {}) {
        const optionals = new DownloadZipOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const zipDownloadSession = await this.createZipDownload({
            items: requestBody.items,
            downloadFileName: requestBody.downloadFileName,
        }, {
            headers: new CreateZipDownloadHeaders({
                extraHeaders: headers.extraHeaders,
            }),
            cancellationToken: cancellationToken,
        });
        return await this.getZipDownloadContent(zipDownloadSession.downloadUrl, {
            headers: new GetZipDownloadContentHeaders({
                extraHeaders: headers.extraHeaders,
            }),
            cancellationToken: cancellationToken,
        });
    }
}
//# sourceMappingURL=zipDownloads.generated.js.map