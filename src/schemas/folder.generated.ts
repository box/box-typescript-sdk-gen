import { serializeFolderBaseTypeField } from './folderBase.generated.js';
import { deserializeFolderBaseTypeField } from './folderBase.generated.js';
import { serializeFolderBase } from './folderBase.generated.js';
import { deserializeFolderBase } from './folderBase.generated.js';
import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeItems } from './items.generated.js';
import { deserializeItems } from './items.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FolderBaseTypeField } from './folderBase.generated.js';
import { FolderBase } from './folderBase.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { Items } from './items.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface FolderPathCollectionField {
  readonly totalCount: number;
  readonly entries: readonly FolderMini[];
}
export type FolderSharedLinkAccessField = 'open' | 'company' | 'collaborators';
export type FolderSharedLinkEffectiveAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export type FolderSharedLinkEffectivePermissionField =
  | 'can_edit'
  | 'can_download'
  | 'can_preview'
  | 'no_access';
export interface FolderSharedLinkPermissionsField {
  readonly canDownload: boolean;
  readonly canPreview: boolean;
  readonly canEdit: boolean;
}
export interface FolderSharedLinkField {
  readonly url: string;
  readonly downloadUrl?: string;
  readonly vanityUrl?: string;
  readonly vanityName?: string;
  readonly access?: FolderSharedLinkAccessField;
  readonly effectiveAccess: FolderSharedLinkEffectiveAccessField;
  readonly effectivePermission: FolderSharedLinkEffectivePermissionField;
  readonly unsharedAt?: DateTime;
  readonly isPasswordEnabled: boolean;
  readonly permissions?: FolderSharedLinkPermissionsField;
  readonly downloadCount: number;
  readonly previewCount: number;
}
export type FolderFolderUploadEmailAccessField = 'open' | 'collaborators';
export interface FolderFolderUploadEmailField {
  readonly access?: FolderFolderUploadEmailAccessField;
  readonly email?: string;
}
export type FolderItemStatusField = 'active' | 'trashed' | 'deleted';
export class Folder extends FolderMini {
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  readonly description?: string;
  readonly size?: number;
  readonly pathCollection?: FolderPathCollectionField;
  readonly createdBy?: UserMini;
  readonly modifiedBy?: UserMini;
  readonly trashedAt?: DateTime;
  readonly purgedAt?: DateTime;
  readonly contentCreatedAt?: DateTime;
  readonly contentModifiedAt?: DateTime;
  readonly ownedBy?: UserMini;
  readonly sharedLink?: FolderSharedLinkField;
  readonly folderUploadEmail?: FolderFolderUploadEmailField;
  readonly parent?: FolderMini;
  readonly itemStatus?: FolderItemStatusField;
  readonly itemCollection?: Items;
  constructor(fields: Folder) {
    super(fields);
  }
}
export function serializeFolderPathCollectionField(
  val: FolderPathCollectionField
): SerializedData {
  return {
    ['total_count']: val.totalCount,
    ['entries']: val.entries.map(function (item: FolderMini): SerializedData {
      return serializeFolderMini(item);
    }) as readonly any[],
  };
}
export function deserializeFolderPathCollectionField(
  val: any
): FolderPathCollectionField {
  const totalCount: number = val.total_count;
  const entries: readonly FolderMini[] = sdIsList(val.entries)
    ? (val.entries.map(function (itm: SerializedData): FolderMini {
        return deserializeFolderMini(itm);
      }) as readonly any[])
    : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies FolderPathCollectionField;
}
export function serializeFolderSharedLinkAccessField(
  val: FolderSharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeFolderSharedLinkAccessField(
  val: any
): FolderSharedLinkAccessField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FolderSharedLinkAccessField"',
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
export function serializeFolderSharedLinkEffectiveAccessField(
  val: FolderSharedLinkEffectiveAccessField
): SerializedData {
  return val;
}
export function deserializeFolderSharedLinkEffectiveAccessField(
  val: any
): FolderSharedLinkEffectiveAccessField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FolderSharedLinkEffectiveAccessField"',
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
export function serializeFolderSharedLinkEffectivePermissionField(
  val: FolderSharedLinkEffectivePermissionField
): SerializedData {
  return val;
}
export function deserializeFolderSharedLinkEffectivePermissionField(
  val: any
): FolderSharedLinkEffectivePermissionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "FolderSharedLinkEffectivePermissionField"',
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
export function serializeFolderSharedLinkPermissionsField(
  val: FolderSharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload,
    ['can_preview']: val.canPreview,
    ['can_edit']: val.canEdit,
  };
}
export function deserializeFolderSharedLinkPermissionsField(
  val: any
): FolderSharedLinkPermissionsField {
  const canDownload: boolean = val.can_download;
  const canPreview: boolean = val.can_preview;
  const canEdit: boolean = val.can_edit;
  return {
    canDownload: canDownload,
    canPreview: canPreview,
    canEdit: canEdit,
  } satisfies FolderSharedLinkPermissionsField;
}
export function serializeFolderSharedLinkField(
  val: FolderSharedLinkField
): SerializedData {
  return {
    ['url']: val.url,
    ['download_url']: val.downloadUrl == void 0 ? void 0 : val.downloadUrl,
    ['vanity_url']: val.vanityUrl == void 0 ? void 0 : val.vanityUrl,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['access']:
      val.access == void 0
        ? void 0
        : serializeFolderSharedLinkAccessField(val.access),
    ['effective_access']: serializeFolderSharedLinkEffectiveAccessField(
      val.effectiveAccess
    ),
    ['effective_permission']: serializeFolderSharedLinkEffectivePermissionField(
      val.effectivePermission
    ),
    ['unshared_at']:
      val.unsharedAt == void 0 ? void 0 : serializeDateTime(val.unsharedAt),
    ['is_password_enabled']: val.isPasswordEnabled,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeFolderSharedLinkPermissionsField(val.permissions),
    ['download_count']: val.downloadCount,
    ['preview_count']: val.previewCount,
  };
}
export function deserializeFolderSharedLinkField(
  val: any
): FolderSharedLinkField {
  const url: string = val.url;
  const downloadUrl: undefined | string =
    val.download_url == void 0 ? void 0 : val.download_url;
  const vanityUrl: undefined | string =
    val.vanity_url == void 0 ? void 0 : val.vanity_url;
  const vanityName: undefined | string =
    val.vanity_name == void 0 ? void 0 : val.vanity_name;
  const access: undefined | FolderSharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeFolderSharedLinkAccessField(val.access);
  const effectiveAccess: FolderSharedLinkEffectiveAccessField =
    deserializeFolderSharedLinkEffectiveAccessField(val.effective_access);
  const effectivePermission: FolderSharedLinkEffectivePermissionField =
    deserializeFolderSharedLinkEffectivePermissionField(
      val.effective_permission
    );
  const unsharedAt: undefined | DateTime =
    val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
  const isPasswordEnabled: boolean = val.is_password_enabled;
  const permissions: undefined | FolderSharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeFolderSharedLinkPermissionsField(val.permissions);
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
  } satisfies FolderSharedLinkField;
}
export function serializeFolderFolderUploadEmailAccessField(
  val: FolderFolderUploadEmailAccessField
): SerializedData {
  return val;
}
export function deserializeFolderFolderUploadEmailAccessField(
  val: any
): FolderFolderUploadEmailAccessField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FolderFolderUploadEmailAccessField"',
    });
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'collaborators') {
    return 'collaborators';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFolderFolderUploadEmailField(
  val: FolderFolderUploadEmailField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeFolderFolderUploadEmailAccessField(val.access),
    ['email']: val.email == void 0 ? void 0 : val.email,
  };
}
export function deserializeFolderFolderUploadEmailField(
  val: any
): FolderFolderUploadEmailField {
  const access: undefined | FolderFolderUploadEmailAccessField =
    val.access == void 0
      ? void 0
      : deserializeFolderFolderUploadEmailAccessField(val.access);
  const email: undefined | string = val.email == void 0 ? void 0 : val.email;
  return {
    access: access,
    email: email,
  } satisfies FolderFolderUploadEmailField;
}
export function serializeFolderItemStatusField(
  val: FolderItemStatusField
): SerializedData {
  return val;
}
export function deserializeFolderItemStatusField(
  val: any
): FolderItemStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FolderItemStatusField"',
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
export function serializeFolder(val: Folder): SerializedData {
  const base: any = serializeFolderMini(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "Folder"' });
  }
  return {
    ...base,
    ...{
      ['created_at']:
        val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
      ['modified_at']:
        val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
      ['description']: val.description == void 0 ? void 0 : val.description,
      ['size']: val.size == void 0 ? void 0 : val.size,
      ['path_collection']:
        val.pathCollection == void 0
          ? void 0
          : serializeFolderPathCollectionField(val.pathCollection),
      ['created_by']:
        val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
      ['modified_by']:
        val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy),
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
      ['owned_by']:
        val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy),
      ['shared_link']:
        val.sharedLink == void 0
          ? void 0
          : serializeFolderSharedLinkField(val.sharedLink),
      ['folder_upload_email']:
        val.folderUploadEmail == void 0
          ? void 0
          : serializeFolderFolderUploadEmailField(val.folderUploadEmail),
      ['parent']:
        val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
      ['item_status']:
        val.itemStatus == void 0
          ? void 0
          : serializeFolderItemStatusField(val.itemStatus),
      ['item_collection']:
        val.itemCollection == void 0
          ? void 0
          : serializeItems(val.itemCollection),
    },
  };
}
export function deserializeFolder(val: any): Folder {
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  const pathCollection: undefined | FolderPathCollectionField =
    val.path_collection == void 0
      ? void 0
      : deserializeFolderPathCollectionField(val.path_collection);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
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
  const ownedBy: undefined | UserMini =
    val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
  const sharedLink: undefined | FolderSharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeFolderSharedLinkField(val.shared_link);
  const folderUploadEmail: undefined | FolderFolderUploadEmailField =
    val.folder_upload_email == void 0
      ? void 0
      : deserializeFolderFolderUploadEmailField(val.folder_upload_email);
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const itemStatus: undefined | FolderItemStatusField =
    val.item_status == void 0
      ? void 0
      : deserializeFolderItemStatusField(val.item_status);
  const itemCollection: undefined | Items =
    val.item_collection == void 0
      ? void 0
      : deserializeItems(val.item_collection);
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: FolderBaseTypeField = deserializeFolderBaseTypeField(val.type);
  return {
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    description: description,
    size: size,
    pathCollection: pathCollection,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    contentCreatedAt: contentCreatedAt,
    contentModifiedAt: contentModifiedAt,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    folderUploadEmail: folderUploadEmail,
    parent: parent,
    itemStatus: itemStatus,
    itemCollection: itemCollection,
    sequenceId: sequenceId,
    name: name,
    id: id,
    etag: etag,
    type: type,
  } satisfies Folder;
}
