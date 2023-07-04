import { Invite } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface CreateInviteRequestBodyArgEnterpriseField {
    readonly id: string;
}
export interface CreateInviteRequestBodyArgActionableByField {
    readonly login?: string;
}
export interface CreateInviteRequestBodyArg {
    readonly enterprise: CreateInviteRequestBodyArgEnterpriseField;
    readonly actionableBy: CreateInviteRequestBodyArgActionableByField;
}
export interface CreateInviteQueryParamsArg {
    readonly fields?: string;
}
export interface GetInviteByIdQueryParamsArg {
    readonly fields?: string;
}
export declare class InvitesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<InvitesManager, "createInvite" | "getInviteById">);
    createInvite(requestBody: CreateInviteRequestBodyArg, queryParams?: undefined | CreateInviteQueryParamsArg): Promise<Invite>;
    getInviteById(inviteId: string, queryParams?: undefined | GetInviteByIdQueryParamsArg): Promise<Invite>;
}
export declare function newSerializeCreateInviteRequestBodyArgEnterpriseField(val: CreateInviteRequestBodyArgEnterpriseField): Json;
export declare function newDeserializeCreateInviteRequestBodyArgEnterpriseField(val: any): CreateInviteRequestBodyArgEnterpriseField;
export declare function newSerializeCreateInviteRequestBodyArgActionableByField(val: CreateInviteRequestBodyArgActionableByField): Json;
export declare function newDeserializeCreateInviteRequestBodyArgActionableByField(val: any): CreateInviteRequestBodyArgActionableByField;
export declare function newSerializeCreateInviteRequestBodyArg(val: CreateInviteRequestBodyArg): Json;
export declare function newDeserializeCreateInviteRequestBodyArg(val: any): CreateInviteRequestBodyArg;
export declare function newSerializeCreateInviteQueryParamsArg(val: CreateInviteQueryParamsArg): Json;
export declare function newDeserializeCreateInviteQueryParamsArg(val: any): CreateInviteQueryParamsArg;
export declare function newSerializeGetInviteByIdQueryParamsArg(val: GetInviteByIdQueryParamsArg): Json;
export declare function newDeserializeGetInviteByIdQueryParamsArg(val: any): GetInviteByIdQueryParamsArg;
