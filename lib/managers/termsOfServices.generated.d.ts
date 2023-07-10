import { TermsOfServices } from "../schemas.generated.js";
import { Task } from "../schemas.generated.js";
import { TermsOfService } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export type GetTermOfServicesQueryParamsArgTosTypeField = "external" | "managed";
export interface GetTermOfServicesQueryParamsArg {
    readonly tosType?: GetTermOfServicesQueryParamsArgTosTypeField;
}
export type CreateTermOfServiceRequestBodyArgStatusField = "enabled" | "disabled";
export type CreateTermOfServiceRequestBodyArgTosTypeField = "external" | "managed";
export interface CreateTermOfServiceRequestBodyArg {
    readonly status: CreateTermOfServiceRequestBodyArgStatusField;
    readonly tosType?: CreateTermOfServiceRequestBodyArgTosTypeField;
    readonly text: string;
}
export type UpdateTermOfServiceByIdRequestBodyArgStatusField = "enabled" | "disabled";
export interface UpdateTermOfServiceByIdRequestBodyArg {
    readonly status: UpdateTermOfServiceByIdRequestBodyArgStatusField;
    readonly text: string;
}
export declare class TermsOfServicesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TermsOfServicesManager, "getTermOfServices" | "createTermOfService" | "getTermOfServiceById" | "updateTermOfServiceById">);
    getTermOfServices(queryParams?: undefined | GetTermOfServicesQueryParamsArg): Promise<TermsOfServices>;
    createTermOfService(requestBody: CreateTermOfServiceRequestBodyArg): Promise<Task>;
    getTermOfServiceById(termsOfServiceId: string): Promise<TermsOfService>;
    updateTermOfServiceById(termsOfServiceId: string, requestBody: UpdateTermOfServiceByIdRequestBodyArg): Promise<TermsOfService>;
}
export declare function serializeGetTermOfServicesQueryParamsArgTosTypeField(val: GetTermOfServicesQueryParamsArgTosTypeField): Json;
export declare function deserializeGetTermOfServicesQueryParamsArgTosTypeField(val: any): GetTermOfServicesQueryParamsArgTosTypeField;
export declare function serializeGetTermOfServicesQueryParamsArg(val: GetTermOfServicesQueryParamsArg): Json;
export declare function deserializeGetTermOfServicesQueryParamsArg(val: any): GetTermOfServicesQueryParamsArg;
export declare function serializeCreateTermOfServiceRequestBodyArgStatusField(val: CreateTermOfServiceRequestBodyArgStatusField): Json;
export declare function deserializeCreateTermOfServiceRequestBodyArgStatusField(val: any): CreateTermOfServiceRequestBodyArgStatusField;
export declare function serializeCreateTermOfServiceRequestBodyArgTosTypeField(val: CreateTermOfServiceRequestBodyArgTosTypeField): Json;
export declare function deserializeCreateTermOfServiceRequestBodyArgTosTypeField(val: any): CreateTermOfServiceRequestBodyArgTosTypeField;
export declare function serializeCreateTermOfServiceRequestBodyArg(val: CreateTermOfServiceRequestBodyArg): Json;
export declare function deserializeCreateTermOfServiceRequestBodyArg(val: any): CreateTermOfServiceRequestBodyArg;
export declare function serializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val: UpdateTermOfServiceByIdRequestBodyArgStatusField): Json;
export declare function deserializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val: any): UpdateTermOfServiceByIdRequestBodyArgStatusField;
export declare function serializeUpdateTermOfServiceByIdRequestBodyArg(val: UpdateTermOfServiceByIdRequestBodyArg): Json;
export declare function deserializeUpdateTermOfServiceByIdRequestBodyArg(val: any): UpdateTermOfServiceByIdRequestBodyArg;
