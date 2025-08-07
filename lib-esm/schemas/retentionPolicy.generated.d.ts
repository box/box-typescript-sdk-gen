import { RetentionPolicyMini } from './retentionPolicyMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type RetentionPolicyPolicyTypeField = 'finite' | 'indefinite' | string;
export type RetentionPolicyRetentionTypeField = 'modifiable' | 'non_modifiable' | string;
export type RetentionPolicyStatusField = 'active' | 'retired' | string;
export interface RetentionPolicyAssignmentCountsField {
    /**
     * The number of enterprise assignments this policy has. The maximum value is 1. */
    readonly enterprise?: number;
    /**
     * The number of folder assignments this policy has. */
    readonly folder?: number;
    /**
     * The number of metadata template assignments this policy has. */
    readonly metadataTemplate?: number;
    readonly rawData?: SerializedData;
}
export declare class RetentionPolicy extends RetentionPolicyMini {
    readonly description?: string;
    readonly policyType?: RetentionPolicyPolicyTypeField;
    readonly retentionType?: RetentionPolicyRetentionTypeField;
    readonly status?: RetentionPolicyStatusField;
    readonly createdBy?: UserMini;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly canOwnerExtendRetention?: boolean;
    readonly areOwnersNotified?: boolean;
    readonly customNotificationRecipients?: readonly UserMini[];
    readonly assignmentCounts?: RetentionPolicyAssignmentCountsField;
    constructor(fields: RetentionPolicy);
}
export declare function serializeRetentionPolicyPolicyTypeField(val: RetentionPolicyPolicyTypeField): SerializedData;
export declare function deserializeRetentionPolicyPolicyTypeField(val: SerializedData): RetentionPolicyPolicyTypeField;
export declare function serializeRetentionPolicyRetentionTypeField(val: RetentionPolicyRetentionTypeField): SerializedData;
export declare function deserializeRetentionPolicyRetentionTypeField(val: SerializedData): RetentionPolicyRetentionTypeField;
export declare function serializeRetentionPolicyStatusField(val: RetentionPolicyStatusField): SerializedData;
export declare function deserializeRetentionPolicyStatusField(val: SerializedData): RetentionPolicyStatusField;
export declare function serializeRetentionPolicyAssignmentCountsField(val: RetentionPolicyAssignmentCountsField): SerializedData;
export declare function deserializeRetentionPolicyAssignmentCountsField(val: SerializedData): RetentionPolicyAssignmentCountsField;
export declare function serializeRetentionPolicy(val: RetentionPolicy): SerializedData;
export declare function deserializeRetentionPolicy(val: SerializedData): RetentionPolicy;
