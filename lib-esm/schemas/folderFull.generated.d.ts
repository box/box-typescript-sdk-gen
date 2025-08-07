import { Folder } from './folder.generated.js';
import { MetadataFull } from './metadataFull.generated.js';
import { SerializedData } from '../serialization/json.js';
export type FolderFullSyncStateField = 'synced' | 'not_synced' | 'partially_synced' | string;
export interface FolderFullPermissionsField {
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
     * Specifies if the user can upload into this folder. */
    readonly canUpload: boolean;
    readonly rawData?: SerializedData;
}
export interface FolderFullMetadataField {
    readonly extraData?: {
        readonly [key: string]: {
            readonly [key: string]: MetadataFull;
        };
    };
    readonly rawData?: SerializedData;
}
export type FolderFullAllowedSharedLinkAccessLevelsField = 'open' | 'company' | 'collaborators' | string;
export type FolderFullAllowedInviteeRolesField = 'editor' | 'viewer' | 'previewer' | 'uploader' | 'previewer uploader' | 'viewer uploader' | 'co-owner' | string;
export interface FolderFullWatermarkInfoField {
    /**
     * Specifies if this item has a watermark applied. */
    readonly isWatermarked?: boolean;
    readonly rawData?: SerializedData;
}
export interface FolderFullClassificationField {
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
export declare class FolderFull extends Folder {
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
    readonly isAssociatedWithAppItem?: boolean;
    constructor(fields: FolderFull);
}
export declare function serializeFolderFullSyncStateField(val: FolderFullSyncStateField): SerializedData;
export declare function deserializeFolderFullSyncStateField(val: SerializedData): FolderFullSyncStateField;
export declare function serializeFolderFullPermissionsField(val: FolderFullPermissionsField): SerializedData;
export declare function deserializeFolderFullPermissionsField(val: SerializedData): FolderFullPermissionsField;
export declare function serializeFolderFullMetadataField(val: FolderFullMetadataField): SerializedData;
export declare function deserializeFolderFullMetadataField(val: SerializedData): FolderFullMetadataField;
export declare function serializeFolderFullAllowedSharedLinkAccessLevelsField(val: FolderFullAllowedSharedLinkAccessLevelsField): SerializedData;
export declare function deserializeFolderFullAllowedSharedLinkAccessLevelsField(val: SerializedData): FolderFullAllowedSharedLinkAccessLevelsField;
export declare function serializeFolderFullAllowedInviteeRolesField(val: FolderFullAllowedInviteeRolesField): SerializedData;
export declare function deserializeFolderFullAllowedInviteeRolesField(val: SerializedData): FolderFullAllowedInviteeRolesField;
export declare function serializeFolderFullWatermarkInfoField(val: FolderFullWatermarkInfoField): SerializedData;
export declare function deserializeFolderFullWatermarkInfoField(val: SerializedData): FolderFullWatermarkInfoField;
export declare function serializeFolderFullClassificationField(val: FolderFullClassificationField): SerializedData;
export declare function deserializeFolderFullClassificationField(val: SerializedData): FolderFullClassificationField;
export declare function serializeFolderFull(val: FolderFull): SerializedData;
export declare function deserializeFolderFull(val: SerializedData): FolderFull;
