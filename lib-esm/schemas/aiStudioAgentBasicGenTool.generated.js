import { deserializeAiLlmEndpointParams } from './aiLlmEndpointParams.generated.js';
import { deserializeAiAgentLongTextToolTextGenEmbeddingsField } from './aiAgentLongTextToolTextGen.generated.js';
import { serializeAiAgentBasicGenTool } from './aiAgentBasicGenTool.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiStudioAgentBasicGenTool(val) {
    const base = serializeAiAgentBasicGenTool(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentBasicGenTool"',
        });
    }
    return {
        ...base,
        ...{
            ['is_custom_instructions_included']: val.isCustomInstructionsIncluded,
        },
    };
}
export function deserializeAiStudioAgentBasicGenTool(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentBasicGenTool"',
        });
    }
    if (!(val.is_custom_instructions_included == void 0) &&
        !sdIsBoolean(val.is_custom_instructions_included)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_custom_instructions_included" of type "AiStudioAgentBasicGenTool"',
        });
    }
    const isCustomInstructionsIncluded = val.is_custom_instructions_included == void 0
        ? void 0
        : val.is_custom_instructions_included;
    if (!(val.content_template == void 0) && !sdIsString(val.content_template)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_template" of type "AiStudioAgentBasicGenTool"',
        });
    }
    const contentTemplate = val.content_template == void 0 ? void 0 : val.content_template;
    const embeddings = val.embeddings == void 0
        ? void 0
        : deserializeAiAgentLongTextToolTextGenEmbeddingsField(val.embeddings);
    if (!(val.system_message == void 0) && !sdIsString(val.system_message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "system_message" of type "AiStudioAgentBasicGenTool"',
        });
    }
    const systemMessage = val.system_message == void 0 ? void 0 : val.system_message;
    if (!(val.prompt_template == void 0) && !sdIsString(val.prompt_template)) {
        throw new BoxSdkError({
            message: 'Expecting string for "prompt_template" of type "AiStudioAgentBasicGenTool"',
        });
    }
    const promptTemplate = val.prompt_template == void 0 ? void 0 : val.prompt_template;
    if (!(val.model == void 0) && !sdIsString(val.model)) {
        throw new BoxSdkError({
            message: 'Expecting string for "model" of type "AiStudioAgentBasicGenTool"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    if (!(val.num_tokens_for_completion == void 0) &&
        !sdIsNumber(val.num_tokens_for_completion)) {
        throw new BoxSdkError({
            message: 'Expecting number for "num_tokens_for_completion" of type "AiStudioAgentBasicGenTool"',
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
        contentTemplate: contentTemplate,
        embeddings: embeddings,
        systemMessage: systemMessage,
        promptTemplate: promptTemplate,
        model: model,
        numTokensForCompletion: numTokensForCompletion,
        llmEndpointParams: llmEndpointParams,
    };
}
//# sourceMappingURL=aiStudioAgentBasicGenTool.generated.js.map