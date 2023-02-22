import { Invite } from "../schemas.generated.js";
import { deserializeInvite } from "../schemas.generated.js";
import { serializeInvite } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
export type InvitesManagerAuthField = DeveloperTokenAuth | CCGAuth;
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
export class InvitesManager {
    readonly auth!: InvitesManagerAuthField;
    constructor(fields: Omit<InvitesManager, "postInvites" | "getInvitesId">) {
        Object.assign(this, fields);
    }
    async postInvites(requestBody: PostInvitesRequestBodyArg, options: PostInvitesOptionsArg = {} satisfies PostInvitesOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/invites") as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeInvite(deserializeJSON(response.text) as JSON);
    }
    async getInvitesId(inviteId: string, options: GetInvitesIdOptionsArg = {} satisfies GetInvitesIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/invites/", inviteId) as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeInvite(deserializeJSON(response.text) as JSON);
    }
}
