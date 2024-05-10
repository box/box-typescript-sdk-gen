import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type ZipDownloadStatusStateField =
  | 'in_progress'
  | 'failed'
  | 'succeeded';
export interface ZipDownloadStatus {
  readonly totalFileCount?: number;
  readonly downloadedFileCount?: number;
  readonly skippedFileCount?: number;
  readonly skippedFolderCount?: number;
  readonly state?: ZipDownloadStatusStateField;
}
export function serializeZipDownloadStatusStateField(
  val: ZipDownloadStatusStateField
): SerializedData {
  return val;
}
export function deserializeZipDownloadStatusStateField(
  val: any
): ZipDownloadStatusStateField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "ZipDownloadStatusStateField"',
    });
  }
  if (val == 'in_progress') {
    return 'in_progress';
  }
  if (val == 'failed') {
    return 'failed';
  }
  if (val == 'succeeded') {
    return 'succeeded';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeZipDownloadStatus(
  val: ZipDownloadStatus
): SerializedData {
  return {
    ['total_file_count']:
      val.totalFileCount == void 0 ? void 0 : val.totalFileCount,
    ['downloaded_file_count']:
      val.downloadedFileCount == void 0 ? void 0 : val.downloadedFileCount,
    ['skipped_file_count']:
      val.skippedFileCount == void 0 ? void 0 : val.skippedFileCount,
    ['skipped_folder_count']:
      val.skippedFolderCount == void 0 ? void 0 : val.skippedFolderCount,
    ['state']:
      val.state == void 0
        ? void 0
        : serializeZipDownloadStatusStateField(val.state),
  };
}
export function deserializeZipDownloadStatus(val: any): ZipDownloadStatus {
  const totalFileCount: undefined | number =
    val.total_file_count == void 0 ? void 0 : val.total_file_count;
  const downloadedFileCount: undefined | number =
    val.downloaded_file_count == void 0 ? void 0 : val.downloaded_file_count;
  const skippedFileCount: undefined | number =
    val.skipped_file_count == void 0 ? void 0 : val.skipped_file_count;
  const skippedFolderCount: undefined | number =
    val.skipped_folder_count == void 0 ? void 0 : val.skipped_folder_count;
  const state: undefined | ZipDownloadStatusStateField =
    val.state == void 0
      ? void 0
      : deserializeZipDownloadStatusStateField(val.state);
  return {
    totalFileCount: totalFileCount,
    downloadedFileCount: downloadedFileCount,
    skippedFileCount: skippedFileCount,
    skippedFolderCount: skippedFolderCount,
    state: state,
  } satisfies ZipDownloadStatus;
}
