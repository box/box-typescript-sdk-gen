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
exports.ShieldInformationBarriersManager = exports.CreateShieldInformationBarrierHeaders = exports.GetShieldInformationBarriersHeaders = exports.UpdateShieldInformationBarrierStatusHeaders = exports.GetShieldInformationBarrierByIdHeaders = exports.CreateShieldInformationBarrierOptionals = exports.UpdateShieldInformationBarrierStatusOptionals = exports.GetShieldInformationBarrierByIdOptionals = void 0;
exports.serializeUpdateShieldInformationBarrierStatusRequestBodyStatusField = serializeUpdateShieldInformationBarrierStatusRequestBodyStatusField;
exports.deserializeUpdateShieldInformationBarrierStatusRequestBodyStatusField = deserializeUpdateShieldInformationBarrierStatusRequestBodyStatusField;
exports.serializeUpdateShieldInformationBarrierStatusRequestBody = serializeUpdateShieldInformationBarrierStatusRequestBody;
exports.deserializeUpdateShieldInformationBarrierStatusRequestBody = deserializeUpdateShieldInformationBarrierStatusRequestBody;
exports.serializeCreateShieldInformationBarrierRequestBody = serializeCreateShieldInformationBarrierRequestBody;
exports.deserializeCreateShieldInformationBarrierRequestBody = deserializeCreateShieldInformationBarrierRequestBody;
const shieldInformationBarrier_generated_js_1 = require("../schemas/shieldInformationBarrier.generated.js");
const shieldInformationBarriers_generated_js_1 = require("../schemas/shieldInformationBarriers.generated.js");
const enterpriseBase_generated_js_1 = require("../schemas/enterpriseBase.generated.js");
const enterpriseBase_generated_js_2 = require("../schemas/enterpriseBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetShieldInformationBarrierByIdOptionals {
    constructor(fields) {
        this.headers = new GetShieldInformationBarrierByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetShieldInformationBarrierByIdOptionals = GetShieldInformationBarrierByIdOptionals;
class UpdateShieldInformationBarrierStatusOptionals {
    constructor(fields) {
        this.headers = new UpdateShieldInformationBarrierStatusHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateShieldInformationBarrierStatusOptionals = UpdateShieldInformationBarrierStatusOptionals;
class CreateShieldInformationBarrierOptionals {
    constructor(fields) {
        this.headers = new CreateShieldInformationBarrierHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateShieldInformationBarrierOptionals = CreateShieldInformationBarrierOptionals;
class GetShieldInformationBarrierByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetShieldInformationBarrierByIdHeaders = GetShieldInformationBarrierByIdHeaders;
class UpdateShieldInformationBarrierStatusHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateShieldInformationBarrierStatusHeaders = UpdateShieldInformationBarrierStatusHeaders;
class GetShieldInformationBarriersHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetShieldInformationBarriersHeaders = GetShieldInformationBarriersHeaders;
class CreateShieldInformationBarrierHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateShieldInformationBarrierHeaders = CreateShieldInformationBarrierHeaders;
class ShieldInformationBarriersManager {
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
       * Get shield information barrier based on provided ID.
       * @param {string} shieldInformationBarrierId The ID of the shield information barrier.
      Example: "1910967"
       * @param {GetShieldInformationBarrierByIdOptionalsInput} optionalsInput
       * @returns {Promise<ShieldInformationBarrier>}
       */
    getShieldInformationBarrierById(shieldInformationBarrierId_1) {
        return __awaiter(this, arguments, void 0, function* (shieldInformationBarrierId, optionalsInput = {}) {
            const optionals = new GetShieldInformationBarrierByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barriers/', (0, utils_js_2.toString)(shieldInformationBarrierId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, shieldInformationBarrier_generated_js_1.deserializeShieldInformationBarrier)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Change status of shield information barrier with the specified ID.
     * @param {UpdateShieldInformationBarrierStatusRequestBody} requestBody Request body of updateShieldInformationBarrierStatus method
     * @param {UpdateShieldInformationBarrierStatusOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrier>}
     */
    updateShieldInformationBarrierStatus(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new UpdateShieldInformationBarrierStatusOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barriers/change_status'),
                method: 'POST',
                headers: headersMap,
                data: serializeUpdateShieldInformationBarrierStatusRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, shieldInformationBarrier_generated_js_1.deserializeShieldInformationBarrier)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Retrieves a list of shield information barrier objects
     * for the enterprise of JWT.
     * @param {GetShieldInformationBarriersQueryParams} queryParams Query parameters of getShieldInformationBarriers method
     * @param {GetShieldInformationBarriersHeadersInput} headersInput Headers of getShieldInformationBarriers method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<ShieldInformationBarriers>}
     */
    getShieldInformationBarriers() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetShieldInformationBarriersHeaders({}), cancellationToken) {
            const headers = new GetShieldInformationBarriersHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barriers'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, shieldInformationBarriers_generated_js_1.deserializeShieldInformationBarriers)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a shield information barrier to
     * separate individuals/groups within the same
     * firm and prevents confidential information passing between them.
     * @param {CreateShieldInformationBarrierRequestBody} requestBody Request body of createShieldInformationBarrier method
     * @param {CreateShieldInformationBarrierOptionalsInput} optionalsInput
     * @returns {Promise<ShieldInformationBarrier>}
     */
    createShieldInformationBarrier(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateShieldInformationBarrierOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shield_information_barriers'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateShieldInformationBarrierRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, shieldInformationBarrier_generated_js_1.deserializeShieldInformationBarrier)(response.data)), { rawData: response.data });
        });
    }
}
exports.ShieldInformationBarriersManager = ShieldInformationBarriersManager;
function serializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(val) {
    return val;
}
function deserializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(val) {
    if (val == 'pending') {
        return val;
    }
    if (val == 'disabled') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateShieldInformationBarrierStatusRequestBodyStatusField",
    });
}
function serializeUpdateShieldInformationBarrierStatusRequestBody(val) {
    return {
        ['id']: val.id,
        ['status']: serializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(val.status),
    };
}
function deserializeUpdateShieldInformationBarrierStatusRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateShieldInformationBarrierStatusRequestBody"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "UpdateShieldInformationBarrierStatusRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateShieldInformationBarrierStatusRequestBody"',
        });
    }
    const id = val.id;
    if (val.status == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "status" of type "UpdateShieldInformationBarrierStatusRequestBody" to be defined',
        });
    }
    const status = deserializeUpdateShieldInformationBarrierStatusRequestBodyStatusField(val.status);
    return {
        id: id,
        status: status,
    };
}
function serializeCreateShieldInformationBarrierRequestBody(val) {
    return { ['enterprise']: (0, enterpriseBase_generated_js_1.serializeEnterpriseBase)(val.enterprise) };
}
function deserializeCreateShieldInformationBarrierRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateShieldInformationBarrierRequestBody"',
        });
    }
    if (val.enterprise == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "enterprise" of type "CreateShieldInformationBarrierRequestBody" to be defined',
        });
    }
    const enterprise = (0, enterpriseBase_generated_js_2.deserializeEnterpriseBase)(val.enterprise);
    return {
        enterprise: enterprise,
    };
}
//# sourceMappingURL=shieldInformationBarriers.generated.js.map