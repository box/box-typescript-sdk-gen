import { AiStudioAgentLongTextTool } from './aiStudioAgentLongTextTool.generated.js';
import { AiStudioAgentBasicTextTool } from './aiStudioAgentBasicTextTool.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiStudioAgentExtractTypeField = 'ai_agent_extract';
export declare class AiStudioAgentExtract {
    /**
     * The type of AI agent to be used for metadata extraction. */
    readonly type: AiStudioAgentExtractTypeField;
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and `disabled`. */
    readonly accessState: string;
    /**
     * The description of the AI agent. */
    readonly description: string;
    /**
     * Custom instructions for the AI agent. */
    readonly customInstructions?: string | null;
    readonly longText?: AiStudioAgentLongTextTool;
    readonly basicText?: AiStudioAgentBasicTextTool;
    readonly basicImage?: AiStudioAgentBasicTextTool;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AiStudioAgentExtract, 'type'> & Partial<Pick<AiStudioAgentExtract, 'type'>>);
}
export interface AiStudioAgentExtractInput {
    /**
     * The type of AI agent to be used for metadata extraction. */
    readonly type?: AiStudioAgentExtractTypeField;
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and `disabled`. */
    readonly accessState: string;
    /**
     * The description of the AI agent. */
    readonly description: string;
    /**
     * Custom instructions for the AI agent. */
    readonly customInstructions?: string | null;
    readonly longText?: AiStudioAgentLongTextTool;
    readonly basicText?: AiStudioAgentBasicTextTool;
    readonly basicImage?: AiStudioAgentBasicTextTool;
    readonly rawData?: SerializedData;
}
export declare function serializeAiStudioAgentExtractTypeField(val: AiStudioAgentExtractTypeField): SerializedData;
export declare function deserializeAiStudioAgentExtractTypeField(val: SerializedData): AiStudioAgentExtractTypeField;
export declare function serializeAiStudioAgentExtract(val: AiStudioAgentExtract): SerializedData;
export declare function deserializeAiStudioAgentExtract(val: SerializedData): AiStudioAgentExtract;
export declare function serializeAiStudioAgentExtractInput(val: AiStudioAgentExtractInput): SerializedData;
export declare function deserializeAiStudioAgentExtractInput(val: SerializedData): AiStudioAgentExtractInput;
//# sourceMappingURL=aiStudioAgentExtract.generated.d.ts.map