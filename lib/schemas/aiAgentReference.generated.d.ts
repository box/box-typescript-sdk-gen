import { SerializedData } from '../serialization/json.js';
export type AiAgentReferenceTypeField = 'ai_agent_id';
export declare class AiAgentReference {
    /**
     * The type of AI agent used to handle queries. */
    readonly type: AiAgentReferenceTypeField;
    /**
     * The ID of an Agent. */
    readonly id?: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AiAgentReference, 'type'> & Partial<Pick<AiAgentReference, 'type'>>);
}
export interface AiAgentReferenceInput {
    /**
     * The type of AI agent used to handle queries. */
    readonly type?: AiAgentReferenceTypeField;
    /**
     * The ID of an Agent. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeAiAgentReferenceTypeField(val: AiAgentReferenceTypeField): SerializedData;
export declare function deserializeAiAgentReferenceTypeField(val: SerializedData): AiAgentReferenceTypeField;
export declare function serializeAiAgentReference(val: AiAgentReference): SerializedData;
export declare function deserializeAiAgentReference(val: SerializedData): AiAgentReference;
export declare function serializeAiAgentReferenceInput(val: AiAgentReferenceInput): SerializedData;
export declare function deserializeAiAgentReferenceInput(val: SerializedData): AiAgentReferenceInput;
//# sourceMappingURL=aiAgentReference.generated.d.ts.map