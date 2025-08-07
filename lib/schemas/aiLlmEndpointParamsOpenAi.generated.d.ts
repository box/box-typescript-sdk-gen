import { SerializedData } from '../serialization/json.js';
export type AiLlmEndpointParamsOpenAiTypeField = 'openai_params';
export declare class AiLlmEndpointParamsOpenAi {
    /**
     * The type of the AI LLM endpoint params object for OpenAI.
     * This parameter is **required**. */
    readonly type: AiLlmEndpointParamsOpenAiTypeField;
    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random,
     * while lower values like 0.2 will make it more focused and deterministic.
     * We generally recommend altering this or `top_p` but not both. */
    readonly temperature?: number | null;
    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results
     * of the tokens with `top_p` probability mass. So 0.1 means only the tokens comprising the top 10% probability
     * mass are considered. We generally recommend altering this or temperature but not both. */
    readonly topP?: number | null;
    /**
     * A number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the
     * text so far, decreasing the model's likelihood to repeat the same line verbatim. */
    readonly frequencyPenalty?: number | null;
    /**
     * A number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics. */
    readonly presencePenalty?: number | null;
    /**
     * Up to 4 sequences where the API will stop generating further tokens. */
    readonly stop?: string | null;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AiLlmEndpointParamsOpenAi, 'type'> & Partial<Pick<AiLlmEndpointParamsOpenAi, 'type'>>);
}
export interface AiLlmEndpointParamsOpenAiInput {
    /**
     * The type of the AI LLM endpoint params object for OpenAI.
     * This parameter is **required**. */
    readonly type?: AiLlmEndpointParamsOpenAiTypeField;
    /**
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random,
     * while lower values like 0.2 will make it more focused and deterministic.
     * We generally recommend altering this or `top_p` but not both. */
    readonly temperature?: number | null;
    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results
     * of the tokens with `top_p` probability mass. So 0.1 means only the tokens comprising the top 10% probability
     * mass are considered. We generally recommend altering this or temperature but not both. */
    readonly topP?: number | null;
    /**
     * A number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the
     * text so far, decreasing the model's likelihood to repeat the same line verbatim. */
    readonly frequencyPenalty?: number | null;
    /**
     * A number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics. */
    readonly presencePenalty?: number | null;
    /**
     * Up to 4 sequences where the API will stop generating further tokens. */
    readonly stop?: string | null;
    readonly rawData?: SerializedData;
}
export declare function serializeAiLlmEndpointParamsOpenAiTypeField(val: AiLlmEndpointParamsOpenAiTypeField): SerializedData;
export declare function deserializeAiLlmEndpointParamsOpenAiTypeField(val: SerializedData): AiLlmEndpointParamsOpenAiTypeField;
export declare function serializeAiLlmEndpointParamsOpenAi(val: AiLlmEndpointParamsOpenAi): SerializedData;
export declare function deserializeAiLlmEndpointParamsOpenAi(val: SerializedData): AiLlmEndpointParamsOpenAi;
export declare function serializeAiLlmEndpointParamsOpenAiInput(val: AiLlmEndpointParamsOpenAiInput): SerializedData;
export declare function deserializeAiLlmEndpointParamsOpenAiInput(val: SerializedData): AiLlmEndpointParamsOpenAiInput;
//# sourceMappingURL=aiLlmEndpointParamsOpenAi.generated.d.ts.map