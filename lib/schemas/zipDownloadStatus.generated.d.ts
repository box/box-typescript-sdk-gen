import { SerializedData } from '../serialization/json.js';
export type ZipDownloadStatusStateField = 'in_progress' | 'failed' | 'succeeded' | string;
export interface ZipDownloadStatus {
    /**
     * The total number of files in the archive. */
    readonly totalFileCount?: number;
    /**
     * The number of files that have already been downloaded. */
    readonly downloadedFileCount?: number;
    /**
     * The number of files that have been skipped as they could not be
     * downloaded. In many cases this is due to permission issues that have
     * surfaced between the creation of the request for the archive and the
     * archive being downloaded. */
    readonly skippedFileCount?: number;
    /**
     * The number of folders that have been skipped as they could not be
     * downloaded. In many cases this is due to permission issues that have
     * surfaced between the creation of the request for the archive and the
     * archive being downloaded. */
    readonly skippedFolderCount?: number;
    /**
     * The state of the archive being downloaded. */
    readonly state?: ZipDownloadStatusStateField;
    readonly rawData?: SerializedData;
}
export declare function serializeZipDownloadStatusStateField(val: ZipDownloadStatusStateField): SerializedData;
export declare function deserializeZipDownloadStatusStateField(val: SerializedData): ZipDownloadStatusStateField;
export declare function serializeZipDownloadStatus(val: ZipDownloadStatus): SerializedData;
export declare function deserializeZipDownloadStatus(val: SerializedData): ZipDownloadStatus;
//# sourceMappingURL=zipDownloadStatus.generated.d.ts.map