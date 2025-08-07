import { deserializeClassification } from '../schemas/classification.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetClassificationOnFolderOptionals {
    constructor(fields) {
        this.headers = new GetClassificationOnFolderHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class AddClassificationToFolderOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new AddClassificationToFolderHeaders({});
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
export class UpdateClassificationOnFolderOptionals {
    constructor(fields) {
        this.headers = new UpdateClassificationOnFolderHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteClassificationFromFolderOptionals {
    constructor(fields) {
        this.headers = new DeleteClassificationFromFolderHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetClassificationOnFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class AddClassificationToFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateClassificationOnFolderRequestBody {
    constructor(fields) {
        /**
         * The value will always be `replace`. */
        this.op = 'replace';
        /**
         * Defines classifications
         * available in the enterprise. */
        this.path = '/Box__Security__Classification__Key';
        if (fields.op !== undefined) {
            this.op = fields.op;
        }
        if (fields.path !== undefined) {
            this.path = fields.path;
        }
        if (fields.value !== undefined) {
            this.value = fields.value;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export class UpdateClassificationOnFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteClassificationFromFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class FolderClassificationsManager {
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
       * Retrieves the classification metadata instance that
       * has been applied to a folder.
       *
       * This API can also be called by including the enterprise ID in the
       * URL explicitly, for example
       * `/folders/:id/enterprise_12345/securityClassification-6VMVochwUWo`.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetClassificationOnFolderOptionalsInput} optionalsInput
       * @returns {Promise<Classification>}
       */
    async getClassificationOnFolder(folderId, optionalsInput = {}) {
        const optionals = new GetClassificationOnFolderOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/metadata/enterprise/securityClassification-6VMVochwUWo'),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeClassification(response.data),
            rawData: response.data,
        };
    }
    /**
       * Adds a classification to a folder by specifying the label of the
       * classification to add.
       *
       * This API can also be called by including the enterprise ID in the
       * URL explicitly, for example
       * `/folders/:id/enterprise_12345/securityClassification-6VMVochwUWo`.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {AddClassificationToFolderOptionalsInput} optionalsInput
       * @returns {Promise<Classification>}
       */
    async addClassificationToFolder(folderId, optionalsInput = {}) {
        const optionals = new AddClassificationToFolderOptionals({
            requestBody: optionalsInput.requestBody,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const requestBody = optionals.requestBody;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/metadata/enterprise/securityClassification-6VMVochwUWo'),
            method: 'POST',
            headers: headersMap,
            data: serializeAddClassificationToFolderRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeClassification(response.data),
            rawData: response.data,
        };
    }
    /**
       * Updates a classification on a folder.
       *
       * The classification can only be updated if a classification has already been
       * applied to the folder before. When editing classifications, only values are
       * defined for the enterprise will be accepted.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {readonly UpdateClassificationOnFolderRequestBody[]} requestBody Request body of updateClassificationOnFolder method
       * @param {UpdateClassificationOnFolderOptionalsInput} optionalsInput
       * @returns {Promise<Classification>}
       */
    async updateClassificationOnFolder(folderId, requestBody, optionalsInput = {}) {
        const optionals = new UpdateClassificationOnFolderOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/metadata/enterprise/securityClassification-6VMVochwUWo'),
            method: 'PUT',
            headers: headersMap,
            data: requestBody.map(serializeUpdateClassificationOnFolderRequestBody),
            contentType: 'application/json-patch+json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeClassification(response.data),
            rawData: response.data,
        };
    }
    /**
       * Removes any classifications from a folder.
       *
       * This API can also be called by including the enterprise ID in the
       * URL explicitly, for example
       * `/folders/:id/enterprise_12345/securityClassification-6VMVochwUWo`.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {DeleteClassificationFromFolderOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteClassificationFromFolder(folderId, optionalsInput = {}) {
        const optionals = new DeleteClassificationFromFolderOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/metadata/enterprise/securityClassification-6VMVochwUWo'),
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
export function serializeAddClassificationToFolderRequestBody(val) {
    return {
        ['Box__Security__Classification__Key']: val.boxSecurityClassificationKey,
    };
}
export function deserializeAddClassificationToFolderRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AddClassificationToFolderRequestBody"',
        });
    }
    if (!(val.Box__Security__Classification__Key == void 0) &&
        !sdIsString(val.Box__Security__Classification__Key)) {
        throw new BoxSdkError({
            message: 'Expecting string for "Box__Security__Classification__Key" of type "AddClassificationToFolderRequestBody"',
        });
    }
    const boxSecurityClassificationKey = val.Box__Security__Classification__Key == void 0
        ? void 0
        : val.Box__Security__Classification__Key;
    return {
        boxSecurityClassificationKey: boxSecurityClassificationKey,
    };
}
export function serializeUpdateClassificationOnFolderRequestBodyOpField(val) {
    return val;
}
export function deserializeUpdateClassificationOnFolderRequestBodyOpField(val) {
    if (val == 'replace') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateClassificationOnFolderRequestBodyOpField",
    });
}
export function serializeUpdateClassificationOnFolderRequestBodyPathField(val) {
    return val;
}
export function deserializeUpdateClassificationOnFolderRequestBodyPathField(val) {
    if (val == '/Box__Security__Classification__Key') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateClassificationOnFolderRequestBodyPathField",
    });
}
export function serializeUpdateClassificationOnFolderRequestBody(val) {
    return {
        ['op']: serializeUpdateClassificationOnFolderRequestBodyOpField(val.op),
        ['path']: serializeUpdateClassificationOnFolderRequestBodyPathField(val.path),
        ['value']: val.value,
    };
}
export function deserializeUpdateClassificationOnFolderRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationOnFolderRequestBody"',
        });
    }
    if (val.op == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "op" of type "UpdateClassificationOnFolderRequestBody" to be defined',
        });
    }
    const op = deserializeUpdateClassificationOnFolderRequestBodyOpField(val.op);
    if (val.path == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "path" of type "UpdateClassificationOnFolderRequestBody" to be defined',
        });
    }
    const path = deserializeUpdateClassificationOnFolderRequestBodyPathField(val.path);
    if (val.value == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "value" of type "UpdateClassificationOnFolderRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.value)) {
        throw new BoxSdkError({
            message: 'Expecting string for "value" of type "UpdateClassificationOnFolderRequestBody"',
        });
    }
    const value = val.value;
    return {
        op: op,
        path: path,
        value: value,
    };
}
export function serializeUpdateClassificationOnFolderRequestBodyInput(val) {
    return {
        ['op']: val.op == void 0
            ? val.op
            : serializeUpdateClassificationOnFolderRequestBodyOpField(val.op),
        ['path']: val.path == void 0
            ? val.path
            : serializeUpdateClassificationOnFolderRequestBodyPathField(val.path),
        ['value']: val.value,
    };
}
export function deserializeUpdateClassificationOnFolderRequestBodyInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationOnFolderRequestBodyInput"',
        });
    }
    const op = val.op == void 0
        ? void 0
        : deserializeUpdateClassificationOnFolderRequestBodyOpField(val.op);
    const path = val.path == void 0
        ? void 0
        : deserializeUpdateClassificationOnFolderRequestBodyPathField(val.path);
    if (val.value == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "value" of type "UpdateClassificationOnFolderRequestBodyInput" to be defined',
        });
    }
    if (!sdIsString(val.value)) {
        throw new BoxSdkError({
            message: 'Expecting string for "value" of type "UpdateClassificationOnFolderRequestBodyInput"',
        });
    }
    const value = val.value;
    return {
        op: op,
        path: path,
        value: value,
    };
}
//# sourceMappingURL=folderClassifications.generated.js.map