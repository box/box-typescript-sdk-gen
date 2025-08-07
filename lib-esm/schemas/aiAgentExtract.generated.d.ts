import { AiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { AiAgentBasicTextTool } from './aiAgentBasicTextTool.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAgentExtractTypeField = 'ai_agent_extract';
export declare class AiAgentExtract {
    /**
     * The type of AI agent to be used for extraction. */
    readonly type: AiAgentExtractTypeField;
    readonly longText?: AiAgentLongTextTool;
    readonly basicText?: AiAgentBasicTextTool;
    readonly basicImage?: AiAgentBasicTextTool;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AiAgentExtract, 'type'> & Partial<Pick<AiAgentExtract, 'type'>>);
}
export interface AiAgentExtractInput {
    /**
     * The type of AI agent to be used for extraction. */
    readonly type?: AiAgentExtractTypeField;
    readonly longText?: AiAgentLongTextTool;
    readonly basicText?: AiAgentBasicTextTool;
    readonly basicImage?: AiAgentBasicTextTool;
    readonly rawData?: SerializedData;
}
export declare function serializeAiAgentExtractTypeField(val: AiAgentExtractTypeField): SerializedData;
export declare function deserializeAiAgentExtractTypeField(val: SerializedData): AiAgentExtractTypeField;
export declare function serializeAiAgentExtract(val: AiAgentExtract): SerializedData;
export declare function deserializeAiAgentExtract(val: SerializedData): AiAgentExtract;
export declare function serializeAiAgentExtractInput(val: AiAgentExtractInput): SerializedData;
export declare function deserializeAiAgentExtractInput(val: SerializedData): AiAgentExtractInput;
