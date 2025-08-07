"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiStudioAgentLongTextToolResponse = serializeAiStudioAgentLongTextToolResponse;
exports.deserializeAiStudioAgentLongTextToolResponse = deserializeAiStudioAgentLongTextToolResponse;
const aiLlmEndpointParams_generated_js_1 = require("./aiLlmEndpointParams.generated.js");
const aiAgentLongTextTool_generated_js_1 = require("./aiAgentLongTextTool.generated.js");
const aiStudioAgentLongTextTool_generated_js_1 = require("./aiStudioAgentLongTextTool.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
const json_js_5 = require("../serialization/json.js");
function serializeAiStudioAgentLongTextToolResponse(val) {
    const base = (0, aiStudioAgentLongTextTool_generated_js_1.serializeAiStudioAgentLongTextTool)(val);
    if (!(0, json_js_5.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentLongTextToolResponse"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['warnings']: val.warnings == void 0
            ? val.warnings
            : val.warnings.map(function (item) {
                return item;
            }),
    });
}
function deserializeAiStudioAgentLongTextToolResponse(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentLongTextToolResponse"',
        });
    }
    if (!(val.warnings == void 0) && !(0, json_js_4.sdIsList)(val.warnings)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "warnings" of type "AiStudioAgentLongTextToolResponse"',
        });
    }
    const warnings = val.warnings == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.warnings)
            ? val.warnings.map(function (itm) {
                if (!(0, json_js_3.sdIsString)(itm)) {
                    throw new errors_js_1.BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentLongTextToolResponse"',
                    });
                }
                return itm;
            })
            : [];
    if (!(val.is_custom_instructions_included == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_custom_instructions_included)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_custom_instructions_included" of type "AiStudioAgentLongTextToolResponse"',
        });
    }
    const isCustomInstructionsIncluded = val.is_custom_instructions_included == void 0
        ? void 0
        : val.is_custom_instructions_included;
    const embeddings = val.embeddings == void 0
        ? void 0
        : (0, aiAgentLongTextTool_generated_js_1.deserializeAiAgentLongTextToolEmbeddingsField)(val.embeddings);
    if (!(val.system_message == void 0) && !(0, json_js_3.sdIsString)(val.system_message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "system_message" of type "AiStudioAgentLongTextToolResponse"',
        });
    }
    const systemMessage = val.system_message == void 0 ? void 0 : val.system_message;
    if (!(val.prompt_template == void 0) && !(0, json_js_3.sdIsString)(val.prompt_template)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prompt_template" of type "AiStudioAgentLongTextToolResponse"',
        });
    }
    const promptTemplate = val.prompt_template == void 0 ? void 0 : val.prompt_template;
    if (!(val.model == void 0) && !(0, json_js_3.sdIsString)(val.model)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "model" of type "AiStudioAgentLongTextToolResponse"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    if (!(val.num_tokens_for_completion == void 0) &&
        !(0, json_js_2.sdIsNumber)(val.num_tokens_for_completion)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "num_tokens_for_completion" of type "AiStudioAgentLongTextToolResponse"',
        });
    }
    const numTokensForCompletion = val.num_tokens_for_completion == void 0
        ? void 0
        : val.num_tokens_for_completion;
    const llmEndpointParams = val.llm_endpoint_params == void 0
        ? void 0
        : (0, aiLlmEndpointParams_generated_js_1.deserializeAiLlmEndpointParams)(val.llm_endpoint_params);
    return {
        warnings: warnings,
        isCustomInstructionsIncluded: isCustomInstructionsIncluded,
        embeddings: embeddings,
        systemMessage: systemMessage,
        promptTemplate: promptTemplate,
        model: model,
        numTokensForCompletion: numTokensForCompletion,
        llmEndpointParams: llmEndpointParams,
    };
}
//# sourceMappingURL=aiStudioAgentLongTextToolResponse.generated.js.map