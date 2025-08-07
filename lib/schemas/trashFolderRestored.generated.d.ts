import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TrashFolderRestoredTypeField = 'folder';
export interface TrashFolderRestoredPathCollectionField {
    /**
     * The number of folders in this list. */
    readonly totalCount: number;
    /**
     * The parent folders for this item. */
    readonly entries: readonly FolderMini[];
    readonly rawData?: SerializedData;
}
export type TrashFolderRestoredItemStatusField = 'active' | 'trashed' | 'deleted' | string;
export interface TrashFolderRestored {
    /**
     * The unique identifier that represent a folder.
     *
     * The ID for any folder can be determined
     * by visiting a folder in the web application
     * and copying the ID from the URL. For example,
     * for the URL `https://*.app.box.com/folders/123`
     * the `folder_id` is `123`. */
    readonly id?: string;
    /**
     * The HTTP `etag` of this folder. This can be used within some API
     * endpoints in the `If-Match` and `If-None-Match` headers to only
     * perform changes on the folder if (no) changes have happened. */
    readonly etag?: string | null;
    /**
     * The value will always be `folder`. */
    readonly type?: TrashFolderRestoredTypeField;
    readonly sequenceId?: string;
    /**
     * The name of the folder. */
    readonly name?: string;
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
    readonly description?: string;
    /**
     * The folder size in bytes.
     *
     * Be careful parsing this integer as its
     * value can get very large. */
    readonly size?: number;
    readonly pathCollection?: TrashFolderRestoredPathCollectionField;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    /**
     * The time at which this folder was put in the
     * trash - becomes `null` after restore. */
    readonly trashedAt?: string | null;
    /**
     * The time at which this folder is expected to be purged
     * from the trash  - becomes `null` after restore. */
    readonly purgedAt?: string | null;
    /**
     * The date and time at which this folder was originally
     * created. */
    readonly contentCreatedAt?: DateTime | null;
    /**
     * The date and time at which this folder was last updated. */
    readonly contentModifiedAt?: DateTime | null;
    readonly ownedBy?: UserMini;
    /**
     * The shared link for this file. This will
     * be `null` if a folder had been trashed, even though the original shared
     * link does become active again. */
    readonly sharedLink?: string | null;
    /**
     * The folder upload email for this folder. This will
     * be `null` if a folder has been trashed, even though the original upload
     * email does become active again. */
    readonly folderUploadEmail?: string | null;
    readonly parent?: FolderMini;
    /**
     * Defines if this item has been deleted or not.
     *
     * * `active` when the item has is not in the trash,
     * * `trashed` when the item has been moved to the trash but not deleted,
     * * `deleted` when the item has been permanently deleted. */
    readonly itemStatus?: TrashFolderRestoredItemStatusField;
    readonly rawData?: SerializedData;
}
export declare function serializeTrashFolderRestoredTypeField(val: TrashFolderRestoredTypeField): SerializedData;
export declare function deserializeTrashFolderRestoredTypeField(val: SerializedData): TrashFolderRestoredTypeField;
export declare function serializeTrashFolderRestoredPathCollectionField(val: TrashFolderRestoredPathCollectionField): SerializedData;
export declare function deserializeTrashFolderRestoredPathCollectionField(val: SerializedData): TrashFolderRestoredPathCollectionField;
export declare function serializeTrashFolderRestoredItemStatusField(val: TrashFolderRestoredItemStatusField): SerializedData;
export declare function deserializeTrashFolderRestoredItemStatusField(val: SerializedData): TrashFolderRestoredItemStatusField;
export declare function serializeTrashFolderRestored(val: TrashFolderRestored): SerializedData;
export declare function deserializeTrashFolderRestored(val: SerializedData): TrashFolderRestored;
//# sourceMappingURL=trashFolderRestored.generated.d.ts.map