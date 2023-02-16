import { isJSON, JSON } from "./json.js";
export type ClientErrorTypeField = "error";
export function deserializeClientErrorTypeField(val: JSON): ClientErrorTypeField {
    if (!isJSON(val, "string")) {
        throw "Expecting a string for \"ClientErrorTypeField\"";
    }
    if (val === "error") {
        return "error";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeClientErrorTypeField(val: ClientErrorTypeField): JSON {
    return val;
}
export type ClientErrorCodeField = "created" | "accepted" | "no_content" | "redirect" | "not_modified" | "bad_request" | "unauthorized" | "forbidden" | "not_found" | "method_not_allowed" | "conflict" | "precondition_failed" | "too_many_requests" | "internal_server_error" | "unavailable" | "item_name_invalid" | "insufficient_scope";
export function deserializeClientErrorCodeField(val: JSON): ClientErrorCodeField {
    if (!isJSON(val, "string")) {
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
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeClientErrorCodeField(val: ClientErrorCodeField): JSON {
    return val;
}
export interface ClientErrorContextInfoField {
    readonly message?: string;
}
export function deserializeClientErrorContextInfoField(val: JSON): ClientErrorContextInfoField {
    if (!isJSON(val, "object")) {
        throw "Expecting an object for \"ClientErrorContextInfoField\"";
    }
    if (!(val.message === void 0) && !isJSON(val.message, "string")) {
        throw "Expecting string for \"message\" of type \"ClientErrorContextInfoField\"";
    }
    const message: undefined | string = isJSON(val.message, "string") ? val.message : void 0;
    return { message: message } satisfies ClientErrorContextInfoField;
}
export function serializeClientErrorContextInfoField(val: ClientErrorContextInfoField): JSON {
    return { ["message"]: val.message };
}
export interface ClientError {
    readonly type?: ClientErrorTypeField;
    readonly status?: number;
    readonly code?: ClientErrorCodeField;
    readonly message?: string;
    readonly contextInfo?: ClientErrorContextInfoField;
    readonly helpUrl?: string;
    readonly requestId?: string;
}
export function deserializeClientError(val: JSON): ClientError {
    if (!isJSON(val, "object")) {
        throw "Expecting an object for \"ClientError\"";
    }
    const type: undefined | ClientErrorTypeField = val.type === void 0 ? void 0 : deserializeClientErrorTypeField(val.type);
    if (!(val.status === void 0) && !isJSON(val.status, "number")) {
        throw "Expecting number for \"status\" of type \"ClientError\"";
    }
    const status: undefined | number = isJSON(val.status, "number") ? val.status : void 0;
    const code: undefined | ClientErrorCodeField = val.code === void 0 ? void 0 : deserializeClientErrorCodeField(val.code);
    if (!(val.message === void 0) && !isJSON(val.message, "string")) {
        throw "Expecting string for \"message\" of type \"ClientError\"";
    }
    const message: undefined | string = isJSON(val.message, "string") ? val.message : void 0;
    const contextInfo: undefined | ClientErrorContextInfoField = val.context_info === void 0 ? void 0 : deserializeClientErrorContextInfoField(val.context_info);
    if (!(val.help_url === void 0) && !isJSON(val.help_url, "string")) {
        throw "Expecting string for \"help_url\" of type \"ClientError\"";
    }
    const helpUrl: undefined | string = isJSON(val.help_url, "string") ? val.help_url : void 0;
    if (!(val.request_id === void 0) && !isJSON(val.request_id, "string")) {
        throw "Expecting string for \"request_id\" of type \"ClientError\"";
    }
    const requestId: undefined | string = isJSON(val.request_id, "string") ? val.request_id : void 0;
    return { type: type, status: status, code: code, message: message, contextInfo: contextInfo, helpUrl: helpUrl, requestId: requestId } satisfies ClientError;
}
export function serializeClientError(val: ClientError): JSON {
    return { ["type"]: val.type === void 0 ? void 0 : serializeClientErrorTypeField(val.type), ["status"]: val.status, ["code"]: val.code === void 0 ? void 0 : serializeClientErrorCodeField(val.code), ["message"]: val.message, ["context_info"]: val.contextInfo === void 0 ? void 0 : serializeClientErrorContextInfoField(val.contextInfo), ["help_url"]: val.helpUrl, ["request_id"]: val.requestId };
}
export type FileSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export function deserializeFileSharedLinkFieldAccessField(val: JSON): FileSharedLinkFieldAccessField {
    if (!isJSON(val, "string")) {
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
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileSharedLinkFieldAccessField(val: FileSharedLinkFieldAccessField): JSON {
    return val;
}
export type FileSharedLinkFieldEffectiveAccessField = "open" | "company" | "collaborators";
export function deserializeFileSharedLinkFieldEffectiveAccessField(val: JSON): FileSharedLinkFieldEffectiveAccessField {
    if (!isJSON(val, "string")) {
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
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileSharedLinkFieldEffectiveAccessField(val: FileSharedLinkFieldEffectiveAccessField): JSON {
    return val;
}
export type FileSharedLinkFieldEffectivePermissionField = "can_edit" | "can_download" | "can_preview" | "no_access";
export function deserializeFileSharedLinkFieldEffectivePermissionField(val: JSON): FileSharedLinkFieldEffectivePermissionField {
    if (!isJSON(val, "string")) {
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
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileSharedLinkFieldEffectivePermissionField(val: FileSharedLinkFieldEffectivePermissionField): JSON {
    return val;
}
export interface FileSharedLinkFieldPermissionsField {
    readonly canDownload: boolean;
    readonly canPreview: boolean;
    readonly canEdit: boolean;
}
export function deserializeFileSharedLinkFieldPermissionsField(val: JSON): FileSharedLinkFieldPermissionsField {
    if (!isJSON(val, "object")) {
        throw "Expecting an object for \"FileSharedLinkFieldPermissionsField\"";
    }
    if (val.can_download === void 0) {
        throw "Expecting \"can_download\" of type \"FileSharedLinkFieldPermissionsField\" to be defined";
    }
    if (!isJSON(val.can_download, "boolean")) {
        throw "Expecting boolean for \"can_download\" of type \"FileSharedLinkFieldPermissionsField\"";
    }
    const canDownload: boolean = val.can_download;
    if (val.can_preview === void 0) {
        throw "Expecting \"can_preview\" of type \"FileSharedLinkFieldPermissionsField\" to be defined";
    }
    if (!isJSON(val.can_preview, "boolean")) {
        throw "Expecting boolean for \"can_preview\" of type \"FileSharedLinkFieldPermissionsField\"";
    }
    const canPreview: boolean = val.can_preview;
    if (val.can_edit === void 0) {
        throw "Expecting \"can_edit\" of type \"FileSharedLinkFieldPermissionsField\" to be defined";
    }
    if (!isJSON(val.can_edit, "boolean")) {
        throw "Expecting boolean for \"can_edit\" of type \"FileSharedLinkFieldPermissionsField\"";
    }
    const canEdit: boolean = val.can_edit;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies FileSharedLinkFieldPermissionsField;
}
export function serializeFileSharedLinkFieldPermissionsField(val: FileSharedLinkFieldPermissionsField): JSON {
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
export interface FileSharedLinkField {
    readonly url: string;
    readonly downloadUrl?: string;
    readonly vanityUrl?: string;
    readonly vanityName?: string;
    readonly access?: FileSharedLinkFieldAccessField;
    readonly effectiveAccess: FileSharedLinkFieldEffectiveAccessField;
    readonly effectivePermission: FileSharedLinkFieldEffectivePermissionField;
    readonly unsharedAt?: string;
    readonly isPasswordEnabled: boolean;
    readonly permissions?: FileSharedLinkFieldPermissionsField;
    readonly downloadCount: number;
    readonly previewCount: number;
}
export function deserializeFileSharedLinkField(val: JSON): FileSharedLinkField {
    if (!isJSON(val, "object")) {
        throw "Expecting an object for \"FileSharedLinkField\"";
    }
    if (val.url === void 0) {
        throw "Expecting \"url\" of type \"FileSharedLinkField\" to be defined";
    }
    if (!isJSON(val.url, "string")) {
        throw "Expecting string for \"url\" of type \"FileSharedLinkField\"";
    }
    const url: string = val.url;
    if (!(val.download_url === void 0) && !isJSON(val.download_url, "string")) {
        throw "Expecting string for \"download_url\" of type \"FileSharedLinkField\"";
    }
    const downloadUrl: undefined | string = isJSON(val.download_url, "string") ? val.download_url : void 0;
    if (!(val.vanity_url === void 0) && !isJSON(val.vanity_url, "string")) {
        throw "Expecting string for \"vanity_url\" of type \"FileSharedLinkField\"";
    }
    const vanityUrl: undefined | string = isJSON(val.vanity_url, "string") ? val.vanity_url : void 0;
    if (!(val.vanity_name === void 0) && !isJSON(val.vanity_name, "string")) {
        throw "Expecting string for \"vanity_name\" of type \"FileSharedLinkField\"";
    }
    const vanityName: undefined | string = isJSON(val.vanity_name, "string") ? val.vanity_name : void 0;
    const access: undefined | FileSharedLinkFieldAccessField = val.access === void 0 ? void 0 : deserializeFileSharedLinkFieldAccessField(val.access);
    if (val.effective_access === void 0) {
        throw "Expecting \"effective_access\" of type \"FileSharedLinkField\" to be defined";
    }
    const effectiveAccess: FileSharedLinkFieldEffectiveAccessField = deserializeFileSharedLinkFieldEffectiveAccessField(val.effective_access);
    if (val.effective_permission === void 0) {
        throw "Expecting \"effective_permission\" of type \"FileSharedLinkField\" to be defined";
    }
    const effectivePermission: FileSharedLinkFieldEffectivePermissionField = deserializeFileSharedLinkFieldEffectivePermissionField(val.effective_permission);
    if (!(val.unshared_at === void 0) && !isJSON(val.unshared_at, "string")) {
        throw "Expecting string for \"unshared_at\" of type \"FileSharedLinkField\"";
    }
    const unsharedAt: undefined | string = isJSON(val.unshared_at, "string") ? val.unshared_at : void 0;
    if (val.is_password_enabled === void 0) {
        throw "Expecting \"is_password_enabled\" of type \"FileSharedLinkField\" to be defined";
    }
    if (!isJSON(val.is_password_enabled, "boolean")) {
        throw "Expecting boolean for \"is_password_enabled\" of type \"FileSharedLinkField\"";
    }
    const isPasswordEnabled: boolean = val.is_password_enabled;
    const permissions: undefined | FileSharedLinkFieldPermissionsField = val.permissions === void 0 ? void 0 : deserializeFileSharedLinkFieldPermissionsField(val.permissions);
    if (val.download_count === void 0) {
        throw "Expecting \"download_count\" of type \"FileSharedLinkField\" to be defined";
    }
    if (!isJSON(val.download_count, "number")) {
        throw "Expecting number for \"download_count\" of type \"FileSharedLinkField\"";
    }
    const downloadCount: number = val.download_count;
    if (val.preview_count === void 0) {
        throw "Expecting \"preview_count\" of type \"FileSharedLinkField\" to be defined";
    }
    if (!isJSON(val.preview_count, "number")) {
        throw "Expecting number for \"preview_count\" of type \"FileSharedLinkField\"";
    }
    const previewCount: number = val.preview_count;
    return { url: url, downloadUrl: downloadUrl, vanityUrl: vanityUrl, vanityName: vanityName, access: access, effectiveAccess: effectiveAccess, effectivePermission: effectivePermission, unsharedAt: unsharedAt, isPasswordEnabled: isPasswordEnabled, permissions: permissions, downloadCount: downloadCount, previewCount: previewCount } satisfies FileSharedLinkField;
}
export function serializeFileSharedLinkField(val: FileSharedLinkField): JSON {
    return { ["url"]: val.url, ["download_url"]: val.downloadUrl, ["vanity_url"]: val.vanityUrl, ["vanity_name"]: val.vanityName, ["access"]: val.access === void 0 ? void 0 : serializeFileSharedLinkFieldAccessField(val.access), ["effective_access"]: serializeFileSharedLinkFieldEffectiveAccessField(val.effectiveAccess), ["effective_permission"]: serializeFileSharedLinkFieldEffectivePermissionField(val.effectivePermission), ["unshared_at"]: val.unsharedAt, ["is_password_enabled"]: val.isPasswordEnabled, ["permissions"]: val.permissions === void 0 ? void 0 : serializeFileSharedLinkFieldPermissionsField(val.permissions), ["download_count"]: val.downloadCount, ["preview_count"]: val.previewCount };
}
export type FileItemStatusField = "active" | "trashed" | "deleted";
export function deserializeFileItemStatusField(val: JSON): FileItemStatusField {
    if (!isJSON(val, "string")) {
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
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileItemStatusField(val: FileItemStatusField): JSON {
    return val;
}
export type FileBaseTypeField = "file";
export function deserializeFileBaseTypeField(val: JSON): FileBaseTypeField {
    if (!isJSON(val, "string")) {
        throw "Expecting a string for \"FileBaseTypeField\"";
    }
    if (val === "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileBaseTypeField(val: FileBaseTypeField): JSON {
    return val;
}
export interface FileBase {
    readonly id: string;
    readonly etag?: string;
    readonly type: FileBaseTypeField;
}
export function deserializeFileBase(val: JSON): FileBase {
    if (!isJSON(val, "object")) {
        throw "Expecting an object for \"FileBase\"";
    }
    if (val.id === void 0) {
        throw "Expecting \"id\" of type \"FileBase\" to be defined";
    }
    if (!isJSON(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"FileBase\"";
    }
    const id: string = val.id;
    if (!(val.etag === void 0) && !isJSON(val.etag, "string")) {
        throw "Expecting string for \"etag\" of type \"FileBase\"";
    }
    const etag: undefined | string = isJSON(val.etag, "string") ? val.etag : void 0;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"FileBase\" to be defined";
    }
    const type: FileBaseTypeField = deserializeFileBaseTypeField(val.type);
    return { id: id, etag: etag, type: type } satisfies FileBase;
}
export function serializeFileBase(val: FileBase): JSON {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: serializeFileBaseTypeField(val.type) };
}
export type FileVersionBaseTypeField = "file_version";
export function deserializeFileVersionBaseTypeField(val: JSON): FileVersionBaseTypeField {
    if (!isJSON(val, "string")) {
        throw "Expecting a string for \"FileVersionBaseTypeField\"";
    }
    if (val === "file_version") {
        return "file_version";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileVersionBaseTypeField(val: FileVersionBaseTypeField): JSON {
    return val;
}
export interface FileVersionBase {
    readonly id: string;
    readonly type: FileVersionBaseTypeField;
}
export function deserializeFileVersionBase(val: JSON): FileVersionBase {
    if (!isJSON(val, "object")) {
        throw "Expecting an object for \"FileVersionBase\"";
    }
    if (val.id === void 0) {
        throw "Expecting \"id\" of type \"FileVersionBase\" to be defined";
    }
    if (!isJSON(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"FileVersionBase\"";
    }
    const id: string = val.id;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"FileVersionBase\" to be defined";
    }
    const type: FileVersionBaseTypeField = deserializeFileVersionBaseTypeField(val.type);
    return { id: id, type: type } satisfies FileVersionBase;
}
export function serializeFileVersionBase(val: FileVersionBase): JSON {
    return { ["id"]: val.id, ["type"]: serializeFileVersionBaseTypeField(val.type) };
}
export type FileVersionMini = FileVersionBase & {
    /**
     * The SHA1 hash of this version of the file. */
    readonly sha1?: string;
};
export function deserializeFileVersionMini(val: JSON): FileVersionMini {
    if (!isJSON(val, "object")) {
        throw "Expecting an object for \"FileVersionMini\"";
    }
    if (!(val.sha1 === void 0) && !isJSON(val.sha1, "string")) {
        throw "Expecting string for \"sha1\" of type \"FileVersionMini\"";
    }
    const sha1: undefined | string = isJSON(val.sha1, "string") ? val.sha1 : void 0;
    if (val.id === void 0) {
        throw "Expecting \"id\" of type \"FileVersionMini\" to be defined";
    }
    if (!isJSON(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"FileVersionMini\"";
    }
    const id: string = val.id;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"FileVersionMini\" to be defined";
    }
    const type: FileVersionBaseTypeField = deserializeFileVersionBaseTypeField(val.type);
    return { sha1: sha1, id: id, type: type } satisfies FileVersionMini;
}
export function serializeFileVersionMini(val: FileVersionMini): JSON {
    const base: any = serializeFileVersionBase(val);
    if (!isJSON(base, "object")) {
        throw "Expecting an object for \"FileVersionMini\"";
    }
    return { ...base, ...{ ["sha1"]: val.sha1 } };
}
export type FileMini = FileBase & {
    readonly sequenceId: string;
    /**
     * The name of the file */
    readonly name?: string;
    /**
     * The SHA1 hash of the file. This can be used to compare the contents
     * of a file on Box with a local file. */
    readonly sha1: string;
    readonly fileVersion?: FileVersionMini;
};
export function deserializeFileMini(val: JSON): FileMini {
    if (!isJSON(val, "object")) {
        throw "Expecting an object for \"FileMini\"";
    }
    if (val.sequence_id === void 0) {
        throw "Expecting \"sequence_id\" of type \"FileMini\" to be defined";
    }
    if (!isJSON(val.sequence_id, "string")) {
        throw "Expecting string for \"sequence_id\" of type \"FileMini\"";
    }
    const sequenceId: string = val.sequence_id;
    if (!(val.name === void 0) && !isJSON(val.name, "string")) {
        throw "Expecting string for \"name\" of type \"FileMini\"";
    }
    const name: undefined | string = isJSON(val.name, "string") ? val.name : void 0;
    if (val.sha1 === void 0) {
        throw "Expecting \"sha1\" of type \"FileMini\" to be defined";
    }
    if (!isJSON(val.sha1, "string")) {
        throw "Expecting string for \"sha1\" of type \"FileMini\"";
    }
    const sha1: string = val.sha1;
    const fileVersion: undefined | FileVersionMini = val.file_version === void 0 ? void 0 : deserializeFileVersionMini(val.file_version);
    if (val.id === void 0) {
        throw "Expecting \"id\" of type \"FileMini\" to be defined";
    }
    if (!isJSON(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"FileMini\"";
    }
    const id: string = val.id;
    if (!(val.etag === void 0) && !isJSON(val.etag, "string")) {
        throw "Expecting string for \"etag\" of type \"FileMini\"";
    }
    const etag: undefined | string = isJSON(val.etag, "string") ? val.etag : void 0;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"FileMini\" to be defined";
    }
    const type: FileBaseTypeField = deserializeFileBaseTypeField(val.type);
    return { sequenceId: sequenceId, name: name, sha1: sha1, fileVersion: fileVersion, id: id, etag: etag, type: type } satisfies FileMini;
}
export function serializeFileMini(val: FileMini): JSON {
    const base: any = serializeFileBase(val);
    if (!isJSON(base, "object")) {
        throw "Expecting an object for \"FileMini\"";
    }
    return { ...base, ...{ ["sequence_id"]: val.sequenceId, ["name"]: val.name, ["sha1"]: val.sha1, ["file_version"]: val.fileVersion === void 0 ? void 0 : serializeFileVersionMini(val.fileVersion) } };
}
export type FolderBaseTypeField = "folder";
export function deserializeFolderBaseTypeField(val: JSON): FolderBaseTypeField {
    if (!isJSON(val, "string")) {
        throw "Expecting a string for \"FolderBaseTypeField\"";
    }
    if (val === "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFolderBaseTypeField(val: FolderBaseTypeField): JSON {
    return val;
}
export interface FolderBase {
    readonly id: string;
    readonly etag?: string;
    readonly type: FolderBaseTypeField;
}
export function deserializeFolderBase(val: JSON): FolderBase {
    if (!isJSON(val, "object")) {
        throw "Expecting an object for \"FolderBase\"";
    }
    if (val.id === void 0) {
        throw "Expecting \"id\" of type \"FolderBase\" to be defined";
    }
    if (!isJSON(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"FolderBase\"";
    }
    const id: string = val.id;
    if (!(val.etag === void 0) && !isJSON(val.etag, "string")) {
        throw "Expecting string for \"etag\" of type \"FolderBase\"";
    }
    const etag: undefined | string = isJSON(val.etag, "string") ? val.etag : void 0;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"FolderBase\" to be defined";
    }
    const type: FolderBaseTypeField = deserializeFolderBaseTypeField(val.type);
    return { id: id, etag: etag, type: type } satisfies FolderBase;
}
export function serializeFolderBase(val: FolderBase): JSON {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: serializeFolderBaseTypeField(val.type) };
}
export type FolderMini = FolderBase & {
    readonly sequenceId?: string;
    /**
     * The name of the folder. */
    readonly name?: string;
};
export function deserializeFolderMini(val: JSON): FolderMini {
    if (!isJSON(val, "object")) {
        throw "Expecting an object for \"FolderMini\"";
    }
    if (!(val.sequence_id === void 0) && !isJSON(val.sequence_id, "string")) {
        throw "Expecting string for \"sequence_id\" of type \"FolderMini\"";
    }
    const sequenceId: undefined | string = isJSON(val.sequence_id, "string") ? val.sequence_id : void 0;
    if (!(val.name === void 0) && !isJSON(val.name, "string")) {
        throw "Expecting string for \"name\" of type \"FolderMini\"";
    }
    const name: undefined | string = isJSON(val.name, "string") ? val.name : void 0;
    if (val.id === void 0) {
        throw "Expecting \"id\" of type \"FolderMini\" to be defined";
    }
    if (!isJSON(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"FolderMini\"";
    }
    const id: string = val.id;
    if (!(val.etag === void 0) && !isJSON(val.etag, "string")) {
        throw "Expecting string for \"etag\" of type \"FolderMini\"";
    }
    const etag: undefined | string = isJSON(val.etag, "string") ? val.etag : void 0;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"FolderMini\" to be defined";
    }
    const type: FolderBaseTypeField = deserializeFolderBaseTypeField(val.type);
    return { sequenceId: sequenceId, name: name, id: id, etag: etag, type: type } satisfies FolderMini;
}
export function serializeFolderMini(val: FolderMini): JSON {
    const base: any = serializeFolderBase(val);
    if (!isJSON(base, "object")) {
        throw "Expecting an object for \"FolderMini\"";
    }
    return { ...base, ...{ ["sequence_id"]: val.sequenceId, ["name"]: val.name } };
}
export interface TrashFileRestoredPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export function deserializeTrashFileRestoredPathCollectionField(val: JSON): TrashFileRestoredPathCollectionField {
    if (!isJSON(val, "object")) {
        throw "Expecting an object for \"TrashFileRestoredPathCollectionField\"";
    }
    if (val.total_count === void 0) {
        throw "Expecting \"total_count\" of type \"TrashFileRestoredPathCollectionField\" to be defined";
    }
    if (!isJSON(val.total_count, "number")) {
        throw "Expecting number for \"total_count\" of type \"TrashFileRestoredPathCollectionField\"";
    }
    const totalCount: number = val.total_count;
    if (val.entries === void 0) {
        throw "Expecting \"entries\" of type \"TrashFileRestoredPathCollectionField\" to be defined";
    }
    if (!isJSON(val.entries, "array")) {
        throw "Expecting array for \"entries\" of type \"TrashFileRestoredPathCollectionField\"";
    }
    const entries: readonly FolderMini[] = val.entries.map(function (itm: JSON): any {
        return deserializeFolderMini(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies TrashFileRestoredPathCollectionField;
}
export function serializeTrashFileRestoredPathCollectionField(val: TrashFileRestoredPathCollectionField): JSON {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: FolderMini): any {
            return serializeFolderMini(item);
        }) as readonly any[] };
}
export interface FilePathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export function deserializeFilePathCollectionField(val: JSON): FilePathCollectionField {
    if (!isJSON(val, "object")) {
        throw "Expecting an object for \"FilePathCollectionField\"";
    }
    if (val.total_count === void 0) {
        throw "Expecting \"total_count\" of type \"FilePathCollectionField\" to be defined";
    }
    if (!isJSON(val.total_count, "number")) {
        throw "Expecting number for \"total_count\" of type \"FilePathCollectionField\"";
    }
    const totalCount: number = val.total_count;
    if (val.entries === void 0) {
        throw "Expecting \"entries\" of type \"FilePathCollectionField\" to be defined";
    }
    if (!isJSON(val.entries, "array")) {
        throw "Expecting array for \"entries\" of type \"FilePathCollectionField\"";
    }
    const entries: readonly FolderMini[] = val.entries.map(function (itm: JSON): any {
        return deserializeFolderMini(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies FilePathCollectionField;
}
export function serializeFilePathCollectionField(val: FilePathCollectionField): JSON {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: FolderMini): any {
            return serializeFolderMini(item);
        }) as readonly any[] };
}
export type UserBaseTypeField = "user";
export function deserializeUserBaseTypeField(val: JSON): UserBaseTypeField {
    if (!isJSON(val, "string")) {
        throw "Expecting a string for \"UserBaseTypeField\"";
    }
    if (val === "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUserBaseTypeField(val: UserBaseTypeField): JSON {
    return val;
}
export interface UserBase {
    readonly id?: string;
    readonly type: UserBaseTypeField;
}
export function deserializeUserBase(val: JSON): UserBase {
    if (!isJSON(val, "object")) {
        throw "Expecting an object for \"UserBase\"";
    }
    if (!(val.id === void 0) && !isJSON(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"UserBase\"";
    }
    const id: undefined | string = isJSON(val.id, "string") ? val.id : void 0;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"UserBase\" to be defined";
    }
    const type: UserBaseTypeField = deserializeUserBaseTypeField(val.type);
    return { id: id, type: type } satisfies UserBase;
}
export function serializeUserBase(val: UserBase): JSON {
    return { ["id"]: val.id, ["type"]: serializeUserBaseTypeField(val.type) };
}
export type UserMini = UserBase & {
    /**
     * The display name of this user */
    readonly name: string;
    /**
     * The primary email address of this user */
    readonly login: string;
};
export function deserializeUserMini(val: JSON): UserMini {
    if (!isJSON(val, "object")) {
        throw "Expecting an object for \"UserMini\"";
    }
    if (val.name === void 0) {
        throw "Expecting \"name\" of type \"UserMini\" to be defined";
    }
    if (!isJSON(val.name, "string")) {
        throw "Expecting string for \"name\" of type \"UserMini\"";
    }
    const name: string = val.name;
    if (val.login === void 0) {
        throw "Expecting \"login\" of type \"UserMini\" to be defined";
    }
    if (!isJSON(val.login, "string")) {
        throw "Expecting string for \"login\" of type \"UserMini\"";
    }
    const login: string = val.login;
    if (!(val.id === void 0) && !isJSON(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"UserMini\"";
    }
    const id: undefined | string = isJSON(val.id, "string") ? val.id : void 0;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"UserMini\" to be defined";
    }
    const type: UserBaseTypeField = deserializeUserBaseTypeField(val.type);
    return { name: name, login: login, id: id, type: type } satisfies UserMini;
}
export function serializeUserMini(val: UserMini): JSON {
    const base: any = serializeUserBase(val);
    if (!isJSON(base, "object")) {
        throw "Expecting an object for \"UserMini\"";
    }
    return { ...base, ...{ ["name"]: val.name, ["login"]: val.login } };
}
export type File = FileMini & {
    /**
     * The optional description of this file */
    readonly description: string;
    /**
     * The file size in bytes. Be careful parsing this integer as it can
     * get very large and cause an integer overflow. */
    readonly size: number;
    readonly pathCollection: FilePathCollectionField;
    /**
     * The date and time when the file was created on Box. */
    readonly createdAt: string;
    /**
     * The date and time when the file was last updated on Box. */
    readonly modifiedAt: string;
    /**
     * The time at which this file was put in the trash. */
    readonly trashedAt?: string;
    /**
     * The time at which this file is expected to be purged
     * from the trash. */
    readonly purgedAt?: string;
    /**
     * The date and time at which this file was originally
     * created, which might be before it was uploaded to Box. */
    readonly contentCreatedAt?: string;
    /**
     * The date and time at which this file was last updated,
     * which might be before it was uploaded to Box. */
    readonly contentModifiedAt?: string;
    readonly createdBy?: UserMini;
    readonly modifiedBy: UserMini;
    readonly ownedBy: UserMini;
    readonly sharedLink?: FileSharedLinkField;
    readonly parent?: FolderMini;
    /**
     * Defines if this item has been deleted or not.
     * 
     * * `active` when the item has is not in the trash
     * * `trashed` when the item has been moved to the trash but not deleted
     * * `deleted` when the item has been permanently deleted. */
    readonly itemStatus: FileItemStatusField;
};
export function deserializeFile(val: JSON): File {
    if (!isJSON(val, "object")) {
        throw "Expecting an object for \"File\"";
    }
    if (val.description === void 0) {
        throw "Expecting \"description\" of type \"File\" to be defined";
    }
    if (!isJSON(val.description, "string")) {
        throw "Expecting string for \"description\" of type \"File\"";
    }
    const description: string = val.description;
    if (val.size === void 0) {
        throw "Expecting \"size\" of type \"File\" to be defined";
    }
    if (!isJSON(val.size, "number")) {
        throw "Expecting number for \"size\" of type \"File\"";
    }
    const size: number = val.size;
    if (val.path_collection === void 0) {
        throw "Expecting \"path_collection\" of type \"File\" to be defined";
    }
    const pathCollection: FilePathCollectionField = deserializeFilePathCollectionField(val.path_collection);
    if (val.created_at === void 0) {
        throw "Expecting \"created_at\" of type \"File\" to be defined";
    }
    if (!isJSON(val.created_at, "string")) {
        throw "Expecting string for \"created_at\" of type \"File\"";
    }
    const createdAt: string = val.created_at;
    if (val.modified_at === void 0) {
        throw "Expecting \"modified_at\" of type \"File\" to be defined";
    }
    if (!isJSON(val.modified_at, "string")) {
        throw "Expecting string for \"modified_at\" of type \"File\"";
    }
    const modifiedAt: string = val.modified_at;
    if (!(val.trashed_at === void 0) && !isJSON(val.trashed_at, "string")) {
        throw "Expecting string for \"trashed_at\" of type \"File\"";
    }
    const trashedAt: undefined | string = isJSON(val.trashed_at, "string") ? val.trashed_at : void 0;
    if (!(val.purged_at === void 0) && !isJSON(val.purged_at, "string")) {
        throw "Expecting string for \"purged_at\" of type \"File\"";
    }
    const purgedAt: undefined | string = isJSON(val.purged_at, "string") ? val.purged_at : void 0;
    if (!(val.content_created_at === void 0) && !isJSON(val.content_created_at, "string")) {
        throw "Expecting string for \"content_created_at\" of type \"File\"";
    }
    const contentCreatedAt: undefined | string = isJSON(val.content_created_at, "string") ? val.content_created_at : void 0;
    if (!(val.content_modified_at === void 0) && !isJSON(val.content_modified_at, "string")) {
        throw "Expecting string for \"content_modified_at\" of type \"File\"";
    }
    const contentModifiedAt: undefined | string = isJSON(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const createdBy: undefined | UserMini = val.created_by === void 0 ? void 0 : deserializeUserMini(val.created_by);
    if (val.modified_by === void 0) {
        throw "Expecting \"modified_by\" of type \"File\" to be defined";
    }
    const modifiedBy: UserMini = deserializeUserMini(val.modified_by);
    if (val.owned_by === void 0) {
        throw "Expecting \"owned_by\" of type \"File\" to be defined";
    }
    const ownedBy: UserMini = deserializeUserMini(val.owned_by);
    const sharedLink: undefined | FileSharedLinkField = val.shared_link === void 0 ? void 0 : deserializeFileSharedLinkField(val.shared_link);
    const parent: undefined | FolderMini = val.parent === void 0 ? void 0 : deserializeFolderMini(val.parent);
    if (val.item_status === void 0) {
        throw "Expecting \"item_status\" of type \"File\" to be defined";
    }
    const itemStatus: FileItemStatusField = deserializeFileItemStatusField(val.item_status);
    if (val.sequence_id === void 0) {
        throw "Expecting \"sequence_id\" of type \"File\" to be defined";
    }
    if (!isJSON(val.sequence_id, "string")) {
        throw "Expecting string for \"sequence_id\" of type \"File\"";
    }
    const sequenceId: string = val.sequence_id;
    if (!(val.name === void 0) && !isJSON(val.name, "string")) {
        throw "Expecting string for \"name\" of type \"File\"";
    }
    const name: undefined | string = isJSON(val.name, "string") ? val.name : void 0;
    if (val.sha1 === void 0) {
        throw "Expecting \"sha1\" of type \"File\" to be defined";
    }
    if (!isJSON(val.sha1, "string")) {
        throw "Expecting string for \"sha1\" of type \"File\"";
    }
    const sha1: string = val.sha1;
    const fileVersion: undefined | FileVersionMini = val.file_version === void 0 ? void 0 : deserializeFileVersionMini(val.file_version);
    if (val.id === void 0) {
        throw "Expecting \"id\" of type \"File\" to be defined";
    }
    if (!isJSON(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"File\"";
    }
    const id: string = val.id;
    if (!(val.etag === void 0) && !isJSON(val.etag, "string")) {
        throw "Expecting string for \"etag\" of type \"File\"";
    }
    const etag: undefined | string = isJSON(val.etag, "string") ? val.etag : void 0;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"File\" to be defined";
    }
    const type: FileBaseTypeField = deserializeFileBaseTypeField(val.type);
    return { description: description, size: size, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, parent: parent, itemStatus: itemStatus, sequenceId: sequenceId, name: name, sha1: sha1, fileVersion: fileVersion, id: id, etag: etag, type: type } satisfies File;
}
export function serializeFile(val: File): JSON {
    const base: any = serializeFileMini(val);
    if (!isJSON(base, "object")) {
        throw "Expecting an object for \"File\"";
    }
    return { ...base, ...{ ["description"]: val.description, ["size"]: val.size, ["path_collection"]: serializeFilePathCollectionField(val.pathCollection), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["content_created_at"]: val.contentCreatedAt, ["content_modified_at"]: val.contentModifiedAt, ["created_by"]: val.createdBy === void 0 ? void 0 : serializeUserMini(val.createdBy), ["modified_by"]: serializeUserMini(val.modifiedBy), ["owned_by"]: serializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink === void 0 ? void 0 : serializeFileSharedLinkField(val.sharedLink), ["parent"]: val.parent === void 0 ? void 0 : serializeFolderMini(val.parent), ["item_status"]: serializeFileItemStatusField(val.itemStatus) } };
}
export type TrashFileRestoredTypeField = "file";
export function deserializeTrashFileRestoredTypeField(val: JSON): TrashFileRestoredTypeField {
    if (!isJSON(val, "string")) {
        throw "Expecting a string for \"TrashFileRestoredTypeField\"";
    }
    if (val === "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrashFileRestoredTypeField(val: TrashFileRestoredTypeField): JSON {
    return val;
}
export type TrashFileRestoredItemStatusField = "active" | "trashed" | "deleted";
export function deserializeTrashFileRestoredItemStatusField(val: JSON): TrashFileRestoredItemStatusField {
    if (!isJSON(val, "string")) {
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
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrashFileRestoredItemStatusField(val: TrashFileRestoredItemStatusField): JSON {
    return val;
}
export interface TrashFileRestored {
    readonly id: string;
    readonly etag?: string;
    readonly type: TrashFileRestoredTypeField;
    readonly sequenceId: string;
    readonly name?: string;
    readonly sha1: string;
    readonly fileVersion?: FileVersionMini;
    readonly description: string;
    readonly size: number;
    readonly pathCollection: TrashFileRestoredPathCollectionField;
    readonly createdAt: string;
    readonly modifiedAt: string;
    readonly trashedAt?: string;
    readonly purgedAt?: string;
    readonly contentCreatedAt?: string;
    readonly contentModifiedAt?: string;
    readonly createdBy?: UserMini;
    readonly modifiedBy: UserMini;
    readonly ownedBy: UserMini;
    readonly sharedLink?: string;
    readonly parent?: FolderMini;
    readonly itemStatus: TrashFileRestoredItemStatusField;
}
export function deserializeTrashFileRestored(val: JSON): TrashFileRestored {
    if (!isJSON(val, "object")) {
        throw "Expecting an object for \"TrashFileRestored\"";
    }
    if (val.id === void 0) {
        throw "Expecting \"id\" of type \"TrashFileRestored\" to be defined";
    }
    if (!isJSON(val.id, "string")) {
        throw "Expecting string for \"id\" of type \"TrashFileRestored\"";
    }
    const id: string = val.id;
    if (!(val.etag === void 0) && !isJSON(val.etag, "string")) {
        throw "Expecting string for \"etag\" of type \"TrashFileRestored\"";
    }
    const etag: undefined | string = isJSON(val.etag, "string") ? val.etag : void 0;
    if (val.type === void 0) {
        throw "Expecting \"type\" of type \"TrashFileRestored\" to be defined";
    }
    const type: TrashFileRestoredTypeField = deserializeTrashFileRestoredTypeField(val.type);
    if (val.sequence_id === void 0) {
        throw "Expecting \"sequence_id\" of type \"TrashFileRestored\" to be defined";
    }
    if (!isJSON(val.sequence_id, "string")) {
        throw "Expecting string for \"sequence_id\" of type \"TrashFileRestored\"";
    }
    const sequenceId: string = val.sequence_id;
    if (!(val.name === void 0) && !isJSON(val.name, "string")) {
        throw "Expecting string for \"name\" of type \"TrashFileRestored\"";
    }
    const name: undefined | string = isJSON(val.name, "string") ? val.name : void 0;
    if (val.sha1 === void 0) {
        throw "Expecting \"sha1\" of type \"TrashFileRestored\" to be defined";
    }
    if (!isJSON(val.sha1, "string")) {
        throw "Expecting string for \"sha1\" of type \"TrashFileRestored\"";
    }
    const sha1: string = val.sha1;
    const fileVersion: undefined | FileVersionMini = val.file_version === void 0 ? void 0 : deserializeFileVersionMini(val.file_version);
    if (val.description === void 0) {
        throw "Expecting \"description\" of type \"TrashFileRestored\" to be defined";
    }
    if (!isJSON(val.description, "string")) {
        throw "Expecting string for \"description\" of type \"TrashFileRestored\"";
    }
    const description: string = val.description;
    if (val.size === void 0) {
        throw "Expecting \"size\" of type \"TrashFileRestored\" to be defined";
    }
    if (!isJSON(val.size, "number")) {
        throw "Expecting number for \"size\" of type \"TrashFileRestored\"";
    }
    const size: number = val.size;
    if (val.path_collection === void 0) {
        throw "Expecting \"path_collection\" of type \"TrashFileRestored\" to be defined";
    }
    const pathCollection: TrashFileRestoredPathCollectionField = deserializeTrashFileRestoredPathCollectionField(val.path_collection);
    if (val.created_at === void 0) {
        throw "Expecting \"created_at\" of type \"TrashFileRestored\" to be defined";
    }
    if (!isJSON(val.created_at, "string")) {
        throw "Expecting string for \"created_at\" of type \"TrashFileRestored\"";
    }
    const createdAt: string = val.created_at;
    if (val.modified_at === void 0) {
        throw "Expecting \"modified_at\" of type \"TrashFileRestored\" to be defined";
    }
    if (!isJSON(val.modified_at, "string")) {
        throw "Expecting string for \"modified_at\" of type \"TrashFileRestored\"";
    }
    const modifiedAt: string = val.modified_at;
    if (!(val.trashed_at === void 0) && !isJSON(val.trashed_at, "string")) {
        throw "Expecting string for \"trashed_at\" of type \"TrashFileRestored\"";
    }
    const trashedAt: undefined | string = isJSON(val.trashed_at, "string") ? val.trashed_at : void 0;
    if (!(val.purged_at === void 0) && !isJSON(val.purged_at, "string")) {
        throw "Expecting string for \"purged_at\" of type \"TrashFileRestored\"";
    }
    const purgedAt: undefined | string = isJSON(val.purged_at, "string") ? val.purged_at : void 0;
    if (!(val.content_created_at === void 0) && !isJSON(val.content_created_at, "string")) {
        throw "Expecting string for \"content_created_at\" of type \"TrashFileRestored\"";
    }
    const contentCreatedAt: undefined | string = isJSON(val.content_created_at, "string") ? val.content_created_at : void 0;
    if (!(val.content_modified_at === void 0) && !isJSON(val.content_modified_at, "string")) {
        throw "Expecting string for \"content_modified_at\" of type \"TrashFileRestored\"";
    }
    const contentModifiedAt: undefined | string = isJSON(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const createdBy: undefined | UserMini = val.created_by === void 0 ? void 0 : deserializeUserMini(val.created_by);
    if (val.modified_by === void 0) {
        throw "Expecting \"modified_by\" of type \"TrashFileRestored\" to be defined";
    }
    const modifiedBy: UserMini = deserializeUserMini(val.modified_by);
    if (val.owned_by === void 0) {
        throw "Expecting \"owned_by\" of type \"TrashFileRestored\" to be defined";
    }
    const ownedBy: UserMini = deserializeUserMini(val.owned_by);
    if (!(val.shared_link === void 0) && !isJSON(val.shared_link, "string")) {
        throw "Expecting string for \"shared_link\" of type \"TrashFileRestored\"";
    }
    const sharedLink: undefined | string = isJSON(val.shared_link, "string") ? val.shared_link : void 0;
    const parent: undefined | FolderMini = val.parent === void 0 ? void 0 : deserializeFolderMini(val.parent);
    if (val.item_status === void 0) {
        throw "Expecting \"item_status\" of type \"TrashFileRestored\" to be defined";
    }
    const itemStatus: TrashFileRestoredItemStatusField = deserializeTrashFileRestoredItemStatusField(val.item_status);
    return { id: id, etag: etag, type: type, sequenceId: sequenceId, name: name, sha1: sha1, fileVersion: fileVersion, description: description, size: size, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, parent: parent, itemStatus: itemStatus } satisfies TrashFileRestored;
}
export function serializeTrashFileRestored(val: TrashFileRestored): JSON {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: serializeTrashFileRestoredTypeField(val.type), ["sequence_id"]: val.sequenceId, ["name"]: val.name, ["sha1"]: val.sha1, ["file_version"]: val.fileVersion === void 0 ? void 0 : serializeFileVersionMini(val.fileVersion), ["description"]: val.description, ["size"]: val.size, ["path_collection"]: serializeTrashFileRestoredPathCollectionField(val.pathCollection), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["content_created_at"]: val.contentCreatedAt, ["content_modified_at"]: val.contentModifiedAt, ["created_by"]: val.createdBy === void 0 ? void 0 : serializeUserMini(val.createdBy), ["modified_by"]: serializeUserMini(val.modifiedBy), ["owned_by"]: serializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink, ["parent"]: val.parent === void 0 ? void 0 : serializeFolderMini(val.parent), ["item_status"]: serializeTrashFileRestoredItemStatusField(val.itemStatus) };
}
