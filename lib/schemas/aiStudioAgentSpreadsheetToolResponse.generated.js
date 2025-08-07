"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiStudioAgentSpreadsheetToolResponse = serializeAiStudioAgentSpreadsheetToolResponse;
exports.deserializeAiStudioAgentSpreadsheetToolResponse = deserializeAiStudioAgentSpreadsheetToolResponse;
const aiLlmEndpointParams_generated_js_1 = require("./aiLlmEndpointParams.generated.js");
const aiStudioAgentSpreadsheetTool_generated_js_1 = require("./aiStudioAgentSpreadsheetTool.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeAiStudioAgentSpreadsheetToolResponse(val) {
    const base = (0, aiStudioAgentSpreadsheetTool_generated_js_1.serializeAiStudioAgentSpreadsheetTool)(val);
    if (!(0, json_js_4.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentSpreadsheetToolResponse"',
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
function deserializeAiStudioAgentSpreadsheetToolResponse(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentSpreadsheetToolResponse"',
        });
    }
    if (!(val.warnings == void 0) && !(0, json_js_3.sdIsList)(val.warnings)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "warnings" of type "AiStudioAgentSpreadsheetToolResponse"',
        });
    }
    const warnings = val.warnings == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.warnings)
            ? val.warnings.map(function (itm) {
                if (!(0, json_js_2.sdIsString)(itm)) {
                    throw new errors_js_1.BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentSpreadsheetToolResponse"',
                    });
                }
                return itm;
            })
            : [];
    if (!(val.model == void 0) && !(0, json_js_2.sdIsString)(val.model)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "model" of type "AiStudioAgentSpreadsheetToolResponse"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    if (!(val.num_tokens_for_completion == void 0) &&
        !(0, json_js_1.sdIsNumber)(val.num_tokens_for_completion)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "num_tokens_for_completion" of type "AiStudioAgentSpreadsheetToolResponse"',
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
        model: model,
        numTokensForCompletion: numTokensForCompletion,
        llmEndpointParams: llmEndpointParams,
    };
}
//# sourceMappingURL=aiStudioAgentSpreadsheetToolResponse.generated.js.map