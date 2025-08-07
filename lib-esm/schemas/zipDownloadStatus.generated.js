import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeZipDownloadStatusStateField(val) {
    return val;
}
export function deserializeZipDownloadStatusStateField(val) {
    if (val == 'in_progress') {
        return val;
    }
    if (val == 'failed') {
        return val;
    }
    if (val == 'succeeded') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ZipDownloadStatusStateField",
    });
}
export function serializeZipDownloadStatus(val) {
    return {
        ['total_file_count']: val.totalFileCount,
        ['downloaded_file_count']: val.downloadedFileCount,
        ['skipped_file_count']: val.skippedFileCount,
        ['skipped_folder_count']: val.skippedFolderCount,
        ['state']: val.state == void 0
            ? val.state
            : serializeZipDownloadStatusStateField(val.state),
    };
}
export function deserializeZipDownloadStatus(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ZipDownloadStatus"',
        });
    }
    if (!(val.total_file_count == void 0) && !sdIsNumber(val.total_file_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "total_file_count" of type "ZipDownloadStatus"',
        });
    }
    const totalFileCount = val.total_file_count == void 0 ? void 0 : val.total_file_count;
    if (!(val.downloaded_file_count == void 0) &&
        !sdIsNumber(val.downloaded_file_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "downloaded_file_count" of type "ZipDownloadStatus"',
        });
    }
    const downloadedFileCount = val.downloaded_file_count == void 0 ? void 0 : val.downloaded_file_count;
    if (!(val.skipped_file_count == void 0) &&
        !sdIsNumber(val.skipped_file_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "skipped_file_count" of type "ZipDownloadStatus"',
        });
    }
    const skippedFileCount = val.skipped_file_count == void 0 ? void 0 : val.skipped_file_count;
    if (!(val.skipped_folder_count == void 0) &&
        !sdIsNumber(val.skipped_folder_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "skipped_folder_count" of type "ZipDownloadStatus"',
        });
    }
    const skippedFolderCount = val.skipped_folder_count == void 0 ? void 0 : val.skipped_folder_count;
    const state = val.state == void 0
        ? void 0
        : deserializeZipDownloadStatusStateField(val.state);
    return {
        totalFileCount: totalFileCount,
        downloadedFileCount: downloadedFileCount,
        skippedFileCount: skippedFileCount,
        skippedFolderCount: skippedFolderCount,
        state: state,
    };
}
//# sourceMappingURL=zipDownloadStatus.generated.js.map