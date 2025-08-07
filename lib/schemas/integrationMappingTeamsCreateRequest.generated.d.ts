import { IntegrationMappingPartnerItemTeamsCreateRequest } from './integrationMappingPartnerItemTeamsCreateRequest.generated.js';
import { FolderReference } from './folderReference.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface IntegrationMappingTeamsCreateRequest {
    readonly partnerItem: IntegrationMappingPartnerItemTeamsCreateRequest;
    readonly boxItem: FolderReference;
    readonly rawData?: SerializedData;
}
export declare function serializeIntegrationMappingTeamsCreateRequest(val: IntegrationMappingTeamsCreateRequest): SerializedData;
export declare function deserializeIntegrationMappingTeamsCreateRequest(val: SerializedData): IntegrationMappingTeamsCreateRequest;
//# sourceMappingURL=integrationMappingTeamsCreateRequest.generated.d.ts.map