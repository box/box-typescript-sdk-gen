import { AiStudioAgentLongTextTool } from './aiStudioAgentLongTextTool.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiStudioAgentLongTextToolResponse = AiStudioAgentLongTextTool & {
    /**
     * Warnings concerning tool. */
    readonly warnings?: readonly string[];
};
export declare function serializeAiStudioAgentLongTextToolResponse(val: AiStudioAgentLongTextToolResponse): SerializedData;
export declare function deserializeAiStudioAgentLongTextToolResponse(val: SerializedData): AiStudioAgentLongTextToolResponse;
//# sourceMappingURL=aiStudioAgentLongTextToolResponse.generated.d.ts.map