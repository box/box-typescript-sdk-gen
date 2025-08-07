import { WebLinkMini } from './webLinkMini.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export interface WebLinkPathCollectionField {
    /**
     * The number of folders in this list. */
    readonly totalCount: number;
    /**
     * The parent folders for this item. */
    readonly entries: readonly FolderMini[];
    readonly rawData?: SerializedData;
}
export type WebLinkSharedLinkAccessField = 'open' | 'company' | 'collaborators' | string;
export type WebLinkSharedLinkEffectiveAccessField = 'open' | 'company' | 'collaborators' | string;
export type WebLinkSharedLinkEffectivePermissionField = 'can_edit' | 'can_download' | 'can_preview' | 'no_access' | string;
export interface WebLinkSharedLinkPermissionsField {
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
export interface WebLinkSharedLinkField {
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
    readonly access?: WebLinkSharedLinkAccessField;
    /**
     * The effective access level for the shared link. This can be a more
     * restrictive access level than the value in the `access` field when the
     * enterprise settings restrict the allowed access levels. */
    readonly effectiveAccess: WebLinkSharedLinkEffectiveAccessField;
    /**
     * The effective permissions for this shared link.
     * These result in the more restrictive combination of
     * the share link permissions and the item permissions set
     * by the administrator, the owner, and any ancestor item
     * such as a folder. */
    readonly effectivePermission: WebLinkSharedLinkEffectivePermissionField;
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
    readonly permissions?: WebLinkSharedLinkPermissionsField;
    /**
     * The number of times this item has been downloaded. */
    readonly downloadCount: number;
    /**
     * The number of times this item has been previewed. */
    readonly previewCount: number;
    readonly rawData?: SerializedData;
}
export type WebLinkItemStatusField = 'active' | 'trashed' | 'deleted' | string;
export declare class WebLink extends WebLinkMini {
    readonly parent?: FolderMini;
    readonly description?: string;
    readonly pathCollection?: WebLinkPathCollectionField;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly trashedAt?: DateTime | null;
    readonly purgedAt?: DateTime | null;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: WebLinkSharedLinkField;
    readonly itemStatus?: WebLinkItemStatusField;
    constructor(fields: WebLink);
}
export declare function serializeWebLinkPathCollectionField(val: WebLinkPathCollectionField): SerializedData;
export declare function deserializeWebLinkPathCollectionField(val: SerializedData): WebLinkPathCollectionField;
export declare function serializeWebLinkSharedLinkAccessField(val: WebLinkSharedLinkAccessField): SerializedData;
export declare function deserializeWebLinkSharedLinkAccessField(val: SerializedData): WebLinkSharedLinkAccessField;
export declare function serializeWebLinkSharedLinkEffectiveAccessField(val: WebLinkSharedLinkEffectiveAccessField): SerializedData;
export declare function deserializeWebLinkSharedLinkEffectiveAccessField(val: SerializedData): WebLinkSharedLinkEffectiveAccessField;
export declare function serializeWebLinkSharedLinkEffectivePermissionField(val: WebLinkSharedLinkEffectivePermissionField): SerializedData;
export declare function deserializeWebLinkSharedLinkEffectivePermissionField(val: SerializedData): WebLinkSharedLinkEffectivePermissionField;
export declare function serializeWebLinkSharedLinkPermissionsField(val: WebLinkSharedLinkPermissionsField): SerializedData;
export declare function deserializeWebLinkSharedLinkPermissionsField(val: SerializedData): WebLinkSharedLinkPermissionsField;
export declare function serializeWebLinkSharedLinkField(val: WebLinkSharedLinkField): SerializedData;
export declare function deserializeWebLinkSharedLinkField(val: SerializedData): WebLinkSharedLinkField;
export declare function serializeWebLinkItemStatusField(val: WebLinkItemStatusField): SerializedData;
export declare function deserializeWebLinkItemStatusField(val: SerializedData): WebLinkItemStatusField;
export declare function serializeWebLink(val: WebLink): SerializedData;
export declare function deserializeWebLink(val: SerializedData): WebLink;
//# sourceMappingURL=webLink.generated.d.ts.map