import { SerializedData } from '../serialization/json.js';
export type EnterpriseBaseTypeField = 'enterprise';
export interface EnterpriseBase {
    /**
     * The unique identifier for this enterprise. */
    readonly id?: string;
    /**
     * The value will always be `enterprise`. */
    readonly type?: EnterpriseBaseTypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeEnterpriseBaseTypeField(val: EnterpriseBaseTypeField): SerializedData;
export declare function deserializeEnterpriseBaseTypeField(val: SerializedData): EnterpriseBaseTypeField;
export declare function serializeEnterpriseBase(val: EnterpriseBase): SerializedData;
export declare function deserializeEnterpriseBase(val: SerializedData): EnterpriseBase;
//# sourceMappingURL=enterpriseBase.generated.d.ts.map