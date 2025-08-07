import { AiStudioAgentLongTextToolResponse } from './aiStudioAgentLongTextToolResponse.generated.js';
import { AiStudioAgentBasicTextToolResponse } from './aiStudioAgentBasicTextToolResponse.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiStudioAgentExtractResponseTypeField = 'ai_agent_extract';
export declare class AiStudioAgentExtractResponse {
    /**
     * The type of AI agent to be used for metadata extraction. */
    readonly type: AiStudioAgentExtractResponseTypeField;
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and `disabled`. */
    readonly accessState: string;
    /**
     * The description of the AI agent. */
    readonly description: string;
    /**
     * Custom instructions for the AI agent. */
    readonly customInstructions?: string | null;
    readonly longText?: AiStudioAgentLongTextToolResponse;
    readonly basicText?: AiStudioAgentBasicTextToolResponse;
    readonly basicImage?: AiStudioAgentBasicTextToolResponse;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AiStudioAgentExtractResponse, 'type'> & Partial<Pick<AiStudioAgentExtractResponse, 'type'>>);
}
export interface AiStudioAgentExtractResponseInput {
    /**
     * The type of AI agent to be used for metadata extraction. */
    readonly type?: AiStudioAgentExtractResponseTypeField;
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and `disabled`. */
    readonly accessState: string;
    /**
     * The description of the AI agent. */
    readonly description: string;
    /**
     * Custom instructions for the AI agent. */
    readonly customInstructions?: string | null;
    readonly longText?: AiStudioAgentLongTextToolResponse;
    readonly basicText?: AiStudioAgentBasicTextToolResponse;
    readonly basicImage?: AiStudioAgentBasicTextToolResponse;
    readonly rawData?: SerializedData;
}
export declare function serializeAiStudioAgentExtractResponseTypeField(val: AiStudioAgentExtractResponseTypeField): SerializedData;
export declare function deserializeAiStudioAgentExtractResponseTypeField(val: SerializedData): AiStudioAgentExtractResponseTypeField;
export declare function serializeAiStudioAgentExtractResponse(val: AiStudioAgentExtractResponse): SerializedData;
export declare function deserializeAiStudioAgentExtractResponse(val: SerializedData): AiStudioAgentExtractResponse;
export declare function serializeAiStudioAgentExtractResponseInput(val: AiStudioAgentExtractResponseInput): SerializedData;
export declare function deserializeAiStudioAgentExtractResponseInput(val: SerializedData): AiStudioAgentExtractResponseInput;
