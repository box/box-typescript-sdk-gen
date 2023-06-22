import { ShieldInformationBarrierSegmentMember } from "../schemas.generated.js";
import { deserializeShieldInformationBarrierSegmentMember } from "../schemas.generated.js";
import { serializeShieldInformationBarrierSegmentMember } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { ShieldInformationBarrierBase } from "../schemas.generated.js";
import { deserializeShieldInformationBarrierBase } from "../schemas.generated.js";
import { serializeShieldInformationBarrierBase } from "../schemas.generated.js";
import { UserBase } from "../schemas.generated.js";
import { deserializeUserBase } from "../schemas.generated.js";
import { serializeUserBase } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export interface GetShieldInformationBarrierSegmentMembersOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField = "shield_information_barrier_segment_member";
export type CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = "shield_information_barrier_segment";
export interface CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
}
export interface CreateShieldInformationBarrierSegmentMemberRequestBodyArg {
    readonly type?: CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField;
    readonly user: UserBase;
}
export class ShieldInformationBarrierSegmentMembersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ShieldInformationBarrierSegmentMembersManager, "getShieldInformationBarrierSegmentMemberById" | "deleteShieldInformationBarrierSegmentMemberById" | "getShieldInformationBarrierSegmentMembers" | "createShieldInformationBarrierSegmentMember">) {
        Object.assign(this, fields);
    }
    async getShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members/", shieldInformationBarrierSegmentMemberId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierSegmentMember(deserializeJson(response.text));
    }
    async deleteShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members/", shieldInformationBarrierSegmentMemberId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getShieldInformationBarrierSegmentMembers(shieldInformationBarrierSegmentId: string, options: GetShieldInformationBarrierSegmentMembersOptionsArg = {} satisfies GetShieldInformationBarrierSegmentMembersOptionsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members") as string, { method: "GET", params: { ["shield_information_barrier_segment_id"]: shieldInformationBarrierSegmentId, ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async createShieldInformationBarrierSegmentMember(requestBody: CreateShieldInformationBarrierSegmentMemberRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierSegmentMember(deserializeJson(response.text));
    }
}
