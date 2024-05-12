import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type FileRequestTypeField = 'file_request';
export type FileRequestStatusField = 'active' | 'inactive';
export class FileRequest {
  readonly id!: string;
  readonly type: FileRequestTypeField = 'file_request' as FileRequestTypeField;
  readonly title?: string;
  readonly description?: string;
  readonly status?: FileRequestStatusField;
  readonly isEmailRequired?: boolean;
  readonly isDescriptionRequired?: boolean;
  readonly expiresAt?: DateTime;
  readonly folder!: FolderMini;
  readonly url?: string;
  readonly etag?: string;
  readonly createdBy?: UserMini;
  readonly createdAt!: DateTime;
  readonly updatedBy?: UserMini;
  readonly updatedAt!: DateTime;
  constructor(
    fields: Omit<FileRequest, 'type'> & Partial<Pick<FileRequest, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.title) {
      this.title = fields.title;
    }
    if (fields.description) {
      this.description = fields.description;
    }
    if (fields.status) {
      this.status = fields.status;
    }
    if (fields.isEmailRequired) {
      this.isEmailRequired = fields.isEmailRequired;
    }
    if (fields.isDescriptionRequired) {
      this.isDescriptionRequired = fields.isDescriptionRequired;
    }
    if (fields.expiresAt) {
      this.expiresAt = fields.expiresAt;
    }
    if (fields.folder) {
      this.folder = fields.folder;
    }
    if (fields.url) {
      this.url = fields.url;
    }
    if (fields.etag) {
      this.etag = fields.etag;
    }
    if (fields.createdBy) {
      this.createdBy = fields.createdBy;
    }
    if (fields.createdAt) {
      this.createdAt = fields.createdAt;
    }
    if (fields.updatedBy) {
      this.updatedBy = fields.updatedBy;
    }
    if (fields.updatedAt) {
      this.updatedAt = fields.updatedAt;
    }
  }
}
export interface FileRequestInput {
  readonly id: string;
  readonly type?: FileRequestTypeField;
  readonly title?: string;
  readonly description?: string;
  readonly status?: FileRequestStatusField;
  readonly isEmailRequired?: boolean;
  readonly isDescriptionRequired?: boolean;
  readonly expiresAt?: DateTime;
  readonly folder: FolderMini;
  readonly url?: string;
  readonly etag?: string;
  readonly createdBy?: UserMini;
  readonly createdAt: DateTime;
  readonly updatedBy?: UserMini;
  readonly updatedAt: DateTime;
}
export function serializeFileRequestTypeField(
  val: FileRequestTypeField
): SerializedData {
  return val;
}
export function deserializeFileRequestTypeField(
  val: any
): FileRequestTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FileRequestTypeField"',
    });
  }
  if (val == 'file_request') {
    return 'file_request';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFileRequestStatusField(
  val: FileRequestStatusField
): SerializedData {
  return val;
}
export function deserializeFileRequestStatusField(
  val: any
): FileRequestStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FileRequestStatusField"',
    });
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'inactive') {
    return 'inactive';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFileRequest(val: FileRequest): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeFileRequestTypeField(val.type),
    ['title']: val.title == void 0 ? void 0 : val.title,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['status']:
      val.status == void 0
        ? void 0
        : serializeFileRequestStatusField(val.status),
    ['is_email_required']:
      val.isEmailRequired == void 0 ? void 0 : val.isEmailRequired,
    ['is_description_required']:
      val.isDescriptionRequired == void 0 ? void 0 : val.isDescriptionRequired,
    ['expires_at']:
      val.expiresAt == void 0 ? void 0 : serializeDateTime(val.expiresAt),
    ['folder']: serializeFolderMini(val.folder),
    ['url']: val.url == void 0 ? void 0 : val.url,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['created_at']: serializeDateTime(val.createdAt),
    ['updated_by']:
      val.updatedBy == void 0 ? void 0 : serializeUserMini(val.updatedBy),
    ['updated_at']: serializeDateTime(val.updatedAt),
  };
}
export function deserializeFileRequest(val: any): FileRequest {
  const id: string = val.id;
  const type: FileRequestTypeField = deserializeFileRequestTypeField(val.type);
  const title: undefined | string = val.title == void 0 ? void 0 : val.title;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const status: undefined | FileRequestStatusField =
    val.status == void 0
      ? void 0
      : deserializeFileRequestStatusField(val.status);
  const isEmailRequired: undefined | boolean =
    val.is_email_required == void 0 ? void 0 : val.is_email_required;
  const isDescriptionRequired: undefined | boolean =
    val.is_description_required == void 0
      ? void 0
      : val.is_description_required;
  const expiresAt: undefined | DateTime =
    val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
  const folder: FolderMini = deserializeFolderMini(val.folder);
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const createdAt: DateTime = deserializeDateTime(val.created_at);
  const updatedBy: undefined | UserMini =
    val.updated_by == void 0 ? void 0 : deserializeUserMini(val.updated_by);
  const updatedAt: DateTime = deserializeDateTime(val.updated_at);
  return {
    id: id,
    type: type,
    title: title,
    description: description,
    status: status,
    isEmailRequired: isEmailRequired,
    isDescriptionRequired: isDescriptionRequired,
    expiresAt: expiresAt,
    folder: folder,
    url: url,
    etag: etag,
    createdBy: createdBy,
    createdAt: createdAt,
    updatedBy: updatedBy,
    updatedAt: updatedAt,
  } satisfies FileRequest;
}
export function serializeFileRequestInput(
  val: FileRequestInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeFileRequestTypeField(val.type),
    ['title']: val.title == void 0 ? void 0 : val.title,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['status']:
      val.status == void 0
        ? void 0
        : serializeFileRequestStatusField(val.status),
    ['is_email_required']:
      val.isEmailRequired == void 0 ? void 0 : val.isEmailRequired,
    ['is_description_required']:
      val.isDescriptionRequired == void 0 ? void 0 : val.isDescriptionRequired,
    ['expires_at']:
      val.expiresAt == void 0 ? void 0 : serializeDateTime(val.expiresAt),
    ['folder']: serializeFolderMini(val.folder),
    ['url']: val.url == void 0 ? void 0 : val.url,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['created_at']: serializeDateTime(val.createdAt),
    ['updated_by']:
      val.updatedBy == void 0 ? void 0 : serializeUserMini(val.updatedBy),
    ['updated_at']: serializeDateTime(val.updatedAt),
  };
}
export function deserializeFileRequestInput(val: any): FileRequestInput {
  const id: string = val.id;
  const type: undefined | FileRequestTypeField =
    val.type == void 0 ? void 0 : deserializeFileRequestTypeField(val.type);
  const title: undefined | string = val.title == void 0 ? void 0 : val.title;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const status: undefined | FileRequestStatusField =
    val.status == void 0
      ? void 0
      : deserializeFileRequestStatusField(val.status);
  const isEmailRequired: undefined | boolean =
    val.is_email_required == void 0 ? void 0 : val.is_email_required;
  const isDescriptionRequired: undefined | boolean =
    val.is_description_required == void 0
      ? void 0
      : val.is_description_required;
  const expiresAt: undefined | DateTime =
    val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
  const folder: FolderMini = deserializeFolderMini(val.folder);
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const createdAt: DateTime = deserializeDateTime(val.created_at);
  const updatedBy: undefined | UserMini =
    val.updated_by == void 0 ? void 0 : deserializeUserMini(val.updated_by);
  const updatedAt: DateTime = deserializeDateTime(val.updated_at);
  return {
    id: id,
    type: type,
    title: title,
    description: description,
    status: status,
    isEmailRequired: isEmailRequired,
    isDescriptionRequired: isDescriptionRequired,
    expiresAt: expiresAt,
    folder: folder,
    url: url,
    etag: etag,
    createdBy: createdBy,
    createdAt: createdAt,
    updatedBy: updatedBy,
    updatedAt: updatedAt,
  } satisfies FileRequestInput;
}
