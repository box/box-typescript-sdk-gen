import { LegalHoldPolicyMini } from './legalHoldPolicyMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type LegalHoldPolicyStatusField = 'active' | 'applying' | 'releasing' | 'released' | string;
export interface LegalHoldPolicyAssignmentCountsField {
    /**
     * The number of users this policy is applied to. */
    readonly user?: number;
    /**
     * The number of folders this policy is applied to. */
    readonly folder?: number;
    /**
     * The number of files this policy is applied to. */
    readonly file?: number;
    /**
     * The number of file versions this policy is applied to. */
    readonly fileVersion?: number;
    readonly rawData?: SerializedData;
}
export declare class LegalHoldPolicy extends LegalHoldPolicyMini {
    readonly policyName?: string;
    readonly description?: string;
    readonly status?: LegalHoldPolicyStatusField;
    readonly assignmentCounts?: LegalHoldPolicyAssignmentCountsField;
    readonly createdBy?: UserMini;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly deletedAt?: DateTime;
    readonly filterStartedAt?: DateTime;
    readonly filterEndedAt?: DateTime;
    readonly releaseNotes?: string;
    constructor(fields: LegalHoldPolicy);
}
export declare function serializeLegalHoldPolicyStatusField(val: LegalHoldPolicyStatusField): SerializedData;
export declare function deserializeLegalHoldPolicyStatusField(val: SerializedData): LegalHoldPolicyStatusField;
export declare function serializeLegalHoldPolicyAssignmentCountsField(val: LegalHoldPolicyAssignmentCountsField): SerializedData;
export declare function deserializeLegalHoldPolicyAssignmentCountsField(val: SerializedData): LegalHoldPolicyAssignmentCountsField;
export declare function serializeLegalHoldPolicy(val: LegalHoldPolicy): SerializedData;
export declare function deserializeLegalHoldPolicy(val: SerializedData): LegalHoldPolicy;
