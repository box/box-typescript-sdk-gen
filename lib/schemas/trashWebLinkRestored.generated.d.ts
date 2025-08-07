import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TrashWebLinkRestoredTypeField = 'web_link';
export interface TrashWebLinkRestoredPathCollectionField {
    /**
     * The number of folders in this list. */
    readonly totalCount: number;
    /**
     * The parent folders for this item. */
    readonly entries: readonly FolderMini[];
    readonly rawData?: SerializedData;
}
export type TrashWebLinkRestoredItemStatusField = 'active' | 'trashed' | 'deleted' | string;
export interface TrashWebLinkRestored {
    /**
     * The value will always be `web_link`. */
    readonly type?: TrashWebLinkRestoredTypeField;
    /**
     * The unique identifier for this web link. */
    readonly id?: string;
    readonly sequenceId: string;
    /**
     * The entity tag of this web link. Used with `If-Match`
     * headers. */
    readonly etag?: string;
    /**
     * The name of the web link. */
    readonly name?: string;
    /**
     * The URL this web link points to. */
    readonly url?: string;
    readonly parent?: FolderMini;
    /**
     * The description accompanying the web link. This is
     * visible within the Box web application. */
    readonly description?: string;
    readonly pathCollection: TrashWebLinkRestoredPathCollectionField;
    /**
     * When this file was created on Box’s servers. */
    readonly createdAt?: DateTime;
    /**
     * When this file was last updated on the Box
     * servers. */
    readonly modifiedAt?: DateTime;
    /**
     * The time at which this bookmark was put in the
     * trash - becomes `null` after restore. */
    readonly trashedAt?: string | null;
    /**
     * The time at which this bookmark will be permanently
     * deleted - becomes `null` after restore. */
    readonly purgedAt?: string | null;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly ownedBy?: UserMini;
    /**
     * The shared link for this bookmark. This will
     * be `null` if a bookmark had been trashed, even though the original shared
     * link does become active again. */
    readonly sharedLink?: string | null;
    /**
     * Whether this item is deleted or not. Values include `active`,
     * `trashed` if the file has been moved to the trash, and `deleted` if
     * the file has been permanently deleted. */
    readonly itemStatus?: TrashWebLinkRestoredItemStatusField;
    readonly rawData?: SerializedData;
}
export declare function serializeTrashWebLinkRestoredTypeField(val: TrashWebLinkRestoredTypeField): SerializedData;
export declare function deserializeTrashWebLinkRestoredTypeField(val: SerializedData): TrashWebLinkRestoredTypeField;
export declare function serializeTrashWebLinkRestoredPathCollectionField(val: TrashWebLinkRestoredPathCollectionField): SerializedData;
export declare function deserializeTrashWebLinkRestoredPathCollectionField(val: SerializedData): TrashWebLinkRestoredPathCollectionField;
export declare function serializeTrashWebLinkRestoredItemStatusField(val: TrashWebLinkRestoredItemStatusField): SerializedData;
export declare function deserializeTrashWebLinkRestoredItemStatusField(val: SerializedData): TrashWebLinkRestoredItemStatusField;
export declare function serializeTrashWebLinkRestored(val: TrashWebLinkRestored): SerializedData;
export declare function deserializeTrashWebLinkRestored(val: SerializedData): TrashWebLinkRestored;
//# sourceMappingURL=trashWebLinkRestored.generated.d.ts.map