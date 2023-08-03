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
export declare class CreateInviteHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateInviteHeadersArg);
}
export interface GetInviteByIdQueryParamsArg {
    readonly fields?: string;
}
export declare class GetInviteByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetInviteByIdHeadersArg);
}
export declare class InvitesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<InvitesManager, "createInvite" | "getInviteById">);
    createInvite(requestBody: CreateInviteRequestBodyArg, queryParams?: CreateInviteQueryParamsArg, headers?: CreateInviteHeadersArg): Promise<Invite>;
    getInviteById(inviteId: string, queryParams?: GetInviteByIdQueryParamsArg, headers?: GetInviteByIdHeadersArg): Promise<Invite>;
}
export declare function serializeCreateInviteRequestBodyArgEnterpriseField(val: CreateInviteRequestBodyArgEnterpriseField): Json;
export declare function deserializeCreateInviteRequestBodyArgEnterpriseField(val: any): CreateInviteRequestBodyArgEnterpriseField;
export declare function serializeCreateInviteRequestBodyArgActionableByField(val: CreateInviteRequestBodyArgActionableByField): Json;
export declare function deserializeCreateInviteRequestBodyArgActionableByField(val: any): CreateInviteRequestBodyArgActionableByField;
export declare function serializeCreateInviteRequestBodyArg(val: CreateInviteRequestBodyArg): Json;
export declare function deserializeCreateInviteRequestBodyArg(val: any): CreateInviteRequestBodyArg;
