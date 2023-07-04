import { IntegrationMappings } from "../schemas.generated.js";
import { IntegrationMapping } from "../schemas.generated.js";
import { IntegrationMappingSlackCreateRequest } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export type GetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField = "channel";
export type GetIntegrationMappingSlackQueryParamsArgBoxItemTypeField = "folder";
export interface GetIntegrationMappingSlackQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly partnerItemType?: GetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField;
    readonly partnerItemId?: string;
    readonly boxItemId?: string;
    readonly boxItemType?: GetIntegrationMappingSlackQueryParamsArgBoxItemTypeField;
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
    getIntegrationMappingSlack(queryParams?: undefined | GetIntegrationMappingSlackQueryParamsArg): Promise<IntegrationMappings>;
    createIntegrationMappingSlack(requestBody: IntegrationMappingSlackCreateRequest): Promise<IntegrationMapping>;
    updateIntegrationMappingSlackById(integrationMappingId: string, requestBody: UpdateIntegrationMappingSlackByIdRequestBodyArg): Promise<IntegrationMapping>;
    deleteIntegrationMappingSlackById(integrationMappingId: string): Promise<any>;
}
export declare function newSerializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField(val: GetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField): Json;
export declare function newDeserializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField(val: any): GetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField;
export declare function newSerializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField(val: GetIntegrationMappingSlackQueryParamsArgBoxItemTypeField): Json;
export declare function newDeserializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField(val: any): GetIntegrationMappingSlackQueryParamsArgBoxItemTypeField;
export declare function newSerializeGetIntegrationMappingSlackQueryParamsArg(val: GetIntegrationMappingSlackQueryParamsArg): Json;
export declare function newDeserializeGetIntegrationMappingSlackQueryParamsArg(val: any): GetIntegrationMappingSlackQueryParamsArg;
export declare function newSerializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField(val: UpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField): Json;
export declare function newDeserializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField(val: any): UpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField;
export declare function newSerializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField(val: UpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField): Json;
export declare function newDeserializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField(val: any): UpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField;
export declare function newSerializeUpdateIntegrationMappingSlackByIdRequestBodyArg(val: UpdateIntegrationMappingSlackByIdRequestBodyArg): Json;
export declare function newDeserializeUpdateIntegrationMappingSlackByIdRequestBodyArg(val: any): UpdateIntegrationMappingSlackByIdRequestBodyArg;
