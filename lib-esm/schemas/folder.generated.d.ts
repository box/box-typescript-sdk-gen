import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { Items } from './items.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface FolderPathCollectionField {
    /**
     * The number of folders in this list. */
    readonly totalCount: number;
    /**
     * The parent folders for this item. */
    readonly entries: readonly FolderMini[];
    readonly rawData?: SerializedData;
}
export type FolderSharedLinkAccessField = 'open' | 'company' | 'collaborators' | string;
export type FolderSharedLinkEffectiveAccessField = 'open' | 'company' | 'collaborators' | string;
export type FolderSharedLinkEffectivePermissionField = 'can_edit' | 'can_download' | 'can_preview' | 'no_access' | string;
export interface FolderSharedLinkPermissionsField {
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
export interface FolderSharedLinkField {
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
    readonly access?: FolderSharedLinkAccessField;
    /**
     * The effective access level for the shared link. This can be a more
     * restrictive access level than the value in the `access` field when the
     * enterprise settings restrict the allowed access levels. */
    readonly effectiveAccess: FolderSharedLinkEffectiveAccessField;
    /**
     * The effective permissions for this shared link.
     * These result in the more restrictive combination of
     * the share link permissions and the item permissions set
     * by the administrator, the owner, and any ancestor item
     * such as a folder. */
    readonly effectivePermission: FolderSharedLinkEffectivePermissionField;
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
    readonly permissions?: FolderSharedLinkPermissionsField;
    /**
     * The number of times this item has been downloaded. */
    readonly downloadCount: number;
    /**
     * The number of times this item has been previewed. */
    readonly previewCount: number;
    readonly rawData?: SerializedData;
}
export type FolderFolderUploadEmailAccessField = 'open' | 'collaborators' | string;
export interface FolderFolderUploadEmailField {
    /**
     * When this parameter has been set, users can email files
     * to the email address that has been automatically
     * created for this folder.
     *
     * To create an email address, set this property either when
     * creating or updating the folder.
     *
     * When set to `collaborators`, only emails from registered email
     * addresses for collaborators will be accepted. This includes
     * any email aliases a user might have registered.
     *
     * When set to `open` it will accept emails from any email
     * address. */
    readonly access?: FolderFolderUploadEmailAccessField;
    /**
     * The optional upload email address for this folder. */
    readonly email?: string;
    readonly rawData?: SerializedData;
}
export type FolderItemStatusField = 'active' | 'trashed' | 'deleted' | string;
export declare class Folder extends FolderMini {
    readonly createdAt?: DateTime | null;
    readonly modifiedAt?: DateTime | null;
    readonly description?: string;
    readonly size?: number;
    readonly pathCollection?: FolderPathCollectionField;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly trashedAt?: DateTime | null;
    readonly purgedAt?: DateTime | null;
    readonly contentCreatedAt?: DateTime | null;
    readonly contentModifiedAt?: DateTime | null;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: FolderSharedLinkField | null;
    readonly folderUploadEmail?: FolderFolderUploadEmailField | null;
    readonly parent?: FolderMini | null;
    readonly itemStatus?: FolderItemStatusField;
    readonly itemCollection?: Items;
    constructor(fields: Folder);
}
export declare function serializeFolderPathCollectionField(val: FolderPathCollectionField): SerializedData;
export declare function deserializeFolderPathCollectionField(val: SerializedData): FolderPathCollectionField;
export declare function serializeFolderSharedLinkAccessField(val: FolderSharedLinkAccessField): SerializedData;
export declare function deserializeFolderSharedLinkAccessField(val: SerializedData): FolderSharedLinkAccessField;
export declare function serializeFolderSharedLinkEffectiveAccessField(val: FolderSharedLinkEffectiveAccessField): SerializedData;
export declare function deserializeFolderSharedLinkEffectiveAccessField(val: SerializedData): FolderSharedLinkEffectiveAccessField;
export declare function serializeFolderSharedLinkEffectivePermissionField(val: FolderSharedLinkEffectivePermissionField): SerializedData;
export declare function deserializeFolderSharedLinkEffectivePermissionField(val: SerializedData): FolderSharedLinkEffectivePermissionField;
export declare function serializeFolderSharedLinkPermissionsField(val: FolderSharedLinkPermissionsField): SerializedData;
export declare function deserializeFolderSharedLinkPermissionsField(val: SerializedData): FolderSharedLinkPermissionsField;
export declare function serializeFolderSharedLinkField(val: FolderSharedLinkField): SerializedData;
export declare function deserializeFolderSharedLinkField(val: SerializedData): FolderSharedLinkField;
export declare function serializeFolderFolderUploadEmailAccessField(val: FolderFolderUploadEmailAccessField): SerializedData;
export declare function deserializeFolderFolderUploadEmailAccessField(val: SerializedData): FolderFolderUploadEmailAccessField;
export declare function serializeFolderFolderUploadEmailField(val: FolderFolderUploadEmailField): SerializedData;
export declare function deserializeFolderFolderUploadEmailField(val: SerializedData): FolderFolderUploadEmailField;
export declare function serializeFolderItemStatusField(val: FolderItemStatusField): SerializedData;
export declare function deserializeFolderItemStatusField(val: SerializedData): FolderItemStatusField;
export declare function serializeFolder(val: Folder): SerializedData;
export declare function deserializeFolder(val: SerializedData): Folder;
