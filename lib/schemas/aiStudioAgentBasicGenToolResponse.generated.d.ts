import { AiStudioAgentBasicGenTool } from './aiStudioAgentBasicGenTool.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiStudioAgentBasicGenToolResponse = AiStudioAgentBasicGenTool & {
    /**
     * Warnings concerning tool. */
    readonly warnings?: readonly string[];
};
export declare function serializeAiStudioAgentBasicGenToolResponse(val: AiStudioAgentBasicGenToolResponse): SerializedData;
export declare function deserializeAiStudioAgentBasicGenToolResponse(val: SerializedData): AiStudioAgentBasicGenToolResponse;
//# sourceMappingURL=aiStudioAgentBasicGenToolResponse.generated.d.ts.map