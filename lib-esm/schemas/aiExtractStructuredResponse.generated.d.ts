import { AiExtractResponse } from './aiExtractResponse.generated.js';
import { AiAgentInfo } from './aiAgentInfo.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface AiExtractStructuredResponse {
    readonly answer: AiExtractResponse;
    /**
     * The ISO date formatted timestamp of when the answer to the prompt was created. */
    readonly createdAt: DateTime;
    /**
     * The reason the response finishes. */
    readonly completionReason?: string;
    readonly aiAgentInfo?: AiAgentInfo;
    readonly rawData?: SerializedData;
}
export declare function serializeAiExtractStructuredResponse(val: AiExtractStructuredResponse): SerializedData;
export declare function deserializeAiExtractStructuredResponse(val: SerializedData): AiExtractStructuredResponse;
