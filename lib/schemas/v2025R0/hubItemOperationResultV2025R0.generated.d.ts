import { HubItemReferenceV2025R0 } from './hubItemReferenceV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export interface HubItemOperationResultV2025R0 {
    /**
     * The action performed on the item. */
    readonly action?: string;
    readonly item?: HubItemReferenceV2025R0;
    /**
     * The HTTP status code of the operation. */
    readonly status?: number;
    /**
     * Error message if the operation failed. */
    readonly error?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeHubItemOperationResultV2025R0(val: HubItemOperationResultV2025R0): SerializedData;
export declare function deserializeHubItemOperationResultV2025R0(val: SerializedData): HubItemOperationResultV2025R0;
//# sourceMappingURL=hubItemOperationResultV2025R0.generated.d.ts.map