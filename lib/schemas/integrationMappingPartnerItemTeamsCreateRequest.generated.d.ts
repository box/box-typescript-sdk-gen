import { SerializedData } from '../serialization/json.js';
export type IntegrationMappingPartnerItemTeamsCreateRequestTypeField = 'channel' | 'team';
export interface IntegrationMappingPartnerItemTeamsCreateRequest {
    /**
     * Type of the mapped item referenced in `id`. */
    readonly type: IntegrationMappingPartnerItemTeamsCreateRequestTypeField;
    /**
     * ID of the mapped item (of type referenced in `type`). */
    readonly id: string;
    /**
     * ID of the tenant that is registered with Microsoft Teams. */
    readonly tenantId: string;
    /**
     * ID of the team that is registered with Microsoft Teams. */
    readonly teamId: string;
    readonly rawData?: SerializedData;
}
export declare function serializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField(val: IntegrationMappingPartnerItemTeamsCreateRequestTypeField): SerializedData;
export declare function deserializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField(val: SerializedData): IntegrationMappingPartnerItemTeamsCreateRequestTypeField;
export declare function serializeIntegrationMappingPartnerItemTeamsCreateRequest(val: IntegrationMappingPartnerItemTeamsCreateRequest): SerializedData;
export declare function deserializeIntegrationMappingPartnerItemTeamsCreateRequest(val: SerializedData): IntegrationMappingPartnerItemTeamsCreateRequest;
//# sourceMappingURL=integrationMappingPartnerItemTeamsCreateRequest.generated.d.ts.map