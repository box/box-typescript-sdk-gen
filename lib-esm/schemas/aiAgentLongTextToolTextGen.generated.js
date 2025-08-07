import { deserializeAiLlmEndpointParams } from './aiLlmEndpointParams.generated.js';
import { serializeAiAgentBasicTextToolTextGen } from './aiAgentBasicTextToolTextGen.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiAgentLongTextToolTextGenEmbeddingsStrategyField(val) {
    return { ['id']: val.id, ['num_tokens_per_chunk']: val.numTokensPerChunk };
}
export function deserializeAiAgentLongTextToolTextGenEmbeddingsStrategyField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentLongTextToolTextGenEmbeddingsStrategyField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "AiAgentLongTextToolTextGenEmbeddingsStrategyField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.num_tokens_per_chunk == void 0) &&
        !sdIsNumber(val.num_tokens_per_chunk)) {
        throw new BoxSdkError({
            message: 'Expecting number for "num_tokens_per_chunk" of type "AiAgentLongTextToolTextGenEmbeddingsStrategyField"',
        });
    }
    const numTokensPerChunk = val.num_tokens_per_chunk == void 0 ? void 0 : val.num_tokens_per_chunk;
    return {
        id: id,
        numTokensPerChunk: numTokensPerChunk,
    };
}
export function serializeAiAgentLongTextToolTextGenEmbeddingsField(val) {
    return {
        ['model']: val.model,
        ['strategy']: val.strategy == void 0
            ? val.strategy
            : serializeAiAgentLongTextToolTextGenEmbeddingsStrategyField(val.strategy),
    };
}
export function deserializeAiAgentLongTextToolTextGenEmbeddingsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentLongTextToolTextGenEmbeddingsField"',
        });
    }
    if (!(val.model == void 0) && !sdIsString(val.model)) {
        throw new BoxSdkError({
            message: 'Expecting string for "model" of type "AiAgentLongTextToolTextGenEmbeddingsField"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    const strategy = val.strategy == void 0
        ? void 0
        : deserializeAiAgentLongTextToolTextGenEmbeddingsStrategyField(val.strategy);
    return {
        model: model,
        strategy: strategy,
    };
}
export function serializeAiAgentLongTextToolTextGen(val) {
    const base = serializeAiAgentBasicTextToolTextGen(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentLongTextToolTextGen"',
        });
    }
    return {
        ...base,
        ...{
            ['embeddings']: val.embeddings == void 0
                ? val.embeddings
                : serializeAiAgentLongTextToolTextGenEmbeddingsField(val.embeddings),
        },
    };
}
export function deserializeAiAgentLongTextToolTextGen(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentLongTextToolTextGen"',
        });
    }
    const embeddings = val.embeddings == void 0
        ? void 0
        : deserializeAiAgentLongTextToolTextGenEmbeddingsField(val.embeddings);
    if (!(val.system_message == void 0) && !sdIsString(val.system_message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "system_message" of type "AiAgentLongTextToolTextGen"',
        });
    }
    const systemMessage = val.system_message == void 0 ? void 0 : val.system_message;
    if (!(val.prompt_template == void 0) && !sdIsString(val.prompt_template)) {
        throw new BoxSdkError({
            message: 'Expecting string for "prompt_template" of type "AiAgentLongTextToolTextGen"',
        });
    }
    const promptTemplate = val.prompt_template == void 0 ? void 0 : val.prompt_template;
    if (!(val.model == void 0) && !sdIsString(val.model)) {
        throw new BoxSdkError({
            message: 'Expecting string for "model" of type "AiAgentLongTextToolTextGen"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    if (!(val.num_tokens_for_completion == void 0) &&
        !sdIsNumber(val.num_tokens_for_completion)) {
        throw new BoxSdkError({
            message: 'Expecting number for "num_tokens_for_completion" of type "AiAgentLongTextToolTextGen"',
        });
    }
    const numTokensForCompletion = val.num_tokens_for_completion == void 0
        ? void 0
        : val.num_tokens_for_completion;
    const llmEndpointParams = val.llm_endpoint_params == void 0
        ? void 0
        : deserializeAiLlmEndpointParams(val.llm_endpoint_params);
    return {
        embeddings: embeddings,
        systemMessage: systemMessage,
        promptTemplate: promptTemplate,
        model: model,
        numTokensForCompletion: numTokensForCompletion,
        llmEndpointParams: llmEndpointParams,
    };
}
//# sourceMappingURL=aiAgentLongTextToolTextGen.generated.js.map