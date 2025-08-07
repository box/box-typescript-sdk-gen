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
export class GetFolderMetadataOptionals {
    constructor(fields) {
        this.headers = new GetFolderMetadataHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFolderMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new GetFolderMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateFolderMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new CreateFolderMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateFolderMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new UpdateFolderMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteFolderMetadataByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteFolderMetadataByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFolderMetadataHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetFolderMetadataByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateFolderMetadataByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateFolderMetadataByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteFolderMetadataByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class FolderMetadataManager {
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
       * Retrieves all metadata for a given folder. This can not be used on the root
       * folder with ID `0`.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetFolderMetadataOptionalsInput} optionalsInput
       * @returns {Promise<Metadatas>}
       */
    async getFolderMetadata(folderId, optionalsInput = {}) {
        const optionals = new GetFolderMetadataOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/metadata'),
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
       * folder. This can not be used on the root folder with ID `0`.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetFolderMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {GetFolderMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataFull>}
       */
    async getFolderMetadataById(folderId, scope, templateKey, optionalsInput = {}) {
        const optionals = new GetFolderMetadataByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/metadata/', toString(scope), '/', toString(templateKey)),
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
       * Applies an instance of a metadata template to a folder.
       *
       * In most cases only values that are present in the metadata template
       * will be accepted, except for the `global.properties` template which accepts
       * any key-value pair.
       *
       * To display the metadata template in the Box web app the enterprise needs to be
       * configured to enable **Cascading Folder Level Metadata** for the user in the
       * admin console.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {CreateFolderMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {CreateFolderMetadataByIdRequestBody} requestBody Request body of createFolderMetadataById method
       * @param {CreateFolderMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataFull>}
       */
    async createFolderMetadataById(folderId, scope, templateKey, requestBody, optionalsInput = {}) {
        const optionals = new CreateFolderMetadataByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/metadata/', toString(scope), '/', toString(templateKey)),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateFolderMetadataByIdRequestBody(requestBody),
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
       * Updates a piece of metadata on a folder.
       *
       * The metadata instance can only be updated if the template has already been
       * applied to the folder before. When editing metadata, only values that match
       * the metadata template schema will be accepted.
       *
       * The update is applied atomically. If any errors occur during the
       * application of the operations, the metadata instance will not be changed.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {UpdateFolderMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {readonly UpdateFolderMetadataByIdRequestBody[]} requestBody Request body of updateFolderMetadataById method
       * @param {UpdateFolderMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataFull>}
       */
    async updateFolderMetadataById(folderId, scope, templateKey, requestBody, optionalsInput = {}) {
        const optionals = new UpdateFolderMetadataByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/metadata/', toString(scope), '/', toString(templateKey)),
            method: 'PUT',
            headers: headersMap,
            data: requestBody.map(serializeUpdateFolderMetadataByIdRequestBody),
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
       * Deletes a piece of folder metadata.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {DeleteFolderMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {DeleteFolderMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteFolderMetadataById(folderId, scope, templateKey, optionalsInput = {}) {
        const optionals = new DeleteFolderMetadataByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/metadata/', toString(scope), '/', toString(templateKey)),
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
export function serializeGetFolderMetadataByIdScope(val) {
    return val;
}
export function deserializeGetFolderMetadataByIdScope(val) {
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
        message: "Can't deserialize GetFolderMetadataByIdScope",
    });
}
export function serializeCreateFolderMetadataByIdScope(val) {
    return val;
}
export function deserializeCreateFolderMetadataByIdScope(val) {
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
        message: "Can't deserialize CreateFolderMetadataByIdScope",
    });
}
export function serializeCreateFolderMetadataByIdRequestBody(val) {
    return Object.fromEntries(Object.entries(val).map(([k, v]) => [
        k,
        (function (v) {
            return v;
        })(v),
    ]));
}
export function deserializeCreateFolderMetadataByIdRequestBody(val) {
    return sdIsMap(val)
        ? Object.fromEntries(Object.entries(val).map(([k, v]) => [
            k,
            (function (v) {
                return v;
            })(v),
        ]))
        : {};
}
export function serializeUpdateFolderMetadataByIdScope(val) {
    return val;
}
export function deserializeUpdateFolderMetadataByIdScope(val) {
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
        message: "Can't deserialize UpdateFolderMetadataByIdScope",
    });
}
export function serializeUpdateFolderMetadataByIdRequestBodyOpField(val) {
    return val;
}
export function deserializeUpdateFolderMetadataByIdRequestBodyOpField(val) {
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
        message: "Can't deserialize UpdateFolderMetadataByIdRequestBodyOpField",
    });
}
export function serializeUpdateFolderMetadataByIdRequestBody(val) {
    return {
        ['op']: val.op == void 0
            ? val.op
            : serializeUpdateFolderMetadataByIdRequestBodyOpField(val.op),
        ['path']: val.path,
        ['value']: val.value == void 0
            ? val.value
            : serializeMetadataInstanceValue(val.value),
        ['from']: val.from,
    };
}
export function deserializeUpdateFolderMetadataByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFolderMetadataByIdRequestBody"',
        });
    }
    const op = val.op == void 0
        ? void 0
        : deserializeUpdateFolderMetadataByIdRequestBodyOpField(val.op);
    if (!(val.path == void 0) && !sdIsString(val.path)) {
        throw new BoxSdkError({
            message: 'Expecting string for "path" of type "UpdateFolderMetadataByIdRequestBody"',
        });
    }
    const path = val.path == void 0 ? void 0 : val.path;
    const value = val.value == void 0 ? void 0 : deserializeMetadataInstanceValue(val.value);
    if (!(val.from == void 0) && !sdIsString(val.from)) {
        throw new BoxSdkError({
            message: 'Expecting string for "from" of type "UpdateFolderMetadataByIdRequestBody"',
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
export function serializeDeleteFolderMetadataByIdScope(val) {
    return val;
}
export function deserializeDeleteFolderMetadataByIdScope(val) {
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
        message: "Can't deserialize DeleteFolderMetadataByIdScope",
    });
}
//# sourceMappingURL=folderMetadata.generated.js.map