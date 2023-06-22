import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
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
export interface CreateInviteOptionsArg {
    readonly fields?: string;
}
export interface GetInviteByIdOptionsArg {
    readonly fields?: string;
}
export declare class InvitesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<InvitesManager, "createInvite" | "getInviteById">);
    createInvite(requestBody: CreateInviteRequestBodyArg, options?: CreateInviteOptionsArg): Promise<any>;
    getInviteById(inviteId: string, options?: GetInviteByIdOptionsArg): Promise<any>;
}
