import { SerializedData } from '../serialization/json.js';
export type AiCitationTypeField = 'file';
export interface AiCitation {
    /**
     * The specific content from where the answer was referenced. */
    readonly content?: string;
    /**
     * The id of the item. */
    readonly id?: string;
    /**
     * The type of the item. */
    readonly type?: AiCitationTypeField;
    /**
     * The name of the item. */
    readonly name?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeAiCitationTypeField(val: AiCitationTypeField): SerializedData;
export declare function deserializeAiCitationTypeField(val: SerializedData): AiCitationTypeField;
export declare function serializeAiCitation(val: AiCitation): SerializedData;
export declare function deserializeAiCitation(val: SerializedData): AiCitation;
//# sourceMappingURL=aiCitation.generated.d.ts.map