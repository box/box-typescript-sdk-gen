import { SerializedData } from '../serialization/json.js';
export type AiItemAskTypeField = 'file' | 'hubs';
export interface AiItemAsk {
    /**
     * The ID of the file. */
    readonly id: string;
    /**
     * The type of the item. A `hubs` item must be used as a single item. */
    readonly type: AiItemAskTypeField;
    /**
     * The content of the item, often the text representation. */
    readonly content?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeAiItemAskTypeField(val: AiItemAskTypeField): SerializedData;
export declare function deserializeAiItemAskTypeField(val: SerializedData): AiItemAskTypeField;
export declare function serializeAiItemAsk(val: AiItemAsk): SerializedData;
export declare function deserializeAiItemAsk(val: SerializedData): AiItemAsk;
