import { AiAgentBasicGenTool } from './aiAgentBasicGenTool.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiStudioAgentBasicGenTool = AiAgentBasicGenTool & {
    /**
     * True if system message contains custom instructions placeholder, false otherwise. */
    readonly isCustomInstructionsIncluded?: boolean;
};
export declare function serializeAiStudioAgentBasicGenTool(val: AiStudioAgentBasicGenTool): SerializedData;
export declare function deserializeAiStudioAgentBasicGenTool(val: SerializedData): AiStudioAgentBasicGenTool;
