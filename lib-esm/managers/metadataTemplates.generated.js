import { deserializeMetadataTemplates } from '../schemas/metadataTemplates.generated.js';
import { deserializeMetadataTemplate } from '../schemas/metadataTemplate.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetMetadataTemplatesByInstanceIdOptionals {
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
export class GetMetadataTemplateOptionals {
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
export class UpdateMetadataTemplateOptionals {
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
export class DeleteMetadataTemplateOptionals {
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
export class GetMetadataTemplateByIdOptionals {
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
export class CreateMetadataTemplateOptionals {
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
export class GetMetadataTemplatesByInstanceIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetMetadataTemplateHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateMetadataTemplateHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteMetadataTemplateHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetMetadataTemplateByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetGlobalMetadataTemplatesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetEnterpriseMetadataTemplatesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateMetadataTemplateHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class MetadataTemplatesManager {
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
     * Finds a metadata template by searching for the ID of an instance of the
     * template.
     * @param {GetMetadataTemplatesByInstanceIdQueryParams} queryParams Query parameters of getMetadataTemplatesByInstanceId method
     * @param {GetMetadataTemplatesByInstanceIdOptionalsInput} optionalsInput
     * @returns {Promise<MetadataTemplates>}
     */
    async getMetadataTemplatesByInstanceId(queryParams, optionalsInput = {}) {
        const optionals = new GetMetadataTemplatesByInstanceIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['metadata_instance_id']: toString(queryParams.metadataInstanceId),
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeMetadataTemplates(response.data),
            rawData: response.data,
        };
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
    async getMetadataTemplate(scope, templateKey, optionalsInput = {}) {
        const optionals = new GetMetadataTemplateOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/', toString(scope), '/', toString(templateKey), '/schema'),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeMetadataTemplate(response.data),
            rawData: response.data,
        };
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
    async updateMetadataTemplate(scope, templateKey, requestBody, optionalsInput = {}) {
        const optionals = new UpdateMetadataTemplateOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/', toString(scope), '/', toString(templateKey), '/schema'),
            method: 'PUT',
            headers: headersMap,
            data: requestBody.map(serializeUpdateMetadataTemplateRequestBody),
            contentType: 'application/json-patch+json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeMetadataTemplate(response.data),
            rawData: response.data,
        };
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
    async deleteMetadataTemplate(scope, templateKey, optionalsInput = {}) {
        const optionals = new DeleteMetadataTemplateOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/', toString(scope), '/', toString(templateKey), '/schema'),
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
       * Retrieves a metadata template by its ID.
       * @param {string} templateId The ID of the template.
      Example: "f7a9891f"
       * @param {GetMetadataTemplateByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataTemplate>}
       */
    async getMetadataTemplateById(templateId, optionalsInput = {}) {
        const optionals = new GetMetadataTemplateByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/', toString(templateId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeMetadataTemplate(response.data),
            rawData: response.data,
        };
    }
    /**
     * Used to retrieve all generic, global metadata templates available to all
     * enterprises using Box.
     * @param {GetGlobalMetadataTemplatesQueryParams} queryParams Query parameters of getGlobalMetadataTemplates method
     * @param {GetGlobalMetadataTemplatesHeadersInput} headersInput Headers of getGlobalMetadataTemplates method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<MetadataTemplates>}
     */
    async getGlobalMetadataTemplates(queryParams = {}, headersInput = new GetGlobalMetadataTemplatesHeaders({}), cancellationToken) {
        const headers = new GetGlobalMetadataTemplatesHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/global'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeMetadataTemplates(response.data),
            rawData: response.data,
        };
    }
    /**
     * Used to retrieve all metadata templates created to be used specifically within
     * the user's enterprise.
     * @param {GetEnterpriseMetadataTemplatesQueryParams} queryParams Query parameters of getEnterpriseMetadataTemplates method
     * @param {GetEnterpriseMetadataTemplatesHeadersInput} headersInput Headers of getEnterpriseMetadataTemplates method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<MetadataTemplates>}
     */
    async getEnterpriseMetadataTemplates(queryParams = {}, headersInput = new GetEnterpriseMetadataTemplatesHeaders({}), cancellationToken) {
        const headers = new GetEnterpriseMetadataTemplatesHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/enterprise'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeMetadataTemplates(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a new metadata template that can be applied to
     * files and folders.
     * @param {CreateMetadataTemplateRequestBody} requestBody Request body of createMetadataTemplate method
     * @param {CreateMetadataTemplateOptionalsInput} optionalsInput
     * @returns {Promise<MetadataTemplate>}
     */
    async createMetadataTemplate(requestBody, optionalsInput = {}) {
        const optionals = new CreateMetadataTemplateOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
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
        return {
            ...deserializeMetadataTemplate(response.data),
            rawData: response.data,
        };
    }
}
export function serializeGetMetadataTemplateScope(val) {
    return val;
}
export function deserializeGetMetadataTemplateScope(val) {
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
        message: "Can't deserialize GetMetadataTemplateScope",
    });
}
export function serializeUpdateMetadataTemplateScope(val) {
    return val;
}
export function deserializeUpdateMetadataTemplateScope(val) {
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
        message: "Can't deserialize UpdateMetadataTemplateScope",
    });
}
export function serializeUpdateMetadataTemplateRequestBodyOpField(val) {
    return val;
}
export function deserializeUpdateMetadataTemplateRequestBodyOpField(val) {
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
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateMetadataTemplateRequestBodyOpField",
    });
}
export function serializeUpdateMetadataTemplateRequestBody(val) {
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
export function deserializeUpdateMetadataTemplateRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateMetadataTemplateRequestBody"',
        });
    }
    if (val.op == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "op" of type "UpdateMetadataTemplateRequestBody" to be defined',
        });
    }
    const op = deserializeUpdateMetadataTemplateRequestBodyOpField(val.op);
    if (!(val.data == void 0) && !sdIsMap(val.data)) {
        throw new BoxSdkError({
            message: 'Expecting object for "data" of type "UpdateMetadataTemplateRequestBody"',
        });
    }
    const data = val.data == void 0
        ? void 0
        : sdIsMap(val.data)
            ? Object.fromEntries(Object.entries(val.data).map(([k, v]) => [
                k,
                (function (v) {
                    return v;
                })(v),
            ]))
            : {};
    if (!(val.fieldKey == void 0) && !sdIsString(val.fieldKey)) {
        throw new BoxSdkError({
            message: 'Expecting string for "fieldKey" of type "UpdateMetadataTemplateRequestBody"',
        });
    }
    const fieldKey = val.fieldKey == void 0 ? void 0 : val.fieldKey;
    if (!(val.fieldKeys == void 0) && !sdIsList(val.fieldKeys)) {
        throw new BoxSdkError({
            message: 'Expecting array for "fieldKeys" of type "UpdateMetadataTemplateRequestBody"',
        });
    }
    const fieldKeys = val.fieldKeys == void 0
        ? void 0
        : sdIsList(val.fieldKeys)
            ? val.fieldKeys.map(function (itm) {
                if (!sdIsString(itm)) {
                    throw new BoxSdkError({
                        message: 'Expecting string for "UpdateMetadataTemplateRequestBody"',
                    });
                }
                return itm;
            })
            : [];
    if (!(val.enumOptionKey == void 0) && !sdIsString(val.enumOptionKey)) {
        throw new BoxSdkError({
            message: 'Expecting string for "enumOptionKey" of type "UpdateMetadataTemplateRequestBody"',
        });
    }
    const enumOptionKey = val.enumOptionKey == void 0 ? void 0 : val.enumOptionKey;
    if (!(val.enumOptionKeys == void 0) && !sdIsList(val.enumOptionKeys)) {
        throw new BoxSdkError({
            message: 'Expecting array for "enumOptionKeys" of type "UpdateMetadataTemplateRequestBody"',
        });
    }
    const enumOptionKeys = val.enumOptionKeys == void 0
        ? void 0
        : sdIsList(val.enumOptionKeys)
            ? val.enumOptionKeys.map(function (itm) {
                if (!sdIsString(itm)) {
                    throw new BoxSdkError({
                        message: 'Expecting string for "UpdateMetadataTemplateRequestBody"',
                    });
                }
                return itm;
            })
            : [];
    if (!(val.multiSelectOptionKey == void 0) &&
        !sdIsString(val.multiSelectOptionKey)) {
        throw new BoxSdkError({
            message: 'Expecting string for "multiSelectOptionKey" of type "UpdateMetadataTemplateRequestBody"',
        });
    }
    const multiSelectOptionKey = val.multiSelectOptionKey == void 0 ? void 0 : val.multiSelectOptionKey;
    if (!(val.multiSelectOptionKeys == void 0) &&
        !sdIsList(val.multiSelectOptionKeys)) {
        throw new BoxSdkError({
            message: 'Expecting array for "multiSelectOptionKeys" of type "UpdateMetadataTemplateRequestBody"',
        });
    }
    const multiSelectOptionKeys = val.multiSelectOptionKeys == void 0
        ? void 0
        : sdIsList(val.multiSelectOptionKeys)
            ? val.multiSelectOptionKeys.map(function (itm) {
                if (!sdIsString(itm)) {
                    throw new BoxSdkError({
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
export function serializeDeleteMetadataTemplateScope(val) {
    return val;
}
export function deserializeDeleteMetadataTemplateScope(val) {
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
        message: "Can't deserialize DeleteMetadataTemplateScope",
    });
}
export function serializeCreateMetadataTemplateRequestBodyFieldsTypeField(val) {
    return val;
}
export function deserializeCreateMetadataTemplateRequestBodyFieldsTypeField(val) {
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
    throw new BoxSdkError({
        message: "Can't deserialize CreateMetadataTemplateRequestBodyFieldsTypeField",
    });
}
export function serializeCreateMetadataTemplateRequestBodyFieldsOptionsField(val) {
    return { ['key']: val.key };
}
export function deserializeCreateMetadataTemplateRequestBodyFieldsOptionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateMetadataTemplateRequestBodyFieldsOptionsField"',
        });
    }
    if (val.key == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "key" of type "CreateMetadataTemplateRequestBodyFieldsOptionsField" to be defined',
        });
    }
    if (!sdIsString(val.key)) {
        throw new BoxSdkError({
            message: 'Expecting string for "key" of type "CreateMetadataTemplateRequestBodyFieldsOptionsField"',
        });
    }
    const key = val.key;
    return {
        key: key,
    };
}
export function serializeCreateMetadataTemplateRequestBodyFieldsField(val) {
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
export function deserializeCreateMetadataTemplateRequestBodyFieldsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateMetadataTemplateRequestBodyFieldsField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "CreateMetadataTemplateRequestBodyFieldsField" to be defined',
        });
    }
    const type = deserializeCreateMetadataTemplateRequestBodyFieldsTypeField(val.type);
    if (val.key == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "key" of type "CreateMetadataTemplateRequestBodyFieldsField" to be defined',
        });
    }
    if (!sdIsString(val.key)) {
        throw new BoxSdkError({
            message: 'Expecting string for "key" of type "CreateMetadataTemplateRequestBodyFieldsField"',
        });
    }
    const key = val.key;
    if (val.displayName == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "displayName" of type "CreateMetadataTemplateRequestBodyFieldsField" to be defined',
        });
    }
    if (!sdIsString(val.displayName)) {
        throw new BoxSdkError({
            message: 'Expecting string for "displayName" of type "CreateMetadataTemplateRequestBodyFieldsField"',
        });
    }
    const displayName = val.displayName;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "CreateMetadataTemplateRequestBodyFieldsField"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.hidden == void 0) && !sdIsBoolean(val.hidden)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "CreateMetadataTemplateRequestBodyFieldsField"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.options == void 0) && !sdIsList(val.options)) {
        throw new BoxSdkError({
            message: 'Expecting array for "options" of type "CreateMetadataTemplateRequestBodyFieldsField"',
        });
    }
    const options = val.options == void 0
        ? void 0
        : sdIsList(val.options)
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
export function serializeCreateMetadataTemplateRequestBody(val) {
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
export function deserializeCreateMetadataTemplateRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateMetadataTemplateRequestBody"',
        });
    }
    if (val.scope == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "scope" of type "CreateMetadataTemplateRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.scope)) {
        throw new BoxSdkError({
            message: 'Expecting string for "scope" of type "CreateMetadataTemplateRequestBody"',
        });
    }
    const scope = val.scope;
    if (!(val.templateKey == void 0) && !sdIsString(val.templateKey)) {
        throw new BoxSdkError({
            message: 'Expecting string for "templateKey" of type "CreateMetadataTemplateRequestBody"',
        });
    }
    const templateKey = val.templateKey == void 0 ? void 0 : val.templateKey;
    if (val.displayName == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "displayName" of type "CreateMetadataTemplateRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.displayName)) {
        throw new BoxSdkError({
            message: 'Expecting string for "displayName" of type "CreateMetadataTemplateRequestBody"',
        });
    }
    const displayName = val.displayName;
    if (!(val.hidden == void 0) && !sdIsBoolean(val.hidden)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "CreateMetadataTemplateRequestBody"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.fields == void 0) && !sdIsList(val.fields)) {
        throw new BoxSdkError({
            message: 'Expecting array for "fields" of type "CreateMetadataTemplateRequestBody"',
        });
    }
    const fields = val.fields == void 0
        ? void 0
        : sdIsList(val.fields)
            ? val.fields.map(function (itm) {
                return deserializeCreateMetadataTemplateRequestBodyFieldsField(itm);
            })
            : [];
    if (!(val.copyInstanceOnItemCopy == void 0) &&
        !sdIsBoolean(val.copyInstanceOnItemCopy)) {
        throw new BoxSdkError({
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