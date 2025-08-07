import { deserializeAiLlmEndpointParams } from './aiLlmEndpointParams.generated.js';
import { serializeAiAgentBasicTextTool } from './aiAgentBasicTextTool.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiStudioAgentBasicTextTool(val) {
    const base = serializeAiAgentBasicTextTool(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentBasicTextTool"',
        });
    }
    return {
        ...base,
        ...{
            ['is_custom_instructions_included']: val.isCustomInstructionsIncluded,
        },
    };
}
export function deserializeAiStudioAgentBasicTextTool(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentBasicTextTool"',
        });
    }
    if (!(val.is_custom_instructions_included == void 0) &&
        !sdIsBoolean(val.is_custom_instructions_included)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_custom_instructions_included" of type "AiStudioAgentBasicTextTool"',
        });
    }
    const isCustomInstructionsIncluded = val.is_custom_instructions_included == void 0
        ? void 0
        : val.is_custom_instructions_included;
    if (!(val.system_message == void 0) && !sdIsString(val.system_message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "system_message" of type "AiStudioAgentBasicTextTool"',
        });
    }
    const systemMessage = val.system_message == void 0 ? void 0 : val.system_message;
    if (!(val.prompt_template == void 0) && !sdIsString(val.prompt_template)) {
        throw new BoxSdkError({
            message: 'Expecting string for "prompt_template" of type "AiStudioAgentBasicTextTool"',
        });
    }
    const promptTemplate = val.prompt_template == void 0 ? void 0 : val.prompt_template;
    if (!(val.model == void 0) && !sdIsString(val.model)) {
        throw new BoxSdkError({
            message: 'Expecting string for "model" of type "AiStudioAgentBasicTextTool"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    if (!(val.num_tokens_for_completion == void 0) &&
        !sdIsNumber(val.num_tokens_for_completion)) {
        throw new BoxSdkError({
            message: 'Expecting number for "num_tokens_for_completion" of type "AiStudioAgentBasicTextTool"',
        });
    }
    const numTokensForCompletion = val.num_tokens_for_completion == void 0
        ? void 0
        : val.num_tokens_for_completion;
    const llmEndpointParams = val.llm_endpoint_params == void 0
        ? void 0
        : deserializeAiLlmEndpointParams(val.llm_endpoint_params);
    return {
        isCustomInstructionsIncluded: isCustomInstructionsIncluded,
        systemMessage: systemMessage,
        promptTemplate: promptTemplate,
        model: model,
        numTokensForCompletion: numTokensForCompletion,
        llmEndpointParams: llmEndpointParams,
    };
}
//# sourceMappingURL=aiStudioAgentBasicTextTool.generated.js.map