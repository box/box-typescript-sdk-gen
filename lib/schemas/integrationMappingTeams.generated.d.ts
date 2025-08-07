import { IntegrationMappingBase } from './integrationMappingBase.generated.js';
import { IntegrationMappingPartnerItemTeamsUnion } from './integrationMappingPartnerItemTeamsUnion.generated.js';
import { FolderReference } from './folderReference.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type IntegrationMappingTeamsIntegrationTypeField = 'teams' | string;
export declare class IntegrationMappingTeams extends IntegrationMappingBase {
    readonly integrationType?: IntegrationMappingTeamsIntegrationTypeField;
    readonly isOverriddenByManualMapping?: boolean;
    readonly partnerItem: IntegrationMappingPartnerItemTeamsUnion;
    readonly boxItem: FolderReference;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    constructor(fields: IntegrationMappingTeams);
}
export declare function serializeIntegrationMappingTeamsIntegrationTypeField(val: IntegrationMappingTeamsIntegrationTypeField): SerializedData;
export declare function deserializeIntegrationMappingTeamsIntegrationTypeField(val: SerializedData): IntegrationMappingTeamsIntegrationTypeField;
export declare function serializeIntegrationMappingTeams(val: IntegrationMappingTeams): SerializedData;
export declare function deserializeIntegrationMappingTeams(val: SerializedData): IntegrationMappingTeams;
//# sourceMappingURL=integrationMappingTeams.generated.d.ts.map