import { SerializedData } from '../serialization/json.js';
export type LegalHoldPolicyMiniTypeField = 'legal_hold_policy';
export declare class LegalHoldPolicyMini {
    /**
     * The unique identifier for this legal hold policy. */
    readonly id: string;
    /**
     * The value will always be `legal_hold_policy`. */
    readonly type: LegalHoldPolicyMiniTypeField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<LegalHoldPolicyMini, 'type'> & Partial<Pick<LegalHoldPolicyMini, 'type'>>);
}
export interface LegalHoldPolicyMiniInput {
    /**
     * The unique identifier for this legal hold policy. */
    readonly id: string;
    /**
     * The value will always be `legal_hold_policy`. */
    readonly type?: LegalHoldPolicyMiniTypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeLegalHoldPolicyMiniTypeField(val: LegalHoldPolicyMiniTypeField): SerializedData;
export declare function deserializeLegalHoldPolicyMiniTypeField(val: SerializedData): LegalHoldPolicyMiniTypeField;
export declare function serializeLegalHoldPolicyMini(val: LegalHoldPolicyMini): SerializedData;
export declare function deserializeLegalHoldPolicyMini(val: SerializedData): LegalHoldPolicyMini;
export declare function serializeLegalHoldPolicyMiniInput(val: LegalHoldPolicyMiniInput): SerializedData;
export declare function deserializeLegalHoldPolicyMiniInput(val: SerializedData): LegalHoldPolicyMiniInput;
//# sourceMappingURL=legalHoldPolicyMini.generated.d.ts.map