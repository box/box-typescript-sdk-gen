import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TrashWebLinkTypeField = 'web_link';
export type TrashWebLinkPathCollectionEntriesTypeField = 'folder';
export interface TrashWebLinkPathCollectionEntriesField {
    /**
     * The value will always be `folder`. */
    readonly type?: TrashWebLinkPathCollectionEntriesTypeField;
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
export interface TrashWebLinkPathCollectionField {
    /**
     * The number of folders in this list. */
    readonly totalCount: number;
    /**
     * Array of folders for this item's path collection. */
    readonly entries: readonly TrashWebLinkPathCollectionEntriesField[];
    readonly rawData?: SerializedData;
}
export type TrashWebLinkItemStatusField = 'active' | 'trashed' | 'deleted' | string;
export interface TrashWebLink {
    /**
     * The value will always be `web_link`. */
    readonly type?: TrashWebLinkTypeField;
    /**
     * The unique identifier for this web link. */
    readonly id?: string;
    readonly sequenceId?: string;
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
    readonly pathCollection?: TrashWebLinkPathCollectionField;
    /**
     * When this file was created on Box’s servers. */
    readonly createdAt?: DateTime;
    /**
     * When this file was last updated on the Box
     * servers. */
    readonly modifiedAt?: DateTime;
    /**
     * When this file was last moved to the trash. */
    readonly trashedAt?: DateTime | null;
    /**
     * When this file will be permanently deleted. */
    readonly purgedAt?: DateTime | null;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly ownedBy?: UserMini;
    /**
     * The shared link for this bookmark. This will
     * be `null` if a bookmark has been trashed, since the link will no longer
     * be active. */
    readonly sharedLink?: string | null;
    /**
     * Whether this item is deleted or not. Values include `active`,
     * `trashed` if the file has been moved to the trash, and `deleted` if
     * the file has been permanently deleted. */
    readonly itemStatus?: TrashWebLinkItemStatusField;
    readonly rawData?: SerializedData;
}
export declare function serializeTrashWebLinkTypeField(val: TrashWebLinkTypeField): SerializedData;
export declare function deserializeTrashWebLinkTypeField(val: SerializedData): TrashWebLinkTypeField;
export declare function serializeTrashWebLinkPathCollectionEntriesTypeField(val: TrashWebLinkPathCollectionEntriesTypeField): SerializedData;
export declare function deserializeTrashWebLinkPathCollectionEntriesTypeField(val: SerializedData): TrashWebLinkPathCollectionEntriesTypeField;
export declare function serializeTrashWebLinkPathCollectionEntriesField(val: TrashWebLinkPathCollectionEntriesField): SerializedData;
export declare function deserializeTrashWebLinkPathCollectionEntriesField(val: SerializedData): TrashWebLinkPathCollectionEntriesField;
export declare function serializeTrashWebLinkPathCollectionField(val: TrashWebLinkPathCollectionField): SerializedData;
export declare function deserializeTrashWebLinkPathCollectionField(val: SerializedData): TrashWebLinkPathCollectionField;
export declare function serializeTrashWebLinkItemStatusField(val: TrashWebLinkItemStatusField): SerializedData;
export declare function deserializeTrashWebLinkItemStatusField(val: SerializedData): TrashWebLinkItemStatusField;
export declare function serializeTrashWebLink(val: TrashWebLink): SerializedData;
export declare function deserializeTrashWebLink(val: SerializedData): TrashWebLink;
//# sourceMappingURL=trashWebLink.generated.d.ts.map