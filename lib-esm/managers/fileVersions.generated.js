import { deserializeFileVersions } from '../schemas/fileVersions.generated.js';
import { deserializeFileVersionFull } from '../schemas/fileVersionFull.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetFileVersionsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFileVersionsHeaders({});
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
export class GetFileVersionByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFileVersionByIdHeaders({});
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
export class DeleteFileVersionByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteFileVersionByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateFileVersionByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new UpdateFileVersionByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.requestBody !== undefined) {
            this.requestBody = fields.requestBody;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class PromoteFileVersionOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.queryParams = {};
        this.headers = new PromoteFileVersionHeaders({});
        this.cancellationToken = void 0;
        if (fields.requestBody !== undefined) {
            this.requestBody = fields.requestBody;
        }
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
export class GetFileVersionsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetFileVersionByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteFileVersionByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.ifMatch !== undefined) {
            this.ifMatch = fields.ifMatch;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateFileVersionByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class PromoteFileVersionHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class FileVersionsManager {
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
       * Retrieve a list of the past versions for a file.
       *
       * Versions are only tracked by Box users with premium accounts. To fetch the ID
       * of the current version of a file, use the `GET /file/:id` API.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileVersionsOptionalsInput} optionalsInput
       * @returns {Promise<FileVersions>}
       */
    async getFileVersions(fileId, optionalsInput = {}) {
        const optionals = new GetFileVersionsOptionals({
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
            ['limit']: toString(queryParams.limit),
            ['offset']: toString(queryParams.offset),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/versions'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFileVersions(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieve a specific version of a file.
       *
       * Versions are only tracked for Box users with premium accounts.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {string} fileVersionId The ID of the file version.
      Example: "1234"
       * @param {GetFileVersionByIdOptionalsInput} optionalsInput
       * @returns {Promise<FileVersionFull>}
       */
    async getFileVersionById(fileId, fileVersionId, optionalsInput = {}) {
        const optionals = new GetFileVersionByIdOptionals({
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
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/versions/', toString(fileVersionId)),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFileVersionFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Move a file version to the trash.
       *
       * Versions are only tracked for Box users with premium accounts.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {string} fileVersionId The ID of the file version.
      Example: "1234"
       * @param {DeleteFileVersionByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteFileVersionById(fileId, fileVersionId, optionalsInput = {}) {
        const optionals = new DeleteFileVersionByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({
            ...{ ['if-match']: toString(headers.ifMatch) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/versions/', toString(fileVersionId)),
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
       * Restores a specific version of a file after it was deleted.
       * Don't use this endpoint to restore Box Notes,
       * as it works with file formats such as PDF, DOC,
       * PPTX or similar.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {string} fileVersionId The ID of the file version.
      Example: "1234"
       * @param {UpdateFileVersionByIdOptionalsInput} optionalsInput
       * @returns {Promise<FileVersionFull>}
       */
    async updateFileVersionById(fileId, fileVersionId, optionalsInput = {}) {
        const optionals = new UpdateFileVersionByIdOptionals({
            requestBody: optionalsInput.requestBody,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const requestBody = optionals.requestBody;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/versions/', toString(fileVersionId)),
            method: 'PUT',
            headers: headersMap,
            data: serializeUpdateFileVersionByIdRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFileVersionFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Promote a specific version of a file.
       *
       * If previous versions exist, this method can be used to
       * promote one of the older versions to the top of the version history.
       *
       * This creates a new copy of the old version and puts it at the
       * top of the versions history. The file will have the exact same contents
       * as the older version, with the the same hash digest, `etag`, and
       * name as the original.
       *
       * Other properties such as comments do not get updated to their
       * former values.
       *
       * Don't use this endpoint to restore Box Notes,
       * as it works with file formats such as PDF, DOC,
       * PPTX or similar.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {PromoteFileVersionOptionalsInput} optionalsInput
       * @returns {Promise<FileVersionFull>}
       */
    async promoteFileVersion(fileId, optionalsInput = {}) {
        const optionals = new PromoteFileVersionOptionals({
            requestBody: optionalsInput.requestBody,
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const requestBody = optionals.requestBody;
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/versions/current'),
            method: 'POST',
            params: queryParamsMap,
            headers: headersMap,
            data: serializePromoteFileVersionRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFileVersionFull(response.data),
            rawData: response.data,
        };
    }
}
export function serializeUpdateFileVersionByIdRequestBody(val) {
    return { ['trashed_at']: val.trashedAt };
}
export function deserializeUpdateFileVersionByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFileVersionByIdRequestBody"',
        });
    }
    if (!(val.trashed_at == void 0) && !sdIsString(val.trashed_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "UpdateFileVersionByIdRequestBody"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : val.trashed_at;
    return { trashedAt: trashedAt };
}
export function serializePromoteFileVersionRequestBodyTypeField(val) {
    return val;
}
export function deserializePromoteFileVersionRequestBodyTypeField(val) {
    if (val == 'file_version') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize PromoteFileVersionRequestBodyTypeField",
    });
}
export function serializePromoteFileVersionRequestBody(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializePromoteFileVersionRequestBodyTypeField(val.type),
    };
}
export function deserializePromoteFileVersionRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "PromoteFileVersionRequestBody"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "PromoteFileVersionRequestBody"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializePromoteFileVersionRequestBodyTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=fileVersions.generated.js.map