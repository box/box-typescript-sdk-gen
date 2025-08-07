import { AiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { AiAgentBasicTextTool } from './aiAgentBasicTextTool.generated.js';
import { AiAgentSpreadsheetTool } from './aiAgentSpreadsheetTool.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAgentAskTypeField = 'ai_agent_ask';
export declare class AiAgentAsk {
    /**
     * The type of AI agent used to handle queries. */
    readonly type: AiAgentAskTypeField;
    readonly longText?: AiAgentLongTextTool;
    readonly basicText?: AiAgentBasicTextTool;
    readonly spreadsheet?: AiAgentSpreadsheetTool;
    readonly longTextMulti?: AiAgentLongTextTool;
    readonly basicTextMulti?: AiAgentBasicTextTool;
    readonly basicImage?: AiAgentBasicTextTool;
    readonly basicImageMulti?: AiAgentBasicTextTool;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AiAgentAsk, 'type'> & Partial<Pick<AiAgentAsk, 'type'>>);
}
export interface AiAgentAskInput {
    /**
     * The type of AI agent used to handle queries. */
    readonly type?: AiAgentAskTypeField;
    readonly longText?: AiAgentLongTextTool;
    readonly basicText?: AiAgentBasicTextTool;
    readonly spreadsheet?: AiAgentSpreadsheetTool;
    readonly longTextMulti?: AiAgentLongTextTool;
    readonly basicTextMulti?: AiAgentBasicTextTool;
    readonly basicImage?: AiAgentBasicTextTool;
    readonly basicImageMulti?: AiAgentBasicTextTool;
    readonly rawData?: SerializedData;
}
export declare function serializeAiAgentAskTypeField(val: AiAgentAskTypeField): SerializedData;
export declare function deserializeAiAgentAskTypeField(val: SerializedData): AiAgentAskTypeField;
export declare function serializeAiAgentAsk(val: AiAgentAsk): SerializedData;
export declare function deserializeAiAgentAsk(val: SerializedData): AiAgentAsk;
export declare function serializeAiAgentAskInput(val: AiAgentAskInput): SerializedData;
export declare function deserializeAiAgentAskInput(val: SerializedData): AiAgentAskInput;
