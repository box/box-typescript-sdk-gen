import { SerializedData } from '../serialization/json.js';
export type AiItemBaseTypeField = 'file';
export declare class AiItemBase {
    /**
     * The ID of the file. */
    readonly id: string;
    /**
     * The type of the item. Currently the value can be `file` only. */
    readonly type: AiItemBaseTypeField;
    /**
     * The content of the item, often the text representation. */
    readonly content?: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<AiItemBase, 'type'> & Partial<Pick<AiItemBase, 'type'>>);
}
export interface AiItemBaseInput {
    /**
     * The ID of the file. */
    readonly id: string;
    /**
     * The type of the item. Currently the value can be `file` only. */
    readonly type?: AiItemBaseTypeField;
    /**
     * The content of the item, often the text representation. */
    readonly content?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeAiItemBaseTypeField(val: AiItemBaseTypeField): SerializedData;
export declare function deserializeAiItemBaseTypeField(val: SerializedData): AiItemBaseTypeField;
export declare function serializeAiItemBase(val: AiItemBase): SerializedData;
export declare function deserializeAiItemBase(val: SerializedData): AiItemBase;
export declare function serializeAiItemBaseInput(val: AiItemBaseInput): SerializedData;
export declare function deserializeAiItemBaseInput(val: SerializedData): AiItemBaseInput;
//# sourceMappingURL=aiItemBase.generated.d.ts.map