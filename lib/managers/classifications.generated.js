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
exports.ClassificationsManager = exports.CreateClassificationTemplateHeaders = exports.CreateClassificationTemplateRequestBody = exports.CreateClassificationTemplateRequestBodyFieldsField = exports.UpdateClassificationHeaders = exports.UpdateClassificationRequestBody = exports.AddClassificationHeaders = exports.AddClassificationRequestBody = exports.GetClassificationTemplateHeaders = exports.CreateClassificationTemplateOptionals = exports.UpdateClassificationOptionals = exports.AddClassificationOptionals = void 0;
exports.serializeAddClassificationRequestBodyOpField = serializeAddClassificationRequestBodyOpField;
exports.deserializeAddClassificationRequestBodyOpField = deserializeAddClassificationRequestBodyOpField;
exports.serializeAddClassificationRequestBodyFieldKeyField = serializeAddClassificationRequestBodyFieldKeyField;
exports.deserializeAddClassificationRequestBodyFieldKeyField = deserializeAddClassificationRequestBodyFieldKeyField;
exports.serializeAddClassificationRequestBodyDataStaticConfigClassificationField = serializeAddClassificationRequestBodyDataStaticConfigClassificationField;
exports.deserializeAddClassificationRequestBodyDataStaticConfigClassificationField = deserializeAddClassificationRequestBodyDataStaticConfigClassificationField;
exports.serializeAddClassificationRequestBodyDataStaticConfigField = serializeAddClassificationRequestBodyDataStaticConfigField;
exports.deserializeAddClassificationRequestBodyDataStaticConfigField = deserializeAddClassificationRequestBodyDataStaticConfigField;
exports.serializeAddClassificationRequestBodyDataField = serializeAddClassificationRequestBodyDataField;
exports.deserializeAddClassificationRequestBodyDataField = deserializeAddClassificationRequestBodyDataField;
exports.serializeAddClassificationRequestBody = serializeAddClassificationRequestBody;
exports.deserializeAddClassificationRequestBody = deserializeAddClassificationRequestBody;
exports.serializeAddClassificationRequestBodyInput = serializeAddClassificationRequestBodyInput;
exports.deserializeAddClassificationRequestBodyInput = deserializeAddClassificationRequestBodyInput;
exports.serializeUpdateClassificationRequestBodyOpField = serializeUpdateClassificationRequestBodyOpField;
exports.deserializeUpdateClassificationRequestBodyOpField = deserializeUpdateClassificationRequestBodyOpField;
exports.serializeUpdateClassificationRequestBodyFieldKeyField = serializeUpdateClassificationRequestBodyFieldKeyField;
exports.deserializeUpdateClassificationRequestBodyFieldKeyField = deserializeUpdateClassificationRequestBodyFieldKeyField;
exports.serializeUpdateClassificationRequestBodyDataStaticConfigClassificationField = serializeUpdateClassificationRequestBodyDataStaticConfigClassificationField;
exports.deserializeUpdateClassificationRequestBodyDataStaticConfigClassificationField = deserializeUpdateClassificationRequestBodyDataStaticConfigClassificationField;
exports.serializeUpdateClassificationRequestBodyDataStaticConfigField = serializeUpdateClassificationRequestBodyDataStaticConfigField;
exports.deserializeUpdateClassificationRequestBodyDataStaticConfigField = deserializeUpdateClassificationRequestBodyDataStaticConfigField;
exports.serializeUpdateClassificationRequestBodyDataField = serializeUpdateClassificationRequestBodyDataField;
exports.deserializeUpdateClassificationRequestBodyDataField = deserializeUpdateClassificationRequestBodyDataField;
exports.serializeUpdateClassificationRequestBody = serializeUpdateClassificationRequestBody;
exports.deserializeUpdateClassificationRequestBody = deserializeUpdateClassificationRequestBody;
exports.serializeUpdateClassificationRequestBodyInput = serializeUpdateClassificationRequestBodyInput;
exports.deserializeUpdateClassificationRequestBodyInput = deserializeUpdateClassificationRequestBodyInput;
exports.serializeCreateClassificationTemplateRequestBodyScopeField = serializeCreateClassificationTemplateRequestBodyScopeField;
exports.deserializeCreateClassificationTemplateRequestBodyScopeField = deserializeCreateClassificationTemplateRequestBodyScopeField;
exports.serializeCreateClassificationTemplateRequestBodyTemplateKeyField = serializeCreateClassificationTemplateRequestBodyTemplateKeyField;
exports.deserializeCreateClassificationTemplateRequestBodyTemplateKeyField = deserializeCreateClassificationTemplateRequestBodyTemplateKeyField;
exports.serializeCreateClassificationTemplateRequestBodyDisplayNameField = serializeCreateClassificationTemplateRequestBodyDisplayNameField;
exports.deserializeCreateClassificationTemplateRequestBodyDisplayNameField = deserializeCreateClassificationTemplateRequestBodyDisplayNameField;
exports.serializeCreateClassificationTemplateRequestBodyFieldsTypeField = serializeCreateClassificationTemplateRequestBodyFieldsTypeField;
exports.deserializeCreateClassificationTemplateRequestBodyFieldsTypeField = deserializeCreateClassificationTemplateRequestBodyFieldsTypeField;
exports.serializeCreateClassificationTemplateRequestBodyFieldsKeyField = serializeCreateClassificationTemplateRequestBodyFieldsKeyField;
exports.deserializeCreateClassificationTemplateRequestBodyFieldsKeyField = deserializeCreateClassificationTemplateRequestBodyFieldsKeyField;
exports.serializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField = serializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField;
exports.deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField = deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField;
exports.serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField = serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField;
exports.deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField = deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField;
exports.serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField = serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField;
exports.deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField = deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField;
exports.serializeCreateClassificationTemplateRequestBodyFieldsOptionsField = serializeCreateClassificationTemplateRequestBodyFieldsOptionsField;
exports.deserializeCreateClassificationTemplateRequestBodyFieldsOptionsField = deserializeCreateClassificationTemplateRequestBodyFieldsOptionsField;
exports.serializeCreateClassificationTemplateRequestBodyFieldsField = serializeCreateClassificationTemplateRequestBodyFieldsField;
exports.deserializeCreateClassificationTemplateRequestBodyFieldsField = deserializeCreateClassificationTemplateRequestBodyFieldsField;
exports.serializeCreateClassificationTemplateRequestBodyFieldsFieldInput = serializeCreateClassificationTemplateRequestBodyFieldsFieldInput;
exports.deserializeCreateClassificationTemplateRequestBodyFieldsFieldInput = deserializeCreateClassificationTemplateRequestBodyFieldsFieldInput;
exports.serializeCreateClassificationTemplateRequestBody = serializeCreateClassificationTemplateRequestBody;
exports.deserializeCreateClassificationTemplateRequestBody = deserializeCreateClassificationTemplateRequestBody;
exports.serializeCreateClassificationTemplateRequestBodyInput = serializeCreateClassificationTemplateRequestBodyInput;
exports.deserializeCreateClassificationTemplateRequestBodyInput = deserializeCreateClassificationTemplateRequestBodyInput;
const classificationTemplate_generated_js_1 = require("../schemas/classificationTemplate.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
const json_js_5 = require("../serialization/json.js");
class AddClassificationOptionals {
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
exports.AddClassificationOptionals = AddClassificationOptionals;
class UpdateClassificationOptionals {
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
exports.UpdateClassificationOptionals = UpdateClassificationOptionals;
class CreateClassificationTemplateOptionals {
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
exports.CreateClassificationTemplateOptionals = CreateClassificationTemplateOptionals;
class GetClassificationTemplateHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetClassificationTemplateHeaders = GetClassificationTemplateHeaders;
class AddClassificationRequestBody {
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
exports.AddClassificationRequestBody = AddClassificationRequestBody;
class AddClassificationHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.AddClassificationHeaders = AddClassificationHeaders;
class UpdateClassificationRequestBody {
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
exports.UpdateClassificationRequestBody = UpdateClassificationRequestBody;
class UpdateClassificationHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateClassificationHeaders = UpdateClassificationHeaders;
class CreateClassificationTemplateRequestBodyFieldsField {
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
exports.CreateClassificationTemplateRequestBodyFieldsField = CreateClassificationTemplateRequestBodyFieldsField;
class CreateClassificationTemplateRequestBody {
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
exports.CreateClassificationTemplateRequestBody = CreateClassificationTemplateRequestBody;
class CreateClassificationTemplateHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateClassificationTemplateHeaders = CreateClassificationTemplateHeaders;
class ClassificationsManager {
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
    getClassificationTemplate() {
        return __awaiter(this, arguments, void 0, function* (headersInput = new GetClassificationTemplateHeaders({}), cancellationToken) {
            const headers = new GetClassificationTemplateHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema'),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, classificationTemplate_generated_js_1.deserializeClassificationTemplate)(response.data)), { rawData: response.data });
        });
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
    addClassification(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new AddClassificationOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
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
            return Object.assign(Object.assign({}, (0, classificationTemplate_generated_js_1.deserializeClassificationTemplate)(response.data)), { rawData: response.data });
        });
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
    updateClassification(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new UpdateClassificationOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
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
            return Object.assign(Object.assign({}, (0, classificationTemplate_generated_js_1.deserializeClassificationTemplate)(response.data)), { rawData: response.data });
        });
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
    createClassificationTemplate(requestBodyInput_1) {
        return __awaiter(this, arguments, void 0, function* (requestBodyInput, optionalsInput = {}) {
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
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
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
            return Object.assign(Object.assign({}, (0, classificationTemplate_generated_js_1.deserializeClassificationTemplate)(response.data)), { rawData: response.data });
        });
    }
}
exports.ClassificationsManager = ClassificationsManager;
function serializeAddClassificationRequestBodyOpField(val) {
    return val;
}
function deserializeAddClassificationRequestBodyOpField(val) {
    if (val == 'addEnumOption') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AddClassificationRequestBodyOpField",
    });
}
function serializeAddClassificationRequestBodyFieldKeyField(val) {
    return val;
}
function deserializeAddClassificationRequestBodyFieldKeyField(val) {
    if (val == 'Box__Security__Classification__Key') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AddClassificationRequestBodyFieldKeyField",
    });
}
function serializeAddClassificationRequestBodyDataStaticConfigClassificationField(val) {
    return {
        ['classificationDefinition']: val.classificationDefinition,
        ['colorID']: val.colorId,
    };
}
function deserializeAddClassificationRequestBodyDataStaticConfigClassificationField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    if (!(val.classificationDefinition == void 0) &&
        !(0, json_js_3.sdIsString)(val.classificationDefinition)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "classificationDefinition" of type "AddClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    const classificationDefinition = val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition;
    if (!(val.colorID == void 0) && !(0, json_js_2.sdIsNumber)(val.colorID)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "colorID" of type "AddClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    const colorId = val.colorID == void 0 ? void 0 : val.colorID;
    return {
        classificationDefinition: classificationDefinition,
        colorId: colorId,
    };
}
function serializeAddClassificationRequestBodyDataStaticConfigField(val) {
    return {
        ['classification']: val.classification == void 0
            ? val.classification
            : serializeAddClassificationRequestBodyDataStaticConfigClassificationField(val.classification),
    };
}
function deserializeAddClassificationRequestBodyDataStaticConfigField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeAddClassificationRequestBodyDataField(val) {
    return {
        ['key']: val.key,
        ['staticConfig']: val.staticConfig == void 0
            ? val.staticConfig
            : serializeAddClassificationRequestBodyDataStaticConfigField(val.staticConfig),
    };
}
function deserializeAddClassificationRequestBodyDataField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddClassificationRequestBodyDataField"',
        });
    }
    if (val.key == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "key" of type "AddClassificationRequestBodyDataField" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.key)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeAddClassificationRequestBody(val) {
    return {
        ['op']: serializeAddClassificationRequestBodyOpField(val.op),
        ['fieldKey']: serializeAddClassificationRequestBodyFieldKeyField(val.fieldKey),
        ['data']: serializeAddClassificationRequestBodyDataField(val.data),
    };
}
function deserializeAddClassificationRequestBody(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AddClassificationRequestBody"',
        });
    }
    if (val.op == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "op" of type "AddClassificationRequestBody" to be defined',
        });
    }
    const op = deserializeAddClassificationRequestBodyOpField(val.op);
    if (val.fieldKey == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "fieldKey" of type "AddClassificationRequestBody" to be defined',
        });
    }
    const fieldKey = deserializeAddClassificationRequestBodyFieldKeyField(val.fieldKey);
    if (val.data == void 0) {
        throw new errors_js_1.BoxSdkError({
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
function serializeAddClassificationRequestBodyInput(val) {
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
function deserializeAddClassificationRequestBodyInput(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
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
        throw new errors_js_1.BoxSdkError({
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
function serializeUpdateClassificationRequestBodyOpField(val) {
    return val;
}
function deserializeUpdateClassificationRequestBodyOpField(val) {
    if (val == 'editEnumOption') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateClassificationRequestBodyOpField",
    });
}
function serializeUpdateClassificationRequestBodyFieldKeyField(val) {
    return val;
}
function deserializeUpdateClassificationRequestBodyFieldKeyField(val) {
    if (val == 'Box__Security__Classification__Key') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateClassificationRequestBodyFieldKeyField",
    });
}
function serializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(val) {
    return {
        ['classificationDefinition']: val.classificationDefinition,
        ['colorID']: val.colorId,
    };
}
function deserializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    if (!(val.classificationDefinition == void 0) &&
        !(0, json_js_3.sdIsString)(val.classificationDefinition)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "classificationDefinition" of type "UpdateClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    const classificationDefinition = val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition;
    if (!(val.colorID == void 0) && !(0, json_js_2.sdIsNumber)(val.colorID)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "colorID" of type "UpdateClassificationRequestBodyDataStaticConfigClassificationField"',
        });
    }
    const colorId = val.colorID == void 0 ? void 0 : val.colorID;
    return {
        classificationDefinition: classificationDefinition,
        colorId: colorId,
    };
}
function serializeUpdateClassificationRequestBodyDataStaticConfigField(val) {
    return {
        ['classification']: val.classification == void 0
            ? val.classification
            : serializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(val.classification),
    };
}
function deserializeUpdateClassificationRequestBodyDataStaticConfigField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeUpdateClassificationRequestBodyDataField(val) {
    return {
        ['key']: val.key,
        ['staticConfig']: val.staticConfig == void 0
            ? val.staticConfig
            : serializeUpdateClassificationRequestBodyDataStaticConfigField(val.staticConfig),
    };
}
function deserializeUpdateClassificationRequestBodyDataField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationRequestBodyDataField"',
        });
    }
    if (val.key == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "key" of type "UpdateClassificationRequestBodyDataField" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.key)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeUpdateClassificationRequestBody(val) {
    return {
        ['op']: serializeUpdateClassificationRequestBodyOpField(val.op),
        ['fieldKey']: serializeUpdateClassificationRequestBodyFieldKeyField(val.fieldKey),
        ['enumOptionKey']: val.enumOptionKey,
        ['data']: serializeUpdateClassificationRequestBodyDataField(val.data),
    };
}
function deserializeUpdateClassificationRequestBody(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateClassificationRequestBody"',
        });
    }
    if (val.op == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "op" of type "UpdateClassificationRequestBody" to be defined',
        });
    }
    const op = deserializeUpdateClassificationRequestBodyOpField(val.op);
    if (val.fieldKey == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "fieldKey" of type "UpdateClassificationRequestBody" to be defined',
        });
    }
    const fieldKey = deserializeUpdateClassificationRequestBodyFieldKeyField(val.fieldKey);
    if (val.enumOptionKey == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "enumOptionKey" of type "UpdateClassificationRequestBody" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.enumOptionKey)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "enumOptionKey" of type "UpdateClassificationRequestBody"',
        });
    }
    const enumOptionKey = val.enumOptionKey;
    if (val.data == void 0) {
        throw new errors_js_1.BoxSdkError({
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
function serializeUpdateClassificationRequestBodyInput(val) {
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
function deserializeUpdateClassificationRequestBodyInput(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
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
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "enumOptionKey" of type "UpdateClassificationRequestBodyInput" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.enumOptionKey)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "enumOptionKey" of type "UpdateClassificationRequestBodyInput"',
        });
    }
    const enumOptionKey = val.enumOptionKey;
    if (val.data == void 0) {
        throw new errors_js_1.BoxSdkError({
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
function serializeCreateClassificationTemplateRequestBodyScopeField(val) {
    return val;
}
function deserializeCreateClassificationTemplateRequestBodyScopeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyScopeField",
    });
}
function serializeCreateClassificationTemplateRequestBodyTemplateKeyField(val) {
    return val;
}
function deserializeCreateClassificationTemplateRequestBodyTemplateKeyField(val) {
    if (val == 'securityClassification-6VMVochwUWo') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyTemplateKeyField",
    });
}
function serializeCreateClassificationTemplateRequestBodyDisplayNameField(val) {
    return val;
}
function deserializeCreateClassificationTemplateRequestBodyDisplayNameField(val) {
    if (val == 'Classification') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyDisplayNameField",
    });
}
function serializeCreateClassificationTemplateRequestBodyFieldsTypeField(val) {
    return val;
}
function deserializeCreateClassificationTemplateRequestBodyFieldsTypeField(val) {
    if (val == 'enum') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyFieldsTypeField",
    });
}
function serializeCreateClassificationTemplateRequestBodyFieldsKeyField(val) {
    return val;
}
function deserializeCreateClassificationTemplateRequestBodyFieldsKeyField(val) {
    if (val == 'Box__Security__Classification__Key') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyFieldsKeyField",
    });
}
function serializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val) {
    return val;
}
function deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val) {
    if (val == 'Classification') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateClassificationTemplateRequestBodyFieldsDisplayNameField",
    });
}
function serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(val) {
    return {
        ['classificationDefinition']: val.classificationDefinition,
        ['colorID']: val.colorId,
    };
}
function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField"',
        });
    }
    if (!(val.classificationDefinition == void 0) &&
        !(0, json_js_3.sdIsString)(val.classificationDefinition)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "classificationDefinition" of type "CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField"',
        });
    }
    const classificationDefinition = val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition;
    if (!(val.colorID == void 0) && !(0, json_js_2.sdIsNumber)(val.colorID)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "colorID" of type "CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField"',
        });
    }
    const colorId = val.colorID == void 0 ? void 0 : val.colorID;
    return {
        classificationDefinition: classificationDefinition,
        colorId: colorId,
    };
}
function serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(val) {
    return {
        ['classification']: val.classification == void 0
            ? val.classification
            : serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(val.classification),
    };
}
function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeCreateClassificationTemplateRequestBodyFieldsOptionsField(val) {
    return {
        ['key']: val.key,
        ['staticConfig']: val.staticConfig == void 0
            ? val.staticConfig
            : serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(val.staticConfig),
    };
}
function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsOptionsField"',
        });
    }
    if (val.key == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "key" of type "CreateClassificationTemplateRequestBodyFieldsOptionsField" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.key)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeCreateClassificationTemplateRequestBodyFieldsField(val) {
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
function deserializeCreateClassificationTemplateRequestBodyFieldsField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CreateClassificationTemplateRequestBodyFieldsField" to be defined',
        });
    }
    const type = deserializeCreateClassificationTemplateRequestBodyFieldsTypeField(val.type);
    if (val.key == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "key" of type "CreateClassificationTemplateRequestBodyFieldsField" to be defined',
        });
    }
    const key = deserializeCreateClassificationTemplateRequestBodyFieldsKeyField(val.key);
    if (val.displayName == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "displayName" of type "CreateClassificationTemplateRequestBodyFieldsField" to be defined',
        });
    }
    const displayName = deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(val.displayName);
    if (!(val.hidden == void 0) && !(0, json_js_1.sdIsBoolean)(val.hidden)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "CreateClassificationTemplateRequestBodyFieldsField"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (val.options == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "options" of type "CreateClassificationTemplateRequestBodyFieldsField" to be defined',
        });
    }
    if (!(0, json_js_4.sdIsList)(val.options)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "options" of type "CreateClassificationTemplateRequestBodyFieldsField"',
        });
    }
    const options = (0, json_js_4.sdIsList)(val.options)
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
function serializeCreateClassificationTemplateRequestBodyFieldsFieldInput(val) {
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
function deserializeCreateClassificationTemplateRequestBodyFieldsFieldInput(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
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
    if (!(val.hidden == void 0) && !(0, json_js_1.sdIsBoolean)(val.hidden)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "CreateClassificationTemplateRequestBodyFieldsFieldInput"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (val.options == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "options" of type "CreateClassificationTemplateRequestBodyFieldsFieldInput" to be defined',
        });
    }
    if (!(0, json_js_4.sdIsList)(val.options)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "options" of type "CreateClassificationTemplateRequestBodyFieldsFieldInput"',
        });
    }
    const options = (0, json_js_4.sdIsList)(val.options)
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
function serializeCreateClassificationTemplateRequestBody(val) {
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
function deserializeCreateClassificationTemplateRequestBody(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateClassificationTemplateRequestBody"',
        });
    }
    if (val.scope == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "scope" of type "CreateClassificationTemplateRequestBody" to be defined',
        });
    }
    const scope = deserializeCreateClassificationTemplateRequestBodyScopeField(val.scope);
    if (val.templateKey == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "templateKey" of type "CreateClassificationTemplateRequestBody" to be defined',
        });
    }
    const templateKey = deserializeCreateClassificationTemplateRequestBodyTemplateKeyField(val.templateKey);
    if (val.displayName == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "displayName" of type "CreateClassificationTemplateRequestBody" to be defined',
        });
    }
    const displayName = deserializeCreateClassificationTemplateRequestBodyDisplayNameField(val.displayName);
    if (!(val.hidden == void 0) && !(0, json_js_1.sdIsBoolean)(val.hidden)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "CreateClassificationTemplateRequestBody"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.copyInstanceOnItemCopy == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.copyInstanceOnItemCopy)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "copyInstanceOnItemCopy" of type "CreateClassificationTemplateRequestBody"',
        });
    }
    const copyInstanceOnItemCopy = val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
    if (val.fields == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "fields" of type "CreateClassificationTemplateRequestBody" to be defined',
        });
    }
    if (!(0, json_js_4.sdIsList)(val.fields)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "fields" of type "CreateClassificationTemplateRequestBody"',
        });
    }
    const fields = (0, json_js_4.sdIsList)(val.fields)
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
function serializeCreateClassificationTemplateRequestBodyInput(val) {
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
function deserializeCreateClassificationTemplateRequestBodyInput(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
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
    if (!(val.hidden == void 0) && !(0, json_js_1.sdIsBoolean)(val.hidden)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "hidden" of type "CreateClassificationTemplateRequestBodyInput"',
        });
    }
    const hidden = val.hidden == void 0 ? void 0 : val.hidden;
    if (!(val.copyInstanceOnItemCopy == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.copyInstanceOnItemCopy)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "copyInstanceOnItemCopy" of type "CreateClassificationTemplateRequestBodyInput"',
        });
    }
    const copyInstanceOnItemCopy = val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
    if (val.fields == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "fields" of type "CreateClassificationTemplateRequestBodyInput" to be defined',
        });
    }
    if (!(0, json_js_4.sdIsList)(val.fields)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "fields" of type "CreateClassificationTemplateRequestBodyInput"',
        });
    }
    const fields = (0, json_js_4.sdIsList)(val.fields)
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