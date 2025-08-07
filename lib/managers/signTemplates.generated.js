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
exports.SignTemplatesManager = exports.GetSignTemplateByIdHeaders = exports.GetSignTemplatesHeaders = exports.GetSignTemplateByIdOptionals = void 0;
const signTemplates_generated_js_1 = require("../schemas/signTemplates.generated.js");
const signTemplate_generated_js_1 = require("../schemas/signTemplate.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
class GetSignTemplateByIdOptionals {
    constructor(fields) {
        this.headers = new GetSignTemplateByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetSignTemplateByIdOptionals = GetSignTemplateByIdOptionals;
class GetSignTemplatesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetSignTemplatesHeaders = GetSignTemplatesHeaders;
class GetSignTemplateByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetSignTemplateByIdHeaders = GetSignTemplateByIdHeaders;
class SignTemplatesManager {
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
     * Gets Box Sign templates created by a user.
     * @param {GetSignTemplatesQueryParams} queryParams Query parameters of getSignTemplates method
     * @param {GetSignTemplatesHeadersInput} headersInput Headers of getSignTemplates method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<SignTemplates>}
     */
    getSignTemplates() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetSignTemplatesHeaders({}), cancellationToken) {
            const headers = new GetSignTemplatesHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/sign_templates'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, signTemplates_generated_js_1.deserializeSignTemplates)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Fetches details of a specific Box Sign template.
       * @param {string} templateId The ID of a Box Sign template.
      Example: "123075213-7d117509-8f05-42e4-a5ef-5190a319d41d"
       * @param {GetSignTemplateByIdOptionalsInput} optionalsInput
       * @returns {Promise<SignTemplate>}
       */
    getSignTemplateById(templateId_1) {
        return __awaiter(this, arguments, void 0, function* (templateId, optionalsInput = {}) {
            const optionals = new GetSignTemplateByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/sign_templates/', (0, utils_js_2.toString)(templateId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, signTemplate_generated_js_1.deserializeSignTemplate)(response.data)), { rawData: response.data });
        });
    }
}
exports.SignTemplatesManager = SignTemplatesManager;
//# sourceMappingURL=signTemplates.generated.js.map