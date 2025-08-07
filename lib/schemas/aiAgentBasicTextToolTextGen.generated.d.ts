import { AiAgentBasicTextToolBase } from './aiAgentBasicTextToolBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAgentBasicTextToolTextGen = AiAgentBasicTextToolBase & {
    /**
     * System messages aim at helping the LLM understand its role and what it is supposed to do.
     * The input for `{current_date}` is optional, depending on the use. */
    readonly systemMessage?: string;
    /**
     * The prompt template contains contextual information of the request and the user prompt.
     *
     * When using the `prompt_template` parameter, you **must include** input for `{user_question}`.
     * Inputs for `{current_date}` and `{content}` are optional, depending on the use. */
    readonly promptTemplate?: string;
};
export declare function serializeAiAgentBasicTextToolTextGen(val: AiAgentBasicTextToolTextGen): SerializedData;
export declare function deserializeAiAgentBasicTextToolTextGen(val: SerializedData): AiAgentBasicTextToolTextGen;
//# sourceMappingURL=aiAgentBasicTextToolTextGen.generated.d.ts.map