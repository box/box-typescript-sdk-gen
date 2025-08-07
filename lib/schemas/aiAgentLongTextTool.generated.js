"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiAgentLongTextToolEmbeddingsStrategyField = serializeAiAgentLongTextToolEmbeddingsStrategyField;
exports.deserializeAiAgentLongTextToolEmbeddingsStrategyField = deserializeAiAgentLongTextToolEmbeddingsStrategyField;
exports.serializeAiAgentLongTextToolEmbeddingsField = serializeAiAgentLongTextToolEmbeddingsField;
exports.deserializeAiAgentLongTextToolEmbeddingsField = deserializeAiAgentLongTextToolEmbeddingsField;
exports.serializeAiAgentLongTextTool = serializeAiAgentLongTextTool;
exports.deserializeAiAgentLongTextTool = deserializeAiAgentLongTextTool;
const aiLlmEndpointParams_generated_js_1 = require("./aiLlmEndpointParams.generated.js");
const aiAgentBasicTextTool_generated_js_1 = require("./aiAgentBasicTextTool.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeAiAgentLongTextToolEmbeddingsStrategyField(val) {
    return { ['id']: val.id, ['num_tokens_per_chunk']: val.numTokensPerChunk };
}
function deserializeAiAgentLongTextToolEmbeddingsStrategyField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentLongTextToolEmbeddingsStrategyField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AiAgentLongTextToolEmbeddingsStrategyField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.num_tokens_per_chunk == void 0) &&
        !(0, json_js_1.sdIsNumber)(val.num_tokens_per_chunk)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "num_tokens_per_chunk" of type "AiAgentLongTextToolEmbeddingsStrategyField"',
        });
    }
    const numTokensPerChunk = val.num_tokens_per_chunk == void 0 ? void 0 : val.num_tokens_per_chunk;
    return {
        id: id,
        numTokensPerChunk: numTokensPerChunk,
    };
}
function serializeAiAgentLongTextToolEmbeddingsField(val) {
    return {
        ['model']: val.model,
        ['strategy']: val.strategy == void 0
            ? val.strategy
            : serializeAiAgentLongTextToolEmbeddingsStrategyField(val.strategy),
    };
}
function deserializeAiAgentLongTextToolEmbeddingsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentLongTextToolEmbeddingsField"',
        });
    }
    if (!(val.model == void 0) && !(0, json_js_2.sdIsString)(val.model)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "model" of type "AiAgentLongTextToolEmbeddingsField"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    const strategy = val.strategy == void 0
        ? void 0
        : deserializeAiAgentLongTextToolEmbeddingsStrategyField(val.strategy);
    return {
        model: model,
        strategy: strategy,
    };
}
function serializeAiAgentLongTextTool(val) {
    const base = (0, aiAgentBasicTextTool_generated_js_1.serializeAiAgentBasicTextTool)(val);
    if (!(0, json_js_3.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentLongTextTool"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['embeddings']: val.embeddings == void 0
            ? val.embeddings
            : serializeAiAgentLongTextToolEmbeddingsField(val.embeddings),
    });
}
function deserializeAiAgentLongTextTool(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentLongTextTool"',
        });
    }
    const embeddings = val.embeddings == void 0
        ? void 0
        : deserializeAiAgentLongTextToolEmbeddingsField(val.embeddings);
    if (!(val.system_message == void 0) && !(0, json_js_2.sdIsString)(val.system_message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "system_message" of type "AiAgentLongTextTool"',
        });
    }
    const systemMessage = val.system_message == void 0 ? void 0 : val.system_message;
    if (!(val.prompt_template == void 0) && !(0, json_js_2.sdIsString)(val.prompt_template)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prompt_template" of type "AiAgentLongTextTool"',
        });
    }
    const promptTemplate = val.prompt_template == void 0 ? void 0 : val.prompt_template;
    if (!(val.model == void 0) && !(0, json_js_2.sdIsString)(val.model)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "model" of type "AiAgentLongTextTool"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    if (!(val.num_tokens_for_completion == void 0) &&
        !(0, json_js_1.sdIsNumber)(val.num_tokens_for_completion)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "num_tokens_for_completion" of type "AiAgentLongTextTool"',
        });
    }
    const numTokensForCompletion = val.num_tokens_for_completion == void 0
        ? void 0
        : val.num_tokens_for_completion;
    const llmEndpointParams = val.llm_endpoint_params == void 0
        ? void 0
        : (0, aiLlmEndpointParams_generated_js_1.deserializeAiLlmEndpointParams)(val.llm_endpoint_params);
    return {
        embeddings: embeddings,
        systemMessage: systemMessage,
        promptTemplate: promptTemplate,
        model: model,
        numTokensForCompletion: numTokensForCompletion,
        llmEndpointParams: llmEndpointParams,
    };
}
//# sourceMappingURL=aiAgentLongTextTool.generated.js.map