"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeZipDownloadStatusStateField = serializeZipDownloadStatusStateField;
exports.deserializeZipDownloadStatusStateField = deserializeZipDownloadStatusStateField;
exports.serializeZipDownloadStatus = serializeZipDownloadStatus;
exports.deserializeZipDownloadStatus = deserializeZipDownloadStatus;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeZipDownloadStatusStateField(val) {
    return val;
}
function deserializeZipDownloadStatusStateField(val) {
    if (val == 'in_progress') {
        return val;
    }
    if (val == 'failed') {
        return val;
    }
    if (val == 'succeeded') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ZipDownloadStatusStateField",
    });
}
function serializeZipDownloadStatus(val) {
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
function deserializeZipDownloadStatus(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ZipDownloadStatus"',
        });
    }
    if (!(val.total_file_count == void 0) && !(0, json_js_1.sdIsNumber)(val.total_file_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_file_count" of type "ZipDownloadStatus"',
        });
    }
    const totalFileCount = val.total_file_count == void 0 ? void 0 : val.total_file_count;
    if (!(val.downloaded_file_count == void 0) &&
        !(0, json_js_1.sdIsNumber)(val.downloaded_file_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "downloaded_file_count" of type "ZipDownloadStatus"',
        });
    }
    const downloadedFileCount = val.downloaded_file_count == void 0 ? void 0 : val.downloaded_file_count;
    if (!(val.skipped_file_count == void 0) &&
        !(0, json_js_1.sdIsNumber)(val.skipped_file_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "skipped_file_count" of type "ZipDownloadStatus"',
        });
    }
    const skippedFileCount = val.skipped_file_count == void 0 ? void 0 : val.skipped_file_count;
    if (!(val.skipped_folder_count == void 0) &&
        !(0, json_js_1.sdIsNumber)(val.skipped_folder_count)) {
        throw new errors_js_1.BoxSdkError({
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