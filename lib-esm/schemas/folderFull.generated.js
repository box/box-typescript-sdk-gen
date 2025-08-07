import { deserializeFolderBaseTypeField } from './folderBase.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { deserializeDateTime } from '../internal/utils.js';
import { deserializeFolderPathCollectionField } from './folder.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { deserializeFolderSharedLinkField } from './folder.generated.js';
import { deserializeFolderFolderUploadEmailField } from './folder.generated.js';
import { deserializeFolderItemStatusField } from './folder.generated.js';
import { deserializeItems } from './items.generated.js';
import { serializeFolder } from './folder.generated.js';
import { deserializeMetadataFull } from './metadataFull.generated.js';
import { Folder } from './folder.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class FolderFull extends Folder {
    constructor(fields) {
        super(fields);
        if (fields.syncState !== undefined) {
            this.syncState = fields.syncState;
        }
        if (fields.hasCollaborations !== undefined) {
            this.hasCollaborations = fields.hasCollaborations;
        }
        if (fields.permissions !== undefined) {
            this.permissions = fields.permissions;
        }
        if (fields.tags !== undefined) {
            this.tags = fields.tags;
        }
        if (fields.canNonOwnersInvite !== undefined) {
            this.canNonOwnersInvite = fields.canNonOwnersInvite;
        }
        if (fields.isExternallyOwned !== undefined) {
            this.isExternallyOwned = fields.isExternallyOwned;
        }
        if (fields.metadata !== undefined) {
            this.metadata = fields.metadata;
        }
        if (fields.isCollaborationRestrictedToEnterprise !== undefined) {
            this.isCollaborationRestrictedToEnterprise =
                fields.isCollaborationRestrictedToEnterprise;
        }
        if (fields.allowedSharedLinkAccessLevels !== undefined) {
            this.allowedSharedLinkAccessLevels = fields.allowedSharedLinkAccessLevels;
        }
        if (fields.allowedInviteeRoles !== undefined) {
            this.allowedInviteeRoles = fields.allowedInviteeRoles;
        }
        if (fields.watermarkInfo !== undefined) {
            this.watermarkInfo = fields.watermarkInfo;
        }
        if (fields.isAccessibleViaSharedLink !== undefined) {
            this.isAccessibleViaSharedLink = fields.isAccessibleViaSharedLink;
        }
        if (fields.canNonOwnersViewCollaborators !== undefined) {
            this.canNonOwnersViewCollaborators = fields.canNonOwnersViewCollaborators;
        }
        if (fields.classification !== undefined) {
            this.classification = fields.classification;
        }
        if (fields.isAssociatedWithAppItem !== undefined) {
            this.isAssociatedWithAppItem = fields.isAssociatedWithAppItem;
        }
    }
}
export function serializeFolderFullSyncStateField(val) {
    return val;
}
export function deserializeFolderFullSyncStateField(val) {
    if (val == 'synced') {
        return val;
    }
    if (val == 'not_synced') {
        return val;
    }
    if (val == 'partially_synced') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize FolderFullSyncStateField",
    });
}
export function serializeFolderFullPermissionsField(val) {
    return {
        ['can_delete']: val.canDelete,
        ['can_download']: val.canDownload,
        ['can_invite_collaborator']: val.canInviteCollaborator,
        ['can_rename']: val.canRename,
        ['can_set_share_access']: val.canSetShareAccess,
        ['can_share']: val.canShare,
        ['can_upload']: val.canUpload,
    };
}
export function deserializeFolderFullPermissionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FolderFullPermissionsField"',
        });
    }
    if (val.can_delete == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "can_delete" of type "FolderFullPermissionsField" to be defined',
        });
    }
    if (!sdIsBoolean(val.can_delete)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_delete" of type "FolderFullPermissionsField"',
        });
    }
    const canDelete = val.can_delete;
    if (val.can_download == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "can_download" of type "FolderFullPermissionsField" to be defined',
        });
    }
    if (!sdIsBoolean(val.can_download)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "FolderFullPermissionsField"',
        });
    }
    const canDownload = val.can_download;
    if (val.can_invite_collaborator == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "can_invite_collaborator" of type "FolderFullPermissionsField" to be defined',
        });
    }
    if (!sdIsBoolean(val.can_invite_collaborator)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_invite_collaborator" of type "FolderFullPermissionsField"',
        });
    }
    const canInviteCollaborator = val.can_invite_collaborator;
    if (val.can_rename == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "can_rename" of type "FolderFullPermissionsField" to be defined',
        });
    }
    if (!sdIsBoolean(val.can_rename)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_rename" of type "FolderFullPermissionsField"',
        });
    }
    const canRename = val.can_rename;
    if (val.can_set_share_access == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "can_set_share_access" of type "FolderFullPermissionsField" to be defined',
        });
    }
    if (!sdIsBoolean(val.can_set_share_access)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_set_share_access" of type "FolderFullPermissionsField"',
        });
    }
    const canSetShareAccess = val.can_set_share_access;
    if (val.can_share == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "can_share" of type "FolderFullPermissionsField" to be defined',
        });
    }
    if (!sdIsBoolean(val.can_share)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_share" of type "FolderFullPermissionsField"',
        });
    }
    const canShare = val.can_share;
    if (val.can_upload == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "can_upload" of type "FolderFullPermissionsField" to be defined',
        });
    }
    if (!sdIsBoolean(val.can_upload)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_upload" of type "FolderFullPermissionsField"',
        });
    }
    const canUpload = val.can_upload;
    return {
        canDelete: canDelete,
        canDownload: canDownload,
        canInviteCollaborator: canInviteCollaborator,
        canRename: canRename,
        canSetShareAccess: canSetShareAccess,
        canShare: canShare,
        canUpload: canUpload,
    };
}
export function serializeFolderFullMetadataField(val) {
    return { ...{}, ...val.extraData };
}
export function deserializeFolderFullMetadataField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FolderFullMetadataField"',
        });
    }
    if (!(val == void 0) && !sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting object for "extraData" of type "FolderFullMetadataField"',
        });
    }
    const extraData = val == void 0
        ? void 0
        : sdIsMap(val)
            ? Object.fromEntries(Object.entries(val).map(([k, v]) => [
                k,
                (function (v) {
                    return sdIsMap(v)
                        ? Object.fromEntries(Object.entries(v).map(([k, v]) => [
                            k,
                            deserializeMetadataFull(v),
                        ]))
                        : {};
                })(v),
            ]))
            : {};
    return { extraData: extraData };
}
export function serializeFolderFullAllowedSharedLinkAccessLevelsField(val) {
    return val;
}
export function deserializeFolderFullAllowedSharedLinkAccessLevelsField(val) {
    if (val == 'open') {
        return val;
    }
    if (val == 'company') {
        return val;
    }
    if (val == 'collaborators') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize FolderFullAllowedSharedLinkAccessLevelsField",
    });
}
export function serializeFolderFullAllowedInviteeRolesField(val) {
    return val;
}
export function deserializeFolderFullAllowedInviteeRolesField(val) {
    if (val == 'editor') {
        return val;
    }
    if (val == 'viewer') {
        return val;
    }
    if (val == 'previewer') {
        return val;
    }
    if (val == 'uploader') {
        return val;
    }
    if (val == 'previewer uploader') {
        return val;
    }
    if (val == 'viewer uploader') {
        return val;
    }
    if (val == 'co-owner') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize FolderFullAllowedInviteeRolesField",
    });
}
export function serializeFolderFullWatermarkInfoField(val) {
    return { ['is_watermarked']: val.isWatermarked };
}
export function deserializeFolderFullWatermarkInfoField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FolderFullWatermarkInfoField"',
        });
    }
    if (!(val.is_watermarked == void 0) && !sdIsBoolean(val.is_watermarked)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_watermarked" of type "FolderFullWatermarkInfoField"',
        });
    }
    const isWatermarked = val.is_watermarked == void 0 ? void 0 : val.is_watermarked;
    return {
        isWatermarked: isWatermarked,
    };
}
export function serializeFolderFullClassificationField(val) {
    return {
        ['name']: val.name,
        ['definition']: val.definition,
        ['color']: val.color,
    };
}
export function deserializeFolderFullClassificationField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FolderFullClassificationField"',
        });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "FolderFullClassificationField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.definition == void 0) && !sdIsString(val.definition)) {
        throw new BoxSdkError({
            message: 'Expecting string for "definition" of type "FolderFullClassificationField"',
        });
    }
    const definition = val.definition == void 0 ? void 0 : val.definition;
    if (!(val.color == void 0) && !sdIsString(val.color)) {
        throw new BoxSdkError({
            message: 'Expecting string for "color" of type "FolderFullClassificationField"',
        });
    }
    const color = val.color == void 0 ? void 0 : val.color;
    return {
        name: name,
        definition: definition,
        color: color,
    };
}
export function serializeFolderFull(val) {
    const base = serializeFolder(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "FolderFull"' });
    }
    return {
        ...base,
        ...{
            ['sync_state']: val.syncState == void 0
                ? val.syncState
                : serializeFolderFullSyncStateField(val.syncState),
            ['has_collaborations']: val.hasCollaborations,
            ['permissions']: val.permissions == void 0
                ? val.permissions
                : serializeFolderFullPermissionsField(val.permissions),
            ['tags']: val.tags == void 0
                ? val.tags
                : val.tags.map(function (item) {
                    return item;
                }),
            ['can_non_owners_invite']: val.canNonOwnersInvite,
            ['is_externally_owned']: val.isExternallyOwned,
            ['metadata']: val.metadata == void 0
                ? val.metadata
                : serializeFolderFullMetadataField(val.metadata),
            ['is_collaboration_restricted_to_enterprise']: val.isCollaborationRestrictedToEnterprise,
            ['allowed_shared_link_access_levels']: val.allowedSharedLinkAccessLevels == void 0
                ? val.allowedSharedLinkAccessLevels
                : val.allowedSharedLinkAccessLevels.map(function (item) {
                    return serializeFolderFullAllowedSharedLinkAccessLevelsField(item);
                }),
            ['allowed_invitee_roles']: val.allowedInviteeRoles == void 0
                ? val.allowedInviteeRoles
                : val.allowedInviteeRoles.map(function (item) {
                    return serializeFolderFullAllowedInviteeRolesField(item);
                }),
            ['watermark_info']: val.watermarkInfo == void 0
                ? val.watermarkInfo
                : serializeFolderFullWatermarkInfoField(val.watermarkInfo),
            ['is_accessible_via_shared_link']: val.isAccessibleViaSharedLink,
            ['can_non_owners_view_collaborators']: val.canNonOwnersViewCollaborators,
            ['classification']: val.classification == void 0
                ? val.classification
                : serializeFolderFullClassificationField(val.classification),
            ['is_associated_with_app_item']: val.isAssociatedWithAppItem,
        },
    };
}
export function deserializeFolderFull(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "FolderFull"' });
    }
    const syncState = val.sync_state == void 0
        ? void 0
        : deserializeFolderFullSyncStateField(val.sync_state);
    if (!(val.has_collaborations == void 0) &&
        !sdIsBoolean(val.has_collaborations)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "has_collaborations" of type "FolderFull"',
        });
    }
    const hasCollaborations = val.has_collaborations == void 0 ? void 0 : val.has_collaborations;
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeFolderFullPermissionsField(val.permissions);
    if (!(val.tags == void 0) && !sdIsList(val.tags)) {
        throw new BoxSdkError({
            message: 'Expecting array for "tags" of type "FolderFull"',
        });
    }
    const tags = val.tags == void 0
        ? void 0
        : sdIsList(val.tags)
            ? val.tags.map(function (itm) {
                if (!sdIsString(itm)) {
                    throw new BoxSdkError({
                        message: 'Expecting string for "FolderFull"',
                    });
                }
                return itm;
            })
            : [];
    if (!(val.can_non_owners_invite == void 0) &&
        !sdIsBoolean(val.can_non_owners_invite)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_non_owners_invite" of type "FolderFull"',
        });
    }
    const canNonOwnersInvite = val.can_non_owners_invite == void 0 ? void 0 : val.can_non_owners_invite;
    if (!(val.is_externally_owned == void 0) &&
        !sdIsBoolean(val.is_externally_owned)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_externally_owned" of type "FolderFull"',
        });
    }
    const isExternallyOwned = val.is_externally_owned == void 0 ? void 0 : val.is_externally_owned;
    const metadata = val.metadata == void 0
        ? void 0
        : deserializeFolderFullMetadataField(val.metadata);
    if (!(val.is_collaboration_restricted_to_enterprise == void 0) &&
        !sdIsBoolean(val.is_collaboration_restricted_to_enterprise)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_collaboration_restricted_to_enterprise" of type "FolderFull"',
        });
    }
    const isCollaborationRestrictedToEnterprise = val.is_collaboration_restricted_to_enterprise == void 0
        ? void 0
        : val.is_collaboration_restricted_to_enterprise;
    if (!(val.allowed_shared_link_access_levels == void 0) &&
        !sdIsList(val.allowed_shared_link_access_levels)) {
        throw new BoxSdkError({
            message: 'Expecting array for "allowed_shared_link_access_levels" of type "FolderFull"',
        });
    }
    const allowedSharedLinkAccessLevels = val.allowed_shared_link_access_levels == void 0
        ? void 0
        : sdIsList(val.allowed_shared_link_access_levels)
            ? val.allowed_shared_link_access_levels.map(function (itm) {
                return deserializeFolderFullAllowedSharedLinkAccessLevelsField(itm);
            })
            : [];
    if (!(val.allowed_invitee_roles == void 0) &&
        !sdIsList(val.allowed_invitee_roles)) {
        throw new BoxSdkError({
            message: 'Expecting array for "allowed_invitee_roles" of type "FolderFull"',
        });
    }
    const allowedInviteeRoles = val.allowed_invitee_roles == void 0
        ? void 0
        : sdIsList(val.allowed_invitee_roles)
            ? val.allowed_invitee_roles.map(function (itm) {
                return deserializeFolderFullAllowedInviteeRolesField(itm);
            })
            : [];
    const watermarkInfo = val.watermark_info == void 0
        ? void 0
        : deserializeFolderFullWatermarkInfoField(val.watermark_info);
    if (!(val.is_accessible_via_shared_link == void 0) &&
        !sdIsBoolean(val.is_accessible_via_shared_link)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_accessible_via_shared_link" of type "FolderFull"',
        });
    }
    const isAccessibleViaSharedLink = val.is_accessible_via_shared_link == void 0
        ? void 0
        : val.is_accessible_via_shared_link;
    if (!(val.can_non_owners_view_collaborators == void 0) &&
        !sdIsBoolean(val.can_non_owners_view_collaborators)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_non_owners_view_collaborators" of type "FolderFull"',
        });
    }
    const canNonOwnersViewCollaborators = val.can_non_owners_view_collaborators == void 0
        ? void 0
        : val.can_non_owners_view_collaborators;
    const classification = val.classification == void 0
        ? void 0
        : deserializeFolderFullClassificationField(val.classification);
    if (!(val.is_associated_with_app_item == void 0) &&
        !sdIsBoolean(val.is_associated_with_app_item)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_associated_with_app_item" of type "FolderFull"',
        });
    }
    const isAssociatedWithAppItem = val.is_associated_with_app_item == void 0
        ? void 0
        : val.is_associated_with_app_item;
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "FolderFull"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "FolderFull"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "FolderFull"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.size == void 0) && !sdIsNumber(val.size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "size" of type "FolderFull"',
        });
    }
    const size = val.size == void 0 ? void 0 : val.size;
    const pathCollection = val.path_collection == void 0
        ? void 0
        : deserializeFolderPathCollectionField(val.path_collection);
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const modifiedBy = val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
    if (!(val.trashed_at == void 0) && !sdIsString(val.trashed_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "FolderFull"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : deserializeDateTime(val.trashed_at);
    if (!(val.purged_at == void 0) && !sdIsString(val.purged_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "purged_at" of type "FolderFull"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : deserializeDateTime(val.purged_at);
    if (!(val.content_created_at == void 0) &&
        !sdIsString(val.content_created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_created_at" of type "FolderFull"',
        });
    }
    const contentCreatedAt = val.content_created_at == void 0
        ? void 0
        : deserializeDateTime(val.content_created_at);
    if (!(val.content_modified_at == void 0) &&
        !sdIsString(val.content_modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "FolderFull"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : deserializeDateTime(val.content_modified_at);
    const ownedBy = val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeFolderSharedLinkField(val.shared_link);
    const folderUploadEmail = val.folder_upload_email == void 0
        ? void 0
        : deserializeFolderFolderUploadEmailField(val.folder_upload_email);
    const parent = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    const itemStatus = val.item_status == void 0
        ? void 0
        : deserializeFolderItemStatusField(val.item_status);
    const itemCollection = val.item_collection == void 0
        ? void 0
        : deserializeItems(val.item_collection);
    if (!(val.sequence_id == void 0) && !sdIsString(val.sequence_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "FolderFull"',
        });
    }
    const sequenceId = val.sequence_id == void 0 ? void 0 : val.sequence_id;
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "FolderFull"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "FolderFull" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "FolderFull"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !sdIsString(val.etag)) {
        throw new BoxSdkError({
            message: 'Expecting string for "etag" of type "FolderFull"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "FolderFull" to be defined',
        });
    }
    const type = deserializeFolderBaseTypeField(val.type);
    return {
        syncState: syncState,
        hasCollaborations: hasCollaborations,
        permissions: permissions,
        tags: tags,
        canNonOwnersInvite: canNonOwnersInvite,
        isExternallyOwned: isExternallyOwned,
        metadata: metadata,
        isCollaborationRestrictedToEnterprise: isCollaborationRestrictedToEnterprise,
        allowedSharedLinkAccessLevels: allowedSharedLinkAccessLevels,
        allowedInviteeRoles: allowedInviteeRoles,
        watermarkInfo: watermarkInfo,
        isAccessibleViaSharedLink: isAccessibleViaSharedLink,
        canNonOwnersViewCollaborators: canNonOwnersViewCollaborators,
        classification: classification,
        isAssociatedWithAppItem: isAssociatedWithAppItem,
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
    };
}
//# sourceMappingURL=folderFull.generated.js.map