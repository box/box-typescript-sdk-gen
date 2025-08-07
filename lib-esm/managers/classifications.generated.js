import { deserializeClassificationTemplate } from '../schemas/classificationTemplate.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class AddClassificationOptionals {
    constructor(fields) {
        this.headers = new AddClassificationHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateClassificationOptionals {
    constructor(fields) {
        this.headers = new UpdateClassificationHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateClassificationTemplateOptionals {
    constructor(fields) {
        this.headers = new CreateClassificationTemplateHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetClassificationTemplateHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class AddClassificationRequestBody {
    constructor(fields) {
        /**
         * The type of change to perform on the classification
         * object. */
        this.op = 'addEnumOption';
        /**
         * Defines classifications
         * available in the enterprise. */
        this.fieldKey = 'Box__Security__Classification__Key';
        if (fields.op !== undefined) {
            this.op = fields.op;
        }
        if (fields.fieldKey !== undefined) {
            this.fieldKey = fields.fieldKey;
        }
        if (fields.data !== undefined) {
            this.data = fields.data;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export class AddClassificationHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateClassificationRequestBody {
    constructor(fields) {
        /**
         * The type of change to perform on the classification
         * object. */
        this.op = 'editEnumOption';
        /**
         * Defines classifications
         * available in the enterprise. */
        this.fieldKey = 'Box__Security__Classification__Key';
        if (fields.op !== undefined) {
            this.op = fields.op;
        }
        if (fields.fieldKey !== undefined) {
            this.fieldKey = fields.fieldKey;
        }
        if (fields.enumOptionKey !== undefined) {
            this.enumOptionKey = fields.enumOptionKey;
        }
        if (fields.data !== undefined) {
            this.data = fields.data;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export class UpdateClassificationHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateClassificationTemplateRequestBodyFieldsField {
    constructor(fields) {
        /**
         * The type of the field
         * that is always enum. */
        this.type = 'enum';
        /**
         * Defines classifications
         * available in the enterprise. */
        this.key = 'Box__Security__Classification__Key';
        /**
         * A display name for the classification. */
        this.displayName = 'Classification';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.key !== undefined) {
            this.key = fields.key;
        }
        if (fields.displayName !== undefined) {
            this.displayName = fields.displayName;
        }
        if (fields.hidden !== undefined) {
            this.hidden = fields.hidden;
        }
        if (fields.options !== undefined) {
            this.options = fields.options;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export class CreateClassificationTemplateRequestBody {
    constructor(fields) {
        /**
         * The scope in which to create the classifications. This should
         * be `enterprise` or `enterprise_{id}` where `id` is the unique
         * ID of the enterprise. */
        this.scope = 'enterprise';
        /**
         * Defines the list of metadata templates. */
        this.templateKey = 'securityClassification-6VMVochwUWo';
        /**
         * The name of the
         * template as shown in web and mobile interfaces. */
        this.displayName = 'Classification';
        if (fields.scope !== undefined) {
            this.scope = fields.scope;
        }
        if (fields.templateKey !== undefined) {
            this.templateKey = fields.templateKey;
        }
        if (fields.displayName !== undefined) {
            this.displayName = fields.displayName;
        }
        if (fields.hidden !== undefined) {
            this.hidden = fields.hidden;
        }
        if (fields.copyInstanceOnItemCopy !== undefined) {
            this.copyInstanceOnItemCopy = fields.copyInstanceOnItemCopy;
        }
        if (fields.fields !== undefined) {
            this.fields = fields.fields;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export class CreateClassificationTemplateHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class ClassificationsManager {
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
     * Retrieves the classification metadata template and lists all the
     * classifications available to this enterprise.
     *
     * This API can also be called by including the enterprise ID in the
     * URL explicitly, for example
     * `/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.
     * @param {GetClassificationTemplateHeadersInput} headersInput Headers of getClassificationTemplate method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<ClassificationTemplate>}
     */
    async getClassificationTemplate(headersInput = new GetClassificationTemplateHeaders({}), cancellationToken) {
        const headers = new GetClassificationTemplateHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema'),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeClassificationTemplate(response.data),
            rawData: response.data,
        };
    }
    /**
     * Adds one or more new classifications to the list of classifications
     * available to the enterprise.
     *
     * This API can also be called by including the enterprise ID in the
     * URL explicitly, for example
     * `/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.
     * @param {readonly AddClassificationRequestBody[]} requestBody Request body of addClassification method
     * @param {AddClassificationOptionalsInput} optionalsInput
     * @returns {Promise<ClassificationTemplate>}
     */
    async addClassification(requestBody, optionalsInput = {}) {
        const optionals = new AddClassificationOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#add'),
            method: 'PUT',
            headers: headersMap,
            data: requestBody.map(serializeAddClassificationRequestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeClassificationTemplate(response.data),
            rawData: response.data,
        };
    }
    /**
     * Updates the labels and descriptions of one or more classifications
     * available to the enterprise.
     *
     * This API can also be called by including the enterprise ID in the
     * URL explicitly, for example
     * `/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.
     * @param {readonly UpdateClassificationRequestBody[]} requestBody Request body of updateClassification method
     * @param {UpdateClassificationOptionalsInput} optionalsInput
     * @returns {Promise<ClassificationTemplate>}
     */
    async updateClassification(requestBody, optionalsInput = {}) {
        const optionals = new UpdateClassificationOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#update'),
            method: 'PUT',
            headers: headersMap,
            data: requestBody.map(serializeUpdateClassificationRequestBody),
            contentType: 'application/json-patch+json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeClassificationTemplate(response.data),
            rawData: response.data,
        };
    }
    /**
     * When an enterprise does not yet have any classifications, this API call
     * initializes the classification template with an initial set of
     * classifications.
     *
     * If an enterprise already has a classification, the template will already
     * exist and instead an API call should be made to add additional
     * classifications.
     * @param {CreateClassificationTemplateRequestBodyInput} requestBodyInput Request body of createClassificationTemplate method
     * @param {CreateClassificationTemplateOptionalsInput} optionalsInput
     * @returns {Promise<ClassificationTemplate>}
     */
    async createClassificationTemplate(requestBodyInput, optionalsInput = {}) {
        const requestBody = new CreateClassificationTemplateRequestBody({
            scope: requestBodyInput.scope,
            templateKey: requestBodyInput.templateKey,
            displayName: requestBodyInput.displayName,
            hidden: requestBodyInput.hidden,
            copyInstanceOnItemCopy: requestBodyInput.copyInstanceOnItemCopy,
            fields: requestBodyInput.fields,
        });
        const optionals = new CreateClassificationTemplateOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/schema#classifications'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateClassificationTemplateRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeClassificationTemplate(response.data),
            rawData: response.data,
        };
    }
}
export function serializeAddClassificationRequestBodyOpField(val) {
    return val;
}
export function deserializeAddClassificationRequestBodyOpField(val) {
    if (val == 'addEnumOption') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AddClassificationRequestBodyOpField",
    });
}
export function serializeAddClassificationRequestBodyFieldKeyField(val) {
    return val;
}
export function deserializeAddClassificationRequestBodyFieldKeyField(val) {
    if (val == 'Box__Security__Classification__Key') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AddClassificationRequestBodyFieldKeyField",
    });
}
export function serializeAddClassificationRequestBodyDataStaticConfigClassificationField(val) {
    return {
        ['classificationDefinition']: val.classificationDefinition,
        ['colorID']: val.colorId,
    };
}
export function deserializeAddClassificationRequestBodyDataStaticConfigClassificationField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AddClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    if (!(val.classificationDefinition == void 0) &&
        !sdIsString(val.classificationDefinition)) {
        throw new BoxSdkError({
            message: 'Expecting string for "classificationDefinition" of type "AddClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    const classificationDefinition = val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition;
    if (!(val.colorID == void 0) && !sdIsNumber(val.colorID)) {
        throw new BoxSdkError({
            message: 'Expecting number for "colorID" of type "AddClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    const colorId = val.colorID == void 0 ? void 0 : val.colorID;
    return {
        classificationDefinition: classificationDefinition,
        colorId: colorId,
    };
}
export function serializeAddClassificationRequestBodyDataStaticConfigField(val) {
    return {
        ['classification']: val.classification == void 0
            ? val.classification
            : serializeAddClassificationRequestBodyDataStaticConfigClassificationField(val.classification),
    };
}
export function deserializeAddClassificationRequestBodyDataStaticConfigField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AddClassificationRequestBodyDataStaticConfigField"',
        });
    }
    const classification = val.classification == void 0
        ? void 0
        : deserializeAddClassificationRequestBodyDataStaticConfigClassificationField(val.classification);
    return {
        classification: classification,
    };
}
export function serializeAddClassificationRequestBodyDataField(val) {
    return {
        ['key']: val.key,
        ['staticConfig']: val.staticConfig == void 0
            ? val.staticConfig
            : serializeAddClassificationRequestBodyDataStaticConfigField(val.staticConfig),
    };
}
export function deserializeAddClassificationRequestBodyDataField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AddClassificationRequestBodyDataField"',
        });
    }
    if (val.key == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "key" of type "AddClassificationRequestBodyDataField" to be defined',
        });
    }
    if (!sdIsString(val.key)) {
        throw new BoxSdkError({
            message: 'Expecting string for "key" of type "AddClassificationRequestBodyDataField"',
        });
    }
    const key = val.key;
    const staticConfig = val.staticConfig == void 0
        ? void 0
        : deserializeAddClassificationRequestBodyDataStaticConfigField(val.staticConfig);
    return {
        key: key,
        staticConfig: staticConfig,
    };
}
export function serializeAddClassificationRequestBody(val) {
    return {
        ['op']: serializeAddClassificationRequestBodyOpField(val.op),
        ['fieldKey']: serializeAddClassificationRequestBodyFieldKeyField(val.fieldKey),
        ['data']: serializeAddClassificationRequestBodyDataField(val.data),
    };
}
export function deserializeAddClassificationRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AddClassificationRequestBody"',
        });
    }
    if (val.op == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "op" of type "AddClassificationRequestBody" to be defined',
        });
    }
    const op = deserializeAddClassificationRequestBodyOpField(val.op);
    if (val.fieldKey == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "fieldKey" of type "AddClassificationRequestBody" to be defined',
        });
    }
    const fieldKey = deserializeAddClassificationRequestBodyFieldKeyField(val.fieldKey);
    if (val.data == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "data" of type "AddClassificationRequestBody" to be defined',
        });
    }
    const data = deserializeAddClassificationRequestBodyDataField(val.data);
    return {
        op: op,
        fieldKey: fieldKey,
        data: data,
    };
}
export function serializeAddClassificationRequestBodyInput(val) {
    return {
        ['op']: val.op == void 0
            ? val.op
            : serializeAddClassificationRequestBodyOpField(val.op),
        ['fieldKey']: val.fieldKey == void 0
            ? val.fieldKey
            : serializeAddClassificationRequestBodyFieldKeyField(val.fieldKey),
        ['data']: serializeAddClassificationRequestBodyDataField(val.data),
    };
}
export function deserializeAddClassificationRequestBodyInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AddClassificationRequestBodyInput"',
        });
    }
    const op = val.op == void 0
        ? void 0
        : deserializeAddClassificationRequestBodyOpField(val.op);
    const fieldKey = val.fieldKey == void 0
        ? void 0
        : deserializeAddClassificationRequestBodyFieldKeyField(val.fieldKey);
    if (val.data == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "data" of type "AddClassificationRequestBodyInput" to be defined',
        });
    }
    const data = deserializeAddClassificationRequestBodyDataField(val.data);
    return {
        op: op,
        fieldKey: fieldKey,
        data: data,
    };
}
export function serializeUpdateClassificationRequestBodyOpField(val) {
    return val;
}
export function deserializeUpdateClassificationRequestBodyOpField(val) {
    if (val == 'editEnumOption') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateClassificationRequestBodyOpField",
    });
}
export function serializeUpdateClassificationRequestBodyFieldKeyField(val) {
    return val;
}
export function deserializeUpdateClassificationRequestBodyFieldKeyField(val) {
    if (val == 'Box__Security__Classification__Key') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateClassificationRequestBodyFieldKeyField",
    });
}
export function serializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(val) {
    return {
        ['classificationDefinition']: val.classificationDefinition,
        ['colorID']: val.colorId,
    };
}
export function deserializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    if (!(val.classificationDefinition == void 0) &&
        !sdIsString(val.classificationDefinition)) {
        throw new BoxSdkError({
            message: 'Expecting string for "classificationDefinition" of type "UpdateClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    const classificationDefinition = val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition;
    if (!(val.colorID == void 0) && !sdIsNumber(val.colorID)) {
        throw new BoxSdkError({
            message: 'Expecting number for "colorID" of type "UpdateClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    const colorId = val.colorID == void 0 ? void 0 : val.colorID;
    return {
        classificationDefinition: classificationDefinition,
        colorId: colorId,
    };
}
export function serializeUpdateClassificationRequestBodyDataStaticConfigField(val) {
    return {
        ['classification']: val.classification == void 0
            ? val.classification
            : serializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(val.classification),
    };
}
export function deserializeUpdateClassificationRequestBodyDataStaticConfigField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationRequestBodyDataStaticConfigField"',
        });
    }
    const classification = val.classification == void 0
        ? void 0
        : deserializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(val.classification);
    return {
        classification: classification,
    };
}
export function serializeUpdateClassificationRequestBodyDataField(val) {
    return {
        ['key']: val.key,
        ['staticConfig']: val.staticConfig == void 0
            ? val.staticConfig
            : serializeUpdateClassificationRequestBodyDataStaticConfigField(val.staticConfig),
    };
}
export function deserializeUpdateClassificationRequestBodyDataField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationRequestBodyDataField"',
        });
    }
    if (val.key == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "key" of type "UpdateClassificationRequestBodyDataField" to be defined',
        });
    }
    if (!sdIsString(val.key)) {
        throw new BoxSdkError({
            message: 'Expecting string for "key" of type "UpdateClassificationRequestBodyDataField"',
        });
    }
    const key = val.key;
    const staticConfig = val.staticConfig == void 0
        ? void 0
        : deserializeUpdateClassificationRequestBodyDataStaticConfigField(val.staticConfig);
    return {
        key: key,
        staticConfig: staticConfig,
    };
}
export function serializeUpdateClassificationRequestBody(val) {
    return {
        ['op']: serializeUpdateClassificationRequestBodyOpField(val.op),
        ['fieldKey']: serializeUpdateClassificationRequestBodyFieldKeyField(val.fieldKey),
        ['enumOptionKey']: val.enumOptionKey,
        ['data']: serializeUpdateClassificationRequestBodyDataField(val.data),
    };
}
export function deserializeUpdateClassificationRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationRequestBody"',
        });
    }
    if (val.op == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "op" of type "UpdateClassificationRequestBody" to be defined',
        });
    }
    const op = deserializeUpdateClassificationRequestBodyOpField(val.op);
    if (val.fieldKey == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "fieldKey" of type "UpdateClassificationRequestBody" to be defined',
        });
    }
    const fieldKey = deserializeUpdateClassificationRequestBodyFieldKeyField(val.fieldKey);
    if (val.enumOptionKey == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "enumOptionKey" of type "UpdateClassificationRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.enumOptionKey)) {
        throw new BoxSdkError({
            message: 'Expecting string for "enumOptionKey" of type "UpdateClassificationRequestBody"',
        });
    }
    const enumOptionKey = val.enumOptionKey;
    if (val.data == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "data" of type "UpdateClassificationRequestBody" to be defined',
        });
    }
    const data = deserializeUpdateClassificationRequestBodyDataField(val.data);
    return {
        op: op,
        fieldKey: fieldKey,
        enumOptionKey: enumOptionKey,
        data: data,
    };
}
export function serializeUpdateClassificationRequestBodyInput(val) {
    return {
        ['op']: val.op == void 0
            ? val.op
            : serializeUpdateClassificationRequestBodyOpField(val.op),
        ['fieldKey']: val.fieldKey == void 0
            ? val.fieldKey
            : serializeUpdateClassificationRequestBodyFieldKeyField(val.fieldKey),
        ['enumOptionKey']: val.enumOptionKey,
        ['data']: serializeUpdateClassificationRequestBodyDataField(val.data),
    };
}
export function deserializeUpdateClassificationRequestBodyInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationRequestBodyInput"',
        });
    }
    const op = val.op == void 0
        ? void 0
        : deserializeUpdateClassificationRequestBodyOpField(val.op);
    const fieldKey = val.fieldKey == void 0
        ? void 0
        : deserializeUpdateClassificationRequestBodyFieldKeyField(val.fieldKey);
    if (val.enumOptionKey == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "enumOptionKey" of type "UpdateClassificationRequestBodyInput" to be defined',
        });
    }
    if (!sdIsString(val.enumOptionKey)) {
        throw new BoxSdkError({
            message: 'Expecting string for "enumOptionKey" of type "UpdateClassificationRequestBodyInput"',
        });
    }
    const enumOptionKey = val.enumOptionKey;
    if (val.data == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "data" of type "UpdateClassificationRequestBodyInput" to be defined',
        });
    }
    const data = deserializeUpdateClassificationRequestBodyDataField(val.data);
    return {
        op: op,
        fieldKey: fieldKey,
        enumOptionKey: enumOptionKey,
        data: data,
    };
}
export function serializeCreateClassificationTemplateRequestBodyScopeField(val) {
    return val;
}
export function deserializeCreateClassificationTemplateRequestBodyScopeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyScopeField",
    });
}
export function serializeCreateClassificationTemplateRequestBodyTemplateKeyField(val) {
    return val;
}
export function deserializeCreateClassificationTemplateRequestBodyTemplateKeyField(val) {
    if (val == 'securityClassification-6VMVochwUWo') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyTemplateKeyField",
    });
}
export function serializeCreateClassificationTemplateRequestBodyDisplayNameField(val) {
    return val;
}
export function deserializeCreateClassificationTemplateRequestBodyDisplayNameField(val) {
    if (val == 'Classification') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyDisplayNameField",
    });
}
export function serializeCreateClassificationTemplateRequestBodyFieldsTypeField(val) {
    return val;
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsTypeField(val) {
    if (val == 'enum') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyFieldsTypeField",
    });
}
export function serializeCreateClassificationTemplateRequestBodyFieldsKeyField(val) {
    return val;
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsKeyField(val) {
    if (val == 'Box__Security__Classification__Key') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyFieldsKeyField",
    });
}
export function serializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val) {
    return val;
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val) {
    if (val == 'Classification') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyFieldsDisplayNameField",
    });
}
export function serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(val) {
    return {
        ['classificationDefinition']: val.classificationDefinition,
        ['colorID']: val.colorId,
    };
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField"',
        });
    }
    if (!(val.classificationDefinition == void 0) &&
        !sdIsString(val.classificationDefinition)) {
        throw new BoxSdkError({
            message: 'Expecting string for "classificationDefinition" of type "CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField"',
        });
    }
    const classificationDefinition = val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition;
    if (!(val.colorID == void 0) && !sdIsNumber(val.colorID)) {
        throw new BoxSdkError({
            message: 'Expecting number for "colorID" of type "CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField"',
        });
    }
    const colorId = val.colorID == void 0 ? void 0 : val.colorID;
    return {
        classificationDefinition: classificationDefinition,
        colorId: colorId,
    };
}
export function serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(val) {
    return {
        ['classification']: val.classification == void 0
            ? val.classification
            : serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(val.classification),
    };
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField"',
        });
    }
    const classification = val.classification == void 0
        ? void 0
        : deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(val.classification);
    return {
        classification: classification,
    };
}
export function serializeCreateClassificationTemplateRequestBodyFieldsOptionsField(val) {
    return {
        ['key']: val.key,
        ['staticConfig']: val.staticConfig == void 0
            ? val.staticConfig
            : serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(val.staticConfig),
    };
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsOptionsField"',
        });
    }
    if (val.key == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "key" of type "CreateClassificationTemplateRequestBodyFieldsOptionsField" to be defined',
        });
    }
    if (!sdIsString(val.key)) {
        throw new BoxSdkError({
            message: 'Expecting string for "key" of type "CreateClassificationTemplateRequestBodyFieldsOptionsField"',
        });
    }
    const key = val.key;
    const staticConfig = val.staticConfig == void 0
        ? void 0
        : deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(val.staticConfig);
    return {
        key: key,
        staticConfig: staticConfig,
    };
}
export function serializeCreateClassificationTemplateRequestBodyFieldsField(val) {
    return {
        ['type']: serializeCreateClassificationTemplateRequestBodyFieldsTypeField(val.type),
        ['key']: serializeCreateClassificationTemplateRequestBodyFieldsKeyField(val.key),
        ['displayName']: serializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val.displayName),
        ['hidden']: val.hidden,
        ['options']: val.options.map(function (item) {
            return serializeCreateClassificationTemplateRequestBodyFieldsOptionsField(item);
        }),
    };
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "CreateClassificationTemplateRequestBodyFieldsField" to be defined',
        });
    }
    const type = deserializeCreateClassificationTemplateRequestBodyFieldsTypeField(val.type);
    if (val.key == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "key" of type "CreateClassificationTemplateRequestBodyFieldsField" to be defined',
        });
    }
    const key = deserializeCreateClassificationTemplateRequestBodyFieldsKeyField(val.key);
    if (val.displayName == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "displayName" of type "CreateClassificationTemplateRequestBodyFieldsField" to be defined',
        });
    }
    const displayName = deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val.displayName);
    if (!(val.hidden == void 0) && !sdIsBoolean(val.hidden)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "CreateClassificationTemplateRequestBodyFieldsField"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (val.options == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "options" of type "CreateClassificationTemplateRequestBodyFieldsField" to be defined',
        });
    }
    if (!sdIsList(val.options)) {
        throw new BoxSdkError({
            message: 'Expecting array for "options" of type "CreateClassificationTemplateRequestBodyFieldsField"',
        });
    }
    const options = sdIsList(val.options)
        ? val.options.map(function (itm) {
            return deserializeCreateClassificationTemplateRequestBodyFieldsOptionsField(itm);
        })
        : [];
    return {
        type: type,
        key: key,
        displayName: displayName,
        hidden: hidden,
        options: options,
    };
}
export function serializeCreateClassificationTemplateRequestBodyFieldsFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateClassificationTemplateRequestBodyFieldsTypeField(val.type),
        ['key']: val.key == void 0
            ? val.key
            : serializeCreateClassificationTemplateRequestBodyFieldsKeyField(val.key),
        ['displayName']: val.displayName == void 0
            ? val.displayName
            : serializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val.displayName),
        ['hidden']: val.hidden,
        ['options']: val.options.map(function (item) {
            return serializeCreateClassificationTemplateRequestBodyFieldsOptionsField(item);
        }),
    };
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsFieldInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCreateClassificationTemplateRequestBodyFieldsTypeField(val.type);
    const key = val.key == void 0
        ? void 0
        : deserializeCreateClassificationTemplateRequestBodyFieldsKeyField(val.key);
    const displayName = val.displayName == void 0
        ? void 0
        : deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val.displayName);
    if (!(val.hidden == void 0) && !sdIsBoolean(val.hidden)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "CreateClassificationTemplateRequestBodyFieldsFieldInput"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (val.options == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "options" of type "CreateClassificationTemplateRequestBodyFieldsFieldInput" to be defined',
        });
    }
    if (!sdIsList(val.options)) {
        throw new BoxSdkError({
            message: 'Expecting array for "options" of type "CreateClassificationTemplateRequestBodyFieldsFieldInput"',
        });
    }
    const options = sdIsList(val.options)
        ? val.options.map(function (itm) {
            return deserializeCreateClassificationTemplateRequestBodyFieldsOptionsField(itm);
        })
        : [];
    return {
        type: type,
        key: key,
        displayName: displayName,
        hidden: hidden,
        options: options,
    };
}
export function serializeCreateClassificationTemplateRequestBody(val) {
    return {
        ['scope']: serializeCreateClassificationTemplateRequestBodyScopeField(val.scope),
        ['templateKey']: serializeCreateClassificationTemplateRequestBodyTemplateKeyField(val.templateKey),
        ['displayName']: serializeCreateClassificationTemplateRequestBodyDisplayNameField(val.displayName),
        ['hidden']: val.hidden,
        ['copyInstanceOnItemCopy']: val.copyInstanceOnItemCopy,
        ['fields']: val.fields.map(function (item) {
            return serializeCreateClassificationTemplateRequestBodyFieldsField(item);
        }),
    };
}
export function deserializeCreateClassificationTemplateRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBody"',
        });
    }
    if (val.scope == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "scope" of type "CreateClassificationTemplateRequestBody" to be defined',
        });
    }
    const scope = deserializeCreateClassificationTemplateRequestBodyScopeField(val.scope);
    if (val.templateKey == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "templateKey" of type "CreateClassificationTemplateRequestBody" to be defined',
        });
    }
    const templateKey = deserializeCreateClassificationTemplateRequestBodyTemplateKeyField(val.templateKey);
    if (val.displayName == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "displayName" of type "CreateClassificationTemplateRequestBody" to be defined',
        });
    }
    const displayName = deserializeCreateClassificationTemplateRequestBodyDisplayNameField(val.displayName);
    if (!(val.hidden == void 0) && !sdIsBoolean(val.hidden)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "CreateClassificationTemplateRequestBody"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.copyInstanceOnItemCopy == void 0) &&
        !sdIsBoolean(val.copyInstanceOnItemCopy)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "copyInstanceOnItemCopy" of type "CreateClassificationTemplateRequestBody"',
        });
    }
    const copyInstanceOnItemCopy = val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
    if (val.fields == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "fields" of type "CreateClassificationTemplateRequestBody" to be defined',
        });
    }
    if (!sdIsList(val.fields)) {
        throw new BoxSdkError({
            message: 'Expecting array for "fields" of type "CreateClassificationTemplateRequestBody"',
        });
    }
    const fields = sdIsList(val.fields)
        ? val.fields.map(function (itm) {
            return deserializeCreateClassificationTemplateRequestBodyFieldsField(itm);
        })
        : [];
    return {
        scope: scope,
        templateKey: templateKey,
        displayName: displayName,
        hidden: hidden,
        copyInstanceOnItemCopy: copyInstanceOnItemCopy,
        fields: fields,
    };
}
export function serializeCreateClassificationTemplateRequestBodyInput(val) {
    return {
        ['scope']: val.scope == void 0
            ? val.scope
            : serializeCreateClassificationTemplateRequestBodyScopeField(val.scope),
        ['templateKey']: val.templateKey == void 0
            ? val.templateKey
            : serializeCreateClassificationTemplateRequestBodyTemplateKeyField(val.templateKey),
        ['displayName']: val.displayName == void 0
            ? val.displayName
            : serializeCreateClassificationTemplateRequestBodyDisplayNameField(val.displayName),
        ['hidden']: val.hidden,
        ['copyInstanceOnItemCopy']: val.copyInstanceOnItemCopy,
        ['fields']: val.fields.map(function (item) {
            return serializeCreateClassificationTemplateRequestBodyFieldsField(item);
        }),
    };
}
export function deserializeCreateClassificationTemplateRequestBodyInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBodyInput"',
        });
    }
    const scope = val.scope == void 0
        ? void 0
        : deserializeCreateClassificationTemplateRequestBodyScopeField(val.scope);
    const templateKey = val.templateKey == void 0
        ? void 0
        : deserializeCreateClassificationTemplateRequestBodyTemplateKeyField(val.templateKey);
    const displayName = val.displayName == void 0
        ? void 0
        : deserializeCreateClassificationTemplateRequestBodyDisplayNameField(val.displayName);
    if (!(val.hidden == void 0) && !sdIsBoolean(val.hidden)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "CreateClassificationTemplateRequestBodyInput"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.copyInstanceOnItemCopy == void 0) &&
        !sdIsBoolean(val.copyInstanceOnItemCopy)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "copyInstanceOnItemCopy" of type "CreateClassificationTemplateRequestBodyInput"',
        });
    }
    const copyInstanceOnItemCopy = val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
    if (val.fields == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "fields" of type "CreateClassificationTemplateRequestBodyInput" to be defined',
        });
    }
    if (!sdIsList(val.fields)) {
        throw new BoxSdkError({
            message: 'Expecting array for "fields" of type "CreateClassificationTemplateRequestBodyInput"',
        });
    }
    const fields = sdIsList(val.fields)
        ? val.fields.map(function (itm) {
            return deserializeCreateClassificationTemplateRequestBodyFieldsField(itm);
        })
        : [];
    return {
        scope: scope,
        templateKey: templateKey,
        displayName: displayName,
        hidden: hidden,
        copyInstanceOnItemCopy: copyInstanceOnItemCopy,
        fields: fields,
    };
}
//# sourceMappingURL=classifications.generated.js.map