import { serializeFolderBaseTypeField } from './folderBase.generated.js';
import { deserializeFolderBaseTypeField } from './folderBase.generated.js';
import { serializeFolderBase } from './folderBase.generated.js';
import { deserializeFolderBase } from './folderBase.generated.js';
import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { serializeFolderPathCollectionField } from './folder.generated.js';
import { deserializeFolderPathCollectionField } from './folder.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeFolderSharedLinkField } from './folder.generated.js';
import { deserializeFolderSharedLinkField } from './folder.generated.js';
import { serializeFolderFolderUploadEmailField } from './folder.generated.js';
import { deserializeFolderFolderUploadEmailField } from './folder.generated.js';
import { serializeFolderItemStatusField } from './folder.generated.js';
import { deserializeFolderItemStatusField } from './folder.generated.js';
import { serializeItems } from './items.generated.js';
import { deserializeItems } from './items.generated.js';
import { serializeFolder } from './folder.generated.js';
import { deserializeFolder } from './folder.generated.js';
import { serializeMetadata } from './metadata.generated.js';
import { deserializeMetadata } from './metadata.generated.js';
import { FolderBaseTypeField } from './folderBase.generated.js';
import { FolderBase } from './folderBase.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { FolderPathCollectionField } from './folder.generated.js';
import { UserMini } from './userMini.generated.js';
import { FolderSharedLinkField } from './folder.generated.js';
import { FolderFolderUploadEmailField } from './folder.generated.js';
import { FolderItemStatusField } from './folder.generated.js';
import { Items } from './items.generated.js';
import { Folder } from './folder.generated.js';
import { Metadata } from './metadata.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type FolderFullSyncStateField =
  | 'synced'
  | 'not_synced'
  | 'partially_synced';
export interface FolderFullPermissionsField {
  readonly canDelete: boolean;
  readonly canDownload: boolean;
  readonly canInviteCollaborator: boolean;
  readonly canRename: boolean;
  readonly canSetShareAccess: boolean;
  readonly canShare: boolean;
  readonly canUpload?: boolean;
}
export interface FolderFullMetadataField {
  readonly extraData?: {
    readonly [key: string]: {
      readonly [key: string]: Metadata;
    };
  };
}
export type FolderFullAllowedSharedLinkAccessLevelsField =
  | 'open'
  | 'company'
  | 'collaborators';
export type FolderFullAllowedInviteeRolesField =
  | 'editor'
  | 'viewer'
  | 'previewer'
  | 'uploader'
  | 'previewer uploader'
  | 'viewer uploader'
  | 'co-owner';
