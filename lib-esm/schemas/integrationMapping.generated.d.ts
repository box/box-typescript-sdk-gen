import { IntegrationMappingBase } from './integrationMappingBase.generated.js';
import { IntegrationMappingSlackOptions } from './integrationMappingSlackOptions.generated.js';
import { UserIntegrationMappings } from './userIntegrationMappings.generated.js';
import { IntegrationMappingPartnerItemSlackUnion } from './integrationMappingPartnerItemSlackUnion.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type IntegrationMappingIntegrationTypeField = 'slack' | string;
export declare class IntegrationMapping extends IntegrationMappingBase {
    readonly integrationType?: IntegrationMappingIntegrationTypeField;
    readonly isManuallyCreated?: boolean;
    readonly options?: IntegrationMappingSlackOptions;
    readonly createdBy?: UserIntegrationMappings;
    readonly modifiedBy?: UserIntegrationMappings;
    readonly partnerItem: IntegrationMappingPartnerItemSlackUnion;
    readonly boxItem: FolderMini;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    constructor(fields: IntegrationMapping);
}
export declare function serializeIntegrationMappingIntegrationTypeField(val: IntegrationMappingIntegrationTypeField): SerializedData;
export declare function deserializeIntegrationMappingIntegrationTypeField(val: SerializedData): IntegrationMappingIntegrationTypeField;
export declare function serializeIntegrationMapping(val: IntegrationMapping): SerializedData;
export declare function deserializeIntegrationMapping(val: SerializedData): IntegrationMapping;
