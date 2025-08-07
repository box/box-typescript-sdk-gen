import { SerializedData } from '../../serialization/json.js';
export type EnterpriseReferenceV2025R0TypeField = 'enterprise';
export interface EnterpriseReferenceV2025R0 {
    /**
     * The unique identifier for this enterprise. */
    readonly id?: string;
    /**
     * The value will always be `enterprise`. */
    readonly type?: EnterpriseReferenceV2025R0TypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeEnterpriseReferenceV2025R0TypeField(val: EnterpriseReferenceV2025R0TypeField): SerializedData;
export declare function deserializeEnterpriseReferenceV2025R0TypeField(val: SerializedData): EnterpriseReferenceV2025R0TypeField;
export declare function serializeEnterpriseReferenceV2025R0(val: EnterpriseReferenceV2025R0): SerializedData;
export declare function deserializeEnterpriseReferenceV2025R0(val: SerializedData): EnterpriseReferenceV2025R0;
//# sourceMappingURL=enterpriseReferenceV2025R0.generated.d.ts.map