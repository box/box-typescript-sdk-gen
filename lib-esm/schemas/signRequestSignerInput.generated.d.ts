import { SignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { SerializedData } from '../serialization/json.js';
export type SignRequestSignerInputTypeField = 'signature' | 'date' | 'text' | 'checkbox' | 'radio' | 'dropdown';
export type SignRequestSignerInputContentTypeField = 'signature' | 'initial' | 'stamp' | 'date' | 'checkbox' | 'text' | 'full_name' | 'first_name' | 'last_name' | 'company' | 'title' | 'email' | 'attachment' | 'radio' | 'dropdown' | string;
export type SignRequestSignerInput = SignRequestPrefillTag & {
    /**
     * Type of input. */
    readonly type?: SignRequestSignerInputTypeField;
    /**
     * Content type of input. */
    readonly contentType?: SignRequestSignerInputContentTypeField;
    /**
     * Index of page that the input is on. */
    readonly pageIndex: number;
    /**
     * Whether this input was defined as read-only(immutable by signers) or not. */
    readonly readOnly?: boolean;
};
export declare function serializeSignRequestSignerInputTypeField(val: SignRequestSignerInputTypeField): SerializedData;
export declare function deserializeSignRequestSignerInputTypeField(val: SerializedData): SignRequestSignerInputTypeField;
export declare function serializeSignRequestSignerInputContentTypeField(val: SignRequestSignerInputContentTypeField): SerializedData;
export declare function deserializeSignRequestSignerInputContentTypeField(val: SerializedData): SignRequestSignerInputContentTypeField;
export declare function serializeSignRequestSignerInput(val: SignRequestSignerInput): SerializedData;
export declare function deserializeSignRequestSignerInput(val: SerializedData): SignRequestSignerInput;
