import { TermsOfServiceUserStatuses } from "../schemas.generated.js";
import { TermsOfServiceUserStatus } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetTermOfServiceUserStatusesQueryParamsArg {
    readonly tosId: string;
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
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TermsOfServiceUserStatusesManager, "getTermOfServiceUserStatuses" | "createTermOfServiceUserStatus" | "updateTermOfServiceUserStatusById">);
    getTermOfServiceUserStatuses(queryParams: GetTermOfServiceUserStatusesQueryParamsArg): Promise<TermsOfServiceUserStatuses>;
    createTermOfServiceUserStatus(requestBody: CreateTermOfServiceUserStatusRequestBodyArg): Promise<TermsOfServiceUserStatus>;
    updateTermOfServiceUserStatusById(termsOfServiceUserStatusId: string, requestBody: UpdateTermOfServiceUserStatusByIdRequestBodyArg): Promise<TermsOfServiceUserStatus>;
}
export declare function serializeGetTermOfServiceUserStatusesQueryParamsArg(val: GetTermOfServiceUserStatusesQueryParamsArg): Json;
export declare function deserializeGetTermOfServiceUserStatusesQueryParamsArg(val: any): GetTermOfServiceUserStatusesQueryParamsArg;
export declare function serializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(val: CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField): Json;
export declare function deserializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(val: any): CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField;
export declare function serializeCreateTermOfServiceUserStatusRequestBodyArgTosField(val: CreateTermOfServiceUserStatusRequestBodyArgTosField): Json;
export declare function deserializeCreateTermOfServiceUserStatusRequestBodyArgTosField(val: any): CreateTermOfServiceUserStatusRequestBodyArgTosField;
export declare function serializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(val: CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField): Json;
export declare function deserializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(val: any): CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField;
export declare function serializeCreateTermOfServiceUserStatusRequestBodyArgUserField(val: CreateTermOfServiceUserStatusRequestBodyArgUserField): Json;
export declare function deserializeCreateTermOfServiceUserStatusRequestBodyArgUserField(val: any): CreateTermOfServiceUserStatusRequestBodyArgUserField;
export declare function serializeCreateTermOfServiceUserStatusRequestBodyArg(val: CreateTermOfServiceUserStatusRequestBodyArg): Json;
export declare function deserializeCreateTermOfServiceUserStatusRequestBodyArg(val: any): CreateTermOfServiceUserStatusRequestBodyArg;
export declare function serializeUpdateTermOfServiceUserStatusByIdRequestBodyArg(val: UpdateTermOfServiceUserStatusByIdRequestBodyArg): Json;
export declare function deserializeUpdateTermOfServiceUserStatusByIdRequestBodyArg(val: any): UpdateTermOfServiceUserStatusByIdRequestBodyArg;
