import { JSON } from "./json.js";
export type ClientErrorTypeField = "error";
export declare function deserializeClientErrorTypeField(val: JSON): ClientErrorTypeField;
export declare function serializeClientErrorTypeField(val: ClientErrorTypeField): JSON;
export type ClientErrorCodeField = "created" | "accepted" | "no_content" | "redirect" | "not_modified" | "bad_request" | "unauthorized" | "forbidden" | "not_found" | "method_not_allowed" | "conflict" | "precondition_failed" | "too_many_requests" | "internal_server_error" | "unavailable" | "item_name_invalid" | "insufficient_scope";
export declare function deserializeClientErrorCodeField(val: JSON): ClientErrorCodeField;
export declare function serializeClientErrorCodeField(val: ClientErrorCodeField): JSON;
export interface ClientErrorContextInfoField {
    readonly message?: string;
}
export declare function deserializeClientErrorContextInfoField(val: JSON): ClientErrorContextInfoField;
export declare function serializeClientErrorContextInfoField(val: ClientErrorContextInfoField): JSON;
export interface ClientError {
    readonly type?: ClientErrorTypeField;
    readonly status?: number;
    readonly code?: ClientErrorCodeField;
    readonly message?: string;
    readonly contextInfo?: ClientErrorContextInfoField;
    readonly helpUrl?: string;
    readonly requestId?: string;
}
export declare function deserializeClientError(val: JSON): ClientError;
export declare function serializeClientError(val: ClientError): JSON;
export type FileSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export declare function deserializeFileSharedLinkFieldAccessField(val: JSON): FileSharedLinkFieldAccessField;
export declare function serializeFileSharedLinkFieldAccessField(val: FileSharedLinkFieldAccessField): JSON;
export type FileSharedLinkFieldEffectiveAccessField = "open" | "company" | "collaborators";
export declare function deserializeFileSharedLinkFieldEffectiveAccessField(val: JSON): FileSharedLinkFieldEffectiveAccessField;
export declare function serializeFileSharedLinkFieldEffectiveAccessField(val: FileSharedLinkFieldEffectiveAccessField): JSON;
export type FileSharedLinkFieldEffectivePermissionField = "can_edit" | "can_download" | "can_preview" | "no_access";
export declare function deserializeFileSharedLinkFieldEffectivePermissionField(val: JSON): FileSharedLinkFieldEffectivePermissionField;
export declare function serializeFileSharedLinkFieldEffectivePermissionField(val: FileSharedLinkFieldEffectivePermissionField): JSON;
export interface FileSharedLinkFieldPermissionsField {
    readonly canDownload: boolean;
    readonly canPreview: boolean;
    readonly canEdit: boolean;
}
export declare function deserializeFileSharedLinkFieldPermissionsField(val: JSON): FileSharedLinkFieldPermissionsField;
export declare function serializeFileSharedLinkFieldPermissionsField(val: FileSharedLinkFieldPermissionsField): JSON;
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
export declare function deserializeFileSharedLinkField(val: JSON): FileSharedLinkField;
export declare function serializeFileSharedLinkField(val: FileSharedLinkField): JSON;
export type FileItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeFileItemStatusField(val: JSON): FileItemStatusField;
export declare function serializeFileItemStatusField(val: FileItemStatusField): JSON;
export type FileBaseTypeField = "file";
export declare function deserializeFileBaseTypeField(val: JSON): FileBaseTypeField;
export declare function serializeFileBaseTypeField(val: FileBaseTypeField): JSON;
export interface FileBase {
    readonly id: string;
    readonly etag?: string;
    readonly type: FileBaseTypeField;
}
export declare function deserializeFileBase(val: JSON): FileBase;
export declare function serializeFileBase(val: FileBase): JSON;
export type FileVersionBaseTypeField = "file_version";
export declare function deserializeFileVersionBaseTypeField(val: JSON): FileVersionBaseTypeField;
export declare function serializeFileVersionBaseTypeField(val: FileVersionBaseTypeField): JSON;
export interface FileVersionBase {
    readonly id: string;
    readonly type: FileVersionBaseTypeField;
}
export declare function deserializeFileVersionBase(val: JSON): FileVersionBase;
export declare function serializeFileVersionBase(val: FileVersionBase): JSON;
export type FileVersionMini = FileVersionBase & {
    /**
     * The SHA1 hash of this version of the file. */
    readonly sha1?: string;
};
export declare function deserializeFileVersionMini(val: JSON): FileVersionMini;
export declare function serializeFileVersionMini(val: FileVersionMini): JSON;
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
export declare function deserializeFileMini(val: JSON): FileMini;
export declare function serializeFileMini(val: FileMini): JSON;
export type FolderBaseTypeField = "folder";
export declare function deserializeFolderBaseTypeField(val: JSON): FolderBaseTypeField;
export declare function serializeFolderBaseTypeField(val: FolderBaseTypeField): JSON;
export interface FolderBase {
    readonly id: string;
    readonly etag?: string;
    readonly type: FolderBaseTypeField;
}
export declare function deserializeFolderBase(val: JSON): FolderBase;
export declare function serializeFolderBase(val: FolderBase): JSON;
export type FolderMini = FolderBase & {
    readonly sequenceId?: string;
    /**
     * The name of the folder. */
    readonly name?: string;
};
export declare function deserializeFolderMini(val: JSON): FolderMini;
export declare function serializeFolderMini(val: FolderMini): JSON;
export interface TrashFileRestoredPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export declare function deserializeTrashFileRestoredPathCollectionField(val: JSON): TrashFileRestoredPathCollectionField;
export declare function serializeTrashFileRestoredPathCollectionField(val: TrashFileRestoredPathCollectionField): JSON;
export interface FilePathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export declare function deserializeFilePathCollectionField(val: JSON): FilePathCollectionField;
export declare function serializeFilePathCollectionField(val: FilePathCollectionField): JSON;
export type UserBaseTypeField = "user";
export declare function deserializeUserBaseTypeField(val: JSON): UserBaseTypeField;
export declare function serializeUserBaseTypeField(val: UserBaseTypeField): JSON;
export interface UserBase {
    readonly id?: string;
    readonly type: UserBaseTypeField;
}
export declare function deserializeUserBase(val: JSON): UserBase;
export declare function serializeUserBase(val: UserBase): JSON;
export type UserMini = UserBase & {
    /**
     * The display name of this user */
    readonly name: string;
    /**
     * The primary email address of this user */
    readonly login: string;
};
export declare function deserializeUserMini(val: JSON): UserMini;
export declare function serializeUserMini(val: UserMini): JSON;
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
export declare function deserializeFile(val: JSON): File;
export declare function serializeFile(val: File): JSON;
export type TrashFileRestoredTypeField = "file";
export declare function deserializeTrashFileRestoredTypeField(val: JSON): TrashFileRestoredTypeField;
export declare function serializeTrashFileRestoredTypeField(val: TrashFileRestoredTypeField): JSON;
export type TrashFileRestoredItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeTrashFileRestoredItemStatusField(val: JSON): TrashFileRestoredItemStatusField;
export declare function serializeTrashFileRestoredItemStatusField(val: TrashFileRestoredItemStatusField): JSON;
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
export declare function deserializeTrashFileRestored(val: JSON): TrashFileRestored;
export declare function serializeTrashFileRestored(val: TrashFileRestored): JSON;
