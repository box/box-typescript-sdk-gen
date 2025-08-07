import { AiDialogueHistory } from './aiDialogueHistory.generated.js';
import { AiAgentReferenceOrAiAgentTextGen } from './aiAgentReferenceOrAiAgentTextGen.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiTextGenItemsTypeField = 'file';
export declare class AiTextGenItemsField {
    /**
     * The ID of the item. */
    readonly id: string;
    /**
     * The type of the item. */
    readonly type: AiTextGenItemsTypeField;
    /**
     * The content to use as context for generating new text or editing existing text. */
    readonly content?: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AiTextGenItemsField, 'type'> & Partial<Pick<AiTextGenItemsField, 'type'>>);
}
export interface AiTextGenItemsFieldInput {
    /**
     * The ID of the item. */
    readonly id: string;
    /**
     * The type of the item. */
    readonly type?: AiTextGenItemsTypeField;
    /**
     * The content to use as context for generating new text or editing existing text. */
    readonly content?: string;
    readonly rawData?: SerializedData;
}
export interface AiTextGen {
    /**
     * The prompt provided by the client to be answered by the LLM. The prompt's length is limited to 10000 characters. */
    readonly prompt: string;
    /**
     * The items to be processed by the LLM, often files.
     * The array can include **exactly one** element.
     *
     * **Note**: Box AI handles documents with text representations up to 1MB in size.
     * If the file size exceeds 1MB, the first 1MB of text representation will be processed. */
    readonly items: readonly AiTextGenItemsField[];
    /**
     * The history of prompts and answers previously passed to the LLM. This parameter provides the additional context to the LLM when generating the response. */
    readonly dialogueHistory?: readonly AiDialogueHistory[];
    readonly aiAgent?: AiAgentReferenceOrAiAgentTextGen;
    readonly rawData?: SerializedData;
}
export declare function serializeAiTextGenItemsTypeField(val: AiTextGenItemsTypeField): SerializedData;
export declare function deserializeAiTextGenItemsTypeField(val: SerializedData): AiTextGenItemsTypeField;
export declare function serializeAiTextGenItemsField(val: AiTextGenItemsField): SerializedData;
export declare function deserializeAiTextGenItemsField(val: SerializedData): AiTextGenItemsField;
export declare function serializeAiTextGenItemsFieldInput(val: AiTextGenItemsFieldInput): SerializedData;
export declare function deserializeAiTextGenItemsFieldInput(val: SerializedData): AiTextGenItemsFieldInput;
export declare function serializeAiTextGen(val: AiTextGen): SerializedData;
export declare function deserializeAiTextGen(val: SerializedData): AiTextGen;
//# sourceMappingURL=aiTextGen.generated.d.ts.map