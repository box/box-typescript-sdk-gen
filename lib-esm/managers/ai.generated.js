import { deserializeAiResponseFull } from '../schemas/aiResponseFull.generated.js';
import { serializeAiAsk } from '../schemas/aiAsk.generated.js';
import { deserializeAiResponse } from '../schemas/aiResponse.generated.js';
import { serializeAiTextGen } from '../schemas/aiTextGen.generated.js';
import { deserializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen } from '../schemas/aiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen.generated.js';
import { serializeAiExtract } from '../schemas/aiExtract.generated.js';
import { deserializeAiExtractStructuredResponse } from '../schemas/aiExtractStructuredResponse.generated.js';
import { serializeAiExtractStructured } from '../schemas/aiExtractStructured.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
export class CreateAiAskOptionals {
    constructor(fields) {
        this.headers = new CreateAiAskHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateAiTextGenOptionals {
    constructor(fields) {
        this.headers = new CreateAiTextGenHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetAiAgentDefaultConfigOptionals {
    constructor(fields) {
        this.headers = new GetAiAgentDefaultConfigHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateAiExtractOptionals {
    constructor(fields) {
        this.headers = new CreateAiExtractHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateAiExtractStructuredOptionals {
    constructor(fields) {
        this.headers = new CreateAiExtractStructuredHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateAiAskHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateAiTextGenHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetAiAgentDefaultConfigHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateAiExtractHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateAiExtractStructuredHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class AiManager {
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
     * Sends an AI request to supported LLMs and returns an answer specifically focused on the user's question given the provided context.
     * @param {AiAsk} requestBody Request body of createAiAsk method
     * @param {CreateAiAskOptionalsInput} optionalsInput
     * @returns {Promise<undefined | AiResponseFull>}
     */
    async createAiAsk(requestBody, optionalsInput = {}) {
        const optionals = new CreateAiAskOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai/ask'),
            method: 'POST',
            headers: headersMap,
            data: serializeAiAsk(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        if (toString(response.status) == '204') {
            return void 0;
        }
        return {
            ...deserializeAiResponseFull(response.data),
            rawData: response.data,
        };
    }
    /**
     * Sends an AI request to supported Large Language Models (LLMs) and returns generated text based on the provided prompt.
     * @param {AiTextGen} requestBody Request body of createAiTextGen method
     * @param {CreateAiTextGenOptionalsInput} optionalsInput
     * @returns {Promise<AiResponse>}
     */
    async createAiTextGen(requestBody, optionalsInput = {}) {
        const optionals = new CreateAiTextGenOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai/text_gen'),
            method: 'POST',
            headers: headersMap,
            data: serializeAiTextGen(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeAiResponse(response.data),
            rawData: response.data,
        };
    }
    /**
     * Get the AI agent default config.
     * @param {GetAiAgentDefaultConfigQueryParams} queryParams Query parameters of getAiAgentDefaultConfig method
     * @param {GetAiAgentDefaultConfigOptionalsInput} optionalsInput
     * @returns {Promise<AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen>}
     */
    async getAiAgentDefaultConfig(queryParams, optionalsInput = {}) {
        const optionals = new GetAiAgentDefaultConfigOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['mode']: toString(queryParams.mode),
            ['language']: toString(queryParams.language),
            ['model']: toString(queryParams.model),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai_agent_default'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen(response.data),
            rawData: response.data,
        };
    }
    /**
     * Sends an AI request to supported Large Language Models (LLMs) and extracts metadata in form of key-value pairs.
     * In this request, both the prompt and the output can be freeform.
     * Metadata template setup before sending the request is not required.
     * @param {AiExtract} requestBody Request body of createAiExtract method
     * @param {CreateAiExtractOptionalsInput} optionalsInput
     * @returns {Promise<AiResponse>}
     */
    async createAiExtract(requestBody, optionalsInput = {}) {
        const optionals = new CreateAiExtractOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai/extract'),
            method: 'POST',
            headers: headersMap,
            data: serializeAiExtract(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeAiResponse(response.data),
            rawData: response.data,
        };
    }
    /**
     * Sends an AI request to supported Large Language Models (LLMs) and returns extracted metadata as a set of key-value pairs.
     * For this request, you either need a metadata template or a list of fields you want to extract.
     * Input is **either** a metadata template or a list of fields to ensure the structure.
     * To learn more about creating templates, see [Creating metadata templates in the Admin Console](https://support.box.com/hc/en-us/articles/360044194033-Customizing-Metadata-Templates)
     * or use the [metadata template API](g://metadata/templates/create).
     * @param {AiExtractStructured} requestBody Request body of createAiExtractStructured method
     * @param {CreateAiExtractStructuredOptionalsInput} optionalsInput
     * @returns {Promise<AiExtractStructuredResponse>}
     */
    async createAiExtractStructured(requestBody, optionalsInput = {}) {
        const optionals = new CreateAiExtractStructuredOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai/extract_structured'),
            method: 'POST',
            headers: headersMap,
            data: serializeAiExtractStructured(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeAiExtractStructuredResponse(response.data),
            rawData: response.data,
        };
    }
}
export function serializeGetAiAgentDefaultConfigQueryParamsModeField(val) {
    return val;
}
export function deserializeGetAiAgentDefaultConfigQueryParamsModeField(val) {
    if (val == 'ask') {
        return val;
    }
    if (val == 'text_gen') {
        return val;
    }
    if (val == 'extract') {
        return val;
    }
    if (val == 'extract_structured') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetAiAgentDefaultConfigQueryParamsModeField",
    });
}
//# sourceMappingURL=ai.generated.js.map