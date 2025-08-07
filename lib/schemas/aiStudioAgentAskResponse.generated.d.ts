import { AiStudioAgentLongTextToolResponse } from './aiStudioAgentLongTextToolResponse.generated.js';
import { AiStudioAgentBasicTextToolResponse } from './aiStudioAgentBasicTextToolResponse.generated.js';
import { AiStudioAgentSpreadsheetToolResponse } from './aiStudioAgentSpreadsheetToolResponse.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiStudioAgentAskResponseTypeField = 'ai_agent_ask';
export declare class AiStudioAgentAskResponse {
    /**
     * The type of AI agent used to ask questions. */
    readonly type: AiStudioAgentAskResponseTypeField;
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
    readonly longText?: AiStudioAgentLongTextToolResponse;
    readonly basicText?: AiStudioAgentBasicTextToolResponse;
    readonly basicImage?: AiStudioAgentBasicTextToolResponse;
    readonly spreadsheet?: AiStudioAgentSpreadsheetToolResponse;
    readonly longTextMulti?: AiStudioAgentLongTextToolResponse;
    readonly basicTextMulti?: AiStudioAgentBasicTextToolResponse;
    readonly basicImageMulti?: AiStudioAgentBasicTextToolResponse;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AiStudioAgentAskResponse, 'type'> & Partial<Pick<AiStudioAgentAskResponse, 'type'>>);
}
export interface AiStudioAgentAskResponseInput {
    /**
     * The type of AI agent used to ask questions. */
    readonly type?: AiStudioAgentAskResponseTypeField;
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
    readonly longText?: AiStudioAgentLongTextToolResponse;
    readonly basicText?: AiStudioAgentBasicTextToolResponse;
    readonly basicImage?: AiStudioAgentBasicTextToolResponse;
    readonly spreadsheet?: AiStudioAgentSpreadsheetToolResponse;
    readonly longTextMulti?: AiStudioAgentLongTextToolResponse;
    readonly basicTextMulti?: AiStudioAgentBasicTextToolResponse;
    readonly basicImageMulti?: AiStudioAgentBasicTextToolResponse;
    readonly rawData?: SerializedData;
}
export declare function serializeAiStudioAgentAskResponseTypeField(val: AiStudioAgentAskResponseTypeField): SerializedData;
export declare function deserializeAiStudioAgentAskResponseTypeField(val: SerializedData): AiStudioAgentAskResponseTypeField;
export declare function serializeAiStudioAgentAskResponse(val: AiStudioAgentAskResponse): SerializedData;
export declare function deserializeAiStudioAgentAskResponse(val: SerializedData): AiStudioAgentAskResponse;
export declare function serializeAiStudioAgentAskResponseInput(val: AiStudioAgentAskResponseInput): SerializedData;
export declare function deserializeAiStudioAgentAskResponseInput(val: SerializedData): AiStudioAgentAskResponseInput;
//# sourceMappingURL=aiStudioAgentAskResponse.generated.d.ts.map