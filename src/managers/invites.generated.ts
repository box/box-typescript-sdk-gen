import { serializeInvite } from "../schemas.generated.js";
import { deserializeInvite } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { Invite } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
import { ByteStream } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { serializeJson } from "../json.js";
import { deserializeJson } from "../json.js";
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
export class CreateInviteHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: CreateInviteHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface GetInviteByIdQueryParamsArg {
    readonly fields?: string;
}
export class GetInviteByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetInviteByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class InvitesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<InvitesManager, "createInvite" | "getInviteById">) {
        Object.assign(this, fields);
    }
    async createInvite(requestBody: CreateInviteRequestBodyArg, queryParams: CreateInviteQueryParamsArg = {} satisfies CreateInviteQueryParamsArg, headers: CreateInviteHeadersArg = new CreateInviteHeadersArg({})): Promise<Invite> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/invites") as string, { method: "POST", params: queryParamsMap, headers: headersMap, body: serializeJson(serializeCreateInviteRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeInvite(deserializeJson(response.text));
    }
    async getInviteById(inviteId: string, queryParams: GetInviteByIdQueryParamsArg = {} satisfies GetInviteByIdQueryParamsArg, headers: GetInviteByIdHeadersArg = new GetInviteByIdHeadersArg({})): Promise<Invite> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/invites/", inviteId) as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeInvite(deserializeJson(response.text));
    }
}
export function serializeCreateInviteRequestBodyArgEnterpriseField(val: CreateInviteRequestBodyArgEnterpriseField): Json {
    return { ["id"]: val.id };
}
export function deserializeCreateInviteRequestBodyArgEnterpriseField(val: any): CreateInviteRequestBodyArgEnterpriseField {
    const id: string = val.id;
    return { id: id } satisfies CreateInviteRequestBodyArgEnterpriseField;
}
export function serializeCreateInviteRequestBodyArgActionableByField(val: CreateInviteRequestBodyArgActionableByField): Json {
    return { ["login"]: val.login == void 0 ? void 0 : val.login };
}
export function deserializeCreateInviteRequestBodyArgActionableByField(val: any): CreateInviteRequestBodyArgActionableByField {
    const login: undefined | string = val.login == void 0 ? void 0 : val.login;
    return { login: login } satisfies CreateInviteRequestBodyArgActionableByField;
}
export function serializeCreateInviteRequestBodyArg(val: CreateInviteRequestBodyArg): Json {
    return { ["enterprise"]: serializeCreateInviteRequestBodyArgEnterpriseField(val.enterprise), ["actionable_by"]: serializeCreateInviteRequestBodyArgActionableByField(val.actionableBy) };
}
export function deserializeCreateInviteRequestBodyArg(val: any): CreateInviteRequestBodyArg {
    const enterprise: CreateInviteRequestBodyArgEnterpriseField = deserializeCreateInviteRequestBodyArgEnterpriseField(val.enterprise);
    const actionableBy: CreateInviteRequestBodyArgActionableByField = deserializeCreateInviteRequestBodyArgActionableByField(val.actionable_by);
    return { enterprise: enterprise, actionableBy: actionableBy } satisfies CreateInviteRequestBodyArg;
}
