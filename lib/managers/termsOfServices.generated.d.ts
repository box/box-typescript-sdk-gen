import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export type GetTermOfServicesOptionsArgTosTypeField = "external" | "managed";
export interface GetTermOfServicesOptionsArg {
    readonly tosType?: GetTermOfServicesOptionsArgTosTypeField;
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
    getTermOfServices(options?: GetTermOfServicesOptionsArg): Promise<any>;
    createTermOfService(requestBody: CreateTermOfServiceRequestBodyArg): Promise<any>;
    getTermOfServiceById(termsOfServiceId: string): Promise<any>;
    updateTermOfServiceById(termsOfServiceId: string, requestBody: UpdateTermOfServiceByIdRequestBodyArg): Promise<any>;
}