export interface FolderFullWatermarkInfoField {
  readonly isWatermarked?: boolean;
}
export interface FolderFullClassificationField {
  readonly name?: string;
  readonly definition?: string;
  readonly color?: string;
}
export class FolderFull extends Folder {
  readonly syncState?: FolderFullSyncStateField;
  readonly hasCollaborations?: boolean;
  readonly permissions?: FolderFullPermissionsField;
  readonly tags?: readonly string[];
  readonly canNonOwnersInvite?: boolean;
  readonly isExternallyOwned?: boolean;
  readonly metadata?: FolderFullMetadataField;
  readonly isCollaborationRestrictedToEnterprise?: boolean;
  readonly allowedSharedLinkAccessLevels?: readonly FolderFullAllowedSharedLinkAccessLevelsField[];
  readonly allowedInviteeRoles?: readonly FolderFullAllowedInviteeRolesField[];
  readonly watermarkInfo?: FolderFullWatermarkInfoField;
  readonly isAccessibleViaSharedLink?: boolean;
  readonly canNonOwnersViewCollaborators?: boolean;
  readonly classification?: FolderFullClassificationField;
  constructor(fields: FolderFull) {
    super(fields);
  }
}
export function serializeFolderFullSyncStateField(
  val: FolderFullSyncStateField
): SerializedData {
  return val;
}
export function deserializeFolderFullSyncStateField(
  val: any
): FolderFullSyncStateField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FolderFullSyncStateField"',
    });
  }
  if (val == 'synced') {
    return 'synced';
  }
  if (val == 'not_synced') {
    return 'not_synced';
  }
  if (val == 'partially_synced') {
    return 'partially_synced';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFolderFullPermissionsField(
  val: FolderFullPermissionsField
): SerializedData {
  return {
    ['can_delete']: val.canDelete,
    ['can_download']: val.canDownload,
    ['can_invite_collaborator']: val.canInviteCollaborator,
    ['can_rename']: val.canRename,
    ['can_set_share_access']: val.canSetShareAccess,
    ['can_share']: val.canShare,
    ['can_upload']: val.canUpload == void 0 ? void 0 : val.canUpload,
  };
}
export function deserializeFolderFullPermissionsField(
  val: any
): FolderFullPermissionsField {
  const canDelete: boolean = val.can_delete;
  const canDownload: boolean = val.can_download;
  const canInviteCollaborator: boolean = val.can_invite_collaborator;
  const canRename: boolean = val.can_rename;
  const canSetShareAccess: boolean = val.can_set_share_access;
  const canShare: boolean = val.can_share;
  const canUpload: undefined | boolean =
    val.can_upload == void 0 ? void 0 : val.can_upload;
  return {
    canDelete: canDelete,
    canDownload: canDownload,
    canInviteCollaborator: canInviteCollaborator,
    canRename: canRename,
    canSetShareAccess: canSetShareAccess,
    canShare: canShare,
    canUpload: canUpload,
  } satisfies FolderFullPermissionsField;
}
export function serializeFolderFullMetadataField(
  val: FolderFullMetadataField
): SerializedData {
  return { ...{}, ...val.extraData };
}
export function deserializeFolderFullMetadataField(
  val: any
): FolderFullMetadataField {
  const extraData:
    | undefined
    | {
        readonly [key: string]: {
          readonly [key: string]: Metadata;
        };
      } = val == void 0 ? void 0 : val;
  return { extraData: extraData } satisfies FolderFullMetadataField;
}
export function serializeFolderFullAllowedSharedLinkAccessLevelsField(
  val: FolderFullAllowedSharedLinkAccessLevelsField
): SerializedData {
  return val;
}
export function deserializeFolderFullAllowedSharedLinkAccessLevelsField(
  val: any
): FolderFullAllowedSharedLinkAccessLevelsField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "FolderFullAllowedSharedLinkAccessLevelsField"',
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
export function serializeFolderFullAllowedInviteeRolesField(
  val: FolderFullAllowedInviteeRolesField
): SerializedData {
  return val;
}
export function deserializeFolderFullAllowedInviteeRolesField(
  val: any
): FolderFullAllowedInviteeRolesField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FolderFullAllowedInviteeRolesField"',
    });
  }
  if (val == 'editor') {
    return 'editor';
  }
  if (val == 'viewer') {
    return 'viewer';
  }
  if (val == 'previewer') {
    return 'previewer';
  }
  if (val == 'uploader') {
    return 'uploader';
  }
  if (val == 'previewer uploader') {
    return 'previewer uploader';
  }
  if (val == 'viewer uploader') {
    return 'viewer uploader';
  }
  if (val == 'co-owner') {
    return 'co-owner';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFolderFullWatermarkInfoField(
  val: FolderFullWatermarkInfoField
): SerializedData {
  return {
    ['is_watermarked']:
      val.isWatermarked == void 0 ? void 0 : val.isWatermarked,
  };
}
export function deserializeFolderFullWatermarkInfoField(
  val: any
): FolderFullWatermarkInfoField {
  const isWatermarked: undefined | boolean =
    val.is_watermarked == void 0 ? void 0 : val.is_watermarked;
  return {
    isWatermarked: isWatermarked,
  } satisfies FolderFullWatermarkInfoField;
}
export function serializeFolderFullClassificationField(
  val: FolderFullClassificationField
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['definition']: val.definition == void 0 ? void 0 : val.definition,
    ['color']: val.color == void 0 ? void 0 : val.color,
  };
}
export function deserializeFolderFullClassificationField(
  val: any
): FolderFullClassificationField {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const definition: undefined | string =
    val.definition == void 0 ? void 0 : val.definition;
  const color: undefined | string = val.color == void 0 ? void 0 : val.color;
  return {
    name: name,
    definition: definition,
    color: color,
  } satisfies FolderFullClassificationField;
}
export function serializeFolderFull(val: FolderFull): SerializedData {
  const base: any = serializeFolder(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "FolderFull"' });
  }
  return {
    ...base,
    ...{
      ['sync_state']:
        val.syncState == void 0
          ? void 0
          : serializeFolderFullSyncStateField(val.syncState),
      ['has_collaborations']:
        val.hasCollaborations == void 0 ? void 0 : val.hasCollaborations,
      ['permissions']:
        val.permissions == void 0
          ? void 0
          : serializeFolderFullPermissionsField(val.permissions),
      ['tags']:
        val.tags == void 0
          ? void 0
          : (val.tags.map(function (item: string): SerializedData {
              return item;
            }) as readonly any[]),
      ['can_non_owners_invite']:
        val.canNonOwnersInvite == void 0 ? void 0 : val.canNonOwnersInvite,
      ['is_externally_owned']:
        val.isExternallyOwned == void 0 ? void 0 : val.isExternallyOwned,
      ['metadata']:
        val.metadata == void 0
          ? void 0
          : serializeFolderFullMetadataField(val.metadata),
      ['is_collaboration_restricted_to_enterprise']:
        val.isCollaborationRestrictedToEnterprise == void 0
          ? void 0
          : val.isCollaborationRestrictedToEnterprise,
      ['allowed_shared_link_access_levels']:
        val.allowedSharedLinkAccessLevels == void 0
          ? void 0
          : (val.allowedSharedLinkAccessLevels.map(function (
              item: FolderFullAllowedSharedLinkAccessLevelsField
            ): SerializedData {
              return serializeFolderFullAllowedSharedLinkAccessLevelsField(
                item
              );
            }) as readonly any[]),
      ['allowed_invitee_roles']:
        val.allowedInviteeRoles == void 0
          ? void 0
          : (val.allowedInviteeRoles.map(function (
              item: FolderFullAllowedInviteeRolesField
            ): SerializedData {
              return serializeFolderFullAllowedInviteeRolesField(item);
            }) as readonly any[]),
      ['watermark_info']:
        val.watermarkInfo == void 0
          ? void 0
          : serializeFolderFullWatermarkInfoField(val.watermarkInfo),
      ['is_accessible_via_shared_link']:
        val.isAccessibleViaSharedLink == void 0
          ? void 0
          : val.isAccessibleViaSharedLink,
      ['can_non_owners_view_collaborators']:
        val.canNonOwnersViewCollaborators == void 0
          ? void 0
          : val.canNonOwnersViewCollaborators,
      ['classification']:
        val.classification == void 0
          ? void 0
          : serializeFolderFullClassificationField(val.classification),
    },
  };
}
export function deserializeFolderFull(val: any): FolderFull {
  const syncState: undefined | FolderFullSyncStateField =
    val.sync_state == void 0
      ? void 0
      : deserializeFolderFullSyncStateField(val.sync_state);
  const hasCollaborations: undefined | boolean =
    val.has_collaborations == void 0 ? void 0 : val.has_collaborations;
  const permissions: undefined | FolderFullPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeFolderFullPermissionsField(val.permissions);
  const tags: undefined | readonly string[] =
    val.tags == void 0 ? void 0 : sdIsList(val.tags) ? val.tags : [];
  const canNonOwnersInvite: undefined | boolean =
    val.can_non_owners_invite == void 0 ? void 0 : val.can_non_owners_invite;
  const isExternallyOwned: undefined | boolean =
    val.is_externally_owned == void 0 ? void 0 : val.is_externally_owned;
  const metadata: undefined | FolderFullMetadataField =
    val.metadata == void 0
      ? void 0
      : deserializeFolderFullMetadataField(val.metadata);
  const isCollaborationRestrictedToEnterprise: undefined | boolean =
    val.is_collaboration_restricted_to_enterprise == void 0
      ? void 0
      : val.is_collaboration_restricted_to_enterprise;
  const allowedSharedLinkAccessLevels:
    | undefined
    | readonly FolderFullAllowedSharedLinkAccessLevelsField[] =
    val.allowed_shared_link_access_levels == void 0
      ? void 0
      : sdIsList(val.allowed_shared_link_access_levels)
      ? (val.allowed_shared_link_access_levels.map(function (
          itm: SerializedData
        ): FolderFullAllowedSharedLinkAccessLevelsField {
          return deserializeFolderFullAllowedSharedLinkAccessLevelsField(itm);
        }) as readonly any[])
      : [];
  const allowedInviteeRoles:
    | undefined
    | readonly FolderFullAllowedInviteeRolesField[] =
    val.allowed_invitee_roles == void 0
      ? void 0
      : sdIsList(val.allowed_invitee_roles)
      ? (val.allowed_invitee_roles.map(function (
          itm: SerializedData
        ): FolderFullAllowedInviteeRolesField {
          return deserializeFolderFullAllowedInviteeRolesField(itm);
        }) as readonly any[])
      : [];
  const watermarkInfo: undefined | FolderFullWatermarkInfoField =
    val.watermark_info == void 0
      ? void 0
      : deserializeFolderFullWatermarkInfoField(val.watermark_info);
  const isAccessibleViaSharedLink: undefined | boolean =
    val.is_accessible_via_shared_link == void 0
      ? void 0
      : val.is_accessible_via_shared_link;
  const canNonOwnersViewCollaborators: undefined | boolean =
    val.can_non_owners_view_collaborators == void 0
      ? void 0
      : val.can_non_owners_view_collaborators;
  const classification: undefined | FolderFullClassificationField =
    val.classification == void 0
      ? void 0
      : deserializeFolderFullClassificationField(val.classification);
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
    syncState: syncState,
    hasCollaborations: hasCollaborations,
    permissions: permissions,
    tags: tags,
    canNonOwnersInvite: canNonOwnersInvite,
    isExternallyOwned: isExternallyOwned,
    metadata: metadata,
    isCollaborationRestrictedToEnterprise:
      isCollaborationRestrictedToEnterprise,
    allowedSharedLinkAccessLevels: allowedSharedLinkAccessLevels,
    allowedInviteeRoles: allowedInviteeRoles,
    watermarkInfo: watermarkInfo,
    isAccessibleViaSharedLink: isAccessibleViaSharedLink,
    canNonOwnersViewCollaborators: canNonOwnersViewCollaborators,
    classification: classification,
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
  } satisfies FolderFull;
}
