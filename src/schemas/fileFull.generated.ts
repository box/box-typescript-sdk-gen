import { serializeFileBaseTypeField } from './fileBase.generated.js';
import { deserializeFileBaseTypeField } from './fileBase.generated.js';
import { serializeFileBase } from './fileBase.generated.js';
import { deserializeFileBase } from './fileBase.generated.js';
import { serializeFileVersionMini } from './fileVersionMini.generated.js';
import { deserializeFileVersionMini } from './fileVersionMini.generated.js';
import { serializeFileMini } from './fileMini.generated.js';
import { deserializeFileMini } from './fileMini.generated.js';
import { serializeFilePathCollectionField } from './file.generated.js';
import { deserializeFilePathCollectionField } from './file.generated.js';
import { serializeFileSharedLinkField } from './file.generated.js';
import { deserializeFileSharedLinkField } from './file.generated.js';
import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeFileItemStatusField } from './file.generated.js';
import { deserializeFileItemStatusField } from './file.generated.js';
import { serializeFile } from './file.generated.js';
import { deserializeFile } from './file.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeFileOrFolderScope } from './fileOrFolderScope.generated.js';
import { deserializeFileOrFolderScope } from './fileOrFolderScope.generated.js';
import { serializeMetadata } from './metadata.generated.js';
import { deserializeMetadata } from './metadata.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FileBaseTypeField } from './fileBase.generated.js';
import { FileBase } from './fileBase.generated.js';
import { FileVersionMini } from './fileVersionMini.generated.js';
import { FileMini } from './fileMini.generated.js';
import { FilePathCollectionField } from './file.generated.js';
import { FileSharedLinkField } from './file.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { FileItemStatusField } from './file.generated.js';
import { File } from './file.generated.js';
import { UserMini } from './userMini.generated.js';
import { FileOrFolderScope } from './fileOrFolderScope.generated.js';
import { Metadata } from './metadata.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface FileFullPermissionsField {
  readonly canDelete: boolean;
  readonly canDownload: boolean;
  readonly canInviteCollaborator: boolean;
  readonly canRename: boolean;
  readonly canSetShareAccess: boolean;
  readonly canShare: boolean;
  readonly canAnnotate?: boolean;
  readonly canComment?: boolean;
  readonly canPreview?: boolean;
  readonly canUpload?: boolean;
  readonly canViewAnnotationsAll?: boolean;
  readonly canViewAnnotationsSelf?: boolean;
}
export type FileFullLockTypeField = 'lock';
export type FileFullLockAppTypeField =
  | 'gsuite'
  | 'office_wopi'
  | 'office_wopiplus'
  | 'other';
export interface FileFullLockField {
  readonly id?: string;
  readonly type?: FileFullLockTypeField;
  readonly createdBy?: UserMini;
  readonly createdAt?: DateTime;
  readonly expiredAt?: DateTime;
  readonly isDownloadPrevented?: boolean;
  readonly appType?: FileFullLockAppTypeField;
}
export type FileFullExpiringEmbedLinkTokenTypeField = 'bearer';
export interface FileFullExpiringEmbedLinkField {
  readonly accessToken?: string;
  readonly expiresIn?: number;
  readonly tokenType?: FileFullExpiringEmbedLinkTokenTypeField;
  readonly restrictedTo?: readonly FileOrFolderScope[];
  readonly url?: string;
}
export interface FileFullWatermarkInfoField {
  readonly isWatermarked?: boolean;
}
export type FileFullAllowedInviteeRolesField =
  | 'editor'
  | 'viewer'
  | 'previewer'
  | 'uploader'
  | 'previewer uploader'
  | 'viewer uploader'
  | 'co-owner';
export interface FileFullMetadataField {
  readonly extraData?: {
    readonly [key: string]: {
      readonly [key: string]: Metadata;
    };
  };
}
export interface FileFullRepresentationsEntriesContentField {
  readonly urlTemplate?: string;
}
export interface FileFullRepresentationsEntriesInfoField {
  readonly url?: string;
}
export interface FileFullRepresentationsEntriesPropertiesField {
  readonly dimensions?: string;
  readonly paged?: boolean;
  readonly thumb?: boolean;
}
export type FileFullRepresentationsEntriesStatusStateField =
  | 'success'
  | 'viewable'
  | 'pending'
  | 'none';
