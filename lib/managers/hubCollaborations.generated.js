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
exports.HubCollaborationsManager = exports.DeleteHubCollaborationByIdV2025R0Headers = exports.UpdateHubCollaborationByIdV2025R0Headers = exports.GetHubCollaborationByIdV2025R0Headers = exports.CreateHubCollaborationV2025R0Headers = exports.GetHubCollaborationsV2025R0Headers = exports.DeleteHubCollaborationByIdV2025R0Optionals = exports.UpdateHubCollaborationByIdV2025R0Optionals = exports.GetHubCollaborationByIdV2025R0Optionals = exports.CreateHubCollaborationV2025R0Optionals = exports.GetHubCollaborationsV2025R0Optionals = void 0;
const hubCollaborationsV2025R0_generated_js_1 = require("../schemas/v2025R0/hubCollaborationsV2025R0.generated.js");
const hubCollaborationV2025R0_generated_js_1 = require("../schemas/v2025R0/hubCollaborationV2025R0.generated.js");
const hubCollaborationCreateRequestV2025R0_generated_js_1 = require("../schemas/v2025R0/hubCollaborationCreateRequestV2025R0.generated.js");
const hubCollaborationUpdateRequestV2025R0_generated_js_1 = require("../schemas/v2025R0/hubCollaborationUpdateRequestV2025R0.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
class GetHubCollaborationsV2025R0Optionals {
    constructor(fields) {
        this.headers = new GetHubCollaborationsV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetHubCollaborationsV2025R0Optionals = GetHubCollaborationsV2025R0Optionals;
class CreateHubCollaborationV2025R0Optionals {
    constructor(fields) {
        this.headers = new CreateHubCollaborationV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateHubCollaborationV2025R0Optionals = CreateHubCollaborationV2025R0Optionals;
class GetHubCollaborationByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new GetHubCollaborationByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetHubCollaborationByIdV2025R0Optionals = GetHubCollaborationByIdV2025R0Optionals;
class UpdateHubCollaborationByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new UpdateHubCollaborationByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateHubCollaborationByIdV2025R0Optionals = UpdateHubCollaborationByIdV2025R0Optionals;
class DeleteHubCollaborationByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new DeleteHubCollaborationByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteHubCollaborationByIdV2025R0Optionals = DeleteHubCollaborationByIdV2025R0Optionals;
class GetHubCollaborationsV2025R0Headers {
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
exports.GetHubCollaborationsV2025R0Headers = GetHubCollaborationsV2025R0Headers;
class CreateHubCollaborationV2025R0Headers {
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
exports.CreateHubCollaborationV2025R0Headers = CreateHubCollaborationV2025R0Headers;
class GetHubCollaborationByIdV2025R0Headers {
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
exports.GetHubCollaborationByIdV2025R0Headers = GetHubCollaborationByIdV2025R0Headers;
class UpdateHubCollaborationByIdV2025R0Headers {
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
exports.UpdateHubCollaborationByIdV2025R0Headers = UpdateHubCollaborationByIdV2025R0Headers;
class DeleteHubCollaborationByIdV2025R0Headers {
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
exports.DeleteHubCollaborationByIdV2025R0Headers = DeleteHubCollaborationByIdV2025R0Headers;
class HubCollaborationsManager {
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
     * Retrieves all collaborations for a hub.
     * @param {GetHubCollaborationsV2025R0QueryParams} queryParams Query parameters of getHubCollaborationsV2025R0 method
     * @param {GetHubCollaborationsV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<HubCollaborationsV2025R0>}
     */
    getHubCollaborationsV2025R0(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetHubCollaborationsV2025R0Optionals({
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
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hub_collaborations'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, hubCollaborationsV2025R0_generated_js_1.deserializeHubCollaborationsV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Adds a collaboration for a single user or a single group to a hub.
     *
     * Collaborations can be created using email address, user IDs, or group IDs.
     * @param {HubCollaborationCreateRequestV2025R0} requestBody Request body of createHubCollaborationV2025R0 method
     * @param {CreateHubCollaborationV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<HubCollaborationV2025R0>}
     */
    createHubCollaborationV2025R0(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateHubCollaborationV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hub_collaborations'),
                method: 'POST',
                headers: headersMap,
                data: (0, hubCollaborationCreateRequestV2025R0_generated_js_1.serializeHubCollaborationCreateRequestV2025R0)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, hubCollaborationV2025R0_generated_js_1.deserializeHubCollaborationV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves details for a hub collaboration by collaboration ID.
       * @param {string} hubCollaborationId The ID of the hub collaboration.
      Example: "1234"
       * @param {GetHubCollaborationByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubCollaborationV2025R0>}
       */
    getHubCollaborationByIdV2025R0(hubCollaborationId_1) {
        return __awaiter(this, arguments, void 0, function* (hubCollaborationId, optionalsInput = {}) {
            const optionals = new GetHubCollaborationByIdV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hub_collaborations/', (0, utils_js_2.toString)(hubCollaborationId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, hubCollaborationV2025R0_generated_js_1.deserializeHubCollaborationV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates a hub collaboration.
       * Can be used to change the hub role.
       * @param {string} hubCollaborationId The ID of the hub collaboration.
      Example: "1234"
       * @param {HubCollaborationUpdateRequestV2025R0} requestBody Request body of updateHubCollaborationByIdV2025R0 method
       * @param {UpdateHubCollaborationByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubCollaborationV2025R0>}
       */
    updateHubCollaborationByIdV2025R0(hubCollaborationId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (hubCollaborationId, requestBody, optionalsInput = {}) {
            const optionals = new UpdateHubCollaborationByIdV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hub_collaborations/', (0, utils_js_2.toString)(hubCollaborationId)),
                method: 'PUT',
                headers: headersMap,
                data: (0, hubCollaborationUpdateRequestV2025R0_generated_js_1.serializeHubCollaborationUpdateRequestV2025R0)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, hubCollaborationV2025R0_generated_js_1.deserializeHubCollaborationV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Deletes a single hub collaboration.
       * @param {string} hubCollaborationId The ID of the hub collaboration.
      Example: "1234"
       * @param {DeleteHubCollaborationByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteHubCollaborationByIdV2025R0(hubCollaborationId_1) {
        return __awaiter(this, arguments, void 0, function* (hubCollaborationId, optionalsInput = {}) {
            const optionals = new DeleteHubCollaborationByIdV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/hub_collaborations/', (0, utils_js_2.toString)(hubCollaborationId)),
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
exports.HubCollaborationsManager = HubCollaborationsManager;
//# sourceMappingURL=hubCollaborations.generated.js.map