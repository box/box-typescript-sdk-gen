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
exports.LegalHoldPoliciesManager = exports.DeleteLegalHoldPolicyByIdHeaders = exports.UpdateLegalHoldPolicyByIdHeaders = exports.GetLegalHoldPolicyByIdHeaders = exports.CreateLegalHoldPolicyHeaders = exports.GetLegalHoldPoliciesHeaders = exports.DeleteLegalHoldPolicyByIdOptionals = exports.UpdateLegalHoldPolicyByIdOptionals = exports.GetLegalHoldPolicyByIdOptionals = exports.CreateLegalHoldPolicyOptionals = void 0;
exports.serializeCreateLegalHoldPolicyRequestBody = serializeCreateLegalHoldPolicyRequestBody;
exports.deserializeCreateLegalHoldPolicyRequestBody = deserializeCreateLegalHoldPolicyRequestBody;
exports.serializeUpdateLegalHoldPolicyByIdRequestBody = serializeUpdateLegalHoldPolicyByIdRequestBody;
exports.deserializeUpdateLegalHoldPolicyByIdRequestBody = deserializeUpdateLegalHoldPolicyByIdRequestBody;
const legalHoldPolicies_generated_js_1 = require("../schemas/legalHoldPolicies.generated.js");
const legalHoldPolicy_generated_js_1 = require("../schemas/legalHoldPolicy.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class CreateLegalHoldPolicyOptionals {
    constructor(fields) {
        this.headers = new CreateLegalHoldPolicyHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateLegalHoldPolicyOptionals = CreateLegalHoldPolicyOptionals;
class GetLegalHoldPolicyByIdOptionals {
    constructor(fields) {
        this.headers = new GetLegalHoldPolicyByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetLegalHoldPolicyByIdOptionals = GetLegalHoldPolicyByIdOptionals;
class UpdateLegalHoldPolicyByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new UpdateLegalHoldPolicyByIdHeaders({});
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
exports.UpdateLegalHoldPolicyByIdOptionals = UpdateLegalHoldPolicyByIdOptionals;
class DeleteLegalHoldPolicyByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteLegalHoldPolicyByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteLegalHoldPolicyByIdOptionals = DeleteLegalHoldPolicyByIdOptionals;
class GetLegalHoldPoliciesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetLegalHoldPoliciesHeaders = GetLegalHoldPoliciesHeaders;
class CreateLegalHoldPolicyHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateLegalHoldPolicyHeaders = CreateLegalHoldPolicyHeaders;
class GetLegalHoldPolicyByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetLegalHoldPolicyByIdHeaders = GetLegalHoldPolicyByIdHeaders;
class UpdateLegalHoldPolicyByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateLegalHoldPolicyByIdHeaders = UpdateLegalHoldPolicyByIdHeaders;
class DeleteLegalHoldPolicyByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteLegalHoldPolicyByIdHeaders = DeleteLegalHoldPolicyByIdHeaders;
class LegalHoldPoliciesManager {
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
     * Retrieves a list of legal hold policies that belong to
     * an enterprise.
     * @param {GetLegalHoldPoliciesQueryParams} queryParams Query parameters of getLegalHoldPolicies method
     * @param {GetLegalHoldPoliciesHeadersInput} headersInput Headers of getLegalHoldPolicies method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<LegalHoldPolicies>}
     */
    getLegalHoldPolicies() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetLegalHoldPoliciesHeaders({}), cancellationToken) {
            const headers = new GetLegalHoldPoliciesHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_3.prepareParams)({
                ['policy_name']: (0, utils_js_4.toString)(queryParams.policyName),
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_4.toString).join(',')
                    : undefined,
                ['marker']: (0, utils_js_4.toString)(queryParams.marker),
                ['limit']: (0, utils_js_4.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policies'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, legalHoldPolicies_generated_js_1.deserializeLegalHoldPolicies)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Create a new legal hold policy.
     * @param {CreateLegalHoldPolicyRequestBody} requestBody Request body of createLegalHoldPolicy method
     * @param {CreateLegalHoldPolicyOptionalsInput} optionalsInput
     * @returns {Promise<LegalHoldPolicy>}
     */
    createLegalHoldPolicy(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateLegalHoldPolicyOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policies'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateLegalHoldPolicyRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, legalHoldPolicy_generated_js_1.deserializeLegalHoldPolicy)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieve a legal hold policy.
       * @param {string} legalHoldPolicyId The ID of the legal hold policy.
      Example: "324432"
       * @param {GetLegalHoldPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<LegalHoldPolicy>}
       */
    getLegalHoldPolicyById(legalHoldPolicyId_1) {
        return __awaiter(this, arguments, void 0, function* (legalHoldPolicyId, optionalsInput = {}) {
            const optionals = new GetLegalHoldPolicyByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policies/', (0, utils_js_4.toString)(legalHoldPolicyId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, legalHoldPolicy_generated_js_1.deserializeLegalHoldPolicy)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Update legal hold policy.
       * @param {string} legalHoldPolicyId The ID of the legal hold policy.
      Example: "324432"
       * @param {UpdateLegalHoldPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<LegalHoldPolicy>}
       */
    updateLegalHoldPolicyById(legalHoldPolicyId_1) {
        return __awaiter(this, arguments, void 0, function* (legalHoldPolicyId, optionalsInput = {}) {
            const optionals = new UpdateLegalHoldPolicyByIdOptionals({
                requestBody: optionalsInput.requestBody,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const requestBody = optionals.requestBody;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policies/', (0, utils_js_4.toString)(legalHoldPolicyId)),
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateLegalHoldPolicyByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, legalHoldPolicy_generated_js_1.deserializeLegalHoldPolicy)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Delete an existing legal hold policy.
       *
       * This is an asynchronous process. The policy will not be
       * fully deleted yet when the response returns.
       * @param {string} legalHoldPolicyId The ID of the legal hold policy.
      Example: "324432"
       * @param {DeleteLegalHoldPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteLegalHoldPolicyById(legalHoldPolicyId_1) {
        return __awaiter(this, arguments, void 0, function* (legalHoldPolicyId, optionalsInput = {}) {
            const optionals = new DeleteLegalHoldPolicyByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policies/', (0, utils_js_4.toString)(legalHoldPolicyId)),
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
exports.LegalHoldPoliciesManager = LegalHoldPoliciesManager;
function serializeCreateLegalHoldPolicyRequestBody(val) {
    return {
        ['policy_name']: val.policyName,
        ['description']: val.description,
        ['filter_started_at']: val.filterStartedAt == void 0
            ? val.filterStartedAt
            : (0, utils_js_1.serializeDateTime)(val.filterStartedAt),
        ['filter_ended_at']: val.filterEndedAt == void 0
            ? val.filterEndedAt
            : (0, utils_js_1.serializeDateTime)(val.filterEndedAt),
        ['is_ongoing']: val.isOngoing,
    };
}
function deserializeCreateLegalHoldPolicyRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateLegalHoldPolicyRequestBody"',
        });
    }
    if (val.policy_name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "policy_name" of type "CreateLegalHoldPolicyRequestBody" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.policy_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "policy_name" of type "CreateLegalHoldPolicyRequestBody"',
        });
    }
    const policyName = val.policy_name;
    if (!(val.description == void 0) && !(0, json_js_2.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "CreateLegalHoldPolicyRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.filter_started_at == void 0) &&
        !(0, json_js_2.sdIsString)(val.filter_started_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "filter_started_at" of type "CreateLegalHoldPolicyRequestBody"',
        });
    }
    const filterStartedAt = val.filter_started_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.filter_started_at);
    if (!(val.filter_ended_at == void 0) && !(0, json_js_2.sdIsString)(val.filter_ended_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "filter_ended_at" of type "CreateLegalHoldPolicyRequestBody"',
        });
    }
    const filterEndedAt = val.filter_ended_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.filter_ended_at);
    if (!(val.is_ongoing == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_ongoing)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_ongoing" of type "CreateLegalHoldPolicyRequestBody"',
        });
    }
    const isOngoing = val.is_ongoing == void 0 ? void 0 : val.is_ongoing;
    return {
        policyName: policyName,
        description: description,
        filterStartedAt: filterStartedAt,
        filterEndedAt: filterEndedAt,
        isOngoing: isOngoing,
    };
}
function serializeUpdateLegalHoldPolicyByIdRequestBody(val) {
    return {
        ['policy_name']: val.policyName,
        ['description']: val.description,
        ['release_notes']: val.releaseNotes,
    };
}
function deserializeUpdateLegalHoldPolicyByIdRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateLegalHoldPolicyByIdRequestBody"',
        });
    }
    if (!(val.policy_name == void 0) && !(0, json_js_2.sdIsString)(val.policy_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "policy_name" of type "UpdateLegalHoldPolicyByIdRequestBody"',
        });
    }
    const policyName = val.policy_name == void 0 ? void 0 : val.policy_name;
    if (!(val.description == void 0) && !(0, json_js_2.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "UpdateLegalHoldPolicyByIdRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.release_notes == void 0) && !(0, json_js_2.sdIsString)(val.release_notes)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "release_notes" of type "UpdateLegalHoldPolicyByIdRequestBody"',
        });
    }
    const releaseNotes = val.release_notes == void 0 ? void 0 : val.release_notes;
    return {
        policyName: policyName,
        description: description,
        releaseNotes: releaseNotes,
    };
}
//# sourceMappingURL=legalHoldPolicies.generated.js.map