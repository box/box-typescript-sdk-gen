import { deserializeAiLlmEndpointParams } from './aiLlmEndpointParams.generated.js';
import { serializeAiStudioAgentBasicTextTool } from './aiStudioAgentBasicTextTool.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiStudioAgentBasicTextToolResponse(val) {
    const base = serializeAiStudioAgentBasicTextTool(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentBasicTextToolResponse"',
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
export function deserializeAiStudioAgentBasicTextToolResponse(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentBasicTextToolResponse"',
        });
    }
    if (!(val.warnings == void 0) && !sdIsList(val.warnings)) {
        throw new BoxSdkError({
            message: 'Expecting array for "warnings" of type "AiStudioAgentBasicTextToolResponse"',
        });
    }
    const warnings = val.warnings == void 0
        ? void 0
        : sdIsList(val.warnings)
            ? val.warnings.map(function (itm) {
                if (!sdIsString(itm)) {
                    throw new BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentBasicTextToolResponse"',
                    });
                }
                return itm;
            })
            : [];
    if (!(val.is_custom_instructions_included == void 0) &&
        !sdIsBoolean(val.is_custom_instructions_included)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_custom_instructions_included" of type "AiStudioAgentBasicTextToolResponse"',
        });
    }
    const isCustomInstructionsIncluded = val.is_custom_instructions_included == void 0
        ? void 0
        : val.is_custom_instructions_included;
    if (!(val.system_message == void 0) && !sdIsString(val.system_message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "system_message" of type "AiStudioAgentBasicTextToolResponse"',
        });
    }
    const systemMessage = val.system_message == void 0 ? void 0 : val.system_message;
    if (!(val.prompt_template == void 0) && !sdIsString(val.prompt_template)) {
        throw new BoxSdkError({
            message: 'Expecting string for "prompt_template" of type "AiStudioAgentBasicTextToolResponse"',
        });
    }
    const promptTemplate = val.prompt_template == void 0 ? void 0 : val.prompt_template;
    if (!(val.model == void 0) && !sdIsString(val.model)) {
        throw new BoxSdkError({
            message: 'Expecting string for "model" of type "AiStudioAgentBasicTextToolResponse"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    if (!(val.num_tokens_for_completion == void 0) &&
        !sdIsNumber(val.num_tokens_for_completion)) {
        throw new BoxSdkError({
            message: 'Expecting number for "num_tokens_for_completion" of type "AiStudioAgentBasicTextToolResponse"',
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
        systemMessage: systemMessage,
        promptTemplate: promptTemplate,
        model: model,
        numTokensForCompletion: numTokensForCompletion,
        llmEndpointParams: llmEndpointParams,
    };
}
//# sourceMappingURL=aiStudioAgentBasicTextToolResponse.generated.js.map