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
exports.AiManager = exports.CreateAiExtractStructuredHeaders = exports.CreateAiExtractHeaders = exports.GetAiAgentDefaultConfigHeaders = exports.CreateAiTextGenHeaders = exports.CreateAiAskHeaders = exports.CreateAiExtractStructuredOptionals = exports.CreateAiExtractOptionals = exports.GetAiAgentDefaultConfigOptionals = exports.CreateAiTextGenOptionals = exports.CreateAiAskOptionals = void 0;
exports.serializeGetAiAgentDefaultConfigQueryParamsModeField = serializeGetAiAgentDefaultConfigQueryParamsModeField;
exports.deserializeGetAiAgentDefaultConfigQueryParamsModeField = deserializeGetAiAgentDefaultConfigQueryParamsModeField;
const aiResponseFull_generated_js_1 = require("../schemas/aiResponseFull.generated.js");
const aiAsk_generated_js_1 = require("../schemas/aiAsk.generated.js");
const aiResponse_generated_js_1 = require("../schemas/aiResponse.generated.js");
const aiTextGen_generated_js_1 = require("../schemas/aiTextGen.generated.js");
const aiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen_generated_js_1 = require("../schemas/aiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen.generated.js");
const aiExtract_generated_js_1 = require("../schemas/aiExtract.generated.js");
const aiExtractStructuredResponse_generated_js_1 = require("../schemas/aiExtractStructuredResponse.generated.js");
const aiExtractStructured_generated_js_1 = require("../schemas/aiExtractStructured.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
class CreateAiAskOptionals {
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
exports.CreateAiAskOptionals = CreateAiAskOptionals;
class CreateAiTextGenOptionals {
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
exports.CreateAiTextGenOptionals = CreateAiTextGenOptionals;
class GetAiAgentDefaultConfigOptionals {
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
exports.GetAiAgentDefaultConfigOptionals = GetAiAgentDefaultConfigOptionals;
class CreateAiExtractOptionals {
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
exports.CreateAiExtractOptionals = CreateAiExtractOptionals;
class CreateAiExtractStructuredOptionals {
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
exports.CreateAiExtractStructuredOptionals = CreateAiExtractStructuredOptionals;
class CreateAiAskHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateAiAskHeaders = CreateAiAskHeaders;
class CreateAiTextGenHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateAiTextGenHeaders = CreateAiTextGenHeaders;
class GetAiAgentDefaultConfigHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetAiAgentDefaultConfigHeaders = GetAiAgentDefaultConfigHeaders;
class CreateAiExtractHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateAiExtractHeaders = CreateAiExtractHeaders;
class CreateAiExtractStructuredHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateAiExtractStructuredHeaders = CreateAiExtractStructuredHeaders;
class AiManager {
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
     * Sends an AI request to supported LLMs and returns an answer specifically focused on the user's question given the provided context.
     * @param {AiAsk} requestBody Request body of createAiAsk method
     * @param {CreateAiAskOptionalsInput} optionalsInput
     * @returns {Promise<undefined | AiResponseFull>}
     */
    createAiAsk(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateAiAskOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai/ask'),
                method: 'POST',
                headers: headersMap,
                data: (0, aiAsk_generated_js_1.serializeAiAsk)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            if ((0, utils_js_2.toString)(response.status) == '204') {
                return void 0;
            }
            return Object.assign(Object.assign({}, (0, aiResponseFull_generated_js_1.deserializeAiResponseFull)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Sends an AI request to supported Large Language Models (LLMs) and returns generated text based on the provided prompt.
     * @param {AiTextGen} requestBody Request body of createAiTextGen method
     * @param {CreateAiTextGenOptionalsInput} optionalsInput
     * @returns {Promise<AiResponse>}
     */
    createAiTextGen(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateAiTextGenOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai/text_gen'),
                method: 'POST',
                headers: headersMap,
                data: (0, aiTextGen_generated_js_1.serializeAiTextGen)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, aiResponse_generated_js_1.deserializeAiResponse)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Get the AI agent default config.
     * @param {GetAiAgentDefaultConfigQueryParams} queryParams Query parameters of getAiAgentDefaultConfig method
     * @param {GetAiAgentDefaultConfigOptionalsInput} optionalsInput
     * @returns {Promise<AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen>}
     */
    getAiAgentDefaultConfig(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new GetAiAgentDefaultConfigOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['mode']: (0, utils_js_2.toString)(queryParams.mode),
                ['language']: (0, utils_js_2.toString)(queryParams.language),
                ['model']: (0, utils_js_2.toString)(queryParams.model),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai_agent_default'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, aiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen_generated_js_1.deserializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Sends an AI request to supported Large Language Models (LLMs) and extracts metadata in form of key-value pairs.
     * In this request, both the prompt and the output can be freeform.
     * Metadata template setup before sending the request is not required.
     * @param {AiExtract} requestBody Request body of createAiExtract method
     * @param {CreateAiExtractOptionalsInput} optionalsInput
     * @returns {Promise<AiResponse>}
     */
    createAiExtract(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateAiExtractOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai/extract'),
                method: 'POST',
                headers: headersMap,
                data: (0, aiExtract_generated_js_1.serializeAiExtract)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, aiResponse_generated_js_1.deserializeAiResponse)(response.data)), { rawData: response.data });
        });
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
    createAiExtractStructured(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateAiExtractStructuredOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/ai/extract_structured'),
                method: 'POST',
                headers: headersMap,
                data: (0, aiExtractStructured_generated_js_1.serializeAiExtractStructured)(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, aiExtractStructuredResponse_generated_js_1.deserializeAiExtractStructuredResponse)(response.data)), { rawData: response.data });
        });
    }
}
exports.AiManager = AiManager;
function serializeGetAiAgentDefaultConfigQueryParamsModeField(val) {
    return val;
}
function deserializeGetAiAgentDefaultConfigQueryParamsModeField(val) {
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
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetAiAgentDefaultConfigQueryParamsModeField",
    });
}
//# sourceMappingURL=ai.generated.js.map