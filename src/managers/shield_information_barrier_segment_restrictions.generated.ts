import { ShieldInformationBarrierSegmentRestriction } from "../schemas.generated.js";
import { deserializeShieldInformationBarrierSegmentRestriction } from "../schemas.generated.js";
import { serializeShieldInformationBarrierSegmentRestriction } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { ShieldInformationBarrierBase } from "../schemas.generated.js";
import { deserializeShieldInformationBarrierBase } from "../schemas.generated.js";
import { serializeShieldInformationBarrierBase } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
export type ShieldInformationBarrierSegmentRestrictionsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetShieldInformationBarrierSegmentRestrictionsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgTypeField = "shield_information_barrier_segment_restriction";
export type PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = "shield_information_barrier_segment";
export interface PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
}
export type PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgRestrictedSegmentFieldTypeField = "shield_information_barrier_segment";
export interface PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgRestrictedSegmentField {
    readonly id?: string;
    readonly type?: PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgRestrictedSegmentFieldTypeField;
}
export interface PostShieldInformationBarrierSegmentRestrictionsRequestBodyArg {
    readonly type: PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly shieldInformationBarrierSegment: PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgShieldInformationBarrierSegmentField;
    readonly restrictedSegment: PostShieldInformationBarrierSegmentRestrictionsRequestBodyArgRestrictedSegmentField;
}
export class ShieldInformationBarrierSegmentRestrictionsManager {
    readonly auth!: ShieldInformationBarrierSegmentRestrictionsManagerAuthField;
    constructor(fields: Omit<ShieldInformationBarrierSegmentRestrictionsManager, "getShieldInformationBarrierSegmentRestrictionsId" | "deleteShieldInformationBarrierSegmentRestrictionsId" | "getShieldInformationBarrierSegmentRestrictions" | "postShieldInformationBarrierSegmentRestrictions">) {
        Object.assign(this, fields);
    }
    async getShieldInformationBarrierSegmentRestrictionsId(shieldInformationBarrierSegmentRestrictionId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions/", shieldInformationBarrierSegmentRestrictionId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeShieldInformationBarrierSegmentRestriction(deserializeJSON(response.text) as JSON);
    }
    async deleteShieldInformationBarrierSegmentRestrictionsId(shieldInformationBarrierSegmentRestrictionId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions/", shieldInformationBarrierSegmentRestrictionId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getShieldInformationBarrierSegmentRestrictions(shieldInformationBarrierSegmentId: string, options: GetShieldInformationBarrierSegmentRestrictionsOptionsArg = {} satisfies GetShieldInformationBarrierSegmentRestrictionsOptionsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions") as string, { method: "GET", params: { ["shield_information_barrier_segment_id"]: shieldInformationBarrierSegmentId, ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async postShieldInformationBarrierSegmentRestrictions(requestBody: PostShieldInformationBarrierSegmentRestrictionsRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeShieldInformationBarrierSegmentRestriction(deserializeJSON(response.text) as JSON);
    }
}
