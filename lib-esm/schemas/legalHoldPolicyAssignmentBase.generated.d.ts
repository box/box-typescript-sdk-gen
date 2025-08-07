import { SerializedData } from '../serialization/json.js';
export type LegalHoldPolicyAssignmentBaseTypeField = 'legal_hold_policy_assignment';
export interface LegalHoldPolicyAssignmentBase {
    /**
     * The unique identifier for this legal hold assignment. */
    readonly id?: string;
    /**
     * The value will always be `legal_hold_policy_assignment`. */
    readonly type?: LegalHoldPolicyAssignmentBaseTypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeLegalHoldPolicyAssignmentBaseTypeField(val: LegalHoldPolicyAssignmentBaseTypeField): SerializedData;
export declare function deserializeLegalHoldPolicyAssignmentBaseTypeField(val: SerializedData): LegalHoldPolicyAssignmentBaseTypeField;
export declare function serializeLegalHoldPolicyAssignmentBase(val: LegalHoldPolicyAssignmentBase): SerializedData;
export declare function deserializeLegalHoldPolicyAssignmentBase(val: SerializedData): LegalHoldPolicyAssignmentBase;
