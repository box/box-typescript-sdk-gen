import { SerializedData } from '../serialization/json.js';
export type AiLlmEndpointParamsGoogleTypeField = 'google_params';
export declare class AiLlmEndpointParamsGoogle {
    /**
     * The type of the AI LLM endpoint params object for Google.
     * This parameter is **required**. */
    readonly type: AiLlmEndpointParamsGoogleTypeField;
    /**
     * The temperature is used for sampling during response generation, which occurs when `top-P` and `top-K` are applied. Temperature controls the degree of randomness in the token selection. */
    readonly temperature?: number | null;
    /**
     * `Top-P` changes how the model selects tokens for output. Tokens are selected from the most (see `top-K`) to least probable until the sum of their probabilities equals the `top-P` value. */
    readonly topP?: number | null;
    /**
     * `Top-K` changes how the model selects tokens for output. A low `top-K` means the next selected token is
     * the most probable among all tokens in the model's vocabulary (also called greedy decoding),
     * while a high `top-K` means that the next token is selected from among the three most probable tokens by using temperature. */
    readonly topK?: number | null;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AiLlmEndpointParamsGoogle, 'type'> & Partial<Pick<AiLlmEndpointParamsGoogle, 'type'>>);
}
export interface AiLlmEndpointParamsGoogleInput {
    /**
     * The type of the AI LLM endpoint params object for Google.
     * This parameter is **required**. */
    readonly type?: AiLlmEndpointParamsGoogleTypeField;
    /**
     * The temperature is used for sampling during response generation, which occurs when `top-P` and `top-K` are applied. Temperature controls the degree of randomness in the token selection. */
    readonly temperature?: number | null;
    /**
     * `Top-P` changes how the model selects tokens for output. Tokens are selected from the most (see `top-K`) to least probable until the sum of their probabilities equals the `top-P` value. */
    readonly topP?: number | null;
    /**
     * `Top-K` changes how the model selects tokens for output. A low `top-K` means the next selected token is
     * the most probable among all tokens in the model's vocabulary (also called greedy decoding),
     * while a high `top-K` means that the next token is selected from among the three most probable tokens by using temperature. */
    readonly topK?: number | null;
    readonly rawData?: SerializedData;
}
export declare function serializeAiLlmEndpointParamsGoogleTypeField(val: AiLlmEndpointParamsGoogleTypeField): SerializedData;
export declare function deserializeAiLlmEndpointParamsGoogleTypeField(val: SerializedData): AiLlmEndpointParamsGoogleTypeField;
export declare function serializeAiLlmEndpointParamsGoogle(val: AiLlmEndpointParamsGoogle): SerializedData;
export declare function deserializeAiLlmEndpointParamsGoogle(val: SerializedData): AiLlmEndpointParamsGoogle;
export declare function serializeAiLlmEndpointParamsGoogleInput(val: AiLlmEndpointParamsGoogleInput): SerializedData;
export declare function deserializeAiLlmEndpointParamsGoogleInput(val: SerializedData): AiLlmEndpointParamsGoogleInput;
//# sourceMappingURL=aiLlmEndpointParamsGoogle.generated.d.ts.map