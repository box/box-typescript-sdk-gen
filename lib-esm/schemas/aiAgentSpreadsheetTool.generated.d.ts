import { AiLlmEndpointParams } from './aiLlmEndpointParams.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface AiAgentSpreadsheetTool {
    /**
     * The model used for the AI agent for spreadsheets. For specific model values, see the [available models list](g://box-ai/supported-models). */
    readonly model?: string;
    /**
     * The number of tokens for completion. */
    readonly numTokensForCompletion?: number;
    readonly llmEndpointParams?: AiLlmEndpointParams;
    readonly rawData?: SerializedData;
}
export declare function serializeAiAgentSpreadsheetTool(val: AiAgentSpreadsheetTool): SerializedData;
export declare function deserializeAiAgentSpreadsheetTool(val: SerializedData): AiAgentSpreadsheetTool;
