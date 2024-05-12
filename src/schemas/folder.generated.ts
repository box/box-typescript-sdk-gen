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
  val: SerializedData
): FolderPathCollectionField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "FolderPathCollectionField"',
    });
  }
  if (val.total_count == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "total_count" of type "FolderPathCollectionField" to be defined',
    });
  }
  if (!sdIsNumber(val.total_count)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "total_count" of type "FolderPathCollectionField"',
    });
  }
  const totalCount: number = val.total_count;
  if (val.entries == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "entries" of type "FolderPathCollectionField" to be defined',
    });
  }
  if (!sdIsList(val.entries)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "entries" of type "FolderPathCollectionField"',
    });
  }
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
  val: SerializedData
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
  val: SerializedData
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
  val: SerializedData
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
  val: SerializedData
): FolderSharedLinkPermissionsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "FolderSharedLinkPermissionsField"',
    });
  }
  if (val.can_download == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "can_download" of type "FolderSharedLinkPermissionsField" to be defined',
    });
  }
  if (!sdIsBoolean(val.can_download)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_download" of type "FolderSharedLinkPermissionsField"',
    });
  }
  const canDownload: boolean = val.can_download;
  if (val.can_preview == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "can_preview" of type "FolderSharedLinkPermissionsField" to be defined',
    });
  }
  if (!sdIsBoolean(val.can_preview)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_preview" of type "FolderSharedLinkPermissionsField"',
    });
  }
  const canPreview: boolean = val.can_preview;
  if (val.can_edit == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "can_edit" of type "FolderSharedLinkPermissionsField" to be defined',
    });
  }
  if (!sdIsBoolean(val.can_edit)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "can_edit" of type "FolderSharedLinkPermissionsField"',
    });
  }
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
  val: SerializedData
): FolderSharedLinkField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "FolderSharedLinkField"',
    });
  }
  if (val.url == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "url" of type "FolderSharedLinkField" to be defined',
    });
  }
  if (!sdIsString(val.url)) {
    throw new BoxSdkError({
      message: 'Expecting string for "url" of type "FolderSharedLinkField"',
    });
  }
  const url: string = val.url;
  if (!(val.download_url == void 0) && !sdIsString(val.download_url)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "download_url" of type "FolderSharedLinkField"',
    });
  }
  const downloadUrl: undefined | string =
    val.download_url == void 0 ? void 0 : val.download_url;
  if (!(val.vanity_url == void 0) && !sdIsString(val.vanity_url)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "vanity_url" of type "FolderSharedLinkField"',
    });
  }
  const vanityUrl: undefined | string =
    val.vanity_url == void 0 ? void 0 : val.vanity_url;
  if (!(val.vanity_name == void 0) && !sdIsString(val.vanity_name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "vanity_name" of type "FolderSharedLinkField"',
    });
  }
  const vanityName: undefined | string =
    val.vanity_name == void 0 ? void 0 : val.vanity_name;
  const access: undefined | FolderSharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeFolderSharedLinkAccessField(val.access);
  if (val.effective_access == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "effective_access" of type "FolderSharedLinkField" to be defined',
    });
  }
  const effectiveAccess: FolderSharedLinkEffectiveAccessField =
    deserializeFolderSharedLinkEffectiveAccessField(val.effective_access);
  if (val.effective_permission == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "effective_permission" of type "FolderSharedLinkField" to be defined',
    });
  }
  const effectivePermission: FolderSharedLinkEffectivePermissionField =
    deserializeFolderSharedLinkEffectivePermissionField(
      val.effective_permission
    );
  if (!(val.unshared_at == void 0) && !sdIsString(val.unshared_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "unshared_at" of type "FolderSharedLinkField"',
    });
  }
  const unsharedAt: undefined | DateTime =
    val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
  if (val.is_password_enabled == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "is_password_enabled" of type "FolderSharedLinkField" to be defined',
    });
  }
  if (!sdIsBoolean(val.is_password_enabled)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_password_enabled" of type "FolderSharedLinkField"',
    });
  }
  const isPasswordEnabled: boolean = val.is_password_enabled;
  const permissions: undefined | FolderSharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeFolderSharedLinkPermissionsField(val.permissions);
  if (val.download_count == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "download_count" of type "FolderSharedLinkField" to be defined',
    });
  }
  if (!sdIsNumber(val.download_count)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "download_count" of type "FolderSharedLinkField"',
    });
  }
  const downloadCount: number = val.download_count;
  if (val.preview_count == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "preview_count" of type "FolderSharedLinkField" to be defined',
    });
  }
  if (!sdIsNumber(val.preview_count)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "preview_count" of type "FolderSharedLinkField"',
    });
  }
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
  val: SerializedData
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
  val: SerializedData
): FolderFolderUploadEmailField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "FolderFolderUploadEmailField"',
    });
  }
  const access: undefined | FolderFolderUploadEmailAccessField =
    val.access == void 0
      ? void 0
      : deserializeFolderFolderUploadEmailAccessField(val.access);
  if (!(val.email == void 0) && !sdIsString(val.email)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "email" of type "FolderFolderUploadEmailField"',
    });
  }
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
  val: SerializedData
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
export function deserializeFolder(val: SerializedData): Folder {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "Folder"' });
  }
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "created_at" of type "Folder"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "modified_at" of type "Folder"',
    });
  }
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  if (!(val.description == void 0) && !sdIsString(val.description)) {
    throw new BoxSdkError({
      message: 'Expecting string for "description" of type "Folder"',
    });
  }
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  if (!(val.size == void 0) && !sdIsNumber(val.size)) {
    throw new BoxSdkError({
      message: 'Expecting number for "size" of type "Folder"',
    });
  }
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  const pathCollection: undefined | FolderPathCollectionField =
    val.path_collection == void 0
      ? void 0
      : deserializeFolderPathCollectionField(val.path_collection);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
  if (!(val.trashed_at == void 0) && !sdIsString(val.trashed_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "trashed_at" of type "Folder"',
    });
  }
  const trashedAt: undefined | DateTime =
    val.trashed_at == void 0 ? void 0 : deserializeDateTime(val.trashed_at);
  if (!(val.purged_at == void 0) && !sdIsString(val.purged_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "purged_at" of type "Folder"',
    });
  }
  const purgedAt: undefined | DateTime =
    val.purged_at == void 0 ? void 0 : deserializeDateTime(val.purged_at);
  if (
    !(val.content_created_at == void 0) &&
    !sdIsString(val.content_created_at)
  ) {
    throw new BoxSdkError({
      message: 'Expecting string for "content_created_at" of type "Folder"',
    });
  }
  const contentCreatedAt: undefined | DateTime =
    val.content_created_at == void 0
      ? void 0
      : deserializeDateTime(val.content_created_at);
  if (
    !(val.content_modified_at == void 0) &&
    !sdIsString(val.content_modified_at)
  ) {
    throw new BoxSdkError({
      message: 'Expecting string for "content_modified_at" of type "Folder"',
    });
  }
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
  if (!(val.sequence_id == void 0) && !sdIsString(val.sequence_id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "sequence_id" of type "Folder"',
    });
  }
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  if (!(val.name == void 0) && !sdIsString(val.name)) {
    throw new BoxSdkError({
      message: 'Expecting string for "name" of type "Folder"',
    });
  }
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "Folder" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "Folder"',
    });
  }
  const id: string = val.id;
  if (!(val.etag == void 0) && !sdIsString(val.etag)) {
    throw new BoxSdkError({
      message: 'Expecting string for "etag" of type "Folder"',
    });
  }
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "Folder" to be defined',
    });
  }
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
