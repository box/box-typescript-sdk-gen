import { TermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TermsOfServiceStatusField = 'enabled' | 'disabled' | string;
export type TermsOfServiceEnterpriseTypeField = 'enterprise';
export interface TermsOfServiceEnterpriseField {
    /**
     * The unique identifier for this enterprise. */
    readonly id?: string;
    /**
     * The value will always be `enterprise`. */
    readonly type?: TermsOfServiceEnterpriseTypeField;
    /**
     * The name of the enterprise. */
    readonly name?: string;
    readonly rawData?: SerializedData;
}
export type TermsOfServiceTosTypeField = 'managed' | 'external' | string;
export declare class TermsOfService extends TermsOfServiceBase {
    readonly status?: TermsOfServiceStatusField;
    readonly enterprise?: TermsOfServiceEnterpriseField;
    readonly tosType?: TermsOfServiceTosTypeField;
    readonly text?: string;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    constructor(fields: TermsOfService);
}
export declare function serializeTermsOfServiceStatusField(val: TermsOfServiceStatusField): SerializedData;
export declare function deserializeTermsOfServiceStatusField(val: SerializedData): TermsOfServiceStatusField;
export declare function serializeTermsOfServiceEnterpriseTypeField(val: TermsOfServiceEnterpriseTypeField): SerializedData;
export declare function deserializeTermsOfServiceEnterpriseTypeField(val: SerializedData): TermsOfServiceEnterpriseTypeField;
export declare function serializeTermsOfServiceEnterpriseField(val: TermsOfServiceEnterpriseField): SerializedData;
export declare function deserializeTermsOfServiceEnterpriseField(val: SerializedData): TermsOfServiceEnterpriseField;
export declare function serializeTermsOfServiceTosTypeField(val: TermsOfServiceTosTypeField): SerializedData;
export declare function deserializeTermsOfServiceTosTypeField(val: SerializedData): TermsOfServiceTosTypeField;
export declare function serializeTermsOfService(val: TermsOfService): SerializedData;
export declare function deserializeTermsOfService(val: SerializedData): TermsOfService;
