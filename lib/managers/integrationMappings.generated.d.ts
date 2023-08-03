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
export declare class GetIntegrationMappingSlackHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetIntegrationMappingSlackHeadersArg);
}
export declare class CreateIntegrationMappingSlackHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateIntegrationMappingSlackHeadersArg);
}
export interface UpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField {
}
export interface UpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField {
}
export interface UpdateIntegrationMappingSlackByIdRequestBodyArg {
    readonly boxItem?: UpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField;
    readonly options?: UpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField;
}
export declare class UpdateIntegrationMappingSlackByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateIntegrationMappingSlackByIdHeadersArg);
}
export declare class DeleteIntegrationMappingSlackByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteIntegrationMappingSlackByIdHeadersArg);
}
export declare class IntegrationMappingsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<IntegrationMappingsManager, "getIntegrationMappingSlack" | "createIntegrationMappingSlack" | "updateIntegrationMappingSlackById" | "deleteIntegrationMappingSlackById">);
    getIntegrationMappingSlack(queryParams?: GetIntegrationMappingSlackQueryParamsArg, headers?: GetIntegrationMappingSlackHeadersArg): Promise<IntegrationMappings>;
    createIntegrationMappingSlack(requestBody: IntegrationMappingSlackCreateRequest, headers?: CreateIntegrationMappingSlackHeadersArg): Promise<IntegrationMapping>;
    updateIntegrationMappingSlackById(integrationMappingId: string, requestBody: UpdateIntegrationMappingSlackByIdRequestBodyArg, headers?: UpdateIntegrationMappingSlackByIdHeadersArg): Promise<IntegrationMapping>;
    deleteIntegrationMappingSlackById(integrationMappingId: string, headers?: DeleteIntegrationMappingSlackByIdHeadersArg): Promise<undefined>;
}
export declare function serializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField(val: UpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField): Json;
export declare function deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField(val: any): UpdateIntegrationMappingSlackByIdRequestBodyArgBoxItemField;
export declare function serializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField(val: UpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField): Json;
export declare function deserializeUpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField(val: any): UpdateIntegrationMappingSlackByIdRequestBodyArgOptionsField;
export declare function serializeUpdateIntegrationMappingSlackByIdRequestBodyArg(val: UpdateIntegrationMappingSlackByIdRequestBodyArg): Json;
export declare function deserializeUpdateIntegrationMappingSlackByIdRequestBodyArg(val: any): UpdateIntegrationMappingSlackByIdRequestBodyArg;
