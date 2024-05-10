import { serializeWebLinkBaseTypeField } from './webLinkBase.generated.js';
import { deserializeWebLinkBaseTypeField } from './webLinkBase.generated.js';
import { serializeWebLinkBase } from './webLinkBase.generated.js';
import { deserializeWebLinkBase } from './webLinkBase.generated.js';
import { serializeWebLinkMini } from './webLinkMini.generated.js';
import { deserializeWebLinkMini } from './webLinkMini.generated.js';
import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { WebLinkBaseTypeField } from './webLinkBase.generated.js';
import { WebLinkBase } from './webLinkBase.generated.js';
import { WebLinkMini } from './webLinkMini.generated.js';
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
export interface WebLinkPathCollectionField {
  readonly totalCount: number;
  readonly entries: readonly FolderMini[];
}
export type WebLinkSharedLinkAccessField = 'open' | 'company' | 'collaborators';
export type WebLinkSharedLinkEffectiveAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export type WebLinkSharedLinkEffectivePermissionField =
  | 'can_edit'
  | 'can_download'
  | 'can_preview'
  | 'no_access';
export interface WebLinkSharedLinkPermissionsField {
  readonly canDownload: boolean;
  readonly canPreview: boolean;
  readonly canEdit: boolean;
}
export interface WebLinkSharedLinkField {
  readonly url: string;
  readonly downloadUrl?: string;
  readonly vanityUrl?: string;
  readonly vanityName?: string;
  readonly access?: WebLinkSharedLinkAccessField;
  readonly effectiveAccess: WebLinkSharedLinkEffectiveAccessField;
  readonly effectivePermission: WebLinkSharedLinkEffectivePermissionField;
  readonly unsharedAt?: DateTime;
  readonly isPasswordEnabled: boolean;
  readonly permissions?: WebLinkSharedLinkPermissionsField;
  readonly downloadCount: number;
  readonly previewCount: number;
}
export type WebLinkItemStatusField = 'active' | 'trashed' | 'deleted';
export class WebLink extends WebLinkMini {
  readonly parent?: FolderMini;
  readonly description?: string;
  readonly pathCollection?: WebLinkPathCollectionField;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  readonly trashedAt?: DateTime;
  readonly purgedAt?: DateTime;
  readonly createdBy?: UserMini;
  readonly modifiedBy?: UserMini;
  readonly ownedBy?: UserMini;
  readonly sharedLink?: WebLinkSharedLinkField;
  readonly itemStatus?: WebLinkItemStatusField;
  constructor(fields: WebLink) {
    super(fields);
  }
}
export function serializeWebLinkPathCollectionField(
  val: WebLinkPathCollectionField
): SerializedData {
  return {
    ['total_count']: val.totalCount,
    ['entries']: val.entries.map(function (item: FolderMini): SerializedData {
      return serializeFolderMini(item);
    }) as readonly any[],
  };
}
export function deserializeWebLinkPathCollectionField(
  val: any
): WebLinkPathCollectionField {
  const totalCount: number = val.total_count;
  const entries: readonly FolderMini[] = sdIsList(val.entries)
    ? (val.entries.map(function (itm: SerializedData): FolderMini {
        return deserializeFolderMini(itm);
      }) as readonly any[])
    : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies WebLinkPathCollectionField;
}
export function serializeWebLinkSharedLinkAccessField(
  val: WebLinkSharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeWebLinkSharedLinkAccessField(
  val: any
): WebLinkSharedLinkAccessField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "WebLinkSharedLinkAccessField"',
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
export function serializeWebLinkSharedLinkEffectiveAccessField(
  val: WebLinkSharedLinkEffectiveAccessField
): SerializedData {
  return val;
}
export function deserializeWebLinkSharedLinkEffectiveAccessField(
  val: any
): WebLinkSharedLinkEffectiveAccessField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "WebLinkSharedLinkEffectiveAccessField"',
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
export function serializeWebLinkSharedLinkEffectivePermissionField(
  val: WebLinkSharedLinkEffectivePermissionField
): SerializedData {
  return val;
}
export function deserializeWebLinkSharedLinkEffectivePermissionField(
  val: any
): WebLinkSharedLinkEffectivePermissionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "WebLinkSharedLinkEffectivePermissionField"',
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
export function serializeWebLinkSharedLinkPermissionsField(
  val: WebLinkSharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload,
    ['can_preview']: val.canPreview,
    ['can_edit']: val.canEdit,
  };
}
export function deserializeWebLinkSharedLinkPermissionsField(
  val: any
): WebLinkSharedLinkPermissionsField {
  const canDownload: boolean = val.can_download;
  const canPreview: boolean = val.can_preview;
  const canEdit: boolean = val.can_edit;
  return {
    canDownload: canDownload,
    canPreview: canPreview,
    canEdit: canEdit,
  } satisfies WebLinkSharedLinkPermissionsField;
}
export function serializeWebLinkSharedLinkField(
  val: WebLinkSharedLinkField
): SerializedData {
  return {
    ['url']: val.url,
    ['download_url']: val.downloadUrl == void 0 ? void 0 : val.downloadUrl,
    ['vanity_url']: val.vanityUrl == void 0 ? void 0 : val.vanityUrl,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['access']:
      val.access == void 0
        ? void 0
        : serializeWebLinkSharedLinkAccessField(val.access),
    ['effective_access']: serializeWebLinkSharedLinkEffectiveAccessField(
      val.effectiveAccess
    ),
    ['effective_permission']:
      serializeWebLinkSharedLinkEffectivePermissionField(
        val.effectivePermission
      ),
    ['unshared_at']:
      val.unsharedAt == void 0 ? void 0 : serializeDateTime(val.unsharedAt),
    ['is_password_enabled']: val.isPasswordEnabled,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeWebLinkSharedLinkPermissionsField(val.permissions),
    ['download_count']: val.downloadCount,
    ['preview_count']: val.previewCount,
  };
}
export function deserializeWebLinkSharedLinkField(
  val: any
): WebLinkSharedLinkField {
  const url: string = val.url;
  const downloadUrl: undefined | string =
    val.download_url == void 0 ? void 0 : val.download_url;
  const vanityUrl: undefined | string =
    val.vanity_url == void 0 ? void 0 : val.vanity_url;
  const vanityName: undefined | string =
    val.vanity_name == void 0 ? void 0 : val.vanity_name;
  const access: undefined | WebLinkSharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeWebLinkSharedLinkAccessField(val.access);
  const effectiveAccess: WebLinkSharedLinkEffectiveAccessField =
    deserializeWebLinkSharedLinkEffectiveAccessField(val.effective_access);
  const effectivePermission: WebLinkSharedLinkEffectivePermissionField =
    deserializeWebLinkSharedLinkEffectivePermissionField(
      val.effective_permission
    );
  const unsharedAt: undefined | DateTime =
    val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
  const isPasswordEnabled: boolean = val.is_password_enabled;
  const permissions: undefined | WebLinkSharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeWebLinkSharedLinkPermissionsField(val.permissions);
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
  } satisfies WebLinkSharedLinkField;
}
export function serializeWebLinkItemStatusField(
  val: WebLinkItemStatusField
): SerializedData {
  return val;
}
export function deserializeWebLinkItemStatusField(
  val: any
): WebLinkItemStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "WebLinkItemStatusField"',
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
export function serializeWebLink(val: WebLink): SerializedData {
  const base: any = serializeWebLinkMini(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "WebLink"' });
  }
  return {
    ...base,
    ...{
      ['parent']:
        val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
      ['description']: val.description == void 0 ? void 0 : val.description,
      ['path_collection']:
        val.pathCollection == void 0
          ? void 0
          : serializeWebLinkPathCollectionField(val.pathCollection),
      ['created_at']:
        val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
      ['modified_at']:
        val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
      ['trashed_at']:
        val.trashedAt == void 0 ? void 0 : serializeDateTime(val.trashedAt),
      ['purged_at']:
        val.purgedAt == void 0 ? void 0 : serializeDateTime(val.purgedAt),
      ['created_by']:
        val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
      ['modified_by']:
        val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy),
      ['owned_by']:
        val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy),
      ['shared_link']:
        val.sharedLink == void 0
          ? void 0
          : serializeWebLinkSharedLinkField(val.sharedLink),
      ['item_status']:
        val.itemStatus == void 0
          ? void 0
          : serializeWebLinkItemStatusField(val.itemStatus),
    },
  };
}
export function deserializeWebLink(val: any): WebLink {
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const pathCollection: undefined | WebLinkPathCollectionField =
    val.path_collection == void 0
      ? void 0
      : deserializeWebLinkPathCollectionField(val.path_collection);
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  const trashedAt: undefined | DateTime =
    val.trashed_at == void 0 ? void 0 : deserializeDateTime(val.trashed_at);
  const purgedAt: undefined | DateTime =
    val.purged_at == void 0 ? void 0 : deserializeDateTime(val.purged_at);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
  const ownedBy: undefined | UserMini =
    val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
  const sharedLink: undefined | WebLinkSharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeWebLinkSharedLinkField(val.shared_link);
  const itemStatus: undefined | WebLinkItemStatusField =
    val.item_status == void 0
      ? void 0
      : deserializeWebLinkItemStatusField(val.item_status);
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const id: string = val.id;
  const type: WebLinkBaseTypeField = deserializeWebLinkBaseTypeField(val.type);
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  return {
    parent: parent,
    description: description,
    pathCollection: pathCollection,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    itemStatus: itemStatus,
    url: url,
    sequenceId: sequenceId,
    name: name,
    id: id,
    type: type,
    etag: etag,
  } satisfies WebLink;
}
