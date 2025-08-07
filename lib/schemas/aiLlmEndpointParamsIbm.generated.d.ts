import { SerializedData } from '../serialization/json.js';
export type AiLlmEndpointParamsIbmTypeField = 'ibm_params';
export declare class AiLlmEndpointParamsIbm {
    /**
     * The type of the AI LLM endpoint params object for IBM.
     * This parameter is **required**. */
    readonly type: AiLlmEndpointParamsIbmTypeField;
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
    /**
     * `Top-K` changes how the model selects tokens for output. A low `top-K` means the next selected token is
     * the most probable among all tokens in the model's vocabulary (also called greedy decoding),
     * while a high `top-K` means that the next token is selected from among the three most probable tokens by using temperature. */
    readonly topK?: number | null;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AiLlmEndpointParamsIbm, 'type'> & Partial<Pick<AiLlmEndpointParamsIbm, 'type'>>);
}
export interface AiLlmEndpointParamsIbmInput {
    /**
     * The type of the AI LLM endpoint params object for IBM.
     * This parameter is **required**. */
    readonly type?: AiLlmEndpointParamsIbmTypeField;
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
    /**
     * `Top-K` changes how the model selects tokens for output. A low `top-K` means the next selected token is
     * the most probable among all tokens in the model's vocabulary (also called greedy decoding),
     * while a high `top-K` means that the next token is selected from among the three most probable tokens by using temperature. */
    readonly topK?: number | null;
    readonly rawData?: SerializedData;
}
export declare function serializeAiLlmEndpointParamsIbmTypeField(val: AiLlmEndpointParamsIbmTypeField): SerializedData;
export declare function deserializeAiLlmEndpointParamsIbmTypeField(val: SerializedData): AiLlmEndpointParamsIbmTypeField;
export declare function serializeAiLlmEndpointParamsIbm(val: AiLlmEndpointParamsIbm): SerializedData;
export declare function deserializeAiLlmEndpointParamsIbm(val: SerializedData): AiLlmEndpointParamsIbm;
export declare function serializeAiLlmEndpointParamsIbmInput(val: AiLlmEndpointParamsIbmInput): SerializedData;
export declare function deserializeAiLlmEndpointParamsIbmInput(val: SerializedData): AiLlmEndpointParamsIbmInput;
//# sourceMappingURL=aiLlmEndpointParamsIbm.generated.d.ts.map