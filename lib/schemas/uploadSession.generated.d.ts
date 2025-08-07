import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type UploadSessionTypeField = 'upload_session';
export interface UploadSessionSessionEndpointsField {
    /**
     * The URL to upload parts to. */
    readonly uploadPart?: string;
    /**
     * The URL used to commit the file. */
    readonly commit?: string;
    /**
     * The URL for used to abort the session. */
    readonly abort?: string;
    /**
     * The URL users to list all parts. */
    readonly listParts?: string;
    /**
     * The URL used to get the status of the upload. */
    readonly status?: string;
    /**
     * The URL used to get the upload log from. */
    readonly logEvent?: string;
    readonly rawData?: SerializedData;
}
export interface UploadSession {
    /**
     * The unique identifier for this session. */
    readonly id?: string;
    /**
     * The value will always be `upload_session`. */
    readonly type?: UploadSessionTypeField;
    /**
     * The date and time when this session expires. */
    readonly sessionExpiresAt?: DateTime;
    /**
     * The  size in bytes that must be used for all parts of of the
     * upload.
     *
     * Only the last part is allowed to be of a smaller size. */
    readonly partSize?: number;
    /**
     * The total number of parts expected in this upload session,
     * as determined by the file size and part size. */
    readonly totalParts?: number;
    /**
     * The number of parts that have been uploaded and processed
     * by the server. This starts at `0`.
     *
     * When committing a file files, inspecting this property can
     * provide insight if all parts have been uploaded correctly. */
    readonly numPartsProcessed?: number;
    readonly sessionEndpoints?: UploadSessionSessionEndpointsField;
    readonly rawData?: SerializedData;
}
export declare function serializeUploadSessionTypeField(val: UploadSessionTypeField): SerializedData;
export declare function deserializeUploadSessionTypeField(val: SerializedData): UploadSessionTypeField;
export declare function serializeUploadSessionSessionEndpointsField(val: UploadSessionSessionEndpointsField): SerializedData;
export declare function deserializeUploadSessionSessionEndpointsField(val: SerializedData): UploadSessionSessionEndpointsField;
export declare function serializeUploadSession(val: UploadSession): SerializedData;
export declare function deserializeUploadSession(val: SerializedData): UploadSession;
//# sourceMappingURL=uploadSession.generated.d.ts.map