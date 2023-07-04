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
export declare function newSerializeGetTermOfServiceUserStatusesQueryParamsArg(val: GetTermOfServiceUserStatusesQueryParamsArg): Json;
export declare function newDeserializeGetTermOfServiceUserStatusesQueryParamsArg(val: any): GetTermOfServiceUserStatusesQueryParamsArg;
export declare function newSerializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(val: CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField): Json;
export declare function newDeserializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(val: any): CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField;
export declare function newSerializeCreateTermOfServiceUserStatusRequestBodyArgTosField(val: CreateTermOfServiceUserStatusRequestBodyArgTosField): Json;
export declare function newDeserializeCreateTermOfServiceUserStatusRequestBodyArgTosField(val: any): CreateTermOfServiceUserStatusRequestBodyArgTosField;
export declare function newSerializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(val: CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField): Json;
export declare function newDeserializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(val: any): CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField;
export declare function newSerializeCreateTermOfServiceUserStatusRequestBodyArgUserField(val: CreateTermOfServiceUserStatusRequestBodyArgUserField): Json;
export declare function newDeserializeCreateTermOfServiceUserStatusRequestBodyArgUserField(val: any): CreateTermOfServiceUserStatusRequestBodyArgUserField;
export declare function newSerializeCreateTermOfServiceUserStatusRequestBodyArg(val: CreateTermOfServiceUserStatusRequestBodyArg): Json;
export declare function newDeserializeCreateTermOfServiceUserStatusRequestBodyArg(val: any): CreateTermOfServiceUserStatusRequestBodyArg;
export declare function newSerializeUpdateTermOfServiceUserStatusByIdRequestBodyArg(val: UpdateTermOfServiceUserStatusByIdRequestBodyArg): Json;
export declare function newDeserializeUpdateTermOfServiceUserStatusByIdRequestBodyArg(val: any): UpdateTermOfServiceUserStatusByIdRequestBodyArg;
