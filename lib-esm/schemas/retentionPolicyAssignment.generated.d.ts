import { RetentionPolicyMini } from './retentionPolicyMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type RetentionPolicyAssignmentTypeField = 'retention_policy_assignment';
export type RetentionPolicyAssignmentAssignedToTypeField = 'folder' | 'enterprise' | 'metadata_template';
export interface RetentionPolicyAssignmentAssignedToField {
    /**
     * The ID of the folder, enterprise, or metadata template
     * the policy is assigned to.
     * Set to null or omit when type is set to enterprise. */
    readonly id?: string | null;
    /**
     * The type of resource the policy is assigned to. */
    readonly type?: RetentionPolicyAssignmentAssignedToTypeField;
    readonly rawData?: SerializedData;
}
export interface RetentionPolicyAssignmentFilterFieldsField {
    /**
     * The metadata attribute key id. */
    readonly field?: string | null;
    /**
     * The metadata attribute field id. For value, only
     * enum and multiselect types are supported. */
    readonly value?: string | null;
    readonly rawData?: SerializedData;
}
export declare class RetentionPolicyAssignment {
    /**
     * The unique identifier for a retention policy assignment. */
    readonly id: string;
    /**
     * The value will always be `retention_policy_assignment`. */
    readonly type: RetentionPolicyAssignmentTypeField;
    readonly retentionPolicy?: RetentionPolicyMini;
    /**
     * The `type` and `id` of the content that is under
     * retention. The `type` can either be `folder`
     * `enterprise`, or `metadata_template`. */
    readonly assignedTo?: RetentionPolicyAssignmentAssignedToField;
    /**
     * An array of field objects. Values are only returned if the `assigned_to`
     * type is `metadata_template`. Otherwise, the array is blank. */
    readonly filterFields?: readonly RetentionPolicyAssignmentFilterFieldsField[] | null;
    readonly assignedBy?: UserMini;
    /**
     * When the retention policy assignment object was
     * created. */
    readonly assignedAt?: DateTime;
    /**
     * The date the retention policy assignment begins.
     * If the `assigned_to` type is `metadata_template`,
     * this field can be a date field's metadata attribute key id. */
    readonly startDateField?: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<RetentionPolicyAssignment, 'type'> & Partial<Pick<RetentionPolicyAssignment, 'type'>>);
}
export interface RetentionPolicyAssignmentInput {
    /**
     * The unique identifier for a retention policy assignment. */
    readonly id: string;
    /**
     * The value will always be `retention_policy_assignment`. */
    readonly type?: RetentionPolicyAssignmentTypeField;
    readonly retentionPolicy?: RetentionPolicyMini;
    /**
     * The `type` and `id` of the content that is under
     * retention. The `type` can either be `folder`
     * `enterprise`, or `metadata_template`. */
    readonly assignedTo?: RetentionPolicyAssignmentAssignedToField;
    /**
     * An array of field objects. Values are only returned if the `assigned_to`
     * type is `metadata_template`. Otherwise, the array is blank. */
    readonly filterFields?: readonly RetentionPolicyAssignmentFilterFieldsField[] | null;
    readonly assignedBy?: UserMini;
    /**
     * When the retention policy assignment object was
     * created. */
    readonly assignedAt?: DateTime;
    /**
     * The date the retention policy assignment begins.
     * If the `assigned_to` type is `metadata_template`,
     * this field can be a date field's metadata attribute key id. */
    readonly startDateField?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeRetentionPolicyAssignmentTypeField(val: RetentionPolicyAssignmentTypeField): SerializedData;
export declare function deserializeRetentionPolicyAssignmentTypeField(val: SerializedData): RetentionPolicyAssignmentTypeField;
export declare function serializeRetentionPolicyAssignmentAssignedToTypeField(val: RetentionPolicyAssignmentAssignedToTypeField): SerializedData;
export declare function deserializeRetentionPolicyAssignmentAssignedToTypeField(val: SerializedData): RetentionPolicyAssignmentAssignedToTypeField;
export declare function serializeRetentionPolicyAssignmentAssignedToField(val: RetentionPolicyAssignmentAssignedToField): SerializedData;
export declare function deserializeRetentionPolicyAssignmentAssignedToField(val: SerializedData): RetentionPolicyAssignmentAssignedToField;
export declare function serializeRetentionPolicyAssignmentFilterFieldsField(val: RetentionPolicyAssignmentFilterFieldsField): SerializedData;
export declare function deserializeRetentionPolicyAssignmentFilterFieldsField(val: SerializedData): RetentionPolicyAssignmentFilterFieldsField;
export declare function serializeRetentionPolicyAssignment(val: RetentionPolicyAssignment): SerializedData;
export declare function deserializeRetentionPolicyAssignment(val: SerializedData): RetentionPolicyAssignment;
export declare function serializeRetentionPolicyAssignmentInput(val: RetentionPolicyAssignmentInput): SerializedData;
export declare function deserializeRetentionPolicyAssignmentInput(val: SerializedData): RetentionPolicyAssignmentInput;
