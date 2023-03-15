import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type InvitesManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface PostInvitesRequestBodyArgEnterpriseField {
    readonly id: string;
}
export interface PostInvitesRequestBodyArgActionableByField {
    readonly login?: string;
}
export interface PostInvitesRequestBodyArg {
    readonly enterprise: PostInvitesRequestBodyArgEnterpriseField;
    readonly actionableBy: PostInvitesRequestBodyArgActionableByField;
}
export interface PostInvitesOptionsArg {
    readonly fields?: string;
}
export interface GetInvitesIdOptionsArg {
    readonly fields?: string;
}
export declare class InvitesManager {
    readonly auth: InvitesManagerAuthField;
    constructor(fields: Omit<InvitesManager, "postInvites" | "getInvitesId">);
    postInvites(requestBody: PostInvitesRequestBodyArg, options?: PostInvitesOptionsArg): Promise<any>;
    getInvitesId(inviteId: string, options?: GetInvitesIdOptionsArg): Promise<any>;
}
