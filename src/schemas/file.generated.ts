import { serializeFileBaseTypeField } from './fileBase.generated.js';
import { deserializeFileBaseTypeField } from './fileBase.generated.js';
import { serializeFileBase } from './fileBase.generated.js';
import { deserializeFileBase } from './fileBase.generated.js';
import { serializeFileVersionMini } from './fileVersionMini.generated.js';
import { deserializeFileVersionMini } from './fileVersionMini.generated.js';
import { serializeFileMini } from './fileMini.generated.js';
import { deserializeFileMini } from './fileMini.generated.js';
import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FileBaseTypeField } from './fileBase.generated.js';
import { FileBase } from './fileBase.generated.js';
import { FileVersionMini } from './fileVersionMini.generated.js';
import { FileMini } from './fileMini.generated.js';
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
export interface FilePathCollectionField {
  readonly totalCount: number;
  readonly entries: readonly FolderMini[];
}
export type FileSharedLinkAccessField = 'open' | 'company' | 'collaborators';
export type FileSharedLinkEffectiveAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export type FileSharedLinkEffectivePermissionField =
  | 'can_edit'
  | 'can_download'
  | 'can_preview'
  | 'no_access';
export interface FileSharedLinkPermissionsField {
  readonly canDownload: boolean;
  readonly canPreview: boolean;
  readonly canEdit: boolean;
}
export interface FileSharedLinkField {
  readonly url: string;
  readonly downloadUrl?: string;
  readonly vanityUrl?: string;
  readonly vanityName?: string;
  readonly access?: FileSharedLinkAccessField;
  readonly effectiveAccess: FileSharedLinkEffectiveAccessField;
  readonly effectivePermission: FileSharedLinkEffectivePermissionField;
  readonly unsharedAt?: DateTime;
  readonly isPasswordEnabled: boolean;
  readonly permissions?: FileSharedLinkPermissionsField;
  readonly downloadCount: number;
  readonly previewCount: number;
}
export type FileItemStatusField = 'active' | 'trashed' | 'deleted';
export class File extends FileMini {
  readonly description?: string;
  readonly size?: number;
  readonly pathCollection?: FilePathCollectionField;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  readonly trashedAt?: DateTime;
  readonly purgedAt?: DateTime;
  readonly contentCreatedAt?: DateTime;
  readonly contentModifiedAt?: DateTime;
  readonly createdBy?: UserMini;
  readonly modifiedBy?: UserMini;
  readonly ownedBy?: UserMini;
  readonly sharedLink?: FileSharedLinkField;
  readonly parent?: FolderMini;
  readonly itemStatus?: FileItemStatusField;
  constructor(fields: File) {
    super(fields);
  }
}
export function serializeFilePathCollectionField(
  val: FilePathCollectionField
): SerializedData {
  return {
    ['total_count']: val.totalCount,
    ['entries']: val.entries.map(function (item: FolderMini): SerializedData {
      return serializeFolderMini(item);
    }) as readonly any[],
  };
}
export function deserializeFilePathCollectionField(
  val: any
): FilePathCollectionField {
  const totalCount: number = val.total_count;
  const entries: readonly FolderMini[] = sdIsList(val.entries)
    ? (val.entries.map(function (itm: SerializedData): FolderMini {
        return deserializeFolderMini(itm);
      }) as readonly any[])
    : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies FilePathCollectionField;
}
export function serializeFileSharedLinkAccessField(
  val: FileSharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeFileSharedLinkAccessField(
  val: any
): FileSharedLinkAccessField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FileSharedLinkAccessField"',
    });
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'company') {
    return 'company';
  }
  if (val == 'collaborators') {
    return 'collaborators';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFileSharedLinkEffectiveAccessField(
  val: FileSharedLinkEffectiveAccessField
): SerializedData {
  return val;
}
export function deserializeFileSharedLinkEffectiveAccessField(
  val: any
): FileSharedLinkEffectiveAccessField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FileSharedLinkEffectiveAccessField"',
    });
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'company') {
    return 'company';
  }
  if (val == 'collaborators') {
    return 'collaborators';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFileSharedLinkEffectivePermissionField(
  val: FileSharedLinkEffectivePermissionField
): SerializedData {
  return val;
}
export function deserializeFileSharedLinkEffectivePermissionField(
  val: any
): FileSharedLinkEffectivePermissionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "FileSharedLinkEffectivePermissionField"',
    });
  }
  if (val == 'can_edit') {
    return 'can_edit';
  }
  if (val == 'can_download') {
    return 'can_download';
  }
  if (val == 'can_preview') {
    return 'can_preview';
  }
  if (val == 'no_access') {
    return 'no_access';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFileSharedLinkPermissionsField(
  val: FileSharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload,
    ['can_preview']: val.canPreview,
    ['can_edit']: val.canEdit,
  };
}
export function deserializeFileSharedLinkPermissionsField(
  val: any
): FileSharedLinkPermissionsField {
  const canDownload: boolean = val.can_download;
  const canPreview: boolean = val.can_preview;
  const canEdit: boolean = val.can_edit;
  return {
    canDownload: canDownload,
    canPreview: canPreview,
    canEdit: canEdit,
  } satisfies FileSharedLinkPermissionsField;
}
export function serializeFileSharedLinkField(
  val: FileSharedLinkField
): SerializedData {
  return {
    ['url']: val.url,
    ['download_url']: val.downloadUrl == void 0 ? void 0 : val.downloadUrl,
    ['vanity_url']: val.vanityUrl == void 0 ? void 0 : val.vanityUrl,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['access']:
      val.access == void 0
        ? void 0
        : serializeFileSharedLinkAccessField(val.access),
    ['effective_access']: serializeFileSharedLinkEffectiveAccessField(
      val.effectiveAccess
    ),
    ['effective_permission']: serializeFileSharedLinkEffectivePermissionField(
      val.effectivePermission
    ),
    ['unshared_at']:
      val.unsharedAt == void 0 ? void 0 : serializeDateTime(val.unsharedAt),
    ['is_password_enabled']: val.isPasswordEnabled,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeFileSharedLinkPermissionsField(val.permissions),
    ['download_count']: val.downloadCount,
    ['preview_count']: val.previewCount,
  };
}
export function deserializeFileSharedLinkField(val: any): FileSharedLinkField {
  const url: string = val.url;
  const downloadUrl: undefined | string =
    val.download_url == void 0 ? void 0 : val.download_url;
  const vanityUrl: undefined | string =
    val.vanity_url == void 0 ? void 0 : val.vanity_url;
  const vanityName: undefined | string =
    val.vanity_name == void 0 ? void 0 : val.vanity_name;
  const access: undefined | FileSharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeFileSharedLinkAccessField(val.access);
  const effectiveAccess: FileSharedLinkEffectiveAccessField =
    deserializeFileSharedLinkEffectiveAccessField(val.effective_access);
  const effectivePermission: FileSharedLinkEffectivePermissionField =
    deserializeFileSharedLinkEffectivePermissionField(val.effective_permission);
  const unsharedAt: undefined | DateTime =
    val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
  const isPasswordEnabled: boolean = val.is_password_enabled;
  const permissions: undefined | FileSharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeFileSharedLinkPermissionsField(val.permissions);
  const downloadCount: number = val.download_count;
  const previewCount: number = val.preview_count;
  return {
    url: url,
    downloadUrl: downloadUrl,
    vanityUrl: vanityUrl,
    vanityName: vanityName,
    access: access,
    effectiveAccess: effectiveAccess,
    effectivePermission: effectivePermission,
    unsharedAt: unsharedAt,
    isPasswordEnabled: isPasswordEnabled,
    permissions: permissions,
    downloadCount: downloadCount,
    previewCount: previewCount,
  } satisfies FileSharedLinkField;
}
export function serializeFileItemStatusField(
  val: FileItemStatusField
): SerializedData {
  return val;
}
export function deserializeFileItemStatusField(val: any): FileItemStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FileItemStatusField"',
    });
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'trashed') {
    return 'trashed';
  }
  if (val == 'deleted') {
    return 'deleted';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFile(val: File): SerializedData {
  const base: any = serializeFileMini(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "File"' });
  }
  return {
    ...base,
    ...{
      ['description']: val.description == void 0 ? void 0 : val.description,
      ['size']: val.size == void 0 ? void 0 : val.size,
      ['path_collection']:
        val.pathCollection == void 0
          ? void 0
          : serializeFilePathCollectionField(val.pathCollection),
      ['created_at']:
        val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
      ['modified_at']:
        val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
      ['trashed_at']:
        val.trashedAt == void 0 ? void 0 : serializeDateTime(val.trashedAt),
      ['purged_at']:
        val.purgedAt == void 0 ? void 0 : serializeDateTime(val.purgedAt),
      ['content_created_at']:
        val.contentCreatedAt == void 0
          ? void 0
          : serializeDateTime(val.contentCreatedAt),
      ['content_modified_at']:
        val.contentModifiedAt == void 0
          ? void 0
          : serializeDateTime(val.contentModifiedAt),
      ['created_by']:
        val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
      ['modified_by']:
        val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy),
      ['owned_by']:
        val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy),
      ['shared_link']:
        val.sharedLink == void 0
          ? void 0
          : serializeFileSharedLinkField(val.sharedLink),
      ['parent']:
        val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
      ['item_status']:
        val.itemStatus == void 0
          ? void 0
          : serializeFileItemStatusField(val.itemStatus),
    },
  };
}
export function deserializeFile(val: any): File {
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  const pathCollection: undefined | FilePathCollectionField =
    val.path_collection == void 0
      ? void 0
      : deserializeFilePathCollectionField(val.path_collection);
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  const trashedAt: undefined | DateTime =
    val.trashed_at == void 0 ? void 0 : deserializeDateTime(val.trashed_at);
  const purgedAt: undefined | DateTime =
    val.purged_at == void 0 ? void 0 : deserializeDateTime(val.purged_at);
  const contentCreatedAt: undefined | DateTime =
    val.content_created_at == void 0
      ? void 0
      : deserializeDateTime(val.content_created_at);
  const contentModifiedAt: undefined | DateTime =
    val.content_modified_at == void 0
      ? void 0
      : deserializeDateTime(val.content_modified_at);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
  const ownedBy: undefined | UserMini =
    val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
  const sharedLink: undefined | FileSharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeFileSharedLinkField(val.shared_link);
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const itemStatus: undefined | FileItemStatusField =
    val.item_status == void 0
      ? void 0
      : deserializeFileItemStatusField(val.item_status);
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const sha1: undefined | string = val.sha1 == void 0 ? void 0 : val.sha1;
  const fileVersion: undefined | FileVersionMini =
    val.file_version == void 0
      ? void 0
      : deserializeFileVersionMini(val.file_version);
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: FileBaseTypeField = deserializeFileBaseTypeField(val.type);
  return {
    description: description,
    size: size,
    pathCollection: pathCollection,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    contentCreatedAt: contentCreatedAt,
    contentModifiedAt: contentModifiedAt,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    parent: parent,
    itemStatus: itemStatus,
    sequenceId: sequenceId,
    name: name,
    sha1: sha1,
    fileVersion: fileVersion,
    id: id,
    etag: etag,
    type: type,
  } satisfies File;
}
