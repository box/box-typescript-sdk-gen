import { HubItemOperationV2025R0 } from './hubItemOperationV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export interface HubItemsManageRequestV2025R0 {
    /**
     * List of operations to perform on Hub items. */
    readonly operations?: readonly HubItemOperationV2025R0[];
    readonly rawData?: SerializedData;
}
export declare function serializeHubItemsManageRequestV2025R0(val: HubItemsManageRequestV2025R0): SerializedData;
export declare function deserializeHubItemsManageRequestV2025R0(val: SerializedData): HubItemsManageRequestV2025R0;
//# sourceMappingURL=hubItemsManageRequestV2025R0.generated.d.ts.map