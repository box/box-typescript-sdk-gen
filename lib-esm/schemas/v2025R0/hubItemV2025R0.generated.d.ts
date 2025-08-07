import { SerializedData } from '../../serialization/json.js';
export type HubItemV2025R0TypeField = 'file' | 'folder' | 'web_link';
export interface HubItemV2025R0 {
    /**
     * The unique identifier for this item. */
    readonly id: string;
    /**
     * The type of the item. */
    readonly type: HubItemV2025R0TypeField;
    /**
     * The name of the item. */
    readonly name: string;
    readonly rawData?: SerializedData;
}
export declare function serializeHubItemV2025R0TypeField(val: HubItemV2025R0TypeField): SerializedData;
export declare function deserializeHubItemV2025R0TypeField(val: SerializedData): HubItemV2025R0TypeField;
export declare function serializeHubItemV2025R0(val: HubItemV2025R0): SerializedData;
export declare function deserializeHubItemV2025R0(val: SerializedData): HubItemV2025R0;
