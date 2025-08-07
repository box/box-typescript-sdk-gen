"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchOptions = void 0;
class FetchOptions {
    constructor(fields) {
        /**
         * Content type of the request body */
        this.contentType = 'application/json';
        /**
         * Expected response format */
        this.responseFormat = 'json';
        /**
         * A boolean value indicate if the request should follow redirects. Defaults to True. Not supported in Browser environment. */
        this.followRedirects = true;
        if (fields.url !== undefined) {
            this.url = fields.url;
        }
        if (fields.method !== undefined) {
            this.method = fields.method;
        }
        if (fields.params !== undefined) {
            this.params = fields.params;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.data !== undefined) {
            this.data = fields.data;
        }
        if (fields.fileStream !== undefined) {
            this.fileStream = fields.fileStream;
        }
        if (fields.multipartData !== undefined) {
            this.multipartData = fields.multipartData;
        }
        if (fields.contentType !== undefined) {
            this.contentType = fields.contentType;
        }
        if (fields.responseFormat !== undefined) {
            this.responseFormat = fields.responseFormat;
        }
        if (fields.auth !== undefined) {
            this.auth = fields.auth;
        }
        if (fields.networkSession !== undefined) {
            this.networkSession = fields.networkSession;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
        if (fields.followRedirects !== undefined) {
            this.followRedirects = fields.followRedirects;
        }
    }
}
exports.FetchOptions = FetchOptions;
//# sourceMappingURL=fetchOptions.generated.js.map