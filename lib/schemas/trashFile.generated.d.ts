import { FileVersionMini } from './fileVersionMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TrashFileTypeField = 'file';
export type TrashFilePathCollectionEntriesTypeField = 'folder';
export interface TrashFilePathCollectionEntriesField {
    /**
     * The value will always be `folder`. */
    readonly type?: TrashFilePathCollectionEntriesTypeField;
    /**
     * The unique identifier that represent a folder. */
    readonly id?: string;
    /**
     * This field is null for the Trash folder. */
    readonly sequenceId?: string | null;
    /**
     * This field is null for the Trash folder. */
    readonly etag?: string | null;
    /**
     * The name of the Trash folder. */
    readonly name?: string;
    readonly rawData?: SerializedData;
}
export interface TrashFilePathCollectionField {
    /**
     * The number of folders in this list. */
    readonly totalCount: number;
    /**
     * Array of folders for this item's path collection. */
    readonly entries: readonly TrashFilePathCollectionEntriesField[];
    readonly rawData?: SerializedData;
}
export type TrashFileItemStatusField = 'active' | 'trashed' | 'deleted' | string;
export declare class TrashFile {
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
    readonly etag?: string | null;
    /**
     * The value will always be `file`. */
    readonly type: TrashFileTypeField;
    readonly sequenceId: string;
    /**
     * The name of the file. */
    readonly name?: string;
    /**
     * The SHA1 hash of the file. This can be used to compare the contents
     * of a file on Box with a local file. */
    readonly sha1: string;
    readonly fileVersion?: FileVersionMini;
    /**
     * The optional description of this file. */
    readonly description: string;
    /**
     * The file size in bytes. Be careful parsing this integer as it can
     * get very large and cause an integer overflow. */
    readonly size: number;
    readonly pathCollection: TrashFilePathCollectionField;
    /**
     * The date and time when the file was created on Box. */
    readonly createdAt: DateTime;
    /**
     * The date and time when the file was last updated on Box. */
    readonly modifiedAt: DateTime;
    /**
     * The time at which this file was put in the trash. */
    readonly trashedAt?: DateTime | null;
    /**
     * The time at which this file is expected to be purged
     * from the trash. */
    readonly purgedAt?: DateTime | null;
    /**
     * The date and time at which this file was originally
     * created, which might be before it was uploaded to Box. */
    readonly contentCreatedAt?: DateTime | null;
    /**
     * The date and time at which this file was last updated,
     * which might be before it was uploaded to Box. */
    readonly contentModifiedAt?: DateTime | null;
    readonly createdBy?: UserMini;
    readonly modifiedBy: UserMini;
    readonly ownedBy: UserMini;
    /**
     * The shared link for this file. This will
     * be `null` if a file has been trashed, since the link will no longer
     * be active. */
    readonly sharedLink?: string | null;
    readonly parent?: FolderMini;
    /**
     * Defines if this item has been deleted or not.
     *
     * * `active` when the item has is not in the trash
     * * `trashed` when the item has been moved to the trash but not deleted
     * * `deleted` when the item has been permanently deleted. */
    readonly itemStatus: TrashFileItemStatusField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<TrashFile, 'type'> & Partial<Pick<TrashFile, 'type'>>);
}
export interface TrashFileInput {
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
    readonly etag?: string | null;
    /**
     * The value will always be `file`. */
    readonly type?: TrashFileTypeField;
    readonly sequenceId: string;
    /**
     * The name of the file. */
    readonly name?: string;
    /**
     * The SHA1 hash of the file. This can be used to compare the contents
     * of a file on Box with a local file. */
    readonly sha1: string;
    readonly fileVersion?: FileVersionMini;
    /**
     * The optional description of this file. */
    readonly description: string;
    /**
     * The file size in bytes. Be careful parsing this integer as it can
     * get very large and cause an integer overflow. */
    readonly size: number;
    readonly pathCollection: TrashFilePathCollectionField;
    /**
     * The date and time when the file was created on Box. */
    readonly createdAt: DateTime;
    /**
     * The date and time when the file was last updated on Box. */
    readonly modifiedAt: DateTime;
    /**
     * The time at which this file was put in the trash. */
    readonly trashedAt?: DateTime | null;
    /**
     * The time at which this file is expected to be purged
     * from the trash. */
    readonly purgedAt?: DateTime | null;
    /**
     * The date and time at which this file was originally
     * created, which might be before it was uploaded to Box. */
    readonly contentCreatedAt?: DateTime | null;
    /**
     * The date and time at which this file was last updated,
     * which might be before it was uploaded to Box. */
    readonly contentModifiedAt?: DateTime | null;
    readonly createdBy?: UserMini;
    readonly modifiedBy: UserMini;
    readonly ownedBy: UserMini;
    /**
     * The shared link for this file. This will
     * be `null` if a file has been trashed, since the link will no longer
     * be active. */
    readonly sharedLink?: string | null;
    readonly parent?: FolderMini;
    /**
     * Defines if this item has been deleted or not.
     *
     * * `active` when the item has is not in the trash
     * * `trashed` when the item has been moved to the trash but not deleted
     * * `deleted` when the item has been permanently deleted. */
    readonly itemStatus: TrashFileItemStatusField;
    readonly rawData?: SerializedData;
}
export declare function serializeTrashFileTypeField(val: TrashFileTypeField): SerializedData;
export declare function deserializeTrashFileTypeField(val: SerializedData): TrashFileTypeField;
export declare function serializeTrashFilePathCollectionEntriesTypeField(val: TrashFilePathCollectionEntriesTypeField): SerializedData;
export declare function deserializeTrashFilePathCollectionEntriesTypeField(val: SerializedData): TrashFilePathCollectionEntriesTypeField;
export declare function serializeTrashFilePathCollectionEntriesField(val: TrashFilePathCollectionEntriesField): SerializedData;
export declare function deserializeTrashFilePathCollectionEntriesField(val: SerializedData): TrashFilePathCollectionEntriesField;
export declare function serializeTrashFilePathCollectionField(val: TrashFilePathCollectionField): SerializedData;
export declare function deserializeTrashFilePathCollectionField(val: SerializedData): TrashFilePathCollectionField;
export declare function serializeTrashFileItemStatusField(val: TrashFileItemStatusField): SerializedData;
export declare function deserializeTrashFileItemStatusField(val: SerializedData): TrashFileItemStatusField;
export declare function serializeTrashFile(val: TrashFile): SerializedData;
export declare function deserializeTrashFile(val: SerializedData): TrashFile;
export declare function serializeTrashFileInput(val: TrashFileInput): SerializedData;
export declare function deserializeTrashFileInput(val: SerializedData): TrashFileInput;
//# sourceMappingURL=trashFile.generated.d.ts.map