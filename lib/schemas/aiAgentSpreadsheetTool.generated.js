"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiAgentSpreadsheetTool = serializeAiAgentSpreadsheetTool;
exports.deserializeAiAgentSpreadsheetTool = deserializeAiAgentSpreadsheetTool;
const aiLlmEndpointParams_generated_js_1 = require("./aiLlmEndpointParams.generated.js");
const aiLlmEndpointParams_generated_js_2 = require("./aiLlmEndpointParams.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeAiAgentSpreadsheetTool(val) {
    return {
        ['model']: val.model,
        ['num_tokens_for_completion']: val.numTokensForCompletion,
        ['llm_endpoint_params']: val.llmEndpointParams == void 0
            ? val.llmEndpointParams
            : (0, aiLlmEndpointParams_generated_js_1.serializeAiLlmEndpointParams)(val.llmEndpointParams),
    };
}
function deserializeAiAgentSpreadsheetTool(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentSpreadsheetTool"',
        });
    }
    if (!(val.model == void 0) && !(0, json_js_2.sdIsString)(val.model)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "model" of type "AiAgentSpreadsheetTool"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    if (!(val.num_tokens_for_completion == void 0) &&
        !(0, json_js_1.sdIsNumber)(val.num_tokens_for_completion)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "num_tokens_for_completion" of type "AiAgentSpreadsheetTool"',
        });
    }
    const numTokensForCompletion = val.num_tokens_for_completion == void 0
        ? void 0
        : val.num_tokens_for_completion;
    const llmEndpointParams = val.llm_endpoint_params == void 0
        ? void 0
        : (0, aiLlmEndpointParams_generated_js_2.deserializeAiLlmEndpointParams)(val.llm_endpoint_params);
    return {
        model: model,
        numTokensForCompletion: numTokensForCompletion,
        llmEndpointParams: llmEndpointParams,
    };
}
//# sourceMappingURL=aiAgentSpreadsheetTool.generated.js.map