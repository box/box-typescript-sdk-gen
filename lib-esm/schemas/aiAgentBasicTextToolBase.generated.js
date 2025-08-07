import { serializeAiLlmEndpointParams } from './aiLlmEndpointParams.generated.js';
import { deserializeAiLlmEndpointParams } from './aiLlmEndpointParams.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiAgentBasicTextToolBase(val) {
    return {
        ['model']: val.model,
        ['num_tokens_for_completion']: val.numTokensForCompletion,
        ['llm_endpoint_params']: val.llmEndpointParams == void 0
            ? val.llmEndpointParams
            : serializeAiLlmEndpointParams(val.llmEndpointParams),
    };
}
export function deserializeAiAgentBasicTextToolBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentBasicTextToolBase"',
        });
    }
    if (!(val.model == void 0) && !sdIsString(val.model)) {
        throw new BoxSdkError({
            message: 'Expecting string for "model" of type "AiAgentBasicTextToolBase"',
        });
    }
    const model = val.model == void 0 ? void 0 : val.model;
    if (!(val.num_tokens_for_completion == void 0) &&
        !sdIsNumber(val.num_tokens_for_completion)) {
        throw new BoxSdkError({
            message: 'Expecting number for "num_tokens_for_completion" of type "AiAgentBasicTextToolBase"',
        });
    }
    const numTokensForCompletion = val.num_tokens_for_completion == void 0
        ? void 0
        : val.num_tokens_for_completion;
    const llmEndpointParams = val.llm_endpoint_params == void 0
        ? void 0
        : deserializeAiLlmEndpointParams(val.llm_endpoint_params);
    return {
        model: model,
        numTokensForCompletion: numTokensForCompletion,
        llmEndpointParams: llmEndpointParams,
    };
}
//# sourceMappingURL=aiAgentBasicTextToolBase.generated.js.map