import { AiAgentBasicTextTool } from './aiAgentBasicTextTool.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiStudioAgentBasicTextTool = AiAgentBasicTextTool & {
    /**
     * True if system message contains custom instructions placeholder, false otherwise. */
    readonly isCustomInstructionsIncluded?: boolean;
};
export declare function serializeAiStudioAgentBasicTextTool(val: AiStudioAgentBasicTextTool): SerializedData;
export declare function deserializeAiStudioAgentBasicTextTool(val: SerializedData): AiStudioAgentBasicTextTool;
//# sourceMappingURL=aiStudioAgentBasicTextTool.generated.d.ts.map