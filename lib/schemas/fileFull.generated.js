"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileFull = void 0;
exports.serializeFileFullPermissionsField = serializeFileFullPermissionsField;
exports.deserializeFileFullPermissionsField = deserializeFileFullPermissionsField;
exports.serializeFileFullLockTypeField = serializeFileFullLockTypeField;
exports.deserializeFileFullLockTypeField = deserializeFileFullLockTypeField;
exports.serializeFileFullLockAppTypeField = serializeFileFullLockAppTypeField;
exports.deserializeFileFullLockAppTypeField = deserializeFileFullLockAppTypeField;
exports.serializeFileFullLockField = serializeFileFullLockField;
exports.deserializeFileFullLockField = deserializeFileFullLockField;
exports.serializeFileFullExpiringEmbedLinkTokenTypeField = serializeFileFullExpiringEmbedLinkTokenTypeField;
exports.deserializeFileFullExpiringEmbedLinkTokenTypeField = deserializeFileFullExpiringEmbedLinkTokenTypeField;
exports.serializeFileFullExpiringEmbedLinkField = serializeFileFullExpiringEmbedLinkField;
exports.deserializeFileFullExpiringEmbedLinkField = deserializeFileFullExpiringEmbedLinkField;
exports.serializeFileFullWatermarkInfoField = serializeFileFullWatermarkInfoField;
exports.deserializeFileFullWatermarkInfoField = deserializeFileFullWatermarkInfoField;
exports.serializeFileFullAllowedInviteeRolesField = serializeFileFullAllowedInviteeRolesField;
exports.deserializeFileFullAllowedInviteeRolesField = deserializeFileFullAllowedInviteeRolesField;
exports.serializeFileFullMetadataField = serializeFileFullMetadataField;
exports.deserializeFileFullMetadataField = deserializeFileFullMetadataField;
exports.serializeFileFullRepresentationsEntriesContentField = serializeFileFullRepresentationsEntriesContentField;
exports.deserializeFileFullRepresentationsEntriesContentField = deserializeFileFullRepresentationsEntriesContentField;
exports.serializeFileFullRepresentationsEntriesInfoField = serializeFileFullRepresentationsEntriesInfoField;
exports.deserializeFileFullRepresentationsEntriesInfoField = deserializeFileFullRepresentationsEntriesInfoField;
exports.serializeFileFullRepresentationsEntriesPropertiesField = serializeFileFullRepresentationsEntriesPropertiesField;
exports.deserializeFileFullRepresentationsEntriesPropertiesField = deserializeFileFullRepresentationsEntriesPropertiesField;
exports.serializeFileFullRepresentationsEntriesStatusStateField = serializeFileFullRepresentationsEntriesStatusStateField;
exports.deserializeFileFullRepresentationsEntriesStatusStateField = deserializeFileFullRepresentationsEntriesStatusStateField;
exports.serializeFileFullRepresentationsEntriesStatusField = serializeFileFullRepresentationsEntriesStatusField;
exports.deserializeFileFullRepresentationsEntriesStatusField = deserializeFileFullRepresentationsEntriesStatusField;
exports.serializeFileFullRepresentationsEntriesField = serializeFileFullRepresentationsEntriesField;
exports.deserializeFileFullRepresentationsEntriesField = deserializeFileFullRepresentationsEntriesField;
exports.serializeFileFullRepresentationsField = serializeFileFullRepresentationsField;
exports.deserializeFileFullRepresentationsField = deserializeFileFullRepresentationsField;
exports.serializeFileFullClassificationField = serializeFileFullClassificationField;
exports.deserializeFileFullClassificationField = deserializeFileFullClassificationField;
exports.serializeFileFullSharedLinkPermissionOptionsField = serializeFileFullSharedLinkPermissionOptionsField;
exports.deserializeFileFullSharedLinkPermissionOptionsField = deserializeFileFullSharedLinkPermissionOptionsField;
exports.serializeFileFull = serializeFileFull;
exports.deserializeFileFull = deserializeFileFull;
const fileBase_generated_js_1 = require("./fileBase.generated.js");
const fileVersionMini_generated_js_1 = require("./fileVersionMini.generated.js");
const file_generated_js_1 = require("./file.generated.js");
const file_generated_js_2 = require("./file.generated.js");
const folderMini_generated_js_1 = require("./folderMini.generated.js");
const file_generated_js_3 = require("./file.generated.js");
const file_generated_js_4 = require("./file.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const fileOrFolderScope_generated_js_1 = require("./fileOrFolderScope.generated.js");
const fileOrFolderScope_generated_js_2 = require("./fileOrFolderScope.generated.js");
const metadataFull_generated_js_1 = require("./metadataFull.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const file_generated_js_5 = require("./file.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
const json_js_5 = require("../serialization/json.js");
class FileFull extends file_generated_js_5.File {
    constructor(fields) {
        super(fields);
        if (fields.versionNumber !== undefined) {
            this.versionNumber = fields.versionNumber;
        }
        if (fields.commentCount !== undefined) {
            this.commentCount = fields.commentCount;
        }
        if (fields.permissions !== undefined) {
            this.permissions = fields.permissions;
        }
        if (fields.tags !== undefined) {
            this.tags = fields.tags;
        }
        if (fields.lock !== undefined) {
            this.lock = fields.lock;
        }
        if (fields.extension !== undefined) {
            this.extension = fields.extension;
        }
        if (fields.isPackage !== undefined) {
            this.isPackage = fields.isPackage;
        }
        if (fields.expiringEmbedLink !== undefined) {
            this.expiringEmbedLink = fields.expiringEmbedLink;
        }
        if (fields.watermarkInfo !== undefined) {
            this.watermarkInfo = fields.watermarkInfo;
        }
        if (fields.isAccessibleViaSharedLink !== undefined) {
            this.isAccessibleViaSharedLink = fields.isAccessibleViaSharedLink;
        }
        if (fields.allowedInviteeRoles !== undefined) {
            this.allowedInviteeRoles = fields.allowedInviteeRoles;
        }
        if (fields.isExternallyOwned !== undefined) {
            this.isExternallyOwned = fields.isExternallyOwned;
        }
        if (fields.hasCollaborations !== undefined) {
            this.hasCollaborations = fields.hasCollaborations;
        }
        if (fields.metadata !== undefined) {
            this.metadata = fields.metadata;
        }
        if (fields.expiresAt !== undefined) {
            this.expiresAt = fields.expiresAt;
        }
        if (fields.representations !== undefined) {
            this.representations = fields.representations;
        }
        if (fields.classification !== undefined) {
            this.classification = fields.classification;
        }
        if (fields.uploaderDisplayName !== undefined) {
            this.uploaderDisplayName = fields.uploaderDisplayName;
        }
        if (fields.dispositionAt !== undefined) {
            this.dispositionAt = fields.dispositionAt;
        }
        if (fields.sharedLinkPermissionOptions !== undefined) {
            this.sharedLinkPermissionOptions = fields.sharedLinkPermissionOptions;
        }
        if (fields.isAssociatedWithAppItem !== undefined) {
            this.isAssociatedWithAppItem = fields.isAssociatedWithAppItem;
        }
    }
}
exports.FileFull = FileFull;
function serializeFileFullPermissionsField(val) {
    return {
        ['can_delete']: val.canDelete,
        ['can_download']: val.canDownload,
        ['can_invite_collaborator']: val.canInviteCollaborator,
        ['can_rename']: val.canRename,
        ['can_set_share_access']: val.canSetShareAccess,
        ['can_share']: val.canShare,
        ['can_annotate']: val.canAnnotate,
        ['can_comment']: val.canComment,
        ['can_preview']: val.canPreview,
        ['can_upload']: val.canUpload,
        ['can_view_annotations_all']: val.canViewAnnotationsAll,
        ['can_view_annotations_self']: val.canViewAnnotationsSelf,
    };
}
function deserializeFileFullPermissionsField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileFullPermissionsField"',
        });
    }
    if (val.can_delete == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_delete" of type "FileFullPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_delete)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_delete" of type "FileFullPermissionsField"',
        });
    }
    const canDelete = val.can_delete;
    if (val.can_download == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_download" of type "FileFullPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_download)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "FileFullPermissionsField"',
        });
    }
    const canDownload = val.can_download;
    if (val.can_invite_collaborator == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_invite_collaborator" of type "FileFullPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_invite_collaborator)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_invite_collaborator" of type "FileFullPermissionsField"',
        });
    }
    const canInviteCollaborator = val.can_invite_collaborator;
    if (val.can_rename == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_rename" of type "FileFullPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_rename)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_rename" of type "FileFullPermissionsField"',
        });
    }
    const canRename = val.can_rename;
    if (val.can_set_share_access == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_set_share_access" of type "FileFullPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_set_share_access)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_set_share_access" of type "FileFullPermissionsField"',
        });
    }
    const canSetShareAccess = val.can_set_share_access;
    if (val.can_share == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_share" of type "FileFullPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_share)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_share" of type "FileFullPermissionsField"',
        });
    }
    const canShare = val.can_share;
    if (val.can_annotate == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_annotate" of type "FileFullPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_annotate)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_annotate" of type "FileFullPermissionsField"',
        });
    }
    const canAnnotate = val.can_annotate;
    if (val.can_comment == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_comment" of type "FileFullPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_comment)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_comment" of type "FileFullPermissionsField"',
        });
    }
    const canComment = val.can_comment;
    if (val.can_preview == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_preview" of type "FileFullPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_preview)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "FileFullPermissionsField"',
        });
    }
    const canPreview = val.can_preview;
    if (val.can_upload == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_upload" of type "FileFullPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_upload)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_upload" of type "FileFullPermissionsField"',
        });
    }
    const canUpload = val.can_upload;
    if (val.can_view_annotations_all == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_view_annotations_all" of type "FileFullPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_view_annotations_all)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_view_annotations_all" of type "FileFullPermissionsField"',
        });
    }
    const canViewAnnotationsAll = val.can_view_annotations_all;
    if (val.can_view_annotations_self == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_view_annotations_self" of type "FileFullPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_view_annotations_self)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_view_annotations_self" of type "FileFullPermissionsField"',
        });
    }
    const canViewAnnotationsSelf = val.can_view_annotations_self;
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
    };
}
function serializeFileFullLockTypeField(val) {
    return val;
}
function deserializeFileFullLockTypeField(val) {
    if (val == 'lock') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize FileFullLockTypeField" });
}
function serializeFileFullLockAppTypeField(val) {
    return val;
}
function deserializeFileFullLockAppTypeField(val) {
    if (val == 'gsuite') {
        return val;
    }
    if (val == 'office_wopi') {
        return val;
    }
    if (val == 'office_wopiplus') {
        return val;
    }
    if (val == 'other') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileFullLockAppTypeField",
    });
}
function serializeFileFullLockField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeFileFullLockTypeField(val.type),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.createdBy),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['expired_at']: val.expiredAt == void 0
            ? val.expiredAt
            : (0, utils_js_1.serializeDateTime)(val.expiredAt),
        ['is_download_prevented']: val.isDownloadPrevented,
        ['app_type']: val.appType == void 0
            ? val.appType
            : serializeFileFullLockAppTypeField(val.appType),
    };
}
function deserializeFileFullLockField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileFullLockField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_3.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileFullLockField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeFileFullLockTypeField(val.type);
    const createdBy = val.created_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.created_by);
    if (!(val.created_at == void 0) && !(0, json_js_3.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "FileFullLockField"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.expired_at == void 0) && !(0, json_js_3.sdIsString)(val.expired_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "expired_at" of type "FileFullLockField"',
        });
    }
    const expiredAt = val.expired_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.expired_at);
    if (!(val.is_download_prevented == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_download_prevented)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_download_prevented" of type "FileFullLockField"',
        });
    }
    const isDownloadPrevented = val.is_download_prevented == void 0 ? void 0 : val.is_download_prevented;
    const appType = val.app_type == void 0
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
    };
}
function serializeFileFullExpiringEmbedLinkTokenTypeField(val) {
    return val;
}
function deserializeFileFullExpiringEmbedLinkTokenTypeField(val) {
    if (val == 'bearer') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileFullExpiringEmbedLinkTokenTypeField",
    });
}
function serializeFileFullExpiringEmbedLinkField(val) {
    return {
        ['access_token']: val.accessToken,
        ['expires_in']: val.expiresIn,
        ['token_type']: val.tokenType == void 0
            ? val.tokenType
            : serializeFileFullExpiringEmbedLinkTokenTypeField(val.tokenType),
        ['restricted_to']: val.restrictedTo == void 0
            ? val.restrictedTo
            : val.restrictedTo.map(function (item) {
                return (0, fileOrFolderScope_generated_js_1.serializeFileOrFolderScope)(item);
            }),
        ['url']: val.url,
    };
}
function deserializeFileFullExpiringEmbedLinkField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileFullExpiringEmbedLinkField"',
        });
    }
    if (!(val.access_token == void 0) && !(0, json_js_3.sdIsString)(val.access_token)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_token" of type "FileFullExpiringEmbedLinkField"',
        });
    }
    const accessToken = val.access_token == void 0 ? void 0 : val.access_token;
    if (!(val.expires_in == void 0) && !(0, json_js_2.sdIsNumber)(val.expires_in)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "expires_in" of type "FileFullExpiringEmbedLinkField"',
        });
    }
    const expiresIn = val.expires_in == void 0 ? void 0 : val.expires_in;
    const tokenType = val.token_type == void 0
        ? void 0
        : deserializeFileFullExpiringEmbedLinkTokenTypeField(val.token_type);
    if (!(val.restricted_to == void 0) && !(0, json_js_4.sdIsList)(val.restricted_to)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "restricted_to" of type "FileFullExpiringEmbedLinkField"',
        });
    }
    const restrictedTo = val.restricted_to == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.restricted_to)
            ? val.restricted_to.map(function (itm) {
                return (0, fileOrFolderScope_generated_js_2.deserializeFileOrFolderScope)(itm);
            })
            : [];
    if (!(val.url == void 0) && !(0, json_js_3.sdIsString)(val.url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "url" of type "FileFullExpiringEmbedLinkField"',
        });
    }
    const url = val.url == void 0 ? void 0 : val.url;
    return {
        accessToken: accessToken,
        expiresIn: expiresIn,
        tokenType: tokenType,
        restrictedTo: restrictedTo,
        url: url,
    };
}
function serializeFileFullWatermarkInfoField(val) {
    return { ['is_watermarked']: val.isWatermarked };
}
function deserializeFileFullWatermarkInfoField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileFullWatermarkInfoField"',
        });
    }
    if (!(val.is_watermarked == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_watermarked)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_watermarked" of type "FileFullWatermarkInfoField"',
        });
    }
    const isWatermarked = val.is_watermarked == void 0 ? void 0 : val.is_watermarked;
    return { isWatermarked: isWatermarked };
}
function serializeFileFullAllowedInviteeRolesField(val) {
    return val;
}
function deserializeFileFullAllowedInviteeRolesField(val) {
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
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileFullAllowedInviteeRolesField",
    });
}
function serializeFileFullMetadataField(val) {
    return Object.assign({}, val.extraData);
}
function deserializeFileFullMetadataField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileFullMetadataField"',
        });
    }
    if (!(val == void 0) && !(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting object for "extraData" of type "FileFullMetadataField"',
        });
    }
    const extraData = val == void 0
        ? void 0
        : (0, json_js_5.sdIsMap)(val)
            ? Object.fromEntries(Object.entries(val).map(([k, v]) => [
                k,
                (function (v) {
                    return (0, json_js_5.sdIsMap)(v)
                        ? Object.fromEntries(Object.entries(v).map(([k, v]) => [
                            k,
                            (0, metadataFull_generated_js_1.deserializeMetadataFull)(v),
                        ]))
                        : {};
                })(v),
            ]))
            : {};
    return { extraData: extraData };
}
function serializeFileFullRepresentationsEntriesContentField(val) {
    return { ['url_template']: val.urlTemplate };
}
function deserializeFileFullRepresentationsEntriesContentField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileFullRepresentationsEntriesContentField"',
        });
    }
    if (!(val.url_template == void 0) && !(0, json_js_3.sdIsString)(val.url_template)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "url_template" of type "FileFullRepresentationsEntriesContentField"',
        });
    }
    const urlTemplate = val.url_template == void 0 ? void 0 : val.url_template;
    return {
        urlTemplate: urlTemplate,
    };
}
function serializeFileFullRepresentationsEntriesInfoField(val) {
    return { ['url']: val.url };
}
function deserializeFileFullRepresentationsEntriesInfoField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileFullRepresentationsEntriesInfoField"',
        });
    }
    if (!(val.url == void 0) && !(0, json_js_3.sdIsString)(val.url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "url" of type "FileFullRepresentationsEntriesInfoField"',
        });
    }
    const url = val.url == void 0 ? void 0 : val.url;
    return { url: url };
}
function serializeFileFullRepresentationsEntriesPropertiesField(val) {
    return {
        ['dimensions']: val.dimensions,
        ['paged']: val.paged,
        ['thumb']: val.thumb,
    };
}
function deserializeFileFullRepresentationsEntriesPropertiesField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileFullRepresentationsEntriesPropertiesField"',
        });
    }
    if (!(val.dimensions == void 0) && !(0, json_js_3.sdIsString)(val.dimensions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "dimensions" of type "FileFullRepresentationsEntriesPropertiesField"',
        });
    }
    const dimensions = val.dimensions == void 0 ? void 0 : val.dimensions;
    if (!(val.paged == void 0) && !(0, json_js_3.sdIsString)(val.paged)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "paged" of type "FileFullRepresentationsEntriesPropertiesField"',
        });
    }
    const paged = val.paged == void 0 ? void 0 : val.paged;
    if (!(val.thumb == void 0) && !(0, json_js_3.sdIsString)(val.thumb)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "thumb" of type "FileFullRepresentationsEntriesPropertiesField"',
        });
    }
    const thumb = val.thumb == void 0 ? void 0 : val.thumb;
    return {
        dimensions: dimensions,
        paged: paged,
        thumb: thumb,
    };
}
function serializeFileFullRepresentationsEntriesStatusStateField(val) {
    return val;
}
function deserializeFileFullRepresentationsEntriesStatusStateField(val) {
    if (val == 'success') {
        return val;
    }
    if (val == 'viewable') {
        return val;
    }
    if (val == 'pending') {
        return val;
    }
    if (val == 'none') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileFullRepresentationsEntriesStatusStateField",
    });
}
function serializeFileFullRepresentationsEntriesStatusField(val) {
    return {
        ['state']: val.state == void 0
            ? val.state
            : serializeFileFullRepresentationsEntriesStatusStateField(val.state),
    };
}
function deserializeFileFullRepresentationsEntriesStatusField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileFullRepresentationsEntriesStatusField"',
        });
    }
    const state = val.state == void 0
        ? void 0
        : deserializeFileFullRepresentationsEntriesStatusStateField(val.state);
    return { state: state };
}
function serializeFileFullRepresentationsEntriesField(val) {
    return {
        ['content']: val.content == void 0
            ? val.content
            : serializeFileFullRepresentationsEntriesContentField(val.content),
        ['info']: val.info == void 0
            ? val.info
            : serializeFileFullRepresentationsEntriesInfoField(val.info),
        ['properties']: val.properties == void 0
            ? val.properties
            : serializeFileFullRepresentationsEntriesPropertiesField(val.properties),
        ['representation']: val.representation,
        ['status']: val.status == void 0
            ? val.status
            : serializeFileFullRepresentationsEntriesStatusField(val.status),
    };
}
function deserializeFileFullRepresentationsEntriesField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileFullRepresentationsEntriesField"',
        });
    }
    const content = val.content == void 0
        ? void 0
        : deserializeFileFullRepresentationsEntriesContentField(val.content);
    const info = val.info == void 0
        ? void 0
        : deserializeFileFullRepresentationsEntriesInfoField(val.info);
    const properties = val.properties == void 0
        ? void 0
        : deserializeFileFullRepresentationsEntriesPropertiesField(val.properties);
    if (!(val.representation == void 0) && !(0, json_js_3.sdIsString)(val.representation)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "representation" of type "FileFullRepresentationsEntriesField"',
        });
    }
    const representation = val.representation == void 0 ? void 0 : val.representation;
    const status = val.status == void 0
        ? void 0
        : deserializeFileFullRepresentationsEntriesStatusField(val.status);
    return {
        content: content,
        info: info,
        properties: properties,
        representation: representation,
        status: status,
    };
}
function serializeFileFullRepresentationsField(val) {
    return {
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeFileFullRepresentationsEntriesField(item);
            }),
    };
}
function deserializeFileFullRepresentationsField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileFullRepresentationsField"',
        });
    }
    if (!(val.entries == void 0) && !(0, json_js_4.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "FileFullRepresentationsField"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeFileFullRepresentationsEntriesField(itm);
            })
            : [];
    return { entries: entries };
}
function serializeFileFullClassificationField(val) {
    return {
        ['name']: val.name,
        ['definition']: val.definition,
        ['color']: val.color,
    };
}
function deserializeFileFullClassificationField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileFullClassificationField"',
        });
    }
    if (!(val.name == void 0) && !(0, json_js_3.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "FileFullClassificationField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.definition == void 0) && !(0, json_js_3.sdIsString)(val.definition)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "definition" of type "FileFullClassificationField"',
        });
    }
    const definition = val.definition == void 0 ? void 0 : val.definition;
    if (!(val.color == void 0) && !(0, json_js_3.sdIsString)(val.color)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "color" of type "FileFullClassificationField"',
        });
    }
    const color = val.color == void 0 ? void 0 : val.color;
    return {
        name: name,
        definition: definition,
        color: color,
    };
}
function serializeFileFullSharedLinkPermissionOptionsField(val) {
    return val;
}
function deserializeFileFullSharedLinkPermissionOptionsField(val) {
    if (val == 'can_preview') {
        return val;
    }
    if (val == 'can_download') {
        return val;
    }
    if (val == 'can_edit') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileFullSharedLinkPermissionOptionsField",
    });
}
function serializeFileFull(val) {
    const base = (0, file_generated_js_4.serializeFile)(val);
    if (!(0, json_js_5.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileFull"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['version_number']: val.versionNumber,
        ['comment_count']: val.commentCount,
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeFileFullPermissionsField(val.permissions),
        ['tags']: val.tags == void 0
            ? val.tags
            : val.tags.map(function (item) {
                return item;
            }),
        ['lock']: val.lock == void 0 ? val.lock : serializeFileFullLockField(val.lock),
        ['extension']: val.extension,
        ['is_package']: val.isPackage,
        ['expiring_embed_link']: val.expiringEmbedLink == void 0
            ? val.expiringEmbedLink
            : serializeFileFullExpiringEmbedLinkField(val.expiringEmbedLink),
        ['watermark_info']: val.watermarkInfo == void 0
            ? val.watermarkInfo
            : serializeFileFullWatermarkInfoField(val.watermarkInfo),
        ['is_accessible_via_shared_link']: val.isAccessibleViaSharedLink,
        ['allowed_invitee_roles']: val.allowedInviteeRoles == void 0
            ? val.allowedInviteeRoles
            : val.allowedInviteeRoles.map(function (item) {
                return serializeFileFullAllowedInviteeRolesField(item);
            }),
        ['is_externally_owned']: val.isExternallyOwned,
        ['has_collaborations']: val.hasCollaborations,
        ['metadata']: val.metadata == void 0
            ? val.metadata
            : serializeFileFullMetadataField(val.metadata),
        ['expires_at']: val.expiresAt == void 0
            ? val.expiresAt
            : (0, utils_js_1.serializeDateTime)(val.expiresAt),
        ['representations']: val.representations == void 0
            ? val.representations
            : serializeFileFullRepresentationsField(val.representations),
        ['classification']: val.classification == void 0
            ? val.classification
            : serializeFileFullClassificationField(val.classification),
        ['uploader_display_name']: val.uploaderDisplayName,
        ['disposition_at']: val.dispositionAt == void 0
            ? val.dispositionAt
            : (0, utils_js_1.serializeDateTime)(val.dispositionAt),
        ['shared_link_permission_options']: val.sharedLinkPermissionOptions == void 0
            ? val.sharedLinkPermissionOptions
            : val.sharedLinkPermissionOptions.map(function (item) {
                return serializeFileFullSharedLinkPermissionOptionsField(item);
            }),
        ['is_associated_with_app_item']: val.isAssociatedWithAppItem,
    });
}
function deserializeFileFull(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileFull"' });
    }
    if (!(val.version_number == void 0) && !(0, json_js_3.sdIsString)(val.version_number)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "version_number" of type "FileFull"',
        });
    }
    const versionNumber = val.version_number == void 0 ? void 0 : val.version_number;
    if (!(val.comment_count == void 0) && !(0, json_js_2.sdIsNumber)(val.comment_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "comment_count" of type "FileFull"',
        });
    }
    const commentCount = val.comment_count == void 0 ? void 0 : val.comment_count;
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeFileFullPermissionsField(val.permissions);
    if (!(val.tags == void 0) && !(0, json_js_4.sdIsList)(val.tags)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "tags" of type "FileFull"',
        });
    }
    const tags = val.tags == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.tags)
            ? val.tags.map(function (itm) {
                if (!(0, json_js_3.sdIsString)(itm)) {
                    throw new errors_js_1.BoxSdkError({
                        message: 'Expecting string for "FileFull"',
                    });
                }
                return itm;
            })
            : [];
    const lock = val.lock == void 0 ? void 0 : deserializeFileFullLockField(val.lock);
    if (!(val.extension == void 0) && !(0, json_js_3.sdIsString)(val.extension)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "extension" of type "FileFull"',
        });
    }
    const extension = val.extension == void 0 ? void 0 : val.extension;
    if (!(val.is_package == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_package)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_package" of type "FileFull"',
        });
    }
    const isPackage = val.is_package == void 0 ? void 0 : val.is_package;
    const expiringEmbedLink = val.expiring_embed_link == void 0
        ? void 0
        : deserializeFileFullExpiringEmbedLinkField(val.expiring_embed_link);
    const watermarkInfo = val.watermark_info == void 0
        ? void 0
        : deserializeFileFullWatermarkInfoField(val.watermark_info);
    if (!(val.is_accessible_via_shared_link == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_accessible_via_shared_link)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_accessible_via_shared_link" of type "FileFull"',
        });
    }
    const isAccessibleViaSharedLink = val.is_accessible_via_shared_link == void 0
        ? void 0
        : val.is_accessible_via_shared_link;
    if (!(val.allowed_invitee_roles == void 0) &&
        !(0, json_js_4.sdIsList)(val.allowed_invitee_roles)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "allowed_invitee_roles" of type "FileFull"',
        });
    }
    const allowedInviteeRoles = val.allowed_invitee_roles == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.allowed_invitee_roles)
            ? val.allowed_invitee_roles.map(function (itm) {
                return deserializeFileFullAllowedInviteeRolesField(itm);
            })
            : [];
    if (!(val.is_externally_owned == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_externally_owned)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_externally_owned" of type "FileFull"',
        });
    }
    const isExternallyOwned = val.is_externally_owned == void 0 ? void 0 : val.is_externally_owned;
    if (!(val.has_collaborations == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.has_collaborations)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "has_collaborations" of type "FileFull"',
        });
    }
    const hasCollaborations = val.has_collaborations == void 0 ? void 0 : val.has_collaborations;
    const metadata = val.metadata == void 0
        ? void 0
        : deserializeFileFullMetadataField(val.metadata);
    if (!(val.expires_at == void 0) && !(0, json_js_3.sdIsString)(val.expires_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "expires_at" of type "FileFull"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.expires_at);
    const representations = val.representations == void 0
        ? void 0
        : deserializeFileFullRepresentationsField(val.representations);
    const classification = val.classification == void 0
        ? void 0
        : deserializeFileFullClassificationField(val.classification);
    if (!(val.uploader_display_name == void 0) &&
        !(0, json_js_3.sdIsString)(val.uploader_display_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "uploader_display_name" of type "FileFull"',
        });
    }
    const uploaderDisplayName = val.uploader_display_name == void 0 ? void 0 : val.uploader_display_name;
    if (!(val.disposition_at == void 0) && !(0, json_js_3.sdIsString)(val.disposition_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "disposition_at" of type "FileFull"',
        });
    }
    const dispositionAt = val.disposition_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.disposition_at);
    if (!(val.shared_link_permission_options == void 0) &&
        !(0, json_js_4.sdIsList)(val.shared_link_permission_options)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "shared_link_permission_options" of type "FileFull"',
        });
    }
    const sharedLinkPermissionOptions = val.shared_link_permission_options == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.shared_link_permission_options)
            ? val.shared_link_permission_options.map(function (itm) {
                return deserializeFileFullSharedLinkPermissionOptionsField(itm);
            })
            : [];
    if (!(val.is_associated_with_app_item == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_associated_with_app_item)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_associated_with_app_item" of type "FileFull"',
        });
    }
    const isAssociatedWithAppItem = val.is_associated_with_app_item == void 0
        ? void 0
        : val.is_associated_with_app_item;
    if (!(val.description == void 0) && !(0, json_js_3.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "FileFull"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.size == void 0) && !(0, json_js_2.sdIsNumber)(val.size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "size" of type "FileFull"',
        });
    }
    const size = val.size == void 0 ? void 0 : val.size;
    const pathCollection = val.path_collection == void 0
        ? void 0
        : (0, file_generated_js_1.deserializeFilePathCollectionField)(val.path_collection);
    if (!(val.created_at == void 0) && !(0, json_js_3.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "FileFull"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_3.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "FileFull"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    if (!(val.trashed_at == void 0) && !(0, json_js_3.sdIsString)(val.trashed_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "FileFull"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.trashed_at);
    if (!(val.purged_at == void 0) && !(0, json_js_3.sdIsString)(val.purged_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "purged_at" of type "FileFull"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.purged_at);
    if (!(val.content_created_at == void 0) &&
        !(0, json_js_3.sdIsString)(val.content_created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content_created_at" of type "FileFull"',
        });
    }
    const contentCreatedAt = val.content_created_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.content_created_at);
    if (!(val.content_modified_at == void 0) &&
        !(0, json_js_3.sdIsString)(val.content_modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "FileFull"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.content_modified_at);
    const createdBy = val.created_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.created_by);
    const modifiedBy = val.modified_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.modified_by);
    const ownedBy = val.owned_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.owned_by);
    const sharedLink = val.shared_link == void 0
        ? void 0
        : (0, file_generated_js_2.deserializeFileSharedLinkField)(val.shared_link);
    const parent = val.parent == void 0 ? void 0 : (0, folderMini_generated_js_1.deserializeFolderMini)(val.parent);
    const itemStatus = val.item_status == void 0
        ? void 0
        : (0, file_generated_js_3.deserializeFileItemStatusField)(val.item_status);
    if (!(val.sequence_id == void 0) && !(0, json_js_3.sdIsString)(val.sequence_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "FileFull"',
        });
    }
    const sequenceId = val.sequence_id == void 0 ? void 0 : val.sequence_id;
    if (!(val.name == void 0) && !(0, json_js_3.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "FileFull"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.sha1 == void 0) && !(0, json_js_3.sdIsString)(val.sha1)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sha1" of type "FileFull"',
        });
    }
    const sha1 = val.sha1 == void 0 ? void 0 : val.sha1;
    const fileVersion = val.file_version == void 0
        ? void 0
        : (0, fileVersionMini_generated_js_1.deserializeFileVersionMini)(val.file_version);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FileFull" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileFull"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !(0, json_js_3.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "FileFull"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "FileFull" to be defined',
        });
    }
    const type = (0, fileBase_generated_js_1.deserializeFileBaseTypeField)(val.type);
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
        isAssociatedWithAppItem: isAssociatedWithAppItem,
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
    };
}
//# sourceMappingURL=fileFull.generated.js.map