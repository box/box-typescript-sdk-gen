import { AiAgentBasicGenTool } from './aiAgentBasicGenTool.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAgentTextGenTypeField = 'ai_agent_text_gen';
export declare class AiAgentTextGen {
    /**
     * The type of AI agent used for generating text. */
    readonly type: AiAgentTextGenTypeField;
    readonly basicGen?: AiAgentBasicGenTool;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AiAgentTextGen, 'type'> & Partial<Pick<AiAgentTextGen, 'type'>>);
}
export interface AiAgentTextGenInput {
    /**
     * The type of AI agent used for generating text. */
    readonly type?: AiAgentTextGenTypeField;
    readonly basicGen?: AiAgentBasicGenTool;
    readonly rawData?: SerializedData;
}
export declare function serializeAiAgentTextGenTypeField(val: AiAgentTextGenTypeField): SerializedData;
export declare function deserializeAiAgentTextGenTypeField(val: SerializedData): AiAgentTextGenTypeField;
export declare function serializeAiAgentTextGen(val: AiAgentTextGen): SerializedData;
export declare function deserializeAiAgentTextGen(val: SerializedData): AiAgentTextGen;
export declare function serializeAiAgentTextGenInput(val: AiAgentTextGenInput): SerializedData;
export declare function deserializeAiAgentTextGenInput(val: SerializedData): AiAgentTextGenInput;
//# sourceMappingURL=aiAgentTextGen.generated.d.ts.map