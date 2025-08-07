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
exports.HubsManager = exports.CopyHubV2025R0Headers = exports.DeleteHubByIdV2025R0Headers = exports.UpdateHubByIdV2025R0Headers = exports.GetHubByIdV2025R0Headers = exports.GetEnterpriseHubsV2025R0Headers = exports.CreateHubV2025R0Headers = exports.GetHubsV2025R0Headers = exports.CopyHubV2025R0Optionals = exports.DeleteHubByIdV2025R0Optionals = exports.UpdateHubByIdV2025R0Optionals = exports.GetHubByIdV2025R0Optionals = exports.CreateHubV2025R0Optionals = void 0;
exports.serializeGetHubsV2025R0QueryParamsDirectionField = serializeGetHubsV2025R0QueryParamsDirectionField;
exports.deserializeGetHubsV2025R0QueryParamsDirectionField = deserializeGetHubsV2025R0QueryParamsDirectionField;
exports.serializeGetEnterpriseHubsV2025R0QueryParamsDirectionField = serializeGetEnterpriseHubsV2025R0QueryParamsDirectionField;
exports.deserializeGetEnterpriseHubsV2025R0QueryParamsDirectionField = deserializeGetEnterpriseHubsV2025R0QueryParamsDirectionField;
const hubsV2025R0_generated_js_1 = require("../schemas/v2025R0/hubsV2025R0.generated.js");
const hubV2025R0_generated_js_1 = require("../schemas/v2025R0/hubV2025R0.generated.js");
const hubCreateRequestV2025R0_generated_js_1 = require("../schemas/v2025R0/hubCreateRequestV2025R0.generated.js");
const hubUpdateRequestV2025R0_generated_js_1 = require("../schemas/v2025R0/hubUpdateRequestV2025R0.generated.js");
const hubCopyRequestV2025R0_generated_js_1 = require("../schemas/v2025R0/hubCopyRequestV2025R0.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
class CreateHubV2025R0Optionals {
    constructor(fields) {
        this.headers = new CreateHubV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateHubV2025R0Optionals = CreateHubV2025R0Optionals;
class GetHubByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new GetHubByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetHubByIdV2025R0Optionals = GetHubByIdV2025R0Optionals;
class UpdateHubByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new UpdateHubByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateHubByIdV2025R0Optionals = UpdateHubByIdV2025R0Optionals;
class DeleteHubByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new DeleteHubByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteHubByIdV2025R0Optionals = DeleteHubByIdV2025R0Optionals;
class CopyHubV2025R0Optionals {
    constructor(fields) {
        this.headers = new CopyHubV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CopyHubV2025R0Optionals = CopyHubV2025R0Optionals;
class GetHubsV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetHubsV2025R0Headers = GetHubsV2025R0Headers;
class CreateHubV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateHubV2025R0Headers = CreateHubV2025R0Headers;
class GetEnterpriseHubsV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetEnterpriseHubsV2025R0Headers = GetEnterpriseHubsV2025R0Headers;
class GetHubByIdV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetHubByIdV2025R0Headers = GetHubByIdV2025R0Headers;
class UpdateHubByIdV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateHubByIdV2025R0Headers = UpdateHubByIdV2025R0Headers;
class DeleteHubByIdV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteHubByIdV2025R0Headers = DeleteHubByIdV2025R0Headers;
class CopyHubV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CopyHubV2025R0Headers = CopyHubV2025R0Headers;
class HubsManager {
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
     * Retrieves all hubs for requesting user.
     * @param {GetHubsV2025R0QueryParams} queryParams Query parameters of getHubsV2025R0 method
     * @param {GetHubsV2025R0HeadersInput} headersInput Headers of getHubsV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<HubsV2025R0>}
     */
    getHubsV2025R0() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetHubsV2025R0Headers({}), cancellationToken) {
            const headers = new GetHubsV2025R0Headers({
                boxVersion: headersInput.boxVersion,
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['query']: (0, utils_js_2.toString)(queryParams.query),
                ['scope']: (0, utils_js_2.toString)(queryParams.scope),
                ['sort']: (0, utils_js_2.toString)(queryParams.sort),
                ['direction']: (0, utils_js_2.toString)(queryParams.direction),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hubs'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, hubsV2025R0_generated_js_1.deserializeHubsV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a new Hub.
     * @param {HubCreateRequestV2025R0} requestBody Request body of createHubV2025R0 method
     * @param {CreateHubV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<HubV2025R0>}
     */
    createHubV2025R0(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateHubV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hubs'),
                method: 'POST',
                headers: headersMap,
                data: (0, hubCreateRequestV2025R0_generated_js_1.serializeHubCreateRequestV2025R0)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, hubV2025R0_generated_js_1.deserializeHubV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Retrieves all hubs for a given enterprise.
     *
     * Admins or Hub Co-admins of an enterprise
     * with GCM scope can make this call.
     * @param {GetEnterpriseHubsV2025R0QueryParams} queryParams Query parameters of getEnterpriseHubsV2025R0 method
     * @param {GetEnterpriseHubsV2025R0HeadersInput} headersInput Headers of getEnterpriseHubsV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<HubsV2025R0>}
     */
    getEnterpriseHubsV2025R0() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetEnterpriseHubsV2025R0Headers({}), cancellationToken) {
            const headers = new GetEnterpriseHubsV2025R0Headers({
                boxVersion: headersInput.boxVersion,
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['query']: (0, utils_js_2.toString)(queryParams.query),
                ['sort']: (0, utils_js_2.toString)(queryParams.sort),
                ['direction']: (0, utils_js_2.toString)(queryParams.direction),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/enterprise_hubs'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, hubsV2025R0_generated_js_1.deserializeHubsV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves details for a hub by its ID.
       * @param {string} hubId The unique identifier that represent a hub.
      
      The ID for any hub can be determined
      by visiting this hub in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/hubs/123`
      the `hub_id` is `123`.
      Example: "12345"
       * @param {GetHubByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubV2025R0>}
       */
    getHubByIdV2025R0(hubId_1) {
        return __awaiter(this, arguments, void 0, function* (hubId, optionalsInput = {}) {
            const optionals = new GetHubByIdV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hubs/', (0, utils_js_2.toString)(hubId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, hubV2025R0_generated_js_1.deserializeHubV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates a Hub. Can be used to change title, description, or Hub settings.
       * @param {string} hubId The unique identifier that represent a hub.
      
      The ID for any hub can be determined
      by visiting this hub in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/hubs/123`
      the `hub_id` is `123`.
      Example: "12345"
       * @param {HubUpdateRequestV2025R0} requestBody Request body of updateHubByIdV2025R0 method
       * @param {UpdateHubByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubV2025R0>}
       */
    updateHubByIdV2025R0(hubId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (hubId, requestBody, optionalsInput = {}) {
            const optionals = new UpdateHubByIdV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hubs/', (0, utils_js_2.toString)(hubId)),
                method: 'PUT',
                headers: headersMap,
                data: (0, hubUpdateRequestV2025R0_generated_js_1.serializeHubUpdateRequestV2025R0)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, hubV2025R0_generated_js_1.deserializeHubV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Deletes a single hub.
       * @param {string} hubId The unique identifier that represent a hub.
      
      The ID for any hub can be determined
      by visiting this hub in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/hubs/123`
      the `hub_id` is `123`.
      Example: "12345"
       * @param {DeleteHubByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteHubByIdV2025R0(hubId_1) {
        return __awaiter(this, arguments, void 0, function* (hubId, optionalsInput = {}) {
            const optionals = new DeleteHubByIdV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hubs/', (0, utils_js_2.toString)(hubId)),
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
       * Creates a copy of a Hub.
       *
       * The original Hub will not be modified.
       * @param {string} hubId The unique identifier that represent a hub.
      
      The ID for any hub can be determined
      by visiting this hub in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/hubs/123`
      the `hub_id` is `123`.
      Example: "12345"
       * @param {HubCopyRequestV2025R0} requestBody Request body of copyHubV2025R0 method
       * @param {CopyHubV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubV2025R0>}
       */
    copyHubV2025R0(hubId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (hubId, requestBody, optionalsInput = {}) {
            const optionals = new CopyHubV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hubs/', (0, utils_js_2.toString)(hubId), '/copy'),
                method: 'POST',
                headers: headersMap,
                data: (0, hubCopyRequestV2025R0_generated_js_1.serializeHubCopyRequestV2025R0)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, hubV2025R0_generated_js_1.deserializeHubV2025R0)(response.data)), { rawData: response.data });
        });
    }
}
exports.HubsManager = HubsManager;
function serializeGetHubsV2025R0QueryParamsDirectionField(val) {
    return val;
}
function deserializeGetHubsV2025R0QueryParamsDirectionField(val) {
    if (val == 'ASC') {
        return val;
    }
    if (val == 'DESC') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetHubsV2025R0QueryParamsDirectionField",
    });
}
function serializeGetEnterpriseHubsV2025R0QueryParamsDirectionField(val) {
    return val;
}
function deserializeGetEnterpriseHubsV2025R0QueryParamsDirectionField(val) {
    if (val == 'ASC') {
        return val;
    }
    if (val == 'DESC') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetEnterpriseHubsV2025R0QueryParamsDirectionField",
    });
}
//# sourceMappingURL=hubs.generated.js.map