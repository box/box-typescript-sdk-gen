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
exports.RetentionPoliciesManager = exports.DeleteRetentionPolicyByIdHeaders = exports.UpdateRetentionPolicyByIdHeaders = exports.GetRetentionPolicyByIdHeaders = exports.CreateRetentionPolicyHeaders = exports.GetRetentionPoliciesHeaders = exports.DeleteRetentionPolicyByIdOptionals = exports.UpdateRetentionPolicyByIdOptionals = exports.GetRetentionPolicyByIdOptionals = exports.CreateRetentionPolicyOptionals = void 0;
exports.serializeGetRetentionPoliciesQueryParamsPolicyTypeField = serializeGetRetentionPoliciesQueryParamsPolicyTypeField;
exports.deserializeGetRetentionPoliciesQueryParamsPolicyTypeField = deserializeGetRetentionPoliciesQueryParamsPolicyTypeField;
exports.serializeCreateRetentionPolicyRequestBodyPolicyTypeField = serializeCreateRetentionPolicyRequestBodyPolicyTypeField;
exports.deserializeCreateRetentionPolicyRequestBodyPolicyTypeField = deserializeCreateRetentionPolicyRequestBodyPolicyTypeField;
exports.serializeCreateRetentionPolicyRequestBodyDispositionActionField = serializeCreateRetentionPolicyRequestBodyDispositionActionField;
exports.deserializeCreateRetentionPolicyRequestBodyDispositionActionField = deserializeCreateRetentionPolicyRequestBodyDispositionActionField;
exports.serializeCreateRetentionPolicyRequestBodyRetentionTypeField = serializeCreateRetentionPolicyRequestBodyRetentionTypeField;
exports.deserializeCreateRetentionPolicyRequestBodyRetentionTypeField = deserializeCreateRetentionPolicyRequestBodyRetentionTypeField;
exports.serializeCreateRetentionPolicyRequestBody = serializeCreateRetentionPolicyRequestBody;
exports.deserializeCreateRetentionPolicyRequestBody = deserializeCreateRetentionPolicyRequestBody;
exports.serializeUpdateRetentionPolicyByIdRequestBody = serializeUpdateRetentionPolicyByIdRequestBody;
exports.deserializeUpdateRetentionPolicyByIdRequestBody = deserializeUpdateRetentionPolicyByIdRequestBody;
const retentionPolicies_generated_js_1 = require("../schemas/retentionPolicies.generated.js");
const retentionPolicy_generated_js_1 = require("../schemas/retentionPolicy.generated.js");
const userMini_generated_js_1 = require("../schemas/userMini.generated.js");
const userMini_generated_js_2 = require("../schemas/userMini.generated.js");
const userBase_generated_js_1 = require("../schemas/userBase.generated.js");
const userBase_generated_js_2 = require("../schemas/userBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
class CreateRetentionPolicyOptionals {
    constructor(fields) {
        this.headers = new CreateRetentionPolicyHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateRetentionPolicyOptionals = CreateRetentionPolicyOptionals;
class GetRetentionPolicyByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetRetentionPolicyByIdHeaders({});
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
exports.GetRetentionPolicyByIdOptionals = GetRetentionPolicyByIdOptionals;
class UpdateRetentionPolicyByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new UpdateRetentionPolicyByIdHeaders({});
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
exports.UpdateRetentionPolicyByIdOptionals = UpdateRetentionPolicyByIdOptionals;
class DeleteRetentionPolicyByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteRetentionPolicyByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteRetentionPolicyByIdOptionals = DeleteRetentionPolicyByIdOptionals;
class GetRetentionPoliciesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetRetentionPoliciesHeaders = GetRetentionPoliciesHeaders;
class CreateRetentionPolicyHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateRetentionPolicyHeaders = CreateRetentionPolicyHeaders;
class GetRetentionPolicyByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetRetentionPolicyByIdHeaders = GetRetentionPolicyByIdHeaders;
class UpdateRetentionPolicyByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateRetentionPolicyByIdHeaders = UpdateRetentionPolicyByIdHeaders;
class DeleteRetentionPolicyByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteRetentionPolicyByIdHeaders = DeleteRetentionPolicyByIdHeaders;
class RetentionPoliciesManager {
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
     * Retrieves all of the retention policies for an enterprise.
     * @param {GetRetentionPoliciesQueryParams} queryParams Query parameters of getRetentionPolicies method
     * @param {GetRetentionPoliciesHeadersInput} headersInput Headers of getRetentionPolicies method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<RetentionPolicies>}
     */
    getRetentionPolicies() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetRetentionPoliciesHeaders({}), cancellationToken) {
            const headers = new GetRetentionPoliciesHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['policy_name']: (0, utils_js_2.toString)(queryParams.policyName),
                ['policy_type']: (0, utils_js_2.toString)(queryParams.policyType),
                ['created_by_user_id']: (0, utils_js_2.toString)(queryParams.createdByUserId),
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policies'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, retentionPolicies_generated_js_1.deserializeRetentionPolicies)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a retention policy.
     * @param {CreateRetentionPolicyRequestBody} requestBody Request body of createRetentionPolicy method
     * @param {CreateRetentionPolicyOptionalsInput} optionalsInput
     * @returns {Promise<RetentionPolicy>}
     */
    createRetentionPolicy(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateRetentionPolicyOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policies'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateRetentionPolicyRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, retentionPolicy_generated_js_1.deserializeRetentionPolicy)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves a retention policy.
       * @param {string} retentionPolicyId The ID of the retention policy.
      Example: "982312"
       * @param {GetRetentionPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<RetentionPolicy>}
       */
    getRetentionPolicyById(retentionPolicyId_1) {
        return __awaiter(this, arguments, void 0, function* (retentionPolicyId, optionalsInput = {}) {
            const optionals = new GetRetentionPolicyByIdOptionals({
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
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policies/', (0, utils_js_2.toString)(retentionPolicyId)),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, retentionPolicy_generated_js_1.deserializeRetentionPolicy)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates a retention policy.
       * @param {string} retentionPolicyId The ID of the retention policy.
      Example: "982312"
       * @param {UpdateRetentionPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<RetentionPolicy>}
       */
    updateRetentionPolicyById(retentionPolicyId_1) {
        return __awaiter(this, arguments, void 0, function* (retentionPolicyId, optionalsInput = {}) {
            const optionals = new UpdateRetentionPolicyByIdOptionals({
                requestBody: optionalsInput.requestBody,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const requestBody = optionals.requestBody;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policies/', (0, utils_js_2.toString)(retentionPolicyId)),
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateRetentionPolicyByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, retentionPolicy_generated_js_1.deserializeRetentionPolicy)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Permanently deletes a retention policy.
       * @param {string} retentionPolicyId The ID of the retention policy.
      Example: "982312"
       * @param {DeleteRetentionPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteRetentionPolicyById(retentionPolicyId_1) {
        return __awaiter(this, arguments, void 0, function* (retentionPolicyId, optionalsInput = {}) {
            const optionals = new DeleteRetentionPolicyByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policies/', (0, utils_js_2.toString)(retentionPolicyId)),
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
exports.RetentionPoliciesManager = RetentionPoliciesManager;
function serializeGetRetentionPoliciesQueryParamsPolicyTypeField(val) {
    return val;
}
function deserializeGetRetentionPoliciesQueryParamsPolicyTypeField(val) {
    if (val == 'finite') {
        return val;
    }
    if (val == 'indefinite') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetRetentionPoliciesQueryParamsPolicyTypeField",
    });
}
function serializeCreateRetentionPolicyRequestBodyPolicyTypeField(val) {
    return val;
}
function deserializeCreateRetentionPolicyRequestBodyPolicyTypeField(val) {
    if (val == 'finite') {
        return val;
    }
    if (val == 'indefinite') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateRetentionPolicyRequestBodyPolicyTypeField",
    });
}
function serializeCreateRetentionPolicyRequestBodyDispositionActionField(val) {
    return val;
}
function deserializeCreateRetentionPolicyRequestBodyDispositionActionField(val) {
    if (val == 'permanently_delete') {
        return val;
    }
    if (val == 'remove_retention') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateRetentionPolicyRequestBodyDispositionActionField",
    });
}
function serializeCreateRetentionPolicyRequestBodyRetentionTypeField(val) {
    return val;
}
function deserializeCreateRetentionPolicyRequestBodyRetentionTypeField(val) {
    if (val == 'modifiable') {
        return val;
    }
    if (val == 'non_modifiable') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateRetentionPolicyRequestBodyRetentionTypeField",
    });
}
function serializeCreateRetentionPolicyRequestBody(val) {
    return {
        ['policy_name']: val.policyName,
        ['description']: val.description,
        ['policy_type']: serializeCreateRetentionPolicyRequestBodyPolicyTypeField(val.policyType),
        ['disposition_action']: serializeCreateRetentionPolicyRequestBodyDispositionActionField(val.dispositionAction),
        ['retention_length']: val.retentionLength,
        ['retention_type']: val.retentionType == void 0
            ? val.retentionType
            : serializeCreateRetentionPolicyRequestBodyRetentionTypeField(val.retentionType),
        ['can_owner_extend_retention']: val.canOwnerExtendRetention,
        ['are_owners_notified']: val.areOwnersNotified,
        ['custom_notification_recipients']: val.customNotificationRecipients == void 0
            ? val.customNotificationRecipients
            : val.customNotificationRecipients.map(function (item) {
                return (0, userMini_generated_js_1.serializeUserMini)(item);
            }),
    };
}
function deserializeCreateRetentionPolicyRequestBody(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateRetentionPolicyRequestBody"',
        });
    }
    if (val.policy_name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "policy_name" of type "CreateRetentionPolicyRequestBody" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.policy_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "policy_name" of type "CreateRetentionPolicyRequestBody"',
        });
    }
    const policyName = val.policy_name;
    if (!(val.description == void 0) && !(0, json_js_2.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "CreateRetentionPolicyRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (val.policy_type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "policy_type" of type "CreateRetentionPolicyRequestBody" to be defined',
        });
    }
    const policyType = deserializeCreateRetentionPolicyRequestBodyPolicyTypeField(val.policy_type);
    if (val.disposition_action == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "disposition_action" of type "CreateRetentionPolicyRequestBody" to be defined',
        });
    }
    const dispositionAction = deserializeCreateRetentionPolicyRequestBodyDispositionActionField(val.disposition_action);
    if (!(val.retention_length == void 0) && !(0, json_js_2.sdIsString)(val.retention_length)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "retention_length" of type "CreateRetentionPolicyRequestBody"',
        });
    }
    const retentionLength = val.retention_length == void 0 ? void 0 : val.retention_length;
    const retentionType = val.retention_type == void 0
        ? void 0
        : deserializeCreateRetentionPolicyRequestBodyRetentionTypeField(val.retention_type);
    if (!(val.can_owner_extend_retention == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.can_owner_extend_retention)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_owner_extend_retention" of type "CreateRetentionPolicyRequestBody"',
        });
    }
    const canOwnerExtendRetention = val.can_owner_extend_retention == void 0
        ? void 0
        : val.can_owner_extend_retention;
    if (!(val.are_owners_notified == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.are_owners_notified)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "are_owners_notified" of type "CreateRetentionPolicyRequestBody"',
        });
    }
    const areOwnersNotified = val.are_owners_notified == void 0 ? void 0 : val.are_owners_notified;
    if (!(val.custom_notification_recipients == void 0) &&
        !(0, json_js_3.sdIsList)(val.custom_notification_recipients)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "custom_notification_recipients" of type "CreateRetentionPolicyRequestBody"',
        });
    }
    const customNotificationRecipients = val.custom_notification_recipients == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.custom_notification_recipients)
            ? val.custom_notification_recipients.map(function (itm) {
                return (0, userMini_generated_js_2.deserializeUserMini)(itm);
            })
            : [];
    return {
        policyName: policyName,
        description: description,
        policyType: policyType,
        dispositionAction: dispositionAction,
        retentionLength: retentionLength,
        retentionType: retentionType,
        canOwnerExtendRetention: canOwnerExtendRetention,
        areOwnersNotified: areOwnersNotified,
        customNotificationRecipients: customNotificationRecipients,
    };
}
function serializeUpdateRetentionPolicyByIdRequestBody(val) {
    return {
        ['policy_name']: val.policyName,
        ['description']: val.description,
        ['disposition_action']: val.dispositionAction,
        ['retention_type']: val.retentionType,
        ['retention_length']: val.retentionLength,
        ['status']: val.status,
        ['can_owner_extend_retention']: val.canOwnerExtendRetention,
        ['are_owners_notified']: val.areOwnersNotified,
        ['custom_notification_recipients']: val.customNotificationRecipients == void 0
            ? val.customNotificationRecipients
            : val.customNotificationRecipients.map(function (item) {
                return (0, userBase_generated_js_1.serializeUserBase)(item);
            }),
    };
}
function deserializeUpdateRetentionPolicyByIdRequestBody(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    if (!(val.policy_name == void 0) && !(0, json_js_2.sdIsString)(val.policy_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "policy_name" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const policyName = val.policy_name == void 0 ? void 0 : val.policy_name;
    if (!(val.description == void 0) && !(0, json_js_2.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.disposition_action == void 0) &&
        !(0, json_js_2.sdIsString)(val.disposition_action)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "disposition_action" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const dispositionAction = val.disposition_action == void 0 ? void 0 : val.disposition_action;
    if (!(val.retention_type == void 0) && !(0, json_js_2.sdIsString)(val.retention_type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "retention_type" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const retentionType = val.retention_type == void 0 ? void 0 : val.retention_type;
    if (!(val.retention_length == void 0) && !(0, json_js_2.sdIsString)(val.retention_length)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "retention_length" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const retentionLength = val.retention_length == void 0 ? void 0 : val.retention_length;
    if (!(val.status == void 0) && !(0, json_js_2.sdIsString)(val.status)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "status" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const status = val.status == void 0 ? void 0 : val.status;
    if (!(val.can_owner_extend_retention == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.can_owner_extend_retention)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_owner_extend_retention" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const canOwnerExtendRetention = val.can_owner_extend_retention == void 0
        ? void 0
        : val.can_owner_extend_retention;
    if (!(val.are_owners_notified == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.are_owners_notified)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "are_owners_notified" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const areOwnersNotified = val.are_owners_notified == void 0 ? void 0 : val.are_owners_notified;
    if (!(val.custom_notification_recipients == void 0) &&
        !(0, json_js_3.sdIsList)(val.custom_notification_recipients)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "custom_notification_recipients" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const customNotificationRecipients = val.custom_notification_recipients == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.custom_notification_recipients)
            ? val.custom_notification_recipients.map(function (itm) {
                return (0, userBase_generated_js_2.deserializeUserBase)(itm);
            })
            : [];
    return {
        policyName: policyName,
        description: description,
        dispositionAction: dispositionAction,
        retentionType: retentionType,
        retentionLength: retentionLength,
        status: status,
        canOwnerExtendRetention: canOwnerExtendRetention,
        areOwnersNotified: areOwnersNotified,
        customNotificationRecipients: customNotificationRecipients,
    };
}
//# sourceMappingURL=retentionPolicies.generated.js.map