"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderClassificationsManager = exports.DeleteClassificationFromFolderHeaders = exports.UpdateClassificationOnFolderHeaders = exports.UpdateClassificationOnFolderRequestBody = exports.AddClassificationToFolderHeaders = exports.GetClassificationOnFolderHeaders = exports.DeleteClassificationFromFolderOptionals = exports.UpdateClassificationOnFolderOptionals = exports.AddClassificationToFolderOptionals = exports.GetClassificationOnFolderOptionals = void 0;
exports.serializeAddClassificationToFolderRequestBody = serializeAddClassificationToFolderRequestBody;
exports.deserializeAddClassificationToFolderRequestBody = deserializeAddClassificationToFolderRequestBody;
exports.serializeUpdateClassificationOnFolderRequestBodyOpField = serializeUpdateClassificationOnFolderRequestBodyOpField;
exports.deserializeUpdateClassificationOnFolderRequestBodyOpField = deserializeUpdateClassificationOnFolderRequestBodyOpField;
exports.serializeUpdateClassificationOnFolderRequestBodyPathField = serializeUpdateClassificationOnFolderRequestBodyPathField;
exports.deserializeUpdateClassificationOnFolderRequestBodyPathField = deserializeUpdateClassificationOnFolderRequestBodyPathField;
exports.serializeUpdateClassificationOnFolderRequestBody = serializeUpdateClassificationOnFolderRequestBody;
exports.deserializeUpdateClassificationOnFolderRequestBody = deserializeUpdateClassificationOnFolderRequestBody;
exports.serializeUpdateClassificationOnFolderRequestBodyInput = serializeUpdateClassificationOnFolderRequestBodyInput;
exports.deserializeUpdateClassificationOnFolderRequestBodyInput = deserializeUpdateClassificationOnFolderRequestBodyInput;
const classification_generated_js_1 = require("../schemas/classification.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetClassificationOnFolderOptionals {
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
exports.GetClassificationOnFolderOptionals = GetClassificationOnFolderOptionals;
class AddClassificationToFolderOptionals {
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
exports.AddClassificationToFolderOptionals = AddClassificationToFolderOptionals;
class UpdateClassificationOnFolderOptionals {
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
exports.UpdateClassificationOnFolderOptionals = UpdateClassificationOnFolderOptionals;
class DeleteClassificationFromFolderOptionals {
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
exports.DeleteClassificationFromFolderOptionals = DeleteClassificationFromFolderOptionals;
class GetClassificationOnFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetClassificationOnFolderHeaders = GetClassificationOnFolderHeaders;
class AddClassificationToFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.AddClassificationToFolderHeaders = AddClassificationToFolderHeaders;
class UpdateClassificationOnFolderRequestBody {
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
exports.UpdateClassificationOnFolderRequestBody = UpdateClassificationOnFolderRequestBody;
class UpdateClassificationOnFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateClassificationOnFolderHeaders = UpdateClassificationOnFolderHeaders;
class DeleteClassificationFromFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteClassificationFromFolderHeaders = DeleteClassificationFromFolderHeaders;
class FolderClassificationsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
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
    getClassificationOnFolder(folderId_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, optionalsInput = {}) {
            const optionals = new GetClassificationOnFolderOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/metadata/enterprise/securityClassification-6VMVochwUWo'),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, classification_generated_js_1.deserializeClassification)(response.data)), { rawData: response.data });
        });
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
    addClassificationToFolder(folderId_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, optionalsInput = {}) {
            const optionals = new AddClassificationToFolderOptionals({
                requestBody: optionalsInput.requestBody,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const requestBody = optionals.requestBody;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/metadata/enterprise/securityClassification-6VMVochwUWo'),
                method: 'POST',
                headers: headersMap,
                data: serializeAddClassificationToFolderRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, classification_generated_js_1.deserializeClassification)(response.data)), { rawData: response.data });
        });
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
    updateClassificationOnFolder(folderId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, requestBody, optionalsInput = {}) {
            const optionals = new UpdateClassificationOnFolderOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/metadata/enterprise/securityClassification-6VMVochwUWo'),
                method: 'PUT',
                headers: headersMap,
                data: requestBody.map(serializeUpdateClassificationOnFolderRequestBody),
                contentType: 'application/json-patch+json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, classification_generated_js_1.deserializeClassification)(response.data)), { rawData: response.data });
        });
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
    deleteClassificationFromFolder(folderId_1) {
        return __awaiter(this, arguments, void 0, function* (folderId, optionalsInput = {}) {
            const optionals = new DeleteClassificationFromFolderOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', (0, utils_js_2.toString)(folderId), '/metadata/enterprise/securityClassification-6VMVochwUWo'),
                method: 'DELETE',
                headers: headersMap,
                responseFormat: 'no_content',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
    }
}
exports.FolderClassificationsManager = FolderClassificationsManager;
function serializeAddClassificationToFolderRequestBody(val) {
    return {
        ['Box__Security__Classification__Key']: val.boxSecurityClassificationKey,
    };
}
function deserializeAddClassificationToFolderRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddClassificationToFolderRequestBody"',
        });
    }
    if (!(val.Box__Security__Classification__Key == void 0) &&
        !(0, json_js_1.sdIsString)(val.Box__Security__Classification__Key)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeUpdateClassificationOnFolderRequestBodyOpField(val) {
    return val;
}
function deserializeUpdateClassificationOnFolderRequestBodyOpField(val) {
    if (val == 'replace') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateClassificationOnFolderRequestBodyOpField",
    });
}
function serializeUpdateClassificationOnFolderRequestBodyPathField(val) {
    return val;
}
function deserializeUpdateClassificationOnFolderRequestBodyPathField(val) {
    if (val == '/Box__Security__Classification__Key') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateClassificationOnFolderRequestBodyPathField",
    });
}
function serializeUpdateClassificationOnFolderRequestBody(val) {
    return {
        ['op']: serializeUpdateClassificationOnFolderRequestBodyOpField(val.op),
        ['path']: serializeUpdateClassificationOnFolderRequestBodyPathField(val.path),
        ['value']: val.value,
    };
}
function deserializeUpdateClassificationOnFolderRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationOnFolderRequestBody"',
        });
    }
    if (val.op == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "op" of type "UpdateClassificationOnFolderRequestBody" to be defined',
        });
    }
    const op = deserializeUpdateClassificationOnFolderRequestBodyOpField(val.op);
    if (val.path == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "path" of type "UpdateClassificationOnFolderRequestBody" to be defined',
        });
    }
    const path = deserializeUpdateClassificationOnFolderRequestBodyPathField(val.path);
    if (val.value == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "value" of type "UpdateClassificationOnFolderRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.value)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeUpdateClassificationOnFolderRequestBodyInput(val) {
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
function deserializeUpdateClassificationOnFolderRequestBodyInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
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
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "value" of type "UpdateClassificationOnFolderRequestBodyInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.value)) {
        throw new errors_js_1.BoxSdkError({
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