"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFile = exports.deserializeFile = exports.serializeUserMini = exports.deserializeUserMini = exports.serializeUserBase = exports.deserializeUserBase = exports.serializeUserBaseTypeField = exports.deserializeUserBaseTypeField = exports.serializeFilePathCollectionField = exports.deserializeFilePathCollectionField = exports.serializeTrashFileRestoredPathCollectionField = exports.deserializeTrashFileRestoredPathCollectionField = exports.serializeFolderMini = exports.deserializeFolderMini = exports.serializeFolderBase = exports.deserializeFolderBase = exports.serializeFolderBaseTypeField = exports.deserializeFolderBaseTypeField = exports.serializeFileMini = exports.deserializeFileMini = exports.serializeFileVersionMini = exports.deserializeFileVersionMini = exports.serializeFileVersionBase = exports.deserializeFileVersionBase = exports.serializeFileVersionBaseTypeField = exports.deserializeFileVersionBaseTypeField = exports.serializeFileBase = exports.deserializeFileBase = exports.serializeFileBaseTypeField = exports.deserializeFileBaseTypeField = exports.serializeFileItemStatusField = exports.deserializeFileItemStatusField = exports.serializeFileSharedLinkField = exports.deserializeFileSharedLinkField = exports.serializeFileSharedLinkFieldPermissionsField = exports.deserializeFileSharedLinkFieldPermissionsField = exports.serializeFileSharedLinkFieldEffectivePermissionField = exports.deserializeFileSharedLinkFieldEffectivePermissionField = exports.serializeFileSharedLinkFieldEffectiveAccessField = exports.deserializeFileSharedLinkFieldEffectiveAccessField = exports.serializeFileSharedLinkFieldAccessField = exports.deserializeFileSharedLinkFieldAccessField = exports.serializeClientError = exports.deserializeClientError = exports.serializeClientErrorContextInfoField = exports.deserializeClientErrorContextInfoField = exports.serializeClientErrorCodeField = exports.deserializeClientErrorCodeField = exports.serializeClientErrorTypeField = exports.deserializeClientErrorTypeField = void 0;
exports.serializeTrashFileRestored = exports.deserializeTrashFileRestored = exports.serializeTrashFileRestoredItemStatusField = exports.deserializeTrashFileRestoredItemStatusField = exports.serializeTrashFileRestoredTypeField = exports.deserializeTrashFileRestoredTypeField = void 0;
const json_js_1 = require("./json.js");
function deserializeClientErrorTypeField(val) {
    if (!(0, json_js_1.isJSON)(val, "string")) {
        throw "Expecting a string for \"ClientErrorTypeField\"";
    }
    if (val === "error") {
        return "error";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeClientErrorTypeField = deserializeClientErrorTypeField;
function serializeClientErrorTypeField(val) {
    return val;
}
exports.serializeClientErrorTypeField = serializeClientErrorTypeField;
function deserializeClientErrorCodeField(val) {
    if (!(0, json_js_1.isJSON)(val, "string")) {
        throw "Expecting a string for \"ClientErrorCodeField\"";
    }
    if (val === "created") {
        return "created";
    }
    if (val === "accepted") {
        return "accepted";
    }
    if (val === "no_content") {
        return "no_content";
    }
    if (val === "redirect") {
        return "redirect";
    }
    if (val === "not_modified") {
        return "not_modified";
    }
    if (val === "bad_request") {
        return "bad_request";
    }
    if (val === "unauthorized") {
        return "unauthorized";
    }
    if (val === "forbidden") {
        return "forbidden";
    }
    if (val === "not_found") {
        return "not_found";
    }
    if (val === "method_not_allowed") {
        return "method_not_allowed";
    }
    if (val === "conflict") {
        return "conflict";
    }
    if (val === "precondition_failed") {
        return "precondition_failed";
    }
    if (val === "too_many_requests") {
        return "too_many_requests";
    }
    if (val === "internal_server_error") {
        return "internal_server_error";
    }
    if (val === "unavailable") {
        return "unavailable";
    }
    if (val === "item_name_invalid") {
        return "item_name_invalid";
    }
    if (val === "insufficient_scope") {
        return "insufficient_scope";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeClientErrorCodeField = deserializeClientErrorCodeField;
function serializeClientErrorCodeField(val) {
    return val;
}
exports.serializeClientErrorCodeField = serializeClientErrorCodeField;
function deserializeClientErrorContextInfoField(val) {
    if (!(0, json_js_1.isJSON)(val, "object")) {
        throw "Expecting an object for \"ClientErrorContextInfoField\"";
    }
    if (!(val.message === void 0) && !(0, json_js_1.isJSON)(val.message, "string")) {
        throw "Expecting string for \"message\" of type \"ClientErrorContextInfoField\"";
    }
    const message = (0, json_js_1.isJSON)(val.message, "string") ? val.message : void 0;
    return { message: message };
}
exports.deserializeClientErrorContextInfoField = deserializeClientErrorContextInfoField;
function serializeClientErrorContextInfoField(val) {
    return { ["message"]: val.message };
}
exports.serializeClientErrorContextInfoField = serializeClientErrorContextInfoField;
function deserializeClientError(val) {
    if (!(0, json_js_1.isJSON)(val, "object")) {
        throw "Expecting an object for \"ClientError\"";
    }
    const type = val.type === void 0 ? void 0 : deserializeClientErrorTypeField(val.type);
    if (!(val.status === void 0) && !(0, json_js_1.isJSON)(val.status, "number")) {
        throw "Expecting number for \"status\" of type \"ClientError\"";
    }
    const status = (0, json_js_1.isJSON)(val.status, "number") ? val.status : void 0;
    const code = val.code === void 0 ? void 0 : deserializeClientErrorCodeField(val.code);
    if (!(val.message === void 0) && !(0, json_js_1.isJSON)(val.message, "string")) {
        throw "Expecting string for \"message\" of type \"ClientError\"";
    }
    const message = (0, json_js_1.isJSON)(val.message, "string") ? val.message : void 0;
    const contextInfo = val.context_info === void 0 ? void 0 : deserializeClientErrorContextInfoField(val.context_info);
    if (!(val.help_url === void 0) && !(0, json_js_1.isJSON)(val.help_url, "string")) {
        throw "Expecting string for \"help_url\" of type \"ClientError\"";
    }
    const helpUrl = (0, json_js_1.isJSON)(val.help_url, "string") ? val.help_url : void 0;
    if (!(val.request_id === void 0) && !(0, json_js_1.isJSON)(val.request_id, "string")) {
        throw "Expecting string for \"request_id\" of type \"ClientError\"";
    }
    const requestId = (0, json_js_1.isJSON)(val.request_id, "string") ? val.request_id : void 0;
    return { type: type, status: status, code: code, message: message, contextInfo: contextInfo, helpUrl: helpUrl, requestId: requestId };
}
exports.deserializeClientError = deserializeClientError;
function serializeClientError(val) {
    return { ["type"]: val.type === void 0 ? void 0 : serializeClientErrorTypeField(val.type), ["status"]: val.status, ["code"]: val.code === void 0 ? void 0 : serializeClientErrorCodeField(val.code), ["message"]: val.message, ["context_info"]: val.contextInfo === void 0 ? void 0 : serializeClientErrorContextInfoField(val.contextInfo), ["help_url"]: val.helpUrl, ["request_id"]: val.requestId };
}
exports.serializeClientError = serializeClientError;
function deserializeFileSharedLinkFieldAccessField(val) {
    if (!(0, json_js_1.isJSON)(val, "string")) {
        throw "Expecting a string for \"FileSharedLinkFieldAccessField\"";
    }
    if (val === "open") {
        return "open";
    }
    if (val === "company") {
        return "company";
    }
    if (val === "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeFileSharedLinkFieldAccessField = deserializeFileSharedLinkFieldAccessField;
function serializeFileSharedLinkFieldAccessField(val) {
    return val;
}
exports.serializeFileSharedLinkFieldAccessField = serializeFileSharedLinkFieldAccessField;
function deserializeFileSharedLinkFieldEffectiveAccessField(val) {
    if (!(0, json_js_1.isJSON)(val, "string")) {
        throw "Expecting a string for \"FileSharedLinkFieldEffectiveAccessField\"";
    }
    if (val === "open") {
        return "open";
    }
    if (val === "company") {
        return "company";
    }
    if (val === "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeFileSharedLinkFieldEffectiveAccessField = deserializeFileSharedLinkFieldEffectiveAccessField;
function serializeFileSharedLinkFieldEffectiveAccessField(val) {
    return val;
}
exports.serializeFileSharedLinkFieldEffectiveAccessField = serializeFileSharedLinkFieldEffectiveAccessField;
function deserializeFileSharedLinkFieldEffectivePermissionField(val) {
    if (!(0, json_js_1.isJSON)(val, "string")) {
        throw "Expecting a string for \"FileSharedLinkFieldEffectivePermissionField\"";
    }
    if (val === "can_edit") {
        return "can_edit";
    }
    if (val === "can_download") {
        return "can_download";
    }
    if (val === "can_preview") {
        return "can_preview";
    }
    if (val === "no_access") {
        return "no_access";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeFileSharedLinkFieldEffectivePermissionField = deserializeFileSharedLinkFieldEffectivePermissionField;
function serializeFileSharedLinkFieldEffectivePermissionField(val) {
    return val;
}
exports.serializeFileSharedLinkFieldEffectivePermissionField = serializeFileSharedLinkFieldEffectivePermissionField;
function deserializeFileSharedLinkFieldPermissionsField(val) {
    if (!(0, json_js_1.isJSON)(val, "object")) {
        throw "Expecting an object for \"FileSharedLinkFieldPermissionsField\"";
    }
    if (val.can_download === void 0) {
        throw "Expecting \"can_download\" of type \"FileSharedLinkFieldPermissionsField\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.can_download, "boolean")) {
        throw "Expecting boolean for \"can_download\" of type \"FileSharedLinkFieldPermissionsField\"";
    }
    const canDownload = val.can_download;
    if (val.can_preview === void 0) {
        throw "Expecting \"can_preview\" of type \"FileSharedLinkFieldPermissionsField\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.can_preview, "boolean")) {
        throw "Expecting boolean for \"can_preview\" of type \"FileSharedLinkFieldPermissionsField\"";
    }
    const canPreview = val.can_preview;
    if (val.can_edit === void 0) {
        throw "Expecting \"can_edit\" of type \"FileSharedLinkFieldPermissionsField\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.can_edit, "boolean")) {
        throw "Expecting boolean for \"can_edit\" of type \"FileSharedLinkFieldPermissionsField\"";
    }
    const canEdit = val.can_edit;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit };
}
exports.deserializeFileSharedLinkFieldPermissionsField = deserializeFileSharedLinkFieldPermissionsField;
function serializeFileSharedLinkFieldPermissionsField(val) {
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
exports.serializeFileSharedLinkFieldPermissionsField = serializeFileSharedLinkFieldPermissionsField;
function deserializeFileSharedLinkField(val) {
    if (!(0, json_js_1.isJSON)(val, "object")) {
        throw "Expecting an object for \"FileSharedLinkField\"";
    }
    if (val.url === void 0) {
        throw "Expecting \"url\" of type \"FileSharedLinkField\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.url, "string")) {
        throw "Expecting string for \"url\" of type \"FileSharedLinkField\"";
    }
    const url = val.url;
    if (!(val.download_url === void 0) && !(0, json_js_1.isJSON)(val.download_url, "string")) {
        throw "Expecting string for \"download_url\" of type \"FileSharedLinkField\"";
    }
    const downloadUrl = (0, json_js_1.isJSON)(val.download_url, "string") ? val.download_url : void 0;
    if (!(val.vanity_url === void 0) && !(0, json_js_1.isJSON)(val.vanity_url, "string")) {
        throw "Expecting string for \"vanity_url\" of type \"FileSharedLinkField\"";
    }
    const vanityUrl = (0, json_js_1.isJSON)(val.vanity_url, "string") ? val.vanity_url : void 0;
    if (!(val.vanity_name === void 0) && !(0, json_js_1.isJSON)(val.vanity_name, "string")) {
        throw "Expecting string for \"vanity_name\" of type \"FileSharedLinkField\"";
    }
    const vanityName = (0, json_js_1.isJSON)(val.vanity_name, "string") ? val.vanity_name : void 0;
    const access = val.access === void 0 ? void 0 : deserializeFileSharedLinkFieldAccessField(val.access);
    if (val.effective_access === void 0) {
        throw "Expecting \"effective_access\" of type \"FileSharedLinkField\" to be defined";
    }
    const effectiveAccess = deserializeFileSharedLinkFieldEffectiveAccessField(val.effective_access);
    if (val.effective_permission === void 0) {
        throw "Expecting \"effective_permission\" of type \"FileSharedLinkField\" to be defined";
    }
    const effectivePermission = deserializeFileSharedLinkFieldEffectivePermissionField(val.effective_permission);
    if (!(val.unshared_at === void 0) && !(0, json_js_1.isJSON)(val.unshared_at, "string")) {
        throw "Expecting string for \"unshared_at\" of type \"FileSharedLinkField\"";
    }
    const unsharedAt = (0, json_js_1.isJSON)(val.unshared_at, "string") ? val.unshared_at : void 0;
    if (val.is_password_enabled === void 0) {
        throw "Expecting \"is_password_enabled\" of type \"FileSharedLinkField\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.is_password_enabled, "boolean")) {
        throw "Expecting boolean for \"is_password_enabled\" of type \"FileSharedLinkField\"";
    }
    const isPasswordEnabled = val.is_password_enabled;
    const permissions = val.permissions === void 0 ? void 0 : deserializeFileSharedLinkFieldPermissionsField(val.permissions);
    if (val.download_count === void 0) {
        throw "Expecting \"download_count\" of type \"FileSharedLinkField\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.download_count, "number")) {
        throw "Expecting number for \"download_count\" of type \"FileSharedLinkField\"";
    }
    const downloadCount = val.download_count;
    if (val.preview_count === void 0) {
        throw "Expecting \"preview_count\" of type \"FileSharedLinkField\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.preview_count, "number")) {
        throw "Expecting number for \"preview_count\" of type \"FileSharedLinkField\"";
    }
    const previewCount = val.preview_count;
    return { url: url, downloadUrl: downloadUrl, vanityUrl: vanityUrl, vanityName: vanityName, access: access, effectiveAccess: effectiveAccess, effectivePermission: effectivePermission, unsharedAt: unsharedAt, isPasswordEnabled: isPasswordEnabled, permissions: permissions, downloadCount: downloadCount, previewCount: previewCount };
}
exports.deserializeFileSharedLinkField = deserializeFileSharedLinkField;
function serializeFileSharedLinkField(val) {
    return { ["url"]: val.url, ["download_url"]: val.downloadUrl, ["vanity_url"]: val.vanityUrl, ["vanity_name"]: val.vanityName, ["access"]: val.access === void 0 ? void 0 : serializeFileSharedLinkFieldAccessField(val.access), ["effective_access"]: serializeFileSharedLinkFieldEffectiveAccessField(val.effectiveAccess), ["effective_permission"]: serializeFileSharedLinkFieldEffectivePermissionField(val.effectivePermission), ["unshared_at"]: val.unsharedAt, ["is_password_enabled"]: val.isPasswordEnabled, ["permissions"]: val.permissions === void 0 ? void 0 : serializeFileSharedLinkFieldPermissionsField(val.permissions), ["download_count"]: val.downloadCount, ["preview_count"]: val.previewCount };
}
exports.serializeFileSharedLinkField = serializeFileSharedLinkField;
function deserializeFileItemStatusField(val) {
    if (!(0, json_js_1.isJSON)(val, "string")) {
        throw "Expecting a string for \"FileItemStatusField\"";
    }
    if (val === "active") {
        return "active";
    }
    if (val === "trashed") {
        return "trashed";
    }
    if (val === "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeFileItemStatusField = deserializeFileItemStatusField;
function serializeFileItemStatusField(val) {
    return val;
}
exports.serializeFileItemStatusField = serializeFileItemStatusField;
function deserializeFileBaseTypeField(val) {
    if (!(0, json_js_1.isJSON)(val, "string")) {
        throw "Expecting a string for \"FileBaseTypeField\"";
    }
    if (val === "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeFileBaseTypeField = deserializeFileBaseTypeField;
function serializeFileBaseTypeField(val) {
    return val;
}
exports.serializeFileBaseTypeField = serializeFileBaseTypeField;
function deserializeFileBase(val) {
    if (!(0, json_js_1.isJSON)(val, "object")) {
        throw "Expecting an object for \"FileBase\"";
    }
    if (val.id === void 0) {
        throw "Expecting \"id\" of type \"FileBase\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"FileBase\"";
    }
    const id = val.id;
    if (!(val.etag === void 0) && !(0, json_js_1.isJSON)(val.etag, "string")) {
        throw "Expecting string for \"etag\" of type \"FileBase\"";
    }
    const etag = (0, json_js_1.isJSON)(val.etag, "string") ? val.etag : void 0;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"FileBase\" to be defined";
    }
    const type = deserializeFileBaseTypeField(val.type);
    return { id: id, etag: etag, type: type };
}
exports.deserializeFileBase = deserializeFileBase;
function serializeFileBase(val) {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: serializeFileBaseTypeField(val.type) };
}
exports.serializeFileBase = serializeFileBase;
function deserializeFileVersionBaseTypeField(val) {
    if (!(0, json_js_1.isJSON)(val, "string")) {
        throw "Expecting a string for \"FileVersionBaseTypeField\"";
    }
    if (val === "file_version") {
        return "file_version";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeFileVersionBaseTypeField = deserializeFileVersionBaseTypeField;
function serializeFileVersionBaseTypeField(val) {
    return val;
}
exports.serializeFileVersionBaseTypeField = serializeFileVersionBaseTypeField;
function deserializeFileVersionBase(val) {
    if (!(0, json_js_1.isJSON)(val, "object")) {
        throw "Expecting an object for \"FileVersionBase\"";
    }
    if (val.id === void 0) {
        throw "Expecting \"id\" of type \"FileVersionBase\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"FileVersionBase\"";
    }
    const id = val.id;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"FileVersionBase\" to be defined";
    }
    const type = deserializeFileVersionBaseTypeField(val.type);
    return { id: id, type: type };
}
exports.deserializeFileVersionBase = deserializeFileVersionBase;
function serializeFileVersionBase(val) {
    return { ["id"]: val.id, ["type"]: serializeFileVersionBaseTypeField(val.type) };
}
exports.serializeFileVersionBase = serializeFileVersionBase;
function deserializeFileVersionMini(val) {
    if (!(0, json_js_1.isJSON)(val, "object")) {
        throw "Expecting an object for \"FileVersionMini\"";
    }
    if (!(val.sha1 === void 0) && !(0, json_js_1.isJSON)(val.sha1, "string")) {
        throw "Expecting string for \"sha1\" of type \"FileVersionMini\"";
    }
    const sha1 = (0, json_js_1.isJSON)(val.sha1, "string") ? val.sha1 : void 0;
    if (val.id === void 0) {
        throw "Expecting \"id\" of type \"FileVersionMini\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"FileVersionMini\"";
    }
    const id = val.id;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"FileVersionMini\" to be defined";
    }
    const type = deserializeFileVersionBaseTypeField(val.type);
    return { sha1: sha1, id: id, type: type };
}
exports.deserializeFileVersionMini = deserializeFileVersionMini;
function serializeFileVersionMini(val) {
    const base = serializeFileVersionBase(val);
    if (!(0, json_js_1.isJSON)(base, "object")) {
        throw "Expecting an object for \"FileVersionMini\"";
    }
    return Object.assign(Object.assign({}, base), { ["sha1"]: val.sha1 });
}
exports.serializeFileVersionMini = serializeFileVersionMini;
function deserializeFileMini(val) {
    if (!(0, json_js_1.isJSON)(val, "object")) {
        throw "Expecting an object for \"FileMini\"";
    }
    if (val.sequence_id === void 0) {
        throw "Expecting \"sequence_id\" of type \"FileMini\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.sequence_id, "string")) {
        throw "Expecting string for \"sequence_id\" of type \"FileMini\"";
    }
    const sequenceId = val.sequence_id;
    if (!(val.name === void 0) && !(0, json_js_1.isJSON)(val.name, "string")) {
        throw "Expecting string for \"name\" of type \"FileMini\"";
    }
    const name = (0, json_js_1.isJSON)(val.name, "string") ? val.name : void 0;
    if (val.sha1 === void 0) {
        throw "Expecting \"sha1\" of type \"FileMini\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.sha1, "string")) {
        throw "Expecting string for \"sha1\" of type \"FileMini\"";
    }
    const sha1 = val.sha1;
    const fileVersion = val.file_version === void 0 ? void 0 : deserializeFileVersionMini(val.file_version);
    if (val.id === void 0) {
        throw "Expecting \"id\" of type \"FileMini\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"FileMini\"";
    }
    const id = val.id;
    if (!(val.etag === void 0) && !(0, json_js_1.isJSON)(val.etag, "string")) {
        throw "Expecting string for \"etag\" of type \"FileMini\"";
    }
    const etag = (0, json_js_1.isJSON)(val.etag, "string") ? val.etag : void 0;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"FileMini\" to be defined";
    }
    const type = deserializeFileBaseTypeField(val.type);
    return { sequenceId: sequenceId, name: name, sha1: sha1, fileVersion: fileVersion, id: id, etag: etag, type: type };
}
exports.deserializeFileMini = deserializeFileMini;
function serializeFileMini(val) {
    const base = serializeFileBase(val);
    if (!(0, json_js_1.isJSON)(base, "object")) {
        throw "Expecting an object for \"FileMini\"";
    }
    return Object.assign(Object.assign({}, base), { ["sequence_id"]: val.sequenceId, ["name"]: val.name, ["sha1"]: val.sha1, ["file_version"]: val.fileVersion === void 0 ? void 0 : serializeFileVersionMini(val.fileVersion) });
}
exports.serializeFileMini = serializeFileMini;
function deserializeFolderBaseTypeField(val) {
    if (!(0, json_js_1.isJSON)(val, "string")) {
        throw "Expecting a string for \"FolderBaseTypeField\"";
    }
    if (val === "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeFolderBaseTypeField = deserializeFolderBaseTypeField;
function serializeFolderBaseTypeField(val) {
    return val;
}
exports.serializeFolderBaseTypeField = serializeFolderBaseTypeField;
function deserializeFolderBase(val) {
    if (!(0, json_js_1.isJSON)(val, "object")) {
        throw "Expecting an object for \"FolderBase\"";
    }
    if (val.id === void 0) {
        throw "Expecting \"id\" of type \"FolderBase\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"FolderBase\"";
    }
    const id = val.id;
    if (!(val.etag === void 0) && !(0, json_js_1.isJSON)(val.etag, "string")) {
        throw "Expecting string for \"etag\" of type \"FolderBase\"";
    }
    const etag = (0, json_js_1.isJSON)(val.etag, "string") ? val.etag : void 0;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"FolderBase\" to be defined";
    }
    const type = deserializeFolderBaseTypeField(val.type);
    return { id: id, etag: etag, type: type };
}
exports.deserializeFolderBase = deserializeFolderBase;
function serializeFolderBase(val) {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: serializeFolderBaseTypeField(val.type) };
}
exports.serializeFolderBase = serializeFolderBase;
function deserializeFolderMini(val) {
    if (!(0, json_js_1.isJSON)(val, "object")) {
        throw "Expecting an object for \"FolderMini\"";
    }
    if (!(val.sequence_id === void 0) && !(0, json_js_1.isJSON)(val.sequence_id, "string")) {
        throw "Expecting string for \"sequence_id\" of type \"FolderMini\"";
    }
    const sequenceId = (0, json_js_1.isJSON)(val.sequence_id, "string") ? val.sequence_id : void 0;
    if (!(val.name === void 0) && !(0, json_js_1.isJSON)(val.name, "string")) {
        throw "Expecting string for \"name\" of type \"FolderMini\"";
    }
    const name = (0, json_js_1.isJSON)(val.name, "string") ? val.name : void 0;
    if (val.id === void 0) {
        throw "Expecting \"id\" of type \"FolderMini\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"FolderMini\"";
    }
    const id = val.id;
    if (!(val.etag === void 0) && !(0, json_js_1.isJSON)(val.etag, "string")) {
        throw "Expecting string for \"etag\" of type \"FolderMini\"";
    }
    const etag = (0, json_js_1.isJSON)(val.etag, "string") ? val.etag : void 0;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"FolderMini\" to be defined";
    }
    const type = deserializeFolderBaseTypeField(val.type);
    return { sequenceId: sequenceId, name: name, id: id, etag: etag, type: type };
}
exports.deserializeFolderMini = deserializeFolderMini;
function serializeFolderMini(val) {
    const base = serializeFolderBase(val);
    if (!(0, json_js_1.isJSON)(base, "object")) {
        throw "Expecting an object for \"FolderMini\"";
    }
    return Object.assign(Object.assign({}, base), { ["sequence_id"]: val.sequenceId, ["name"]: val.name });
}
exports.serializeFolderMini = serializeFolderMini;
function deserializeTrashFileRestoredPathCollectionField(val) {
    if (!(0, json_js_1.isJSON)(val, "object")) {
        throw "Expecting an object for \"TrashFileRestoredPathCollectionField\"";
    }
    if (val.total_count === void 0) {
        throw "Expecting \"total_count\" of type \"TrashFileRestoredPathCollectionField\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.total_count, "number")) {
        throw "Expecting number for \"total_count\" of type \"TrashFileRestoredPathCollectionField\"";
    }
    const totalCount = val.total_count;
    if (val.entries === void 0) {
        throw "Expecting \"entries\" of type \"TrashFileRestoredPathCollectionField\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.entries, "array")) {
        throw "Expecting array for \"entries\" of type \"TrashFileRestoredPathCollectionField\"";
    }
    const entries = val.entries.map(function (itm) {
        return deserializeFolderMini(itm);
    });
    return { totalCount: totalCount, entries: entries };
}
exports.deserializeTrashFileRestoredPathCollectionField = deserializeTrashFileRestoredPathCollectionField;
function serializeTrashFileRestoredPathCollectionField(val) {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item) {
            return serializeFolderMini(item);
        }) };
}
exports.serializeTrashFileRestoredPathCollectionField = serializeTrashFileRestoredPathCollectionField;
function deserializeFilePathCollectionField(val) {
    if (!(0, json_js_1.isJSON)(val, "object")) {
        throw "Expecting an object for \"FilePathCollectionField\"";
    }
    if (val.total_count === void 0) {
        throw "Expecting \"total_count\" of type \"FilePathCollectionField\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.total_count, "number")) {
        throw "Expecting number for \"total_count\" of type \"FilePathCollectionField\"";
    }
    const totalCount = val.total_count;
    if (val.entries === void 0) {
        throw "Expecting \"entries\" of type \"FilePathCollectionField\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.entries, "array")) {
        throw "Expecting array for \"entries\" of type \"FilePathCollectionField\"";
    }
    const entries = val.entries.map(function (itm) {
        return deserializeFolderMini(itm);
    });
    return { totalCount: totalCount, entries: entries };
}
exports.deserializeFilePathCollectionField = deserializeFilePathCollectionField;
function serializeFilePathCollectionField(val) {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item) {
            return serializeFolderMini(item);
        }) };
}
exports.serializeFilePathCollectionField = serializeFilePathCollectionField;
function deserializeUserBaseTypeField(val) {
    if (!(0, json_js_1.isJSON)(val, "string")) {
        throw "Expecting a string for \"UserBaseTypeField\"";
    }
    if (val === "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUserBaseTypeField = deserializeUserBaseTypeField;
function serializeUserBaseTypeField(val) {
    return val;
}
exports.serializeUserBaseTypeField = serializeUserBaseTypeField;
function deserializeUserBase(val) {
    if (!(0, json_js_1.isJSON)(val, "object")) {
        throw "Expecting an object for \"UserBase\"";
    }
    if (!(val.id === void 0) && !(0, json_js_1.isJSON)(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"UserBase\"";
    }
    const id = (0, json_js_1.isJSON)(val.id, "string") ? val.id : void 0;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"UserBase\" to be defined";
    }
    const type = deserializeUserBaseTypeField(val.type);
    return { id: id, type: type };
}
exports.deserializeUserBase = deserializeUserBase;
function serializeUserBase(val) {
    return { ["id"]: val.id, ["type"]: serializeUserBaseTypeField(val.type) };
}
exports.serializeUserBase = serializeUserBase;
function deserializeUserMini(val) {
    if (!(0, json_js_1.isJSON)(val, "object")) {
        throw "Expecting an object for \"UserMini\"";
    }
    if (val.name === void 0) {
        throw "Expecting \"name\" of type \"UserMini\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.name, "string")) {
        throw "Expecting string for \"name\" of type \"UserMini\"";
    }
    const name = val.name;
    if (val.login === void 0) {
        throw "Expecting \"login\" of type \"UserMini\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.login, "string")) {
        throw "Expecting string for \"login\" of type \"UserMini\"";
    }
    const login = val.login;
    if (!(val.id === void 0) && !(0, json_js_1.isJSON)(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"UserMini\"";
    }
    const id = (0, json_js_1.isJSON)(val.id, "string") ? val.id : void 0;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"UserMini\" to be defined";
    }
    const type = deserializeUserBaseTypeField(val.type);
    return { name: name, login: login, id: id, type: type };
}
exports.deserializeUserMini = deserializeUserMini;
function serializeUserMini(val) {
    const base = serializeUserBase(val);
    if (!(0, json_js_1.isJSON)(base, "object")) {
        throw "Expecting an object for \"UserMini\"";
    }
    return Object.assign(Object.assign({}, base), { ["name"]: val.name, ["login"]: val.login });
}
exports.serializeUserMini = serializeUserMini;
function deserializeFile(val) {
    if (!(0, json_js_1.isJSON)(val, "object")) {
        throw "Expecting an object for \"File\"";
    }
    if (val.description === void 0) {
        throw "Expecting \"description\" of type \"File\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.description, "string")) {
        throw "Expecting string for \"description\" of type \"File\"";
    }
    const description = val.description;
    if (val.size === void 0) {
        throw "Expecting \"size\" of type \"File\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.size, "number")) {
        throw "Expecting number for \"size\" of type \"File\"";
    }
    const size = val.size;
    if (val.path_collection === void 0) {
        throw "Expecting \"path_collection\" of type \"File\" to be defined";
    }
    const pathCollection = deserializeFilePathCollectionField(val.path_collection);
    if (val.created_at === void 0) {
        throw "Expecting \"created_at\" of type \"File\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.created_at, "string")) {
        throw "Expecting string for \"created_at\" of type \"File\"";
    }
    const createdAt = val.created_at;
    if (val.modified_at === void 0) {
        throw "Expecting \"modified_at\" of type \"File\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.modified_at, "string")) {
        throw "Expecting string for \"modified_at\" of type \"File\"";
    }
    const modifiedAt = val.modified_at;
    if (!(val.trashed_at === void 0) && !(0, json_js_1.isJSON)(val.trashed_at, "string")) {
        throw "Expecting string for \"trashed_at\" of type \"File\"";
    }
    const trashedAt = (0, json_js_1.isJSON)(val.trashed_at, "string") ? val.trashed_at : void 0;
    if (!(val.purged_at === void 0) && !(0, json_js_1.isJSON)(val.purged_at, "string")) {
        throw "Expecting string for \"purged_at\" of type \"File\"";
    }
    const purgedAt = (0, json_js_1.isJSON)(val.purged_at, "string") ? val.purged_at : void 0;
    if (!(val.content_created_at === void 0) && !(0, json_js_1.isJSON)(val.content_created_at, "string")) {
        throw "Expecting string for \"content_created_at\" of type \"File\"";
    }
    const contentCreatedAt = (0, json_js_1.isJSON)(val.content_created_at, "string") ? val.content_created_at : void 0;
    if (!(val.content_modified_at === void 0) && !(0, json_js_1.isJSON)(val.content_modified_at, "string")) {
        throw "Expecting string for \"content_modified_at\" of type \"File\"";
    }
    const contentModifiedAt = (0, json_js_1.isJSON)(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const createdBy = val.created_by === void 0 ? void 0 : deserializeUserMini(val.created_by);
    if (val.modified_by === void 0) {
        throw "Expecting \"modified_by\" of type \"File\" to be defined";
    }
    const modifiedBy = deserializeUserMini(val.modified_by);
    if (val.owned_by === void 0) {
        throw "Expecting \"owned_by\" of type \"File\" to be defined";
    }
    const ownedBy = deserializeUserMini(val.owned_by);
    const sharedLink = val.shared_link === void 0 ? void 0 : deserializeFileSharedLinkField(val.shared_link);
    const parent = val.parent === void 0 ? void 0 : deserializeFolderMini(val.parent);
    if (val.item_status === void 0) {
        throw "Expecting \"item_status\" of type \"File\" to be defined";
    }
    const itemStatus = deserializeFileItemStatusField(val.item_status);
    if (val.sequence_id === void 0) {
        throw "Expecting \"sequence_id\" of type \"File\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.sequence_id, "string")) {
        throw "Expecting string for \"sequence_id\" of type \"File\"";
    }
    const sequenceId = val.sequence_id;
    if (!(val.name === void 0) && !(0, json_js_1.isJSON)(val.name, "string")) {
        throw "Expecting string for \"name\" of type \"File\"";
    }
    const name = (0, json_js_1.isJSON)(val.name, "string") ? val.name : void 0;
    if (val.sha1 === void 0) {
        throw "Expecting \"sha1\" of type \"File\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.sha1, "string")) {
        throw "Expecting string for \"sha1\" of type \"File\"";
    }
    const sha1 = val.sha1;
    const fileVersion = val.file_version === void 0 ? void 0 : deserializeFileVersionMini(val.file_version);
    if (val.id === void 0) {
        throw "Expecting \"id\" of type \"File\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"File\"";
    }
    const id = val.id;
    if (!(val.etag === void 0) && !(0, json_js_1.isJSON)(val.etag, "string")) {
        throw "Expecting string for \"etag\" of type \"File\"";
    }
    const etag = (0, json_js_1.isJSON)(val.etag, "string") ? val.etag : void 0;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"File\" to be defined";
    }
    const type = deserializeFileBaseTypeField(val.type);
    return { description: description, size: size, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, parent: parent, itemStatus: itemStatus, sequenceId: sequenceId, name: name, sha1: sha1, fileVersion: fileVersion, id: id, etag: etag, type: type };
}
exports.deserializeFile = deserializeFile;
function serializeFile(val) {
    const base = serializeFileMini(val);
    if (!(0, json_js_1.isJSON)(base, "object")) {
        throw "Expecting an object for \"File\"";
    }
    return Object.assign(Object.assign({}, base), { ["description"]: val.description, ["size"]: val.size, ["path_collection"]: serializeFilePathCollectionField(val.pathCollection), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["content_created_at"]: val.contentCreatedAt, ["content_modified_at"]: val.contentModifiedAt, ["created_by"]: val.createdBy === void 0 ? void 0 : serializeUserMini(val.createdBy), ["modified_by"]: serializeUserMini(val.modifiedBy), ["owned_by"]: serializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink === void 0 ? void 0 : serializeFileSharedLinkField(val.sharedLink), ["parent"]: val.parent === void 0 ? void 0 : serializeFolderMini(val.parent), ["item_status"]: serializeFileItemStatusField(val.itemStatus) });
}
exports.serializeFile = serializeFile;
function deserializeTrashFileRestoredTypeField(val) {
    if (!(0, json_js_1.isJSON)(val, "string")) {
        throw "Expecting a string for \"TrashFileRestoredTypeField\"";
    }
    if (val === "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeTrashFileRestoredTypeField = deserializeTrashFileRestoredTypeField;
function serializeTrashFileRestoredTypeField(val) {
    return val;
}
exports.serializeTrashFileRestoredTypeField = serializeTrashFileRestoredTypeField;
function deserializeTrashFileRestoredItemStatusField(val) {
    if (!(0, json_js_1.isJSON)(val, "string")) {
        throw "Expecting a string for \"TrashFileRestoredItemStatusField\"";
    }
    if (val === "active") {
        return "active";
    }
    if (val === "trashed") {
        return "trashed";
    }
    if (val === "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeTrashFileRestoredItemStatusField = deserializeTrashFileRestoredItemStatusField;
function serializeTrashFileRestoredItemStatusField(val) {
    return val;
}
exports.serializeTrashFileRestoredItemStatusField = serializeTrashFileRestoredItemStatusField;
function deserializeTrashFileRestored(val) {
    if (!(0, json_js_1.isJSON)(val, "object")) {
        throw "Expecting an object for \"TrashFileRestored\"";
    }
    if (val.id === void 0) {
        throw "Expecting \"id\" of type \"TrashFileRestored\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"TrashFileRestored\"";
    }
    const id = val.id;
    if (!(val.etag === void 0) && !(0, json_js_1.isJSON)(val.etag, "string")) {
        throw "Expecting string for \"etag\" of type \"TrashFileRestored\"";
    }
    const etag = (0, json_js_1.isJSON)(val.etag, "string") ? val.etag : void 0;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"TrashFileRestored\" to be defined";
    }
    const type = deserializeTrashFileRestoredTypeField(val.type);
    if (val.sequence_id === void 0) {
        throw "Expecting \"sequence_id\" of type \"TrashFileRestored\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.sequence_id, "string")) {
        throw "Expecting string for \"sequence_id\" of type \"TrashFileRestored\"";
    }
    const sequenceId = val.sequence_id;
    if (!(val.name === void 0) && !(0, json_js_1.isJSON)(val.name, "string")) {
        throw "Expecting string for \"name\" of type \"TrashFileRestored\"";
    }
    const name = (0, json_js_1.isJSON)(val.name, "string") ? val.name : void 0;
    if (val.sha1 === void 0) {
        throw "Expecting \"sha1\" of type \"TrashFileRestored\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.sha1, "string")) {
        throw "Expecting string for \"sha1\" of type \"TrashFileRestored\"";
    }
    const sha1 = val.sha1;
    const fileVersion = val.file_version === void 0 ? void 0 : deserializeFileVersionMini(val.file_version);
    if (val.description === void 0) {
        throw "Expecting \"description\" of type \"TrashFileRestored\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.description, "string")) {
        throw "Expecting string for \"description\" of type \"TrashFileRestored\"";
    }
    const description = val.description;
    if (val.size === void 0) {
        throw "Expecting \"size\" of type \"TrashFileRestored\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.size, "number")) {
        throw "Expecting number for \"size\" of type \"TrashFileRestored\"";
    }
    const size = val.size;
    if (val.path_collection === void 0) {
        throw "Expecting \"path_collection\" of type \"TrashFileRestored\" to be defined";
    }
    const pathCollection = deserializeTrashFileRestoredPathCollectionField(val.path_collection);
    if (val.created_at === void 0) {
        throw "Expecting \"created_at\" of type \"TrashFileRestored\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.created_at, "string")) {
        throw "Expecting string for \"created_at\" of type \"TrashFileRestored\"";
    }
    const createdAt = val.created_at;
    if (val.modified_at === void 0) {
        throw "Expecting \"modified_at\" of type \"TrashFileRestored\" to be defined";
    }
    if (!(0, json_js_1.isJSON)(val.modified_at, "string")) {
        throw "Expecting string for \"modified_at\" of type \"TrashFileRestored\"";
    }
    const modifiedAt = val.modified_at;
    if (!(val.trashed_at === void 0) && !(0, json_js_1.isJSON)(val.trashed_at, "string")) {
        throw "Expecting string for \"trashed_at\" of type \"TrashFileRestored\"";
    }
    const trashedAt = (0, json_js_1.isJSON)(val.trashed_at, "string") ? val.trashed_at : void 0;
    if (!(val.purged_at === void 0) && !(0, json_js_1.isJSON)(val.purged_at, "string")) {
        throw "Expecting string for \"purged_at\" of type \"TrashFileRestored\"";
    }
    const purgedAt = (0, json_js_1.isJSON)(val.purged_at, "string") ? val.purged_at : void 0;
    if (!(val.content_created_at === void 0) && !(0, json_js_1.isJSON)(val.content_created_at, "string")) {
        throw "Expecting string for \"content_created_at\" of type \"TrashFileRestored\"";
    }
    const contentCreatedAt = (0, json_js_1.isJSON)(val.content_created_at, "string") ? val.content_created_at : void 0;
    if (!(val.content_modified_at === void 0) && !(0, json_js_1.isJSON)(val.content_modified_at, "string")) {
        throw "Expecting string for \"content_modified_at\" of type \"TrashFileRestored\"";
    }
    const contentModifiedAt = (0, json_js_1.isJSON)(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const createdBy = val.created_by === void 0 ? void 0 : deserializeUserMini(val.created_by);
    if (val.modified_by === void 0) {
        throw "Expecting \"modified_by\" of type \"TrashFileRestored\" to be defined";
    }
    const modifiedBy = deserializeUserMini(val.modified_by);
    if (val.owned_by === void 0) {
        throw "Expecting \"owned_by\" of type \"TrashFileRestored\" to be defined";
    }
    const ownedBy = deserializeUserMini(val.owned_by);
    if (!(val.shared_link === void 0) && !(0, json_js_1.isJSON)(val.shared_link, "string")) {
        throw "Expecting string for \"shared_link\" of type \"TrashFileRestored\"";
    }
    const sharedLink = (0, json_js_1.isJSON)(val.shared_link, "string") ? val.shared_link : void 0;
    const parent = val.parent === void 0 ? void 0 : deserializeFolderMini(val.parent);
    if (val.item_status === void 0) {
        throw "Expecting \"item_status\" of type \"TrashFileRestored\" to be defined";
    }
    const itemStatus = deserializeTrashFileRestoredItemStatusField(val.item_status);
    return { id: id, etag: etag, type: type, sequenceId: sequenceId, name: name, sha1: sha1, fileVersion: fileVersion, description: description, size: size, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, parent: parent, itemStatus: itemStatus };
}
exports.deserializeTrashFileRestored = deserializeTrashFileRestored;
function serializeTrashFileRestored(val) {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: serializeTrashFileRestoredTypeField(val.type), ["sequence_id"]: val.sequenceId, ["name"]: val.name, ["sha1"]: val.sha1, ["file_version"]: val.fileVersion === void 0 ? void 0 : serializeFileVersionMini(val.fileVersion), ["description"]: val.description, ["size"]: val.size, ["path_collection"]: serializeTrashFileRestoredPathCollectionField(val.pathCollection), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["content_created_at"]: val.contentCreatedAt, ["content_modified_at"]: val.contentModifiedAt, ["created_by"]: val.createdBy === void 0 ? void 0 : serializeUserMini(val.createdBy), ["modified_by"]: serializeUserMini(val.modifiedBy), ["owned_by"]: serializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink, ["parent"]: val.parent === void 0 ? void 0 : serializeFolderMini(val.parent), ["item_status"]: serializeTrashFileRestoredItemStatusField(val.itemStatus) };
}
exports.serializeTrashFileRestored = serializeTrashFileRestored;
//# sourceMappingURL=schemas.generated.js.map