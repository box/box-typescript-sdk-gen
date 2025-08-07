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
exports.RetentionPolicyAssignmentsManager = exports.GetFilesUnderRetentionPolicyAssignmentHeaders = exports.DeleteRetentionPolicyAssignmentByIdHeaders = exports.GetRetentionPolicyAssignmentByIdHeaders = exports.CreateRetentionPolicyAssignmentHeaders = exports.GetRetentionPolicyAssignmentsHeaders = exports.GetFilesUnderRetentionPolicyAssignmentOptionals = exports.DeleteRetentionPolicyAssignmentByIdOptionals = exports.GetRetentionPolicyAssignmentByIdOptionals = exports.CreateRetentionPolicyAssignmentOptionals = exports.GetRetentionPolicyAssignmentsOptionals = void 0;
exports.serializeGetRetentionPolicyAssignmentsQueryParamsTypeField = serializeGetRetentionPolicyAssignmentsQueryParamsTypeField;
exports.deserializeGetRetentionPolicyAssignmentsQueryParamsTypeField = deserializeGetRetentionPolicyAssignmentsQueryParamsTypeField;
exports.serializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField = serializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField;
exports.deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField = deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField;
exports.serializeCreateRetentionPolicyAssignmentRequestBodyAssignToField = serializeCreateRetentionPolicyAssignmentRequestBodyAssignToField;
exports.deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToField = deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToField;
exports.serializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField = serializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField;
exports.deserializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField = deserializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField;
exports.serializeCreateRetentionPolicyAssignmentRequestBody = serializeCreateRetentionPolicyAssignmentRequestBody;
exports.deserializeCreateRetentionPolicyAssignmentRequestBody = deserializeCreateRetentionPolicyAssignmentRequestBody;
const retentionPolicyAssignments_generated_js_1 = require("../schemas/retentionPolicyAssignments.generated.js");
const retentionPolicyAssignment_generated_js_1 = require("../schemas/retentionPolicyAssignment.generated.js");
const filesUnderRetention_generated_js_1 = require("../schemas/filesUnderRetention.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class GetRetentionPolicyAssignmentsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetRetentionPolicyAssignmentsHeaders({});
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
exports.GetRetentionPolicyAssignmentsOptionals = GetRetentionPolicyAssignmentsOptionals;
class CreateRetentionPolicyAssignmentOptionals {
    constructor(fields) {
        this.headers = new CreateRetentionPolicyAssignmentHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateRetentionPolicyAssignmentOptionals = CreateRetentionPolicyAssignmentOptionals;
class GetRetentionPolicyAssignmentByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetRetentionPolicyAssignmentByIdHeaders({});
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
exports.GetRetentionPolicyAssignmentByIdOptionals = GetRetentionPolicyAssignmentByIdOptionals;
class DeleteRetentionPolicyAssignmentByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteRetentionPolicyAssignmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteRetentionPolicyAssignmentByIdOptionals = DeleteRetentionPolicyAssignmentByIdOptionals;
class GetFilesUnderRetentionPolicyAssignmentOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFilesUnderRetentionPolicyAssignmentHeaders({});
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
exports.GetFilesUnderRetentionPolicyAssignmentOptionals = GetFilesUnderRetentionPolicyAssignmentOptionals;
class GetRetentionPolicyAssignmentsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetRetentionPolicyAssignmentsHeaders = GetRetentionPolicyAssignmentsHeaders;
class CreateRetentionPolicyAssignmentHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateRetentionPolicyAssignmentHeaders = CreateRetentionPolicyAssignmentHeaders;
class GetRetentionPolicyAssignmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetRetentionPolicyAssignmentByIdHeaders = GetRetentionPolicyAssignmentByIdHeaders;
class DeleteRetentionPolicyAssignmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteRetentionPolicyAssignmentByIdHeaders = DeleteRetentionPolicyAssignmentByIdHeaders;
class GetFilesUnderRetentionPolicyAssignmentHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFilesUnderRetentionPolicyAssignmentHeaders = GetFilesUnderRetentionPolicyAssignmentHeaders;
class RetentionPolicyAssignmentsManager {
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
       * Returns a list of all retention policy assignments associated with a specified
       * retention policy.
       * @param {string} retentionPolicyId The ID of the retention policy.
      Example: "982312"
       * @param {GetRetentionPolicyAssignmentsOptionalsInput} optionalsInput
       * @returns {Promise<RetentionPolicyAssignments>}
       */
    getRetentionPolicyAssignments(retentionPolicyId_1) {
        return __awaiter(this, arguments, void 0, function* (retentionPolicyId, optionalsInput = {}) {
            const optionals = new GetRetentionPolicyAssignmentsOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['type']: (0, utils_js_2.toString)(queryParams.type),
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policies/', (0, utils_js_2.toString)(retentionPolicyId), '/assignments'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, retentionPolicyAssignments_generated_js_1.deserializeRetentionPolicyAssignments)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Assigns a retention policy to an item.
     * @param {CreateRetentionPolicyAssignmentRequestBody} requestBody Request body of createRetentionPolicyAssignment method
     * @param {CreateRetentionPolicyAssignmentOptionalsInput} optionalsInput
     * @returns {Promise<RetentionPolicyAssignment>}
     */
    createRetentionPolicyAssignment(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateRetentionPolicyAssignmentOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policy_assignments'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateRetentionPolicyAssignmentRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, retentionPolicyAssignment_generated_js_1.deserializeRetentionPolicyAssignment)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves a retention policy assignment.
       * @param {string} retentionPolicyAssignmentId The ID of the retention policy assignment.
      Example: "1233123"
       * @param {GetRetentionPolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<RetentionPolicyAssignment>}
       */
    getRetentionPolicyAssignmentById(retentionPolicyAssignmentId_1) {
        return __awaiter(this, arguments, void 0, function* (retentionPolicyAssignmentId, optionalsInput = {}) {
            const optionals = new GetRetentionPolicyAssignmentByIdOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policy_assignments/', (0, utils_js_2.toString)(retentionPolicyAssignmentId)),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, retentionPolicyAssignment_generated_js_1.deserializeRetentionPolicyAssignment)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Removes a retention policy assignment
       * applied to content.
       * @param {string} retentionPolicyAssignmentId The ID of the retention policy assignment.
      Example: "1233123"
       * @param {DeleteRetentionPolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteRetentionPolicyAssignmentById(retentionPolicyAssignmentId_1) {
        return __awaiter(this, arguments, void 0, function* (retentionPolicyAssignmentId, optionalsInput = {}) {
            const optionals = new DeleteRetentionPolicyAssignmentByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policy_assignments/', (0, utils_js_2.toString)(retentionPolicyAssignmentId)),
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
       * Returns a list of files under retention for a retention policy assignment.
       * @param {string} retentionPolicyAssignmentId The ID of the retention policy assignment.
      Example: "1233123"
       * @param {GetFilesUnderRetentionPolicyAssignmentOptionalsInput} optionalsInput
       * @returns {Promise<FilesUnderRetention>}
       */
    getFilesUnderRetentionPolicyAssignment(retentionPolicyAssignmentId_1) {
        return __awaiter(this, arguments, void 0, function* (retentionPolicyAssignmentId, optionalsInput = {}) {
            const optionals = new GetFilesUnderRetentionPolicyAssignmentOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policy_assignments/', (0, utils_js_2.toString)(retentionPolicyAssignmentId), '/files_under_retention'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, filesUnderRetention_generated_js_1.deserializeFilesUnderRetention)(response.data)), { rawData: response.data });
        });
    }
}
exports.RetentionPolicyAssignmentsManager = RetentionPolicyAssignmentsManager;
function serializeGetRetentionPolicyAssignmentsQueryParamsTypeField(val) {
    return val;
}
function deserializeGetRetentionPolicyAssignmentsQueryParamsTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if (val == 'metadata_template') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetRetentionPolicyAssignmentsQueryParamsTypeField",
    });
}
function serializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(val) {
    return val;
}
function deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    if (val == 'metadata_template') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField",
    });
}
function serializeCreateRetentionPolicyAssignmentRequestBodyAssignToField(val) {
    return {
        ['type']: serializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateRetentionPolicyAssignmentRequestBodyAssignToField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CreateRetentionPolicyAssignmentRequestBodyAssignToField" to be defined',
        });
    }
    const type = deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(val.type);
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateRetentionPolicyAssignmentRequestBodyAssignToField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField(val) {
    return { ['field']: val.field, ['value']: val.value };
}
function deserializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField"',
        });
    }
    if (!(val.field == void 0) && !(0, json_js_1.sdIsString)(val.field)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "field" of type "CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField"',
        });
    }
    const field = val.field == void 0 ? void 0 : val.field;
    if (!(val.value == void 0) && !(0, json_js_1.sdIsString)(val.value)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "value" of type "CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField"',
        });
    }
    const value = val.value == void 0 ? void 0 : val.value;
    return {
        field: field,
        value: value,
    };
}
function serializeCreateRetentionPolicyAssignmentRequestBody(val) {
    return {
        ['policy_id']: val.policyId,
        ['assign_to']: serializeCreateRetentionPolicyAssignmentRequestBodyAssignToField(val.assignTo),
        ['filter_fields']: val.filterFields == void 0
            ? val.filterFields
            : val.filterFields.map(function (item) {
                return serializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField(item);
            }),
        ['start_date_field']: val.startDateField,
    };
}
function deserializeCreateRetentionPolicyAssignmentRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateRetentionPolicyAssignmentRequestBody"',
        });
    }
    if (val.policy_id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "policy_id" of type "CreateRetentionPolicyAssignmentRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.policy_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "policy_id" of type "CreateRetentionPolicyAssignmentRequestBody"',
        });
    }
    const policyId = val.policy_id;
    if (val.assign_to == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "assign_to" of type "CreateRetentionPolicyAssignmentRequestBody" to be defined',
        });
    }
    const assignTo = deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToField(val.assign_to);
    if (!(val.filter_fields == void 0) && !(0, json_js_2.sdIsList)(val.filter_fields)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "filter_fields" of type "CreateRetentionPolicyAssignmentRequestBody"',
        });
    }
    const filterFields = val.filter_fields == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.filter_fields)
            ? val.filter_fields.map(function (itm) {
                return deserializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField(itm);
            })
            : [];
    if (!(val.start_date_field == void 0) && !(0, json_js_1.sdIsString)(val.start_date_field)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "start_date_field" of type "CreateRetentionPolicyAssignmentRequestBody"',
        });
    }
    const startDateField = val.start_date_field == void 0 ? void 0 : val.start_date_field;
    return {
        policyId: policyId,
        assignTo: assignTo,
        filterFields: filterFields,
        startDateField: startDateField,
    };
}
//# sourceMappingURL=retentionPolicyAssignments.generated.js.map