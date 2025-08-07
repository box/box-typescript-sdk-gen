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
exports.HubItemsManager = exports.ManageHubItemsV2025R0Headers = exports.GetHubItemsV2025R0Headers = exports.ManageHubItemsV2025R0Optionals = exports.GetHubItemsV2025R0Optionals = void 0;
const hubItemsV2025R0_generated_js_1 = require("../schemas/v2025R0/hubItemsV2025R0.generated.js");
const hubItemsManageResponseV2025R0_generated_js_1 = require("../schemas/v2025R0/hubItemsManageResponseV2025R0.generated.js");
const hubItemsManageRequestV2025R0_generated_js_1 = require("../schemas/v2025R0/hubItemsManageRequestV2025R0.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
class GetHubItemsV2025R0Optionals {
    constructor(fields) {
        this.headers = new GetHubItemsV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetHubItemsV2025R0Optionals = GetHubItemsV2025R0Optionals;
class ManageHubItemsV2025R0Optionals {
    constructor(fields) {
        this.headers = new ManageHubItemsV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.ManageHubItemsV2025R0Optionals = ManageHubItemsV2025R0Optionals;
class GetHubItemsV2025R0Headers {
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
exports.GetHubItemsV2025R0Headers = GetHubItemsV2025R0Headers;
class ManageHubItemsV2025R0Headers {
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
exports.ManageHubItemsV2025R0Headers = ManageHubItemsV2025R0Headers;
class HubItemsManager {
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
     * Retrieves all items associated with a Hub.
     * @param {GetHubItemsV2025R0QueryParams} queryParams Query parameters of getHubItemsV2025R0 method
     * @param {GetHubItemsV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<HubItemsV2025R0>}
     */
    getHubItemsV2025R0(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetHubItemsV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['hub_id']: (0, utils_js_2.toString)(queryParams.hubId),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hub_items'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, hubItemsV2025R0_generated_js_1.deserializeHubItemsV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Adds and/or removes Hub items from a Hub.
       * @param {string} hubId The unique identifier that represent a hub.
      
      The ID for any hub can be determined
      by visiting this hub in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/hubs/123`
      the `hub_id` is `123`.
      Example: "12345"
       * @param {HubItemsManageRequestV2025R0} requestBody Request body of manageHubItemsV2025R0 method
       * @param {ManageHubItemsV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubItemsManageResponseV2025R0>}
       */
    manageHubItemsV2025R0(hubId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (hubId, requestBody, optionalsInput = {}) {
            const optionals = new ManageHubItemsV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hubs/', (0, utils_js_2.toString)(hubId), '/manage_items'),
                method: 'POST',
                headers: headersMap,
                data: (0, hubItemsManageRequestV2025R0_generated_js_1.serializeHubItemsManageRequestV2025R0)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, hubItemsManageResponseV2025R0_generated_js_1.deserializeHubItemsManageResponseV2025R0)(response.data)), { rawData: response.data });
        });
    }
}
exports.HubItemsManager = HubItemsManager;
//# sourceMappingURL=hubItems.generated.js.map