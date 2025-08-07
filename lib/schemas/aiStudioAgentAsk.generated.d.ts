import { AiStudioAgentLongTextTool } from './aiStudioAgentLongTextTool.generated.js';
import { AiStudioAgentBasicTextTool } from './aiStudioAgentBasicTextTool.generated.js';
import { AiStudioAgentSpreadsheetTool } from './aiStudioAgentSpreadsheetTool.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiStudioAgentAskTypeField = 'ai_agent_ask';
export declare class AiStudioAgentAsk {
    /**
     * The type of AI agent used to handle queries. */
    readonly type: AiStudioAgentAskTypeField;
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
    readonly longText?: AiStudioAgentLongTextTool;
    readonly basicText?: AiStudioAgentBasicTextTool;
    readonly basicImage?: AiStudioAgentBasicTextTool;
    readonly spreadsheet?: AiStudioAgentSpreadsheetTool;
    readonly longTextMulti?: AiStudioAgentLongTextTool;
    readonly basicTextMulti?: AiStudioAgentBasicTextTool;
    readonly basicImageMulti?: AiStudioAgentBasicTextTool;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AiStudioAgentAsk, 'type'> & Partial<Pick<AiStudioAgentAsk, 'type'>>);
}
export interface AiStudioAgentAskInput {
    /**
     * The type of AI agent used to handle queries. */
    readonly type?: AiStudioAgentAskTypeField;
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
    readonly longText?: AiStudioAgentLongTextTool;
    readonly basicText?: AiStudioAgentBasicTextTool;
    readonly basicImage?: AiStudioAgentBasicTextTool;
    readonly spreadsheet?: AiStudioAgentSpreadsheetTool;
    readonly longTextMulti?: AiStudioAgentLongTextTool;
    readonly basicTextMulti?: AiStudioAgentBasicTextTool;
    readonly basicImageMulti?: AiStudioAgentBasicTextTool;
    readonly rawData?: SerializedData;
}
export declare function serializeAiStudioAgentAskTypeField(val: AiStudioAgentAskTypeField): SerializedData;
export declare function deserializeAiStudioAgentAskTypeField(val: SerializedData): AiStudioAgentAskTypeField;
export declare function serializeAiStudioAgentAsk(val: AiStudioAgentAsk): SerializedData;
export declare function deserializeAiStudioAgentAsk(val: SerializedData): AiStudioAgentAsk;
export declare function serializeAiStudioAgentAskInput(val: AiStudioAgentAskInput): SerializedData;
export declare function deserializeAiStudioAgentAskInput(val: SerializedData): AiStudioAgentAskInput;
//# sourceMappingURL=aiStudioAgentAsk.generated.d.ts.map