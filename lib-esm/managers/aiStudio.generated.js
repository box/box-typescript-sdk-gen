import { deserializeAiMultipleAgentResponse } from '../schemas/aiMultipleAgentResponse.generated.js';
import { deserializeAiSingleAgentResponseFull } from '../schemas/aiSingleAgentResponseFull.generated.js';
import { serializeCreateAiAgent } from '../schemas/createAiAgent.generated.js';
import { CreateAiAgent } from '../schemas/createAiAgent.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class CreateAiAgentOptionals {
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
export class UpdateAiAgentByIdOptionals {
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
export class GetAiAgentByIdOptionals {
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
export class DeleteAiAgentByIdOptionals {
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
export class GetAiAgentsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateAiAgentHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateAiAgentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetAiAgentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteAiAgentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class AiStudioManager {
    constructor(fields) {
        this.networkSession = new NetworkSession({});
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
    async getAiAgents(queryParams = {}, headersInput = new GetAiAgentsHeaders({}), cancellationToken) {
        const headers = new GetAiAgentsHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['mode']: queryParams.mode
                ? queryParams.mode.map(toString).join(',')
                : undefined,
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
            ['agent_state']: queryParams.agentState
                ? queryParams.agentState.map(toString).join(',')
                : undefined,
            ['include_box_default']: toString(queryParams.includeBoxDefault),
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai_agents'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeAiMultipleAgentResponse(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates an AI agent. At least one of the following capabilities must be provided: `ask`, `text_gen`, `extract`.
     * @param {CreateAiAgentInput} requestBodyInput Request body of createAiAgent method
     * @param {CreateAiAgentOptionalsInput} optionalsInput
     * @returns {Promise<AiSingleAgentResponseFull>}
     */
    async createAiAgent(requestBodyInput, optionalsInput = {}) {
        const requestBody = new CreateAiAgent({
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
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai_agents'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateAiAgent(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeAiSingleAgentResponseFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Updates an AI agent.
       * @param {string} agentId The ID of the agent to update.
      Example: "1234"
       * @param {CreateAiAgentInput} requestBodyInput Request body of updateAiAgentById method
       * @param {UpdateAiAgentByIdOptionalsInput} optionalsInput
       * @returns {Promise<AiSingleAgentResponseFull>}
       */
    async updateAiAgentById(agentId, requestBodyInput, optionalsInput = {}) {
        const requestBody = new CreateAiAgent({
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
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai_agents/', toString(agentId)),
            method: 'PUT',
            headers: headersMap,
            data: serializeCreateAiAgent(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeAiSingleAgentResponseFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Gets an AI Agent using the `agent_id` parameter.
       * @param {string} agentId The agent id to get.
      Example: "1234"
       * @param {GetAiAgentByIdOptionalsInput} optionalsInput
       * @returns {Promise<AiSingleAgentResponseFull>}
       */
    async getAiAgentById(agentId, optionalsInput = {}) {
        const optionals = new GetAiAgentByIdOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai_agents/', toString(agentId)),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeAiSingleAgentResponseFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Deletes an AI agent using the provided parameters.
       * @param {string} agentId The ID of the agent to delete.
      Example: "1234"
       * @param {DeleteAiAgentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteAiAgentById(agentId, optionalsInput = {}) {
        const optionals = new DeleteAiAgentByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai_agents/', toString(agentId)),
            method: 'DELETE',
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
}
//# sourceMappingURL=aiStudio.generated.js.map