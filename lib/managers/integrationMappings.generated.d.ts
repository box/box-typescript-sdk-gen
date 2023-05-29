import { IntegrationMappingSlackCreateRequest } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export type GetIntegrationMappingSlackOptionsArgPartnerItemTypeField = "channel";
export type GetIntegrationMappingSlackOptionsArgBoxItemTypeField = "folder";
export interface GetIntegrationMappingSlackOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly partnerItemType?: GetIntegrationMappingSlackOptionsArgPartnerItemTypeField;
    readonly partnerItemId?: string;
    readonly boxItemId?: string;
    readonly boxItemType?: GetIntegrationMappingSlackOptionsArgBoxItemTypeField;
    readonly isManuallyCreated?: boolean;
}
export interface UpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField {
}
export interface UpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField {
}
export interface UpdateIntegrationMappingSlackByIdRequestBodyArg {
    readonly boxItem?: UpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField;
    readonly options?: UpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField;
}
export declare class IntegrationMappingsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<IntegrationMappingsManager, "getIntegrationMappingSlack" | "createIntegrationMappingSlack" | "updateIntegrationMappingSlackById" | "deleteIntegrationMappingSlackById">);
    getIntegrationMappingSlack(options?: GetIntegrationMappingSlackOptionsArg): Promise<any>;
    createIntegrationMappingSlack(requestBody: IntegrationMappingSlackCreateRequest): Promise<any>;
    updateIntegrationMappingSlackById(integrationMappingId: string, requestBody: UpdateIntegrationMappingSlackByIdRequestBodyArg): Promise<any>;
    deleteIntegrationMappingSlackById(integrationMappingId: string): Promise<any>;
}
