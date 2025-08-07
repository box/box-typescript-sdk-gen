import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type ZipDownloadNameConflictsTypeField = 'file' | 'folder';
export interface ZipDownloadNameConflictsField {
    /**
     * The identifier of the item. */
    readonly id?: string;
    /**
     * The type of this item. */
    readonly type?: ZipDownloadNameConflictsTypeField;
    /**
     * Box Developer Documentation. */
    readonly originalName?: string;
    /**
     * The new name of this item as it will appear in the
     * downloaded `zip` archive. */
    readonly downloadName?: string;
    readonly rawData?: SerializedData;
}
export interface ZipDownload {
    /**
     * The URL that can be used to download the `zip` archive. A `Get` request to
     * this URL will start streaming the items requested. By default, this URL
     * is only valid for a few seconds, until the `expires_at` time, unless a
     * download is started after which it is valid for the duration of the
     * download.
     *
     * It is important to note that the domain and path of this URL might change
     * between API calls, and therefore it's important to use this URL as-is. */
    readonly downloadUrl?: string;
    /**
     * The URL that can be used to get the status of the `zip` archive being
     * downloaded. A `Get` request to this URL will return the number of files
     * in the archive as well as the number of items already downloaded or
     * skipped. By default, this URL is only valid for a few seconds, until the
     * `expires_at` time, unless a download is started after which the URL is
     * valid for 12 hours from the start of the download.
     *
     * It is important to note that the domain and path of this URL might change
     * between API calls, and therefore it's important to use this URL as-is. */
    readonly statusUrl?: string;
    /**
     * The time and date when this archive will expire. After this time the
     * `status_url` and `download_url` will return an error.
     *
     * By default, these URLs are only valid for a few seconds, unless a download
     * is started after which the `download_url` is valid for the duration of the
     * download, and the `status_url` is valid for 12 hours from the start of the
     * download. */
    readonly expiresAt?: DateTime;
    /**
     * A list of conflicts that occurred when trying to create the archive. This
     * would occur when multiple items have been requested with the
     * same name.
     *
     * To solve these conflicts, the API will automatically rename an item
     * and return a mapping between the original item's name and its new
     * name.
     *
     * For every conflict, both files will be renamed and therefore this list
     * will always be a multiple of 2. */
    readonly nameConflicts?: readonly (readonly ZipDownloadNameConflictsField[])[];
    readonly rawData?: SerializedData;
}
export declare function serializeZipDownloadNameConflictsTypeField(val: ZipDownloadNameConflictsTypeField): SerializedData;
export declare function deserializeZipDownloadNameConflictsTypeField(val: SerializedData): ZipDownloadNameConflictsTypeField;
export declare function serializeZipDownloadNameConflictsField(val: ZipDownloadNameConflictsField): SerializedData;
export declare function deserializeZipDownloadNameConflictsField(val: SerializedData): ZipDownloadNameConflictsField;
export declare function serializeZipDownload(val: ZipDownload): SerializedData;
export declare function deserializeZipDownload(val: SerializedData): ZipDownload;
