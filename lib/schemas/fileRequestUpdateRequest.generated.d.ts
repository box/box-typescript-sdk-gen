import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type FileRequestUpdateRequestStatusField = 'active' | 'inactive' | string;
export interface FileRequestUpdateRequest {
    /**
     * An optional new title for the file request. This can be
     * used to change the title of the file request.
     *
     * This will default to the value on the existing file request. */
    readonly title?: string;
    /**
     * An optional new description for the file request. This can be
     * used to change the description of the file request.
     *
     * This will default to the value on the existing file request. */
    readonly description?: string;
    /**
     * An optional new status of the file request.
     *
     * When the status is set to `inactive`, the file request
     * will no longer accept new submissions, and any visitor
     * to the file request URL will receive a `HTTP 404` status
     * code.
     *
     * This will default to the value on the existing file request. */
    readonly status?: FileRequestUpdateRequestStatusField;
    /**
     * Whether a file request submitter is required to provide
     * their email address.
     *
     * When this setting is set to true, the Box UI will show
     * an email field on the file request form.
     *
     * This will default to the value on the existing file request. */
    readonly isEmailRequired?: boolean;
    /**
     * Whether a file request submitter is required to provide
     * a description of the files they are submitting.
     *
     * When this setting is set to true, the Box UI will show
     * a description field on the file request form.
     *
     * This will default to the value on the existing file request. */
    readonly isDescriptionRequired?: boolean;
    /**
     * The date after which a file request will no longer accept new
     * submissions.
     *
     * After this date, the `status` will automatically be set to
     * `inactive`.
     *
     * This will default to the value on the existing file request. */
    readonly expiresAt?: DateTime;
    readonly rawData?: SerializedData;
}
export declare function serializeFileRequestUpdateRequestStatusField(val: FileRequestUpdateRequestStatusField): SerializedData;
export declare function deserializeFileRequestUpdateRequestStatusField(val: SerializedData): FileRequestUpdateRequestStatusField;
export declare function serializeFileRequestUpdateRequest(val: FileRequestUpdateRequest): SerializedData;
export declare function deserializeFileRequestUpdateRequest(val: SerializedData): FileRequestUpdateRequest;
//# sourceMappingURL=fileRequestUpdateRequest.generated.d.ts.map