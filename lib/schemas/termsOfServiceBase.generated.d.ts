import { SerializedData } from '../serialization/json.js';
export type TermsOfServiceBaseTypeField = 'terms_of_service';
export declare class TermsOfServiceBase {
    /**
     * The unique identifier for this terms of service. */
    readonly id: string;
    /**
     * The value will always be `terms_of_service`. */
    readonly type: TermsOfServiceBaseTypeField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<TermsOfServiceBase, 'type'> & Partial<Pick<TermsOfServiceBase, 'type'>>);
}
export interface TermsOfServiceBaseInput {
    /**
     * The unique identifier for this terms of service. */
    readonly id: string;
    /**
     * The value will always be `terms_of_service`. */
    readonly type?: TermsOfServiceBaseTypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeTermsOfServiceBaseTypeField(val: TermsOfServiceBaseTypeField): SerializedData;
export declare function deserializeTermsOfServiceBaseTypeField(val: SerializedData): TermsOfServiceBaseTypeField;
export declare function serializeTermsOfServiceBase(val: TermsOfServiceBase): SerializedData;
export declare function deserializeTermsOfServiceBase(val: SerializedData): TermsOfServiceBase;
export declare function serializeTermsOfServiceBaseInput(val: TermsOfServiceBaseInput): SerializedData;
export declare function deserializeTermsOfServiceBaseInput(val: SerializedData): TermsOfServiceBaseInput;
//# sourceMappingURL=termsOfServiceBase.generated.d.ts.map