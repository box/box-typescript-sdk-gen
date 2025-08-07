import { deserializeClassification } from '../schemas/classification.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetClassificationOnFileOptionals {
    constructor(fields) {
        this.headers = new GetClassificationOnFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class AddClassificationToFileOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new AddClassificationToFileHeaders({});
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
export class UpdateClassificationOnFileOptionals {
    constructor(fields) {
        this.headers = new UpdateClassificationOnFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteClassificationFromFileOptionals {
    constructor(fields) {
        this.headers = new DeleteClassificationFromFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetClassificationOnFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class AddClassificationToFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateClassificationOnFileRequestBody {
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
export class UpdateClassificationOnFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteClassificationFromFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class FileClassificationsManager {
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
       * has been applied to a file.
       *
       * This API can also be called by including the enterprise ID in the
       * URL explicitly, for example
       * `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetClassificationOnFileOptionalsInput} optionalsInput
       * @returns {Promise<Classification>}
       */
    async getClassificationOnFile(fileId, optionalsInput = {}) {
        const optionals = new GetClassificationOnFileOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/metadata/enterprise/securityClassification-6VMVochwUWo'),
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
       * Adds a classification to a file by specifying the label of the
       * classification to add.
       *
       * This API can also be called by including the enterprise ID in the
       * URL explicitly, for example
       * `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {AddClassificationToFileOptionalsInput} optionalsInput
       * @returns {Promise<Classification>}
       */
    async addClassificationToFile(fileId, optionalsInput = {}) {
        const optionals = new AddClassificationToFileOptionals({
            requestBody: optionalsInput.requestBody,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const requestBody = optionals.requestBody;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/metadata/enterprise/securityClassification-6VMVochwUWo'),
            method: 'POST',
            headers: headersMap,
            data: serializeAddClassificationToFileRequestBody(requestBody),
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
       * Updates a classification on a file.
       *
       * The classification can only be updated if a classification has already been
       * applied to the file before. When editing classifications, only values are
       * defined for the enterprise will be accepted.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {readonly UpdateClassificationOnFileRequestBody[]} requestBody Request body of updateClassificationOnFile method
       * @param {UpdateClassificationOnFileOptionalsInput} optionalsInput
       * @returns {Promise<Classification>}
       */
    async updateClassificationOnFile(fileId, requestBody, optionalsInput = {}) {
        const optionals = new UpdateClassificationOnFileOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/metadata/enterprise/securityClassification-6VMVochwUWo'),
            method: 'PUT',
            headers: headersMap,
            data: requestBody.map(serializeUpdateClassificationOnFileRequestBody),
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
       * Removes any classifications from a file.
       *
       * This API can also be called by including the enterprise ID in the
       * URL explicitly, for example
       * `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {DeleteClassificationFromFileOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteClassificationFromFile(fileId, optionalsInput = {}) {
        const optionals = new DeleteClassificationFromFileOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/metadata/enterprise/securityClassification-6VMVochwUWo'),
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
export function serializeAddClassificationToFileRequestBody(val) {
    return {
        ['Box__Security__Classification__Key']: val.boxSecurityClassificationKey,
    };
}
export function deserializeAddClassificationToFileRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AddClassificationToFileRequestBody"',
        });
    }
    if (!(val.Box__Security__Classification__Key == void 0) &&
        !sdIsString(val.Box__Security__Classification__Key)) {
        throw new BoxSdkError({
            message: 'Expecting string for "Box__Security__Classification__Key" of type "AddClassificationToFileRequestBody"',
        });
    }
    const boxSecurityClassificationKey = val.Box__Security__Classification__Key == void 0
        ? void 0
        : val.Box__Security__Classification__Key;
    return {
        boxSecurityClassificationKey: boxSecurityClassificationKey,
    };
}
export function serializeUpdateClassificationOnFileRequestBodyOpField(val) {
    return val;
}
export function deserializeUpdateClassificationOnFileRequestBodyOpField(val) {
    if (val == 'replace') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateClassificationOnFileRequestBodyOpField",
    });
}
export function serializeUpdateClassificationOnFileRequestBodyPathField(val) {
    return val;
}
export function deserializeUpdateClassificationOnFileRequestBodyPathField(val) {
    if (val == '/Box__Security__Classification__Key') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateClassificationOnFileRequestBodyPathField",
    });
}
export function serializeUpdateClassificationOnFileRequestBody(val) {
    return {
        ['op']: serializeUpdateClassificationOnFileRequestBodyOpField(val.op),
        ['path']: serializeUpdateClassificationOnFileRequestBodyPathField(val.path),
        ['value']: val.value,
    };
}
export function deserializeUpdateClassificationOnFileRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationOnFileRequestBody"',
        });
    }
    if (val.op == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "op" of type "UpdateClassificationOnFileRequestBody" to be defined',
        });
    }
    const op = deserializeUpdateClassificationOnFileRequestBodyOpField(val.op);
    if (val.path == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "path" of type "UpdateClassificationOnFileRequestBody" to be defined',
        });
    }
    const path = deserializeUpdateClassificationOnFileRequestBodyPathField(val.path);
    if (val.value == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "value" of type "UpdateClassificationOnFileRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.value)) {
        throw new BoxSdkError({
            message: 'Expecting string for "value" of type "UpdateClassificationOnFileRequestBody"',
        });
    }
    const value = val.value;
    return {
        op: op,
        path: path,
        value: value,
    };
}
export function serializeUpdateClassificationOnFileRequestBodyInput(val) {
    return {
        ['op']: val.op == void 0
            ? val.op
            : serializeUpdateClassificationOnFileRequestBodyOpField(val.op),
        ['path']: val.path == void 0
            ? val.path
            : serializeUpdateClassificationOnFileRequestBodyPathField(val.path),
        ['value']: val.value,
    };
}
export function deserializeUpdateClassificationOnFileRequestBodyInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationOnFileRequestBodyInput"',
        });
    }
    const op = val.op == void 0
        ? void 0
        : deserializeUpdateClassificationOnFileRequestBodyOpField(val.op);
    const path = val.path == void 0
        ? void 0
        : deserializeUpdateClassificationOnFileRequestBodyPathField(val.path);
    if (val.value == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "value" of type "UpdateClassificationOnFileRequestBodyInput" to be defined',
        });
    }
    if (!sdIsString(val.value)) {
        throw new BoxSdkError({
            message: 'Expecting string for "value" of type "UpdateClassificationOnFileRequestBodyInput"',
        });
    }
    const value = val.value;
    return {
        op: op,
        path: path,
        value: value,
    };
}
//# sourceMappingURL=fileClassifications.generated.js.map