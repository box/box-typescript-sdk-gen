import { SerializedData } from '../serialization/json.js';
export type ClassificationTemplateField = 'securityClassification-6VMVochwUWo' | string;
export interface Classification {
    /**
     * The name of the classification applied to the item. */
    readonly boxSecurityClassificationKey?: string;
    /**
     * The identifier of the item that this metadata instance
     * has been attached to. This combines the `type` and the `id`
     * of the parent in the form `{type}_{id}`. */
    readonly parent?: string;
    /**
     * The value will always be `securityClassification-6VMVochwUWo`. */
    readonly template?: ClassificationTemplateField;
    /**
     * The scope of the enterprise that this classification has been
     * applied for.
     *
     * This will be in the format `enterprise_{enterprise_id}`. */
    readonly scope?: string;
    /**
     * The version of the metadata instance. This version starts at 0 and
     * increases every time a classification is updated. */
    readonly version?: number;
    /**
     * The unique ID of this classification instance. This will be include
     * the name of the classification template and a unique ID. */
    readonly type?: string;
    /**
     * The version of the metadata template. This version starts at 0 and
     * increases every time the template is updated. This is mostly for internal
     * use. */
    readonly typeVersion?: number;
    /**
     * Whether an end user can change the classification. */
    readonly canEdit?: boolean;
    readonly rawData?: SerializedData;
}
export declare function serializeClassificationTemplateField(val: ClassificationTemplateField): SerializedData;
export declare function deserializeClassificationTemplateField(val: SerializedData): ClassificationTemplateField;
export declare function serializeClassification(val: Classification): SerializedData;
export declare function deserializeClassification(val: SerializedData): Classification;
//# sourceMappingURL=classification.generated.d.ts.map