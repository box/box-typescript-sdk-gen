import { SerializedData } from '../serialization/json.js';
export interface MetadataBase {
    /**
     * The identifier of the item that this metadata instance
     * has been attached to. This combines the `type` and the `id`
     * of the parent in the form `{type}_{id}`. */
    readonly parent?: string;
    /**
     * The name of the template. */
    readonly template?: string;
    /**
     * An ID for the scope in which this template
     * has been applied. This will be `enterprise_{enterprise_id}` for templates
     * defined for use in this enterprise, and `global` for general templates
     * that are available to all enterprises using Box. */
    readonly scope?: string;
    /**
     * The version of the metadata instance. This version starts at 0 and
     * increases every time a user-defined property is modified. */
    readonly version?: number;
    readonly rawData?: SerializedData;
}
export declare function serializeMetadataBase(val: MetadataBase): SerializedData;
export declare function deserializeMetadataBase(val: SerializedData): MetadataBase;
