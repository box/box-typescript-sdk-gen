import { AiStudioAgentBasicGenToolResponse } from './aiStudioAgentBasicGenToolResponse.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiStudioAgentTextGenResponseTypeField = 'ai_agent_text_gen';
export declare class AiStudioAgentTextGenResponse {
    /**
     * The type of AI agent used for generating text. */
    readonly type: AiStudioAgentTextGenResponseTypeField;
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and `disabled`. */
    readonly accessState: string;
    /**
     * The description of the AI agent. */
    readonly description: string;
    /**
     * Custom instructions for the AI agent. */
    readonly customInstructions?: string | null;
    /**
     * Suggested questions for the AI agent. If null, suggested question will be generated. If empty, no suggested questions will be displayed. */
    readonly suggestedQuestions?: readonly string[];
    readonly basicGen?: AiStudioAgentBasicGenToolResponse;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AiStudioAgentTextGenResponse, 'type'> & Partial<Pick<AiStudioAgentTextGenResponse, 'type'>>);
}
export interface AiStudioAgentTextGenResponseInput {
    /**
     * The type of AI agent used for generating text. */
    readonly type?: AiStudioAgentTextGenResponseTypeField;
    /**
     * The state of the AI Agent capability. Possible values are: `enabled` and `disabled`. */
    readonly accessState: string;
    /**
     * The description of the AI agent. */
    readonly description: string;
    /**
     * Custom instructions for the AI agent. */
    readonly customInstructions?: string | null;
    /**
     * Suggested questions for the AI agent. If null, suggested question will be generated. If empty, no suggested questions will be displayed. */
    readonly suggestedQuestions?: readonly string[];
    readonly basicGen?: AiStudioAgentBasicGenToolResponse;
    readonly rawData?: SerializedData;
}
export declare function serializeAiStudioAgentTextGenResponseTypeField(val: AiStudioAgentTextGenResponseTypeField): SerializedData;
export declare function deserializeAiStudioAgentTextGenResponseTypeField(val: SerializedData): AiStudioAgentTextGenResponseTypeField;
export declare function serializeAiStudioAgentTextGenResponse(val: AiStudioAgentTextGenResponse): SerializedData;
export declare function deserializeAiStudioAgentTextGenResponse(val: SerializedData): AiStudioAgentTextGenResponse;
export declare function serializeAiStudioAgentTextGenResponseInput(val: AiStudioAgentTextGenResponseInput): SerializedData;
export declare function deserializeAiStudioAgentTextGenResponseInput(val: SerializedData): AiStudioAgentTextGenResponseInput;
