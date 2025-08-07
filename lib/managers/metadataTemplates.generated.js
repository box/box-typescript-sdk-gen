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
exports.MetadataTemplatesManager = exports.CreateMetadataTemplateHeaders = exports.GetEnterpriseMetadataTemplatesHeaders = exports.GetGlobalMetadataTemplatesHeaders = exports.GetMetadataTemplateByIdHeaders = exports.DeleteMetadataTemplateHeaders = exports.UpdateMetadataTemplateHeaders = exports.GetMetadataTemplateHeaders = exports.GetMetadataTemplatesByInstanceIdHeaders = exports.CreateMetadataTemplateOptionals = exports.GetMetadataTemplateByIdOptionals = exports.DeleteMetadataTemplateOptionals = exports.UpdateMetadataTemplateOptionals = exports.GetMetadataTemplateOptionals = exports.GetMetadataTemplatesByInstanceIdOptionals = void 0;
exports.serializeGetMetadataTemplateScope = serializeGetMetadataTemplateScope;
exports.deserializeGetMetadataTemplateScope = deserializeGetMetadataTemplateScope;
exports.serializeUpdateMetadataTemplateScope = serializeUpdateMetadataTemplateScope;
exports.deserializeUpdateMetadataTemplateScope = deserializeUpdateMetadataTemplateScope;
exports.serializeUpdateMetadataTemplateRequestBodyOpField = serializeUpdateMetadataTemplateRequestBodyOpField;
exports.deserializeUpdateMetadataTemplateRequestBodyOpField = deserializeUpdateMetadataTemplateRequestBodyOpField;
exports.serializeUpdateMetadataTemplateRequestBody = serializeUpdateMetadataTemplateRequestBody;
exports.deserializeUpdateMetadataTemplateRequestBody = deserializeUpdateMetadataTemplateRequestBody;
exports.serializeDeleteMetadataTemplateScope = serializeDeleteMetadataTemplateScope;
exports.deserializeDeleteMetadataTemplateScope = deserializeDeleteMetadataTemplateScope;
exports.serializeCreateMetadataTemplateRequestBodyFieldsTypeField = serializeCreateMetadataTemplateRequestBodyFieldsTypeField;
exports.deserializeCreateMetadataTemplateRequestBodyFieldsTypeField = deserializeCreateMetadataTemplateRequestBodyFieldsTypeField;
exports.serializeCreateMetadataTemplateRequestBodyFieldsOptionsField = serializeCreateMetadataTemplateRequestBodyFieldsOptionsField;
exports.deserializeCreateMetadataTemplateRequestBodyFieldsOptionsField = deserializeCreateMetadataTemplateRequestBodyFieldsOptionsField;
exports.serializeCreateMetadataTemplateRequestBodyFieldsField = serializeCreateMetadataTemplateRequestBodyFieldsField;
exports.deserializeCreateMetadataTemplateRequestBodyFieldsField = deserializeCreateMetadataTemplateRequestBodyFieldsField;
exports.serializeCreateMetadataTemplateRequestBody = serializeCreateMetadataTemplateRequestBody;
exports.deserializeCreateMetadataTemplateRequestBody = deserializeCreateMetadataTemplateRequestBody;
const metadataTemplates_generated_js_1 = require("../schemas/metadataTemplates.generated.js");
const metadataTemplate_generated_js_1 = require("../schemas/metadataTemplate.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
class GetMetadataTemplatesByInstanceIdOptionals {
    constructor(fields) {
        this.headers = new GetMetadataTemplatesByInstanceIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetMetadataTemplatesByInstanceIdOptionals = GetMetadataTemplatesByInstanceIdOptionals;
class GetMetadataTemplateOptionals {
    constructor(fields) {
        this.headers = new GetMetadataTemplateHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetMetadataTemplateOptionals = GetMetadataTemplateOptionals;
class UpdateMetadataTemplateOptionals {
    constructor(fields) {
        this.headers = new UpdateMetadataTemplateHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateMetadataTemplateOptionals = UpdateMetadataTemplateOptionals;
class DeleteMetadataTemplateOptionals {
    constructor(fields) {
        this.headers = new DeleteMetadataTemplateHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteMetadataTemplateOptionals = DeleteMetadataTemplateOptionals;
class GetMetadataTemplateByIdOptionals {
    constructor(fields) {
        this.headers = new GetMetadataTemplateByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetMetadataTemplateByIdOptionals = GetMetadataTemplateByIdOptionals;
class CreateMetadataTemplateOptionals {
    constructor(fields) {
        this.headers = new CreateMetadataTemplateHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateMetadataTemplateOptionals = CreateMetadataTemplateOptionals;
class GetMetadataTemplatesByInstanceIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetMetadataTemplatesByInstanceIdHeaders = GetMetadataTemplatesByInstanceIdHeaders;
class GetMetadataTemplateHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetMetadataTemplateHeaders = GetMetadataTemplateHeaders;
class UpdateMetadataTemplateHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateMetadataTemplateHeaders = UpdateMetadataTemplateHeaders;
class DeleteMetadataTemplateHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteMetadataTemplateHeaders = DeleteMetadataTemplateHeaders;
class GetMetadataTemplateByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetMetadataTemplateByIdHeaders = GetMetadataTemplateByIdHeaders;
class GetGlobalMetadataTemplatesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetGlobalMetadataTemplatesHeaders = GetGlobalMetadataTemplatesHeaders;
class GetEnterpriseMetadataTemplatesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetEnterpriseMetadataTemplatesHeaders = GetEnterpriseMetadataTemplatesHeaders;
class CreateMetadataTemplateHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateMetadataTemplateHeaders = CreateMetadataTemplateHeaders;
class MetadataTemplatesManager {
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
     * Finds a metadata template by searching for the ID of an instance of the
     * template.
     * @param {GetMetadataTemplatesByInstanceIdQueryParams} queryParams Query parameters of getMetadataTemplatesByInstanceId method
     * @param {GetMetadataTemplatesByInstanceIdOptionalsInput} optionalsInput
     * @returns {Promise<MetadataTemplates>}
     */
    getMetadataTemplatesByInstanceId(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetMetadataTemplatesByInstanceIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['metadata_instance_id']: (0, utils_js_2.toString)(queryParams.metadataInstanceId),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, metadataTemplates_generated_js_1.deserializeMetadataTemplates)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves a metadata template by its `scope` and `templateKey` values.
       *
       * To find the `scope` and `templateKey` for a template, list all templates for
       * an enterprise or globally, or list all templates applied to a file or folder.
       * @param {GetMetadataTemplateScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {GetMetadataTemplateOptionalsInput} optionalsInput
       * @returns {Promise<MetadataTemplate>}
       */
    getMetadataTemplate(scope_1, templateKey_1) {
        return __awaiter(this, arguments, void 0, function* (scope, templateKey, optionalsInput = {}) {
            const optionals = new GetMetadataTemplateOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/', (0, utils_js_2.toString)(scope), '/', (0, utils_js_2.toString)(templateKey), '/schema'),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, metadataTemplate_generated_js_1.deserializeMetadataTemplate)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates a metadata template.
       *
       * The metadata template can only be updated if the template
       * already exists.
       *
       * The update is applied atomically. If any errors occur during the
       * application of the operations, the metadata template will not be changed.
       * @param {UpdateMetadataTemplateScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {readonly UpdateMetadataTemplateRequestBody[]} requestBody Request body of updateMetadataTemplate method
       * @param {UpdateMetadataTemplateOptionalsInput} optionalsInput
       * @returns {Promise<MetadataTemplate>}
       */
    updateMetadataTemplate(scope_1, templateKey_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (scope, templateKey, requestBody, optionalsInput = {}) {
            const optionals = new UpdateMetadataTemplateOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/', (0, utils_js_2.toString)(scope), '/', (0, utils_js_2.toString)(templateKey), '/schema'),
                method: 'PUT',
                headers: headersMap,
                data: requestBody.map(serializeUpdateMetadataTemplateRequestBody),
                contentType: 'application/json-patch+json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, metadataTemplate_generated_js_1.deserializeMetadataTemplate)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Delete a metadata template and its instances.
       * This deletion is permanent and can not be reversed.
       * @param {DeleteMetadataTemplateScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {DeleteMetadataTemplateOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteMetadataTemplate(scope_1, templateKey_1) {
        return __awaiter(this, arguments, void 0, function* (scope, templateKey, optionalsInput = {}) {
            const optionals = new DeleteMetadataTemplateOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/', (0, utils_js_2.toString)(scope), '/', (0, utils_js_2.toString)(templateKey), '/schema'),
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
    /**
       * Retrieves a metadata template by its ID.
       * @param {string} templateId The ID of the template.
      Example: "f7a9891f"
       * @param {GetMetadataTemplateByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataTemplate>}
       */
    getMetadataTemplateById(templateId_1) {
        return __awaiter(this, arguments, void 0, function* (templateId, optionalsInput = {}) {
            const optionals = new GetMetadataTemplateByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/', (0, utils_js_2.toString)(templateId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, metadataTemplate_generated_js_1.deserializeMetadataTemplate)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Used to retrieve all generic, global metadata templates available to all
     * enterprises using Box.
     * @param {GetGlobalMetadataTemplatesQueryParams} queryParams Query parameters of getGlobalMetadataTemplates method
     * @param {GetGlobalMetadataTemplatesHeadersInput} headersInput Headers of getGlobalMetadataTemplates method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<MetadataTemplates>}
     */
    getGlobalMetadataTemplates() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetGlobalMetadataTemplatesHeaders({}), cancellationToken) {
            const headers = new GetGlobalMetadataTemplatesHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/global'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, metadataTemplates_generated_js_1.deserializeMetadataTemplates)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Used to retrieve all metadata templates created to be used specifically within
     * the user's enterprise.
     * @param {GetEnterpriseMetadataTemplatesQueryParams} queryParams Query parameters of getEnterpriseMetadataTemplates method
     * @param {GetEnterpriseMetadataTemplatesHeadersInput} headersInput Headers of getEnterpriseMetadataTemplates method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<MetadataTemplates>}
     */
    getEnterpriseMetadataTemplates() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetEnterpriseMetadataTemplatesHeaders({}), cancellationToken) {
            const headers = new GetEnterpriseMetadataTemplatesHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/enterprise'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, metadataTemplates_generated_js_1.deserializeMetadataTemplates)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a new metadata template that can be applied to
     * files and folders.
     * @param {CreateMetadataTemplateRequestBody} requestBody Request body of createMetadataTemplate method
     * @param {CreateMetadataTemplateOptionalsInput} optionalsInput
     * @returns {Promise<MetadataTemplate>}
     */
    createMetadataTemplate(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateMetadataTemplateOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/schema'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateMetadataTemplateRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, metadataTemplate_generated_js_1.deserializeMetadataTemplate)(response.data)), { rawData: response.data });
        });
    }
}
exports.MetadataTemplatesManager = MetadataTemplatesManager;
function serializeGetMetadataTemplateScope(val) {
    return val;
}
function deserializeGetMetadataTemplateScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetMetadataTemplateScope",
    });
}
function serializeUpdateMetadataTemplateScope(val) {
    return val;
}
function deserializeUpdateMetadataTemplateScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateMetadataTemplateScope",
    });
}
function serializeUpdateMetadataTemplateRequestBodyOpField(val) {
    return val;
}
function deserializeUpdateMetadataTemplateRequestBodyOpField(val) {
    if (val == 'editTemplate') {
        return val;
    }
    if (val == 'addField') {
        return val;
    }
    if (val == 'reorderFields') {
        return val;
    }
    if (val == 'addEnumOption') {
        return val;
    }
    if (val == 'reorderEnumOptions') {
        return val;
    }
    if (val == 'reorderMultiSelectOptions') {
        return val;
    }
    if (val == 'addMultiSelectOption') {
        return val;
    }
    if (val == 'editField') {
        return val;
    }
    if (val == 'removeField') {
        return val;
    }
    if (val == 'editEnumOption') {
        return val;
    }
    if (val == 'removeEnumOption') {
        return val;
    }
    if (val == 'editMultiSelectOption') {
        return val;
    }
    if (val == 'removeMultiSelectOption') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateMetadataTemplateRequestBodyOpField",
    });
}
function serializeUpdateMetadataTemplateRequestBody(val) {
    return {
        ['op']: serializeUpdateMetadataTemplateRequestBodyOpField(val.op),
        ['data']: val.data == void 0
            ? val.data
            : Object.fromEntries(Object.entries(val.data).map(([k, v]) => [
                k,
                (function (v) {
                    return v;
                })(v),
            ])),
        ['fieldKey']: val.fieldKey,
        ['fieldKeys']: val.fieldKeys == void 0
            ? val.fieldKeys
            : val.fieldKeys.map(function (item) {
                return item;
            }),
        ['enumOptionKey']: val.enumOptionKey,
        ['enumOptionKeys']: val.enumOptionKeys == void 0
            ? val.enumOptionKeys
            : val.enumOptionKeys.map(function (item) {
                return item;
            }),
        ['multiSelectOptionKey']: val.multiSelectOptionKey,
        ['multiSelectOptionKeys']: val.multiSelectOptionKeys == void 0
            ? val.multiSelectOptionKeys
            : val.multiSelectOptionKeys.map(function (item) {
                return item;
            }),
    };
}
function deserializeUpdateMetadataTemplateRequestBody(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateMetadataTemplateRequestBody"',
        });
    }
    if (val.op == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "op" of type "UpdateMetadataTemplateRequestBody" to be defined',
        });
    }
    const op = deserializeUpdateMetadataTemplateRequestBodyOpField(val.op);
    if (!(val.data == void 0) && !(0, json_js_4.sdIsMap)(val.data)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting object for "data" of type "UpdateMetadataTemplateRequestBody"',
        });
    }
    const data = val.data == void 0
        ? void 0
        : (0, json_js_4.sdIsMap)(val.data)
            ? Object.fromEntries(Object.entries(val.data).map(([k, v]) => [
                k,
                (function (v) {
                    return v;
                })(v),
            ]))
            : {};
    if (!(val.fieldKey == void 0) && !(0, json_js_2.sdIsString)(val.fieldKey)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "fieldKey" of type "UpdateMetadataTemplateRequestBody"',
        });
    }
    const fieldKey = val.fieldKey == void 0 ? void 0 : val.fieldKey;
    if (!(val.fieldKeys == void 0) && !(0, json_js_3.sdIsList)(val.fieldKeys)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "fieldKeys" of type "UpdateMetadataTemplateRequestBody"',
        });
    }
    const fieldKeys = val.fieldKeys == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.fieldKeys)
            ? val.fieldKeys.map(function (itm) {
                if (!(0, json_js_2.sdIsString)(itm)) {
                    throw new errors_js_1.BoxSdkError({
                        message: 'Expecting string for "UpdateMetadataTemplateRequestBody"',
                    });
                }
                return itm;
            })
            : [];
    if (!(val.enumOptionKey == void 0) && !(0, json_js_2.sdIsString)(val.enumOptionKey)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "enumOptionKey" of type "UpdateMetadataTemplateRequestBody"',
        });
    }
    const enumOptionKey = val.enumOptionKey == void 0 ? void 0 : val.enumOptionKey;
    if (!(val.enumOptionKeys == void 0) && !(0, json_js_3.sdIsList)(val.enumOptionKeys)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "enumOptionKeys" of type "UpdateMetadataTemplateRequestBody"',
        });
    }
    const enumOptionKeys = val.enumOptionKeys == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.enumOptionKeys)
            ? val.enumOptionKeys.map(function (itm) {
                if (!(0, json_js_2.sdIsString)(itm)) {
                    throw new errors_js_1.BoxSdkError({
                        message: 'Expecting string for "UpdateMetadataTemplateRequestBody"',
                    });
                }
                return itm;
            })
            : [];
    if (!(val.multiSelectOptionKey == void 0) &&
        !(0, json_js_2.sdIsString)(val.multiSelectOptionKey)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "multiSelectOptionKey" of type "UpdateMetadataTemplateRequestBody"',
        });
    }
    const multiSelectOptionKey = val.multiSelectOptionKey == void 0 ? void 0 : val.multiSelectOptionKey;
    if (!(val.multiSelectOptionKeys == void 0) &&
        !(0, json_js_3.sdIsList)(val.multiSelectOptionKeys)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "multiSelectOptionKeys" of type "UpdateMetadataTemplateRequestBody"',
        });
    }
    const multiSelectOptionKeys = val.multiSelectOptionKeys == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.multiSelectOptionKeys)
            ? val.multiSelectOptionKeys.map(function (itm) {
                if (!(0, json_js_2.sdIsString)(itm)) {
                    throw new errors_js_1.BoxSdkError({
                        message: 'Expecting string for "UpdateMetadataTemplateRequestBody"',
                    });
                }
                return itm;
            })
            : [];
    return {
        op: op,
        data: data,
        fieldKey: fieldKey,
        fieldKeys: fieldKeys,
        enumOptionKey: enumOptionKey,
        enumOptionKeys: enumOptionKeys,
        multiSelectOptionKey: multiSelectOptionKey,
        multiSelectOptionKeys: multiSelectOptionKeys,
    };
}
function serializeDeleteMetadataTemplateScope(val) {
    return val;
}
function deserializeDeleteMetadataTemplateScope(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize DeleteMetadataTemplateScope",
    });
}
function serializeCreateMetadataTemplateRequestBodyFieldsTypeField(val) {
    return val;
}
function deserializeCreateMetadataTemplateRequestBodyFieldsTypeField(val) {
    if (val == 'string') {
        return val;
    }
    if (val == 'float') {
        return val;
    }
    if (val == 'date') {
        return val;
    }
    if (val == 'enum') {
        return val;
    }
    if (val == 'multiSelect') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateMetadataTemplateRequestBodyFieldsTypeField",
    });
}
function serializeCreateMetadataTemplateRequestBodyFieldsOptionsField(val) {
    return { ['key']: val.key };
}
function deserializeCreateMetadataTemplateRequestBodyFieldsOptionsField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateMetadataTemplateRequestBodyFieldsOptionsField"',
        });
    }
    if (val.key == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "key" of type "CreateMetadataTemplateRequestBodyFieldsOptionsField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.key)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "key" of type "CreateMetadataTemplateRequestBodyFieldsOptionsField"',
        });
    }
    const key = val.key;
    return {
        key: key,
    };
}
function serializeCreateMetadataTemplateRequestBodyFieldsField(val) {
    return {
        ['type']: serializeCreateMetadataTemplateRequestBodyFieldsTypeField(val.type),
        ['key']: val.key,
        ['displayName']: val.displayName,
        ['description']: val.description,
        ['hidden']: val.hidden,
        ['options']: val.options == void 0
            ? val.options
            : val.options.map(function (item) {
                return serializeCreateMetadataTemplateRequestBodyFieldsOptionsField(item);
            }),
    };
}
function deserializeCreateMetadataTemplateRequestBodyFieldsField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateMetadataTemplateRequestBodyFieldsField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CreateMetadataTemplateRequestBodyFieldsField" to be defined',
        });
    }
    const type = deserializeCreateMetadataTemplateRequestBodyFieldsTypeField(val.type);
    if (val.key == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "key" of type "CreateMetadataTemplateRequestBodyFieldsField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.key)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "key" of type "CreateMetadataTemplateRequestBodyFieldsField"',
        });
    }
    const key = val.key;
    if (val.displayName == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "displayName" of type "CreateMetadataTemplateRequestBodyFieldsField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.displayName)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "displayName" of type "CreateMetadataTemplateRequestBodyFieldsField"',
        });
    }
    const displayName = val.displayName;
    if (!(val.description == void 0) && !(0, json_js_2.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "CreateMetadataTemplateRequestBodyFieldsField"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.hidden == void 0) && !(0, json_js_1.sdIsBoolean)(val.hidden)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "CreateMetadataTemplateRequestBodyFieldsField"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.options == void 0) && !(0, json_js_3.sdIsList)(val.options)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "options" of type "CreateMetadataTemplateRequestBodyFieldsField"',
        });
    }
    const options = val.options == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.options)
            ? val.options.map(function (itm) {
                return deserializeCreateMetadataTemplateRequestBodyFieldsOptionsField(itm);
            })
            : [];
    return {
        type: type,
        key: key,
        displayName: displayName,
        description: description,
        hidden: hidden,
        options: options,
    };
}
function serializeCreateMetadataTemplateRequestBody(val) {
    return {
        ['scope']: val.scope,
        ['templateKey']: val.templateKey,
        ['displayName']: val.displayName,
        ['hidden']: val.hidden,
        ['fields']: val.fields == void 0
            ? val.fields
            : val.fields.map(function (item) {
                return serializeCreateMetadataTemplateRequestBodyFieldsField(item);
            }),
        ['copyInstanceOnItemCopy']: val.copyInstanceOnItemCopy,
    };
}
function deserializeCreateMetadataTemplateRequestBody(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateMetadataTemplateRequestBody"',
        });
    }
    if (val.scope == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "scope" of type "CreateMetadataTemplateRequestBody" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.scope)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "scope" of type "CreateMetadataTemplateRequestBody"',
        });
    }
    const scope = val.scope;
    if (!(val.templateKey == void 0) && !(0, json_js_2.sdIsString)(val.templateKey)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "templateKey" of type "CreateMetadataTemplateRequestBody"',
        });
    }
    const templateKey = val.templateKey == void 0 ? void 0 : val.templateKey;
    if (val.displayName == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "displayName" of type "CreateMetadataTemplateRequestBody" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.displayName)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "displayName" of type "CreateMetadataTemplateRequestBody"',
        });
    }
    const displayName = val.displayName;
    if (!(val.hidden == void 0) && !(0, json_js_1.sdIsBoolean)(val.hidden)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "CreateMetadataTemplateRequestBody"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.fields == void 0) && !(0, json_js_3.sdIsList)(val.fields)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "fields" of type "CreateMetadataTemplateRequestBody"',
        });
    }
    const fields = val.fields == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.fields)
            ? val.fields.map(function (itm) {
                return deserializeCreateMetadataTemplateRequestBodyFieldsField(itm);
            })
            : [];
    if (!(val.copyInstanceOnItemCopy == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.copyInstanceOnItemCopy)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "copyInstanceOnItemCopy" of type "CreateMetadataTemplateRequestBody"',
        });
    }
    const copyInstanceOnItemCopy = val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
    return {
        scope: scope,
        templateKey: templateKey,
        displayName: displayName,
        hidden: hidden,
        fields: fields,
        copyInstanceOnItemCopy: copyInstanceOnItemCopy,
    };
}
//# sourceMappingURL=metadataTemplates.generated.js.map