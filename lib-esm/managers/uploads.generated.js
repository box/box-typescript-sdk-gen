import { deserializeFiles } from '../schemas/files.generated.js';
import { deserializeUploadUrl } from '../schemas/uploadUrl.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class UploadFileVersionOptionals {
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
export class UploadFileOptionals {
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
export class UploadWithPreflightCheckOptionals {
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
export class UploadFileVersionHeaders {
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
export class PreflightFileUploadCheckHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UploadFileHeaders {
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
export class UploadWithPreflightCheckHeaders {
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
export class UploadsManager {
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
    async uploadFileVersion(fileId, requestBody, optionalsInput = {}) {
        const optionals = new UploadFileVersionOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({
            ...{
                ['if-match']: toString(headers.ifMatch),
                ['content-md5']: toString(headers.contentMd5),
            },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.uploadUrl, '/2.0/files/', toString(fileId), '/content'),
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
        return {
            ...deserializeFiles(response.data),
            rawData: response.data,
        };
    }
    /**
     * Performs a check to verify that a file will be accepted by Box
     * before you upload the entire file.
     * @param {PreflightFileUploadCheckRequestBody} requestBody Request body of preflightFileUploadCheck method
     * @param {PreflightFileUploadCheckHeadersInput} headersInput Headers of preflightFileUploadCheck method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<UploadUrl>}
     */
    async preflightFileUploadCheck(requestBody = {}, headersInput = new PreflightFileUploadCheckHeaders({}), cancellationToken) {
        const headers = new PreflightFileUploadCheckHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
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
        return {
            ...deserializeUploadUrl(response.data),
            rawData: response.data,
        };
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
    async uploadFile(requestBody, optionalsInput = {}) {
        const optionals = new UploadFileOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({
            ...{ ['content-md5']: toString(headers.contentMd5) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
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
        return {
            ...deserializeFiles(response.data),
            rawData: response.data,
        };
    }
    /**
     *  Upload a file with a preflight check
     * @param {UploadWithPreflightCheckRequestBody} requestBody
     * @param {UploadWithPreflightCheckOptionalsInput} optionalsInput
     * @returns {Promise<Files>}
     */
    async uploadWithPreflightCheck(requestBody, optionalsInput = {}) {
        const optionals = new UploadWithPreflightCheckOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({
            ...{ ['content-md5']: toString(headers.contentMd5) },
            ...headers.extraHeaders,
        });
        const preflightUploadUrl = await this.preflightFileUploadCheck({
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
            throw new BoxSdkError({ message: 'Unable to get preflight upload URL' });
        }
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
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
        return {
            ...deserializeFiles(response.data),
            rawData: response.data,
        };
    }
}
export function serializeUploadFileVersionRequestBodyAttributesField(val) {
    return {
        ['name']: val.name,
        ['content_modified_at']: val.contentModifiedAt == void 0
            ? val.contentModifiedAt
            : serializeDateTime(val.contentModifiedAt),
    };
}
export function deserializeUploadFileVersionRequestBodyAttributesField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UploadFileVersionRequestBodyAttributesField"',
        });
    }
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "UploadFileVersionRequestBodyAttributesField" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "UploadFileVersionRequestBodyAttributesField"',
        });
    }
    const name = val.name;
    if (!(val.content_modified_at == void 0) &&
        !sdIsString(val.content_modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "UploadFileVersionRequestBodyAttributesField"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : deserializeDateTime(val.content_modified_at);
    return {
        name: name,
        contentModifiedAt: contentModifiedAt,
    };
}
export function serializePreflightFileUploadCheckRequestBodyParentField(val) {
    return { ['id']: val.id };
}
export function deserializePreflightFileUploadCheckRequestBodyParentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "PreflightFileUploadCheckRequestBodyParentField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "PreflightFileUploadCheckRequestBodyParentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { id: id };
}
export function serializePreflightFileUploadCheckRequestBody(val) {
    return {
        ['name']: val.name,
        ['size']: val.size,
        ['parent']: val.parent == void 0
            ? val.parent
            : serializePreflightFileUploadCheckRequestBodyParentField(val.parent),
    };
}
export function deserializePreflightFileUploadCheckRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "PreflightFileUploadCheckRequestBody"',
        });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "PreflightFileUploadCheckRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.size == void 0) && !sdIsNumber(val.size)) {
        throw new BoxSdkError({
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
export function serializeUploadFileRequestBodyAttributesParentField(val) {
    return { ['id']: val.id };
}
export function deserializeUploadFileRequestBodyAttributesParentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UploadFileRequestBodyAttributesParentField"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "UploadFileRequestBodyAttributesParentField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UploadFileRequestBodyAttributesParentField"',
        });
    }
    const id = val.id;
    return { id: id };
}
export function serializeUploadFileRequestBodyAttributesField(val) {
    return {
        ['name']: val.name,
        ['parent']: serializeUploadFileRequestBodyAttributesParentField(val.parent),
        ['content_created_at']: val.contentCreatedAt == void 0
            ? val.contentCreatedAt
            : serializeDateTime(val.contentCreatedAt),
        ['content_modified_at']: val.contentModifiedAt == void 0
            ? val.contentModifiedAt
            : serializeDateTime(val.contentModifiedAt),
    };
}
export function deserializeUploadFileRequestBodyAttributesField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UploadFileRequestBodyAttributesField"',
        });
    }
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "UploadFileRequestBodyAttributesField" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "UploadFileRequestBodyAttributesField"',
        });
    }
    const name = val.name;
    if (val.parent == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "parent" of type "UploadFileRequestBodyAttributesField" to be defined',
        });
    }
    const parent = deserializeUploadFileRequestBodyAttributesParentField(val.parent);
    if (!(val.content_created_at == void 0) &&
        !sdIsString(val.content_created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_created_at" of type "UploadFileRequestBodyAttributesField"',
        });
    }
    const contentCreatedAt = val.content_created_at == void 0
        ? void 0
        : deserializeDateTime(val.content_created_at);
    if (!(val.content_modified_at == void 0) &&
        !sdIsString(val.content_modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "UploadFileRequestBodyAttributesField"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : deserializeDateTime(val.content_modified_at);
    return {
        name: name,
        parent: parent,
        contentCreatedAt: contentCreatedAt,
        contentModifiedAt: contentModifiedAt,
    };
}
export function serializeUploadWithPreflightCheckRequestBodyAttributesParentField(val) {
    return { ['id']: val.id };
}
export function deserializeUploadWithPreflightCheckRequestBodyAttributesParentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UploadWithPreflightCheckRequestBodyAttributesParentField"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "UploadWithPreflightCheckRequestBodyAttributesParentField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UploadWithPreflightCheckRequestBodyAttributesParentField"',
        });
    }
    const id = val.id;
    return {
        id: id,
    };
}
export function serializeUploadWithPreflightCheckRequestBodyAttributesField(val) {
    return {
        ['name']: val.name,
        ['parent']: serializeUploadWithPreflightCheckRequestBodyAttributesParentField(val.parent),
        ['content_created_at']: val.contentCreatedAt == void 0
            ? val.contentCreatedAt
            : serializeDateTime(val.contentCreatedAt),
        ['content_modified_at']: val.contentModifiedAt == void 0
            ? val.contentModifiedAt
            : serializeDateTime(val.contentModifiedAt),
        ['size']: val.size,
    };
}
export function deserializeUploadWithPreflightCheckRequestBodyAttributesField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UploadWithPreflightCheckRequestBodyAttributesField"',
        });
    }
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "UploadWithPreflightCheckRequestBodyAttributesField" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "UploadWithPreflightCheckRequestBodyAttributesField"',
        });
    }
    const name = val.name;
    if (val.parent == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "parent" of type "UploadWithPreflightCheckRequestBodyAttributesField" to be defined',
        });
    }
    const parent = deserializeUploadWithPreflightCheckRequestBodyAttributesParentField(val.parent);
    if (!(val.content_created_at == void 0) &&
        !sdIsString(val.content_created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_created_at" of type "UploadWithPreflightCheckRequestBodyAttributesField"',
        });
    }
    const contentCreatedAt = val.content_created_at == void 0
        ? void 0
        : deserializeDateTime(val.content_created_at);
    if (!(val.content_modified_at == void 0) &&
        !sdIsString(val.content_modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "UploadWithPreflightCheckRequestBodyAttributesField"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : deserializeDateTime(val.content_modified_at);
    if (val.size == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "size" of type "UploadWithPreflightCheckRequestBodyAttributesField" to be defined',
        });
    }
    if (!sdIsNumber(val.size)) {
        throw new BoxSdkError({
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