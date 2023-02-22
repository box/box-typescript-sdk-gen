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
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
export type ShieldInformationBarrierSegmentMembersManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetShieldInformationBarrierSegmentMembersOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type PostShieldInformationBarrierSegmentMembersRequestBodyArgTypeField = "shield_information_barrier_segment_member";
export type PostShieldInformationBarrierSegmentMembersRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = "shield_information_barrier_segment";
export interface PostShieldInformationBarrierSegmentMembersRequestBodyArgShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: PostShieldInformationBarrierSegmentMembersRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
}
export interface PostShieldInformationBarrierSegmentMembersRequestBodyArg {
    readonly type?: PostShieldInformationBarrierSegmentMembersRequestBodyArgTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly shieldInformationBarrierSegment: PostShieldInformationBarrierSegmentMembersRequestBodyArgShieldInformationBarrierSegmentField;
    readonly user: UserBase;
}
export class ShieldInformationBarrierSegmentMembersManager {
    readonly auth!: ShieldInformationBarrierSegmentMembersManagerAuthField;
    constructor(fields: Omit<ShieldInformationBarrierSegmentMembersManager, "getShieldInformationBarrierSegmentMembersId" | "deleteShieldInformationBarrierSegmentMembersId" | "getShieldInformationBarrierSegmentMembers" | "postShieldInformationBarrierSegmentMembers">) {
        Object.assign(this, fields);
    }
    async getShieldInformationBarrierSegmentMembersId(shieldInformationBarrierSegmentMemberId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members/", shieldInformationBarrierSegmentMemberId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeShieldInformationBarrierSegmentMember(deserializeJSON(response.text) as JSON);
    }
    async deleteShieldInformationBarrierSegmentMembersId(shieldInformationBarrierSegmentMemberId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members/", shieldInformationBarrierSegmentMemberId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getShieldInformationBarrierSegmentMembers(shieldInformationBarrierSegmentId: string, options: GetShieldInformationBarrierSegmentMembersOptionsArg = {} satisfies GetShieldInformationBarrierSegmentMembersOptionsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members") as string, { method: "GET", params: { ["shield_information_barrier_segment_id"]: shieldInformationBarrierSegmentId, ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async postShieldInformationBarrierSegmentMembers(requestBody: PostShieldInformationBarrierSegmentMembersRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeShieldInformationBarrierSegmentMember(deserializeJSON(response.text) as JSON);
    }
}
