import { newSerializeInvite } from "../schemas.generated.js";
import { newDeserializeInvite } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { Invite } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
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
export class InvitesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<InvitesManager, "createInvite" | "getInviteById">) {
        Object.assign(this, fields);
    }
    async createInvite(requestBody: CreateInviteRequestBodyArg, queryParams: undefined | CreateInviteQueryParamsArg = {} satisfies CreateInviteQueryParamsArg): Promise<Invite> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/invites") as string, { method: "POST", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeInvite(deserializeJson(response.text));
    }
    async getInviteById(inviteId: string, queryParams: undefined | GetInviteByIdQueryParamsArg = {} satisfies GetInviteByIdQueryParamsArg): Promise<Invite> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/invites/", inviteId) as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeInvite(deserializeJson(response.text));
    }
}
export function newSerializeCreateInviteRequestBodyArgEnterpriseField(val: CreateInviteRequestBodyArgEnterpriseField): Json {
    return { ["id"]: val.id };
}
export function newDeserializeCreateInviteRequestBodyArgEnterpriseField(val: any): CreateInviteRequestBodyArgEnterpriseField {
    const id: string = val.id;
    return { id: id } satisfies CreateInviteRequestBodyArgEnterpriseField;
}
export function newSerializeCreateInviteRequestBodyArgActionableByField(val: CreateInviteRequestBodyArgActionableByField): Json {
    return { ["login"]: val.login };
}
export function newDeserializeCreateInviteRequestBodyArgActionableByField(val: any): CreateInviteRequestBodyArgActionableByField {
    const login: undefined | string = isJson(val.login, "string") ? val.login : void 0;
    return { login: login } satisfies CreateInviteRequestBodyArgActionableByField;
}
export function newSerializeCreateInviteRequestBodyArg(val: CreateInviteRequestBodyArg): Json {
    return { ["enterprise"]: newSerializeCreateInviteRequestBodyArgEnterpriseField(val.enterprise), ["actionableBy"]: newSerializeCreateInviteRequestBodyArgActionableByField(val.actionableBy) };
}
export function newDeserializeCreateInviteRequestBodyArg(val: any): CreateInviteRequestBodyArg {
    const enterprise: CreateInviteRequestBodyArgEnterpriseField = newDeserializeCreateInviteRequestBodyArgEnterpriseField(val.enterprise);
    const actionableBy: CreateInviteRequestBodyArgActionableByField = newDeserializeCreateInviteRequestBodyArgActionableByField(val.actionableBy);
    return { enterprise: enterprise, actionableBy: actionableBy } satisfies CreateInviteRequestBodyArg;
}
export function newSerializeCreateInviteQueryParamsArg(val: CreateInviteQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeCreateInviteQueryParamsArg(val: any): CreateInviteQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies CreateInviteQueryParamsArg;
}
export function newSerializeGetInviteByIdQueryParamsArg(val: GetInviteByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetInviteByIdQueryParamsArg(val: any): GetInviteByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetInviteByIdQueryParamsArg;
}
