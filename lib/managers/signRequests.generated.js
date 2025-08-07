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
exports.SignRequestsManager = exports.CreateSignRequestHeaders = exports.GetSignRequestsHeaders = exports.GetSignRequestByIdHeaders = exports.ResendSignRequestHeaders = exports.CancelSignRequestHeaders = exports.CreateSignRequestOptionals = exports.GetSignRequestByIdOptionals = exports.ResendSignRequestOptionals = exports.CancelSignRequestOptionals = void 0;
const signRequest_generated_js_1 = require("../schemas/signRequest.generated.js");
const signRequests_generated_js_1 = require("../schemas/signRequests.generated.js");
const signRequestCreateRequest_generated_js_1 = require("../schemas/signRequestCreateRequest.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
class CancelSignRequestOptionals {
    constructor(fields) {
        this.headers = new CancelSignRequestHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CancelSignRequestOptionals = CancelSignRequestOptionals;
class ResendSignRequestOptionals {
    constructor(fields) {
        this.headers = new ResendSignRequestHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.ResendSignRequestOptionals = ResendSignRequestOptionals;
class GetSignRequestByIdOptionals {
    constructor(fields) {
        this.headers = new GetSignRequestByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetSignRequestByIdOptionals = GetSignRequestByIdOptionals;
class CreateSignRequestOptionals {
    constructor(fields) {
        this.headers = new CreateSignRequestHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateSignRequestOptionals = CreateSignRequestOptionals;
class CancelSignRequestHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CancelSignRequestHeaders = CancelSignRequestHeaders;
class ResendSignRequestHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.ResendSignRequestHeaders = ResendSignRequestHeaders;
class GetSignRequestByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetSignRequestByIdHeaders = GetSignRequestByIdHeaders;
class GetSignRequestsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetSignRequestsHeaders = GetSignRequestsHeaders;
class CreateSignRequestHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateSignRequestHeaders = CreateSignRequestHeaders;
class SignRequestsManager {
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
       * Cancels a sign request.
       * @param {string} signRequestId The ID of the signature request.
      Example: "33243242"
       * @param {CancelSignRequestOptionalsInput} optionalsInput
       * @returns {Promise<SignRequest>}
       */
    cancelSignRequest(signRequestId_1) {
        return __awaiter(this, arguments, void 0, function* (signRequestId, optionalsInput = {}) {
            const optionals = new CancelSignRequestOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/sign_requests/', (0, utils_js_2.toString)(signRequestId), '/cancel'),
                method: 'POST',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, signRequest_generated_js_1.deserializeSignRequest)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Resends a signature request email to all outstanding signers.
       * @param {string} signRequestId The ID of the signature request.
      Example: "33243242"
       * @param {ResendSignRequestOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    resendSignRequest(signRequestId_1) {
        return __awaiter(this, arguments, void 0, function* (signRequestId, optionalsInput = {}) {
            const optionals = new ResendSignRequestOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/sign_requests/', (0, utils_js_2.toString)(signRequestId), '/resend'),
                method: 'POST',
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
       * Gets a sign request by ID.
       * @param {string} signRequestId The ID of the signature request.
      Example: "33243242"
       * @param {GetSignRequestByIdOptionalsInput} optionalsInput
       * @returns {Promise<SignRequest>}
       */
    getSignRequestById(signRequestId_1) {
        return __awaiter(this, arguments, void 0, function* (signRequestId, optionalsInput = {}) {
            const optionals = new GetSignRequestByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/sign_requests/', (0, utils_js_2.toString)(signRequestId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, signRequest_generated_js_1.deserializeSignRequest)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Gets signature requests created by a user. If the `sign_files` and/or
     * `parent_folder` are deleted, the signature request will not return in the list.
     * @param {GetSignRequestsQueryParams} queryParams Query parameters of getSignRequests method
     * @param {GetSignRequestsHeadersInput} headersInput Headers of getSignRequests method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<SignRequests>}
     */
    getSignRequests() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetSignRequestsHeaders({}), cancellationToken) {
            const headers = new GetSignRequestsHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['senders']: queryParams.senders
                    ? queryParams.senders.map(utils_js_2.toString).join(',')
                    : undefined,
                ['shared_requests']: (0, utils_js_2.toString)(queryParams.sharedRequests),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/sign_requests'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, signRequests_generated_js_1.deserializeSignRequests)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a signature request. This involves preparing a document for signing and
     * sending the signature request to signers.
     * @param {SignRequestCreateRequest} requestBody Request body of createSignRequest method
     * @param {CreateSignRequestOptionalsInput} optionalsInput
     * @returns {Promise<SignRequest>}
     */
    createSignRequest(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateSignRequestOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/sign_requests'),
                method: 'POST',
                headers: headersMap,
                data: (0, signRequestCreateRequest_generated_js_1.serializeSignRequestCreateRequest)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, signRequest_generated_js_1.deserializeSignRequest)(response.data)), { rawData: response.data });
        });
    }
}
exports.SignRequestsManager = SignRequestsManager;
//# sourceMappingURL=signRequests.generated.js.map