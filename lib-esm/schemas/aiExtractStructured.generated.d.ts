import { AiItemBase } from './aiItemBase.generated.js';
import { AiAgentExtractStructuredOrAiAgentReference } from './aiAgentExtractStructuredOrAiAgentReference.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiExtractStructuredMetadataTemplateTypeField = 'metadata_template';
export interface AiExtractStructuredMetadataTemplateField {
    /**
     * The name of the metadata template. */
    readonly templateKey?: string;
    /**
     * Value is always `metadata_template`. */
    readonly type?: AiExtractStructuredMetadataTemplateTypeField;
    /**
     * The scope of the metadata template that can either be global or
     * enterprise.
     * * The **global** scope is used for templates that are
     * available to any Box enterprise.
     * * The **enterprise** scope represents templates created within a specific enterprise,
     *   containing the ID of that enterprise. */
    readonly scope?: string;
    readonly rawData?: SerializedData;
}
export interface AiExtractStructuredFieldsOptionsField {
    /**
     * A unique identifier for the field. */
    readonly key: string;
    readonly rawData?: SerializedData;
}
export interface AiExtractStructuredFieldsField {
    /**
     * A unique identifier for the field. */
    readonly key: string;
    /**
     * A description of the field. */
    readonly description?: string;
    /**
     * The display name of the field. */
    readonly displayName?: string;
    /**
     * The context about the key that may include how to find and format it. */
    readonly prompt?: string;
    /**
     * The type of the field. It include but is not limited to string, float, date, enum, and multiSelect. */
    readonly type?: string;
    /**
     * A list of options for this field. This is most often used in combination with the enum and multiSelect field types. */
    readonly options?: readonly AiExtractStructuredFieldsOptionsField[];
    readonly rawData?: SerializedData;
}
export interface AiExtractStructured {
    /**
     * The items to be processed by the LLM. Currently you can use files only. */
    readonly items: readonly AiItemBase[];
    /**
     * The metadata template containing the fields to extract.
     * For your request to work, you must provide either `metadata_template` or `fields`, but not both. */
    readonly metadataTemplate?: AiExtractStructuredMetadataTemplateField;
    /**
     * The fields to be extracted from the provided items.
     * For your request to work, you must provide either `metadata_template` or `fields`, but not both. */
    readonly fields?: readonly AiExtractStructuredFieldsField[];
    readonly aiAgent?: AiAgentExtractStructuredOrAiAgentReference;
    readonly rawData?: SerializedData;
}
export declare function serializeAiExtractStructuredMetadataTemplateTypeField(val: AiExtractStructuredMetadataTemplateTypeField): SerializedData;
export declare function deserializeAiExtractStructuredMetadataTemplateTypeField(val: SerializedData): AiExtractStructuredMetadataTemplateTypeField;
export declare function serializeAiExtractStructuredMetadataTemplateField(val: AiExtractStructuredMetadataTemplateField): SerializedData;
export declare function deserializeAiExtractStructuredMetadataTemplateField(val: SerializedData): AiExtractStructuredMetadataTemplateField;
export declare function serializeAiExtractStructuredFieldsOptionsField(val: AiExtractStructuredFieldsOptionsField): SerializedData;
export declare function deserializeAiExtractStructuredFieldsOptionsField(val: SerializedData): AiExtractStructuredFieldsOptionsField;
export declare function serializeAiExtractStructuredFieldsField(val: AiExtractStructuredFieldsField): SerializedData;
export declare function deserializeAiExtractStructuredFieldsField(val: SerializedData): AiExtractStructuredFieldsField;
export declare function serializeAiExtractStructured(val: AiExtractStructured): SerializedData;
export declare function deserializeAiExtractStructured(val: SerializedData): AiExtractStructured;
