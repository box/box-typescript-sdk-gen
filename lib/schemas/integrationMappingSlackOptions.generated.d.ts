import { SerializedData } from '../serialization/json.js';
export interface IntegrationMappingSlackOptions {
    /**
     * Indicates whether or not channel member
     * access to the underlying box item
     * should be automatically managed.
     * Depending on type of channel, access is managed
     * through creating collaborations or shared links. */
    readonly isAccessManagementDisabled?: boolean;
    readonly rawData?: SerializedData;
}
export declare function serializeIntegrationMappingSlackOptions(val: IntegrationMappingSlackOptions): SerializedData;
export declare function deserializeIntegrationMappingSlackOptions(val: SerializedData): IntegrationMappingSlackOptions;
//# sourceMappingURL=integrationMappingSlackOptions.generated.d.ts.map