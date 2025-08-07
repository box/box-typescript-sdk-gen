"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiStudioAgentBasicGenTool = serializeAiStudioAgentBasicGenTool;
exports.deserializeAiStudioAgentBasicGenTool = deserializeAiStudioAgentBasicGenTool;
const aiLlmEndpointParams_generated_js_1 = require("./aiLlmEndpointParams.generated.js");
const aiAgentLongTextToolTextGen_generated_js_1 = require("./aiAgentLongTextToolTextGen.generated.js");
const aiAgentBasicGenTool_generated_js_1 = require("./aiAgentBasicGenTool.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeAiStudioAgentBasicGenTool(val) {
    const base = (0, aiAgentBasicGenTool_generated_js_1.serializeAiAgentBasicGenTool)(val);
    if (!(0, json_js_4.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentBasicGenTool"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['is_custom_instructions_included']: val.isCustomInstructionsIncluded,
    });
}
function deserializeAiStudioAgentBasicGenTool(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentBasicGenTool"',
        });
    }
    if (!(val.is_custom_instructions_included == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_custom_instructions_included)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_custom_instructions_included" of type "AiStudioAgentBasicGenTool"',
        });
    }
    const isCustomInstructionsIncluded = val.is_custom_instructions_included == void 0
        ? void 0
        : val.is_custom_instructions_included;
    if (!(val.content_template == void 0) && !(0, json_js_3.sdIsString)(val.content_template)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content_template" of type "AiStudioAgentBasicGenTool"',
        });
    }
    const contentTemplate = val.content_template == void 0 ? void 0 : val.content_template;
    const embeddings = val.embeddings == void 0
        ? void 0
        : (0, aiAgentLongTextToolTextGen_generated_js_1.deserializeAiAgentLongTextToolTextGenEmbeddingsField)(val.embeddings);
    if (!(val.system_message == void 0) && !(0, json_js_3.sdIsString)(val.system_message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "system_message" of type "AiStudioAgentBasicGenTool"',
        });
    }
    const systemMessage = val.system_message == void 0 ? void 0 : val.system_message;
    if (!(val.prompt_template == void 0) && !(0, json_js_3.sdIsString)(val.prompt_template)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prompt_template" of type "AiStudioAgentBasicGenTool"',
        });
    }
    const promptTemplate = val.prompt_template == void 0 ? void 0 : val.prompt_template;
    if (!(val.model == void 0) && !(0, json_js_3.sdIsString)(val.model)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "model" of type "AiStudioAgentBasicGenTool"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    if (!(val.num_tokens_for_completion == void 0) &&
        !(0, json_js_2.sdIsNumber)(val.num_tokens_for_completion)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "num_tokens_for_completion" of type "AiStudioAgentBasicGenTool"',
        });
    }
    const numTokensForCompletion = val.num_tokens_for_completion == void 0
        ? void 0
        : val.num_tokens_for_completion;
    const llmEndpointParams = val.llm_endpoint_params == void 0
        ? void 0
        : (0, aiLlmEndpointParams_generated_js_1.deserializeAiLlmEndpointParams)(val.llm_endpoint_params);
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