import { AiResponse } from './aiResponse.generated.js';
import { AiCitation } from './aiCitation.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiResponseFull = AiResponse & {
    /**
     * The citations of the LLM's answer reference. */
    readonly citations?: readonly AiCitation[];
};
export declare function serializeAiResponseFull(val: AiResponseFull): SerializedData;
export declare function deserializeAiResponseFull(val: SerializedData): AiResponseFull;
