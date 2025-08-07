import { File } from './file.generated.js';
import { UserMini } from './userMini.generated.js';
import { FileOrFolderScope } from './fileOrFolderScope.generated.js';
import { MetadataFull } from './metadataFull.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface FileFullPermissionsField {
    /**
     * Specifies if the current user can delete this item. */
    readonly canDelete: boolean;
    /**
     * Specifies if the current user can download this item. */
    readonly canDownload: boolean;
    /**
     * Specifies if the current user can invite new
     * users to collaborate on this item, and if the user can
     * update the role of a user already collaborated on this
     * item. */
    readonly canInviteCollaborator: boolean;
    /**
     * Specifies if the user can rename this item. */
    readonly canRename: boolean;
    /**
     * Specifies if the user can change the access level of an
     * existing shared link on this item. */
    readonly canSetShareAccess: boolean;
    /**
     * Specifies if the user can create a shared link for this item. */
    readonly canShare: boolean;
    /**
     * Specifies if the user can place annotations on this file. */
    readonly canAnnotate: boolean;
    /**
     * Specifies if the user can place comments on this file. */
    readonly canComment: boolean;
    /**
     * Specifies if the user can preview this file. */
    readonly canPreview: boolean;
    /**
     * Specifies if the user can upload a new version of this file. */
    readonly canUpload: boolean;
    /**
     * Specifies if the user view all annotations placed on this file. */
    readonly canViewAnnotationsAll: boolean;
    /**
     * Specifies if the user view annotations placed by themselves
     * on this file. */
    readonly canViewAnnotationsSelf: boolean;
    readonly rawData?: SerializedData;
}
export type FileFullLockTypeField = 'lock';
export type FileFullLockAppTypeField = 'gsuite' | 'office_wopi' | 'office_wopiplus' | 'other' | string;
export interface FileFullLockField {
    /**
     * The unique identifier for this lock. */
    readonly id?: string;
    /**
     * The value will always be `lock`. */
    readonly type?: FileFullLockTypeField;
    readonly createdBy?: UserMini;
    /**
     * The time this lock was created at. */
    readonly createdAt?: DateTime;
    /**
     * The time this lock is to expire at, which might be in the past. */
    readonly expiredAt?: DateTime;
    /**
     * Whether or not the file can be downloaded while locked. */
    readonly isDownloadPrevented?: boolean;
    /**
     * If the lock is managed by an application rather than a user, this
     * field identifies the type of the application that holds the lock.
     * This is an open enum and may be extended with additional values in
     * the future. */
    readonly appType?: FileFullLockAppTypeField | null;
    readonly rawData?: SerializedData;
}
export type FileFullExpiringEmbedLinkTokenTypeField = 'bearer' | string;
export interface FileFullExpiringEmbedLinkField {
    /**
     * The requested access token. */
    readonly accessToken?: string;
    /**
     * The time in seconds by which this token will expire. */
    readonly expiresIn?: number;
    /**
     * The type of access token returned. */
    readonly tokenType?: FileFullExpiringEmbedLinkTokenTypeField;
    /**
     * The permissions that this access token permits,
     * providing a list of resources (files, folders, etc)
     * and the scopes permitted for each of those resources. */
    readonly restrictedTo?: readonly FileOrFolderScope[];
    /**
     * The actual expiring embed URL for this file, constructed
     * from the file ID and access tokens specified in this object. */
    readonly url?: string;
    readonly rawData?: SerializedData;
}
export interface FileFullWatermarkInfoField {
    /**
     * Specifies if this item has a watermark applied. */
    readonly isWatermarked?: boolean;
    readonly rawData?: SerializedData;
}
export type FileFullAllowedInviteeRolesField = 'editor' | 'viewer' | 'previewer' | 'uploader' | 'previewer uploader' | 'viewer uploader' | 'co-owner' | string;
export interface FileFullMetadataField {
    readonly extraData?: {
        readonly [key: string]: {
            readonly [key: string]: MetadataFull;
        };
    };
    readonly rawData?: SerializedData;
}
export interface FileFullRepresentationsEntriesContentField {
    /**
     * The download URL that can be used to fetch the representation.
     * Make sure to make an authenticated API call to this endpoint.
     *
     * This URL is a template and will require the `{+asset_path}` to
     * be replaced by a path. In general, for unpaged representations
     * it can be replaced by an empty string.
     *
     * For paged representations, replace the `{+asset_path}` with the
     * page to request plus the extension for the file, for example
     * `1.pdf`.
     *
     * When requesting the download URL the following additional
     * query params can be passed along.
     *
     * * `set_content_disposition_type` - Sets the
     * `Content-Disposition` header in the API response with the
     * specified disposition type of either `inline` or `attachment`.
     * If not supplied, the `Content-Disposition` header is not
     * included in the response.
     *
     * * `set_content_disposition_filename` - Allows the application to
     *   define the representation's file name used in the
     *   `Content-Disposition` header.  If not defined, the filename
     *   is derived from the source file name in Box combined with the
     *   extension of the representation. */
    readonly urlTemplate?: string;
    readonly rawData?: SerializedData;
}
export interface FileFullRepresentationsEntriesInfoField {
    /**
     * The API URL that can be used to get more info on this file
     * representation. Make sure to make an authenticated API call
     * to this endpoint. */
    readonly url?: string;
    readonly rawData?: SerializedData;
}
export interface FileFullRepresentationsEntriesPropertiesField {
    /**
     * The width by height size of this representation in pixels. */
    readonly dimensions?: string;
    /**
     * Indicates if the representation is build up out of multiple
     * pages. */
    readonly paged?: string;
    /**
     * Indicates if the representation can be used as a thumbnail of
     * the file. */
    readonly thumb?: string;
    readonly rawData?: SerializedData;
}
export type FileFullRepresentationsEntriesStatusStateField = 'success' | 'viewable' | 'pending' | 'none' | string;
export interface FileFullRepresentationsEntriesStatusField {
    /**
     * The status of the representation.
     *
     * * `success` defines the representation as ready to be viewed.
     * * `viewable` defines a video to be ready for viewing.
     * * `pending` defines the representation as to be generated. Retry
     *   this endpoint to re-check the status.
     * * `none` defines that the representation will be created when
     *   requested. Request the URL defined in the `info` object to
     *   trigger this generation. */
    readonly state?: FileFullRepresentationsEntriesStatusStateField;
    readonly rawData?: SerializedData;
}
export interface FileFullRepresentationsEntriesField {
    /**
     * An object containing the URL that can be used to actually fetch
     * the representation. */
    readonly content?: FileFullRepresentationsEntriesContentField;
    /**
     * An object containing the URL that can be used to fetch more info
     * on this representation. */
    readonly info?: FileFullRepresentationsEntriesInfoField;
    /**
     * An object containing the size and type of this presentation. */
    readonly properties?: FileFullRepresentationsEntriesPropertiesField;
    /**
     * Indicates the file type of the returned representation. */
    readonly representation?: string;
    /**
     * An object containing the status of this representation. */
    readonly status?: FileFullRepresentationsEntriesStatusField;
    readonly rawData?: SerializedData;
}
export interface FileFullRepresentationsField {
    /**
     * A list of files. */
    readonly entries?: readonly FileFullRepresentationsEntriesField[];
    readonly rawData?: SerializedData;
}
export interface FileFullClassificationField {
    /**
     * The name of the classification. */
    readonly name?: string;
    /**
     * An explanation of the meaning of this classification. */
    readonly definition?: string;
    /**
     * The color that is used to display the
     * classification label in a user-interface. Colors are defined by the admin
     * or co-admin who created the classification in the Box web app. */
    readonly color?: string;
    readonly rawData?: SerializedData;
}
export type FileFullSharedLinkPermissionOptionsField = 'can_preview' | 'can_download' | 'can_edit' | string;
export declare class FileFull extends File {
    readonly versionNumber?: string;
    readonly commentCount?: number;
    readonly permissions?: FileFullPermissionsField;
    readonly tags?: readonly string[];
    readonly lock?: FileFullLockField | null;
    readonly extension?: string;
    readonly isPackage?: boolean;
    readonly expiringEmbedLink?: FileFullExpiringEmbedLinkField;
    readonly watermarkInfo?: FileFullWatermarkInfoField;
    readonly isAccessibleViaSharedLink?: boolean;
    readonly allowedInviteeRoles?: readonly FileFullAllowedInviteeRolesField[];
    readonly isExternallyOwned?: boolean;
    readonly hasCollaborations?: boolean;
    readonly metadata?: FileFullMetadataField;
    readonly expiresAt?: DateTime | null;
    readonly representations?: FileFullRepresentationsField;
    readonly classification?: FileFullClassificationField;
    readonly uploaderDisplayName?: string;
    readonly dispositionAt?: DateTime | null;
    readonly sharedLinkPermissionOptions?: readonly FileFullSharedLinkPermissionOptionsField[] | null;
    readonly isAssociatedWithAppItem?: boolean;
    constructor(fields: FileFull);
}
export declare function serializeFileFullPermissionsField(val: FileFullPermissionsField): SerializedData;
export declare function deserializeFileFullPermissionsField(val: SerializedData): FileFullPermissionsField;
export declare function serializeFileFullLockTypeField(val: FileFullLockTypeField): SerializedData;
export declare function deserializeFileFullLockTypeField(val: SerializedData): FileFullLockTypeField;
export declare function serializeFileFullLockAppTypeField(val: FileFullLockAppTypeField): SerializedData;
export declare function deserializeFileFullLockAppTypeField(val: SerializedData): FileFullLockAppTypeField;
export declare function serializeFileFullLockField(val: FileFullLockField): SerializedData;
export declare function deserializeFileFullLockField(val: SerializedData): FileFullLockField;
export declare function serializeFileFullExpiringEmbedLinkTokenTypeField(val: FileFullExpiringEmbedLinkTokenTypeField): SerializedData;
export declare function deserializeFileFullExpiringEmbedLinkTokenTypeField(val: SerializedData): FileFullExpiringEmbedLinkTokenTypeField;
export declare function serializeFileFullExpiringEmbedLinkField(val: FileFullExpiringEmbedLinkField): SerializedData;
export declare function deserializeFileFullExpiringEmbedLinkField(val: SerializedData): FileFullExpiringEmbedLinkField;
export declare function serializeFileFullWatermarkInfoField(val: FileFullWatermarkInfoField): SerializedData;
export declare function deserializeFileFullWatermarkInfoField(val: SerializedData): FileFullWatermarkInfoField;
export declare function serializeFileFullAllowedInviteeRolesField(val: FileFullAllowedInviteeRolesField): SerializedData;
export declare function deserializeFileFullAllowedInviteeRolesField(val: SerializedData): FileFullAllowedInviteeRolesField;
export declare function serializeFileFullMetadataField(val: FileFullMetadataField): SerializedData;
export declare function deserializeFileFullMetadataField(val: SerializedData): FileFullMetadataField;
export declare function serializeFileFullRepresentationsEntriesContentField(val: FileFullRepresentationsEntriesContentField): SerializedData;
export declare function deserializeFileFullRepresentationsEntriesContentField(val: SerializedData): FileFullRepresentationsEntriesContentField;
export declare function serializeFileFullRepresentationsEntriesInfoField(val: FileFullRepresentationsEntriesInfoField): SerializedData;
export declare function deserializeFileFullRepresentationsEntriesInfoField(val: SerializedData): FileFullRepresentationsEntriesInfoField;
export declare function serializeFileFullRepresentationsEntriesPropertiesField(val: FileFullRepresentationsEntriesPropertiesField): SerializedData;
export declare function deserializeFileFullRepresentationsEntriesPropertiesField(val: SerializedData): FileFullRepresentationsEntriesPropertiesField;
export declare function serializeFileFullRepresentationsEntriesStatusStateField(val: FileFullRepresentationsEntriesStatusStateField): SerializedData;
export declare function deserializeFileFullRepresentationsEntriesStatusStateField(val: SerializedData): FileFullRepresentationsEntriesStatusStateField;
export declare function serializeFileFullRepresentationsEntriesStatusField(val: FileFullRepresentationsEntriesStatusField): SerializedData;
export declare function deserializeFileFullRepresentationsEntriesStatusField(val: SerializedData): FileFullRepresentationsEntriesStatusField;
export declare function serializeFileFullRepresentationsEntriesField(val: FileFullRepresentationsEntriesField): SerializedData;
export declare function deserializeFileFullRepresentationsEntriesField(val: SerializedData): FileFullRepresentationsEntriesField;
export declare function serializeFileFullRepresentationsField(val: FileFullRepresentationsField): SerializedData;
export declare function deserializeFileFullRepresentationsField(val: SerializedData): FileFullRepresentationsField;
export declare function serializeFileFullClassificationField(val: FileFullClassificationField): SerializedData;
export declare function deserializeFileFullClassificationField(val: SerializedData): FileFullClassificationField;
export declare function serializeFileFullSharedLinkPermissionOptionsField(val: FileFullSharedLinkPermissionOptionsField): SerializedData;
export declare function deserializeFileFullSharedLinkPermissionOptionsField(val: SerializedData): FileFullSharedLinkPermissionOptionsField;
export declare function serializeFileFull(val: FileFull): SerializedData;
export declare function deserializeFileFull(val: SerializedData): FileFull;
//# sourceMappingURL=fileFull.generated.d.ts.map