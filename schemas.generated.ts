import { isJSON, JSON } from "./json.js";
import Immutable from "immutable";
export type ClientErrorCodeField = "created" | "accepted" | "no_content" | "redirect" | "not_modified" | "bad_request" | "unauthorized" | "forbidden" | "not_found" | "method_not_allowed" | "conflict" | "precondition_failed" | "too_many_requests" | "internal_server_error" | "unavailable" | "item_name_invalid" | "insufficient_scope";
export function deserializeClientErrorCodeField(value?: JSON): undefined | ClientErrorCodeField {
    if (value === void 0) {
        return void 0;
    }
    return value;
}
export function serializeClientErrorCodeField(value?: ClientErrorCodeField): undefined | JSON {
    if (value === void 0) {
        return void 0;
    }
    return value;
}
export interface ClientErrorContextInfoField {
    /**
     * More details on the error. */
    readonly message?: string;
}
export function deserializeClientErrorContextInfoField(value?: JSON): undefined | ClientErrorContextInfoField {
    if (value === void 0) {
        return void 0;
    }
    if (!(isJSON(value, "object") as boolean)) {
        throw "Expecting an object for \"ClientErrorContextInfoField\"";
    }
    return ({ message: value.get("message") } as ClientErrorContextInfoField);
}
export function serializeClientErrorContextInfoField(value?: ClientErrorContextInfoField): undefined | JSON {
    if (value === void 0) {
        return void 0;
    }
    return Immutable.Map<string, any>([
        ["message", value.message]
    ]);
}
export interface ClientError {
    /**
     * `error` */
    readonly type?: "error";
    /**
     * The HTTP status of the response. */
    readonly status?: number;
    /**
     * A Box-specific error code */
    readonly code?: ClientErrorCodeField;
    /**
     * A short message describing the error. */
    readonly message?: string;
    /**
     * A free-form object that contains additional context
     * about the error. The possible fields are defined on
     * a per-endpoint basis. `message` is only one example. */
    readonly contextInfo?: ClientErrorContextInfoField;
    /**
     * A URL that links to more information about why this error occurred. */
    readonly helpUrl?: string;
    /**
     * A unique identifier for this response, which can be used
     * when contacting Box support. */
    readonly requestId?: string;
}
export function deserializeClientError(value?: JSON): undefined | ClientError {
    if (value === void 0) {
        return void 0;
    }
    if (!(isJSON(value, "object") as boolean)) {
        throw "Expecting an object for \"ClientError\"";
    }
    return ({ type: value.get("type"), status: value.get("status"), code: deserializeClientErrorCodeField(value.get("code")) as any, message: value.get("message"), contextInfo: deserializeClientErrorContextInfoField(value.get("context_info")) as any, helpUrl: value.get("help_url"), requestId: value.get("request_id") } as ClientError);
}
export function serializeClientError(value?: ClientError): undefined | JSON {
    if (value === void 0) {
        return void 0;
    }
    return Immutable.Map<string, any>([
        ["type", value.type],
        ["status", value.status],
        ["code", serializeClientErrorCodeField(value.code) as any],
        ["message", value.message],
        ["context_info", serializeClientErrorContextInfoField(value.contextInfo) as any],
        ["help_url", value.helpUrl],
        ["request_id", value.requestId]
    ]);
}
export type FileSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export type FileSharedLinkFieldEffectiveAccessField = "open" | "company" | "collaborators";
export type FileSharedLinkFieldEffectivePermissionField = "can_edit" | "can_download" | "can_preview" | "no_access";
export interface FileSharedLinkFieldPermissionsField {
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
    readonly downloadUrl?: string;
    /**
     * The "Custom URL" that can also be used to preview the item on Box.  Custom
     * URLs can only be created or modified in the Box Web application. */
    readonly vanityUrl?: string;
    /**
     * The custom name of a shared link, as used in the `vanity_url` field. */
    readonly vanityName?: string;
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
    readonly access?: FileSharedLinkFieldAccessField;
    /**
     * The effective access level for the shared link. This can be a more
     * restrictive access level than the value in the `access` field when the
     * enterprise settings restrict the allowed access levels. */
    readonly effectiveAccess: FileSharedLinkFieldEffectiveAccessField;
    /**
     * The effective permissions for this shared link.
     * These result in the more restrictive combination of
     * the share link permissions and the item permissions set
     * by the administrator, the owner, and any ancestor item
     * such as a folder. */
    readonly effectivePermission: FileSharedLinkFieldEffectivePermissionField;
    /**
     * The date and time when this link will be unshared. This field can only be
     * set by users with paid accounts. */
    readonly unsharedAt?: string;
    /**
     * Defines if the shared link requires a password to access the item. */
    readonly isPasswordEnabled: boolean;
    /**
     * Defines if this link allows a user to preview, edit, and download an item.
     * These permissions refer to the shared link only and
     * do not supersede permissions applied to the item itself. */
    readonly permissions?: FileSharedLinkFieldPermissionsField;
    /**
     * The number of times this item has been downloaded. */
    readonly downloadCount: number;
    /**
     * The number of times this item has been previewed. */
    readonly previewCount: number;
}
export type FileItemStatusField = "active" | "trashed" | "deleted";
export interface FileBase {
    /**
     * The unique identifier that represent a file.
     * 
     * The ID for any file can be determined
     * by visiting a file in the web application
     * and copying the ID from the URL. For example,
     * for the URL `https://*.app.box.com/files/123`
     * the `file_id` is `123`. */
    readonly id: string;
    /**
     * The HTTP `etag` of this file. This can be used within some API
     * endpoints in the `If-Match` and `If-None-Match` headers to only
     * perform changes on the file if (no) changes have happened. */
    readonly etag?: string;
    /**
     * `file` */
    readonly type: "file";
}
export function deserializeFileBase(value?: JSON): undefined | FileBase {
    if (value === void 0) {
        return void 0;
    }
    if (!(isJSON(value, "object") as boolean)) {
        throw "Expecting an object for \"FileBase\"";
    }
    return ({ id: value.get("id"), etag: value.get("etag"), type: value.get("type") } as FileBase);
}
export function serializeFileBase(value?: FileBase): undefined | JSON {
    if (value === void 0) {
        return void 0;
    }
    return Immutable.Map<string, any>([
        ["id", value.id],
        ["etag", value.etag],
        ["type", value.type]
    ]);
}
export interface FileVersionBase {
    /**
     * The unique identifier that represent a file version. */
    readonly id: string;
    /**
     * `file_version` */
    readonly type: "file_version";
}
export function deserializeFileVersionBase(value?: JSON): undefined | FileVersionBase {
    if (value === void 0) {
        return void 0;
    }
    if (!(isJSON(value, "object") as boolean)) {
        throw "Expecting an object for \"FileVersionBase\"";
    }
    return ({ id: value.get("id"), type: value.get("type") } as FileVersionBase);
}
export function serializeFileVersionBase(value?: FileVersionBase): undefined | JSON {
    if (value === void 0) {
        return void 0;
    }
    return Immutable.Map<string, any>([
        ["id", value.id],
        ["type", value.type]
    ]);
}
export type FileVersionMini = FileVersionBase & {
    /**
     * The SHA1 hash of this version of the file. */
    readonly sha1?: string;
};
export function deserializeFileVersionMini(value?: JSON): undefined | FileVersionMini {
    if (value === void 0) {
        return void 0;
    }
    return value;
}
export function serializeFileVersionMini(value?: FileVersionMini): undefined | JSON {
    if (value === void 0) {
        return void 0;
    }
    return (serializeFileVersionBase(value) as any).merge(Immutable.Map<string, any>([
        ["sha1", value.sha1]
    ]));
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
export function deserializeFileMini(value?: JSON): undefined | FileMini {
    if (value === void 0) {
        return void 0;
    }
    return value;
}
export function serializeFileMini(value?: FileMini): undefined | JSON {
    if (value === void 0) {
        return void 0;
    }
    return (serializeFileBase(value) as any).merge(Immutable.Map<string, any>([
        ["sequence_id", value.sequenceId],
        ["name", value.name],
        ["sha1", value.sha1],
        ["file_version", serializeFileVersionMini(value.fileVersion) as any]
    ]));
}
export interface FolderBase {
    /**
     * The unique identifier that represent a folder.
     * 
     * The ID for any folder can be determined
     * by visiting a folder in the web application
     * and copying the ID from the URL. For example,
     * for the URL `https://*.app.box.com/folders/123`
     * the `folder_id` is `123`. */
    readonly id: string;
    /**
     * The HTTP `etag` of this folder. This can be used within some API
     * endpoints in the `If-Match` and `If-None-Match` headers to only
     * perform changes on the folder if (no) changes have happened. */
    readonly etag?: string;
    /**
     * `folder` */
    readonly type: "folder";
}
export function deserializeFolderBase(value?: JSON): undefined | FolderBase {
    if (value === void 0) {
        return void 0;
    }
    if (!(isJSON(value, "object") as boolean)) {
        throw "Expecting an object for \"FolderBase\"";
    }
    return ({ id: value.get("id"), etag: value.get("etag"), type: value.get("type") } as FolderBase);
}
export function serializeFolderBase(value?: FolderBase): undefined | JSON {
    if (value === void 0) {
        return void 0;
    }
    return Immutable.Map<string, any>([
        ["id", value.id],
        ["etag", value.etag],
        ["type", value.type]
    ]);
}
export type FolderMini = FolderBase & {
    readonly sequenceId?: string;
    /**
     * The name of the folder. */
    readonly name?: string;
};
export interface TrashFileRestoredPathCollectionField {
    /**
     * The number of folders in this list. */
    readonly totalCount: number;
    /**
     * The parent folders for this item */
    readonly entries: FolderMini[];
}
export function deserializeTrashFileRestoredPathCollectionField(value?: JSON): undefined | TrashFileRestoredPathCollectionField {
    if (value === void 0) {
        return void 0;
    }
    if (!(isJSON(value, "object") as boolean)) {
        throw "Expecting an object for \"TrashFileRestoredPathCollectionField\"";
    }
    return ({ totalCount: value.get("total_count"), entries: value.get("entries") } as TrashFileRestoredPathCollectionField);
}
export function serializeTrashFileRestoredPathCollectionField(value?: TrashFileRestoredPathCollectionField): undefined | JSON {
    if (value === void 0) {
        return void 0;
    }
    return Immutable.Map<string, any>([
        ["total_count", value.totalCount],
        ["entries", value.entries]
    ]);
}
export function deserializeFolderMini(value?: JSON): undefined | FolderMini {
    if (value === void 0) {
        return void 0;
    }
    return value;
}
export function serializeFolderMini(value?: FolderMini): undefined | JSON {
    if (value === void 0) {
        return void 0;
    }
    return (serializeFolderBase(value) as any).merge(Immutable.Map<string, any>([
        ["sequence_id", value.sequenceId],
        ["name", value.name]
    ]));
}
export interface FilePathCollectionField {
    /**
     * The number of folders in this list. */
    readonly totalCount: number;
    /**
     * The parent folders for this item */
    readonly entries: FolderMini[];
}
export interface UserBase {
    /**
     * The unique identifier for this user */
    readonly id?: string;
    /**
     * `user` */
    readonly type: "user";
}
export function deserializeUserBase(value?: JSON): undefined | UserBase {
    if (value === void 0) {
        return void 0;
    }
    if (!(isJSON(value, "object") as boolean)) {
        throw "Expecting an object for \"UserBase\"";
    }
    return ({ id: value.get("id"), type: value.get("type") } as UserBase);
}
export function serializeUserBase(value?: UserBase): undefined | JSON {
    if (value === void 0) {
        return void 0;
    }
    return Immutable.Map<string, any>([
        ["id", value.id],
        ["type", value.type]
    ]);
}
export type UserMini = UserBase & {
    /**
     * The display name of this user */
    readonly name: string;
    /**
     * The primary email address of this user */
    readonly login: string;
};
export function deserializeUserMini(value?: JSON): undefined | UserMini {
    if (value === void 0) {
        return void 0;
    }
    return value;
}
export function serializeUserMini(value?: UserMini): undefined | JSON {
    if (value === void 0) {
        return void 0;
    }
    return (serializeUserBase(value) as any).merge(Immutable.Map<string, any>([
        ["name", value.name],
        ["login", value.login]
    ]));
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
export function deserializeFile(value?: JSON): undefined | File {
    if (value === void 0) {
        return void 0;
    }
    return value;
}
export function serializeFile(value?: File): undefined | JSON {
    if (value === void 0) {
        return void 0;
    }
    return (serializeFileMini(value) as any).merge(Immutable.Map<string, any>([
        ["description", value.description],
        ["size", value.size],
        ["path_collection", value.pathCollection],
        ["created_at", value.createdAt],
        ["modified_at", value.modifiedAt],
        ["trashed_at", value.trashedAt],
        ["purged_at", value.purgedAt],
        ["content_created_at", value.contentCreatedAt],
        ["content_modified_at", value.contentModifiedAt],
        ["created_by", serializeUserMini(value.createdBy) as any],
        ["modified_by", serializeUserMini(value.modifiedBy) as any],
        ["owned_by", serializeUserMini(value.ownedBy) as any],
        ["shared_link", value.sharedLink],
        ["parent", serializeFolderMini(value.parent) as any],
        ["item_status", value.itemStatus]
    ]));
}
export type TrashFileRestoredItemStatusField = "active" | "trashed" | "deleted";
export function deserializeTrashFileRestoredItemStatusField(value?: JSON): undefined | TrashFileRestoredItemStatusField {
    if (value === void 0) {
        return void 0;
    }
    return value;
}
export function serializeTrashFileRestoredItemStatusField(value?: TrashFileRestoredItemStatusField): undefined | JSON {
    if (value === void 0) {
        return void 0;
    }
    return value;
}
export interface TrashFileRestored {
    /**
     * The unique identifier that represent a file.
     * 
     * The ID for any file can be determined
     * by visiting a file in the web application
     * and copying the ID from the URL. For example,
     * for the URL `https://*.app.box.com/files/123`
     * the `file_id` is `123`. */
    readonly id: string;
    /**
     * The HTTP `etag` of this file. This can be used within some API
     * endpoints in the `If-Match` and `If-None-Match` headers to only
     * perform changes on the file if (no) changes have happened. */
    readonly etag?: string;
    /**
     * `file` */
    readonly type: "file";
    readonly sequenceId: string;
    /**
     * The name of the file */
    readonly name?: string;
    /**
     * The SHA1 hash of the file. This can be used to compare the contents
     * of a file on Box with a local file. */
    readonly sha1: string;
    readonly fileVersion?: FileVersionMini;
    /**
     * The optional description of this file */
    readonly description: string;
    /**
     * The file size in bytes. Be careful parsing this integer as it can
     * get very large and cause an integer overflow. */
    readonly size: number;
    readonly pathCollection: TrashFileRestoredPathCollectionField;
    /**
     * The date and time when the file was created on Box. */
    readonly createdAt: string;
    /**
     * The date and time when the file was last updated on Box. */
    readonly modifiedAt: string;
    /**
     * The time at which this file was put in the
     * trash - becomes `null` after restore. */
    readonly trashedAt?: string;
    /**
     * The time at which this file is expected to be purged
     * from the trash  - becomes `null` after restore. */
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
    /**
     * The shared link for this file. This will
     * be `null` if a file had been trashed, even though the original shared
     * link does become active again. */
    readonly sharedLink?: string;
    readonly parent?: FolderMini;
    /**
     * Defines if this item has been deleted or not.
     * 
     * * `active` when the item has is not in the trash
     * * `trashed` when the item has been moved to the trash but not deleted
     * * `deleted` when the item has been permanently deleted. */
    readonly itemStatus: TrashFileRestoredItemStatusField;
}
export function deserializeTrashFileRestored(value?: JSON): undefined | TrashFileRestored {
    if (value === void 0) {
        return void 0;
    }
    if (!(isJSON(value, "object") as boolean)) {
        throw "Expecting an object for \"TrashFileRestored\"";
    }
    return ({ id: value.get("id"), etag: value.get("etag"), type: value.get("type"), sequenceId: value.get("sequence_id"), name: value.get("name"), sha1: value.get("sha1"), fileVersion: deserializeFileVersionMini(value.get("file_version")) as any, description: value.get("description"), size: value.get("size"), pathCollection: deserializeTrashFileRestoredPathCollectionField(value.get("path_collection")) as any, createdAt: value.get("created_at"), modifiedAt: value.get("modified_at"), trashedAt: value.get("trashed_at"), purgedAt: value.get("purged_at"), contentCreatedAt: value.get("content_created_at"), contentModifiedAt: value.get("content_modified_at"), createdBy: deserializeUserMini(value.get("created_by")) as any, modifiedBy: deserializeUserMini(value.get("modified_by")) as any, ownedBy: deserializeUserMini(value.get("owned_by")) as any, sharedLink: value.get("shared_link"), parent: deserializeFolderMini(value.get("parent")) as any, itemStatus: deserializeTrashFileRestoredItemStatusField(value.get("item_status")) as any } as TrashFileRestored);
}
export function serializeTrashFileRestored(value?: TrashFileRestored): undefined | JSON {
    if (value === void 0) {
        return void 0;
    }
    return Immutable.Map<string, any>([
        ["id", value.id],
        ["etag", value.etag],
        ["type", value.type],
        ["sequence_id", value.sequenceId],
        ["name", value.name],
        ["sha1", value.sha1],
        ["file_version", serializeFileVersionMini(value.fileVersion) as any],
        ["description", value.description],
        ["size", value.size],
        ["path_collection", serializeTrashFileRestoredPathCollectionField(value.pathCollection) as any],
        ["created_at", value.createdAt],
        ["modified_at", value.modifiedAt],
        ["trashed_at", value.trashedAt],
        ["purged_at", value.purgedAt],
        ["content_created_at", value.contentCreatedAt],
        ["content_modified_at", value.contentModifiedAt],
        ["created_by", serializeUserMini(value.createdBy) as any],
        ["modified_by", serializeUserMini(value.modifiedBy) as any],
        ["owned_by", serializeUserMini(value.ownedBy) as any],
        ["shared_link", value.sharedLink],
        ["parent", serializeFolderMini(value.parent) as any],
        ["item_status", serializeTrashFileRestoredItemStatusField(value.itemStatus) as any]
    ]);
}
