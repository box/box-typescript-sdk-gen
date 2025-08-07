import { AiAgentInfo } from './aiAgentInfo.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface AiResponse {
    /**
     * The answer provided by the LLM. */
    readonly answer: string;
    /**
     * The ISO date formatted timestamp of when the answer to the prompt was created. */
    readonly createdAt: DateTime;
    /**
     * The reason the response finishes. */
    readonly completionReason?: string;
    readonly aiAgentInfo?: AiAgentInfo;
    readonly rawData?: SerializedData;
}
export declare function serializeAiResponse(val: AiResponse): SerializedData;
export declare function deserializeAiResponse(val: SerializedData): AiResponse;
//# sourceMappingURL=aiResponse.generated.d.ts.map