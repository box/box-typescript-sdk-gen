import { IntegrationMappingTeams } from './integrationMappingTeams.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface IntegrationMappingsTeams {
    /**
     * A list of integration mappings. */
    readonly entries?: readonly IntegrationMappingTeams[];
    readonly rawData?: SerializedData;
}
export declare function serializeIntegrationMappingsTeams(val: IntegrationMappingsTeams): SerializedData;
export declare function deserializeIntegrationMappingsTeams(val: SerializedData): IntegrationMappingsTeams;
