import { SignRequestBase } from './signRequestBase.generated.js';
import { FileBase } from './fileBase.generated.js';
import { SignRequestSigner } from './signRequestSigner.generated.js';
import { FileMini } from './fileMini.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type SignRequestTypeField = 'sign-request';
export type SignRequestStatusField = 'converting' | 'created' | 'sent' | 'viewed' | 'signed' | 'cancelled' | 'declined' | 'error_converting' | 'error_sending' | 'expired' | 'finalizing' | 'error_finalizing' | string;
export interface SignRequestSignFilesField {
    readonly files?: readonly FileMini[];
    /**
     * Indicates whether the `sign_files` documents are processing
     * and the PDFs may be out of date. A change to any document
     * requires processing on all `sign_files`. We
     * recommended waiting until processing is finished
     * (and this value is true) before downloading the PDFs. */
    readonly isReadyForDownload?: boolean;
    readonly rawData?: SerializedData;
}
export type SignRequest = SignRequestBase & {
    /**
     * The value will always be `sign-request`. */
    readonly type?: SignRequestTypeField;
    /**
     * List of files to create a signing document from. This is currently limited to ten files. Only the ID and type fields are required for each file. */
    readonly sourceFiles?: readonly FileBase[];
    /**
     * Array of signers for the signature request. */
    readonly signers?: readonly SignRequestSigner[];
    /**
     * Force a specific color for the signature (blue, black, or red). */
    readonly signatureColor?: string | null;
    /**
     * Box Sign request ID. */
    readonly id?: string;
    /**
     * This URL is returned if `is_document_preparation_needed` is
     * set to `true` in the request. The parameter is used to prepare
     * the signature request
     * using the UI. The signature request is not
     * sent until the preparation
     * phase is complete. */
    readonly prepareUrl?: string | null;
    readonly signingLog?: FileMini;
    /**
     * Describes the status of the signature request. */
    readonly status?: SignRequestStatusField;
    /**
     * List of files that will be signed, which are copies of the original
     * source files. A new version of these files are created as signers sign
     * and can be downloaded at any point in the signing process. */
    readonly signFiles?: SignRequestSignFilesField;
    /**
     * Uses `days_valid` to calculate the date and time, in GMT, the sign request will expire if unsigned. */
    readonly autoExpireAt?: DateTime | null;
    readonly parentFolder?: FolderMini;
    /**
     * The collaborator level of the user to the sign request. Values can include "owner", "editor", and "viewer". */
    readonly collaboratorLevel?: string | null;
    /**
     * The email address of the sender of the sign request. */
    readonly senderEmail?: string | null;
    /**
     * The user ID of the sender of the sign request. */
    readonly senderId?: number | null;
};
export declare function serializeSignRequestTypeField(val: SignRequestTypeField): SerializedData;
export declare function deserializeSignRequestTypeField(val: SerializedData): SignRequestTypeField;
export declare function serializeSignRequestStatusField(val: SignRequestStatusField): SerializedData;
export declare function deserializeSignRequestStatusField(val: SerializedData): SignRequestStatusField;
export declare function serializeSignRequestSignFilesField(val: SignRequestSignFilesField): SerializedData;
export declare function deserializeSignRequestSignFilesField(val: SerializedData): SignRequestSignFilesField;
export declare function serializeSignRequest(val: SignRequest): SerializedData;
export declare function deserializeSignRequest(val: SerializedData): SignRequest;
//# sourceMappingURL=signRequest.generated.d.ts.map