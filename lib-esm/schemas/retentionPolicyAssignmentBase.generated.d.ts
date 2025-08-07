import { SerializedData } from '../serialization/json.js';
export type RetentionPolicyAssignmentBaseTypeField = 'retention_policy_assignment';
export declare class RetentionPolicyAssignmentBase {
    /**
     * The unique identifier that represents a file version. */
    readonly id: string;
    /**
     * The value will always be `retention_policy_assignment`. */
    readonly type: RetentionPolicyAssignmentBaseTypeField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<RetentionPolicyAssignmentBase, 'type'> & Partial<Pick<RetentionPolicyAssignmentBase, 'type'>>);
}
export interface RetentionPolicyAssignmentBaseInput {
    /**
     * The unique identifier that represents a file version. */
    readonly id: string;
    /**
     * The value will always be `retention_policy_assignment`. */
    readonly type?: RetentionPolicyAssignmentBaseTypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeRetentionPolicyAssignmentBaseTypeField(val: RetentionPolicyAssignmentBaseTypeField): SerializedData;
export declare function deserializeRetentionPolicyAssignmentBaseTypeField(val: SerializedData): RetentionPolicyAssignmentBaseTypeField;
export declare function serializeRetentionPolicyAssignmentBase(val: RetentionPolicyAssignmentBase): SerializedData;
export declare function deserializeRetentionPolicyAssignmentBase(val: SerializedData): RetentionPolicyAssignmentBase;
export declare function serializeRetentionPolicyAssignmentBaseInput(val: RetentionPolicyAssignmentBaseInput): SerializedData;
export declare function deserializeRetentionPolicyAssignmentBaseInput(val: SerializedData): RetentionPolicyAssignmentBaseInput;
