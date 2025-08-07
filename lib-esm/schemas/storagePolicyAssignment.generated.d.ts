import { StoragePolicyMini } from './storagePolicyMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export type StoragePolicyAssignmentTypeField = 'storage_policy_assignment';
export interface StoragePolicyAssignmentAssignedToField {
    /**
     * The unique identifier for this object. */
    readonly id?: string;
    /**
     * The type for this object. */
    readonly type?: string;
    readonly rawData?: SerializedData;
}
export declare class StoragePolicyAssignment {
    /**
     * The unique identifier for a storage policy assignment. */
    readonly id: string;
    /**
     * The value will always be `storage_policy_assignment`. */
    readonly type: StoragePolicyAssignmentTypeField;
    readonly storagePolicy?: StoragePolicyMini;
    readonly assignedTo?: StoragePolicyAssignmentAssignedToField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<StoragePolicyAssignment, 'type'> & Partial<Pick<StoragePolicyAssignment, 'type'>>);
}
export interface StoragePolicyAssignmentInput {
    /**
     * The unique identifier for a storage policy assignment. */
    readonly id: string;
    /**
     * The value will always be `storage_policy_assignment`. */
    readonly type?: StoragePolicyAssignmentTypeField;
    readonly storagePolicy?: StoragePolicyMini;
    readonly assignedTo?: StoragePolicyAssignmentAssignedToField;
    readonly rawData?: SerializedData;
}
export declare function serializeStoragePolicyAssignmentTypeField(val: StoragePolicyAssignmentTypeField): SerializedData;
export declare function deserializeStoragePolicyAssignmentTypeField(val: SerializedData): StoragePolicyAssignmentTypeField;
export declare function serializeStoragePolicyAssignmentAssignedToField(val: StoragePolicyAssignmentAssignedToField): SerializedData;
export declare function deserializeStoragePolicyAssignmentAssignedToField(val: SerializedData): StoragePolicyAssignmentAssignedToField;
export declare function serializeStoragePolicyAssignment(val: StoragePolicyAssignment): SerializedData;
export declare function deserializeStoragePolicyAssignment(val: SerializedData): StoragePolicyAssignment;
export declare function serializeStoragePolicyAssignmentInput(val: StoragePolicyAssignmentInput): SerializedData;
export declare function deserializeStoragePolicyAssignmentInput(val: SerializedData): StoragePolicyAssignmentInput;
