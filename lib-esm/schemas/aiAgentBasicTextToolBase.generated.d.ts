import { AiLlmEndpointParams } from './aiLlmEndpointParams.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface AiAgentBasicTextToolBase {
    /**
     * The model used for the AI agent for basic text. For specific model values, see the [available models list](g://box-ai/supported-models). */
    readonly model?: string;
    /**
     * The number of tokens for completion. */
    readonly numTokensForCompletion?: number;
    readonly llmEndpointParams?: AiLlmEndpointParams;
    readonly rawData?: SerializedData;
}
export declare function serializeAiAgentBasicTextToolBase(val: AiAgentBasicTextToolBase): SerializedData;
export declare function deserializeAiAgentBasicTextToolBase(val: SerializedData): AiAgentBasicTextToolBase;
