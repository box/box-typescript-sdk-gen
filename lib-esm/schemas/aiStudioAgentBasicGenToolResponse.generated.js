import { deserializeAiLlmEndpointParams } from './aiLlmEndpointParams.generated.js';
import { deserializeAiAgentLongTextToolTextGenEmbeddingsField } from './aiAgentLongTextToolTextGen.generated.js';
import { serializeAiStudioAgentBasicGenTool } from './aiStudioAgentBasicGenTool.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiStudioAgentBasicGenToolResponse(val) {
    const base = serializeAiStudioAgentBasicGenTool(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentBasicGenToolResponse"',
        });
    }
    return {
        ...base,
        ...{
            ['warnings']: val.warnings == void 0
                ? val.warnings
                : val.warnings.map(function (item) {
                    return item;
                }),
        },
    };
}
export function deserializeAiStudioAgentBasicGenToolResponse(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentBasicGenToolResponse"',
        });
    }
    if (!(val.warnings == void 0) && !sdIsList(val.warnings)) {
        throw new BoxSdkError({
            message: 'Expecting array for "warnings" of type "AiStudioAgentBasicGenToolResponse"',
        });
    }
    const warnings = val.warnings == void 0
        ? void 0
        : sdIsList(val.warnings)
            ? val.warnings.map(function (itm) {
                if (!sdIsString(itm)) {
                    throw new BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentBasicGenToolResponse"',
                    });
                }
                return itm;
            })
            : [];
    if (!(val.is_custom_instructions_included == void 0) &&
        !sdIsBoolean(val.is_custom_instructions_included)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_custom_instructions_included" of type "AiStudioAgentBasicGenToolResponse"',
        });
    }
    const isCustomInstructionsIncluded = val.is_custom_instructions_included == void 0
        ? void 0
        : val.is_custom_instructions_included;
    if (!(val.content_template == void 0) && !sdIsString(val.content_template)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_template" of type "AiStudioAgentBasicGenToolResponse"',
        });
    }
    const contentTemplate = val.content_template == void 0 ? void 0 : val.content_template;
    const embeddings = val.embeddings == void 0
        ? void 0
        : deserializeAiAgentLongTextToolTextGenEmbeddingsField(val.embeddings);
    if (!(val.system_message == void 0) && !sdIsString(val.system_message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "system_message" of type "AiStudioAgentBasicGenToolResponse"',
        });
    }
    const systemMessage = val.system_message == void 0 ? void 0 : val.system_message;
    if (!(val.prompt_template == void 0) && !sdIsString(val.prompt_template)) {
        throw new BoxSdkError({
            message: 'Expecting string for "prompt_template" of type "AiStudioAgentBasicGenToolResponse"',
        });
    }
    const promptTemplate = val.prompt_template == void 0 ? void 0 : val.prompt_template;
    if (!(val.model == void 0) && !sdIsString(val.model)) {
        throw new BoxSdkError({
            message: 'Expecting string for "model" of type "AiStudioAgentBasicGenToolResponse"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    if (!(val.num_tokens_for_completion == void 0) &&
        !sdIsNumber(val.num_tokens_for_completion)) {
        throw new BoxSdkError({
            message: 'Expecting number for "num_tokens_for_completion" of type "AiStudioAgentBasicGenToolResponse"',
        });
    }
    const numTokensForCompletion = val.num_tokens_for_completion == void 0
        ? void 0
        : val.num_tokens_for_completion;
    const llmEndpointParams = val.llm_endpoint_params == void 0
        ? void 0
        : deserializeAiLlmEndpointParams(val.llm_endpoint_params);
    return {
        warnings: warnings,
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
//# sourceMappingURL=aiStudioAgentBasicGenToolResponse.generated.js.map