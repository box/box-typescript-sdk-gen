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
exports.LegalHoldPolicyAssignmentsManager = exports.GetLegalHoldPolicyAssignmentFileOnHoldHeaders = exports.DeleteLegalHoldPolicyAssignmentByIdHeaders = exports.GetLegalHoldPolicyAssignmentByIdHeaders = exports.CreateLegalHoldPolicyAssignmentHeaders = exports.GetLegalHoldPolicyAssignmentsHeaders = exports.GetLegalHoldPolicyAssignmentFileOnHoldOptionals = exports.DeleteLegalHoldPolicyAssignmentByIdOptionals = exports.GetLegalHoldPolicyAssignmentByIdOptionals = exports.CreateLegalHoldPolicyAssignmentOptionals = exports.GetLegalHoldPolicyAssignmentsOptionals = void 0;
exports.serializeGetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField = serializeGetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField;
exports.deserializeGetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField = deserializeGetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField;
exports.serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField = serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField;
exports.deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField = deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField;
exports.serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField = serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField;
exports.deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField = deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField;
exports.serializeCreateLegalHoldPolicyAssignmentRequestBody = serializeCreateLegalHoldPolicyAssignmentRequestBody;
exports.deserializeCreateLegalHoldPolicyAssignmentRequestBody = deserializeCreateLegalHoldPolicyAssignmentRequestBody;
const legalHoldPolicyAssignments_generated_js_1 = require("../schemas/legalHoldPolicyAssignments.generated.js");
const legalHoldPolicyAssignment_generated_js_1 = require("../schemas/legalHoldPolicyAssignment.generated.js");
const filesOnHold_generated_js_1 = require("../schemas/filesOnHold.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetLegalHoldPolicyAssignmentsOptionals {
    constructor(fields) {
        this.headers = new GetLegalHoldPolicyAssignmentsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetLegalHoldPolicyAssignmentsOptionals = GetLegalHoldPolicyAssignmentsOptionals;
class CreateLegalHoldPolicyAssignmentOptionals {
    constructor(fields) {
        this.headers = new CreateLegalHoldPolicyAssignmentHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateLegalHoldPolicyAssignmentOptionals = CreateLegalHoldPolicyAssignmentOptionals;
class GetLegalHoldPolicyAssignmentByIdOptionals {
    constructor(fields) {
        this.headers = new GetLegalHoldPolicyAssignmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetLegalHoldPolicyAssignmentByIdOptionals = GetLegalHoldPolicyAssignmentByIdOptionals;
class DeleteLegalHoldPolicyAssignmentByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteLegalHoldPolicyAssignmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteLegalHoldPolicyAssignmentByIdOptionals = DeleteLegalHoldPolicyAssignmentByIdOptionals;
class GetLegalHoldPolicyAssignmentFileOnHoldOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetLegalHoldPolicyAssignmentFileOnHoldHeaders({});
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
exports.GetLegalHoldPolicyAssignmentFileOnHoldOptionals = GetLegalHoldPolicyAssignmentFileOnHoldOptionals;
class GetLegalHoldPolicyAssignmentsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetLegalHoldPolicyAssignmentsHeaders = GetLegalHoldPolicyAssignmentsHeaders;
class CreateLegalHoldPolicyAssignmentHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateLegalHoldPolicyAssignmentHeaders = CreateLegalHoldPolicyAssignmentHeaders;
class GetLegalHoldPolicyAssignmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetLegalHoldPolicyAssignmentByIdHeaders = GetLegalHoldPolicyAssignmentByIdHeaders;
class DeleteLegalHoldPolicyAssignmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteLegalHoldPolicyAssignmentByIdHeaders = DeleteLegalHoldPolicyAssignmentByIdHeaders;
class GetLegalHoldPolicyAssignmentFileOnHoldHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetLegalHoldPolicyAssignmentFileOnHoldHeaders = GetLegalHoldPolicyAssignmentFileOnHoldHeaders;
class LegalHoldPolicyAssignmentsManager {
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
     * Retrieves a list of items a legal hold policy has been assigned to.
     * @param {GetLegalHoldPolicyAssignmentsQueryParams} queryParams Query parameters of getLegalHoldPolicyAssignments method
     * @param {GetLegalHoldPolicyAssignmentsOptionalsInput} optionalsInput
     * @returns {Promise<LegalHoldPolicyAssignments>}
     */
    getLegalHoldPolicyAssignments(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetLegalHoldPolicyAssignmentsOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['policy_id']: (0, utils_js_2.toString)(queryParams.policyId),
                ['assign_to_type']: (0, utils_js_2.toString)(queryParams.assignToType),
                ['assign_to_id']: (0, utils_js_2.toString)(queryParams.assignToId),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policy_assignments'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, legalHoldPolicyAssignments_generated_js_1.deserializeLegalHoldPolicyAssignments)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Assign a legal hold to a file, file version, folder, or user.
     * @param {CreateLegalHoldPolicyAssignmentRequestBody} requestBody Request body of createLegalHoldPolicyAssignment method
     * @param {CreateLegalHoldPolicyAssignmentOptionalsInput} optionalsInput
     * @returns {Promise<LegalHoldPolicyAssignment>}
     */
    createLegalHoldPolicyAssignment(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateLegalHoldPolicyAssignmentOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policy_assignments'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateLegalHoldPolicyAssignmentRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, legalHoldPolicyAssignment_generated_js_1.deserializeLegalHoldPolicyAssignment)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieve a legal hold policy assignment.
       * @param {string} legalHoldPolicyAssignmentId The ID of the legal hold policy assignment.
      Example: "753465"
       * @param {GetLegalHoldPolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<LegalHoldPolicyAssignment>}
       */
    getLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId_1) {
        return __awaiter(this, arguments, void 0, function* (legalHoldPolicyAssignmentId, optionalsInput = {}) {
            const optionals = new GetLegalHoldPolicyAssignmentByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policy_assignments/', (0, utils_js_2.toString)(legalHoldPolicyAssignmentId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, legalHoldPolicyAssignment_generated_js_1.deserializeLegalHoldPolicyAssignment)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Remove a legal hold from an item.
       *
       * This is an asynchronous process. The policy will not be
       * fully removed yet when the response returns.
       * @param {string} legalHoldPolicyAssignmentId The ID of the legal hold policy assignment.
      Example: "753465"
       * @param {DeleteLegalHoldPolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId_1) {
        return __awaiter(this, arguments, void 0, function* (legalHoldPolicyAssignmentId, optionalsInput = {}) {
            const optionals = new DeleteLegalHoldPolicyAssignmentByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policy_assignments/', (0, utils_js_2.toString)(legalHoldPolicyAssignmentId)),
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
       * Get a list of files with current file versions for a legal hold
       * assignment.
       *
       * In some cases you may want to get previous file versions instead. In these
       * cases, use the `GET  /legal_hold_policy_assignments/:id/file_versions_on_hold`
       * API instead to return any previous versions of a file for this legal hold
       * policy assignment.
       *
       * Due to ongoing re-architecture efforts this API might not return all file
       * versions held for this policy ID. Instead, this API will only return the
       * latest file version held in the newly developed architecture. The `GET
       * /file_version_legal_holds` API can be used to fetch current and past versions
       * of files held within the legacy architecture.
       *
       * This endpoint does not support returning any content that is on hold due to
       * a Custodian collaborating on a Hub.
       *
       * The `GET /legal_hold_policy_assignments?policy_id={id}` API can be used to
       * find a list of policy assignments for a given policy ID.
       * @param {string} legalHoldPolicyAssignmentId The ID of the legal hold policy assignment.
      Example: "753465"
       * @param {GetLegalHoldPolicyAssignmentFileOnHoldOptionalsInput} optionalsInput
       * @returns {Promise<FilesOnHold>}
       */
    getLegalHoldPolicyAssignmentFileOnHold(legalHoldPolicyAssignmentId_1) {
        return __awaiter(this, arguments, void 0, function* (legalHoldPolicyAssignmentId, optionalsInput = {}) {
            const optionals = new GetLegalHoldPolicyAssignmentFileOnHoldOptionals({
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
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policy_assignments/', (0, utils_js_2.toString)(legalHoldPolicyAssignmentId), '/files_on_hold'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, filesOnHold_generated_js_1.deserializeFilesOnHold)(response.data)), { rawData: response.data });
        });
    }
}
exports.LegalHoldPolicyAssignmentsManager = LegalHoldPolicyAssignmentsManager;
function serializeGetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField(val) {
    return val;
}
function deserializeGetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'file_version') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    if (val == 'user') {
        return val;
    }
    if (val == 'ownership') {
        return val;
    }
    if (val == 'interactions') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField",
    });
}
function serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(val) {
    return val;
}
function deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'file_version') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    if (val == 'user') {
        return val;
    }
    if (val == 'ownership') {
        return val;
    }
    if (val == 'interaction') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField",
    });
}
function serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(val) {
    return {
        ['type']: serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateLegalHoldPolicyAssignmentRequestBodyAssignToField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CreateLegalHoldPolicyAssignmentRequestBodyAssignToField" to be defined',
        });
    }
    const type = deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CreateLegalHoldPolicyAssignmentRequestBodyAssignToField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateLegalHoldPolicyAssignmentRequestBodyAssignToField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeCreateLegalHoldPolicyAssignmentRequestBody(val) {
    return {
        ['policy_id']: val.policyId,
        ['assign_to']: serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(val.assignTo),
    };
}
function deserializeCreateLegalHoldPolicyAssignmentRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateLegalHoldPolicyAssignmentRequestBody"',
        });
    }
    if (val.policy_id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "policy_id" of type "CreateLegalHoldPolicyAssignmentRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.policy_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "policy_id" of type "CreateLegalHoldPolicyAssignmentRequestBody"',
        });
    }
    const policyId = val.policy_id;
    if (val.assign_to == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "assign_to" of type "CreateLegalHoldPolicyAssignmentRequestBody" to be defined',
        });
    }
    const assignTo = deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(val.assign_to);
    return {
        policyId: policyId,
        assignTo: assignTo,
    };
}
//# sourceMappingURL=legalHoldPolicyAssignments.generated.js.map