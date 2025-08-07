import { AiSingleAgentResponseFull } from './aiSingleAgentResponseFull.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface AiMultipleAgentResponse {
    /**
     * The limit that was used for these entries. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. The maximum value varies by API. */
    readonly limit?: number;
    /**
     * The marker for the start of the next page of results. */
    readonly nextMarker?: string | null;
    /**
     * The marker for the start of the previous page of results. */
    readonly prevMarker?: string | null;
    /**
     * The list of AI Agents. */
    readonly entries: readonly AiSingleAgentResponseFull[];
    readonly rawData?: SerializedData;
}
export declare function serializeAiMultipleAgentResponse(val: AiMultipleAgentResponse): SerializedData;
export declare function deserializeAiMultipleAgentResponse(val: SerializedData): AiMultipleAgentResponse;
