import { SerializedData } from '../serialization/json.js';
export type SignRequestCreateSignerRoleField = 'signer' | 'approver' | 'final_copy_reader' | string;
export interface SignRequestCreateSigner {
    /**
     * Email address of the signer.
     * The email address of the signer is required when making signature requests, except when using templates that are configured to include emails. */
    readonly email?: string | null;
    /**
     * Defines the role of the signer in the signature request. A `signer`
     * must sign the document and an `approver` must approve the document. A
     * `final_copy_reader` only receives the final signed document and signing
     * log. */
    readonly role?: SignRequestCreateSignerRoleField;
    /**
     * Used in combination with an embed URL for a sender. After the
     * sender signs, they are redirected to the next `in_person` signer. */
    readonly isInPerson?: boolean;
    /**
     * Order of the signer. */
    readonly order?: number;
    /**
     * User ID for the signer in an external application responsible
     * for authentication when accessing the embed URL. */
    readonly embedUrlExternalUserId?: string | null;
    /**
     * The URL that a signer will be redirected
     * to after signing a document. Defining this URL
     * overrides default or global redirect URL
     * settings for a specific signer.
     * If no declined redirect URL is specified,
     * this URL will be used for decline actions as well. */
    readonly redirectUrl?: string | null;
    /**
     * The URL that a signer will be redirect
     * to after declining to sign a document.
     * Defining this URL overrides default or global
     * declined redirect URL settings for a specific signer. */
    readonly declinedRedirectUrl?: string | null;
    /**
     * If set to true, the signer will need to log in to a Box account
     * before signing the request. If the signer does not have
     * an existing account, they will have the option to create
     * a free Box account. */
    readonly loginRequired?: boolean | null;
    /**
     * If set, this phone number will be used to verify the signer
     * via two-factor authentication before they are able to sign the document.
     * Cannot be selected in combination with `login_required`. */
    readonly verificationPhoneNumber?: string | null;
    /**
     * If set, the signer is required to enter the password before they are able
     * to sign a document. This field is write only. */
    readonly password?: string | null;
    /**
     * If set, signers who have the same value will be assigned to the same input and to the same signer group.
     * A signer group is not a Box Group. It is an entity that belongs to a Sign Request and can only be
     * used/accessed within this Sign Request. A signer group is expected to have more than one signer.
     * If the provided value is only used for one signer, this value will be ignored and request will be handled
     * as it was intended for an individual signer. The value provided can be any string and only used to
     * determine which signers belongs to same group. A successful response will provide a generated UUID value
     * instead for signers in the same signer group. */
    readonly signerGroupId?: string | null;
    /**
     * If true, no emails about the sign request will be sent. */
    readonly suppressNotifications?: boolean | null;
    readonly rawData?: SerializedData;
}
export declare function serializeSignRequestCreateSignerRoleField(val: SignRequestCreateSignerRoleField): SerializedData;
export declare function deserializeSignRequestCreateSignerRoleField(val: SerializedData): SignRequestCreateSignerRoleField;
export declare function serializeSignRequestCreateSigner(val: SignRequestCreateSigner): SerializedData;
export declare function deserializeSignRequestCreateSigner(val: SerializedData): SignRequestCreateSigner;
