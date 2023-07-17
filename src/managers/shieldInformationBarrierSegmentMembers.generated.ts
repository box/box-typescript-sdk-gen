import { serializeShieldInformationBarrierSegmentMember } from "../schemas.generated.js";
import { deserializeShieldInformationBarrierSegmentMember } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeShieldInformationBarrierBase } from "../schemas.generated.js";
import { deserializeShieldInformationBarrierBase } from "../schemas.generated.js";
import { serializeUserBase } from "../schemas.generated.js";
import { deserializeUserBase } from "../schemas.generated.js";
import { ShieldInformationBarrierSegmentMember } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { ShieldInformationBarrierBase } from "../schemas.generated.js";
import { UserBase } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
import { isJson } from "../json.js";
export interface GetShieldInformationBarrierSegmentMembersQueryParamsArg {
    readonly shieldInformationBarrierSegmentId: string;
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
    async getShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId: string): Promise<ShieldInformationBarrierSegmentMember> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members/", shieldInformationBarrierSegmentMemberId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierSegmentMember(deserializeJson(response.text));
    }
    async deleteShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members/", shieldInformationBarrierSegmentMemberId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getShieldInformationBarrierSegmentMembers(queryParams: GetShieldInformationBarrierSegmentMembersQueryParamsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members") as string, { method: "GET", params: prepareParams(serializeGetShieldInformationBarrierSegmentMembersQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async createShieldInformationBarrierSegmentMember(requestBody: CreateShieldInformationBarrierSegmentMemberRequestBodyArg): Promise<ShieldInformationBarrierSegmentMember> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members") as string, { method: "POST", body: serializeJson(serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeShieldInformationBarrierSegmentMember(deserializeJson(response.text));
    }
}
export function serializeGetShieldInformationBarrierSegmentMembersQueryParamsArg(val: GetShieldInformationBarrierSegmentMembersQueryParamsArg): Json {
    return { ["shield_information_barrier_segment_id"]: val.shieldInformationBarrierSegmentId, ["marker"]: val.marker, ["limit"]: val.limit };
}
export function deserializeGetShieldInformationBarrierSegmentMembersQueryParamsArg(val: any): GetShieldInformationBarrierSegmentMembersQueryParamsArg {
    const shieldInformationBarrierSegmentId: string = val.shield_information_barrier_segment_id;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { shieldInformationBarrierSegmentId: shieldInformationBarrierSegmentId, marker: marker, limit: limit } satisfies GetShieldInformationBarrierSegmentMembersQueryParamsArg;
}
export function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val: CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField): Json {
    return val;
}
export function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val: any): CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField\"";
    }
    if (val == "shield_information_barrier_segment_member") {
        return "shield_information_barrier_segment_member";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val: CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField): Json {
    return val;
}
export function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val: any): CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(val: CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val.type) };
}
export function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(val: any): CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = val.type == void 0 ? void 0 : deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val.type);
    return { id: id, type: type } satisfies CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField;
}
export function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg(val: CreateShieldInformationBarrierSegmentMemberRequestBodyArg): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val.type), ["shield_information_barrier"]: val.shieldInformationBarrier == void 0 ? void 0 : serializeShieldInformationBarrierBase(val.shieldInformationBarrier), ["shield_information_barrier_segment"]: serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment), ["user"]: serializeUserBase(val.user) };
}
export function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg(val: any): CreateShieldInformationBarrierSegmentMemberRequestBodyArg {
    const type: undefined | CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField = val.type == void 0 ? void 0 : deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val.type);
    const shieldInformationBarrier: undefined | ShieldInformationBarrierBase = val.shield_information_barrier == void 0 ? void 0 : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
    const shieldInformationBarrierSegment: CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField = deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    const user: UserBase = deserializeUserBase(val.user);
    return { type: type, shieldInformationBarrier: shieldInformationBarrier, shieldInformationBarrierSegment: shieldInformationBarrierSegment, user: user } satisfies CreateShieldInformationBarrierSegmentMemberRequestBodyArg;
}
