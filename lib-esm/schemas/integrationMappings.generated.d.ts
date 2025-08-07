import { IntegrationMapping } from './integrationMapping.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface IntegrationMappings {
    /**
     * The limit that was used for these entries. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. The maximum value varies by API. */
    readonly limit?: number;
    /**
     * The marker for the start of the next page of results. */
    readonly nextMarker?: string | null;
    /**
     * A list of integration mappings. */
    readonly entries?: readonly IntegrationMapping[];
    readonly rawData?: SerializedData;
}
export declare function serializeIntegrationMappings(val: IntegrationMappings): SerializedData;
export declare function deserializeIntegrationMappings(val: SerializedData): IntegrationMappings;
