import { deserializeMetadatas } from '../schemas/metadatas.generated.js';
import { deserializeMetadataFull } from '../schemas/metadataFull.generated.js';
import { serializeMetadataInstanceValue } from '../schemas/metadataInstanceValue.generated.js';
import { deserializeMetadataInstanceValue } from '../schemas/metadataInstanceValue.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetFileMetadataOptionals {
    constructor(fields) {
        this.headers = new GetFileMetadataHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFileMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new GetFileMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateFileMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new CreateFileMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateFileMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new UpdateFileMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteFileMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteFileMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFileMetadataHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetFileMetadataByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateFileMetadataByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateFileMetadataByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteFileMetadataByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class FileMetadataManager {
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
       * Retrieves all metadata for a given file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileMetadataOptionalsInput} optionalsInput
       * @returns {Promise<Metadatas>}
       */
    async getFileMetadata(fileId, optionalsInput = {}) {
        const optionals = new GetFileMetadataOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/metadata'),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeMetadatas(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieves the instance of a metadata template that has been applied to a
       * file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {GetFileMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataFull>}
       */
    async getFileMetadataById(fileId, scope, templateKey, optionalsInput = {}) {
        const optionals = new GetFileMetadataByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/metadata/', toString(scope), '/', toString(templateKey)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeMetadataFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Applies an instance of a metadata template to a file.
       *
       * In most cases only values that are present in the metadata template
       * will be accepted, except for the `global.properties` template which accepts
       * any key-value pair.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {CreateFileMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {CreateFileMetadataByIdRequestBody} requestBody Request body of createFileMetadataById method
       * @param {CreateFileMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataFull>}
       */
    async createFileMetadataById(fileId, scope, templateKey, requestBody, optionalsInput = {}) {
        const optionals = new CreateFileMetadataByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/metadata/', toString(scope), '/', toString(templateKey)),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateFileMetadataByIdRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeMetadataFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Updates a piece of metadata on a file.
       *
       * The metadata instance can only be updated if the template has already been
       * applied to the file before. When editing metadata, only values that match
       * the metadata template schema will be accepted.
       *
       * The update is applied atomically. If any errors occur during the
       * application of the operations, the metadata instance will not be changed.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {UpdateFileMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {readonly UpdateFileMetadataByIdRequestBody[]} requestBody Request body of updateFileMetadataById method
       * @param {UpdateFileMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataFull>}
       */
    async updateFileMetadataById(fileId, scope, templateKey, requestBody, optionalsInput = {}) {
        const optionals = new UpdateFileMetadataByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/metadata/', toString(scope), '/', toString(templateKey)),
            method: 'PUT',
            headers: headersMap,
            data: requestBody.map(serializeUpdateFileMetadataByIdRequestBody),
            contentType: 'application/json-patch+json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeMetadataFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Deletes a piece of file metadata.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {DeleteFileMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {DeleteFileMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteFileMetadataById(fileId, scope, templateKey, optionalsInput = {}) {
        const optionals = new DeleteFileMetadataByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/metadata/', toString(scope), '/', toString(templateKey)),
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
export function serializeGetFileMetadataByIdScope(val) {
    return val;
}
export function deserializeGetFileMetadataByIdScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetFileMetadataByIdScope",
    });
}
export function serializeCreateFileMetadataByIdScope(val) {
    return val;
}
export function deserializeCreateFileMetadataByIdScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateFileMetadataByIdScope",
    });
}
export function serializeCreateFileMetadataByIdRequestBody(val) {
    return Object.fromEntries(Object.entries(val).map(([k, v]) => [
        k,
        (function (v) {
            return v;
        })(v),
    ]));
}
export function deserializeCreateFileMetadataByIdRequestBody(val) {
    return sdIsMap(val)
        ? Object.fromEntries(Object.entries(val).map(([k, v]) => [
            k,
            (function (v) {
                return v;
            })(v),
        ]))
        : {};
}
export function serializeUpdateFileMetadataByIdScope(val) {
    return val;
}
export function deserializeUpdateFileMetadataByIdScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateFileMetadataByIdScope",
    });
}
export function serializeUpdateFileMetadataByIdRequestBodyOpField(val) {
    return val;
}
export function deserializeUpdateFileMetadataByIdRequestBodyOpField(val) {
    if (val == 'add') {
        return val;
    }
    if (val == 'replace') {
        return val;
    }
    if (val == 'remove') {
        return val;
    }
    if (val == 'test') {
        return val;
    }
    if (val == 'move') {
        return val;
    }
    if (val == 'copy') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateFileMetadataByIdRequestBodyOpField",
    });
}
export function serializeUpdateFileMetadataByIdRequestBody(val) {
    return {
        ['op']: val.op == void 0
            ? val.op
            : serializeUpdateFileMetadataByIdRequestBodyOpField(val.op),
        ['path']: val.path,
        ['value']: val.value == void 0
            ? val.value
            : serializeMetadataInstanceValue(val.value),
        ['from']: val.from,
    };
}
export function deserializeUpdateFileMetadataByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFileMetadataByIdRequestBody"',
        });
    }
    const op = val.op == void 0
        ? void 0
        : deserializeUpdateFileMetadataByIdRequestBodyOpField(val.op);
    if (!(val.path == void 0) && !sdIsString(val.path)) {
        throw new BoxSdkError({
            message: 'Expecting string for "path" of type "UpdateFileMetadataByIdRequestBody"',
        });
    }
    const path = val.path == void 0 ? void 0 : val.path;
    const value = val.value == void 0 ? void 0 : deserializeMetadataInstanceValue(val.value);
    if (!(val.from == void 0) && !sdIsString(val.from)) {
        throw new BoxSdkError({
            message: 'Expecting string for "from" of type "UpdateFileMetadataByIdRequestBody"',
        });
    }
    const from = val.from == void 0 ? void 0 : val.from;
    return {
        op: op,
        path: path,
        value: value,
        from: from,
    };
}
export function serializeDeleteFileMetadataByIdScope(val) {
    return val;
}
export function deserializeDeleteFileMetadataByIdScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize DeleteFileMetadataByIdScope",
    });
}
//# sourceMappingURL=fileMetadata.generated.js.map