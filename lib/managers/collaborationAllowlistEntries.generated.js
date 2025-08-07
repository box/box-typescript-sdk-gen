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
exports.CollaborationAllowlistEntriesManager = exports.DeleteCollaborationWhitelistEntryByIdHeaders = exports.GetCollaborationWhitelistEntryByIdHeaders = exports.CreateCollaborationWhitelistEntryHeaders = exports.GetCollaborationWhitelistEntriesHeaders = exports.DeleteCollaborationWhitelistEntryByIdOptionals = exports.GetCollaborationWhitelistEntryByIdOptionals = exports.CreateCollaborationWhitelistEntryOptionals = void 0;
exports.serializeCreateCollaborationWhitelistEntryRequestBodyDirectionField = serializeCreateCollaborationWhitelistEntryRequestBodyDirectionField;
exports.deserializeCreateCollaborationWhitelistEntryRequestBodyDirectionField = deserializeCreateCollaborationWhitelistEntryRequestBodyDirectionField;
exports.serializeCreateCollaborationWhitelistEntryRequestBody = serializeCreateCollaborationWhitelistEntryRequestBody;
exports.deserializeCreateCollaborationWhitelistEntryRequestBody = deserializeCreateCollaborationWhitelistEntryRequestBody;
const collaborationAllowlistEntries_generated_js_1 = require("../schemas/collaborationAllowlistEntries.generated.js");
const collaborationAllowlistEntry_generated_js_1 = require("../schemas/collaborationAllowlistEntry.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class CreateCollaborationWhitelistEntryOptionals {
    constructor(fields) {
        this.headers = new CreateCollaborationWhitelistEntryHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateCollaborationWhitelistEntryOptionals = CreateCollaborationWhitelistEntryOptionals;
class GetCollaborationWhitelistEntryByIdOptionals {
    constructor(fields) {
        this.headers = new GetCollaborationWhitelistEntryByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetCollaborationWhitelistEntryByIdOptionals = GetCollaborationWhitelistEntryByIdOptionals;
class DeleteCollaborationWhitelistEntryByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteCollaborationWhitelistEntryByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteCollaborationWhitelistEntryByIdOptionals = DeleteCollaborationWhitelistEntryByIdOptionals;
class GetCollaborationWhitelistEntriesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetCollaborationWhitelistEntriesHeaders = GetCollaborationWhitelistEntriesHeaders;
class CreateCollaborationWhitelistEntryHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateCollaborationWhitelistEntryHeaders = CreateCollaborationWhitelistEntryHeaders;
class GetCollaborationWhitelistEntryByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetCollaborationWhitelistEntryByIdHeaders = GetCollaborationWhitelistEntryByIdHeaders;
class DeleteCollaborationWhitelistEntryByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteCollaborationWhitelistEntryByIdHeaders = DeleteCollaborationWhitelistEntryByIdHeaders;
class CollaborationAllowlistEntriesManager {
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
     * Returns the list domains that have been deemed safe to create collaborations
     * for within the current enterprise.
     * @param {GetCollaborationWhitelistEntriesQueryParams} queryParams Query parameters of getCollaborationWhitelistEntries method
     * @param {GetCollaborationWhitelistEntriesHeadersInput} headersInput Headers of getCollaborationWhitelistEntries method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<CollaborationAllowlistEntries>}
     */
    getCollaborationWhitelistEntries() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetCollaborationWhitelistEntriesHeaders({}), cancellationToken) {
            const headers = new GetCollaborationWhitelistEntriesHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaboration_whitelist_entries'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, collaborationAllowlistEntries_generated_js_1.deserializeCollaborationAllowlistEntries)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a new entry in the list of allowed domains to allow
     * collaboration for.
     * @param {CreateCollaborationWhitelistEntryRequestBody} requestBody Request body of createCollaborationWhitelistEntry method
     * @param {CreateCollaborationWhitelistEntryOptionalsInput} optionalsInput
     * @returns {Promise<CollaborationAllowlistEntry>}
     */
    createCollaborationWhitelistEntry(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateCollaborationWhitelistEntryOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaboration_whitelist_entries'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateCollaborationWhitelistEntryRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, collaborationAllowlistEntry_generated_js_1.deserializeCollaborationAllowlistEntry)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Returns a domain that has been deemed safe to create collaborations
       * for within the current enterprise.
       * @param {string} collaborationWhitelistEntryId The ID of the entry in the list.
      Example: "213123"
       * @param {GetCollaborationWhitelistEntryByIdOptionalsInput} optionalsInput
       * @returns {Promise<CollaborationAllowlistEntry>}
       */
    getCollaborationWhitelistEntryById(collaborationWhitelistEntryId_1) {
        return __awaiter(this, arguments, void 0, function* (collaborationWhitelistEntryId, optionalsInput = {}) {
            const optionals = new GetCollaborationWhitelistEntryByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaboration_whitelist_entries/', (0, utils_js_2.toString)(collaborationWhitelistEntryId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, collaborationAllowlistEntry_generated_js_1.deserializeCollaborationAllowlistEntry)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Removes a domain from the list of domains that have been deemed safe to create
       * collaborations for within the current enterprise.
       * @param {string} collaborationWhitelistEntryId The ID of the entry in the list.
      Example: "213123"
       * @param {DeleteCollaborationWhitelistEntryByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteCollaborationWhitelistEntryById(collaborationWhitelistEntryId_1) {
        return __awaiter(this, arguments, void 0, function* (collaborationWhitelistEntryId, optionalsInput = {}) {
            const optionals = new DeleteCollaborationWhitelistEntryByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaboration_whitelist_entries/', (0, utils_js_2.toString)(collaborationWhitelistEntryId)),
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
exports.CollaborationAllowlistEntriesManager = CollaborationAllowlistEntriesManager;
function serializeCreateCollaborationWhitelistEntryRequestBodyDirectionField(val) {
    return val;
}
function deserializeCreateCollaborationWhitelistEntryRequestBodyDirectionField(val) {
    if (val == 'inbound') {
        return val;
    }
    if (val == 'outbound') {
        return val;
    }
    if (val == 'both') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateCollaborationWhitelistEntryRequestBodyDirectionField",
    });
}
function serializeCreateCollaborationWhitelistEntryRequestBody(val) {
    return {
        ['domain']: val.domain,
        ['direction']: serializeCreateCollaborationWhitelistEntryRequestBodyDirectionField(val.direction),
    };
}
function deserializeCreateCollaborationWhitelistEntryRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateCollaborationWhitelistEntryRequestBody"',
        });
    }
    if (val.domain == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "domain" of type "CreateCollaborationWhitelistEntryRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.domain)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "domain" of type "CreateCollaborationWhitelistEntryRequestBody"',
        });
    }
    const domain = val.domain;
    if (val.direction == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "direction" of type "CreateCollaborationWhitelistEntryRequestBody" to be defined',
        });
    }
    const direction = deserializeCreateCollaborationWhitelistEntryRequestBodyDirectionField(val.direction);
    return {
        domain: domain,
        direction: direction,
    };
}
//# sourceMappingURL=collaborationAllowlistEntries.generated.js.map