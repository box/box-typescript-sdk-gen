import { FileVersionMini } from './fileVersionMini.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TrashFileRestoredTypeField = 'file';
export interface TrashFileRestoredPathCollectionField {
    /**
     * The number of folders in this list. */
    readonly totalCount: number;
    /**
     * The parent folders for this item. */
    readonly entries: readonly FolderMini[];
    readonly rawData?: SerializedData;
}
export type TrashFileRestoredItemStatusField = 'active' | 'trashed' | 'deleted' | string;
export declare class TrashFileRestored {
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
    readonly type: TrashFileRestoredTypeField;
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
    readonly pathCollection: TrashFileRestoredPathCollectionField;
    /**
     * The date and time when the file was created on Box. */
    readonly createdAt: DateTime;
    /**
     * The date and time when the file was last updated on Box. */
    readonly modifiedAt: DateTime;
    /**
     * The time at which this file was put in the
     * trash - becomes `null` after restore. */
    readonly trashedAt?: string | null;
    /**
     * The time at which this file is expected to be purged
     * from the trash  - becomes `null` after restore. */
    readonly purgedAt?: string | null;
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
     * be `null` if a file had been trashed, even though the original shared
     * link does become active again. */
    readonly sharedLink?: string | null;
    readonly parent?: FolderMini;
    /**
     * Defines if this item has been deleted or not.
     *
     * * `active` when the item has is not in the trash
     * * `trashed` when the item has been moved to the trash but not deleted
     * * `deleted` when the item has been permanently deleted. */
    readonly itemStatus: TrashFileRestoredItemStatusField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<TrashFileRestored, 'type'> & Partial<Pick<TrashFileRestored, 'type'>>);
}
export interface TrashFileRestoredInput {
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
    readonly type?: TrashFileRestoredTypeField;
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
    readonly pathCollection: TrashFileRestoredPathCollectionField;
    /**
     * The date and time when the file was created on Box. */
    readonly createdAt: DateTime;
    /**
     * The date and time when the file was last updated on Box. */
    readonly modifiedAt: DateTime;
    /**
     * The time at which this file was put in the
     * trash - becomes `null` after restore. */
    readonly trashedAt?: string | null;
    /**
     * The time at which this file is expected to be purged
     * from the trash  - becomes `null` after restore. */
    readonly purgedAt?: string | null;
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
     * be `null` if a file had been trashed, even though the original shared
     * link does become active again. */
    readonly sharedLink?: string | null;
    readonly parent?: FolderMini;
    /**
     * Defines if this item has been deleted or not.
     *
     * * `active` when the item has is not in the trash
     * * `trashed` when the item has been moved to the trash but not deleted
     * * `deleted` when the item has been permanently deleted. */
    readonly itemStatus: TrashFileRestoredItemStatusField;
    readonly rawData?: SerializedData;
}
export declare function serializeTrashFileRestoredTypeField(val: TrashFileRestoredTypeField): SerializedData;
export declare function deserializeTrashFileRestoredTypeField(val: SerializedData): TrashFileRestoredTypeField;
export declare function serializeTrashFileRestoredPathCollectionField(val: TrashFileRestoredPathCollectionField): SerializedData;
export declare function deserializeTrashFileRestoredPathCollectionField(val: SerializedData): TrashFileRestoredPathCollectionField;
export declare function serializeTrashFileRestoredItemStatusField(val: TrashFileRestoredItemStatusField): SerializedData;
export declare function deserializeTrashFileRestoredItemStatusField(val: SerializedData): TrashFileRestoredItemStatusField;
export declare function serializeTrashFileRestored(val: TrashFileRestored): SerializedData;
export declare function deserializeTrashFileRestored(val: SerializedData): TrashFileRestored;
export declare function serializeTrashFileRestoredInput(val: TrashFileRestoredInput): SerializedData;
export declare function deserializeTrashFileRestoredInput(val: SerializedData): TrashFileRestoredInput;
