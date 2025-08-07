import { AiStudioAgentBasicTextTool } from './aiStudioAgentBasicTextTool.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiStudioAgentBasicTextToolResponse = AiStudioAgentBasicTextTool & {
    /**
     * Warnings concerning tool. */
    readonly warnings?: readonly string[];
};
export declare function serializeAiStudioAgentBasicTextToolResponse(val: AiStudioAgentBasicTextToolResponse): SerializedData;
export declare function deserializeAiStudioAgentBasicTextToolResponse(val: SerializedData): AiStudioAgentBasicTextToolResponse;
//# sourceMappingURL=aiStudioAgentBasicTextToolResponse.generated.d.ts.map