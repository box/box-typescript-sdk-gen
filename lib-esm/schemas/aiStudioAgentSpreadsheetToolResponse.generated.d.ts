import { AiStudioAgentSpreadsheetTool } from './aiStudioAgentSpreadsheetTool.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiStudioAgentSpreadsheetToolResponse = AiStudioAgentSpreadsheetTool & {
    /**
     * Warnings concerning tool. */
    readonly warnings?: readonly string[];
};
export declare function serializeAiStudioAgentSpreadsheetToolResponse(val: AiStudioAgentSpreadsheetToolResponse): SerializedData;
export declare function deserializeAiStudioAgentSpreadsheetToolResponse(val: SerializedData): AiStudioAgentSpreadsheetToolResponse;
