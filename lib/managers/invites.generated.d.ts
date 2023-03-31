import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type InvitesManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
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
    readonly auth: InvitesManagerAuthField;
    constructor(fields: Omit<InvitesManager, "createInvite" | "getInviteById">);
    createInvite(requestBody: CreateInviteRequestBodyArg, options?: CreateInviteOptionsArg): Promise<any>;
    getInviteById(inviteId: string, options?: GetInviteByIdOptionsArg): Promise<any>;
}
