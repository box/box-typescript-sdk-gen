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
export declare function serializeCreateInviteRequestBodyArgEnterpriseField(val: CreateInviteRequestBodyArgEnterpriseField): Json;
export declare function deserializeCreateInviteRequestBodyArgEnterpriseField(val: any): CreateInviteRequestBodyArgEnterpriseField;
export declare function serializeCreateInviteRequestBodyArgActionableByField(val: CreateInviteRequestBodyArgActionableByField): Json;
export declare function deserializeCreateInviteRequestBodyArgActionableByField(val: any): CreateInviteRequestBodyArgActionableByField;
export declare function serializeCreateInviteRequestBodyArg(val: CreateInviteRequestBodyArg): Json;
export declare function deserializeCreateInviteRequestBodyArg(val: any): CreateInviteRequestBodyArg;
export declare function serializeCreateInviteQueryParamsArg(val: CreateInviteQueryParamsArg): Json;
export declare function deserializeCreateInviteQueryParamsArg(val: any): CreateInviteQueryParamsArg;
export declare function serializeGetInviteByIdQueryParamsArg(val: GetInviteByIdQueryParamsArg): Json;
export declare function deserializeGetInviteByIdQueryParamsArg(val: any): GetInviteByIdQueryParamsArg;
