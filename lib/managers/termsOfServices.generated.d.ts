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
export declare class GetTermOfServicesHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetTermOfServicesHeadersArg);
}
export type CreateTermOfServiceRequestBodyArgStatusField = "enabled" | "disabled";
export type CreateTermOfServiceRequestBodyArgTosTypeField = "external" | "managed";
export interface CreateTermOfServiceRequestBodyArg {
    readonly status: CreateTermOfServiceRequestBodyArgStatusField;
    readonly tosType?: CreateTermOfServiceRequestBodyArgTosTypeField;
    readonly text: string;
}
export declare class CreateTermOfServiceHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateTermOfServiceHeadersArg);
}
export declare class GetTermOfServiceByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetTermOfServiceByIdHeadersArg);
}
export type UpdateTermOfServiceByIdRequestBodyArgStatusField = "enabled" | "disabled";
export interface UpdateTermOfServiceByIdRequestBodyArg {
    readonly status: UpdateTermOfServiceByIdRequestBodyArgStatusField;
    readonly text: string;
}
export declare class UpdateTermOfServiceByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateTermOfServiceByIdHeadersArg);
}
export declare class TermsOfServicesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TermsOfServicesManager, "getTermOfServices" | "createTermOfService" | "getTermOfServiceById" | "updateTermOfServiceById">);
    getTermOfServices(queryParams?: GetTermOfServicesQueryParamsArg, headers?: GetTermOfServicesHeadersArg): Promise<TermsOfServices>;
    createTermOfService(requestBody: CreateTermOfServiceRequestBodyArg, headers?: CreateTermOfServiceHeadersArg): Promise<Task>;
    getTermOfServiceById(termsOfServiceId: string, headers?: GetTermOfServiceByIdHeadersArg): Promise<TermsOfService>;
    updateTermOfServiceById(termsOfServiceId: string, requestBody: UpdateTermOfServiceByIdRequestBodyArg, headers?: UpdateTermOfServiceByIdHeadersArg): Promise<TermsOfService>;
}
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
