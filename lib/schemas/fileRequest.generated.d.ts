import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type FileRequestTypeField = 'file_request';
export type FileRequestStatusField = 'active' | 'inactive' | string;
export declare class FileRequest {
    /**
     * The unique identifier for this file request. */
    readonly id: string;
    /**
     * The value will always be `file_request`. */
    readonly type: FileRequestTypeField;
    /**
     * The title of file request. This is shown
     * in the Box UI to users uploading files.
     *
     * This defaults to title of the file request that was
     * copied to create this file request. */
    readonly title?: string;
    /**
     * The optional description of this file request. This is
     * shown in the Box UI to users uploading files.
     *
     * This defaults to description of the file request that was
     * copied to create this file request. */
    readonly description?: string | null;
    /**
     * The status of the file request. This defaults
     * to `active`.
     *
     * When the status is set to `inactive`, the file request
     * will no longer accept new submissions, and any visitor
     * to the file request URL will receive a `HTTP 404` status
     * code.
     *
     * This defaults to status of file request that was
     * copied to create this file request. */
    readonly status?: FileRequestStatusField;
    /**
     * Whether a file request submitter is required to provide
     * their email address.
     *
     * When this setting is set to true, the Box UI will show
     * an email field on the file request form.
     *
     * This defaults to setting of file request that was
     * copied to create this file request. */
    readonly isEmailRequired?: boolean;
    /**
     * Whether a file request submitter is required to provide
     * a description of the files they are submitting.
     *
     * When this setting is set to true, the Box UI will show
     * a description field on the file request form.
     *
     * This defaults to setting of file request that was
     * copied to create this file request. */
    readonly isDescriptionRequired?: boolean;
    /**
     * The date after which a file request will no longer accept new
     * submissions.
     *
     * After this date, the `status` will automatically be set to
     * `inactive`. */
    readonly expiresAt?: DateTime;
    readonly folder: FolderMini;
    /**
     * The generated URL for this file request. This URL can be shared
     * with users to let them upload files to the associated folder. */
    readonly url?: string;
    /**
     * The HTTP `etag` of this file. This can be used in combination with
     * the `If-Match` header when updating a file request. By providing that
     * header, a change will only be performed on the  file request if the `etag`
     * on the file request still matches the `etag` provided in the `If-Match`
     * header. */
    readonly etag?: string | null;
    readonly createdBy?: UserMini;
    /**
     * The date and time when the file request was created. */
    readonly createdAt: DateTime;
    readonly updatedBy?: UserMini;
    /**
     * The date and time when the file request was last updated. */
    readonly updatedAt: DateTime;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<FileRequest, 'type'> & Partial<Pick<FileRequest, 'type'>>);
}
export interface FileRequestInput {
    /**
     * The unique identifier for this file request. */
    readonly id: string;
    /**
     * The value will always be `file_request`. */
    readonly type?: FileRequestTypeField;
    /**
     * The title of file request. This is shown
     * in the Box UI to users uploading files.
     *
     * This defaults to title of the file request that was
     * copied to create this file request. */
    readonly title?: string;
    /**
     * The optional description of this file request. This is
     * shown in the Box UI to users uploading files.
     *
     * This defaults to description of the file request that was
     * copied to create this file request. */
    readonly description?: string | null;
    /**
     * The status of the file request. This defaults
     * to `active`.
     *
     * When the status is set to `inactive`, the file request
     * will no longer accept new submissions, and any visitor
     * to the file request URL will receive a `HTTP 404` status
     * code.
     *
     * This defaults to status of file request that was
     * copied to create this file request. */
    readonly status?: FileRequestStatusField;
    /**
     * Whether a file request submitter is required to provide
     * their email address.
     *
     * When this setting is set to true, the Box UI will show
     * an email field on the file request form.
     *
     * This defaults to setting of file request that was
     * copied to create this file request. */
    readonly isEmailRequired?: boolean;
    /**
     * Whether a file request submitter is required to provide
     * a description of the files they are submitting.
     *
     * When this setting is set to true, the Box UI will show
     * a description field on the file request form.
     *
     * This defaults to setting of file request that was
     * copied to create this file request. */
    readonly isDescriptionRequired?: boolean;
    /**
     * The date after which a file request will no longer accept new
     * submissions.
     *
     * After this date, the `status` will automatically be set to
     * `inactive`. */
    readonly expiresAt?: DateTime;
    readonly folder: FolderMini;
    /**
     * The generated URL for this file request. This URL can be shared
     * with users to let them upload files to the associated folder. */
    readonly url?: string;
    /**
     * The HTTP `etag` of this file. This can be used in combination with
     * the `If-Match` header when updating a file request. By providing that
     * header, a change will only be performed on the  file request if the `etag`
     * on the file request still matches the `etag` provided in the `If-Match`
     * header. */
    readonly etag?: string | null;
    readonly createdBy?: UserMini;
    /**
     * The date and time when the file request was created. */
    readonly createdAt: DateTime;
    readonly updatedBy?: UserMini;
    /**
     * The date and time when the file request was last updated. */
    readonly updatedAt: DateTime;
    readonly rawData?: SerializedData;
}
export declare function serializeFileRequestTypeField(val: FileRequestTypeField): SerializedData;
export declare function deserializeFileRequestTypeField(val: SerializedData): FileRequestTypeField;
export declare function serializeFileRequestStatusField(val: FileRequestStatusField): SerializedData;
export declare function deserializeFileRequestStatusField(val: SerializedData): FileRequestStatusField;
export declare function serializeFileRequest(val: FileRequest): SerializedData;
export declare function deserializeFileRequest(val: SerializedData): FileRequest;
export declare function serializeFileRequestInput(val: FileRequestInput): SerializedData;
export declare function deserializeFileRequestInput(val: SerializedData): FileRequestInput;
//# sourceMappingURL=fileRequest.generated.d.ts.map