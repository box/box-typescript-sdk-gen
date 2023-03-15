import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type TermsOfServicesManagerAuthField = DeveloperTokenAuth | CcgAuth;
export type GetTermsOfServicesOptionsArgTosTypeField = "external" | "managed";
export interface GetTermsOfServicesOptionsArg {
    readonly tosType?: GetTermsOfServicesOptionsArgTosTypeField;
}
export type PostTermsOfServicesRequestBodyArgStatusField = "enabled" | "disabled";
export type PostTermsOfServicesRequestBodyArgTosTypeField = "external" | "managed";
export interface PostTermsOfServicesRequestBodyArg {
    readonly status: PostTermsOfServicesRequestBodyArgStatusField;
    readonly tosType?: PostTermsOfServicesRequestBodyArgTosTypeField;
    readonly text: string;
}
export type PutTermsOfServicesIdRequestBodyArgStatusField = "enabled" | "disabled";
export interface PutTermsOfServicesIdRequestBodyArg {
    readonly status: PutTermsOfServicesIdRequestBodyArgStatusField;
    readonly text: string;
}
export declare class TermsOfServicesManager {
    readonly auth: TermsOfServicesManagerAuthField;
    constructor(fields: Omit<TermsOfServicesManager, "getTermsOfServices" | "postTermsOfServices" | "getTermsOfServicesId" | "putTermsOfServicesId">);
    getTermsOfServices(options?: GetTermsOfServicesOptionsArg): Promise<any>;
    postTermsOfServices(requestBody: PostTermsOfServicesRequestBodyArg): Promise<any>;
    getTermsOfServicesId(termsOfServiceId: string): Promise<any>;
    putTermsOfServicesId(termsOfServiceId: string, requestBody: PutTermsOfServicesIdRequestBodyArg): Promise<any>;
}
