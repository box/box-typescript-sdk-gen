import { SerializedData } from '../serialization/json.js';
export type MetadataTemplateTypeField = 'metadata_template';
export type MetadataTemplateFieldsTypeField = 'string' | 'float' | 'date' | 'enum' | 'multiSelect' | 'integer';
export interface MetadataTemplateFieldsOptionsField {
    /**
     * The text value of the option. This represents both the display name of the
     * option and the internal key used when updating templates. */
    readonly key: string;
    /**
     * The internal unique identifier of the the option. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export interface MetadataTemplateFieldsField {
    /**
     * The type of field. The basic fields are a `string` field for text, a
     * `float` field for numbers, and a `date` fields to present the user with a
     * date-time picker.
     *
     * Additionally, metadata templates support an `enum` field for a basic list
     * of items, and ` multiSelect` field for a similar list of items where the
     * user can select more than one value.
     *
     * **Note**: The `integer` value is deprecated.
     * It is still present in the response,
     * but cannot be used in the POST request. */
    readonly type: MetadataTemplateFieldsTypeField;
    /**
     * A unique identifier for the field. The identifier must
     * be unique within the template to which it belongs. */
    readonly key: string;
    /**
     * The display name of the field as it is shown to the user in the web and
     * mobile apps. */
    readonly displayName: string;
    /**
     * A description of the field. This is not shown to the user. */
    readonly description?: string;
    /**
     * Whether this field is hidden in the UI for the user and can only be set
     * through the API instead. */
    readonly hidden?: boolean;
    /**
     * A list of options for this field. This is used in combination
     * with the `enum` and `multiSelect` field types. */
    readonly options?: readonly MetadataTemplateFieldsOptionsField[];
    /**
     * The unique ID of the metadata template field. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export declare class MetadataTemplate {
    /**
     * The ID of the metadata template. */
    readonly id: string;
    /**
     * The value will always be `metadata_template`. */
    readonly type: MetadataTemplateTypeField;
    /**
     * The scope of the metadata template can either be `global` or
     * `enterprise_*`. The `global` scope is used for templates that are
     * available to any Box enterprise. The `enterprise_*` scope represents
     * templates that have been created within a specific enterprise, where `*`
     * will be the ID of that enterprise. */
    readonly scope?: string;
    /**
     * A unique identifier for the template. This identifier is unique across
     * the `scope` of the enterprise to which the metadata template is being
     * applied, yet is not necessarily unique across different enterprises. */
    readonly templateKey?: string;
    /**
     * The display name of the template. This can be seen in the Box web app
     * and mobile apps. */
    readonly displayName?: string;
    /**
     * Defines if this template is visible in the Box web app UI, or if
     * it is purely intended for usage through the API. */
    readonly hidden?: boolean;
    /**
     * An ordered list of template fields which are part of the template. Each
     * field can be a regular text field, date field, number field, as well as a
     * single or multi-select list. */
    readonly fields?: readonly MetadataTemplateFieldsField[];
    /**
     * Whether or not to include the metadata when a file or folder is copied. */
    readonly copyInstanceOnItemCopy?: boolean;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<MetadataTemplate, 'type'> & Partial<Pick<MetadataTemplate, 'type'>>);
}
export interface MetadataTemplateInput {
    /**
     * The ID of the metadata template. */
    readonly id: string;
    /**
     * The value will always be `metadata_template`. */
    readonly type?: MetadataTemplateTypeField;
    /**
     * The scope of the metadata template can either be `global` or
     * `enterprise_*`. The `global` scope is used for templates that are
     * available to any Box enterprise. The `enterprise_*` scope represents
     * templates that have been created within a specific enterprise, where `*`
     * will be the ID of that enterprise. */
    readonly scope?: string;
    /**
     * A unique identifier for the template. This identifier is unique across
     * the `scope` of the enterprise to which the metadata template is being
     * applied, yet is not necessarily unique across different enterprises. */
    readonly templateKey?: string;
    /**
     * The display name of the template. This can be seen in the Box web app
     * and mobile apps. */
    readonly displayName?: string;
    /**
     * Defines if this template is visible in the Box web app UI, or if
     * it is purely intended for usage through the API. */
    readonly hidden?: boolean;
    /**
     * An ordered list of template fields which are part of the template. Each
     * field can be a regular text field, date field, number field, as well as a
     * single or multi-select list. */
    readonly fields?: readonly MetadataTemplateFieldsField[];
    /**
     * Whether or not to include the metadata when a file or folder is copied. */
    readonly copyInstanceOnItemCopy?: boolean;
    readonly rawData?: SerializedData;
}
export declare function serializeMetadataTemplateTypeField(val: MetadataTemplateTypeField): SerializedData;
export declare function deserializeMetadataTemplateTypeField(val: SerializedData): MetadataTemplateTypeField;
export declare function serializeMetadataTemplateFieldsTypeField(val: MetadataTemplateFieldsTypeField): SerializedData;
export declare function deserializeMetadataTemplateFieldsTypeField(val: SerializedData): MetadataTemplateFieldsTypeField;
export declare function serializeMetadataTemplateFieldsOptionsField(val: MetadataTemplateFieldsOptionsField): SerializedData;
export declare function deserializeMetadataTemplateFieldsOptionsField(val: SerializedData): MetadataTemplateFieldsOptionsField;
export declare function serializeMetadataTemplateFieldsField(val: MetadataTemplateFieldsField): SerializedData;
export declare function deserializeMetadataTemplateFieldsField(val: SerializedData): MetadataTemplateFieldsField;
export declare function serializeMetadataTemplate(val: MetadataTemplate): SerializedData;
export declare function deserializeMetadataTemplate(val: SerializedData): MetadataTemplate;
export declare function serializeMetadataTemplateInput(val: MetadataTemplateInput): SerializedData;
export declare function deserializeMetadataTemplateInput(val: SerializedData): MetadataTemplateInput;
//# sourceMappingURL=metadataTemplate.generated.d.ts.map