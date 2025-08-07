import { SignRequestCreateSigner } from './signRequestCreateSigner.generated.js';
import { SignRequestSignerInput } from './signRequestSignerInput.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type SignRequestSignerSignerDecisionTypeField = 'signed' | 'declined';
export interface SignRequestSignerSignerDecisionField {
    /**
     * Type of decision made by the signer. */
    readonly type?: SignRequestSignerSignerDecisionTypeField;
    /**
     * Date and Time that the decision was made. */
    readonly finalizedAt?: DateTime;
    /**
     * Additional info about the decision, such as the decline reason from the signer. */
    readonly additionalInfo?: string | null;
    readonly rawData?: SerializedData;
}
export type SignRequestSigner = SignRequestCreateSigner & {
    /**
     * Set to `true` if the signer views the document. */
    readonly hasViewedDocument?: boolean;
    /**
     * Final decision made by the signer. */
    readonly signerDecision?: SignRequestSignerSignerDecisionField | null;
    readonly inputs?: readonly SignRequestSignerInput[];
    /**
     * URL to direct a signer to for signing. */
    readonly embedUrl?: string | null;
    /**
     * This URL is specifically designed for
     * signing documents within an HTML `iframe` tag.
     * It will be returned in the response
     * only if the `embed_url_external_user_id`
     * parameter was passed in the
     * `create Box Sign request` call. */
    readonly iframeableEmbedUrl?: string | null;
};
export declare function serializeSignRequestSignerSignerDecisionTypeField(val: SignRequestSignerSignerDecisionTypeField): SerializedData;
export declare function deserializeSignRequestSignerSignerDecisionTypeField(val: SerializedData): SignRequestSignerSignerDecisionTypeField;
export declare function serializeSignRequestSignerSignerDecisionField(val: SignRequestSignerSignerDecisionField): SerializedData;
export declare function deserializeSignRequestSignerSignerDecisionField(val: SerializedData): SignRequestSignerSignerDecisionField;
export declare function serializeSignRequestSigner(val: SignRequestSigner): SerializedData;
export declare function deserializeSignRequestSigner(val: SerializedData): SignRequestSigner;
//# sourceMappingURL=signRequestSigner.generated.d.ts.map