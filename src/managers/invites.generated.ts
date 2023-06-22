import { Invite } from "../schemas.generated.js";
import { deserializeInvite } from "../schemas.generated.js";
import { serializeInvite } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
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
export interface CreateInviteOptionsArg {
    readonly fields?: string;
}
export interface GetInviteByIdOptionsArg {
    readonly fields?: string;
}
export class InvitesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<InvitesManager, "createInvite" | "getInviteById">) {
        Object.assign(this, fields);
    }
    async createInvite(requestBody: CreateInviteRequestBodyArg, options: CreateInviteOptionsArg = {} satisfies CreateInviteOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/invites") as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeInvite(deserializeJson(response.text));
    }
    async getInviteById(inviteId: string, options: GetInviteByIdOptionsArg = {} satisfies GetInviteByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/invites/", inviteId) as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeInvite(deserializeJson(response.text));
    }
}
