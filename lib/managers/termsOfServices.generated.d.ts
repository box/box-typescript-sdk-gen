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
export declare function newSerializeGetTermOfServicesQueryParamsArgTosTypeField(val: GetTermOfServicesQueryParamsArgTosTypeField): Json;
export declare function newDeserializeGetTermOfServicesQueryParamsArgTosTypeField(val: any): GetTermOfServicesQueryParamsArgTosTypeField;
export declare function newSerializeGetTermOfServicesQueryParamsArg(val: GetTermOfServicesQueryParamsArg): Json;
export declare function newDeserializeGetTermOfServicesQueryParamsArg(val: any): GetTermOfServicesQueryParamsArg;
export declare function newSerializeCreateTermOfServiceRequestBodyArgStatusField(val: CreateTermOfServiceRequestBodyArgStatusField): Json;
export declare function newDeserializeCreateTermOfServiceRequestBodyArgStatusField(val: any): CreateTermOfServiceRequestBodyArgStatusField;
export declare function newSerializeCreateTermOfServiceRequestBodyArgTosTypeField(val: CreateTermOfServiceRequestBodyArgTosTypeField): Json;
export declare function newDeserializeCreateTermOfServiceRequestBodyArgTosTypeField(val: any): CreateTermOfServiceRequestBodyArgTosTypeField;
export declare function newSerializeCreateTermOfServiceRequestBodyArg(val: CreateTermOfServiceRequestBodyArg): Json;
export declare function newDeserializeCreateTermOfServiceRequestBodyArg(val: any): CreateTermOfServiceRequestBodyArg;
export declare function newSerializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val: UpdateTermOfServiceByIdRequestBodyArgStatusField): Json;
export declare function newDeserializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val: any): UpdateTermOfServiceByIdRequestBodyArgStatusField;
export declare function newSerializeUpdateTermOfServiceByIdRequestBodyArg(val: UpdateTermOfServiceByIdRequestBodyArg): Json;
export declare function newDeserializeUpdateTermOfServiceByIdRequestBodyArg(val: any): UpdateTermOfServiceByIdRequestBodyArg;
