import { FileMini } from './fileMini.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface FilePathCollectionField {
    /**
     * The number of folders in this list. */
    readonly totalCount: number;
    /**
     * The parent folders for this item. */
    readonly entries: readonly FolderMini[];
    readonly rawData?: SerializedData;
}
export type FileSharedLinkAccessField = 'open' | 'company' | 'collaborators' | string;
export type FileSharedLinkEffectiveAccessField = 'open' | 'company' | 'collaborators' | string;
export type FileSharedLinkEffectivePermissionField = 'can_edit' | 'can_download' | 'can_preview' | 'no_access' | string;
export interface FileSharedLinkPermissionsField {
    /**
     * Defines if the shared link allows for the item to be downloaded. For
     * shared links on folders, this also applies to any items in the folder.
     *
     * This value can be set to `true` when the effective access level is
     * set to `open` or `company`, not `collaborators`. */
    readonly canDownload: boolean;
    /**
     * Defines if the shared link allows for the item to be previewed.
     *
     * This value is always `true`. For shared links on folders this also
     * applies to any items in the folder. */
    readonly canPreview: boolean;
    /**
     * Defines if the shared link allows for the item to be edited.
     *
     * This value can only be `true` if `can_download` is also `true` and if
     * the item has a type of `file`. */
    readonly canEdit: boolean;
    readonly rawData?: SerializedData;
}
export interface FileSharedLinkField {
    /**
     * The URL that can be used to access the item on Box.
     *
     * This URL will display the item in Box's preview UI where the file
     * can be downloaded if allowed.
     *
     * This URL will continue to work even when a custom `vanity_url`
     * has been set for this shared link. */
    readonly url: string;
    /**
     * A URL that can be used to download the file. This URL can be used in
     * a browser to download the file. This URL includes the file
     * extension so that the file will be saved with the right file type.
     *
     * This property will be `null` for folders. */
    readonly downloadUrl?: string | null;
    /**
     * The "Custom URL" that can also be used to preview the item on Box.  Custom
     * URLs can only be created or modified in the Box Web application. */
    readonly vanityUrl?: string | null;
    /**
     * The custom name of a shared link, as used in the `vanity_url` field. */
    readonly vanityName?: string | null;
    /**
     * The access level for this shared link.
     *
     * * `open` - provides access to this item to anyone with this link
     * * `company` - only provides access to this item to people the same company
     * * `collaborators` - only provides access to this item to people who are
     *    collaborators on this item
     *
     * If this field is omitted when creating the shared link, the access level
     * will be set to the default access level specified by the enterprise admin. */
    readonly access?: FileSharedLinkAccessField;
    /**
     * The effective access level for the shared link. This can be a more
     * restrictive access level than the value in the `access` field when the
     * enterprise settings restrict the allowed access levels. */
    readonly effectiveAccess: FileSharedLinkEffectiveAccessField;
    /**
     * The effective permissions for this shared link.
     * These result in the more restrictive combination of
     * the share link permissions and the item permissions set
     * by the administrator, the owner, and any ancestor item
     * such as a folder. */
    readonly effectivePermission: FileSharedLinkEffectivePermissionField;
    /**
     * The date and time when this link will be unshared. This field can only be
     * set by users with paid accounts. */
    readonly unsharedAt?: DateTime | null;
    /**
     * Defines if the shared link requires a password to access the item. */
    readonly isPasswordEnabled: boolean;
    /**
     * Defines if this link allows a user to preview, edit, and download an item.
     * These permissions refer to the shared link only and
     * do not supersede permissions applied to the item itself. */
    readonly permissions?: FileSharedLinkPermissionsField;
    /**
     * The number of times this item has been downloaded. */
    readonly downloadCount: number;
    /**
     * The number of times this item has been previewed. */
    readonly previewCount: number;
    readonly rawData?: SerializedData;
}
export type FileItemStatusField = 'active' | 'trashed' | 'deleted' | string;
export declare class File extends FileMini {
    readonly description?: string;
    readonly size?: number;
    readonly pathCollection?: FilePathCollectionField;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly trashedAt?: DateTime | null;
    readonly purgedAt?: DateTime | null;
    readonly contentCreatedAt?: DateTime | null;
    readonly contentModifiedAt?: DateTime | null;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: FileSharedLinkField;
    readonly parent?: FolderMini | null;
    readonly itemStatus?: FileItemStatusField;
    constructor(fields: File);
}
export declare function serializeFilePathCollectionField(val: FilePathCollectionField): SerializedData;
export declare function deserializeFilePathCollectionField(val: SerializedData): FilePathCollectionField;
export declare function serializeFileSharedLinkAccessField(val: FileSharedLinkAccessField): SerializedData;
export declare function deserializeFileSharedLinkAccessField(val: SerializedData): FileSharedLinkAccessField;
export declare function serializeFileSharedLinkEffectiveAccessField(val: FileSharedLinkEffectiveAccessField): SerializedData;
export declare function deserializeFileSharedLinkEffectiveAccessField(val: SerializedData): FileSharedLinkEffectiveAccessField;
export declare function serializeFileSharedLinkEffectivePermissionField(val: FileSharedLinkEffectivePermissionField): SerializedData;
export declare function deserializeFileSharedLinkEffectivePermissionField(val: SerializedData): FileSharedLinkEffectivePermissionField;
export declare function serializeFileSharedLinkPermissionsField(val: FileSharedLinkPermissionsField): SerializedData;
export declare function deserializeFileSharedLinkPermissionsField(val: SerializedData): FileSharedLinkPermissionsField;
export declare function serializeFileSharedLinkField(val: FileSharedLinkField): SerializedData;
export declare function deserializeFileSharedLinkField(val: SerializedData): FileSharedLinkField;
export declare function serializeFileItemStatusField(val: FileItemStatusField): SerializedData;
export declare function deserializeFileItemStatusField(val: SerializedData): FileItemStatusField;
export declare function serializeFile(val: File): SerializedData;
export declare function deserializeFile(val: SerializedData): File;
//# sourceMappingURL=file.generated.d.ts.map