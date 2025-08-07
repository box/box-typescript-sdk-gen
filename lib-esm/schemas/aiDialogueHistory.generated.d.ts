import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface AiDialogueHistory {
    /**
     * The prompt previously provided by the client and answered by the LLM. */
    readonly prompt?: string;
    /**
     * The answer previously provided by the LLM. */
    readonly answer?: string;
    /**
     * The ISO date formatted timestamp of when the previous answer to the prompt was created. */
    readonly createdAt?: DateTime;
    readonly rawData?: SerializedData;
}
export declare function serializeAiDialogueHistory(val: AiDialogueHistory): SerializedData;
export declare function deserializeAiDialogueHistory(val: SerializedData): AiDialogueHistory;
