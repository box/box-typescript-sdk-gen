import { SerializedData } from '../serialization/json.js';
export type RetentionPolicyBaseTypeField = 'retention_policy';
export declare class RetentionPolicyBase {
    /**
     * The unique identifier that represents a retention policy. */
    readonly id: string;
    /**
     * The value will always be `retention_policy`. */
    readonly type: RetentionPolicyBaseTypeField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<RetentionPolicyBase, 'type'> & Partial<Pick<RetentionPolicyBase, 'type'>>);
}
export interface RetentionPolicyBaseInput {
    /**
     * The unique identifier that represents a retention policy. */
    readonly id: string;
    /**
     * The value will always be `retention_policy`. */
    readonly type?: RetentionPolicyBaseTypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeRetentionPolicyBaseTypeField(val: RetentionPolicyBaseTypeField): SerializedData;
export declare function deserializeRetentionPolicyBaseTypeField(val: SerializedData): RetentionPolicyBaseTypeField;
export declare function serializeRetentionPolicyBase(val: RetentionPolicyBase): SerializedData;
export declare function deserializeRetentionPolicyBase(val: SerializedData): RetentionPolicyBase;
export declare function serializeRetentionPolicyBaseInput(val: RetentionPolicyBaseInput): SerializedData;
export declare function deserializeRetentionPolicyBaseInput(val: SerializedData): RetentionPolicyBaseInput;
//# sourceMappingURL=retentionPolicyBase.generated.d.ts.map