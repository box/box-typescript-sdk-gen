import { FileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type RecentItemInteractionTypeField = 'item_preview' | 'item_upload' | 'item_comment' | 'item_open' | 'item_modify' | string;
export interface RecentItem {
    /**
     * The value will always be `recent_item`. */
    readonly type?: string;
    readonly item?: FileFullOrFolderFullOrWebLink;
    /**
     * The most recent type of access the user performed on
     * the item. */
    readonly interactionType?: RecentItemInteractionTypeField;
    /**
     * The time of the most recent interaction. */
    readonly interactedAt?: DateTime;
    /**
     * If the item was accessed through a shared link it will appear here,
     * otherwise this will be null. */
    readonly interactionSharedLink?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeRecentItemInteractionTypeField(val: RecentItemInteractionTypeField): SerializedData;
export declare function deserializeRecentItemInteractionTypeField(val: SerializedData): RecentItemInteractionTypeField;
export declare function serializeRecentItem(val: RecentItem): SerializedData;
export declare function deserializeRecentItem(val: SerializedData): RecentItem;
