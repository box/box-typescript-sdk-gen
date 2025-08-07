import { SerializedData } from '../serialization/json.js';
export type MetadataCascadePolicyTypeField = 'metadata_cascade_policy';
export type MetadataCascadePolicyOwnerEnterpriseTypeField = 'enterprise';
export interface MetadataCascadePolicyOwnerEnterpriseField {
    /**
     * The value will always be `enterprise`. */
    readonly type?: MetadataCascadePolicyOwnerEnterpriseTypeField;
    /**
     * The ID of the enterprise that owns the policy. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export type MetadataCascadePolicyParentTypeField = 'folder';
export interface MetadataCascadePolicyParentField {
    /**
     * The value will always be `folder`. */
    readonly type?: MetadataCascadePolicyParentTypeField;
    /**
     * The ID of the folder the policy is applied to. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export declare class MetadataCascadePolicy {
    /**
     * The ID of the metadata cascade policy object. */
    readonly id: string;
    /**
     * The value will always be `metadata_cascade_policy`. */
    readonly type: MetadataCascadePolicyTypeField;
    /**
     * The enterprise that owns this policy. */
    readonly ownerEnterprise?: MetadataCascadePolicyOwnerEnterpriseField;
    /**
     * Represent the folder the policy is applied to. */
    readonly parent?: MetadataCascadePolicyParentField;
    /**
     * The scope of the metadata cascade policy can either be `global` or
     * `enterprise_*`. The `global` scope is used for policies that are
     * available to any Box enterprise. The `enterprise_*` scope represents
     * policies that have been created within a specific enterprise, where `*`
     * will be the ID of that enterprise. */
    readonly scope?: string;
    /**
     * The key of the template that is cascaded down to the folder's
     * children.
     *
     * In many cases the template key is automatically derived
     * of its display name, for example `Contract Template` would
     * become `contractTemplate`. In some cases the creator of the
     * template will have provided its own template key.
     *
     * Please [list the templates for an enterprise][list], or
     * get all instances on a [file][file] or [folder][folder]
     * to inspect a template's key.
     *
     * [list]: e://get-metadata-templates-enterprise
     * [file]: e://get-files-id-metadata
     * [folder]: e://get-folders-id-metadata */
    readonly templateKey?: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<MetadataCascadePolicy, 'type'> & Partial<Pick<MetadataCascadePolicy, 'type'>>);
}
export interface MetadataCascadePolicyInput {
    /**
     * The ID of the metadata cascade policy object. */
    readonly id: string;
    /**
     * The value will always be `metadata_cascade_policy`. */
    readonly type?: MetadataCascadePolicyTypeField;
    /**
     * The enterprise that owns this policy. */
    readonly ownerEnterprise?: MetadataCascadePolicyOwnerEnterpriseField;
    /**
     * Represent the folder the policy is applied to. */
    readonly parent?: MetadataCascadePolicyParentField;
    /**
     * The scope of the metadata cascade policy can either be `global` or
     * `enterprise_*`. The `global` scope is used for policies that are
     * available to any Box enterprise. The `enterprise_*` scope represents
     * policies that have been created within a specific enterprise, where `*`
     * will be the ID of that enterprise. */
    readonly scope?: string;
    /**
     * The key of the template that is cascaded down to the folder's
     * children.
     *
     * In many cases the template key is automatically derived
     * of its display name, for example `Contract Template` would
     * become `contractTemplate`. In some cases the creator of the
     * template will have provided its own template key.
     *
     * Please [list the templates for an enterprise][list], or
     * get all instances on a [file][file] or [folder][folder]
     * to inspect a template's key.
     *
     * [list]: e://get-metadata-templates-enterprise
     * [file]: e://get-files-id-metadata
     * [folder]: e://get-folders-id-metadata */
    readonly templateKey?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeMetadataCascadePolicyTypeField(val: MetadataCascadePolicyTypeField): SerializedData;
export declare function deserializeMetadataCascadePolicyTypeField(val: SerializedData): MetadataCascadePolicyTypeField;
export declare function serializeMetadataCascadePolicyOwnerEnterpriseTypeField(val: MetadataCascadePolicyOwnerEnterpriseTypeField): SerializedData;
export declare function deserializeMetadataCascadePolicyOwnerEnterpriseTypeField(val: SerializedData): MetadataCascadePolicyOwnerEnterpriseTypeField;
export declare function serializeMetadataCascadePolicyOwnerEnterpriseField(val: MetadataCascadePolicyOwnerEnterpriseField): SerializedData;
export declare function deserializeMetadataCascadePolicyOwnerEnterpriseField(val: SerializedData): MetadataCascadePolicyOwnerEnterpriseField;
export declare function serializeMetadataCascadePolicyParentTypeField(val: MetadataCascadePolicyParentTypeField): SerializedData;
export declare function deserializeMetadataCascadePolicyParentTypeField(val: SerializedData): MetadataCascadePolicyParentTypeField;
export declare function serializeMetadataCascadePolicyParentField(val: MetadataCascadePolicyParentField): SerializedData;
export declare function deserializeMetadataCascadePolicyParentField(val: SerializedData): MetadataCascadePolicyParentField;
export declare function serializeMetadataCascadePolicy(val: MetadataCascadePolicy): SerializedData;
export declare function deserializeMetadataCascadePolicy(val: SerializedData): MetadataCascadePolicy;
export declare function serializeMetadataCascadePolicyInput(val: MetadataCascadePolicyInput): SerializedData;
export declare function deserializeMetadataCascadePolicyInput(val: SerializedData): MetadataCascadePolicyInput;
//# sourceMappingURL=metadataCascadePolicy.generated.d.ts.map