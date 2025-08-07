import { deserializeAiLlmEndpointParams } from './aiLlmEndpointParams.generated.js';
import { serializeAiAgentBasicTextToolBase } from './aiAgentBasicTextToolBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiAgentBasicTextToolTextGen(val) {
    const base = serializeAiAgentBasicTextToolBase(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentBasicTextToolTextGen"',
        });
    }
    return {
        ...base,
        ...{
            ['system_message']: val.systemMessage,
            ['prompt_template']: val.promptTemplate,
        },
    };
}
export function deserializeAiAgentBasicTextToolTextGen(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentBasicTextToolTextGen"',
        });
    }
    if (!(val.system_message == void 0) && !sdIsString(val.system_message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "system_message" of type "AiAgentBasicTextToolTextGen"',
        });
    }
    const systemMessage = val.system_message == void 0 ? void 0 : val.system_message;
    if (!(val.prompt_template == void 0) && !sdIsString(val.prompt_template)) {
        throw new BoxSdkError({
            message: 'Expecting string for "prompt_template" of type "AiAgentBasicTextToolTextGen"',
        });
    }
    const promptTemplate = val.prompt_template == void 0 ? void 0 : val.prompt_template;
    if (!(val.model == void 0) && !sdIsString(val.model)) {
        throw new BoxSdkError({
            message: 'Expecting string for "model" of type "AiAgentBasicTextToolTextGen"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    if (!(val.num_tokens_for_completion == void 0) &&
        !sdIsNumber(val.num_tokens_for_completion)) {
        throw new BoxSdkError({
            message: 'Expecting number for "num_tokens_for_completion" of type "AiAgentBasicTextToolTextGen"',
        });
    }
    const numTokensForCompletion = val.num_tokens_for_completion == void 0
        ? void 0
        : val.num_tokens_for_completion;
    const llmEndpointParams = val.llm_endpoint_params == void 0
        ? void 0
        : deserializeAiLlmEndpointParams(val.llm_endpoint_params);
    return {
        systemMessage: systemMessage,
        promptTemplate: promptTemplate,
        model: model,
        numTokensForCompletion: numTokensForCompletion,
        llmEndpointParams: llmEndpointParams,
    };
}
//# sourceMappingURL=aiAgentBasicTextToolTextGen.generated.js.map