import { RetentionPolicyBase } from './retentionPolicyBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export type RetentionPolicyMiniDispositionActionField = 'permanently_delete' | 'remove_retention' | string;
export declare class RetentionPolicyMini extends RetentionPolicyBase {
    readonly policyName?: string;
    readonly retentionLength?: string;
    readonly dispositionAction?: RetentionPolicyMiniDispositionActionField;
    constructor(fields: RetentionPolicyMini);
}
export declare function serializeRetentionPolicyMiniDispositionActionField(val: RetentionPolicyMiniDispositionActionField): SerializedData;
export declare function deserializeRetentionPolicyMiniDispositionActionField(val: SerializedData): RetentionPolicyMiniDispositionActionField;
export declare function serializeRetentionPolicyMini(val: RetentionPolicyMini): SerializedData;
export declare function deserializeRetentionPolicyMini(val: SerializedData): RetentionPolicyMini;
