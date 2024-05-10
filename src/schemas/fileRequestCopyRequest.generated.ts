import { serializeFileRequestUpdateRequestStatusField } from './fileRequestUpdateRequest.generated.js';
import { deserializeFileRequestUpdateRequestStatusField } from './fileRequestUpdateRequest.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { serializeFileRequestUpdateRequest } from './fileRequestUpdateRequest.generated.js';
import { deserializeFileRequestUpdateRequest } from './fileRequestUpdateRequest.generated.js';
import { FileRequestUpdateRequestStatusField } from './fileRequestUpdateRequest.generated.js';
import { DateTime } from '../internal/utils.js';
import { FileRequestUpdateRequest } from './fileRequestUpdateRequest.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type FileRequestCopyRequestFolderTypeField = 'folder';
export interface FileRequestCopyRequestFolderField {
  readonly type?: FileRequestCopyRequestFolderTypeField;
  readonly id: string;
}
export type FileRequestCopyRequest = FileRequestUpdateRequest & {
  readonly folder: FileRequestCopyRequestFolderField;
};
export function serializeFileRequestCopyRequestFolderTypeField(
  val: FileRequestCopyRequestFolderTypeField
): SerializedData {
  return val;
}
export function deserializeFileRequestCopyRequestFolderTypeField(
  val: any
): FileRequestCopyRequestFolderTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FileRequestCopyRequestFolderTypeField"',
    });
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFileRequestCopyRequestFolderField(
  val: FileRequestCopyRequestFolderField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeFileRequestCopyRequestFolderTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeFileRequestCopyRequestFolderField(
  val: any
): FileRequestCopyRequestFolderField {
  const type: undefined | FileRequestCopyRequestFolderTypeField =
    val.type == void 0
      ? void 0
      : deserializeFileRequestCopyRequestFolderTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies FileRequestCopyRequestFolderField;
}
export function serializeFileRequestCopyRequest(
  val: FileRequestCopyRequest
): SerializedData {
  const base: any = serializeFileRequestUpdateRequest(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "FileRequestCopyRequest"',
    });
  }
  return {
    ...base,
    ...{ ['folder']: serializeFileRequestCopyRequestFolderField(val.folder) },
  };
}
export function deserializeFileRequestCopyRequest(
  val: any
): FileRequestCopyRequest {
  const folder: FileRequestCopyRequestFolderField =
    deserializeFileRequestCopyRequestFolderField(val.folder);
  const title: undefined | string = val.title == void 0 ? void 0 : val.title;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const status: undefined | FileRequestUpdateRequestStatusField =
    val.status == void 0
      ? void 0
      : deserializeFileRequestUpdateRequestStatusField(val.status);
  const isEmailRequired: undefined | boolean =
    val.is_email_required == void 0 ? void 0 : val.is_email_required;
  const isDescriptionRequired: undefined | boolean =
    val.is_description_required == void 0
      ? void 0
      : val.is_description_required;
  const expiresAt: undefined | DateTime =
    val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
  return {
    folder: folder,
    title: title,
    description: description,
    status: status,
    isEmailRequired: isEmailRequired,
    isDescriptionRequired: isDescriptionRequired,
    expiresAt: expiresAt,
  } satisfies FileRequestCopyRequest;
}
