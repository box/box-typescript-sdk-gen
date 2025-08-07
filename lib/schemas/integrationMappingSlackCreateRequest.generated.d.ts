import { IntegrationMappingPartnerItemSlack } from './integrationMappingPartnerItemSlack.generated.js';
import { IntegrationMappingBoxItemSlack } from './integrationMappingBoxItemSlack.generated.js';
import { IntegrationMappingSlackOptions } from './integrationMappingSlackOptions.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface IntegrationMappingSlackCreateRequest {
    readonly partnerItem: IntegrationMappingPartnerItemSlack;
    readonly boxItem: IntegrationMappingBoxItemSlack;
    readonly options?: IntegrationMappingSlackOptions;
    readonly rawData?: SerializedData;
}
export declare function serializeIntegrationMappingSlackCreateRequest(val: IntegrationMappingSlackCreateRequest): SerializedData;
export declare function deserializeIntegrationMappingSlackCreateRequest(val: SerializedData): IntegrationMappingSlackCreateRequest;
//# sourceMappingURL=integrationMappingSlackCreateRequest.generated.d.ts.map