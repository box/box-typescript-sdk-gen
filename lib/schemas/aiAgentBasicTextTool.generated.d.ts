import { AiAgentBasicTextToolBase } from './aiAgentBasicTextToolBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAgentBasicTextTool = AiAgentBasicTextToolBase & {
    /**
     * System messages try to help the LLM "understand" its role and what it is supposed to do. */
    readonly systemMessage?: string;
    /**
     * The prompt template contains contextual information of the request and the user prompt.
     * When passing `prompt_template` parameters, you **must include** inputs for `{user_question}` and `{content}`.
     * `{current_date}` is optional, depending on the use. */
    readonly promptTemplate?: string;
};
export declare function serializeAiAgentBasicTextTool(val: AiAgentBasicTextTool): SerializedData;
export declare function deserializeAiAgentBasicTextTool(val: SerializedData): AiAgentBasicTextTool;
//# sourceMappingURL=aiAgentBasicTextTool.generated.d.ts.map