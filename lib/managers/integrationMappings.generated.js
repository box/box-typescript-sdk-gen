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
exports.IntegrationMappingsManager = exports.DeleteTeamsIntegrationMappingByIdHeaders = exports.UpdateTeamsIntegrationMappingByIdHeaders = exports.CreateTeamsIntegrationMappingHeaders = exports.GetTeamsIntegrationMappingHeaders = exports.DeleteSlackIntegrationMappingByIdHeaders = exports.UpdateSlackIntegrationMappingByIdHeaders = exports.CreateSlackIntegrationMappingHeaders = exports.GetSlackIntegrationMappingHeaders = exports.DeleteTeamsIntegrationMappingByIdOptionals = exports.UpdateTeamsIntegrationMappingByIdOptionals = exports.CreateTeamsIntegrationMappingOptionals = exports.DeleteSlackIntegrationMappingByIdOptionals = exports.UpdateSlackIntegrationMappingByIdOptionals = exports.CreateSlackIntegrationMappingOptionals = void 0;
exports.serializeGetSlackIntegrationMappingQueryParamsPartnerItemTypeField = serializeGetSlackIntegrationMappingQueryParamsPartnerItemTypeField;
exports.deserializeGetSlackIntegrationMappingQueryParamsPartnerItemTypeField = deserializeGetSlackIntegrationMappingQueryParamsPartnerItemTypeField;
exports.serializeGetSlackIntegrationMappingQueryParamsBoxItemTypeField = serializeGetSlackIntegrationMappingQueryParamsBoxItemTypeField;
exports.deserializeGetSlackIntegrationMappingQueryParamsBoxItemTypeField = deserializeGetSlackIntegrationMappingQueryParamsBoxItemTypeField;
exports.serializeUpdateSlackIntegrationMappingByIdRequestBody = serializeUpdateSlackIntegrationMappingByIdRequestBody;
exports.deserializeUpdateSlackIntegrationMappingByIdRequestBody = deserializeUpdateSlackIntegrationMappingByIdRequestBody;
exports.serializeGetTeamsIntegrationMappingQueryParamsPartnerItemTypeField = serializeGetTeamsIntegrationMappingQueryParamsPartnerItemTypeField;
exports.deserializeGetTeamsIntegrationMappingQueryParamsPartnerItemTypeField = deserializeGetTeamsIntegrationMappingQueryParamsPartnerItemTypeField;
exports.serializeGetTeamsIntegrationMappingQueryParamsBoxItemTypeField = serializeGetTeamsIntegrationMappingQueryParamsBoxItemTypeField;
exports.deserializeGetTeamsIntegrationMappingQueryParamsBoxItemTypeField = deserializeGetTeamsIntegrationMappingQueryParamsBoxItemTypeField;
exports.serializeUpdateTeamsIntegrationMappingByIdRequestBody = serializeUpdateTeamsIntegrationMappingByIdRequestBody;
exports.deserializeUpdateTeamsIntegrationMappingByIdRequestBody = deserializeUpdateTeamsIntegrationMappingByIdRequestBody;
const integrationMappings_generated_js_1 = require("../schemas/integrationMappings.generated.js");
const integrationMapping_generated_js_1 = require("../schemas/integrationMapping.generated.js");
const integrationMappingSlackCreateRequest_generated_js_1 = require("../schemas/integrationMappingSlackCreateRequest.generated.js");
const integrationMappingBoxItemSlack_generated_js_1 = require("../schemas/integrationMappingBoxItemSlack.generated.js");
const integrationMappingBoxItemSlack_generated_js_2 = require("../schemas/integrationMappingBoxItemSlack.generated.js");
const integrationMappingSlackOptions_generated_js_1 = require("../schemas/integrationMappingSlackOptions.generated.js");
const integrationMappingSlackOptions_generated_js_2 = require("../schemas/integrationMappingSlackOptions.generated.js");
const integrationMappingsTeams_generated_js_1 = require("../schemas/integrationMappingsTeams.generated.js");
const integrationMappingTeams_generated_js_1 = require("../schemas/integrationMappingTeams.generated.js");
const integrationMappingTeamsCreateRequest_generated_js_1 = require("../schemas/integrationMappingTeamsCreateRequest.generated.js");
const folderReference_generated_js_1 = require("../schemas/folderReference.generated.js");
const folderReference_generated_js_2 = require("../schemas/folderReference.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class CreateSlackIntegrationMappingOptionals {
    constructor(fields) {
        this.headers = new CreateSlackIntegrationMappingHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateSlackIntegrationMappingOptionals = CreateSlackIntegrationMappingOptionals;
class UpdateSlackIntegrationMappingByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new UpdateSlackIntegrationMappingByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.requestBody !== undefined) {
            this.requestBody = fields.requestBody;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateSlackIntegrationMappingByIdOptionals = UpdateSlackIntegrationMappingByIdOptionals;
class DeleteSlackIntegrationMappingByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteSlackIntegrationMappingByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteSlackIntegrationMappingByIdOptionals = DeleteSlackIntegrationMappingByIdOptionals;
class CreateTeamsIntegrationMappingOptionals {
    constructor(fields) {
        this.headers = new CreateTeamsIntegrationMappingHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateTeamsIntegrationMappingOptionals = CreateTeamsIntegrationMappingOptionals;
class UpdateTeamsIntegrationMappingByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new UpdateTeamsIntegrationMappingByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.requestBody !== undefined) {
            this.requestBody = fields.requestBody;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateTeamsIntegrationMappingByIdOptionals = UpdateTeamsIntegrationMappingByIdOptionals;
class DeleteTeamsIntegrationMappingByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteTeamsIntegrationMappingByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteTeamsIntegrationMappingByIdOptionals = DeleteTeamsIntegrationMappingByIdOptionals;
class GetSlackIntegrationMappingHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetSlackIntegrationMappingHeaders = GetSlackIntegrationMappingHeaders;
class CreateSlackIntegrationMappingHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateSlackIntegrationMappingHeaders = CreateSlackIntegrationMappingHeaders;
class UpdateSlackIntegrationMappingByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateSlackIntegrationMappingByIdHeaders = UpdateSlackIntegrationMappingByIdHeaders;
class DeleteSlackIntegrationMappingByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteSlackIntegrationMappingByIdHeaders = DeleteSlackIntegrationMappingByIdHeaders;
class GetTeamsIntegrationMappingHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetTeamsIntegrationMappingHeaders = GetTeamsIntegrationMappingHeaders;
class CreateTeamsIntegrationMappingHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateTeamsIntegrationMappingHeaders = CreateTeamsIntegrationMappingHeaders;
class UpdateTeamsIntegrationMappingByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateTeamsIntegrationMappingByIdHeaders = UpdateTeamsIntegrationMappingByIdHeaders;
class DeleteTeamsIntegrationMappingByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteTeamsIntegrationMappingByIdHeaders = DeleteTeamsIntegrationMappingByIdHeaders;
class IntegrationMappingsManager {
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
     * Lists [Slack integration mappings](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack) in a users' enterprise.
     *
     * You need Admin or Co-Admin role to
     * use this endpoint.
     * @param {GetSlackIntegrationMappingQueryParams} queryParams Query parameters of getSlackIntegrationMapping method
     * @param {GetSlackIntegrationMappingHeadersInput} headersInput Headers of getSlackIntegrationMapping method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<IntegrationMappings>}
     */
    getSlackIntegrationMapping() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetSlackIntegrationMappingHeaders({}), cancellationToken) {
            const headers = new GetSlackIntegrationMappingHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['partner_item_type']: (0, utils_js_2.toString)(queryParams.partnerItemType),
                ['partner_item_id']: (0, utils_js_2.toString)(queryParams.partnerItemId),
                ['box_item_id']: (0, utils_js_2.toString)(queryParams.boxItemId),
                ['box_item_type']: (0, utils_js_2.toString)(queryParams.boxItemType),
                ['is_manually_created']: (0, utils_js_2.toString)(queryParams.isManuallyCreated),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/integration_mappings/slack'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, integrationMappings_generated_js_1.deserializeIntegrationMappings)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack)
     * by mapping a Slack channel to a Box item.
     *
     * You need Admin or Co-Admin role to
     * use this endpoint.
     * @param {IntegrationMappingSlackCreateRequest} requestBody Request body of createSlackIntegrationMapping method
     * @param {CreateSlackIntegrationMappingOptionalsInput} optionalsInput
     * @returns {Promise<IntegrationMapping>}
     */
    createSlackIntegrationMapping(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateSlackIntegrationMappingOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/integration_mappings/slack'),
                method: 'POST',
                headers: headersMap,
                data: (0, integrationMappingSlackCreateRequest_generated_js_1.serializeIntegrationMappingSlackCreateRequest)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, integrationMapping_generated_js_1.deserializeIntegrationMapping)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).
       * Supports updating the Box folder ID and options.
       *
       * You need Admin or Co-Admin role to
       * use this endpoint.
       * @param {string} integrationMappingId An ID of an integration mapping.
      Example: "11235432"
       * @param {UpdateSlackIntegrationMappingByIdOptionalsInput} optionalsInput
       * @returns {Promise<IntegrationMapping>}
       */
    updateSlackIntegrationMappingById(integrationMappingId_1) {
        return __awaiter(this, arguments, void 0, function* (integrationMappingId, optionalsInput = {}) {
            const optionals = new UpdateSlackIntegrationMappingByIdOptionals({
                requestBody: optionalsInput.requestBody,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const requestBody = optionals.requestBody;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/integration_mappings/slack/', (0, utils_js_2.toString)(integrationMappingId)),
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateSlackIntegrationMappingByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, integrationMapping_generated_js_1.deserializeIntegrationMapping)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Deletes a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).
       *
       *
       * You need Admin or Co-Admin role to
       * use this endpoint.
       * @param {string} integrationMappingId An ID of an integration mapping.
      Example: "11235432"
       * @param {DeleteSlackIntegrationMappingByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteSlackIntegrationMappingById(integrationMappingId_1) {
        return __awaiter(this, arguments, void 0, function* (integrationMappingId, optionalsInput = {}) {
            const optionals = new DeleteSlackIntegrationMappingByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/integration_mappings/slack/', (0, utils_js_2.toString)(integrationMappingId)),
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
     * Lists [Teams integration mappings](https://support.box.com/hc/en-us/articles/360044681474-Using-Box-for-Teams) in a users' enterprise.
     * You need Admin or Co-Admin role to
     * use this endpoint.
     * @param {GetTeamsIntegrationMappingQueryParams} queryParams Query parameters of getTeamsIntegrationMapping method
     * @param {GetTeamsIntegrationMappingHeadersInput} headersInput Headers of getTeamsIntegrationMapping method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<IntegrationMappingsTeams>}
     */
    getTeamsIntegrationMapping() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetTeamsIntegrationMappingHeaders({}), cancellationToken) {
            const headers = new GetTeamsIntegrationMappingHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['partner_item_type']: (0, utils_js_2.toString)(queryParams.partnerItemType),
                ['partner_item_id']: (0, utils_js_2.toString)(queryParams.partnerItemId),
                ['box_item_id']: (0, utils_js_2.toString)(queryParams.boxItemId),
                ['box_item_type']: (0, utils_js_2.toString)(queryParams.boxItemType),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/integration_mappings/teams'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, integrationMappingsTeams_generated_js_1.deserializeIntegrationMappingsTeams)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a [Teams integration mapping](https://support.box.com/hc/en-us/articles/360044681474-Using-Box-for-Teams)
     * by mapping a Teams channel to a Box item.
     * You need Admin or Co-Admin role to
     * use this endpoint.
     * @param {IntegrationMappingTeamsCreateRequest} requestBody Request body of createTeamsIntegrationMapping method
     * @param {CreateTeamsIntegrationMappingOptionalsInput} optionalsInput
     * @returns {Promise<IntegrationMappingTeams>}
     */
    createTeamsIntegrationMapping(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateTeamsIntegrationMappingOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/integration_mappings/teams'),
                method: 'POST',
                headers: headersMap,
                data: (0, integrationMappingTeamsCreateRequest_generated_js_1.serializeIntegrationMappingTeamsCreateRequest)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, integrationMappingTeams_generated_js_1.deserializeIntegrationMappingTeams)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates a [Teams integration mapping](https://support.box.com/hc/en-us/articles/360044681474-Using-Box-for-Teams).
       * Supports updating the Box folder ID and options.
       * You need Admin or Co-Admin role to
       * use this endpoint.
       * @param {string} integrationMappingId An ID of an integration mapping.
      Example: "11235432"
       * @param {UpdateTeamsIntegrationMappingByIdOptionalsInput} optionalsInput
       * @returns {Promise<IntegrationMappingTeams>}
       */
    updateTeamsIntegrationMappingById(integrationMappingId_1) {
        return __awaiter(this, arguments, void 0, function* (integrationMappingId, optionalsInput = {}) {
            const optionals = new UpdateTeamsIntegrationMappingByIdOptionals({
                requestBody: optionalsInput.requestBody,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const requestBody = optionals.requestBody;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/integration_mappings/teams/', (0, utils_js_2.toString)(integrationMappingId)),
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateTeamsIntegrationMappingByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, integrationMappingTeams_generated_js_1.deserializeIntegrationMappingTeams)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Deletes a [Teams integration mapping](https://support.box.com/hc/en-us/articles/360044681474-Using-Box-for-Teams).
       * You need Admin or Co-Admin role to
       * use this endpoint.
       * @param {string} integrationMappingId An ID of an integration mapping.
      Example: "11235432"
       * @param {DeleteTeamsIntegrationMappingByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteTeamsIntegrationMappingById(integrationMappingId_1) {
        return __awaiter(this, arguments, void 0, function* (integrationMappingId, optionalsInput = {}) {
            const optionals = new DeleteTeamsIntegrationMappingByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/integration_mappings/teams/', (0, utils_js_2.toString)(integrationMappingId)),
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
exports.IntegrationMappingsManager = IntegrationMappingsManager;
function serializeGetSlackIntegrationMappingQueryParamsPartnerItemTypeField(val) {
    return val;
}
function deserializeGetSlackIntegrationMappingQueryParamsPartnerItemTypeField(val) {
    if (val == 'channel') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetSlackIntegrationMappingQueryParamsPartnerItemTypeField",
    });
}
function serializeGetSlackIntegrationMappingQueryParamsBoxItemTypeField(val) {
    return val;
}
function deserializeGetSlackIntegrationMappingQueryParamsBoxItemTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetSlackIntegrationMappingQueryParamsBoxItemTypeField",
    });
}
function serializeUpdateSlackIntegrationMappingByIdRequestBody(val) {
    return {
        ['box_item']: val.boxItem == void 0
            ? val.boxItem
            : (0, integrationMappingBoxItemSlack_generated_js_1.serializeIntegrationMappingBoxItemSlack)(val.boxItem),
        ['options']: val.options == void 0
            ? val.options
            : (0, integrationMappingSlackOptions_generated_js_1.serializeIntegrationMappingSlackOptions)(val.options),
    };
}
function deserializeUpdateSlackIntegrationMappingByIdRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateSlackIntegrationMappingByIdRequestBody"',
        });
    }
    const boxItem = val.box_item == void 0
        ? void 0
        : (0, integrationMappingBoxItemSlack_generated_js_2.deserializeIntegrationMappingBoxItemSlack)(val.box_item);
    const options = val.options == void 0
        ? void 0
        : (0, integrationMappingSlackOptions_generated_js_2.deserializeIntegrationMappingSlackOptions)(val.options);
    return {
        boxItem: boxItem,
        options: options,
    };
}
function serializeGetTeamsIntegrationMappingQueryParamsPartnerItemTypeField(val) {
    return val;
}
function deserializeGetTeamsIntegrationMappingQueryParamsPartnerItemTypeField(val) {
    if (val == 'channel') {
        return val;
    }
    if (val == 'team') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetTeamsIntegrationMappingQueryParamsPartnerItemTypeField",
    });
}
function serializeGetTeamsIntegrationMappingQueryParamsBoxItemTypeField(val) {
    return val;
}
function deserializeGetTeamsIntegrationMappingQueryParamsBoxItemTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetTeamsIntegrationMappingQueryParamsBoxItemTypeField",
    });
}
function serializeUpdateTeamsIntegrationMappingByIdRequestBody(val) {
    return {
        ['box_item']: val.boxItem == void 0
            ? val.boxItem
            : (0, folderReference_generated_js_1.serializeFolderReference)(val.boxItem),
    };
}
function deserializeUpdateTeamsIntegrationMappingByIdRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateTeamsIntegrationMappingByIdRequestBody"',
        });
    }
    const boxItem = val.box_item == void 0 ? void 0 : (0, folderReference_generated_js_2.deserializeFolderReference)(val.box_item);
    return {
        boxItem: boxItem,
    };
}
//# sourceMappingURL=integrationMappings.generated.js.map