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
exports.ShieldListsManager = exports.UpdateShieldListByIdV2025R0Headers = exports.DeleteShieldListByIdV2025R0Headers = exports.GetShieldListByIdV2025R0Headers = exports.CreateShieldListV2025R0Headers = exports.GetShieldListsV2025R0Headers = exports.UpdateShieldListByIdV2025R0Optionals = exports.DeleteShieldListByIdV2025R0Optionals = exports.GetShieldListByIdV2025R0Optionals = exports.CreateShieldListV2025R0Optionals = void 0;
const shieldListsV2025R0_generated_js_1 = require("../schemas/v2025R0/shieldListsV2025R0.generated.js");
const shieldListV2025R0_generated_js_1 = require("../schemas/v2025R0/shieldListV2025R0.generated.js");
const shieldListsCreateV2025R0_generated_js_1 = require("../schemas/v2025R0/shieldListsCreateV2025R0.generated.js");
const shieldListsUpdateV2025R0_generated_js_1 = require("../schemas/v2025R0/shieldListsUpdateV2025R0.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
class CreateShieldListV2025R0Optionals {
    constructor(fields) {
        this.headers = new CreateShieldListV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateShieldListV2025R0Optionals = CreateShieldListV2025R0Optionals;
class GetShieldListByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new GetShieldListByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetShieldListByIdV2025R0Optionals = GetShieldListByIdV2025R0Optionals;
class DeleteShieldListByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new DeleteShieldListByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteShieldListByIdV2025R0Optionals = DeleteShieldListByIdV2025R0Optionals;
class UpdateShieldListByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new UpdateShieldListByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateShieldListByIdV2025R0Optionals = UpdateShieldListByIdV2025R0Optionals;
class GetShieldListsV2025R0Headers {
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
exports.GetShieldListsV2025R0Headers = GetShieldListsV2025R0Headers;
class CreateShieldListV2025R0Headers {
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
exports.CreateShieldListV2025R0Headers = CreateShieldListV2025R0Headers;
class GetShieldListByIdV2025R0Headers {
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
exports.GetShieldListByIdV2025R0Headers = GetShieldListByIdV2025R0Headers;
class DeleteShieldListByIdV2025R0Headers {
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
exports.DeleteShieldListByIdV2025R0Headers = DeleteShieldListByIdV2025R0Headers;
class UpdateShieldListByIdV2025R0Headers {
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
exports.UpdateShieldListByIdV2025R0Headers = UpdateShieldListByIdV2025R0Headers;
class ShieldListsManager {
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
     * Retrieves all shield lists in the enterprise.
     * @param {GetShieldListsV2025R0HeadersInput} headersInput Headers of getShieldListsV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<ShieldListsV2025R0>}
     */
    getShieldListsV2025R0() {
        return __awaiter(this, arguments, void 0, function* (headersInput = new GetShieldListsV2025R0Headers({}), cancellationToken) {
            const headers = new GetShieldListsV2025R0Headers({
                boxVersion: headersInput.boxVersion,
                extraHeaders: headersInput.extraHeaders,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_lists'),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, shieldListsV2025R0_generated_js_1.deserializeShieldListsV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a shield list.
     * @param {ShieldListsCreateV2025R0} requestBody Request body of createShieldListV2025R0 method
     * @param {CreateShieldListV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<ShieldListV2025R0>}
     */
    createShieldListV2025R0(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateShieldListV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_lists'),
                method: 'POST',
                headers: headersMap,
                data: (0, shieldListsCreateV2025R0_generated_js_1.serializeShieldListsCreateV2025R0)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, shieldListV2025R0_generated_js_1.deserializeShieldListV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves a single shield list by its ID.
       * @param {string} shieldListId The unique identifier that represents a shield list.
      The ID for any Shield List can be determined by the response from the endpoint
      fetching all shield lists for the enterprise.
      Example: "90fb0e17-c332-40ed-b4f9-fa8908fbbb24 "
       * @param {GetShieldListByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<ShieldListV2025R0>}
       */
    getShieldListByIdV2025R0(shieldListId_1) {
        return __awaiter(this, arguments, void 0, function* (shieldListId, optionalsInput = {}) {
            const optionals = new GetShieldListByIdV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_lists/', (0, utils_js_2.toString)(shieldListId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, shieldListV2025R0_generated_js_1.deserializeShieldListV2025R0)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Delete a single shield list by its ID.
       * @param {string} shieldListId The unique identifier that represents a shield list.
      The ID for any Shield List can be determined by the response from the endpoint
      fetching all shield lists for the enterprise.
      Example: "90fb0e17-c332-40ed-b4f9-fa8908fbbb24 "
       * @param {DeleteShieldListByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteShieldListByIdV2025R0(shieldListId_1) {
        return __awaiter(this, arguments, void 0, function* (shieldListId, optionalsInput = {}) {
            const optionals = new DeleteShieldListByIdV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_lists/', (0, utils_js_2.toString)(shieldListId)),
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
       * Updates a shield list.
       * @param {string} shieldListId The unique identifier that represents a shield list.
      The ID for any Shield List can be determined by the response from the endpoint
      fetching all shield lists for the enterprise.
      Example: "90fb0e17-c332-40ed-b4f9-fa8908fbbb24 "
       * @param {ShieldListsUpdateV2025R0} requestBody Request body of updateShieldListByIdV2025R0 method
       * @param {UpdateShieldListByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<ShieldListV2025R0>}
       */
    updateShieldListByIdV2025R0(shieldListId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (shieldListId, requestBody, optionalsInput = {}) {
            const optionals = new UpdateShieldListByIdV2025R0Optionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['box-version']: (0, utils_js_2.toString)(headers.boxVersion) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_lists/', (0, utils_js_2.toString)(shieldListId)),
                method: 'PUT',
                headers: headersMap,
                data: (0, shieldListsUpdateV2025R0_generated_js_1.serializeShieldListsUpdateV2025R0)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, shieldListV2025R0_generated_js_1.deserializeShieldListV2025R0)(response.data)), { rawData: response.data });
        });
    }
}
exports.ShieldListsManager = ShieldListsManager;
//# sourceMappingURL=shieldLists.generated.js.map