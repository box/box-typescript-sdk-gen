import { UserMini } from './userMini.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TrashFolderTypeField = 'folder';
export type TrashFolderPathCollectionEntriesTypeField = 'folder';
export interface TrashFolderPathCollectionEntriesField {
    /**
     * The value will always be `folder`. */
    readonly type?: TrashFolderPathCollectionEntriesTypeField;
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
export interface TrashFolderPathCollectionField {
    /**
     * The number of folders in this list. */
    readonly totalCount: number;
    /**
     * Array of folders for this item's path collection. */
    readonly entries: readonly TrashFolderPathCollectionEntriesField[];
    readonly rawData?: SerializedData;
}
export type TrashFolderItemStatusField = 'active' | 'trashed' | 'deleted' | string;
export declare class TrashFolder {
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
    readonly etag?: string | null;
    /**
     * The value will always be `folder`. */
    readonly type: TrashFolderTypeField;
    readonly sequenceId?: string;
    /**
     * The name of the folder. */
    readonly name: string;
    /**
     * The date and time when the folder was created. This value may
     * be `null` for some folders such as the root folder or the trash
     * folder. */
    readonly createdAt?: DateTime | null;
    /**
     * The date and time when the folder was last updated. This value may
     * be `null` for some folders such as the root folder or the trash
     * folder. */
    readonly modifiedAt?: DateTime | null;
    readonly description: string;
    /**
     * The folder size in bytes.
     *
     * Be careful parsing this integer as its
     * value can get very large. */
    readonly size: number;
    readonly pathCollection: TrashFolderPathCollectionField;
    readonly createdBy: UserMini;
    readonly modifiedBy: UserMini;
    /**
     * The time at which this folder was put in the trash. */
    readonly trashedAt?: DateTime | null;
    /**
     * The time at which this folder is expected to be purged
     * from the trash. */
    readonly purgedAt?: DateTime | null;
    /**
     * The date and time at which this folder was originally
     * created. */
    readonly contentCreatedAt?: DateTime | null;
    /**
     * The date and time at which this folder was last updated. */
    readonly contentModifiedAt?: DateTime | null;
    readonly ownedBy: UserMini;
    /**
     * The shared link for this folder. This will
     * be `null` if a folder has been trashed, since the link will no longer
     * be active. */
    readonly sharedLink?: string | null;
    /**
     * The folder upload email for this folder. This will
     * be `null` if a folder has been trashed, since the upload will no longer
     * work. */
    readonly folderUploadEmail?: string | null;
    readonly parent?: FolderMini;
    /**
     * Defines if this item has been deleted or not.
     *
     * * `active` when the item has is not in the trash
     * * `trashed` when the item has been moved to the trash but not deleted
     * * `deleted` when the item has been permanently deleted. */
    readonly itemStatus: TrashFolderItemStatusField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<TrashFolder, 'type'> & Partial<Pick<TrashFolder, 'type'>>);
}
export interface TrashFolderInput {
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
    readonly etag?: string | null;
    /**
     * The value will always be `folder`. */
    readonly type?: TrashFolderTypeField;
    readonly sequenceId?: string;
    /**
     * The name of the folder. */
    readonly name: string;
    /**
     * The date and time when the folder was created. This value may
     * be `null` for some folders such as the root folder or the trash
     * folder. */
    readonly createdAt?: DateTime | null;
    /**
     * The date and time when the folder was last updated. This value may
     * be `null` for some folders such as the root folder or the trash
     * folder. */
    readonly modifiedAt?: DateTime | null;
    readonly description: string;
    /**
     * The folder size in bytes.
     *
     * Be careful parsing this integer as its
     * value can get very large. */
    readonly size: number;
    readonly pathCollection: TrashFolderPathCollectionField;
    readonly createdBy: UserMini;
    readonly modifiedBy: UserMini;
    /**
     * The time at which this folder was put in the trash. */
    readonly trashedAt?: DateTime | null;
    /**
     * The time at which this folder is expected to be purged
     * from the trash. */
    readonly purgedAt?: DateTime | null;
    /**
     * The date and time at which this folder was originally
     * created. */
    readonly contentCreatedAt?: DateTime | null;
    /**
     * The date and time at which this folder was last updated. */
    readonly contentModifiedAt?: DateTime | null;
    readonly ownedBy: UserMini;
    /**
     * The shared link for this folder. This will
     * be `null` if a folder has been trashed, since the link will no longer
     * be active. */
    readonly sharedLink?: string | null;
    /**
     * The folder upload email for this folder. This will
     * be `null` if a folder has been trashed, since the upload will no longer
     * work. */
    readonly folderUploadEmail?: string | null;
    readonly parent?: FolderMini;
    /**
     * Defines if this item has been deleted or not.
     *
     * * `active` when the item has is not in the trash
     * * `trashed` when the item has been moved to the trash but not deleted
     * * `deleted` when the item has been permanently deleted. */
    readonly itemStatus: TrashFolderItemStatusField;
    readonly rawData?: SerializedData;
}
export declare function serializeTrashFolderTypeField(val: TrashFolderTypeField): SerializedData;
export declare function deserializeTrashFolderTypeField(val: SerializedData): TrashFolderTypeField;
export declare function serializeTrashFolderPathCollectionEntriesTypeField(val: TrashFolderPathCollectionEntriesTypeField): SerializedData;
export declare function deserializeTrashFolderPathCollectionEntriesTypeField(val: SerializedData): TrashFolderPathCollectionEntriesTypeField;
export declare function serializeTrashFolderPathCollectionEntriesField(val: TrashFolderPathCollectionEntriesField): SerializedData;
export declare function deserializeTrashFolderPathCollectionEntriesField(val: SerializedData): TrashFolderPathCollectionEntriesField;
export declare function serializeTrashFolderPathCollectionField(val: TrashFolderPathCollectionField): SerializedData;
export declare function deserializeTrashFolderPathCollectionField(val: SerializedData): TrashFolderPathCollectionField;
export declare function serializeTrashFolderItemStatusField(val: TrashFolderItemStatusField): SerializedData;
export declare function deserializeTrashFolderItemStatusField(val: SerializedData): TrashFolderItemStatusField;
export declare function serializeTrashFolder(val: TrashFolder): SerializedData;
export declare function deserializeTrashFolder(val: SerializedData): TrashFolder;
export declare function serializeTrashFolderInput(val: TrashFolderInput): SerializedData;
export declare function deserializeTrashFolderInput(val: SerializedData): TrashFolderInput;
//# sourceMappingURL=trashFolder.generated.d.ts.map