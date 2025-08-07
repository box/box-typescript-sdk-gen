import { HubItemOperationResultV2025R0 } from './hubItemOperationResultV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export interface HubItemsManageResponseV2025R0 {
    /**
     * List of operations performed on Hub items. */
    readonly operations: readonly HubItemOperationResultV2025R0[];
    readonly rawData?: SerializedData;
}
export declare function serializeHubItemsManageResponseV2025R0(val: HubItemsManageResponseV2025R0): SerializedData;
export declare function deserializeHubItemsManageResponseV2025R0(val: SerializedData): HubItemsManageResponseV2025R0;
