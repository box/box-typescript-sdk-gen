import { SerializedData } from '../serialization/json.js';
export type IntegrationMappingPartnerItemTeamsTypeField = 'channel' | 'team';
export interface IntegrationMappingPartnerItemTeams {
    /**
     * Type of the mapped item referenced in `id`. */
    readonly type: IntegrationMappingPartnerItemTeamsTypeField;
    /**
     * ID of the mapped item (of type referenced in `type`). */
    readonly id: string;
    /**
     * ID of the tenant that is registered with Microsoft Teams. */
    readonly tenantId: string;
    readonly rawData?: SerializedData;
}
export declare function serializeIntegrationMappingPartnerItemTeamsTypeField(val: IntegrationMappingPartnerItemTeamsTypeField): SerializedData;
export declare function deserializeIntegrationMappingPartnerItemTeamsTypeField(val: SerializedData): IntegrationMappingPartnerItemTeamsTypeField;
export declare function serializeIntegrationMappingPartnerItemTeams(val: IntegrationMappingPartnerItemTeams): SerializedData;
export declare function deserializeIntegrationMappingPartnerItemTeams(val: SerializedData): IntegrationMappingPartnerItemTeams;
//# sourceMappingURL=integrationMappingPartnerItemTeams.generated.d.ts.map