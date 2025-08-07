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
exports.AiStudioManager = exports.DeleteAiAgentByIdHeaders = exports.GetAiAgentByIdHeaders = exports.UpdateAiAgentByIdHeaders = exports.CreateAiAgentHeaders = exports.GetAiAgentsHeaders = exports.DeleteAiAgentByIdOptionals = exports.GetAiAgentByIdOptionals = exports.UpdateAiAgentByIdOptionals = exports.CreateAiAgentOptionals = void 0;
const aiMultipleAgentResponse_generated_js_1 = require("../schemas/aiMultipleAgentResponse.generated.js");
const aiSingleAgentResponseFull_generated_js_1 = require("../schemas/aiSingleAgentResponseFull.generated.js");
const createAiAgent_generated_js_1 = require("../schemas/createAiAgent.generated.js");
const createAiAgent_generated_js_2 = require("../schemas/createAiAgent.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
class CreateAiAgentOptionals {
    constructor(fields) {
        this.headers = new CreateAiAgentHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateAiAgentOptionals = CreateAiAgentOptionals;
class UpdateAiAgentByIdOptionals {
    constructor(fields) {
        this.headers = new UpdateAiAgentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.UpdateAiAgentByIdOptionals = UpdateAiAgentByIdOptionals;
class GetAiAgentByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetAiAgentByIdHeaders({});
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
exports.GetAiAgentByIdOptionals = GetAiAgentByIdOptionals;
class DeleteAiAgentByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteAiAgentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.DeleteAiAgentByIdOptionals = DeleteAiAgentByIdOptionals;
class GetAiAgentsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetAiAgentsHeaders = GetAiAgentsHeaders;
class CreateAiAgentHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateAiAgentHeaders = CreateAiAgentHeaders;
class UpdateAiAgentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateAiAgentByIdHeaders = UpdateAiAgentByIdHeaders;
class GetAiAgentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetAiAgentByIdHeaders = GetAiAgentByIdHeaders;
class DeleteAiAgentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteAiAgentByIdHeaders = DeleteAiAgentByIdHeaders;
class AiStudioManager {
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
     * Lists AI agents based on the provided parameters.
     * @param {GetAiAgentsQueryParams} queryParams Query parameters of getAiAgents method
     * @param {GetAiAgentsHeadersInput} headersInput Headers of getAiAgents method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<AiMultipleAgentResponse>}
     */
    getAiAgents() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetAiAgentsHeaders({}), cancellationToken) {
            const headers = new GetAiAgentsHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['mode']: queryParams.mode
                    ? queryParams.mode.map(utils_js_2.toString).join(',')
                    : undefined,
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
                ['agent_state']: queryParams.agentState
                    ? queryParams.agentState.map(utils_js_2.toString).join(',')
                    : undefined,
                ['include_box_default']: (0, utils_js_2.toString)(queryParams.includeBoxDefault),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai_agents'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, aiMultipleAgentResponse_generated_js_1.deserializeAiMultipleAgentResponse)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates an AI agent. At least one of the following capabilities must be provided: `ask`, `text_gen`, `extract`.
     * @param {CreateAiAgentInput} requestBodyInput Request body of createAiAgent method
     * @param {CreateAiAgentOptionalsInput} optionalsInput
     * @returns {Promise<AiSingleAgentResponseFull>}
     */
    createAiAgent(requestBodyInput_1) {
        return __awaiter(this, arguments, void 0, function* (requestBodyInput, optionalsInput = {}) {
            const requestBody = new createAiAgent_generated_js_2.CreateAiAgent({
                type: requestBodyInput.type,
                name: requestBodyInput.name,
                accessState: requestBodyInput.accessState,
                iconReference: requestBodyInput.iconReference,
                allowedEntities: requestBodyInput.allowedEntities,
                ask: requestBodyInput.ask,
                textGen: requestBodyInput.textGen,
                extract: requestBodyInput.extract,
            });
            const optionals = new CreateAiAgentOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai_agents'),
                method: 'POST',
                headers: headersMap,
                data: (0, createAiAgent_generated_js_1.serializeCreateAiAgent)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, aiSingleAgentResponseFull_generated_js_1.deserializeAiSingleAgentResponseFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates an AI agent.
       * @param {string} agentId The ID of the agent to update.
      Example: "1234"
       * @param {CreateAiAgentInput} requestBodyInput Request body of updateAiAgentById method
       * @param {UpdateAiAgentByIdOptionalsInput} optionalsInput
       * @returns {Promise<AiSingleAgentResponseFull>}
       */
    updateAiAgentById(agentId_1, requestBodyInput_1) {
        return __awaiter(this, arguments, void 0, function* (agentId, requestBodyInput, optionalsInput = {}) {
            const requestBody = new createAiAgent_generated_js_2.CreateAiAgent({
                type: requestBodyInput.type,
                name: requestBodyInput.name,
                accessState: requestBodyInput.accessState,
                iconReference: requestBodyInput.iconReference,
                allowedEntities: requestBodyInput.allowedEntities,
                ask: requestBodyInput.ask,
                textGen: requestBodyInput.textGen,
                extract: requestBodyInput.extract,
            });
            const optionals = new UpdateAiAgentByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai_agents/', (0, utils_js_2.toString)(agentId)),
                method: 'PUT',
                headers: headersMap,
                data: (0, createAiAgent_generated_js_1.serializeCreateAiAgent)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, aiSingleAgentResponseFull_generated_js_1.deserializeAiSingleAgentResponseFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Gets an AI Agent using the `agent_id` parameter.
       * @param {string} agentId The agent id to get.
      Example: "1234"
       * @param {GetAiAgentByIdOptionalsInput} optionalsInput
       * @returns {Promise<AiSingleAgentResponseFull>}
       */
    getAiAgentById(agentId_1) {
        return __awaiter(this, arguments, void 0, function* (agentId, optionalsInput = {}) {
            const optionals = new GetAiAgentByIdOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai_agents/', (0, utils_js_2.toString)(agentId)),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, aiSingleAgentResponseFull_generated_js_1.deserializeAiSingleAgentResponseFull)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Deletes an AI agent using the provided parameters.
       * @param {string} agentId The ID of the agent to delete.
      Example: "1234"
       * @param {DeleteAiAgentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteAiAgentById(agentId_1) {
        return __awaiter(this, arguments, void 0, function* (agentId, optionalsInput = {}) {
            const optionals = new DeleteAiAgentByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai_agents/', (0, utils_js_2.toString)(agentId)),
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
exports.AiStudioManager = AiStudioManager;
//# sourceMappingURL=aiStudio.generated.js.map