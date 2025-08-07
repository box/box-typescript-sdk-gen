import { SerializedData } from '../../serialization/json.js';
export interface DocGenTagsProcessingMessageV2025R0 {
    /**
     * A message informing the user that document tags are still being processed. */
    readonly message: string;
    readonly rawData?: SerializedData;
}
export declare function serializeDocGenTagsProcessingMessageV2025R0(val: DocGenTagsProcessingMessageV2025R0): SerializedData;
export declare function deserializeDocGenTagsProcessingMessageV2025R0(val: SerializedData): DocGenTagsProcessingMessageV2025R0;
//# sourceMappingURL=docGenTagsProcessingMessageV2025R0.generated.d.ts.map