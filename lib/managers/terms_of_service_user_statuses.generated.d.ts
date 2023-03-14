import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type TermsOfServiceUserStatusesManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetTermsOfServiceUserStatusesOptionsArg {
    readonly userId?: string;
}
export type PostTermsOfServiceUserStatusesRequestBodyArgTosFieldTypeField = "terms_of_service";
export interface PostTermsOfServiceUserStatusesRequestBodyArgTosField {
    readonly type: PostTermsOfServiceUserStatusesRequestBodyArgTosFieldTypeField;
    readonly id: string;
}
export type PostTermsOfServiceUserStatusesRequestBodyArgUserFieldTypeField = "user";
export interface PostTermsOfServiceUserStatusesRequestBodyArgUserField {
    readonly type: PostTermsOfServiceUserStatusesRequestBodyArgUserFieldTypeField;
    readonly id: string;
}
export interface PostTermsOfServiceUserStatusesRequestBodyArg {
    readonly tos: PostTermsOfServiceUserStatusesRequestBodyArgTosField;
    readonly user: PostTermsOfServiceUserStatusesRequestBodyArgUserField;
    readonly isAccepted: boolean;
}
export interface PutTermsOfServiceUserStatusesIdRequestBodyArg {
    readonly isAccepted: boolean;
}
export declare class TermsOfServiceUserStatusesManager {
    readonly auth: TermsOfServiceUserStatusesManagerAuthField;
    constructor(fields: Omit<TermsOfServiceUserStatusesManager, "getTermsOfServiceUserStatuses" | "postTermsOfServiceUserStatuses" | "putTermsOfServiceUserStatusesId">);
    getTermsOfServiceUserStatuses(tosId: string, options?: GetTermsOfServiceUserStatusesOptionsArg): Promise<any>;
    postTermsOfServiceUserStatuses(requestBody: PostTermsOfServiceUserStatusesRequestBodyArg): Promise<any>;
    putTermsOfServiceUserStatusesId(termsOfServiceUserStatusId: string, requestBody: PutTermsOfServiceUserStatusesIdRequestBodyArg): Promise<any>;
}
