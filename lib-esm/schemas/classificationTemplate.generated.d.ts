import { SerializedData } from '../serialization/json.js';
export type ClassificationTemplateTypeField = 'metadata_template';
export type ClassificationTemplateTemplateKeyField = 'securityClassification-6VMVochwUWo' | string;
export type ClassificationTemplateDisplayNameField = 'Classification' | string;
export type ClassificationTemplateFieldsTypeField = 'enum';
export type ClassificationTemplateFieldsKeyField = 'Box__Security__Classification__Key' | string;
export type ClassificationTemplateFieldsDisplayNameField = 'Classification' | string;
export interface ClassificationTemplateFieldsOptionsStaticConfigClassificationField {
    /**
     * A longer description of the classification. */
    readonly classificationDefinition?: string;
    /**
     * An internal Box identifier used to assign a color to
     * a classification label.
     *
     * Mapping between a `colorID` and a color may change
     * without notice. Currently, the color mappings are as
     * follows.
     *
     * * `0`: Yellow.
     * * `1`: Orange.
     * * `2`: Watermelon red.
     * * `3`: Purple rain.
     * * `4`: Light blue.
     * * `5`: Dark blue.
     * * `6`: Light green.
     * * `7`: Gray. */
    readonly colorId?: number;
    readonly rawData?: SerializedData;
}
export interface ClassificationTemplateFieldsOptionsStaticConfigField {
    /**
     * Additional information about the classification.
     *
     * This is not an exclusive list of properties, and
     * more object fields might be returned. These fields
     * are used for internal Box Shield and Box Governance
     * purposes and no additional value must be derived from
     * these fields. */
    readonly classification?: ClassificationTemplateFieldsOptionsStaticConfigClassificationField;
    readonly rawData?: SerializedData;
}
export interface ClassificationTemplateFieldsOptionsField {
    /**
     * The unique ID of this classification. */
    readonly id: string;
    /**
     * The display name and key for this classification. */
    readonly key: string;
    /**
     * Additional information about the classification. */
    readonly staticConfig?: ClassificationTemplateFieldsOptionsStaticConfigField;
    readonly rawData?: SerializedData;
}
export declare class ClassificationTemplateFieldsField {
    /**
     * The unique ID of the field. */
    readonly id: string;
    /**
     * The array item type. */
    readonly type: ClassificationTemplateFieldsTypeField;
    /**
     * Defines classifications
     * available in the enterprise. */
    readonly key: ClassificationTemplateFieldsKeyField;
    /**
     * The value will always be `Classification`. */
    readonly displayName: ClassificationTemplateFieldsDisplayNameField;
    /**
     * Classifications are always visible to web and mobile users. */
    readonly hidden?: boolean;
    /**
     * A list of classifications available in this enterprise. */
    readonly options: readonly ClassificationTemplateFieldsOptionsField[];
    readonly rawData?: SerializedData;
    constructor(fields: Omit<ClassificationTemplateFieldsField, 'type' | 'key' | 'displayName'> & Partial<Pick<ClassificationTemplateFieldsField, 'type' | 'key' | 'displayName'>>);
}
export interface ClassificationTemplateFieldsFieldInput {
    /**
     * The unique ID of the field. */
    readonly id: string;
    /**
     * The array item type. */
    readonly type?: ClassificationTemplateFieldsTypeField;
    /**
     * Defines classifications
     * available in the enterprise. */
    readonly key?: ClassificationTemplateFieldsKeyField;
    /**
     * The value will always be `Classification`. */
    readonly displayName?: ClassificationTemplateFieldsDisplayNameField;
    /**
     * Classifications are always visible to web and mobile users. */
    readonly hidden?: boolean;
    /**
     * A list of classifications available in this enterprise. */
    readonly options: readonly ClassificationTemplateFieldsOptionsField[];
    readonly rawData?: SerializedData;
}
export declare class ClassificationTemplate {
    /**
     * The ID of the classification template. */
    readonly id: string;
    /**
     * The value will always be `metadata_template`. */
    readonly type: ClassificationTemplateTypeField;
    /**
     * The scope of the classification template. This is in the format
     * `enterprise_{id}` where the `id` is the enterprise ID. */
    readonly scope: string;
    /**
     * The value will always be `securityClassification-6VMVochwUWo`. */
    readonly templateKey: ClassificationTemplateTemplateKeyField;
    /**
     * The name of this template as shown in web and mobile interfaces. */
    readonly displayName: ClassificationTemplateDisplayNameField;
    /**
     * Determines if the
     * template is always available in web and mobile interfaces. */
    readonly hidden?: boolean;
    /**
     * Determines if
     * classifications are
     * copied along when the file or folder is
     * copied. */
    readonly copyInstanceOnItemCopy?: boolean;
    /**
     * A list of fields for this classification template. This includes
     * only one field, the `Box__Security__Classification__Key`, which defines
     * the different classifications available in this enterprise. */
    readonly fields: readonly ClassificationTemplateFieldsField[];
    readonly rawData?: SerializedData;
    constructor(fields: Omit<ClassificationTemplate, 'type' | 'templateKey' | 'displayName'> & Partial<Pick<ClassificationTemplate, 'type' | 'templateKey' | 'displayName'>>);
}
export interface ClassificationTemplateInput {
    /**
     * The ID of the classification template. */
    readonly id: string;
    /**
     * The value will always be `metadata_template`. */
    readonly type?: ClassificationTemplateTypeField;
    /**
     * The scope of the classification template. This is in the format
     * `enterprise_{id}` where the `id` is the enterprise ID. */
    readonly scope: string;
    /**
     * The value will always be `securityClassification-6VMVochwUWo`. */
    readonly templateKey?: ClassificationTemplateTemplateKeyField;
    /**
     * The name of this template as shown in web and mobile interfaces. */
    readonly displayName?: ClassificationTemplateDisplayNameField;
    /**
     * Determines if the
     * template is always available in web and mobile interfaces. */
    readonly hidden?: boolean;
    /**
     * Determines if
     * classifications are
     * copied along when the file or folder is
     * copied. */
    readonly copyInstanceOnItemCopy?: boolean;
    /**
     * A list of fields for this classification template. This includes
     * only one field, the `Box__Security__Classification__Key`, which defines
     * the different classifications available in this enterprise. */
    readonly fields: readonly ClassificationTemplateFieldsField[];
    readonly rawData?: SerializedData;
}
export declare function serializeClassificationTemplateTypeField(val: ClassificationTemplateTypeField): SerializedData;
export declare function deserializeClassificationTemplateTypeField(val: SerializedData): ClassificationTemplateTypeField;
export declare function serializeClassificationTemplateTemplateKeyField(val: ClassificationTemplateTemplateKeyField): SerializedData;
export declare function deserializeClassificationTemplateTemplateKeyField(val: SerializedData): ClassificationTemplateTemplateKeyField;
export declare function serializeClassificationTemplateDisplayNameField(val: ClassificationTemplateDisplayNameField): SerializedData;
export declare function deserializeClassificationTemplateDisplayNameField(val: SerializedData): ClassificationTemplateDisplayNameField;
export declare function serializeClassificationTemplateFieldsTypeField(val: ClassificationTemplateFieldsTypeField): SerializedData;
export declare function deserializeClassificationTemplateFieldsTypeField(val: SerializedData): ClassificationTemplateFieldsTypeField;
export declare function serializeClassificationTemplateFieldsKeyField(val: ClassificationTemplateFieldsKeyField): SerializedData;
export declare function deserializeClassificationTemplateFieldsKeyField(val: SerializedData): ClassificationTemplateFieldsKeyField;
export declare function serializeClassificationTemplateFieldsDisplayNameField(val: ClassificationTemplateFieldsDisplayNameField): SerializedData;
export declare function deserializeClassificationTemplateFieldsDisplayNameField(val: SerializedData): ClassificationTemplateFieldsDisplayNameField;
export declare function serializeClassificationTemplateFieldsOptionsStaticConfigClassificationField(val: ClassificationTemplateFieldsOptionsStaticConfigClassificationField): SerializedData;
export declare function deserializeClassificationTemplateFieldsOptionsStaticConfigClassificationField(val: SerializedData): ClassificationTemplateFieldsOptionsStaticConfigClassificationField;
export declare function serializeClassificationTemplateFieldsOptionsStaticConfigField(val: ClassificationTemplateFieldsOptionsStaticConfigField): SerializedData;
export declare function deserializeClassificationTemplateFieldsOptionsStaticConfigField(val: SerializedData): ClassificationTemplateFieldsOptionsStaticConfigField;
export declare function serializeClassificationTemplateFieldsOptionsField(val: ClassificationTemplateFieldsOptionsField): SerializedData;
export declare function deserializeClassificationTemplateFieldsOptionsField(val: SerializedData): ClassificationTemplateFieldsOptionsField;
export declare function serializeClassificationTemplateFieldsField(val: ClassificationTemplateFieldsField): SerializedData;
export declare function deserializeClassificationTemplateFieldsField(val: SerializedData): ClassificationTemplateFieldsField;
export declare function serializeClassificationTemplateFieldsFieldInput(val: ClassificationTemplateFieldsFieldInput): SerializedData;
export declare function deserializeClassificationTemplateFieldsFieldInput(val: SerializedData): ClassificationTemplateFieldsFieldInput;
export declare function serializeClassificationTemplate(val: ClassificationTemplate): SerializedData;
export declare function deserializeClassificationTemplate(val: SerializedData): ClassificationTemplate;
export declare function serializeClassificationTemplateInput(val: ClassificationTemplateInput): SerializedData;
export declare function deserializeClassificationTemplateInput(val: SerializedData): ClassificationTemplateInput;
