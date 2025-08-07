import { deserializeUploadSession } from '../schemas/uploadSession.generated.js';
import { deserializeUploadedPart } from '../schemas/uploadedPart.generated.js';
import { deserializeUploadParts } from '../schemas/uploadParts.generated.js';
import { deserializeFiles } from '../schemas/files.generated.js';
import { serializeUploadPart } from '../schemas/uploadPart.generated.js';
import { deserializeUploadPart } from '../schemas/uploadPart.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { generateByteStreamFromBuffer } from '../internal/utils.js';
import { hexToBase64 } from '../internal/utils.js';
import { iterateChunks } from '../internal/utils.js';
import { readByteStream } from '../internal/utils.js';
import { reduceIterator } from '../internal/utils.js';
import { Hash } from '../internal/utils.js';
import { bufferLength } from '../internal/utils.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateFileUploadSessionOptionals {
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
export class CreateFileUploadSessionForExistingFileOptionals {
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
export class GetFileUploadSessionByUrlOptionals {
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
export class GetFileUploadSessionByIdOptionals {
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
export class UploadFilePartByUrlOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UploadFilePartOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteFileUploadSessionByUrlOptionals {
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
export class DeleteFileUploadSessionByIdOptionals {
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
export class GetFileUploadSessionPartsByUrlOptionals {
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
export class GetFileUploadSessionPartsOptionals {
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
export class CreateFileUploadSessionCommitByUrlOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateFileUploadSessionCommitOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateFileUploadSessionHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateFileUploadSessionForExistingFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetFileUploadSessionByUrlHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetFileUploadSessionByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UploadFilePartByUrlHeaders {
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
export class UploadFilePartHeaders {
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
export class DeleteFileUploadSessionByUrlHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteFileUploadSessionByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetFileUploadSessionPartsByUrlHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetFileUploadSessionPartsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateFileUploadSessionCommitByUrlHeaders {
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
export class CreateFileUploadSessionCommitHeaders {
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
export class ChunkedUploadsManager {
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
     * Creates an upload session for a new file.
     * @param {CreateFileUploadSessionRequestBody} requestBody Request body of createFileUploadSession method
     * @param {CreateFileUploadSessionOptionalsInput} optionalsInput
     * @returns {Promise<UploadSession>}
     */
    async createFileUploadSession(requestBody, optionalsInput = {}) {
        const optionals = new CreateFileUploadSessionOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
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
        return {
            ...deserializeUploadSession(response.data),
            rawData: response.data,
        };
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
    async createFileUploadSessionForExistingFile(fileId, requestBody, optionalsInput = {}) {
        const optionals = new CreateFileUploadSessionForExistingFileOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/', toString(fileId), '/upload_sessions'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateFileUploadSessionForExistingFileRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeUploadSession(response.data),
            rawData: response.data,
        };
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
    async getFileUploadSessionByUrl(url, optionalsInput = {}) {
        const optionals = new GetFileUploadSessionByUrlOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: url,
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeUploadSession(response.data),
            rawData: response.data,
        };
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
    async getFileUploadSessionById(uploadSessionId, optionalsInput = {}) {
        const optionals = new GetFileUploadSessionByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/upload_sessions/', toString(uploadSessionId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeUploadSession(response.data),
            rawData: response.data,
        };
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
    async uploadFilePartByUrl(url, requestBody, headersInput, optionalsInput = {}) {
        const headers = new UploadFilePartByUrlHeaders({
            digest: headersInput.digest,
            contentRange: headersInput.contentRange,
            extraHeaders: headersInput.extraHeaders,
        });
        const optionals = new UploadFilePartByUrlOptionals({
            cancellationToken: optionalsInput.cancellationToken,
        });
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({
            ...{
                ['digest']: toString(headers.digest),
                ['content-range']: toString(headers.contentRange),
            },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
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
        return {
            ...deserializeUploadedPart(response.data),
            rawData: response.data,
        };
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
    async uploadFilePart(uploadSessionId, requestBody, headersInput, optionalsInput = {}) {
        const headers = new UploadFilePartHeaders({
            digest: headersInput.digest,
            contentRange: headersInput.contentRange,
            extraHeaders: headersInput.extraHeaders,
        });
        const optionals = new UploadFilePartOptionals({
            cancellationToken: optionalsInput.cancellationToken,
        });
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({
            ...{
                ['digest']: toString(headers.digest),
                ['content-range']: toString(headers.contentRange),
            },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/upload_sessions/', toString(uploadSessionId)),
            method: 'PUT',
            headers: headersMap,
            fileStream: requestBody,
            contentType: 'application/octet-stream',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeUploadedPart(response.data),
            rawData: response.data,
        };
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
    async deleteFileUploadSessionByUrl(url, optionalsInput = {}) {
        const optionals = new DeleteFileUploadSessionByUrlOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: url,
            method: 'DELETE',
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
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
    async deleteFileUploadSessionById(uploadSessionId, optionalsInput = {}) {
        const optionals = new DeleteFileUploadSessionByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/upload_sessions/', toString(uploadSessionId)),
            method: 'DELETE',
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
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
    async getFileUploadSessionPartsByUrl(url, optionalsInput = {}) {
        const optionals = new GetFileUploadSessionPartsByUrlOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['offset']: toString(queryParams.offset),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: url,
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeUploadParts(response.data),
            rawData: response.data,
        };
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
    async getFileUploadSessionParts(uploadSessionId, optionalsInput = {}) {
        const optionals = new GetFileUploadSessionPartsOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['offset']: toString(queryParams.offset),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/upload_sessions/', toString(uploadSessionId), '/parts'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeUploadParts(response.data),
            rawData: response.data,
        };
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
    async createFileUploadSessionCommitByUrl(url, requestBody, headersInput, optionalsInput = {}) {
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
        const headersMap = prepareParams({
            ...{
                ['digest']: toString(headers.digest),
                ['if-match']: toString(headers.ifMatch),
                ['if-none-match']: toString(headers.ifNoneMatch),
            },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
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
        if (toString(response.status) == '202') {
            return void 0;
        }
        return {
            ...deserializeFiles(response.data),
            rawData: response.data,
        };
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
    async createFileUploadSessionCommit(uploadSessionId, requestBody, headersInput, optionalsInput = {}) {
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
        const headersMap = prepareParams({
            ...{
                ['digest']: toString(headers.digest),
                ['if-match']: toString(headers.ifMatch),
                ['if-none-match']: toString(headers.ifNoneMatch),
            },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/upload_sessions/', toString(uploadSessionId), '/commit'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateFileUploadSessionCommitRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        if (toString(response.status) == '202') {
            return void 0;
        }
        return {
            ...deserializeFiles(response.data),
            rawData: response.data,
        };
    }
    /**
     * @param {PartAccumulator} acc
     * @param {ByteStream} chunk
     * @returns {Promise<PartAccumulator>}
     */
    async reducer(acc, chunk) {
        const lastIndex = acc.lastIndex;
        const parts = acc.parts;
        const chunkBuffer = await readByteStream(chunk);
        const hash = new Hash({ algorithm: 'sha1' });
        await hash.updateHash(chunkBuffer);
        const sha1 = await hash.digestHash('base64');
        const digest = ''.concat('sha=', sha1);
        const chunkSize = bufferLength(chunkBuffer);
        const bytesStart = lastIndex + 1;
        const bytesEnd = lastIndex + chunkSize;
        const contentRange = ''.concat('bytes ', toString(bytesStart), '-', toString(bytesEnd), '/', toString(acc.fileSize));
        const uploadedPart = await this.uploadFilePartByUrl(acc.uploadPartUrl, generateByteStreamFromBuffer(chunkBuffer), {
            digest: digest,
            contentRange: contentRange,
        });
        const part = uploadedPart.part;
        const partSha1 = hexToBase64(part.sha1);
        if (!(partSha1 == sha1)) {
            throw new Error('Assertion failed');
        }
        if (!(part.size == chunkSize)) {
            throw new Error('Assertion failed');
        }
        if (!(part.offset == bytesStart)) {
            throw new Error('Assertion failed');
        }
        await acc.fileHash.updateHash(chunkBuffer);
        return {
            lastIndex: bytesEnd,
            parts: parts.concat([part]),
            fileSize: acc.fileSize,
            uploadPartUrl: acc.uploadPartUrl,
            fileHash: acc.fileHash,
        };
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
    async uploadBigFile(file, fileName, fileSize, parentFolderId, cancellationToken) {
        const uploadSession = await this.createFileUploadSession({
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
        const fileHash = new Hash({ algorithm: 'sha1' });
        const chunksIterator = iterateChunks(file, partSize, fileSize);
        const results = await reduceIterator(chunksIterator, this.reducer.bind(this), {
            lastIndex: -1,
            parts: [],
            fileSize: fileSize,
            uploadPartUrl: uploadPartUrl,
            fileHash: fileHash,
        });
        const parts = results.parts;
        const processedSessionParts = await this.getFileUploadSessionPartsByUrl(listPartsUrl, {
            queryParams: {},
            headers: new GetFileUploadSessionPartsByUrlHeaders({}),
            cancellationToken: cancellationToken,
        });
        if (!(processedSessionParts.totalCount == totalParts)) {
            throw new Error('Assertion failed');
        }
        const sha1 = await fileHash.digestHash('base64');
        const digest = ''.concat('sha=', sha1);
        const committedSession = await this.createFileUploadSessionCommitByUrl(commitUrl, {
            parts: parts,
        }, {
            digest: digest,
        }, {
            cancellationToken: cancellationToken,
        });
        return committedSession.entries[0];
    }
}
export function serializeCreateFileUploadSessionRequestBody(val) {
    return {
        ['folder_id']: val.folderId,
        ['file_size']: val.fileSize,
        ['file_name']: val.fileName,
    };
}
export function deserializeCreateFileUploadSessionRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateFileUploadSessionRequestBody"',
        });
    }
    if (val.folder_id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "folder_id" of type "CreateFileUploadSessionRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.folder_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "folder_id" of type "CreateFileUploadSessionRequestBody"',
        });
    }
    const folderId = val.folder_id;
    if (val.file_size == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "file_size" of type "CreateFileUploadSessionRequestBody" to be defined',
        });
    }
    if (!sdIsNumber(val.file_size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "file_size" of type "CreateFileUploadSessionRequestBody"',
        });
    }
    const fileSize = val.file_size;
    if (val.file_name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "file_name" of type "CreateFileUploadSessionRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.file_name)) {
        throw new BoxSdkError({
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
export function serializeCreateFileUploadSessionForExistingFileRequestBody(val) {
    return { ['file_size']: val.fileSize, ['file_name']: val.fileName };
}
export function deserializeCreateFileUploadSessionForExistingFileRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateFileUploadSessionForExistingFileRequestBody"',
        });
    }
    if (val.file_size == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "file_size" of type "CreateFileUploadSessionForExistingFileRequestBody" to be defined',
        });
    }
    if (!sdIsNumber(val.file_size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "file_size" of type "CreateFileUploadSessionForExistingFileRequestBody"',
        });
    }
    const fileSize = val.file_size;
    if (!(val.file_name == void 0) && !sdIsString(val.file_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "file_name" of type "CreateFileUploadSessionForExistingFileRequestBody"',
        });
    }
    const fileName = val.file_name == void 0 ? void 0 : val.file_name;
    return {
        fileSize: fileSize,
        fileName: fileName,
    };
}
export function serializeCreateFileUploadSessionCommitByUrlRequestBody(val) {
    return {
        ['parts']: val.parts.map(function (item) {
            return serializeUploadPart(item);
        }),
    };
}
export function deserializeCreateFileUploadSessionCommitByUrlRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateFileUploadSessionCommitByUrlRequestBody"',
        });
    }
    if (val.parts == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "parts" of type "CreateFileUploadSessionCommitByUrlRequestBody" to be defined',
        });
    }
    if (!sdIsList(val.parts)) {
        throw new BoxSdkError({
            message: 'Expecting array for "parts" of type "CreateFileUploadSessionCommitByUrlRequestBody"',
        });
    }
    const parts = sdIsList(val.parts)
        ? val.parts.map(function (itm) {
            return deserializeUploadPart(itm);
        })
        : [];
    return {
        parts: parts,
    };
}
export function serializeCreateFileUploadSessionCommitRequestBody(val) {
    return {
        ['parts']: val.parts.map(function (item) {
            return serializeUploadPart(item);
        }),
    };
}
export function deserializeCreateFileUploadSessionCommitRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateFileUploadSessionCommitRequestBody"',
        });
    }
    if (val.parts == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "parts" of type "CreateFileUploadSessionCommitRequestBody" to be defined',
        });
    }
    if (!sdIsList(val.parts)) {
        throw new BoxSdkError({
            message: 'Expecting array for "parts" of type "CreateFileUploadSessionCommitRequestBody"',
        });
    }
    const parts = sdIsList(val.parts)
        ? val.parts.map(function (itm) {
            return deserializeUploadPart(itm);
        })
        : [];
    return { parts: parts };
}
//# sourceMappingURL=chunkedUploads.generated.js.map