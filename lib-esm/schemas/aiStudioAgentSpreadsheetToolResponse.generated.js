import { deserializeAiLlmEndpointParams } from './aiLlmEndpointParams.generated.js';
import { serializeAiStudioAgentSpreadsheetTool } from './aiStudioAgentSpreadsheetTool.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiStudioAgentSpreadsheetToolResponse(val) {
    const base = serializeAiStudioAgentSpreadsheetTool(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentSpreadsheetToolResponse"',
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
export function deserializeAiStudioAgentSpreadsheetToolResponse(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiStudioAgentSpreadsheetToolResponse"',
        });
    }
    if (!(val.warnings == void 0) && !sdIsList(val.warnings)) {
        throw new BoxSdkError({
            message: 'Expecting array for "warnings" of type "AiStudioAgentSpreadsheetToolResponse"',
        });
    }
    const warnings = val.warnings == void 0
        ? void 0
        : sdIsList(val.warnings)
            ? val.warnings.map(function (itm) {
                if (!sdIsString(itm)) {
                    throw new BoxSdkError({
                        message: 'Expecting string for "AiStudioAgentSpreadsheetToolResponse"',
                    });
                }
                return itm;
            })
            : [];
    if (!(val.model == void 0) && !sdIsString(val.model)) {
        throw new BoxSdkError({
            message: 'Expecting string for "model" of type "AiStudioAgentSpreadsheetToolResponse"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    if (!(val.num_tokens_for_completion == void 0) &&
        !sdIsNumber(val.num_tokens_for_completion)) {
        throw new BoxSdkError({
            message: 'Expecting number for "num_tokens_for_completion" of type "AiStudioAgentSpreadsheetToolResponse"',
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
        model: model,
        numTokensForCompletion: numTokensForCompletion,
        llmEndpointParams: llmEndpointParams,
    };
}
//# sourceMappingURL=aiStudioAgentSpreadsheetToolResponse.generated.js.map