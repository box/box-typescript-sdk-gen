import { SerializedData } from '../../serialization/json.js';
export type TermsOfServiceBaseV2025R0TypeField = 'terms_of_service';
export declare class TermsOfServiceBaseV2025R0 {
    /**
     * The unique identifier for this terms of service. */
    readonly id: string;
    /**
     * The value will always be `terms_of_service`. */
    readonly type: TermsOfServiceBaseV2025R0TypeField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<TermsOfServiceBaseV2025R0, 'type'> & Partial<Pick<TermsOfServiceBaseV2025R0, 'type'>>);
}
export interface TermsOfServiceBaseV2025R0Input {
    /**
     * The unique identifier for this terms of service. */
    readonly id: string;
    /**
     * The value will always be `terms_of_service`. */
    readonly type?: TermsOfServiceBaseV2025R0TypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeTermsOfServiceBaseV2025R0TypeField(val: TermsOfServiceBaseV2025R0TypeField): SerializedData;
export declare function deserializeTermsOfServiceBaseV2025R0TypeField(val: SerializedData): TermsOfServiceBaseV2025R0TypeField;
export declare function serializeTermsOfServiceBaseV2025R0(val: TermsOfServiceBaseV2025R0): SerializedData;
export declare function deserializeTermsOfServiceBaseV2025R0(val: SerializedData): TermsOfServiceBaseV2025R0;
export declare function serializeTermsOfServiceBaseV2025R0Input(val: TermsOfServiceBaseV2025R0Input): SerializedData;
export declare function deserializeTermsOfServiceBaseV2025R0Input(val: SerializedData): TermsOfServiceBaseV2025R0Input;
