import { AiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { AiAgentBasicTextTool } from './aiAgentBasicTextTool.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAgentExtractStructuredTypeField = 'ai_agent_extract_structured';
export declare class AiAgentExtractStructured {
    /**
     * The type of AI agent to be used for extraction. */
    readonly type: AiAgentExtractStructuredTypeField;
    readonly longText?: AiAgentLongTextTool;
    readonly basicText?: AiAgentBasicTextTool;
    readonly basicImage?: AiAgentBasicTextTool;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AiAgentExtractStructured, 'type'> & Partial<Pick<AiAgentExtractStructured, 'type'>>);
}
export interface AiAgentExtractStructuredInput {
    /**
     * The type of AI agent to be used for extraction. */
    readonly type?: AiAgentExtractStructuredTypeField;
    readonly longText?: AiAgentLongTextTool;
    readonly basicText?: AiAgentBasicTextTool;
    readonly basicImage?: AiAgentBasicTextTool;
    readonly rawData?: SerializedData;
}
export declare function serializeAiAgentExtractStructuredTypeField(val: AiAgentExtractStructuredTypeField): SerializedData;
export declare function deserializeAiAgentExtractStructuredTypeField(val: SerializedData): AiAgentExtractStructuredTypeField;
export declare function serializeAiAgentExtractStructured(val: AiAgentExtractStructured): SerializedData;
export declare function deserializeAiAgentExtractStructured(val: SerializedData): AiAgentExtractStructured;
export declare function serializeAiAgentExtractStructuredInput(val: AiAgentExtractStructuredInput): SerializedData;
export declare function deserializeAiAgentExtractStructuredInput(val: SerializedData): AiAgentExtractStructuredInput;