export interface FileFullRepresentationsEntriesStatusField {
  readonly state?: FileFullRepresentationsEntriesStatusStateField;
}
export interface FileFullRepresentationsEntriesField {
  readonly content?: FileFullRepresentationsEntriesContentField;
  readonly info?: FileFullRepresentationsEntriesInfoField;
  readonly properties?: FileFullRepresentationsEntriesPropertiesField;
  readonly representation?: string;
  readonly status?: FileFullRepresentationsEntriesStatusField;
}
export interface FileFullRepresentationsField {
  readonly entries?: readonly FileFullRepresentationsEntriesField[];
}
export interface FileFullClassificationField {
  readonly name?: string;
  readonly definition?: string;
  readonly color?: string;
}
export type FileFullSharedLinkPermissionOptionsField =
  | 'can_preview'
  | 'can_download'
  | 'can_edit';
export class FileFull extends File {
  readonly versionNumber?: string;
  readonly commentCount?: number;
  readonly permissions?: FileFullPermissionsField;
  readonly tags?: readonly string[];
  readonly lock?: FileFullLockField;
  readonly extension?: string;
  readonly isPackage?: boolean;
  readonly expiringEmbedLink?: FileFullExpiringEmbedLinkField;
  readonly watermarkInfo?: FileFullWatermarkInfoField;
  readonly isAccessibleViaSharedLink?: boolean;
  readonly allowedInviteeRoles?: readonly FileFullAllowedInviteeRolesField[];
  readonly isExternallyOwned?: boolean;
  readonly hasCollaborations?: boolean;
  readonly metadata?: FileFullMetadataField;
  readonly expiresAt?: DateTime;
  readonly representations?: FileFullRepresentationsField;
  readonly classification?: FileFullClassificationField;
  readonly uploaderDisplayName?: string;
  readonly dispositionAt?: DateTime;
  readonly sharedLinkPermissionOptions?: readonly FileFullSharedLinkPermissionOptionsField[];
  constructor(fields: FileFull) {
    super(fields);
  }
}
export function serializeFileFullPermissionsField(
  val: FileFullPermissionsField
): SerializedData {
  return {
    ['can_delete']: val.canDelete,
    ['can_download']: val.canDownload,
    ['can_invite_collaborator']: val.canInviteCollaborator,
    ['can_rename']: val.canRename,
    ['can_set_share_access']: val.canSetShareAccess,
    ['can_share']: val.canShare,
    ['can_annotate']: val.canAnnotate == void 0 ? void 0 : val.canAnnotate,
    ['can_comment']: val.canComment == void 0 ? void 0 : val.canComment,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_upload']: val.canUpload == void 0 ? void 0 : val.canUpload,
    ['can_view_annotations_all']:
      val.canViewAnnotationsAll == void 0 ? void 0 : val.canViewAnnotationsAll,
    ['can_view_annotations_self']:
      val.canViewAnnotationsSelf == void 0
        ? void 0
        : val.canViewAnnotationsSelf,
  };
}
export function deserializeFileFullPermissionsField(
  val: any
): FileFullPermissionsField {
  const canDelete: boolean = val.can_delete;
  const canDownload: boolean = val.can_download;
  const canInviteCollaborator: boolean = val.can_invite_collaborator;
  const canRename: boolean = val.can_rename;
  const canSetShareAccess: boolean = val.can_set_share_access;
  const canShare: boolean = val.can_share;
  const canAnnotate: undefined | boolean =
    val.can_annotate == void 0 ? void 0 : val.can_annotate;
  const canComment: undefined | boolean =
    val.can_comment == void 0 ? void 0 : val.can_comment;
  const canPreview: undefined | boolean =
    val.can_preview == void 0 ? void 0 : val.can_preview;
  const canUpload: undefined | boolean =
    val.can_upload == void 0 ? void 0 : val.can_upload;
  const canViewAnnotationsAll: undefined | boolean =
    val.can_view_annotations_all == void 0
      ? void 0
      : val.can_view_annotations_all;
  const canViewAnnotationsSelf: undefined | boolean =
    val.can_view_annotations_self == void 0
      ? void 0
      : val.can_view_annotations_self;
  return {
    canDelete: canDelete,
    canDownload: canDownload,
    canInviteCollaborator: canInviteCollaborator,
    canRename: canRename,
    canSetShareAccess: canSetShareAccess,
    canShare: canShare,
    canAnnotate: canAnnotate,
    canComment: canComment,
    canPreview: canPreview,
    canUpload: canUpload,
    canViewAnnotationsAll: canViewAnnotationsAll,
    canViewAnnotationsSelf: canViewAnnotationsSelf,
  } satisfies FileFullPermissionsField;
}
export function serializeFileFullLockTypeField(
  val: FileFullLockTypeField
): SerializedData {
  return val;
}
export function deserializeFileFullLockTypeField(
  val: any
): FileFullLockTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FileFullLockTypeField"',
    });
  }
  if (val == 'lock') {
    return 'lock';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFileFullLockAppTypeField(
  val: FileFullLockAppTypeField
): SerializedData {
  return val;
}
export function deserializeFileFullLockAppTypeField(
  val: any
): FileFullLockAppTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FileFullLockAppTypeField"',
    });
  }
  if (val == 'gsuite') {
    return 'gsuite';
  }
  if (val == 'office_wopi') {
    return 'office_wopi';
  }
  if (val == 'office_wopiplus') {
    return 'office_wopiplus';
  }
  if (val == 'other') {
    return 'other';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFileFullLockField(
  val: FileFullLockField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeFileFullLockTypeField(val.type),
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['expired_at']:
      val.expiredAt == void 0 ? void 0 : serializeDateTime(val.expiredAt),
    ['is_download_prevented']:
      val.isDownloadPrevented == void 0 ? void 0 : val.isDownloadPrevented,
    ['app_type']:
      val.appType == void 0
        ? void 0
        : serializeFileFullLockAppTypeField(val.appType),
  };
}
export function deserializeFileFullLockField(val: any): FileFullLockField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | FileFullLockTypeField =
    val.type == void 0 ? void 0 : deserializeFileFullLockTypeField(val.type);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const expiredAt: undefined | DateTime =
    val.expired_at == void 0 ? void 0 : deserializeDateTime(val.expired_at);
  const isDownloadPrevented: undefined | boolean =
    val.is_download_prevented == void 0 ? void 0 : val.is_download_prevented;
  const appType: undefined | FileFullLockAppTypeField =
    val.app_type == void 0
      ? void 0
      : deserializeFileFullLockAppTypeField(val.app_type);
  return {
    id: id,
    type: type,
    createdBy: createdBy,
    createdAt: createdAt,
    expiredAt: expiredAt,
    isDownloadPrevented: isDownloadPrevented,
    appType: appType,
  } satisfies FileFullLockField;
}
export function serializeFileFullExpiringEmbedLinkTokenTypeField(
  val: FileFullExpiringEmbedLinkTokenTypeField
): SerializedData {
  return val;
}
export function deserializeFileFullExpiringEmbedLinkTokenTypeField(
  val: any
): FileFullExpiringEmbedLinkTokenTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "FileFullExpiringEmbedLinkTokenTypeField"',
    });
  }
  if (val == 'bearer') {
    return 'bearer';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFileFullExpiringEmbedLinkField(
  val: FileFullExpiringEmbedLinkField
): SerializedData {
  return {
    ['access_token']: val.accessToken == void 0 ? void 0 : val.accessToken,
    ['expires_in']: val.expiresIn == void 0 ? void 0 : val.expiresIn,
    ['token_type']:
      val.tokenType == void 0
        ? void 0
        : serializeFileFullExpiringEmbedLinkTokenTypeField(val.tokenType),
    ['restricted_to']:
      val.restrictedTo == void 0
        ? void 0
        : (val.restrictedTo.map(function (
            item: FileOrFolderScope
          ): SerializedData {
            return serializeFileOrFolderScope(item);
          }) as readonly any[]),
    ['url']: val.url == void 0 ? void 0 : val.url,
  };
}
export function deserializeFileFullExpiringEmbedLinkField(
  val: any
): FileFullExpiringEmbedLinkField {
  const accessToken: undefined | string =
    val.access_token == void 0 ? void 0 : val.access_token;
  const expiresIn: undefined | number =
    val.expires_in == void 0 ? void 0 : val.expires_in;
  const tokenType: undefined | FileFullExpiringEmbedLinkTokenTypeField =
    val.token_type == void 0
      ? void 0
      : deserializeFileFullExpiringEmbedLinkTokenTypeField(val.token_type);
  const restrictedTo: undefined | readonly FileOrFolderScope[] =
    val.restricted_to == void 0
      ? void 0
      : sdIsList(val.restricted_to)
      ? (val.restricted_to.map(function (
          itm: SerializedData
        ): FileOrFolderScope {
          return deserializeFileOrFolderScope(itm);
        }) as readonly any[])
      : [];
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  return {
    accessToken: accessToken,
    expiresIn: expiresIn,
    tokenType: tokenType,
    restrictedTo: restrictedTo,
    url: url,
  } satisfies FileFullExpiringEmbedLinkField;
}
export function serializeFileFullWatermarkInfoField(
  val: FileFullWatermarkInfoField
): SerializedData {
  return {
    ['is_watermarked']:
      val.isWatermarked == void 0 ? void 0 : val.isWatermarked,
  };
}
export function deserializeFileFullWatermarkInfoField(
  val: any
): FileFullWatermarkInfoField {
  const isWatermarked: undefined | boolean =
    val.is_watermarked == void 0 ? void 0 : val.is_watermarked;
  return { isWatermarked: isWatermarked } satisfies FileFullWatermarkInfoField;
}
export function serializeFileFullAllowedInviteeRolesField(
  val: FileFullAllowedInviteeRolesField
): SerializedData {
  return val;
}
export function deserializeFileFullAllowedInviteeRolesField(
  val: any
): FileFullAllowedInviteeRolesField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "FileFullAllowedInviteeRolesField"',
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
export function serializeFileFullMetadataField(
  val: FileFullMetadataField
): SerializedData {
  return { ...{}, ...val.extraData };
}
export function deserializeFileFullMetadataField(
  val: any
): FileFullMetadataField {
  const extraData:
    | undefined
    | {
        readonly [key: string]: {
          readonly [key: string]: Metadata;
        };
      } = val == void 0 ? void 0 : val;
  return { extraData: extraData } satisfies FileFullMetadataField;
}
export function serializeFileFullRepresentationsEntriesContentField(
  val: FileFullRepresentationsEntriesContentField
): SerializedData {
  return {
    ['url_template']: val.urlTemplate == void 0 ? void 0 : val.urlTemplate,
  };
}
export function deserializeFileFullRepresentationsEntriesContentField(
  val: any
): FileFullRepresentationsEntriesContentField {
  const urlTemplate: undefined | string =
    val.url_template == void 0 ? void 0 : val.url_template;
  return {
    urlTemplate: urlTemplate,
  } satisfies FileFullRepresentationsEntriesContentField;
}
export function serializeFileFullRepresentationsEntriesInfoField(
  val: FileFullRepresentationsEntriesInfoField
): SerializedData {
  return { ['url']: val.url == void 0 ? void 0 : val.url };
}
export function deserializeFileFullRepresentationsEntriesInfoField(
  val: any
): FileFullRepresentationsEntriesInfoField {
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  return { url: url } satisfies FileFullRepresentationsEntriesInfoField;
}
export function serializeFileFullRepresentationsEntriesPropertiesField(
  val: FileFullRepresentationsEntriesPropertiesField
): SerializedData {
  return {
    ['dimensions']: val.dimensions == void 0 ? void 0 : val.dimensions,
    ['paged']: val.paged == void 0 ? void 0 : val.paged,
    ['thumb']: val.thumb == void 0 ? void 0 : val.thumb,
  };
}
export function deserializeFileFullRepresentationsEntriesPropertiesField(
  val: any
): FileFullRepresentationsEntriesPropertiesField {
  const dimensions: undefined | string =
    val.dimensions == void 0 ? void 0 : val.dimensions;
  const paged: undefined | boolean = val.paged == void 0 ? void 0 : val.paged;
  const thumb: undefined | boolean = val.thumb == void 0 ? void 0 : val.thumb;
  return {
    dimensions: dimensions,
    paged: paged,
    thumb: thumb,
  } satisfies FileFullRepresentationsEntriesPropertiesField;
}
export function serializeFileFullRepresentationsEntriesStatusStateField(
  val: FileFullRepresentationsEntriesStatusStateField
): SerializedData {
  return val;
}
export function deserializeFileFullRepresentationsEntriesStatusStateField(
  val: any
): FileFullRepresentationsEntriesStatusStateField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "FileFullRepresentationsEntriesStatusStateField"',
    });
  }
  if (val == 'success') {
    return 'success';
  }
  if (val == 'viewable') {
    return 'viewable';
  }
  if (val == 'pending') {
    return 'pending';
  }
  if (val == 'none') {
    return 'none';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFileFullRepresentationsEntriesStatusField(
  val: FileFullRepresentationsEntriesStatusField
): SerializedData {
  return {
    ['state']:
      val.state == void 0
        ? void 0
        : serializeFileFullRepresentationsEntriesStatusStateField(val.state),
  };
}
export function deserializeFileFullRepresentationsEntriesStatusField(
  val: any
): FileFullRepresentationsEntriesStatusField {
  const state: undefined | FileFullRepresentationsEntriesStatusStateField =
    val.state == void 0
      ? void 0
      : deserializeFileFullRepresentationsEntriesStatusStateField(val.state);
  return { state: state } satisfies FileFullRepresentationsEntriesStatusField;
}
export function serializeFileFullRepresentationsEntriesField(
  val: FileFullRepresentationsEntriesField
): SerializedData {
  return {
    ['content']:
      val.content == void 0
        ? void 0
        : serializeFileFullRepresentationsEntriesContentField(val.content),
    ['info']:
      val.info == void 0
        ? void 0
        : serializeFileFullRepresentationsEntriesInfoField(val.info),
    ['properties']:
      val.properties == void 0
        ? void 0
        : serializeFileFullRepresentationsEntriesPropertiesField(
            val.properties
          ),
    ['representation']:
      val.representation == void 0 ? void 0 : val.representation,
    ['status']:
      val.status == void 0
        ? void 0
        : serializeFileFullRepresentationsEntriesStatusField(val.status),
  };
}
export function deserializeFileFullRepresentationsEntriesField(
  val: any
): FileFullRepresentationsEntriesField {
  const content: undefined | FileFullRepresentationsEntriesContentField =
    val.content == void 0
      ? void 0
      : deserializeFileFullRepresentationsEntriesContentField(val.content);
  const info: undefined | FileFullRepresentationsEntriesInfoField =
    val.info == void 0
      ? void 0
      : deserializeFileFullRepresentationsEntriesInfoField(val.info);
  const properties: undefined | FileFullRepresentationsEntriesPropertiesField =
    val.properties == void 0
      ? void 0
      : deserializeFileFullRepresentationsEntriesPropertiesField(
          val.properties
        );
  const representation: undefined | string =
    val.representation == void 0 ? void 0 : val.representation;
  const status: undefined | FileFullRepresentationsEntriesStatusField =
    val.status == void 0
      ? void 0
      : deserializeFileFullRepresentationsEntriesStatusField(val.status);
  return {
    content: content,
    info: info,
    properties: properties,
    representation: representation,
    status: status,
  } satisfies FileFullRepresentationsEntriesField;
}
export function serializeFileFullRepresentationsField(
  val: FileFullRepresentationsField
): SerializedData {
  return {
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: FileFullRepresentationsEntriesField
          ): SerializedData {
            return serializeFileFullRepresentationsEntriesField(item);
          }) as readonly any[]),
  };
}
export function deserializeFileFullRepresentationsField(
  val: any
): FileFullRepresentationsField {
  const entries: undefined | readonly FileFullRepresentationsEntriesField[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (
          itm: SerializedData
        ): FileFullRepresentationsEntriesField {
          return deserializeFileFullRepresentationsEntriesField(itm);
        }) as readonly any[])
      : [];
  return { entries: entries } satisfies FileFullRepresentationsField;
}
export function serializeFileFullClassificationField(
  val: FileFullClassificationField
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['definition']: val.definition == void 0 ? void 0 : val.definition,
    ['color']: val.color == void 0 ? void 0 : val.color,
  };
}
export function deserializeFileFullClassificationField(
  val: any
): FileFullClassificationField {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const definition: undefined | string =
    val.definition == void 0 ? void 0 : val.definition;
  const color: undefined | string = val.color == void 0 ? void 0 : val.color;
  return {
    name: name,
    definition: definition,
    color: color,
  } satisfies FileFullClassificationField;
}
export function serializeFileFullSharedLinkPermissionOptionsField(
  val: FileFullSharedLinkPermissionOptionsField
): SerializedData {
  return val;
}
export function deserializeFileFullSharedLinkPermissionOptionsField(
  val: any
): FileFullSharedLinkPermissionOptionsField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "FileFullSharedLinkPermissionOptionsField"',
    });
  }
  if (val == 'can_preview') {
    return 'can_preview';
  }
  if (val == 'can_download') {
    return 'can_download';
  }
  if (val == 'can_edit') {
    return 'can_edit';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeFileFull(val: FileFull): SerializedData {
  const base: any = serializeFile(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "FileFull"' });
  }
  return {
    ...base,
    ...{
      ['version_number']:
        val.versionNumber == void 0 ? void 0 : val.versionNumber,
      ['comment_count']: val.commentCount == void 0 ? void 0 : val.commentCount,
      ['permissions']:
        val.permissions == void 0
          ? void 0
          : serializeFileFullPermissionsField(val.permissions),
      ['tags']:
        val.tags == void 0
          ? void 0
          : (val.tags.map(function (item: string): SerializedData {
              return item;
            }) as readonly any[]),
      ['lock']:
        val.lock == void 0 ? void 0 : serializeFileFullLockField(val.lock),
      ['extension']: val.extension == void 0 ? void 0 : val.extension,
      ['is_package']: val.isPackage == void 0 ? void 0 : val.isPackage,
      ['expiring_embed_link']:
        val.expiringEmbedLink == void 0
          ? void 0
          : serializeFileFullExpiringEmbedLinkField(val.expiringEmbedLink),
      ['watermark_info']:
        val.watermarkInfo == void 0
          ? void 0
          : serializeFileFullWatermarkInfoField(val.watermarkInfo),
      ['is_accessible_via_shared_link']:
        val.isAccessibleViaSharedLink == void 0
          ? void 0
          : val.isAccessibleViaSharedLink,
      ['allowed_invitee_roles']:
        val.allowedInviteeRoles == void 0
          ? void 0
          : (val.allowedInviteeRoles.map(function (
              item: FileFullAllowedInviteeRolesField
            ): SerializedData {
              return serializeFileFullAllowedInviteeRolesField(item);
            }) as readonly any[]),
      ['is_externally_owned']:
        val.isExternallyOwned == void 0 ? void 0 : val.isExternallyOwned,
      ['has_collaborations']:
        val.hasCollaborations == void 0 ? void 0 : val.hasCollaborations,
      ['metadata']:
        val.metadata == void 0
          ? void 0
          : serializeFileFullMetadataField(val.metadata),
      ['expires_at']:
        val.expiresAt == void 0 ? void 0 : serializeDateTime(val.expiresAt),
      ['representations']:
        val.representations == void 0
          ? void 0
          : serializeFileFullRepresentationsField(val.representations),
      ['classification']:
        val.classification == void 0
          ? void 0
          : serializeFileFullClassificationField(val.classification),
      ['uploader_display_name']:
        val.uploaderDisplayName == void 0 ? void 0 : val.uploaderDisplayName,
      ['disposition_at']:
        val.dispositionAt == void 0
          ? void 0
          : serializeDateTime(val.dispositionAt),
      ['shared_link_permission_options']:
        val.sharedLinkPermissionOptions == void 0
          ? void 0
          : (val.sharedLinkPermissionOptions.map(function (
              item: FileFullSharedLinkPermissionOptionsField
            ): SerializedData {
              return serializeFileFullSharedLinkPermissionOptionsField(item);
            }) as readonly any[]),
    },
  };
}
export function deserializeFileFull(val: any): FileFull {
  const versionNumber: undefined | string =
    val.version_number == void 0 ? void 0 : val.version_number;
  const commentCount: undefined | number =
    val.comment_count == void 0 ? void 0 : val.comment_count;
  const permissions: undefined | FileFullPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeFileFullPermissionsField(val.permissions);
  const tags: undefined | readonly string[] =
    val.tags == void 0 ? void 0 : sdIsList(val.tags) ? val.tags : [];
  const lock: undefined | FileFullLockField =
    val.lock == void 0 ? void 0 : deserializeFileFullLockField(val.lock);
  const extension: undefined | string =
    val.extension == void 0 ? void 0 : val.extension;
  const isPackage: undefined | boolean =
    val.is_package == void 0 ? void 0 : val.is_package;
  const expiringEmbedLink: undefined | FileFullExpiringEmbedLinkField =
    val.expiring_embed_link == void 0
      ? void 0
      : deserializeFileFullExpiringEmbedLinkField(val.expiring_embed_link);
  const watermarkInfo: undefined | FileFullWatermarkInfoField =
    val.watermark_info == void 0
      ? void 0
      : deserializeFileFullWatermarkInfoField(val.watermark_info);
  const isAccessibleViaSharedLink: undefined | boolean =
    val.is_accessible_via_shared_link == void 0
      ? void 0
      : val.is_accessible_via_shared_link;
  const allowedInviteeRoles:
    | undefined
    | readonly FileFullAllowedInviteeRolesField[] =
    val.allowed_invitee_roles == void 0
      ? void 0
      : sdIsList(val.allowed_invitee_roles)
      ? (val.allowed_invitee_roles.map(function (
          itm: SerializedData
        ): FileFullAllowedInviteeRolesField {
          return deserializeFileFullAllowedInviteeRolesField(itm);
        }) as readonly any[])
      : [];
  const isExternallyOwned: undefined | boolean =
    val.is_externally_owned == void 0 ? void 0 : val.is_externally_owned;
  const hasCollaborations: undefined | boolean =
    val.has_collaborations == void 0 ? void 0 : val.has_collaborations;
  const metadata: undefined | FileFullMetadataField =
    val.metadata == void 0
      ? void 0
      : deserializeFileFullMetadataField(val.metadata);
  const expiresAt: undefined | DateTime =
    val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
  const representations: undefined | FileFullRepresentationsField =
    val.representations == void 0
      ? void 0
      : deserializeFileFullRepresentationsField(val.representations);
  const classification: undefined | FileFullClassificationField =
    val.classification == void 0
      ? void 0
      : deserializeFileFullClassificationField(val.classification);
  const uploaderDisplayName: undefined | string =
    val.uploader_display_name == void 0 ? void 0 : val.uploader_display_name;
  const dispositionAt: undefined | DateTime =
    val.disposition_at == void 0
      ? void 0
      : deserializeDateTime(val.disposition_at);
  const sharedLinkPermissionOptions:
    | undefined
    | readonly FileFullSharedLinkPermissionOptionsField[] =
    val.shared_link_permission_options == void 0
      ? void 0
      : sdIsList(val.shared_link_permission_options)
      ? (val.shared_link_permission_options.map(function (
          itm: SerializedData
        ): FileFullSharedLinkPermissionOptionsField {
          return deserializeFileFullSharedLinkPermissionOptionsField(itm);
        }) as readonly any[])
      : [];
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
    versionNumber: versionNumber,
    commentCount: commentCount,
    permissions: permissions,
    tags: tags,
    lock: lock,
    extension: extension,
    isPackage: isPackage,
    expiringEmbedLink: expiringEmbedLink,
    watermarkInfo: watermarkInfo,
    isAccessibleViaSharedLink: isAccessibleViaSharedLink,
    allowedInviteeRoles: allowedInviteeRoles,
    isExternallyOwned: isExternallyOwned,
    hasCollaborations: hasCollaborations,
    metadata: metadata,
    expiresAt: expiresAt,
    representations: representations,
    classification: classification,
    uploaderDisplayName: uploaderDisplayName,
    dispositionAt: dispositionAt,
    sharedLinkPermissionOptions: sharedLinkPermissionOptions,
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
  } satisfies FileFull;
}
