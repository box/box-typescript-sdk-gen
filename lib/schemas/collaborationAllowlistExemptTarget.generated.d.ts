import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type CollaborationAllowlistExemptTargetTypeField = 'collaboration_whitelist_exempt_target';
export type CollaborationAllowlistExemptTargetEnterpriseTypeField = 'enterprise';
export interface CollaborationAllowlistExemptTargetEnterpriseField {
    /**
     * The unique identifier for this enterprise. */
    readonly id?: string;
    /**
     * The value will always be `enterprise`. */
    readonly type?: CollaborationAllowlistExemptTargetEnterpriseTypeField;
    /**
     * The name of the enterprise. */
    readonly name?: string;
    readonly rawData?: SerializedData;
}
export interface CollaborationAllowlistExemptTarget {
    /**
     * The unique identifier for this exemption. */
    readonly id?: string;
    /**
     * The value will always be `collaboration_whitelist_exempt_target`. */
    readonly type?: CollaborationAllowlistExemptTargetTypeField;
    readonly enterprise?: CollaborationAllowlistExemptTargetEnterpriseField;
    readonly user?: UserMini;
    /**
     * The time the entry was created. */
    readonly createdAt?: DateTime;
    /**
     * The time the entry was modified. */
    readonly modifiedAt?: DateTime;
    readonly rawData?: SerializedData;
}
export declare function serializeCollaborationAllowlistExemptTargetTypeField(val: CollaborationAllowlistExemptTargetTypeField): SerializedData;
export declare function deserializeCollaborationAllowlistExemptTargetTypeField(val: SerializedData): CollaborationAllowlistExemptTargetTypeField;
export declare function serializeCollaborationAllowlistExemptTargetEnterpriseTypeField(val: CollaborationAllowlistExemptTargetEnterpriseTypeField): SerializedData;
export declare function deserializeCollaborationAllowlistExemptTargetEnterpriseTypeField(val: SerializedData): CollaborationAllowlistExemptTargetEnterpriseTypeField;
export declare function serializeCollaborationAllowlistExemptTargetEnterpriseField(val: CollaborationAllowlistExemptTargetEnterpriseField): SerializedData;
export declare function deserializeCollaborationAllowlistExemptTargetEnterpriseField(val: SerializedData): CollaborationAllowlistExemptTargetEnterpriseField;
export declare function serializeCollaborationAllowlistExemptTarget(val: CollaborationAllowlistExemptTarget): SerializedData;
export declare function deserializeCollaborationAllowlistExemptTarget(val: SerializedData): CollaborationAllowlistExemptTarget;
//# sourceMappingURL=collaborationAllowlistExemptTarget.generated.d.ts.map