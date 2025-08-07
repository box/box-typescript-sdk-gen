import { FileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0 } from './fileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export type HubItemOperationV2025R0ActionField = 'add' | 'remove' | string;
export interface HubItemOperationV2025R0 {
    /**
     * The action to perform on a Hub item. */
    readonly action: HubItemOperationV2025R0ActionField;
    /**
     * Reference to an item that can be added to a Hub. */
    readonly item: FileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0;
    readonly rawData?: SerializedData;
}
export declare function serializeHubItemOperationV2025R0ActionField(val: HubItemOperationV2025R0ActionField): SerializedData;
export declare function deserializeHubItemOperationV2025R0ActionField(val: SerializedData): HubItemOperationV2025R0ActionField;
export declare function serializeHubItemOperationV2025R0(val: HubItemOperationV2025R0): SerializedData;
export declare function deserializeHubItemOperationV2025R0(val: SerializedData): HubItemOperationV2025R0;
