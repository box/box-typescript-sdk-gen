import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type TermsOfServiceUserStatusesManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface GetTermOfServiceUserStatusesOptionsArg {
    readonly userId?: string;
}
export type CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField = "terms_of_service";
export interface CreateTermOfServiceUserStatusRequestBodyArgTosField {
    readonly type: CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField;
    readonly id: string;
}
export type CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField = "user";
export interface CreateTermOfServiceUserStatusRequestBodyArgUserField {
    readonly type: CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField;
    readonly id: string;
}
export interface CreateTermOfServiceUserStatusRequestBodyArg {
    readonly tos: CreateTermOfServiceUserStatusRequestBodyArgTosField;
    readonly user: CreateTermOfServiceUserStatusRequestBodyArgUserField;
    readonly isAccepted: boolean;
}
export interface UpdateTermOfServiceUserStatusByIdRequestBodyArg {
    readonly isAccepted: boolean;
}
export declare class TermsOfServiceUserStatusesManager {
    readonly auth: TermsOfServiceUserStatusesManagerAuthField;
    constructor(fields: Omit<TermsOfServiceUserStatusesManager, "getTermOfServiceUserStatuses" | "createTermOfServiceUserStatus" | "updateTermOfServiceUserStatusById">);
    getTermOfServiceUserStatuses(tosId: string, options?: GetTermOfServiceUserStatusesOptionsArg): Promise<any>;
    createTermOfServiceUserStatus(requestBody: CreateTermOfServiceUserStatusRequestBodyArg): Promise<any>;
    updateTermOfServiceUserStatusById(termsOfServiceUserStatusId: string, requestBody: UpdateTermOfServiceUserStatusByIdRequestBodyArg): Promise<any>;
}
