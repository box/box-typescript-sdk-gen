import { AiItemAsk } from './aiItemAsk.generated.js';
import { AiDialogueHistory } from './aiDialogueHistory.generated.js';
import { AiAgentAskOrAiAgentReference } from './aiAgentAskOrAiAgentReference.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAskModeField = 'multiple_item_qa' | 'single_item_qa' | string;
export interface AiAsk {
    /**
     * Box AI handles text documents with text representations up to 1MB in size, or a maximum of 25 files,
     * whichever comes first. If the text file size exceeds 1MB, the first 1MB of text representation will be processed.
     * Box AI handles image documents with a resolution of 1024 x 1024 pixels, with a maximum of 5 images or 5 pages
     * for multi-page images. If the number of image or image pages exceeds 5, the first 5 images or pages will
     * be processed. If you set mode parameter to `single_item_qa`, the items array can have one element only.
     * Currently Box AI does not support multi-modal requests. If both images and text are sent Box AI will only
     * process the text. */
    readonly mode: AiAskModeField;
    /**
     * The prompt provided by the client to be answered by the LLM.
     * The prompt's length is limited to 10000 characters. */
    readonly prompt: string;
    /**
     * The items to be processed by the LLM, often files. */
    readonly items: readonly AiItemAsk[];
    /**
     * The history of prompts and answers previously passed to the LLM. This provides additional context to the LLM in generating the response. */
    readonly dialogueHistory?: readonly AiDialogueHistory[];
    /**
     * A flag to indicate whether citations should be returned. */
    readonly includeCitations?: boolean;
    readonly aiAgent?: AiAgentAskOrAiAgentReference;
    readonly rawData?: SerializedData;
}
export declare function serializeAiAskModeField(val: AiAskModeField): SerializedData;
export declare function deserializeAiAskModeField(val: SerializedData): AiAskModeField;
export declare function serializeAiAsk(val: AiAsk): SerializedData;
export declare function deserializeAiAsk(val: SerializedData): AiAsk;
//# sourceMappingURL=aiAsk.generated.d.ts.map