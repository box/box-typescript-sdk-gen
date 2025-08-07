import { FolderMini } from './folderMini.generated.js';
import { FileMini } from './fileMini.generated.js';
import { TemplateSigner } from './templateSigner.generated.js';
import { SerializedData } from '../serialization/json.js';
export type SignTemplateTypeField = 'sign-template';
export type SignTemplateAdditionalInfoNonEditableField = 'email_subject' | 'email_message' | 'name' | 'days_valid' | 'signers' | 'source_files' | string;
export type SignTemplateAdditionalInfoRequiredSignersField = 'email' | string;
export interface SignTemplateAdditionalInfoRequiredField {
    /**
     * Required signer fields. */
    readonly signers?: readonly (readonly SignTemplateAdditionalInfoRequiredSignersField[])[];
    readonly rawData?: SerializedData;
}
export interface SignTemplateAdditionalInfoField {
    /**
     * Non editable fields. */
    readonly nonEditable?: readonly SignTemplateAdditionalInfoNonEditableField[];
    /**
     * Required fields. */
    readonly required?: SignTemplateAdditionalInfoRequiredField;
    readonly rawData?: SerializedData;
}
export interface SignTemplateReadySignLinkField {
    /**
     * The URL that can be sent to signers. */
    readonly url?: string;
    /**
     * Request name. */
    readonly name?: string | null;
    /**
     * Extra instructions for all signers. */
    readonly instructions?: string | null;
    /**
     * The destination folder to place final,
     * signed document and signing
     * log. Only `ID` and `type` fields are required.
     * The root folder,
     * folder ID `0`, cannot be used. */
    readonly folderId?: string | null;
    /**
     * Whether to disable notifications when
     * a signer has signed. */
    readonly isNotificationDisabled?: boolean;
    /**
     * Whether the ready sign link is enabled or not. */
    readonly isActive?: boolean;
    readonly rawData?: SerializedData;
}
export interface SignTemplateCustomBrandingField {
    /**
     * Name of the company. */
    readonly companyName?: string | null;
    /**
     * Custom branding logo URI in the form of a base64 image. */
    readonly logoUri?: string | null;
    /**
     * Custom branding color in hex. */
    readonly brandingColor?: string | null;
    /**
     * Content of the email footer. */
    readonly emailFooterText?: string | null;
    readonly rawData?: SerializedData;
}
export interface SignTemplate {
    /**
     * The value will always be `sign-template`. */
    readonly type?: SignTemplateTypeField;
    /**
     * Template identifier. */
    readonly id?: string;
    /**
     * The name of the template. */
    readonly name?: string | null;
    /**
     * Subject of signature request email. This is cleaned by sign
     * request. If this field is not passed, a default subject will be used. */
    readonly emailSubject?: string | null;
    /**
     * Message to include in signature request email. The field
     * is cleaned through sanitization of specific characters. However,
     * some html tags are allowed. Links included in the
     * message are also converted to hyperlinks in the email. The
     * message may contain the following html tags including `a`, `abbr`,
     * `acronym`, `b`, `blockquote`, `code`, `em`, `i`, `ul`, `li`, `ol`, and
     * `strong`. Be aware that when the text
     * to html ratio is too high, the email
     * may end up in spam filters. Custom styles on
     * these tags are not allowed.
     * If this field is not passed, a default message will be used. */
    readonly emailMessage?: string | null;
    /**
     * Set the number of days after which the
     * created signature request will automatically
     * expire if not completed. By default, we do
     * not apply any expiration date on signature
     * requests, and the signature request does not expire. */
    readonly daysValid?: number | null;
    readonly parentFolder?: FolderMini;
    /**
     * List of files to create a signing document from.
     * Only the ID and type fields are required
     * for each file. */
    readonly sourceFiles?: readonly FileMini[];
    /**
     * Indicates if the template input
     * fields are editable or not. */
    readonly areFieldsLocked?: boolean;
    /**
     * Indicates if the template document options
     * are editable or not,
     * for example renaming the document. */
    readonly areOptionsLocked?: boolean;
    /**
     * Indicates if the template signers are editable or not. */
    readonly areRecipientsLocked?: boolean;
    /**
     * Indicates if the template email settings are editable or not. */
    readonly areEmailSettingsLocked?: boolean;
    /**
     * Indicates if the template files are editable or not.
     * This includes deleting or renaming template files. */
    readonly areFilesLocked?: boolean;
    /**
     * Array of signers for the template.
     *
     * **Note**: It may happen that some signers specified in the template belong to conflicting [segments](r://shield-information-barrier-segment-member) (user groups).
     * This means that due to the security policies, users are assigned to segments to prevent exchanges or communication that could lead to ethical conflicts.
     * In such a case, an attempt to send a sign request based on a template that lists signers in conflicting segments will result in an error.
     *
     * Read more about [segments and ethical walls](https://support.box.com/hc/en-us/articles/9920431507603-Understanding-Information-Barriers#h_01GFVJEHQA06N7XEZ4GCZ9GFAQ). */
    readonly signers?: readonly TemplateSigner[];
    /**
     * Additional information on which fields are
     * required and which fields are not editable. */
    readonly additionalInfo?: SignTemplateAdditionalInfoField;
    /**
     * Box's ready-sign link feature enables you to create a
     * link to a signature request that
     * you've created from a template. Use this link
     * when you want to post a signature request
     * on a public form — such as an email, social media post,
     * or web page — without knowing who the signers will be.
     * Note: The ready-sign link feature is
     * limited to Enterprise Plus customers and not
     * available to Box Verified Enterprises. */
    readonly readySignLink?: SignTemplateReadySignLinkField | null;
    /**
     * Custom branding applied to notifications
     * and signature requests. */
    readonly customBranding?: SignTemplateCustomBrandingField | null;
    readonly rawData?: SerializedData;
}
export declare function serializeSignTemplateTypeField(val: SignTemplateTypeField): SerializedData;
export declare function deserializeSignTemplateTypeField(val: SerializedData): SignTemplateTypeField;
export declare function serializeSignTemplateAdditionalInfoNonEditableField(val: SignTemplateAdditionalInfoNonEditableField): SerializedData;
export declare function deserializeSignTemplateAdditionalInfoNonEditableField(val: SerializedData): SignTemplateAdditionalInfoNonEditableField;
export declare function serializeSignTemplateAdditionalInfoRequiredSignersField(val: SignTemplateAdditionalInfoRequiredSignersField): SerializedData;
export declare function deserializeSignTemplateAdditionalInfoRequiredSignersField(val: SerializedData): SignTemplateAdditionalInfoRequiredSignersField;
export declare function serializeSignTemplateAdditionalInfoRequiredField(val: SignTemplateAdditionalInfoRequiredField): SerializedData;
export declare function deserializeSignTemplateAdditionalInfoRequiredField(val: SerializedData): SignTemplateAdditionalInfoRequiredField;
export declare function serializeSignTemplateAdditionalInfoField(val: SignTemplateAdditionalInfoField): SerializedData;
export declare function deserializeSignTemplateAdditionalInfoField(val: SerializedData): SignTemplateAdditionalInfoField;
export declare function serializeSignTemplateReadySignLinkField(val: SignTemplateReadySignLinkField): SerializedData;
export declare function deserializeSignTemplateReadySignLinkField(val: SerializedData): SignTemplateReadySignLinkField;
export declare function serializeSignTemplateCustomBrandingField(val: SignTemplateCustomBrandingField): SerializedData;
export declare function deserializeSignTemplateCustomBrandingField(val: SerializedData): SignTemplateCustomBrandingField;
export declare function serializeSignTemplate(val: SignTemplate): SerializedData;
export declare function deserializeSignTemplate(val: SerializedData): SignTemplate;
//# sourceMappingURL=signTemplate.generated.d.ts.map