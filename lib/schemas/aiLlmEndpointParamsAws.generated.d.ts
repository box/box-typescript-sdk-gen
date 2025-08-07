import { SerializedData } from '../serialization/json.js';
export type AiLlmEndpointParamsAwsTypeField = 'aws_params';
export declare class AiLlmEndpointParamsAws {
    /**
     * The type of the AI LLM endpoint params object for AWS.
     * This parameter is **required**. */
    readonly type: AiLlmEndpointParamsAwsTypeField;
    /**
     * What sampling temperature to use, between 0 and 1. Higher values like 0.8 will make the output more random,
     * while lower values like 0.2 will make it more focused and deterministic.
     * We generally recommend altering this or `top_p` but not both. */
    readonly temperature?: number | null;
    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results
     * of the tokens with `top_p` probability mass. So 0.1 means only the tokens comprising the top 10% probability
     * mass are considered. We generally recommend altering this or temperature but not both. */
    readonly topP?: number | null;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AiLlmEndpointParamsAws, 'type'> & Partial<Pick<AiLlmEndpointParamsAws, 'type'>>);
}
export interface AiLlmEndpointParamsAwsInput {
    /**
     * The type of the AI LLM endpoint params object for AWS.
     * This parameter is **required**. */
    readonly type?: AiLlmEndpointParamsAwsTypeField;
    /**
     * What sampling temperature to use, between 0 and 1. Higher values like 0.8 will make the output more random,
     * while lower values like 0.2 will make it more focused and deterministic.
     * We generally recommend altering this or `top_p` but not both. */
    readonly temperature?: number | null;
    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results
     * of the tokens with `top_p` probability mass. So 0.1 means only the tokens comprising the top 10% probability
     * mass are considered. We generally recommend altering this or temperature but not both. */
    readonly topP?: number | null;
    readonly rawData?: SerializedData;
}
export declare function serializeAiLlmEndpointParamsAwsTypeField(val: AiLlmEndpointParamsAwsTypeField): SerializedData;
export declare function deserializeAiLlmEndpointParamsAwsTypeField(val: SerializedData): AiLlmEndpointParamsAwsTypeField;
export declare function serializeAiLlmEndpointParamsAws(val: AiLlmEndpointParamsAws): SerializedData;
export declare function deserializeAiLlmEndpointParamsAws(val: SerializedData): AiLlmEndpointParamsAws;
export declare function serializeAiLlmEndpointParamsAwsInput(val: AiLlmEndpointParamsAwsInput): SerializedData;
export declare function deserializeAiLlmEndpointParamsAwsInput(val: SerializedData): AiLlmEndpointParamsAwsInput;
//# sourceMappingURL=aiLlmEndpointParamsAws.generated.d.ts.map