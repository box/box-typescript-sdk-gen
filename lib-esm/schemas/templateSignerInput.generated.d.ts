import { SignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { SerializedData } from '../serialization/json.js';
export type TemplateSignerInputTypeField = 'signature' | 'date' | 'text' | 'checkbox' | 'attachment' | 'radio' | 'dropdown';
export type TemplateSignerInputContentTypeField = 'signature' | 'initial' | 'stamp' | 'date' | 'checkbox' | 'text' | 'full_name' | 'first_name' | 'last_name' | 'company' | 'title' | 'email' | 'attachment' | 'radio' | 'dropdown' | string;
export interface TemplateSignerInputCoordinatesField {
    /**
     * Relative x coordinate to the page the input is on, ranging from 0 to 1. */
    readonly x?: number;
    /**
     * Relative y coordinate to the page the input is on, ranging from 0 to 1. */
    readonly y?: number;
    readonly rawData?: SerializedData;
}
export interface TemplateSignerInputDimensionsField {
    /**
     * Relative width to the page the input is on, ranging from 0 to 1. */
    readonly width?: number;
    /**
     * Relative height to the page the input is on, ranging from 0 to 1. */
    readonly height?: number;
    readonly rawData?: SerializedData;
}
export type TemplateSignerInput = SignRequestPrefillTag & {
    /**
     * Type of input. */
    readonly type?: TemplateSignerInputTypeField;
    /**
     * Content type of input. */
    readonly contentType?: TemplateSignerInputContentTypeField;
    /**
     * Whether or not the input is required. */
    readonly isRequired?: boolean;
    /**
     * Index of page that the input is on. */
    readonly pageIndex: number;
    /**
     * Document identifier. */
    readonly documentId?: string | null;
    /**
     * When the input is of the type `dropdown` this
     * values will be filled with all the
     * dropdown options. */
    readonly dropdownChoices?: readonly string[] | null;
    /**
     * When the input is of type `radio` they can be
     * grouped to gather with this identifier. */
    readonly groupId?: string | null;
    /**
     * Where the input is located on a page. */
    readonly coordinates?: TemplateSignerInputCoordinatesField;
    /**
     * The size of the input. */
    readonly dimensions?: TemplateSignerInputDimensionsField;
    /**
     * The label field is used especially for text, attachment, radio, and checkbox type inputs. */
    readonly label?: string | null;
    /**
     * Whether this input was defined as read-only(immutable by signers) or not. */
    readonly readOnly?: boolean;
};
export declare function serializeTemplateSignerInputTypeField(val: TemplateSignerInputTypeField): SerializedData;
export declare function deserializeTemplateSignerInputTypeField(val: SerializedData): TemplateSignerInputTypeField;
export declare function serializeTemplateSignerInputContentTypeField(val: TemplateSignerInputContentTypeField): SerializedData;
export declare function deserializeTemplateSignerInputContentTypeField(val: SerializedData): TemplateSignerInputContentTypeField;
export declare function serializeTemplateSignerInputCoordinatesField(val: TemplateSignerInputCoordinatesField): SerializedData;
export declare function deserializeTemplateSignerInputCoordinatesField(val: SerializedData): TemplateSignerInputCoordinatesField;
export declare function serializeTemplateSignerInputDimensionsField(val: TemplateSignerInputDimensionsField): SerializedData;
export declare function deserializeTemplateSignerInputDimensionsField(val: SerializedData): TemplateSignerInputDimensionsField;
export declare function serializeTemplateSignerInput(val: TemplateSignerInput): SerializedData;
export declare function deserializeTemplateSignerInput(val: SerializedData): TemplateSignerInput;
