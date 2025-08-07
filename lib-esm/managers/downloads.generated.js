import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { isBrowser } from '../internal/utils.js';
import { createCancellationController } from '../internal/utils.js';
export class GetDownloadFileUrlOptionals {
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
export class DownloadFileOptionals {
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
export class GetDownloadFileUrlHeaders {
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
export class DownloadFileHeaders {
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
export class DownloadsManager {
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
    async getDownloadFileUrl(fileId, optionalsInput = {}) {
        const optionals = new GetDownloadFileUrlOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['version']: toString(queryParams.version),
            ['access_token']: toString(queryParams.accessToken),
        });
        const headersMap = prepareParams({
            ...{
                ['range']: toString(headers.range),
                ['boxapi']: toString(headers.boxapi),
            },
            ...headers.extraHeaders,
        });
        const cancellationController = createCancellationController();
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/content'),
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
        if (isBrowser()) {
            cancellationController.abort();
            if (response.url == void 0) {
                throw new BoxSdkError({ message: 'Unable to get response URL' });
            }
            return response.url;
        }
        if ('location' in response.headers) {
            return response.headers.location;
        }
        if ('Location' in response.headers) {
            return response.headers.Location;
        }
        throw new BoxSdkError({ message: 'No location header in response' });
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
    async downloadFile(fileId, optionalsInput = {}) {
        const optionals = new DownloadFileOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['version']: toString(queryParams.version),
            ['access_token']: toString(queryParams.accessToken),
        });
        const headersMap = prepareParams({
            ...{
                ['range']: toString(headers.range),
                ['boxapi']: toString(headers.boxapi),
            },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/content'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'binary',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        if (toString(response.status) == '202') {
            return void 0;
        }
        return response.content;
    }
}
//# sourceMappingURL=downloads.generated.js.map