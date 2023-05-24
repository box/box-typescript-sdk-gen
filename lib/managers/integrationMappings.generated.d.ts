import { IntegrationMappingSlackCreateRequest } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type IntegrationMappingsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
    readonly auth: IntegrationMappingsManagerAuthField;
    constructor(fields: Omit<IntegrationMappingsManager, "getIntegrationMappingSlack" | "createIntegrationMappingSlack" | "updateIntegrationMappingSlackById" | "deleteIntegrationMappingSlackById">);
    getIntegrationMappingSlack(options?: GetIntegrationMappingSlackOptionsArg): Promise<any>;
    createIntegrationMappingSlack(requestBody: IntegrationMappingSlackCreateRequest): Promise<any>;
    updateIntegrationMappingSlackById(integrationMappingId: string, requestBody: UpdateIntegrationMappingSlackByIdRequestBodyArg): Promise<any>;
    deleteIntegrationMappingSlackById(integrationMappingId: string): Promise<any>;
}
