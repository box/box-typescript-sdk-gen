import { AiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiStudioAgentLongTextTool = AiAgentLongTextTool & {
    /**
     * True if system message contains custom instructions placeholder, false otherwise. */
    readonly isCustomInstructionsIncluded?: boolean;
};
export declare function serializeAiStudioAgentLongTextTool(val: AiStudioAgentLongTextTool): SerializedData;
export declare function deserializeAiStudioAgentLongTextTool(val: SerializedData): AiStudioAgentLongTextTool;
