import { AiStudioAgentBasicGenTool } from './aiStudioAgentBasicGenTool.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiStudioAgentTextGenTypeField = 'ai_agent_text_gen';
export declare class AiStudioAgentTextGen {
    /**
     * The type of AI agent used for generating text. */
    readonly type: AiStudioAgentTextGenTypeField;
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
    readonly basicGen?: AiStudioAgentBasicGenTool;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AiStudioAgentTextGen, 'type'> & Partial<Pick<AiStudioAgentTextGen, 'type'>>);
}
export interface AiStudioAgentTextGenInput {
    /**
     * The type of AI agent used for generating text. */
    readonly type?: AiStudioAgentTextGenTypeField;
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
    readonly basicGen?: AiStudioAgentBasicGenTool;
    readonly rawData?: SerializedData;
}
export declare function serializeAiStudioAgentTextGenTypeField(val: AiStudioAgentTextGenTypeField): SerializedData;
export declare function deserializeAiStudioAgentTextGenTypeField(val: SerializedData): AiStudioAgentTextGenTypeField;
export declare function serializeAiStudioAgentTextGen(val: AiStudioAgentTextGen): SerializedData;
export declare function deserializeAiStudioAgentTextGen(val: SerializedData): AiStudioAgentTextGen;
export declare function serializeAiStudioAgentTextGenInput(val: AiStudioAgentTextGenInput): SerializedData;
export declare function deserializeAiStudioAgentTextGenInput(val: SerializedData): AiStudioAgentTextGenInput;
//# sourceMappingURL=aiStudioAgentTextGen.generated.d.ts.map