import { deserializeWatermark } from '../schemas/watermark.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetFileWatermarkOptionals {
    constructor(fields) {
        this.headers = new GetFileWatermarkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateFileWatermarkOptionals {
    constructor(fields) {
        this.headers = new UpdateFileWatermarkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteFileWatermarkOptionals {
    constructor(fields) {
        this.headers = new DeleteFileWatermarkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFileWatermarkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateFileWatermarkRequestBodyWatermarkField {
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
export class UpdateFileWatermarkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteFileWatermarkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class FileWatermarksManager {
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
       * Retrieve the watermark for a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileWatermarkOptionalsInput} optionalsInput
       * @returns {Promise<Watermark>}
       */
    async getFileWatermark(fileId, optionalsInput = {}) {
        const optionals = new GetFileWatermarkOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/watermark'),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeWatermark(response.data),
            rawData: response.data,
        };
    }
    /**
       * Applies or update a watermark on a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {UpdateFileWatermarkRequestBody} requestBody Request body of updateFileWatermark method
       * @param {UpdateFileWatermarkOptionalsInput} optionalsInput
       * @returns {Promise<Watermark>}
       */
    async updateFileWatermark(fileId, requestBody, optionalsInput = {}) {
        const optionals = new UpdateFileWatermarkOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/watermark'),
            method: 'PUT',
            headers: headersMap,
            data: serializeUpdateFileWatermarkRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeWatermark(response.data),
            rawData: response.data,
        };
    }
    /**
       * Removes the watermark from a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {DeleteFileWatermarkOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteFileWatermark(fileId, optionalsInput = {}) {
        const optionals = new DeleteFileWatermarkOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/watermark'),
            method: 'DELETE',
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
}
export function serializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val) {
    return val;
}
export function deserializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val) {
    if (val == 'default') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateFileWatermarkRequestBodyWatermarkImprintField",
    });
}
export function serializeUpdateFileWatermarkRequestBodyWatermarkField(val) {
    return {
        ['imprint']: serializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val.imprint),
    };
}
export function deserializeUpdateFileWatermarkRequestBodyWatermarkField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFileWatermarkRequestBodyWatermarkField"',
        });
    }
    if (val.imprint == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "imprint" of type "UpdateFileWatermarkRequestBodyWatermarkField" to be defined',
        });
    }
    const imprint = deserializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val.imprint);
    return {
        imprint: imprint,
    };
}
export function serializeUpdateFileWatermarkRequestBodyWatermarkFieldInput(val) {
    return {
        ['imprint']: val.imprint == void 0
            ? val.imprint
            : serializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val.imprint),
    };
}
export function deserializeUpdateFileWatermarkRequestBodyWatermarkFieldInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFileWatermarkRequestBodyWatermarkFieldInput"',
        });
    }
    const imprint = val.imprint == void 0
        ? void 0
        : deserializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val.imprint);
    return {
        imprint: imprint,
    };
}
export function serializeUpdateFileWatermarkRequestBody(val) {
    return {
        ['watermark']: serializeUpdateFileWatermarkRequestBodyWatermarkField(val.watermark),
    };
}
export function deserializeUpdateFileWatermarkRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFileWatermarkRequestBody"',
        });
    }
    if (val.watermark == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "watermark" of type "UpdateFileWatermarkRequestBody" to be defined',
        });
    }
    const watermark = deserializeUpdateFileWatermarkRequestBodyWatermarkField(val.watermark);
    return { watermark: watermark };
}
//# sourceMappingURL=fileWatermarks.generated.js.map