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
exports.DevicePinnersManager = exports.GetEnterpriseDevicePinnersHeaders = exports.DeleteDevicePinnerByIdHeaders = exports.GetDevicePinnerByIdHeaders = exports.GetEnterpriseDevicePinnersOptionals = exports.DeleteDevicePinnerByIdOptionals = exports.GetDevicePinnerByIdOptionals = void 0;
exports.serializeGetEnterpriseDevicePinnersQueryParamsDirectionField = serializeGetEnterpriseDevicePinnersQueryParamsDirectionField;
exports.deserializeGetEnterpriseDevicePinnersQueryParamsDirectionField = deserializeGetEnterpriseDevicePinnersQueryParamsDirectionField;
const devicePinner_generated_js_1 = require("../schemas/devicePinner.generated.js");
const devicePinners_generated_js_1 = require("../schemas/devicePinners.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
class GetDevicePinnerByIdOptionals {
    constructor(fields) {
        this.headers = new GetDevicePinnerByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetDevicePinnerByIdOptionals = GetDevicePinnerByIdOptionals;
class DeleteDevicePinnerByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteDevicePinnerByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteDevicePinnerByIdOptionals = DeleteDevicePinnerByIdOptionals;
class GetEnterpriseDevicePinnersOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetEnterpriseDevicePinnersHeaders({});
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
exports.GetEnterpriseDevicePinnersOptionals = GetEnterpriseDevicePinnersOptionals;
class GetDevicePinnerByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetDevicePinnerByIdHeaders = GetDevicePinnerByIdHeaders;
class DeleteDevicePinnerByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteDevicePinnerByIdHeaders = DeleteDevicePinnerByIdHeaders;
class GetEnterpriseDevicePinnersHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetEnterpriseDevicePinnersHeaders = GetEnterpriseDevicePinnersHeaders;
class DevicePinnersManager {
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
       * Retrieves information about an individual device pin.
       * @param {string} devicePinnerId The ID of the device pin.
      Example: "2324234"
       * @param {GetDevicePinnerByIdOptionalsInput} optionalsInput
       * @returns {Promise<DevicePinner>}
       */
    getDevicePinnerById(devicePinnerId_1) {
        return __awaiter(this, arguments, void 0, function* (devicePinnerId, optionalsInput = {}) {
            const optionals = new GetDevicePinnerByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/device_pinners/', (0, utils_js_2.toString)(devicePinnerId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, devicePinner_generated_js_1.deserializeDevicePinner)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Deletes an individual device pin.
       * @param {string} devicePinnerId The ID of the device pin.
      Example: "2324234"
       * @param {DeleteDevicePinnerByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteDevicePinnerById(devicePinnerId_1) {
        return __awaiter(this, arguments, void 0, function* (devicePinnerId, optionalsInput = {}) {
            const optionals = new DeleteDevicePinnerByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/device_pinners/', (0, utils_js_2.toString)(devicePinnerId)),
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
       * Retrieves all the device pins within an enterprise.
       *
       * The user must have admin privileges, and the application
       * needs the "manage enterprise" scope to make this call.
       * @param {string} enterpriseId The ID of the enterprise.
      Example: "3442311"
       * @param {GetEnterpriseDevicePinnersOptionalsInput} optionalsInput
       * @returns {Promise<DevicePinners>}
       */
    getEnterpriseDevicePinners(enterpriseId_1) {
        return __awaiter(this, arguments, void 0, function* (enterpriseId, optionalsInput = {}) {
            const optionals = new GetEnterpriseDevicePinnersOptionals({
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
                ['direction']: (0, utils_js_2.toString)(queryParams.direction),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/enterprises/', (0, utils_js_2.toString)(enterpriseId), '/device_pinners'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, devicePinners_generated_js_1.deserializeDevicePinners)(response.data)), { rawData: response.data });
        });
    }
}
exports.DevicePinnersManager = DevicePinnersManager;
function serializeGetEnterpriseDevicePinnersQueryParamsDirectionField(val) {
    return val;
}
function deserializeGetEnterpriseDevicePinnersQueryParamsDirectionField(val) {
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
        message: "Can't deserialize GetEnterpriseDevicePinnersQueryParamsDirectionField",
    });
}
//# sourceMappingURL=devicePinners.generated.js.map