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
exports.CollaborationAllowlistExemptTargetsManager = exports.DeleteCollaborationWhitelistExemptTargetByIdHeaders = exports.GetCollaborationWhitelistExemptTargetByIdHeaders = exports.CreateCollaborationWhitelistExemptTargetHeaders = exports.GetCollaborationWhitelistExemptTargetsHeaders = exports.DeleteCollaborationWhitelistExemptTargetByIdOptionals = exports.GetCollaborationWhitelistExemptTargetByIdOptionals = exports.CreateCollaborationWhitelistExemptTargetOptionals = void 0;
exports.serializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField = serializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField;
exports.deserializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField = deserializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField;
exports.serializeCreateCollaborationWhitelistExemptTargetRequestBody = serializeCreateCollaborationWhitelistExemptTargetRequestBody;
exports.deserializeCreateCollaborationWhitelistExemptTargetRequestBody = deserializeCreateCollaborationWhitelistExemptTargetRequestBody;
const collaborationAllowlistExemptTargets_generated_js_1 = require("../schemas/collaborationAllowlistExemptTargets.generated.js");
const collaborationAllowlistExemptTarget_generated_js_1 = require("../schemas/collaborationAllowlistExemptTarget.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class CreateCollaborationWhitelistExemptTargetOptionals {
    constructor(fields) {
        this.headers = new CreateCollaborationWhitelistExemptTargetHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateCollaborationWhitelistExemptTargetOptionals = CreateCollaborationWhitelistExemptTargetOptionals;
class GetCollaborationWhitelistExemptTargetByIdOptionals {
    constructor(fields) {
        this.headers = new GetCollaborationWhitelistExemptTargetByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetCollaborationWhitelistExemptTargetByIdOptionals = GetCollaborationWhitelistExemptTargetByIdOptionals;
class DeleteCollaborationWhitelistExemptTargetByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteCollaborationWhitelistExemptTargetByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteCollaborationWhitelistExemptTargetByIdOptionals = DeleteCollaborationWhitelistExemptTargetByIdOptionals;
class GetCollaborationWhitelistExemptTargetsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetCollaborationWhitelistExemptTargetsHeaders = GetCollaborationWhitelistExemptTargetsHeaders;
class CreateCollaborationWhitelistExemptTargetHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateCollaborationWhitelistExemptTargetHeaders = CreateCollaborationWhitelistExemptTargetHeaders;
class GetCollaborationWhitelistExemptTargetByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetCollaborationWhitelistExemptTargetByIdHeaders = GetCollaborationWhitelistExemptTargetByIdHeaders;
class DeleteCollaborationWhitelistExemptTargetByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteCollaborationWhitelistExemptTargetByIdHeaders = DeleteCollaborationWhitelistExemptTargetByIdHeaders;
class CollaborationAllowlistExemptTargetsManager {
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
     * Returns a list of users who have been exempt from the collaboration
     * domain restrictions.
     * @param {GetCollaborationWhitelistExemptTargetsQueryParams} queryParams Query parameters of getCollaborationWhitelistExemptTargets method
     * @param {GetCollaborationWhitelistExemptTargetsHeadersInput} headersInput Headers of getCollaborationWhitelistExemptTargets method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<CollaborationAllowlistExemptTargets>}
     */
    getCollaborationWhitelistExemptTargets() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetCollaborationWhitelistExemptTargetsHeaders({}), cancellationToken) {
            const headers = new GetCollaborationWhitelistExemptTargetsHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaboration_whitelist_exempt_targets'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, collaborationAllowlistExemptTargets_generated_js_1.deserializeCollaborationAllowlistExemptTargets)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Exempts a user from the restrictions set out by the allowed list of domains
     * for collaborations.
     * @param {CreateCollaborationWhitelistExemptTargetRequestBody} requestBody Request body of createCollaborationWhitelistExemptTarget method
     * @param {CreateCollaborationWhitelistExemptTargetOptionalsInput} optionalsInput
     * @returns {Promise<CollaborationAllowlistExemptTarget>}
     */
    createCollaborationWhitelistExemptTarget(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateCollaborationWhitelistExemptTargetOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaboration_whitelist_exempt_targets'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateCollaborationWhitelistExemptTargetRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, collaborationAllowlistExemptTarget_generated_js_1.deserializeCollaborationAllowlistExemptTarget)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Returns a users who has been exempt from the collaboration
       * domain restrictions.
       * @param {string} collaborationWhitelistExemptTargetId The ID of the exemption to the list.
      Example: "984923"
       * @param {GetCollaborationWhitelistExemptTargetByIdOptionalsInput} optionalsInput
       * @returns {Promise<CollaborationAllowlistExemptTarget>}
       */
    getCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId_1) {
        return __awaiter(this, arguments, void 0, function* (collaborationWhitelistExemptTargetId, optionalsInput = {}) {
            const optionals = new GetCollaborationWhitelistExemptTargetByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaboration_whitelist_exempt_targets/', (0, utils_js_2.toString)(collaborationWhitelistExemptTargetId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, collaborationAllowlistExemptTarget_generated_js_1.deserializeCollaborationAllowlistExemptTarget)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Removes a user's exemption from the restrictions set out by the allowed list
       * of domains for collaborations.
       * @param {string} collaborationWhitelistExemptTargetId The ID of the exemption to the list.
      Example: "984923"
       * @param {DeleteCollaborationWhitelistExemptTargetByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId_1) {
        return __awaiter(this, arguments, void 0, function* (collaborationWhitelistExemptTargetId, optionalsInput = {}) {
            const optionals = new DeleteCollaborationWhitelistExemptTargetByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaboration_whitelist_exempt_targets/', (0, utils_js_2.toString)(collaborationWhitelistExemptTargetId)),
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
exports.CollaborationAllowlistExemptTargetsManager = CollaborationAllowlistExemptTargetsManager;
function serializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField(val) {
    return { ['id']: val.id };
}
function deserializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateCollaborationWhitelistExemptTargetRequestBodyUserField"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CreateCollaborationWhitelistExemptTargetRequestBodyUserField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateCollaborationWhitelistExemptTargetRequestBodyUserField"',
        });
    }
    const id = val.id;
    return {
        id: id,
    };
}
function serializeCreateCollaborationWhitelistExemptTargetRequestBody(val) {
    return {
        ['user']: serializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField(val.user),
    };
}
function deserializeCreateCollaborationWhitelistExemptTargetRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateCollaborationWhitelistExemptTargetRequestBody"',
        });
    }
    if (val.user == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "user" of type "CreateCollaborationWhitelistExemptTargetRequestBody" to be defined',
        });
    }
    const user = deserializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField(val.user);
    return {
        user: user,
    };
}
//# sourceMappingURL=collaborationAllowlistExemptTargets.generated.js.map